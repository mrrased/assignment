import { Schema, model, connect, Model } from "mongoose";
import { IUser } from "./users.Interface";

type UserModel = Model<IUser, object>;

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser, UserModel>("User", userSchema);
