import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { useEffect, useState } from "react";
import { LuTag } from "react-icons/lu";
import { fetchCart } from "../redux/SLice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  console.log("cartItems:", cartItems);

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
    <>
      {cartItems.length > 0 ? (
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
          <div className="border-l border-gray-300 p-10">
            <h2 className="font-bold text-gray-500 mb-5">COUPONS</h2>
            <div className="flex justify-between items-center">
              <p className="flex gap-2 items-center font-semibold">
                <span>
                  <LuTag />
                </span>{" "}
                Apply Coupons
              </p>
              <button className="border border-pink-600 px-2 text-pink-600 font-semibold">
                APPLY
              </button>
            </div>
            <p>{total}</p> <button>Buy Now</button>
          </div>
        </div>
      ) : (
        <p>Cart is empty</p>
      )}
    </>
  );
};

export default Cart;
