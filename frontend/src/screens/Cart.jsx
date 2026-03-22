import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.product.cart);
  return (
    <div>
      {cartItems.map((item, index) => (
        <CartCard item={item} key={index} />
      ))}
    </div>
  );
};

export default Cart;
