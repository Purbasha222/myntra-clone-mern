import express from "express";
import { sendOtp, verifyOtp } from "../controllers/users.controller.js";

const route = express.Router();

route.post("/sendOtp", sendOtp);

route.post("/verifyOtp", verifyOtp);

export default route;
