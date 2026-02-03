import {
  signUpUser,
  signInUser,
  resetPassReq,
  forgotPassword,
} from "../controllers/card";

import { Router } from "express";

export const userRouter = Router();

userRouter.post("/sign-up", signUpUser);
userRouter.post("/sign-in", signInUser);
userRouter.post("/reset-password", resetPassReq);
userRouter.post("/forgot-password", forgotPassword);
