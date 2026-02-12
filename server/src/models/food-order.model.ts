import { Schema, model, models, Types } from "mongoose";

export enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}

export type FoodOrderItem = {
  food: Types.ObjectId;
  quantity: number;
};

const FoodOrderItemSchema = new Schema<FoodOrderItem>(
  {
    food: {
      type: Schema.Types.ObjectId,
      ref: "Food",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { _id: false },
);

export type FoodOrder = {
  user: Types.ObjectId;
  totalPrice: number;
  foodOrderItems: FoodOrderItem[];
  status: FoodOrderStatusEnum;
};

const FoodOrderSchema = new Schema<FoodOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    foodOrderItems: {
      type: [FoodOrderItemSchema],
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(FoodOrderStatusEnum),
      default: FoodOrderStatusEnum.PENDING,
    },
  },
  {
    timestamps: true,
  },
);

export const FoodOrderModel =
  models["FoodOrder"] || model<FoodOrder>("FoodOrder", FoodOrderSchema);
