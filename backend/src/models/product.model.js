import mongoose from "mongoose";

const productSchema = new mongoose.Schema({}, { strict: false });

export default mongoose.model("Product", productSchema, "products");
