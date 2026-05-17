import Order from "../models/order.model.js";
import User from "../models/user.model.js";

export const placeOrder = async (req, res) => {
  try {
    const { items, totalPrice, status, paymentMethod, address } = req.body;
    const order = await Order.create({
      user: req.userId,
      items,
      totalPrice,
      status,
      paymentMethod,
      address,
    });
    return res.status(201).json({ message: "Order placed!", order });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    console.log("fetching orders...");
    const order = await Order.find().populate("user", "email");
    console.log("orders:", order);
    return res.status(200).json({ orders: order });
  } catch (error) {
    console.log("error:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId }).sort({
      createdAt: -1,
    });
    return res.status(200).json({ orders });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );
    return res.status(200).json({ message: "Order status updated", order });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: "Cancelled" },
      { new: true },
    );
    return res.status(200).json({ message: "Order cancelled", order });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
