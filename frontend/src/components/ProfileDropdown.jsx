import { useNavigate } from "react-router-dom";

const linkRoutes = {
  Orders: "/orders",
  Profile: "/profile",
  Wishlist: "/wishlist",
  "Edit Profile": "/profile",
};

const ProfileDropdown = ({ email, onLogout }) => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-12 -right-30 w-64 bg-white shadow-lg z-40 py-2">
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-sm text-gray-500">Hello,</p>
        <p className="text-sm font-semibold truncate">{email}</p>
        <button
          className="text-xs text-myntra-studio font-medium mt-1 cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          View Profile
        </button>
      </div>

      <div className="px-3">
        <MenuItem label="Orders" navigate={navigate} />
        <MenuItem label="Wishlist" navigate={navigate} />
        <MenuItem label="Gift Cards" />
        <MenuItem label="Contact Us" />
        <MenuItem label="Myntra Insider" />
        <hr className="my-1 border-gray-300" />
        <MenuItem label="Myntra Credit" />
        <MenuItem label="Coupons" />
        <MenuItem label="Saved Cards" />
        <MenuItem label="Saved VPA" />
        <MenuItem label="Saved Addresses" />
        <hr className="my-1 border-gray-300" />
        <MenuItem label="Edit Profile" navigate={navigate} />
        <button
          className="w-full text-left px-4 py-1 text-sm text-myntra-studio font-medium hover:bg-gray-50 cursor-pointer"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const MenuItem = ({ label, navigate }) => (
  <button
    className="w-full text-left px-4 py-1 text-sm text-gray-700 hover:text-myntra-studio hover:bg-gray-50"
    onClick={() => linkRoutes[label] && navigate(linkRoutes[label])}
  >
    {label}
  </button>
);

export default ProfileDropdown;
