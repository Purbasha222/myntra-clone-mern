import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProfileSidebar from "../components/ProfileSidebar";

const Orders = () => {
  const orders = useSelector((state) => state.order.orders);
  const navigate = useNavigate();

  const getDeliveryDate = (dateString) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 5);
    return date.toDateString();
  };

  return (
    <div className="p-15">
      <div className="max-w-275 mx-auto px-4 py-8 pb-16 flex gap-7 items-start">
        {/* <div className="grid grid-cols-[1fr_3fr] gap-10 px-20 py-10"> */}
        {/* LEFT SIDEBAR */}
        <ProfileSidebar />

        {/* RIGHT - Orders */}
        <div>
          <p className="text-xl font-bold">All orders</p>
          <p className="text-gray-400 text-sm mb-5">from anytime</p>

          {orders.length === 0 ? (
            <p className="text-gray-500">No orders yet!</p>
          ) : (
            [...orders].reverse().map((order, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md p-4 mb-5 shadow-sm"
              >
                {/* Status */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <p className="text-green-600 font-semibold">Order Placed</p>
                  <p className="text-gray-400 text-sm">
                    · Estimated delivery by {getDeliveryDate(order.date)}
                  </p>
                </div>

                {/* Items stacked side by side */}
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

                {/* Order meta */}
                <div className="flex justify-between text-sm text-gray-600">
                  <p>
                    Payment:{" "}
                    <span className="font-semibold">{order.paymentMethod}</span>
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
            ))
          )}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Orders;
