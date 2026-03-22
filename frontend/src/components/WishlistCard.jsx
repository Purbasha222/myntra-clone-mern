import React from "react";
import { useDispatch } from "react-redux";
import { removeWishlist } from "../redux/SLice/productSlice";
import { useNavigate } from "react-router-dom";

const WishlistCard = ({ item, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className="flex items-center"
      key={index}
      onClick={() => navigate(`/products/${item.id}`)}
    >
      <img src={item.thumbnail} alt="" />
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(removeWishlist(item));
        }}
      >
        Remove from Wishlist
      </button>
      <button>Add to Cart</button>
    </div>
  );
};

export default WishlistCard;
