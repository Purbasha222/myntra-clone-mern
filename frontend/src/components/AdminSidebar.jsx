import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogout } from "../redux/SLice/adminAuthSlice";

const sidebarLinks = {
  OVERVIEW: ["Dashboard"],
  MANAGE: ["Products", "Orders", "Delivery", "Users"],
  ADMIN: ["Logout"],
};

const linkRoutes = {
  Dashboard: "/admin/dashboard",
  Products: "/admin/products",
  Orders: "/admin/orders",
  Users: "/admin/users",
};

const AdminSidebar = () => {
  const email = useSelector((state) => state.admin.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <aside className="w-55 shrink-0 border-r border-gray-200">
      <div>
        <h2 className="text-[18px] font-bold text-[#282c3f]">Account</h2>
        <p className="text-[13px] text-[#535665] mt-0.5">{email}</p>
      </div>

      {Object.entries(sidebarLinks).map(([section, links]) => (
        <div key={section}>
          <div className="h-px bg-[#eaeaec] my-3.5" />
          <p className="text-[11px] font-bold text-[#94969f] tracking-widest uppercase mb-1.5">
            {section}
          </p>
          {links.map((link) => (
            <span
              key={link}
              className={`block text-sm py-1.5 cursor-pointer transition-colors duration-150
                    ${
                      location.pathname === linkRoutes[link]
                        ? "text-myntra-studio font-semibold"
                        : "text-[#282c3f] hover:text-myntra-studio"
                    }`}
              onClick={() => {
                if (link == "Logout") {
                  dispatch(adminLogout());
                  navigate("/admin");
                } else {
                  linkRoutes[link] && navigate(linkRoutes[link]);
                }
              }}
            >
              {link}
            </span>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default AdminSidebar;
