// prisma/seed-helpers/uploadToCloudinary.ts
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const uploadToCloudinary = async (
  localPath: string,
  folder: string = "quickhire/logos"
): Promise<string> => {
  const result = await cloudinary.uploader.upload(localPath, { folder });
  return result.secure_url;
};