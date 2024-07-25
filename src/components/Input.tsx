import React from "react";

interface InputProps {
  type?: "text" | "password" | "email" | "number" | "search";
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
  id?: string;
  className?: string;
}

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  name,
  id,
  className = "",
}: InputProps) => {
  const defaultClasses =
    "border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white";
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      name={name}
      id={id}
      className={`${defaultClasses} ${className}`}
    />
  );
};

export default Input;
