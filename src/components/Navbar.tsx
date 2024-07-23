import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Search from "./Search";
import { FaShoppingCart, FaUser } from "react-icons/fa";

interface NavbarProps {
  isAdmin?: boolean;
}

const Navbar = ({ isAdmin = false }: NavbarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between px-20 py-3 text-white bg-gray-800">
      <div className="flex items-center">
        <div className="text-2xl font-bold">{isAdmin ? "Admin" : "Brand"}</div>

        <nav className="ml-10 flex space-x-4">
          {isAdmin ?? (
            <>
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
            </>
          )}
        </nav>
      </div>

      <Search />

      <div className="relative flex items-center space-x-4">
        {!isAdmin && (
          <div className="hover:text-gray-400">
            <FaShoppingCart size={24} />
          </div>
        )}

        <div className="relative">
          <Button
            onClick={toggleDropdown}
            className="flex items-center hover:text-gray-400"
          >
            <FaUser size={24} />
          </Button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-gray-800 bg-opacity-70 text-black rounded shadow-lg w-40">
              {isAdmin ? (
                <Link
                  to="/logout"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Logout
                </Link>
              ) : (
                <>
                  <Link
                    to="/admin"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Admin
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Logout
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
