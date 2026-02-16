import { Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const token = req.query.token as string;
    if (!token) {
      res.status(400).send({ message: "token олдсонгүй" });
      return;
    }
    const decode = verify(token, process.env.JWT_SECRET as string);
    console.log(decode);
    res.status(200).send({ message: "И-мэйл амжилттай баталгаажлаа." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed" });
  }
};
