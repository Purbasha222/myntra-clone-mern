import AdminSidebar from "../components/AdminSidebar.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { BASE_URL } from "../config.js";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const role = useSelector((state) => state.admin.role);
  const email = useSelector((state) => state.admin.email);
  const [stats, setStats] = useState(null);
  const token = useSelector((state) => state.admin.token);
  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch(`${BASE_URL}/api/admin/getStats`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setStats(data);
    };
    fetchStats();
  }, []);
  const statCards = [
    {
      title: "Total Users",
      total: stats?.totalUsers,
    },
    {
      title: "Total Products",
      total: stats?.totalProducts,
    },
    {
      title: "Total Orders",
      total: stats?.totalOrders,
    },
  ];
  const gridCards = [
    {
      title: "Users",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10"
        >
          <circle cx="9" cy="7" r="4" />
          <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
        </svg>
      ),
    },
    {
      title: "Products",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10"
        >
          <rect x="3" y="3" width="8" height="8" rx="1" />
          <rect x="13" y="3" width="8" height="8" rx="1" />
          <rect x="3" y="13" width="8" height="8" rx="1" />
          <rect x="13" y="13" width="8" height="8" rx="1" />
        </svg>
      ),
    },
    {
      title: "Orders",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
  ];
  const linkRoutes = {
    Users: "/admin/users",
    Products: "/admin/products",
    Orders: "/admin/orders",
  };
  return (
    <div className="p-15">
      <div className="max-w-275 mx-auto px-4 py-8 pb-16 flex gap-7 items-start">
        <AdminSidebar />
        <main className="flex-1 flex flex-col gap-4">
          <div className="bg-white px-8 py-7 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-22.5 h-22.5 rounded-full bg-[#c2c2c2] flex items-center justify-center shrink-0 overflow-hidden">
                <svg viewBox="0 0 24 24" fill="#f5f5f6" className="w-14 h-14">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <span className="text-[15px] text-[#282c3f]">{email}</span>
            </div>
            <span className="p-2 font-semibold text-myntra-studio border border-myntra-studio rounded-sm">
              {role}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {statCards.map((card) => (
              <div
                key={card.title}
                className="bg-white py-8 px-6 flex flex-col items-center gap-2.5 border-l-4 border-myntra-studio"
              >
                <p className="text-4xl font-bold text-[#282c3f] text-center">
                  {card.total}
                </p>
                <p className="text-[15px] text-[#94969f] text-center">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {gridCards.map((card) => (
              <div
                key={card.title}
                onClick={() =>
                  linkRoutes[card.title] && navigate(linkRoutes[card.title])
                }
                className="bg-white py-8 px-6 flex flex-col items-center gap-2.5 cursor-pointer transition-shadow duration-200 hover:shadow-md"
              >
                <div className="text-[#282c3f]">{card.icon}</div>
                <p className="text-[12px] text-[#94969f] text-center">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
export default AdminDashboard;
