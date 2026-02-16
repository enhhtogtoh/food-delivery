import { Response, Request } from "express";
import { UserModel } from "../../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verifyUserEmail } from "../../utils/mail-utils";
export const signUpUser = async (req: Request, res: Response) => {
  try {
    const { password, email, address, phoneNumber } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
      res
        .status(401)
        .send({ message: "Энэ хэрэглэгч аль хэдийн бүртгэлтэй байна" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const now = Date.now();

    const newUser = await UserModel.create({
      email,
      address,
      phoneNumber,
      password: hashedPassword,
      ttl: new Date(now + 1000 * 60 * 100),
      isVerified: false,
    });

    const verifyToken = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" },
    );
    // const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET!, {
    //   expiresIn: "2h",
    // });

    const verifyLink = `${process.env.BACKEND_API || "http://localhost:10000"}/auth/verify-user?token=${verifyToken}`;

    await verifyUserEmail(email, verifyLink);
    res.status(200).send({
      message: `Бүртгэл амжилттай үүсгэгдлээ. И-мэйлээ баталгаажуулна уу.`,
    });
  } catch (error) {
    console.error(error);

    res.status(200).send({ message: `Бүртгүүлэх үед алдаа гарлаа`, error });
  }
};
