import mongoose, { Document, Model } from "mongoose";
import UserSchema from "../schemas/UserSchema";

export interface IUser extends Document {
  username: string;
  password: string;
}

const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
