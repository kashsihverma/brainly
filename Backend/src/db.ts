import mongoose from "mongoose";
import { Schema, model } from "mongoose";


const connection = mongoose.connect(
  "mongodb+srv://kashish1997verma:J4SGW6FfrLBreDUc@cluster0.pphjx.mongodb.net/brainly"
);

const UserSchema = new Schema({
  userName: { type: String, unique: true },
  password: String,
});

export const UserModel = model("user", UserSchema);