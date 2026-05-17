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
import Profile from "./screens/Profile";
import Address from "./screens/Address";
import Payment from "./screens/Payment";
import Orders from "./screens/Orders";
import EditProfile from "./screens/EditProfile";
import SavedAdresses from "./screens/SavedAdresses";
import DeleteAccount from "./screens/DeleteAccount";
import AdminLogin from "./screens/AdminLogin";
import AdminDashboard from "./screens/AdminDashboard";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import AdminUsers from "./screens/AdminUsers";
import AdminProducts from "./screens/AdminProducts";
import AdminOrders from "./screens/AdminOrders";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isCartPage = location.pathname === "/bag";
  const isAdressPage = location.pathname === "/address";
  const isPaymentPage = location.pathname === "/payment";

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div
      className={`${location.pathname !== "/login" && !location.pathname.startsWith("/admin") ? "pt-20" : ""} min-h-screen flex flex-col mt-auto`}
    >
      {location.pathname !== "/login" &&
        !location.pathname.startsWith("/admin") &&
        (isCartPage || isAdressPage || isPaymentPage ? (
          <CartNavbar />
        ) : (
          <Navbar />
        ))}
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
        <Route
          path="/address"
          element={
            <ProtectedRoute>
              <Address />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/delete-account"
          element={
            <ProtectedRoute>
              <DeleteAccount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/addresses"
          element={
            <ProtectedRoute>
              <SavedAdresses />
            </ProtectedRoute>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminProtectedRoute>
              <AdminUsers />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminProtectedRoute>
              <AdminProducts />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <AdminProtectedRoute>
              <AdminOrders />
            </AdminProtectedRoute>
          }
        />
      </Routes>
      {location.pathname !== "/login" &&
        !location.pathname.startsWith("/admin") && <Footer />}
    </div>
  );
}

export default App;
