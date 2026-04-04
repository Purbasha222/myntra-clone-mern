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
import ProtectedRoute from "./components/ProtectedRoute";
import SearchResults from "./components/SearchResults";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/SLice/productSlice";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isCartPage = location.pathname === "/bag";

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div
      className={`${location.pathname !== "/login" ? "pt-20" : ""} min-h-screen flex flex-col mt-auto`}
    >
      {location.pathname !== "/login" &&
        (isCartPage ? <CartNavbar /> : <Navbar />)}
      <Toaster position="top-center" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/search" element={<SearchResults />} />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/categories/:category"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bag"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
      {location.pathname !== "/login" && <Footer />}
    </div>
  );
}

export default App;
