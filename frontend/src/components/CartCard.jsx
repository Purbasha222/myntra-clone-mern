import { useDispatch } from "react-redux";
import { removeCart } from "../redux/SLice/productSlice";
import { useNavigate } from "react-router-dom";

const CartCard = ({ item, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div key={index} onClick={() => navigate(`/products/${item.id}`)}>
      <img src={item.thumbnail} alt="" />
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(removeCart(item));
        }}
      >
        Remove from Cart
      </button>
      <button>Buy</button>
    </div>
  );
};

export default CartCard;
