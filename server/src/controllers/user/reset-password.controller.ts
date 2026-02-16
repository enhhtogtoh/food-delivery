import { Request, Response } from "express";
import { UserModel } from "../../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const resetPass = async (req: Request, res: Response) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      res.status(400).send({ message: "Missing data" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };

    const user = await UserModel.findById(decoded.userId);
    if (!user) {
      res.status(404).send({ message: "Хэрэглэгч олдсонгүй" });
      return;
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    await user.save();

    res.status(200).send({ message: "Нууц үг амжилттай солигдлоо" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Invalid or expired token", error });
  }
};
