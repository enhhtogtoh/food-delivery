import { Request, Response } from "express";
import { FoodOrderModel, FoodModel, FoodOrderStatusEnum } from "../../models";

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const { user, foodOrderItems } = req.body;
    if (!user || foodOrderItems || foodOrderItems.length === 0) {
      res.status(400).send({ message: "Захиалгын мэдээлэл буруу" });
    }
    let totalPrice = 0;
    for (const item of foodOrderItems) {
      const food = await FoodModel.findById(item.food);
      if (!food) {
        res.status(404).send({ message: "Хоолны мэдээлэл олдсонгүй" });
        return;
      }
      totalPrice += food.price * item.quantity;
    }

    const order = await FoodOrderModel.create({
      user,
      foodOrderItems,
      totalPrice,
      status: FoodOrderStatusEnum.PENDING,
    });
    return res.status(201).send({ data: order });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed" });
  }
};
