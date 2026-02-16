import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const updateFoodCategory = async (req: Request, res: Response) => {
  try {
    const { foodCategoryId } = req.params;
    const { categoryName } = req.body;

    if (!categoryName) {
      res.status(500).send({ message: "Шинэ category нэр оруулна уу." });
    }
    const updated = await FoodCategoryModel.findByIdAndUpdate(
      foodCategoryId,
      { categoryName },
      { new: true },
    );
    if (!updated) {
      res.status(401).send({ message: "Category not found" });
    }

    res.status(200).send({ message: "Category updated", data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Алдаа гарлаа" , error});
  }
};
