// src/components/Button.tsx
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  type = "button",
  onClick,
  children,
  className = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
