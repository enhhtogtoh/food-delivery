import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const {categoryName}=req.body
    const create = await FoodCategoryModel.create(req.body);
    res.status(200).send({ message: "Хоол амжиллтай нэмэгдлээ", data: create });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed" });
  }
};
