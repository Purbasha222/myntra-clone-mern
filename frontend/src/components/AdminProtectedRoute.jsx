import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default AdminProtectedRoute;
