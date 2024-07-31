import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: any) => {
  const isAuthenticated = !!localStorage.getItem("token");
  console.log("Is Authenticated:", isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
