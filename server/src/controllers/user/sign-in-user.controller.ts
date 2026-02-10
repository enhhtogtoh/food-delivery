import { Request, Response } from "express";
import { UserModel } from "../../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { sign } from "crypto";

export const signInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const signIn = await UserModel.findOne({ email });
    if (!signIn)
      return res.status(401).send({ message: "Хэрэглэгч олдсонгүй" });

    const isVerifiedPass = await bcrypt.compare(password, signIn.password);
    if (!isVerifiedPass) {
      res
        .status(401)
        .send({ message: "Нууц үг эсвэл нэвтрэх нэр буруу байна" });
    }

    const user = await UserModel.findOne({
      email,
    }).select("password");
    const generatedToken = jwt.sign(
      { userId: signIn._id },
      process.env.JWT_SECRET!,
      {
        expiresIn: "15m",
      },
    );
    res.status(200).send({
      message: "Хэрэглэгч амжилттай нэвтэрлээ",
      data: user,
      generatedToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Нэвтрэх үед алдаа гарлаа", error });
  }
};
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTgzZjk1YWE1OTJmYzM2MjVhYTY1Y2MiLCJpYXQiOjE3NzAyNTY3NDEsImV4cCI6MTc3MDI1NzY0MX0.Lm7UHM8vv_LRtcLzPlvcf-ALHaFRv609Zr5h0TpIjvQ
