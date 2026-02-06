import {
  signUpUser,
  signInUser,
  resetPassReq,
  forgotPassword,
} from "../controllers/card";

import { Router } from "express";
import { verifyUser } from "../controllers/card/verify-user.controller";

export const userRouter = Router();

userRouter.post("/sign-up", signUpUser);
userRouter.get("/verify-user", verifyUser)
userRouter.post("/sign-in", signInUser);
userRouter.post("/reset-password", resetPassReq);
userRouter.post("/forgot-password", forgotPassword);

 