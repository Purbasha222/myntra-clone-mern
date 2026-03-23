import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.product.cart);
  return (
    <div className="flex flex-col gap-y-5 p-20">
      {cartItems.map((item, index) => (
        <CartCard item={item} key={index} />
      ))}
    </div>
  );
};

export default Cart;
