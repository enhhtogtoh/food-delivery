import { Request, Response } from "express";
import { FoodOrderModel } from "../../models/food-order.model";
import { Types } from "mongoose";

export const getFoodOrderByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const orders = await FoodOrderModel.find({ user: userId })
      .populate("foodOrderItems.food")
      .sort({ createdAt: -1 });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed" });
  }
};
