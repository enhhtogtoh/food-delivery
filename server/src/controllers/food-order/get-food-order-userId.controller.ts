import { Request, Response } from "express";
import { FoodOrderModel } from "../../models/food-order.model";


export const getFoodOrderByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params as { userId: string };
    const orders = await FoodOrderModel.find({
      user: userId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Алдаа гарлаа" , error});
  }
};
