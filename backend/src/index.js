import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product_routes.js";
import userRoutes from "./routes/user_routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, "Request");
  next();
});

app.use("/api/products", productRoutes);
app.use("/auth", userRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`server started at http://localhost:${PORT}`),
  );
});
