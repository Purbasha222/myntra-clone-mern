import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const PriceSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedAddress = useSelector((state) => state.order.addresses);
  const selectedItems = useSelector((state) => state.cart.selectedItems);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const orderedItems = cartItems.filter((item) =>
    selectedItems.includes(item.id),
  );
  const totalPrice = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div>
      {orderedItems.map((item, index) => (
        <div key={index} className="flex gap-3 items-center mb-3">
          <img src={item.thumbnail} alt="" className="h-16 w-16 object-cover" />
          <div>
            {/* <p className="font-bold text-lg">{item.brand}</p>
            <p className="text-gray-500 text-sm">{item.title}</p>
            <p className="">Qty: {item.quantity}</p>
            <p className="font-semibold">₹{item.price}</p> */}
          </div>
        </div>
      ))}
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
        {location.pathname !== "/payment" && (
          <button
            onClick={() => navigate("/payment")}
            disabled={selectedAddress.length === 0}
            className={`border w-full p-2 text-white text-lg font-semibold cursor-pointer ${
              selectedAddress.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-myntra-studio"
            }`}
          >
            CONTINUE
          </button>
        )}
      </div>
    </div>
  );
};

export default PriceSummary;
