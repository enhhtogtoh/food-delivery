import { Request, Response } from "express";
import { UserModel } from "../../models";
import bcrypt from "bcrypt";
// import { sign } from "crypto";

export const signInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const signIn = await UserModel.findOne({ email });
    if (!signIn) return res.status(401).send({ message: "User not found" });

    const isVerifiedPass = await bcrypt.compare(password, signIn.password);
    if (!isVerifiedPass)
      return res.status(401).send({ message: "Invalid password" });

    const user = await UserModel.findOne({
      email,
    }).select("password");

    return res
      .status(200)
      .send({ message: "User signed in success", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error signing in", error });
  }
};
