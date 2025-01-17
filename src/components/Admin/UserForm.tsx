import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import Input from "../Input";
import { UserFormState } from "../../types/Users";
import userFormValidation from "./UserFormValidation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserFormProps {
  editMode?: boolean;
  userToEdit?: Partial<UserFormState>;
  onSubmit: (userData: UserFormState) => void;
}

const UserForm = ({
  editMode = false,
  userToEdit,
  onSubmit,
}: UserFormProps) => {
  const [formData, setFormData] = useState<UserFormState>({
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: 0,
    zipcode: "",
    lat: "",
    long: "",
    phone: "",
  });

  const { errors, validate } = userFormValidation(formData);

  useEffect(() => {
    if (userToEdit) {
      setFormData({
        ...formData,
        ...userToEdit,
      });
    }
  }, [userToEdit]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "number" ? parseInt(value) : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
      toast.success(
        editMode ? "User updated successfully!" : "User added successfully!"
      );
    } else {
      toast.error("Please fix the errors in the form.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 mt-14 dark:bg-gray-900">
      <Typography variant="h1" content={editMode ? "Edit User" : "Add User"} />
      <form
        onSubmit={handleSubmit}
        className="space-y-6 w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-md shadow-md"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="firstname"
                className="text-gray-700 dark:text-gray-300"
              >
                First Name
              </label>
              <Input
                id="firstname"
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="p-4 w-full"
              />
              {errors.firstname && (
                <p className="text-red-500">{errors.firstname}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="text-gray-700 dark:text-gray-300"
              >
                Last Name
              </label>
              <Input
                id="lastname"
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-4 w-full"
              />
              {errors.lastname && (
                <p className="text-red-500">{errors.lastname}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-4 w-full"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="username"
                className="text-gray-700 dark:text-gray-300"
              >
                Username
              </label>
              <Input
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="p-4 w-full"
              />
              {errors.username && (
                <p className="text-red-500">{errors.username}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="p-4 w-full"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="city"
                className="text-gray-700 dark:text-gray-300"
              >
                City
              </label>
              <Input
                id="city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="p-4 w-full"
              />
              {errors.city && <p className="text-red-500">{errors.city}</p>}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="street"
                className="text-gray-700 dark:text-gray-300"
              >
                Street
              </label>
              <Input
                id="street"
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="Street"
                className="p-4 w-full"
              />
              {errors.street && <p className="text-red-500">{errors.street}</p>}
            </div>
            <div>
              <label
                htmlFor="number"
                className="text-gray-700 dark:text-gray-300"
              >
                Number
              </label>
              <Input
                id="number"
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Number"
                className="p-4 w-full"
              />
              {errors.number && <p className="text-red-500">{errors.number}</p>}
            </div>
            <div>
              <label
                htmlFor="zipcode"
                className="text-gray-700 dark:text-gray-300"
              >
                Zip Code
              </label>
              <Input
                id="zipcode"
                type="text"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                placeholder="Zip Code"
                className="p-4 w-full"
              />
              {errors.zipcode && (
                <p className="text-red-500">{errors.zipcode}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="lat" className="text-gray-700 dark:text-gray-300">
                Latitude
              </label>
              <Input
                id="lat"
                type="text"
                name="lat"
                value={formData.lat}
                onChange={handleChange}
                placeholder="Latitude"
                className="p-4 w-full"
              />
              {errors.lat && <p className="text-red-500">{errors.lat}</p>}
            </div>
            <div>
              <label
                htmlFor="long"
                className="text-gray-700 dark:text-gray-300"
              >
                Longitude
              </label>
              <Input
                id="long"
                type="text"
                name="long"
                value={formData.long}
                onChange={handleChange}
                placeholder="Longitude"
                className="p-4 w-full"
              />
              {errors.long && <p className="text-red-500">{errors.long}</p>}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-gray-700 dark:text-gray-300"
              >
                Phone
              </label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="p-4 w-full"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-lg"
        >
          {editMode ? "Update User" : "Add User"}
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UserForm;
