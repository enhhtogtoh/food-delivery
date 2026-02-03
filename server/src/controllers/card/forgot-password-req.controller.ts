import { Request, Response } from "express";
import { UserModel } from "../../models";
import jwt from "jsonwebtoken";

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).send({ message: "User not found" });

    const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "15m",
    });

    res
      .status(200)
      .send({ message: "Reset token generated", data: resetToken });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Forgot password failed" });
  }
};
