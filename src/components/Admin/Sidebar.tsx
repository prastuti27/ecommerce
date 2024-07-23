import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaUsers, FaChartBar } from "react-icons/fa";
import Typography from "../Typography";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4">
      <Typography variant="h1" content="Admin Dashboard" />
      <nav className="flex flex-col space-y-4">
        <Link
          to="/admin/home"
          className="flex items-center hover:bg-gray-700 p-2 rounded"
        >
          <FaHome size={20} className="mr-2" /> Home
        </Link>
        <Link
          to="/admin/products"
          className="flex items-center hover:bg-gray-700 p-2 rounded"
        >
          <FaShoppingCart size={20} className="mr-2" /> Products
        </Link>
        <Link
          to="/admin/users"
          className="flex items-center hover:bg-gray-700 p-2 rounded"
        >
          <FaUsers size={20} className="mr-2" /> Users
        </Link>
        <Link
          to="/admin/reports"
          className="flex items-center hover:bg-gray-700 p-2 rounded"
        >
          <FaChartBar size={20} className="mr-2" /> Reports
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
