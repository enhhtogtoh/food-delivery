import { Router } from "express";
import {
  createFoodOrder,
  getFoodOrder,
  getFoodOrderByUserId,
  updateFoodOrder,
} from "../controllers/food-order";

export const foodOrderRouter = Router();

foodOrderRouter.get("/get-food-order", getFoodOrder);
foodOrderRouter.get("/food-order-userById", getFoodOrderByUserId);
foodOrderRouter.patch("/food-order-id", updateFoodOrder);
foodOrderRouter.post("/food-create", createFoodOrder);
