import { Router } from "express";
import * as categoryController from "./category.controller";

const router = Router();

router.get("/categories", categoryController.getAllCategories);
router.get("/category/:id", categoryController.getCategoryById);
router.post("/categories", categoryController.createCategory);
router.put("/category/:id", categoryController.updateCategory);
router.delete("/category/:id", categoryController.deleteCategory);

export default router;