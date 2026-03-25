import { useDispatch } from "react-redux";
import { removeCart } from "../redux/SLice/productSlice";
import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const CartCard = ({ item, index, handleCheckBox, selectedItems }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      key={index}
      onClick={() => navigate(`/products/${item.id}`)}
      className="flex items-center border"
    >
      <input
        type="checkbox"
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
              dispatch(removeCart(item));
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
