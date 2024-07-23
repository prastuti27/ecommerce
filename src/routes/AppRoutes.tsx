// src/components/AppRoutes.tsx

import { useRoutes, useLocation } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Dashboard from "src/pages/Dashboard";
import Login from "src/pages/Auth/Login";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Admin/Sidebar";
import ProductDetails from "../pages/ProductDetails";
import Admindash from "../pages/Admin/Admindash";
import AdminProducts from "../pages/Admin/AdminProducts";

const routes = [
  { path: NAVIGATION_ROUTES.DASHBOARD, element: <Dashboard /> },
  { path: NAVIGATION_ROUTES.PRODUCTDETAILS, element: <ProductDetails /> },
  { path: NAVIGATION_ROUTES.ADMINDASHBOARD, element: <Admindash /> },
  { path: NAVIGATION_ROUTES.ADMINPRODUCTS, element: <AdminProducts /> },
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
          <Sidebar className="w-64" />
          <div className="flex flex-col flex-grow ml-64">
            <Navbar isAdmin />
            <main className="p-4 flex-grow">{routing}</main>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="flex-grow p-4">{routing}</main>
        </>
      )}
    </div>
  );
};

export default AppRoutes;
