import React from "react";

interface InputProps {
  type?: "text" | "password" | "email" | "search";
  placeholder?: string;
  value?: string;
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
  className,
}: InputProps) => {
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
      className={className}
    />
  );
};

export default Input;
