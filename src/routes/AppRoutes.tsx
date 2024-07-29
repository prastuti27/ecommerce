import { useRoutes, useLocation } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Dashboard from "src/pages/Dashboard";
import Login from "src/pages/Auth/Login";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Admin/Sidebar";
import ProductDetails from "../pages/ProductDetails";
import AdminDash from "../pages/Admin/AdminDash";
import AdminProducts from "../pages/Admin/AdminProducts";
import AddProduct from "../pages/Admin/AddProduct";
import EditProduct from "../pages/Admin/EditProduct";
import AdminUsers from "../pages/Admin/AdminUsers";
import AddUser from "../pages/Admin/AddUser";
import EditUser from "../pages/Admin/EditUser";
import PrivateRoute from "./PrivateRoute"; // Import PrivateRoute

const routes = [
  {
    path: NAVIGATION_ROUTES.DASHBOARD,
    element: <PrivateRoute element={<Dashboard />} />,
  },
  {
    path: NAVIGATION_ROUTES.PRODUCTDETAILS,
    element: <PrivateRoute element={<ProductDetails />} />,
  },
  {
    path: NAVIGATION_ROUTES.ADMINDASHBOARD,
    element: <PrivateRoute element={<AdminDash />} />,
  },
  {
    path: NAVIGATION_ROUTES.ADMINPRODUCTS,
    element: <PrivateRoute element={<AdminProducts />} />,
  },
  {
    path: NAVIGATION_ROUTES.ADMINUSERS,
    element: <PrivateRoute element={<AdminUsers />} />,
  },
  {
    path: NAVIGATION_ROUTES.ADDPRODUCT,
    element: <PrivateRoute element={<AddProduct />} />,
  },
  {
    path: NAVIGATION_ROUTES.ADDUSER,
    element: <PrivateRoute element={<AddUser />} />,
  },
  {
    path: NAVIGATION_ROUTES.EDITUSER,
    element: <PrivateRoute element={<EditUser />} />,
  },
  {
    path: NAVIGATION_ROUTES.EDITPRODUCT,
    element: <PrivateRoute element={<EditProduct />} />,
  },
  { path: NAVIGATION_ROUTES.LOGIN, element: <Login /> },
];

const AppRoutes = () => {
  const routing = useRoutes(routes);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  const isLoginPage = location.pathname === NAVIGATION_ROUTES.LOGIN;

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoginPage && <Navbar isAdmin={isAdmin} />}
      <div className="flex flex-1">
        {isAdmin && <Sidebar className="w-64" />}
        <main className={`flex-grow ${isAdmin ? "ml-64" : ""} p-4`}>
          {routing}
        </main>
      </div>
    </div>
  );
};

export default AppRoutes;
