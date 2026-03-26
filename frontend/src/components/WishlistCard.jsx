import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlist, setCart } from "../redux/SLice/productSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const WishlistCard = ({ item, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cart);
  const alreadyInCart = cartItems.find((cartItem) => cartItem.id === item.id);
  return (
    <div
      className="flex items-center border"
      key={index}
      onClick={() => navigate(`/products/${item.id}`)}
    >
      <img src={item.thumbnail} alt="" className="h-60 w-80" />
      <div className="flex flex-col">
        <p className="text-lg font-bold text-gray-800">{item.brand}</p>
        <span className="text-gray-600">{item.title}</span>
        <p className="text-yellow-500 font-medium">⭐ {item.rating}</p>
        <p className="text-xl font-semibold text-gray-900">₹{item.price}</p>

        <div className="flex gap-3">
          <button
            className="flex items-center cursor-pointer border p-3"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(removeWishlist(item));
              toast.error("Product removed from wishlist!");
            }}
          >
            <RiDeleteBinLine /> Remove from Wishlist
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              if (alreadyInCart) {
                toast.error("Product already in cart!");
              } else {
                dispatch(setCart(item));
                dispatch(removeWishlist(item));
                toast.success("Product added to cart!");
              }
            }}
            className="flex items-center cursor-pointer border p-3"
          >
            <HiOutlineShoppingBag /> Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
