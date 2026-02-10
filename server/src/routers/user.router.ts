import {
  signUpUser,
  signInUser,
  resetPassReq,
  forgotPassword,
  userGet,
} from "../controllers/user";

import { Router } from "express";
import { verifyUser } from "../controllers/user/verify-user.controller";

export const userRouter = Router();

userRouter.post("/sign-up", signUpUser);
userRouter.get("/verify-user", verifyUser);
userRouter.post("/sign-in", signInUser);
userRouter.post("/reset-password", resetPassReq);
userRouter.post("/forgot-password", forgotPassword);
userRouter.get("/get-user", userGet);
