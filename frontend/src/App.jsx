import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import Products from "./screens/Products";
import Wishlist from "./screens/Wishlist";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import { Toaster } from "react-hot-toast";
import CartNavbar from "./components/CartNavbar";
import Login from "./components/auth/Login";

function App() {
  const location = useLocation();
  const isCartPage = location.pathname === "/bag";
  return (
    <div className="pt-20 min-h-screen flex flex-col mt-auto">
      {isCartPage ? <CartNavbar /> : <Navbar />}
      <Toaster position="top-center" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/categories/:category" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bag" element={<Cart />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
