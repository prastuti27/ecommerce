import { useState } from "react";
import { UserFormState } from "../../types/Users";

const userFormValidation = (formData: UserFormState) => {
  const [errors, setErrors] = useState<Partial<UserFormState>>({});

  const validate = () => {
    const newErrors: Partial<UserFormState> = {};

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    } else if (!/[a-zA-Z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one letter";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one number";
    }

    if (!formData.firstname.trim()) {
      newErrors.firstname = "First name is required";
    }
    if (!formData.lastname.trim()) {
      newErrors.lastname = "Last name is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.street.trim()) {
      newErrors.street = "Street is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return newErrors;
  };

  return { errors, validate };
};

export default userFormValidation;
