import { useRoutes } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Dashboard from "src/pages/Dashboard";
import Login from "src/pages/Auth/Login";
import Navbar from "../components/Navbar";

const routes = [
  { path: NAVIGATION_ROUTES.DASHBOARD, element: <Dashboard /> },
  {
    path: NAVIGATION_ROUTES.LOGIN,
    element: <Login />,
  },
];

const AppRoutes = () => {
  const routing = useRoutes(routes);

  return (
    <>
      <Navbar />
      {routing}
    </>
  );
};

export default AppRoutes;
