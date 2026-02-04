import { models, model, Schema, Model, ObjectId } from "mongoose";

export enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}
type FoodOrderItem = {
  food: ObjectId;
  quantity: number;
};

type FoodOrder = {
  user: ObjectId;
  totalPrice: number;
  foodOrderItems: FoodOrderItem[];
  status: FoodOrderStatusEnum;
};

const FoodOrderItemSchema = new Schema<FoodOrderItem>(
  {
    food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
    quantity: { type: Number, required: true, min: 1 },
  },
  { _id: false },
);

export const FoodOrderSchema = new Schema<FoodOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    totalPrice: { type: Number, required: true, min: 0 },
    foodOrderItems: { type: [FoodOrderItemSchema], required: true },
    status: {
      type: String,
      enum: Object.values(FoodOrderStatusEnum),
      default: FoodOrderStatusEnum.PENDING,
      required: true,
    },
  },
  { timestamps: true },
);

export const OrderModel: Model<FoodOrder> =
  models["Order"] || model("Order", FoodOrderSchema);
