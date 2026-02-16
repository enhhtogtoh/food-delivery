import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const categories = await FoodCategoryModel.find().sort({ createdAt: -1 });
    res.status(200).send({ message: "success", data: categories });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Алдаа гарлаа", error });
  }
};
