import express from "express";
import {
  getAllProducts,
  getProductsByCategory,
  getProuctsByID,
} from "../controllers/products.controller.js";

const route = express.Router();

// Get all products

route.get("/", getAllProducts);

// Get products by category

route.get("/category/:category", getProductsByCategory);

// Get products by id

route.get("/:id", getProuctsByID);

export default route;
