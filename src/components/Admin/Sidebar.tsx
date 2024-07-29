// src/components/Admin/Sidebar.tsx

import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaUsers } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import Typography from "../Typography";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className = "" }: SidebarProps) => {
  return (
    <div
      className={`bg-gray-800 text-white w-64 h-screen fixed p-4 ${className}`}
    >
      <Typography variant="h1" content="Admin Dashboard" className="mb-6" />
      <nav className="flex flex-col space-y-4">
        <Link
          to="/admin/home"
          className="flex items-center hover:bg-gray-700 p-2 rounded transition-colors duration-200"
        >
          <FaHome size={20} className="mr-3" /> Home
        </Link>
        <Link
          to="/admin/products"
          className="flex items-center hover:bg-gray-700 p-2 rounded transition-colors duration-200"
        >
          <AiOutlineProduct size={20} className="mr-3" />
          Products
        </Link>
        <Link
          to="/admin/orders"
          className="flex items-center hover:bg-gray-700 p-2 rounded transition-colors duration-200"
        >
          <FaShoppingCart size={20} className="mr-3" /> Orders
        </Link>
        <Link
          to="/admin/users"
          className="flex items-center hover:bg-gray-700 p-2 rounded transition-colors duration-200"
        >
          <FaUsers size={20} className="mr-3" /> Users
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
