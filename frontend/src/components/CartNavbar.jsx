import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const CartNavbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="h-20 shadow-lg flex px-16 items-center fixed top-0 w-full left-0 z-50 bg-white">
      <div>
        <img
          src={logo}
          className="h-20 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <div className="flex gap-8 items-center pl-10">
          <p>BAG</p>
          <span>.........</span>
          <p>ADDRESS</p>
          <span>.........</span>
          <p>PAYMENT</p>
        </div>
      </div>
    </nav>
  );
};

export default CartNavbar;
