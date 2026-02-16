import { Request, Response } from "express";
import { FoodOrderModel, FoodOrderStatusEnum } from "../../models";
import mongoose from "mongoose";
export const updateFoodOrder = async (req: Request, res: Response) => {
  try {
    const { foodOrderId } = req.params;
    const { status } = req.body;

    if (!foodOrderId) {
      {
        res.status(400).send({ message: "Order ID is required" });
        return;
      }
    }

    if (!Object.values(FoodOrderStatusEnum).includes(status)) {
      {
        res.status(400).send({ message: "Invalid status" });
        return;
      }
    }

    const updatedOrder = await FoodOrderModel.findOneAndUpdate(
      { _id: foodOrderId },
      { status },
      { new: true },
    );

    if (!updatedOrder) {
      {
        res.status(404).send({ message: "Order not found" });
        return;
      }
    }

    return res.status(200).send(updatedOrder);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Failed to update order", error });
  }
};
