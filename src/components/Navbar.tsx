// src/components/Navbar.tsx

import { Link } from "react-router-dom";
import Button from "./Button";
import Search from "./Search";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 text-white bg-gray-800">
      <div className="flex items-center">
        <div className="text-2xl font-bold">Brand</div>

        <nav className="ml-10 flex space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/shop" className="hover:text-gray-400">
            Shop
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>

      <Search />

      <div className="flex items-center space-x-4">
        <div className="hover:text-gray-400">
          <FaShoppingCart size={24} />
        </div>

        <Button
          onClick={() => console.log("Button clicked!")}
          className="hover:text-gray-400"
        >
          <FaUser size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
