import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const data = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    console.log("Decoded token data:", data);
    req.userId = data.id;
    console.log("req.userId set to:", req.userId);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
