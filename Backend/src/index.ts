import express from "express";
import jwt from "jsonwebtoken";
import z from "zod";
import { UserModel } from "./db";

const app = express();
const JWT_SECRET = "jwt_secret";

app.use(express.json());
app.post("/api/v1/signup", async (req, res) => {
  // TODO: zod validation, hash the password
  const userName = req.body.userName;
  const password = req.body.password;

  await UserModel.create({
    userName,
    password,
  });
  res.json({
    msg: "Signup successful",
  });
});

app.post("/api/v1/signin", (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const token = jwt.sign(userName, JWT_SECRET);
});

app.listen(3000);
