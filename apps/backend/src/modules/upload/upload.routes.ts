import { Router } from "express";
import { upload } from "../../lib/multer";
import { uploadSingle } from "./upload.controller";

const  router : Router = Router();

router.post("/", upload.single("image"), uploadSingle);

export default router;
