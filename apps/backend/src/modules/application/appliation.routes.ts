
import { Router } from "express";
import * as applicationController from "./application.controller";

const router = Router();

router.get("/applications", applicationController.getAllApplications);
router.get("/application/:id", applicationController.getApplicationById);
router.post("/applications", applicationController.createApplication);
router.delete("/application/:id", applicationController.deleteApplication);

export default router;