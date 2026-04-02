import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/SLice/cartSlice";
import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import toast from "react-hot-toast";

const CartCard = ({ item, index, handleCheckBox, selectedItems }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      key={index}
      onClick={() => navigate(`/products/${item.id}`)}
      className="flex gap-5 p-2 border border-gray-300"
    >
      <input
        type="checkbox"
        className=""
        checked={selectedItems.includes(item.id)}
        onClick={(e) => {
          e.stopPropagation();
          handleCheckBox(item.id);
        }}
      />
      <img src={item.thumbnail} alt="" className="h-60 w-80" />
      <div className="flex flex-col">
        <p className="text-lg font-bold text-gray-800">{item.brand}</p>
        <span className="text-gray-600">{item.title}</span>
        <p className="text-yellow-500 font-medium">⭐ {item.rating}</p>
        <p className="text-xl font-semibold text-gray-900">₹{item.price}</p>
        <div className="flex gap-3">
          <button
            className="flex items-center cursor-pointer border p-2"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(removeFromCart({ productId: item.id }));
              toast.error("Product removed from bag");
            }}
          >
            <HiOutlineShoppingBag /> Remove from Bag
          </button>
          <button className="flex items-center cursor-pointer border p-3">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
