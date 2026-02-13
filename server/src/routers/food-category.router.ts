import { createCategory } from "../controllers";
import { Router } from "express";

export const foodCategoryRouter = Router();
foodCategoryRouter.post("/create-food-category", createCategory);
