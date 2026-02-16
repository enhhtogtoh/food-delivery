import { Request, Response } from "express";
import { UserModel } from "../../models";

export const userGet = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.find();
    res.status(200).send({ message: "succes", data: user });
  } catch (error) {
    console.error(error);
    res.status(200).send({ message: "failed", error });
  }
};
