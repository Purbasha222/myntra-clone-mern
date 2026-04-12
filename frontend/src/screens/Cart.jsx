import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { useEffect, useState } from "react";
import { LuTag } from "react-icons/lu";

// import { fetchCart } from "../redux/SLice/cartSlice";

const Cart = () => {
  // const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const selectedItems = useSelector((state) => state.cart.selectedItems ?? []);

  // useEffect(() => {
  //   dispatch(fetchCart());
  // }, [dispatch]);

  console.log("cartItems:", cartItems);

  const totalPrice = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-20">
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-2 gap-10 justify-center px-30">
          <div className="flex flex-col gap-y-3">
            {cartItems.map((item, index) => (
              <CartCard item={item} key={index} />
            ))}
          </div>
          <div className="border-l border-gray-300 p-10 border">
            <h2 className="font-bold text-gray-500 mb-5">COUPONS</h2>
            <div className="flex justify-between items-center mb-10">
              <p className="flex gap-5 items-center font-semibold">
                <span>
                  <LuTag />
                </span>{" "}
                Apply Coupons
              </p>
              <button className="border border-pink-600 px-2 text-pink-600 font-semibold">
                APPLY
              </button>
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg font-bold text-gray-500">
                PRICE DETAILS{" "}
                {selectedItems.length > 0 ? (
                  <span>
                    ({selectedItems.length}{" "}
                    {selectedItems.length > 1 ? "Items" : "Item"})
                  </span>
                ) : (
                  ""
                )}
              </h3>

              <div className="flex justify-between">
                <p>Total MRP</p>
                <p>₹{totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Discount on MRP</p>
                <p>-₹{(totalPrice * 0.01).toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Platform Fee</p>
                <p>₹23</p>
              </div>

              <hr className="border-gray-300" />
              <div className="flex justify-between">
                <p className="font-bold ">Total Amount</p>
                <p className="font-bold">
                  ₹{(totalPrice + 23 - totalPrice * 0.01).toFixed(2)}
                </p>
              </div>
              <p className="text-sm">
                By placing the order, you agree to Myntra's{" "}
                <span className="text-sm text-myntra-studio">
                  Terms of Use{" "}
                </span>
                and{" "}
                <span className="text-sm text-myntra-studio">
                  Privacy Policy
                </span>
              </p>
              <button className="border w-full p-2 text-white text-lg font-semibold bg-myntra-studio cursor-pointer">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
