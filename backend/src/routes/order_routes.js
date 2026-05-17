import express from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  cancelOrder,
  getMyOrders,
  placeOrder,
} from "../controllers/order.controller.js";

const route = express.Router();

route.post("/", auth, placeOrder);
route.get("/myorders", auth, getMyOrders);
route.put("/:id/cancel", auth, cancelOrder);

export default route;
