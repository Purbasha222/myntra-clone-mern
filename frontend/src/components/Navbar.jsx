import logo from "../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "MEN", color: "after:bg-pink-500" },
    { name: "WOMEN", color: "after:bg-purple-500" },
    { name: "KIDS", color: "after:bg-orange-500" },
    { name: "HOME", color: "after:bg-yellow-500" },
    { name: "BEAUTY", color: "after:bg-green-500" },
    { name: "GENZ", color: "after:bg-red-500" },
    { name: "STUDIO", color: "after:bg-blue-500" },
  ];
  return (
    <nav className="h-20 shadow-lg flex px-16 items-center fixed top-0 w-full left-0 z-50 bg-white">
      <div>
        <img
          src={logo}
          className="h-20 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="flex gap-8 items-center pl-10">
        {navItems.map((item) => (
          <a
            key={item.name}
            onClick={() => navigate(`/categories/${item.name.toLowerCase()}`)}
            className={`
        relative text-sm font-semibold cursor-pointer
        after:content-['']
        after:absolute after:left-0 after:-bottom-7.5
        after:h-0.75 after:w-0
        after:transition-all after:duration-300
        hover:after:w-full
        ${item.color}
      `}
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="pl-5">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for products, brands and more"
          className="w-130 p-2 bg-gray-200"
        />
      </div>
      <div className="flex gap-7 items-center pl-16">
        <div className="cursor-pointer" onClick={() => navigate("/profile")}>
          <GoPerson fontSize={20} />
          <span className="text-sm font-semibold ">Profile</span>
        </div>

        <div className="cursor-pointer" onClick={() => navigate("/wishlist")}>
          <GoHeart fontSize={20} />
          <span className="text-sm font-semibold">Wishlist</span>
        </div>

        <div className="cursor-pointer" onClick={() => navigate("/bag")}>
          <HiOutlineShoppingBag fontSize={20} />
          <span className="text-sm font-semibold">Bag</span>
        </div>
      </div>
      <Dropdown />
    </nav>
  );
};

export default Navbar;
