// src/pages/AddUser.tsx
import { useAddUserMutation } from "../../service/Api/Users/UsersApiSlice";
import UserForm from "../../components/Admin/UserForm";
import { User, UserFormState } from "../../types/Users";

const AddUser = () => {
  const [addUser] = useAddUserMutation();

  const handleAddUser = async (formData: UserFormState) => {
    const userData: User = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      name: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
      address: {
        city: formData.city,
        street: formData.street,
        number: formData.number,
        zipcode: formData.zipcode,
        geolocation: {
          lat: formData.lat,
          long: formData.long,
        },
      },
      phone: formData.phone,
    };

    try {
      await addUser(userData).unwrap();
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  return <UserForm onSubmit={handleAddUser} />;
};

export default AddUser;
