import logo from "../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const products = useSelector((state) => state.product.products);
  const suggestions = products
    .filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase()),
    )
    .slice(0, 10);
  const [showDropdown, setShowDropdown] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

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
      <div
        className="flex items-center"
        onMouseLeave={() => setActiveMenu(null)}
      ></div>
      <div className="flex gap-8 items-center pl-10">
        {navItems.map((item) => (
          <a
            key={item.name}
            onMouseEnter={() => setActiveMenu(item.name)}
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
        <Dropdown activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>

      <div className="relative pl-5">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") navigate(`/search?q=${query}`);
          }}
          placeholder="Search for products, brands and more"
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
          className="w-130 p-2 bg-gray-200"
        />
        {query.length > 0 && suggestions.length > 0 && showDropdown && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 max-h-70 overflow-y-auto [&::-webkit-scrollbar]:hidden">
            {suggestions.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/products/${product.id}`)}
                className="flex gap-3 items-center hover:bg-gray-100 hover:cursor-pointer"
              >
                <img src={product.thumbnail} className="h-20 w-20" />
                <p className="text-md">{product.title}</p>
              </div>
            ))}
          </div>
        )}
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
    </nav>
  );
};

export default Navbar;
