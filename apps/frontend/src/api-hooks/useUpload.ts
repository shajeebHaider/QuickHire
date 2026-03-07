import { useState } from "react";
import { uploadImage } from "../api/upload";

export const useUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upload = async (file: File): Promise<string | null> => {
    setIsUploading(true);
    setError(null);
    try {
      const url = await uploadImage(file);
      return url;
    } catch (err) {
      setError("Upload failed");
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  return { upload, isUploading, error };
};