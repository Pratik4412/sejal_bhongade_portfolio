import nodemailer from "nodemailer";
import { env } from "../config/env.js";

const { host, port, user, pass, from, notifyTo } = env.smtp;
const enabled = Boolean(host && user && pass && notifyTo);

const transporter = enabled
  ? nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } })
  : null;

const escapeHtml = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/** Fire-and-forget notification. Silently skipped when SMTP is not configured. */
export const notifyNewMessage = async (msg) => {
  if (!enabled) return;
  try {
    await transporter.sendMail({
      from: from || user,
      to: notifyTo,
      replyTo: msg.email,
      subject: `New portfolio enquiry: ${msg.subject || msg.name}`,
      html: `<p><strong>${escapeHtml(msg.name)}</strong> (${escapeHtml(msg.email)})</p>
             <p>${escapeHtml(msg.message).replace(/\n/g, "<br>")}</p>`,
    });
  } catch (err) {
    console.error("Mail notification failed:", err.message);
  }
};
