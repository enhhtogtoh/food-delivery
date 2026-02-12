import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const { user, foodOrderItems } = req.body;
    if (!user || foodOrderItems || foodOrderItems.length === 0) {
      res.status(400).send({ message: "Захиалгын мэдээлэл буруу" });
    }
    let totalPrice = 0;
    for (const item of foodOrderItems) {
      // const food = await FoodOrderModel.findById(item.food);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed" });
  }
};
