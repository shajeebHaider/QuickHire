import cloudinary from "../../lib/cloudinary";
import { Readable } from "stream";


export const uploadImage = (
  fileBuffer: Buffer,
  folder: string = "quickhire"
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error || !result) return reject(error);
        resolve(result.secure_url);
      }
    );

    const readable = new Readable();
    readable.push(fileBuffer);
    readable.push(null);
    readable.pipe(uploadStream);
  });
};

export const deleteImage = async (imageUrl: string): Promise<void> => {
  const parts = imageUrl.split("/");
  const filename = parts[parts.length - 1]?.split(".")[0];
  const folder = parts[parts.length - 2];
  const publicId = `${folder}/${filename}`;
  await cloudinary.uploader.destroy(publicId);
};
