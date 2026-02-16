import {
  signUpUser,
  signInUser,
  resetPass,
  resetPassRequest,
  userGet,
} from "../controllers/user";

import { Router } from "express";
import { verifyUser } from "../controllers/user/verify-user.controller";

export const userRouter = Router();

userRouter.post("/sign-up", signUpUser);
userRouter.get("/verify-user", verifyUser);
userRouter.post("/sign-in", signInUser);
userRouter.post("/reset-password", resetPass);
userRouter.post("/forgot-password", resetPassRequest);
userRouter.get("/get-user", userGet);
