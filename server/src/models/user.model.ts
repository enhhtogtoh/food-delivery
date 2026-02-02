import { models, model, Schema, Model, ObjectId } from "mongoose";

enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

type User = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: UserRole;
  orderedFoods: ObjectId[];
  ttl: Date;
  isVerified: Boolean;
};

const UserSchema = new Schema<User>(
  {
    email: [{ type: String, required: true }],
    password: [{ type: String, required: true }],
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
      required: true,
    },

    isVerified: { type: Boolean, default: false, required: true },
    ttl: { type: Date },
  },
  { timestamps: true },
);
export const UserModel: Model<User> =
  models["Users"] || model("Users", UserSchema);
