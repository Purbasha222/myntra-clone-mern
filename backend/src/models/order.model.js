import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    items: { type: Array, required: true },
    totalPrice: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    status: { type: String, required: true },
    address: { type: Object, required: true },
  },
  { timestamps: true },
);

export default mongoose.model("order", orderSchema);
