import { Request, Response, NextFunction } from 'express';
import { uploadImage } from './upload.services';

export const uploadSingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'No file provided' });
      return;
    }
    const url = await uploadImage(req.file.buffer, 'quickhire');
    res.json({ url });
  } catch (err) {
    next(err);
  }
};
