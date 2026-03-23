import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setWishlist } from "../redux/SLice/productSlice";

const ProductCard = ({ item, index }) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      key={`${index}`}
      className="flex flex-col h-80 w-50 shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => navigate(`/products/${item.id}`)}
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        className="h-80 w-50 bg-gray-50"
      />
      <div className="text-start p-3">
        {isHovering && (
          <div className="flex justify-center items-center">
            <button
              className="flex justify-center items-center border border-gray-300 px-12 gap-2 font-bold cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setWishlist(item));
              }}
            >
              <GoHeart fontSize={20} /> WISHLIST
            </button>
          </div>
        )}
        <span className="font-bold">{item.brand}</span>
        <p className="text-gray-500">{item.title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
