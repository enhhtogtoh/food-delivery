import { Response, Request } from "express";
import { UserModel } from "../../models";

export const createNewCard = async (req: Request, res: Response) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(200).send({ message: `Successfully created`, data: newUser });
  } catch (error) {
    console.error(error);
    res.status(200).send({ message: `Failed` });
  }
};
