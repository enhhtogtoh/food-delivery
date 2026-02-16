import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";
export const getFoodOrder = async (req: Request, res: Response) => {
  try {
    const orders = await FoodOrderModel.find()
      .populate("user")
      .populate("foodOrderItems.food")
      .sort({ createdAt: -1 });
    return res.status(200).send({ data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Захиалгын мэдээлэл авч чадсангүй" , error});
  }
};
