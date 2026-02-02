import {
  createNewCard,
  getNewCard,
  deleteNewCard,
  updateNewCard,
} from "../controllers/card";

import { Router } from "express";

export const userRouter = Router();

userRouter.post("/create-user", createNewCard);
userRouter.get("/get-user", getNewCard);
userRouter.put("/update-user", updateNewCard);
userRouter.delete("./delete-user", deleteNewCard);
