import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { foodCategoryId } = req.params;
    const deleted = await FoodCategoryModel.findByIdAndDelete(foodCategoryId);
    if (!deleted) {
      res.status(404).send({ message: "Устгах Category олдсонгүй" });
      return
    }
    res.status(200).send({ message: "Category устгагдлаа" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Алдаа гарлаа", error });
  }
};
