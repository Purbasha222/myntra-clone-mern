import jwt from "jsonwebtoken";

export const adminAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const data = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    if (data.role === "admin") {
      req.adminId = data.id;
      next();
    } else {
      return res.status(403).json({ message: "Access denied" });
    }
  } catch (error) {
    return res.status(403).json({ message: "Access Denied" });
  }
};
