import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const sidebarLinks = {
  ORDERS: ["Orders & Returns"],
  CREDITS: ["Coupons", "Myntra Credit", "MynCash"],
  ACCOUNT: [
    "Profile",
    "Saved Cards",
    "Saved UPI",
    "Saved Wallets/BNPL",
    "Addresses",
    "Myntra Insider",
    "Delete Account",
  ],
  LEGAL: ["Terms of Use", "Privacy Center"],
};

const linkRoutes = {
  "Orders & Returns": "/orders",
  Profile: "/profile",
};

const ProfileSidebar = () => {
  const user = useSelector((state) => state.auth.email);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <aside className="w-55 shrink-0 border-r border-gray-200">
      <div>
        <h2 className="text-[18px] font-bold text-[#282c3f]">Account</h2>
        <p className="text-[13px] text-[#535665] mt-0.5">{user}</p>
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
              onClick={() => linkRoutes[link] && navigate(linkRoutes[link])}
            >
              {link}
            </span>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default ProfileSidebar;
