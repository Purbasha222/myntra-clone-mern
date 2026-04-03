import Product from "../models/product.model.js";
import User from "../models/user.model.js";

export const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    const testProduct = await Product.findOne({});
    console.log("Test product:", testProduct);

    const enrichedCart = await Promise.all(
      user.cart.map(async (cartItem) => {
        console.log(
          "Looking for productId:",
          cartItem.productId,
          typeof cartItem.productId,
        );
        const product = await Product.findOne({
          id: Number(cartItem.productId),
        });
        console.log("Found product:", product ? product.title : "NULL");

        if (!product) {
          console.log("Product not found for productId:", cartItem.productId);
          return null;
        }

        return {
          ...product.toObject(),
          quantity: cartItem.quantity,
          productId: cartItem.productId,
        };
      }),
    );
    res.status(200).json(enrichedCart.filter(Boolean));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addToCart = async (req, res) => {
  console.log("addToCart hit", req.userId, req.body);
  try {
    const { productId, quantity } = req.body;
    const user = await User.findById(req.userId);

    if (user.cart.find((item) => item.productId === productId)) {
      res.status(409).json({ message: "Product already in cart" });
    } else {
      user.cart.push({ productId, quantity });
      await user.save();
      return res.status(200).json({ message: "Product added to cart" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const user = await User.findById(req.userId);
    const item = user.cart.find((item) => item.productId === productId);

    if (item) {
      item.quantity = quantity;
      await user.save();
      res.status(200).json({ message: "Quantity updated!" });
    } else {
      return res.status(404).json({ message: "Product not in cart" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = await User.findById(req.userId);
    user.cart = user.cart.filter((item) => item.productId !== productId);
    await user.save();
    return res.status(200).json({ message: "Product removed from cart" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
