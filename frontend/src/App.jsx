import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import Products from "./screens/Products";
import Wishlist from "./screens/Wishlist";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";

function App() {
  return (
    <div className="pt-20 min-h-screen flex flex-col mt-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:category" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bag" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
