import { Request, Response } from "express";
import { UserModel } from "../../models";

export const resetPassReq = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const resetPass = await UserModel.findOne({ password });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed" });
  }
};
