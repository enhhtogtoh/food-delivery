import { Response } from "express";

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed" });
  }
};
