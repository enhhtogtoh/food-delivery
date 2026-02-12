import { Types, Schema, model, models, Model } from "mongoose";

export type Food = {
  foodName: string;
  price: number;
  image?: string;
  ingredients?: string;
  category: Types.ObjectId;
};

const FoodSchema = new Schema<Food>(
  {
    foodName: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: { type: String },
    ingredients: { type: String },
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
  },
  { timestamps: true },
);

export const FoodModel: Model<Food> =
  models["Food"] || model("Food", FoodSchema);
