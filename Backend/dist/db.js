"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const connection = mongoose_1.default.connect("mongodb+srv://kashish1997verma:J4SGW6FfrLBreDUc@cluster0.pphjx.mongodb.net/brainly");
const UserSchema = new mongoose_2.Schema({
    userName: { type: String, unique: true },
    password: String,
});
exports.UserModel = (0, mongoose_2.model)("user", UserSchema);
