import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placeOrder, setPaymentMethod } from "../redux/SLice/orderSlice";
import PriceSummary from "../components/PriceSummary";
import { MdQrCode2 } from "react-icons/md";
import toast from "react-hot-toast";
import { removeFromCart } from "../redux/SLice/cartSlice";

const paymentMethods = [
  { id: "COD", label: "Cash On Delivery (Cash/UPI)" },
  { id: "UPI", label: "UPI (Pay via any App)" },
  { id: "CARD", label: "Credit/Debit Card" },
  { id: "WALLETS", label: "Wallets" },
  { id: "PAYLATER", label: "Pay Later" },
  { id: "EMI", label: "EMI" },
  { id: "NETBANKING", label: "Net Banking" },
];

const Payment = () => {
  const [selected, setSelected] = useState("UPI");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const selectedItems = useSelector((state) => state.cart.selectedItems);
  const orderedItems = cartItems.filter((item) =>
    selectedItems.includes(item.id),
  );

  const addresses = useSelector((state) => state.order.addresses);
  const selectedAddressIndex = useSelector(
    (state) => state.order.selectedAddressIndex,
  );

  const totalPrice = orderedItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0,
  );

  const handleConfirm = () => {
    dispatch(setPaymentMethod(selected));
    dispatch(
      placeOrder({
        items: orderedItems,
        address: addresses[selectedAddressIndex],
        paymentMethod: selected,
        totalPrice: totalPrice,
        date: new Date().toISOString(),
      }),
    );
    selectedItems.map((id) => dispatch(removeFromCart({ id })));
    toast.success("Order placed successfully!");
    navigate("/orders");
  };

  return (
    <div className="grid grid-cols-[3fr_2fr] gap-10 px-50 py-10">
      {/* LEFT */}
      <div>
        {/* Bank Offer */}
        <div className="border border-gray-300 p-4 mb-4 flex gap-3 items-center">
          <p className="font-semibold">Bank Offer</p>
          <p className="text-sm text-gray-500">
            7.5% Assured Cashback* on a minimum spend of ₹100.
          </p>
        </div>

        <h2 className="font-bold text-lg mb-3">Choose Payment Mode</h2>

        {/* MynCash */}
        <div className="border border-gray-300 p-4 mb-4 flex items-center gap-3">
          <input type="checkbox" />
          <div>
            <p className="font-semibold">MynCash</p>
            <p className="text-sm text-gray-500">Total Active MynCash: ₹12</p>
          </div>
        </div>

        {/* Payment methods split */}
        <div className="border border-gray-300 flex">
          {/* Sidebar */}
          <div className="flex flex-col w-48 border-r border-gray-300">
            <p className="text-myntra-studio font-semibold text-sm p-3 flex items-center gap-2">
              ⭐ Recommended
            </p>
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelected(method.id)}
                className={`text-left px-4 py-4 text-sm border-b border-gray-300 cursor-pointer flex items-center gap-2
                  ${selected === method.id ? "border-l-4 border-l-myntra-studio text-myntra-studio font-semibold bg-white" : "text-gray-700 bg-gray-50"}`}
              >
                {method.label}
              </button>
            ))}
          </div>

          {/* Right panel */}
          <div className="flex-1 p-6">
            {selected === "UPI" && (
              <div>
                <p className="font-bold text-lg mb-4">Pay using UPI</p>
                <div className="flex items-center gap-3 mb-4">
                  <input type="radio" defaultChecked />
                  <MdQrCode2 size={32} className="text-gray-600" />
                  <p className="font-semibold">Scan & Pay</p>
                </div>
                <button
                  onClick={handleConfirm}
                  className="bg-myntra-studio text-white font-bold px-6 py-2 mt-4 cursor-pointer"
                >
                  CONFIRM ORDER
                </button>
              </div>
            )}
            {selected === "COD" && (
              <div>
                <p className="font-bold text-lg mb-2">Cash On Delivery</p>
                <p className="text-gray-500 text-sm mb-4">
                  Pay at the time of delivery
                </p>
                <button
                  onClick={handleConfirm}
                  className="bg-myntra-studio text-white font-bold px-6 py-2 cursor-pointer"
                >
                  CONFIRM ORDER
                </button>
              </div>
            )}
            {!["UPI", "COD"].includes(selected) && (
              <div className="text-gray-400 mt-10 text-center">
                <p>Select a payment method to continue</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT - reuse PriceSummary */}
      <PriceSummary />
    </div>
  );
};

export default Payment;
