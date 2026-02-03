import { Response, Request } from "express";
import { UserModel } from "../../models";
import bcrypt from "bcrypt";

export const signUpUser = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) return res.status(401).send({ message: "User exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const now = Date.now();

    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
      ttl: new Date(now + 1000 * 60 * 1),
    });

    res.status(200).send({ message: `Бүртгэл амжилттай`, data: newUser });
  } catch (error) {
    console.error(error);
    res.status(200).send({ message: `Бүртгүүлэх үед алдаа гарлаа`, error });
  }
};
