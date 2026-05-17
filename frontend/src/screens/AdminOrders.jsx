import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { useSelector } from "react-redux";
import AdminSidebar from "../components/AdminSidebar";

const AdminOrders = () => {
  const token = useSelector((state) => state.admin.token);
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch(`${BASE_URL}/api/admin/orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setOrders(data.orders);
    };
    fetchOrders();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    await fetch(`${BASE_URL}/api/admin/orders/${id}/status`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });
    setOrders(orders.map((o) => (o._id === id ? { ...o, status } : o)));
  };

  return (
    <div className="p-15">
      <div className="max-w-275 mx-auto px-4 py-8 pb-16 flex gap-7 items-start">
        <div className="sticky top-0 shrink-0">
          <AdminSidebar />
        </div>
        <div className="flex-1 overflow-y-auto max-h-screen no-scrollbar">
          <p className="text-xl font-bold">All Orders</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-gray-300">
                <th className="py-3 text-center">User</th>
                <th className="py-3 text-center">Items</th>
                <th className="py-3 text-center">Total</th>
                <th className="py-3 text-center">Payment</th>
                <th className="py-3 text-center">Status</th>
                <th className="py-3 text-center">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => (
                  <tr key={order._id} className="border-b border-gray-300">
                    <td className="py-3 border-r border-gray-300 text-center">
                      {order.user?.email}
                    </td>
                    <td className="py-3 border-r border-gray-300 text-center">
                      {order.items.length}{" "}
                      {order.items.length === 1 ? "Item" : "Items"}
                    </td>
                    <td className="py-3 border-r border-gray-300 text-center">
                      ₹{order.totalPrice}
                    </td>
                    <td className="py-3 border-r border-gray-300 text-center">
                      {order.paymentMethod}
                    </td>
                    <td className="py-3 border-r border-gray-300 text-center">
                      <select
                        className="outline-none cursor-pointer"
                        value={order.status}
                        onChange={(e) =>
                          handleUpdateStatus(order._id, e.target.value)
                        }
                      >
                        <option value="Order Placed">Order Placed</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Out for Delivery">
                          Out for Delivery
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="py-3 text-center">
                      {new Date(order.createdAt).toDateString()}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
