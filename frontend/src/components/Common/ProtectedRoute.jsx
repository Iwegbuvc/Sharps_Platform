import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  // Replace this with your actual auth logic (e.g., from a useAuth hook)
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    // Logged in but not an admin
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
