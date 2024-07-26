import { useParams } from "react-router-dom";
import {
  useGetUserByIdQuery,
  useEditUserMutation,
} from "../../service/Api/Users/UsersApiSlice";
import UserForm from "../../components/Admin/UserForm";
import { User, UserFormState } from "../../types/Users";

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: userToEdit,
    error,
    isLoading,
  } = useGetUserByIdQuery(Number(id));
  const [editUser] = useEditUserMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user</div>;
  }

  const handleEditUser = async (formData: UserFormState) => {
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
      await editUser({ id: Number(id), user: userData }).unwrap();
      console.log(userData);
    } catch (error) {
      console.error("Failed to edit user:", error);
    }
  };

  if (!userToEdit) {
    return <div>No user data found.</div>;
  }

  const formattedUser: UserFormState = {
    email: userToEdit.email,
    username: userToEdit.username,
    password: userToEdit.password,
    firstname: userToEdit.name.firstname,
    lastname: userToEdit.name.lastname,
    city: userToEdit.address.city,
    street: userToEdit.address.street,
    number: userToEdit.address.number,
    zipcode: userToEdit.address.zipcode,
    lat: userToEdit.address.geolocation.lat,
    long: userToEdit.address.geolocation.long,
    phone: userToEdit.phone,
  };

  return (
    <UserForm editMode userToEdit={formattedUser} onSubmit={handleEditUser} />
  );
};

export default EditUser;
