import { useNavigate } from "react-router-dom";

const CartNavbar = () => {
  const navigate = useNavigate();
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
        <p>BAG</p>
        <span>----------</span>
        <p>ADDRESS</p>
        <span>----------</span>
        <p>PAYMENT</p>
      </div>
    </nav>
  );
};

export default CartNavbar;
