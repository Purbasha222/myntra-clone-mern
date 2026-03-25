import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.product.cart);
  const [selectedItems, setSelectedItems] = useState([]);
  const handleCheckBox = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const total = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="grid grid-cols-2 gap-10 justify-center p-20">
      <div className="flex flex-col gap-y-3">
        {cartItems.map((item, index) => (
          <CartCard
            item={item}
            key={index}
            selectedItems={selectedItems}
            handleCheckBox={handleCheckBox}
          />
        ))}
      </div>
      <div className="border">
        <p>COUPONS</p>
        <div>
          <p>Apply Coupons</p>
          <button>APPLY</button>
        </div>
        <p>{total}</p> <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
