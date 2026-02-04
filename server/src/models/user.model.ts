import { models, model, Schema, Model, ObjectId } from "mongoose";

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export type User = {
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
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
      required: false,
    },

    isVerified: { type: Boolean, default: false, required: false },
    ttl: { type: Date, required: true },
  },
  { timestamps: true },
);

UserSchema.index({ ttl: 1 }, { expireAfterSeconds: 0 });

export const UserModel: Model<User> =
  models["Users"] || model("Users", UserSchema);
