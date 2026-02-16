import { Request, Response } from "express";
import { UserModel } from "../../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(400)
        .send({ message: "Нэвтрэх нэр болон нууц үгээ оруулна уу." });
      return;
    }
    const signIn = await UserModel.findOne({ email });
    if (!signIn) {
      res.status(401).send({ message: "Хэрэглэгч олдсонгүй" });
      return;
    }

    const isVerifiedPass = await bcrypt.compare(password, signIn.password);
    if (!isVerifiedPass) {
      res.status(401).send({ message: "Нууц үг буруу байна" });
      return;
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
