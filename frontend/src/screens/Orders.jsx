import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProfileSidebar from "../components/ProfileSidebar";
import { useState } from "react";
import { cancelOrder } from "../redux/SLice/orderSlice";
import toast from "react-hot-toast";

const Orders = () => {
  const orders = useSelector((state) => state.order.orders);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalOrderId, setModalOrderId] = useState(null);
  const getDeliveryDate = (dateString) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 5);
    return date.toDateString();
  };

  const handleCancelConfirm = () => {
    dispatch(cancelOrder(modalOrderId));
    toast.success("Order cancelled successfully!");
    setModalOrderId(null);
  };

  return (
    <div className="p-15">
      {modalOrderId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setModalOrderId(null)}
          ></div>
          <div className="relative bg-white rounded-md shadow-xl p-8 w-[380px] flex flex-col items-center gap-4 z-10">
            <p className="text-[#282c3f] font-bold text-lg text-center">
              Cancel Order
            </p>
            <p className="text-gray-500 text-sm text-center">
              Are you sure you want to cancel this order? This action cannot be
              undone.
            </p>
            <div className="flex gap-3 mt-2 w-full">
              <button
                onClick={() => setModalOrderId(null)}
                className="flex-1 border border-[#282c3f] text-[#282c3f] text-[13px] font-bold tracking-widest uppercase py-2.5 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                GO BACK
              </button>
              <button
                onClick={handleCancelConfirm}
                className="flex-1 bg-myntra-kids text-white text-[13px] font-bold tracking-widest uppercase py-2.5 hover:bg-myntra-kids transition-colors cursor-pointer"
              >
                CANCEL ORDER
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-275 mx-auto px-4 py-8 pb-16 flex gap-7 items-start">
        {/* <div className="grid grid-cols-[1fr_3fr] gap-10 px-20 py-10"> */}

        <div className="sticky top-0 shrink-0">
          <ProfileSidebar />
        </div>

        <div className="flex-1 overflow-y-auto max-h-screen no-scrollbar">
          <p className="text-xl font-bold">All orders</p>
          <p className="text-gray-400 text-sm mb-5">from anytime</p>

          {orders.length === 0 ? (
            <p className="text-gray-500">No orders yet!</p>
          ) : (
            [...orders].reverse().map((order, index) => {
              const isCancelled = order.status === "Cancelled";
              return (
                <div
                  key={index}
                  className="relative border border-gray-200 rounded-md p-4 mb-5 shadow-sm"
                >
                  {!isCancelled && (
                    <button
                      onClick={() => setModalOrderId(order.id)}
                      className="absolute top-4 right-4 text-[12px] font-bold tracking-widest uppercase border border-myntra-kids text-myntra-kids px-3 py-1.5 hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      CANCEL
                    </button>
                  )}

                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`w-3 h-3 rounded-full ${isCancelled ? "bg-red-500" : "bg-green-500"}`}
                    ></div>

                    <p
                      className={`font-semibold ${isCancelled ? "text-red-500" : "text-green-600"}`}
                    >
                      {order.status}
                    </p>

                    {!isCancelled && (
                      <p className="text-gray-400 text-sm">
                        · Estimated delivery by {getDeliveryDate(order.date)}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-4 mb-3">
                    {order.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-3 items-start cursor-pointer"
                        onClick={() => navigate(`/products/${item.id}`)}
                      >
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="h-24 w-20 object-cover"
                        />
                        <div>
                          <p className="font-bold text-sm">{item.brand}</p>
                          <p className="text-gray-500 text-sm">{item.title}</p>
                          <p className="text-sm">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr className="mb-3" />

                  <div className="flex justify-between text-sm text-gray-600">
                    <p>
                      Payment:{" "}
                      <span className="font-semibold">
                        {order.paymentMethod}
                      </span>
                    </p>
                    <p>
                      Total:{" "}
                      <span className="font-bold text-gray-900">
                        ₹
                        {(
                          order.totalPrice +
                          23 -
                          order.totalPrice * 0.01
                        ).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Orders;
