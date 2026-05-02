import { RiDeleteBinLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/SLice/wishlistSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { addToCart } from "../redux/SLice/cartSlice";

const WishlistCard = ({ item, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const alreadyInCart = cartItems.find((cartItem) => cartItem.id === item.id);

  // border flex flex-col w-55 shadow-lg cursor-pointer relative
  return (
    <div
      className="  border flex flex-col w-full shadow-lg cursor-pointer relative"
      key={index}
      onClick={() => navigate(`/products/${item.id}`)}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(removeFromWishlist({ id: item.id }));
          toast.error("Product removed from wishlist!");
        }}
        className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <RxCross2 size={18} />
      </button>

      <img
        src={item.thumbnail}
        alt=""
        className="h-60 object-cover bg-gray-50"
      />
      {/* <div className="flex flex-col"> */}

      <div className="text-start px-3">
        <p className="text-lg font-bold text-gray-800">{item.brand}</p>
        <span className="text-gray-600 block truncate w-full">
          {item.title}
        </span>
        {/* <p className="text-yellow-500 font-medium">⭐ {item.rating}</p> */}
        <p className="text-xl font-semibold text-gray-900">₹{item.price}</p>
      </div>

      {/* <div className="flex gap-3"> */}
      {/* <button
            className="flex items-center cursor-pointer border p-3"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(removeFromWishlist({ id: item.id }));
              toast.error("Product removed from wishlist!");
            }}
          >
            <RiDeleteBinLine fontSize={25} /> Remove from Wishlist
          </button> */}

      <button
        onClick={(e) => {
          e.stopPropagation();
          if (alreadyInCart) {
            toast.error("Product already in cart!");
          } else {
            dispatch(addToCart(item));
            dispatch(removeFromWishlist({ id: item.id }));
            toast.success("Product added to cart!");
          }
        }}
        className="flex items-center cursor-pointer border p-3 bg-myntra-studio text-white font-bold"
      >
        <HiOutlineShoppingBag fontSize={25} /> Move to Bag
      </button>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default WishlistCard;
