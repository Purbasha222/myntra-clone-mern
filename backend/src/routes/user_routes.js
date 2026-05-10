import express from "express";
import {
  deleteUser,
  sendOtp,
  verifyOtp,
} from "../controllers/users.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const route = express.Router();

route.post("/sendOtp", sendOtp);

route.post("/verifyOtp", verifyOtp);

route.delete("/profile/delete-account", auth, deleteUser);

export default route;
