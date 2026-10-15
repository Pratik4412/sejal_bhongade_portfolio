# Portfolio Backend (Express + MongoDB)

REST API and CMS for the UI/UX designer portfolio. The public website reads content from `/api/public/*`; the admin panel edits it through `/api/admin/*` (login required).

## 1. Quick start

```bash
npm install
cp .env.example .env        # fill MONGO_URI, JWT_SECRET, ADMIN_*, CLOUDINARY_*
npm run seed                # creates the first admin + starter content
npm run dev                 # http://localhost:5000
```

`npm run seed` only fills **empty** collections, so it is safe to re-run. `npm run seed:reset` wipes content (not admins, messages or subscribers) and re-seeds.

`npm run content:export` regenerates `PORTFOLIO_CONTENT.md` (the page-by-page copy) from `src/seed/content.js`.

## 2. Folder structure

```
src/
  config/        env (validated), db, cloudinary
  models/        Admin, SiteContent (singleton), Project, Article, collections.js (Service, ProcessStep,
                 Experience, Tool, Testimonial, Award, Message, Subscriber)
  controllers/   crudFactory (generic admin CRUD), auth, settings, upload, dashboard, public
  middleware/    auth (JWT cookie), errorHandler, upload (multer), rateLimiters
  routes/        publicRoutes, authRoutes, adminRoutes
  seed/          content.js (all starter copy), seed.js, exportContent.js
  utils/         AppError, asyncHandler, slug, mailer
```

Adding a new editable list later = one Mongoose model + one `buildCrudRouter({...})` call in `adminRoutes.js`.

## 3. API reference

### Public (no auth, cached 60s)
| Method | Path | Returns |
|---|---|---|
| GET | `/api/public/settings` | hero, about, section headings, contact, footer, SEO |
| GET | `/api/public/home` | settings + services + featured projects + testimonials + awards + 3 latest articles |
| GET | `/api/public/about` | settings + process steps + tools + experiences + services + testimonials |
| GET | `/api/public/projects?category=` | published projects (list view, no case-study text) |
| GET | `/api/public/projects/:slug` | one project with full case study |
| GET | `/api/public/articles`, `/articles/:slug` | published articles |
| POST | `/api/public/contact` | `{ name, email, subject, message, website }` (`website` is a honeypot, leave empty) |
| POST | `/api/public/subscribe` | `{ email }` |

Only `isActive: true` and `status: "published"` records are public. Projects include a `thumbnail` URL (top of the tall screenshot, cropped by Cloudinary) next to the full `image`.

### Auth
| Method | Path | Notes |
|---|---|---|
| POST | `/api/auth/login` | sets an httpOnly cookie; rate limited to 10 attempts / 15 min |
| POST | `/api/auth/logout` | clears the cookie |
| GET | `/api/auth/me` | current admin |
| PUT | `/api/auth/password` | `{ currentPassword, newPassword }`, invalidates older sessions |

### Admin (cookie required)
| Resource | Path | Operations |
|---|---|---|
| Dashboard | `/api/admin/dashboard` | GET |
| Site settings | `/api/admin/settings` | GET, PUT |
| Image upload | `/api/admin/upload` | POST multipart: `image` file + optional `folder` |
| Projects | `/api/admin/projects` | list, get, create, update, delete, `PUT /reorder` |
| Services, Process steps, Experiences, Tools, Testimonials, Awards | `/api/admin/services` etc. | same, including reorder |
| Articles | `/api/admin/articles` | list, get, create, update, delete |
| Messages | `/api/admin/messages` | list, get, mark read, delete |
| Subscribers | `/api/admin/subscribers` | list, delete, `GET /export` (CSV) |

List endpoints accept `?q=` (search), `?status=draft|published`, `?page=` and `?limit=`.

## 4. Design decisions (and why)

- **One generic CRUD factory** instead of 8 copy-pasted controllers: fewer bugs, and every resource gets the same whitelisting, 404s and image cleanup.
- **Field whitelisting** on every write, so a client cannot set `_id`, timestamps or unknown fields (mass-assignment protection).
- **Images are uploaded first, then referenced.** `/admin/upload` returns `{ url, publicId }`; the form saves that object. When a record is updated or deleted, replaced images are removed from Cloudinary. If an admin uploads and then cancels, that one file is orphaned: schedule a periodic Cloudinary cleanup if this matters.
- **httpOnly cookie sessions** (not localStorage) so a front-end XSS cannot read the token.
- **Contact form:** honeypot field, per-IP rate limit, email notification via Nodemailer when SMTP is configured.
- **Security middleware:** helmet, strict CORS allow-list, `express-mongo-sanitize` against NoSQL injection, JSON body limit 1MB, global rate limit, bcrypt cost 12, constant-time login (no user enumeration).
- **Article `content` is Markdown stored as text.** Render it on the website with a Markdown parser **plus a sanitizer** (e.g. `react-markdown` or DOMPurify) so pasted HTML can never run scripts.

## 5. Deploying on AWS EC2 (PM2 + Nginx)

Host the website, admin panel and API on the **same domain** so the session cookie is first-party:

```
yourdomain.com          -> website build
yourdomain.com/admin    -> admin panel build (set Vite base "/admin/")
yourdomain.com/api      -> proxied to this server on :5000
```

```nginx
location /api/ {
    proxy_pass http://127.0.0.1:5000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    client_max_body_size 25m;   # screenshots up to 20MB
}
```

Production `.env`: `NODE_ENV=production`, `COOKIE_SECURE=true`, a 48+ byte `JWT_SECRET`, and `CLIENT_ORIGINS=https://yourdomain.com`. Start with `pm2 start ecosystem.config.cjs --env production && pm2 save`.

If you must host the admin on a different site (e.g. `admin.otherdomain.com`), set `COOKIE_SAMESITE=none` + HTTPS, and add a CSRF defence.

## 6. Cloudinary notes for tall screenshots

- Free plan: 10MB per image. A 20MB limit is enforced server-side; compress (WebP) full-page screenshots before upload.
- Cards use `thumbnail` (top ~1200x1600 crop, auto format and quality); the viewer modal uses `image`.

## 7. Not included yet (good next steps)

- Automated tests (Jest + Supertest + mongodb-memory-server) and a CI pipeline.
- Multiple admins and roles, password reset by email, 2FA.
- Gallery images per project and drag-and-drop ordering (the `reorder` endpoint already exists).
- Scheduled cleanup of orphaned Cloudinary uploads.
