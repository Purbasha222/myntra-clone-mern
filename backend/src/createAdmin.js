import "dotenv/config.js";
import bcrypt from "bcryptjs";
import { connectDB } from "./config/db.js";
import Admin from "./models/admin.model.js";

connectDB().then(async () => {
  await Admin.create({
    email: "purbashagoswami2@gmail.com",
    password: "purba@2005",
  });
  console.log("✅ Admin created!");
  process.exit(0);
});
