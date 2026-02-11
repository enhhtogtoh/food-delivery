import { Response } from "express";
import { FoodOrderModel } from "../../models";


export const createFoodOrder = async (req: Request, res: Response) => {
  try {

    // if (!user|| !foodOrderItems || foodOrderItems.length === 0){ res.status(500).send({message: "Захиалгын мэдээлэл буруу"})}

  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed" });
  }
};
