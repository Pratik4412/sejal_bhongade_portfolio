import mongoose from "mongoose";
import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";
import { deleteImage } from "../config/cloudinary.js";

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Builds a full admin CRUD router for a model.
 *
 * - allowedFields: whitelist (prevents mass-assignment of _id, timestamps, etc.)
 * - imageFields:   fields shaped { url, publicId }; replaced/removed files are deleted from Cloudinary
 * - ops:           which endpoints to expose
 */
export const buildCrudRouter = ({
  Model,
  label,
  allowedFields,
  imageFields = [],
  searchFields = [],
  sort = { order: 1, createdAt: -1 },
  ops = ["list", "get", "create", "update", "remove", "reorder"],
}) => {
  const router = Router();
  const has = (op) => ops.includes(op);

  const pick = (body = {}) =>
    allowedFields.reduce((acc, key) => {
      if (Object.prototype.hasOwnProperty.call(body, key)) acc[key] = body[key];
      return acc;
    }, {});

  const findOr404 = async (id) => {
    if (!mongoose.isValidObjectId(id)) throw new AppError("Invalid id", 400);
    const doc = await Model.findById(id);
    if (!doc) throw new AppError(`${label} not found`, 404);
    return doc;
  };

  if (has("list")) {
    router.get(
      "/",
      asyncHandler(async (req, res) => {
        const { q, status } = req.query;
        const page = Math.max(1, parseInt(req.query.page, 10) || 1);
        const limit = Math.min(200, Math.max(1, parseInt(req.query.limit, 10) || 100));

        const filter = {};
        if (status && Model.schema.path("status") && ["draft", "published"].includes(status)) {
          filter.status = status;
        }
        if (q && searchFields.length) {
          const regex = { $regex: escapeRegex(String(q)), $options: "i" };
          filter.$or = searchFields.map((f) => ({ [f]: regex }));
        }

        const [items, total] = await Promise.all([
          Model.find(filter)
            .sort(sort)
            .skip((page - 1) * limit)
            .limit(limit),
          Model.countDocuments(filter),
        ]);
        res.json({ success: true, items, total, page, pages: Math.ceil(total / limit) || 1 });
      })
    );
  }

  // Must be registered before "/:id"
  if (has("reorder")) {
    router.put(
      "/reorder",
      asyncHandler(async (req, res) => {
        const { ids } = req.body;
        if (!Array.isArray(ids) || !ids.every((id) => mongoose.isValidObjectId(id))) {
          throw new AppError("`ids` must be an array of valid ids", 400);
        }
        await Model.bulkWrite(ids.map((id, index) => ({ updateOne: { filter: { _id: id }, update: { $set: { order: index } } } })));
        res.json({ success: true });
      })
    );
  }

  if (has("get")) {
    router.get(
      "/:id",
      asyncHandler(async (req, res) => {
        res.json({ success: true, item: await findOr404(req.params.id) });
      })
    );
  }

  if (has("create")) {
    router.post(
      "/",
      asyncHandler(async (req, res) => {
        const item = await Model.create(pick(req.body));
        res.status(201).json({ success: true, item });
      })
    );
  }

  if (has("update")) {
    router.put(
      "/:id",
      asyncHandler(async (req, res) => {
        const doc = await findOr404(req.params.id);
        const previous = imageFields.map((f) => doc[f]?.publicId);

        doc.set(pick(req.body));
        await doc.save();

        // Remove images that were replaced or cleared by this update.
        imageFields.forEach((field, i) => {
          if (previous[i] && previous[i] !== doc[field]?.publicId) deleteImage(previous[i]);
        });
        res.json({ success: true, item: doc });
      })
    );
  }

  if (has("remove")) {
    router.delete(
      "/:id",
      asyncHandler(async (req, res) => {
        const doc = await findOr404(req.params.id);
        await doc.deleteOne();
        imageFields.forEach((field) => deleteImage(doc[field]?.publicId));
        res.json({ success: true, message: `${label} deleted` });
      })
    );
  }

  return router;
};
