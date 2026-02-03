import {
  signUpUser,
  signInUser,
  updateNewCard,
  resetPassReq,
} from "../controllers/card";

import { Router } from "express";

export const userRouter = Router();

userRouter.post("/sign-up", signUpUser);
userRouter.post("/sign-in", signInUser);
userRouter.put("/update-user", resetPassReq);
userRouter.delete("./delete-user", resetPassReq);
