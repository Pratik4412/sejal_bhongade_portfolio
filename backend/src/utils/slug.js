import slugify from "slugify";

export const toSlug = (value) => slugify(String(value || ""), { lower: true, strict: true });

/** Returns a slug that is unique within the model (appends -2, -3, ...). */
export const uniqueSlug = async (Model, source, excludeId) => {
  const base = toSlug(source) || "item";
  let slug = base;
  let n = 1;
  // eslint-disable-next-line no-await-in-loop
  while (await Model.exists({ slug, ...(excludeId ? { _id: { $ne: excludeId } } : {}) })) {
    n += 1;
    slug = `${base}-${n}`;
  }
  return slug;
};
