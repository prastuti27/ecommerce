// CartDropdown.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  cart: {
    id: number;
    userId: number;
    date: string;
    products: { productId: number; quantity: number }[];
  };
}

const CartDropdown: React.FC<CartDropdownProps> = ({
  isOpen,
  onClose,
  cart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75">
      <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <div className="p-4">
          {cart.products.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.products.map((item) => (
                <li
                  key={item.productId}
                  className="flex justify-between py-2 border-b"
                >
                  <span>Product {item.productId}</span>
                  <span>Qty: {item.quantity}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-4 border-t">
          <Link
            to="/checkout"
            className="block text-center text-blue-500 hover:underline"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
