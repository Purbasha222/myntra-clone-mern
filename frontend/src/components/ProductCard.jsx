import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWishlist } from "../redux/SLice/wishlistSlice";
import toast from "react-hot-toast";

const ProductCard = ({ item, index }) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const alreadyInWishlist = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === item.id,
  );

  return (
    <div
      key={`${index}`}
      className="flex flex-col w-55 shadow-lg cursor-pointer relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => navigate(`/products/${item.id}`)}
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        className="h-60 object-cover bg-gray-50"
      />

      {/* {(isHovering || alreadyInWishlist) && (
        <GoHeartFill
          className="absolute top-2 right-2 text-red-500"
          fontSize={20}
        />
      )} */}

      {isHovering && (
        // <div className="flex justify-center items-center relative bg-white mb-3">
        <button
          className="absolute bottom-[75px] left-0 right-0 flex justify-center items-center gap-2 bg-white border border-gray-300 py-1 font-bold cursor-pointer z-10"
          onClick={(e) => {
            e.stopPropagation();
            if (alreadyInWishlist) {
              toast.error("Already in wishlist!");
            } else {
              toast.success("Product added to wishlist");
              dispatch(addToWishlist(item));
            }
          }}
        >
          {alreadyInWishlist ? (
            <GoHeartFill fontSize={20} color="red" />
          ) : (
            <GoHeart fontSize={20} />
          )}{" "}
          WISHLIST
        </button>
        // </div>
      )}

      <div className="text-start px-3">
        <span className="font-bold">{item.brand}</span>
        <p className="text-gray-500 truncate">{item.title}</p>
        <p className="font-bold text-lg">₹{item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
