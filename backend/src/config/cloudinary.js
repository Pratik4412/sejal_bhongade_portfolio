import { v2 as cloudinary } from "cloudinary";
import { env } from "./env.js";

const { cloudName, apiKey, apiSecret } = env.cloudinary;

export const isCloudinaryConfigured = Boolean(cloudName && apiKey && apiSecret);

if (isCloudinaryConfigured) {
  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret, secure: true });
}

/** Upload an in-memory buffer. Resolves to { url, publicId }. */
export const uploadBuffer = (buffer, folder = "portfolio") =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (error, result) => {
        if (error) return reject(error);
        resolve({ url: result.secure_url, publicId: result.public_id });
      }
    );
    stream.end(buffer);
  });

/** Best-effort delete. Never throws: a failed cleanup must not fail the request. */
export const deleteImage = async (publicId) => {
  if (!publicId || !isCloudinaryConfigured) return;
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (err) {
    console.error(`Cloudinary delete failed for ${publicId}:`, err.message);
  }
};

/**
 * Card thumbnail for very tall full-page screenshots: crops the TOP of the image
 * (g_north) to a fixed box and serves modern formats. Falls back to the original URL.
 */
export const thumbUrl = (url, { width = 1200, height = 1600 } = {}) => {
  if (!url || !url.includes("/image/upload/")) return url;
  return url.replace(
    "/image/upload/",
    `/image/upload/c_fill,g_north,w_${width},h_${height},f_auto,q_auto/`
  );
};
