import User from "../models/user.model.js";

export const getWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.status(200).json(user.wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = await User.findById(req.userId);

    if (user.wishlist.find((item) => item.productId === productId)) {
      res.status(401).json({ message: "Product already in wishlist" });
    } else {
      user.wishlist.push({ productId });
      await user.save();
      return res.status(200).json({ message: "Product added in wishlist" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const moveToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = await User.findById(req.userId);
    if (user.wishlist.find((item) => item.productId === productId)) {
      user.cart.push({ productId });
      user.wishlist = user.wishlist.filter(
        (item) => item.productId !== productId,
      );
      await user.save();
      return res.status(200).json({ message: "Product moved to cart" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = await User.findById(req.userId);

    user.wishlist = user.wishlist.filter(
      (item) => item.productId !== productId,
    );
    await user.save();

    return res.status(200).json({ message: "Product removed from wishlist" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
