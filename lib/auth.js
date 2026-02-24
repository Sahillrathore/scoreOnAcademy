import jwt from "jsonwebtoken";

export function signToken(adminId) {
  return jwt.sign({ id: adminId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}