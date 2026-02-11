import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";
export const getFoodOrder = async (req: Request, res: Response)=> {
try {
    const orders = await  FoodOrderModel.find()
    
} catch (error) {
    
}
}