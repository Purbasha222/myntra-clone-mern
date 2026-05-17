import express from "express";
import {
  addProduct,
  deleteProduct,
  deleteUser,
  getAllUsers,
  getStats,
  login,
  updateProduct,
} from "../controllers/admin.controller.js";
import { getAllProducts } from "../controllers/products.controller.js";
import { adminAuth } from "../middlewares/adminAuth.middleware.js";
import {
  getAllOrders,
  updateOrderStatus,
} from "../controllers/order.controller.js";

const route = express.Router();

route.post("/login", login);
route.get("/getAllUsers", adminAuth, getAllUsers);
route.delete("/deleteUser/:id", adminAuth, deleteUser);
route.get("/getStats", adminAuth, getStats);
route.get("/getAllProducts", adminAuth, getAllProducts);
route.post("/addProduct", adminAuth, addProduct);
route.put("/updateProduct/:id", adminAuth, updateProduct);
route.delete("/deleteProduct/:id", adminAuth, deleteProduct);
route.get("/orders", adminAuth, getAllOrders);
route.put("/orders/:id/status", adminAuth, updateOrderStatus);

export default route;
