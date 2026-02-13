import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const foodCategoryById = async (req: Request, res: Response) => {
  try {
    const orders = await FoodCategoryModel.findByIdAndUpdate();
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed" });
  }
};
