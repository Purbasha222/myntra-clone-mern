import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/SLice/cartSlice";
import { handleCheckBox } from "../redux/SLice/cartSlice";
import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineCancel } from "react-icons/md";
import toast from "react-hot-toast";

const CartCard = ({ item, index }) => {
  const selectedItems = useSelector((state) => state.cart.selectedItems ?? []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div key={index} className="relative flex gap-3 p-2 border border-gray-300">
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={selectedItems.includes(item.id)}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(handleCheckBox({ id: item.id }));
        }}
      />
      <img
        src={item.thumbnail}
        alt=""
        className="h-60 w-55"
        onClick={() => navigate(`/products/${item.id}`)}
      />
      <div className="flex flex-col w-full">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(removeFromCart({ id: item.id }));
            toast.error("Product removed from bag");
          }}
        >
          <MdOutlineCancel fontSize={24} />
        </button>
        <p className="text-lg font-bold text-gray-800">{item.brand}</p>
        <span className="text-gray-600">{item.title}</span>
        <p className="text-yellow-500 font-medium">⭐ {item.rating}</p>
        <div className="flex items-center border border-gray-300 w-fit mt-1">
          <button
            className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              if (item.quantity === 1) return;
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity - 1,
                }),
              );
            }}
          >
            -
          </button>
          <span className="px-4 py-1 border-x border-gray-300 text-sm font-semibold">
            {item.quantity}
          </span>
          <button
            className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity + 1 }),
              );
            }}
          >
            +
          </button>
        </div>
        <p className="text-xl font-semibold text-gray-900 mt-2">
          ₹{item.price * item.quantity}
        </p>
        <div className="flex gap-3">
          {/* <button
            className="flex items-center cursor-pointer p-2 border border-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(removeFromCart({ id: item.id }));
              toast.error("Product removed from bag");
            }}
          >
            <HiOutlineShoppingBag /> Remove from Bag
          </button> */}
          {/* <button className="flex items-center cursor-pointer bg-myntra-studio font-bold text-white p-2 px-3">
            Buy
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
