import { useContext } from "react";
import { AuthContext } from "../../Context Api/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import ProgressLoading from "../../Components/ProgressLoading/ProgressLoading";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const location = useLocation();

  if (loading || isAdminLoading) {
    return <ProgressLoading></ProgressLoading>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
