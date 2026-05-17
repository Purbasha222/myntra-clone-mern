import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product_routes.js";
import userRoutes from "./routes/user_routes.js";
import adminRoutes from "./routes/admin_routes.js";
import orderRoutes from "./routes/order_routes.js";
// import cartRoutes from "./routes/cart_routes.js";
// import wishlistRoutes from "./routes/wishlist_routes.js";

// dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, "Request");
  next();
});

// in your main server/index.js or app.js
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/auth", userRoutes);
app.use("/api/orders", orderRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/wishlist", wishlistRoutes);
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`server started at http://localhost:${PORT}`),
  );
});
