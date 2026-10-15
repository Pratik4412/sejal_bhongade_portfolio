import asyncHandler from "../utils/asyncHandler.js";
import { Subscriber } from "../models/collections.js";

// Prefix risky leading characters so spreadsheet apps do not execute a cell as a formula.
const csvCell = (value) => {
  const s = String(value ?? "");
  const safe = /^[=+\-@]/.test(s) ? `'${s}` : s;
  return `"${safe.replace(/"/g, '""')}"`;
};

export const exportSubscribersCsv = asyncHandler(async (_req, res) => {
  const subs = await Subscriber.find().sort({ createdAt: -1 });
  const rows = ["email,subscribed_at", ...subs.map((s) => `${csvCell(s.email)},${csvCell(s.createdAt.toISOString())}`)];
  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", 'attachment; filename="subscribers.csv"');
  res.send(rows.join("\n"));
});
