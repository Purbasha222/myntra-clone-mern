import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    isVerified: { type: Boolean, default: false },
    otp: { type: String, default: null },
    otpExpiresAt: { type: Date, default: null },
    cart: [
      { productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" } },
    ],
    wishlist: [
      { productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" } },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("user", userSchema);
