import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;
    if (!categoryName) {
      res.status(400).send({ message: "Category нэр оруулна уу" });
    }
    const category = await FoodCategoryModel.findOne({ categoryName });
    if (category) {
      res.status(409).send({ message: "Ийм нэртэй category аль хэдийн байна" });
    }
    const create = await FoodCategoryModel.create({ categoryName });

    res
      .status(200)
      .send({ message: "Category амжиллтай нэмэгдлээ", data: create });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed" });
  }
};
