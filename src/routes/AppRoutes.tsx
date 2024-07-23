import { useRoutes, useLocation } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Dashboard from "src/pages/Dashboard";
import Login from "src/pages/Auth/Login";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Admin/Sidebar";
import ProductDetails from "../pages/ProductDetails";
import Admindash from "../pages/Admin/Admindash";

const routes = [
  { path: NAVIGATION_ROUTES.DASHBOARD, element: <Dashboard /> },
  { path: NAVIGATION_ROUTES.PRODUCTDETAILS, element: <ProductDetails /> },
  { path: NAVIGATION_ROUTES.ADMINDASHBOARD, element: <Admindash /> },
  { path: NAVIGATION_ROUTES.LOGIN, element: <Login /> },
];

const AppRoutes = () => {
  const routing = useRoutes(routes);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      {isAdmin ? (
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex flex-col flex-grow">
            <Navbar isAdmin />
            <div className="p-4">{routing}</div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="flex-grow p-4">{routing}</div>
        </>
      )}
    </div>
  );
};

export default AppRoutes;
