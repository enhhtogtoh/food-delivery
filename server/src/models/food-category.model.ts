import { Model, Schema, model, models } from "mongoose";
export type FoodCategory = {
  categoryName: string;
};
const FoodCategorySchema = new Schema<FoodCategory>(
  { categoryName: { type: String, required: true } },
  { timestamps: true },
);

export const FoodCategoryModel: Model<FoodCategory> =
  models["FoodCategory"] || model("FoodCategory", FoodCategorySchema);
