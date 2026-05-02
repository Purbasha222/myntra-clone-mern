import { useLocation, useNavigate } from "react-router-dom";

const CartNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="h-20 shadow-lg flex px-16 items-center fixed top-0 w-full left-0 z-50 bg-white">
      <div>
        <img
          src="/logo.png"
          className="h-20 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex gap-3 items-center pl-10">
        <p
          className={`${location.pathname === "/bag" ? "text-myntra-beauty underline" : ""} cursor-pointer font-semibold`}
          onClick={() => navigate("/bag")}
        >
          BAG
        </p>
        <span>----------</span>
        <p
          className={`${location.pathname === "/address" ? "text-myntra-beauty underline" : ""} cursor-pointer font-semibold`}
          onClick={() => navigate("/address")}
        >
          ADDRESS
        </p>
        <span>----------</span>
        <p
          className={`${location.pathname === "/payment" ? "text-myntra-beauty underline" : ""} cursor-pointer font-semibold`}
          onClick={() => navigate("/payment")}
        >
          PAYMENT
        </p>
      </div>
    </nav>
  );
};

export default CartNavbar;
