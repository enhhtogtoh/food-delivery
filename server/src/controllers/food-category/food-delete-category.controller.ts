import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const deleted = await FoodCategoryModel.findByIdAndDelete()
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed" });
  }
};
