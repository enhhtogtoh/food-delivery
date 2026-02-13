import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const updateFoodCategory = async (req: Request, res: Response) => {
  try {
    const { foodCategoryId } = req.params;
    const { categoryName } = req.body;
    
    const order = await FoodCategoryModel.findByIdAndUpdate();
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed" });
  }
};
