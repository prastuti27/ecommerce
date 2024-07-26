import { useState } from "react";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../service/Api/Users/UsersApiSlice";
import UserCard from "./UserCard";
import { FaEye } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import Button from "../Button";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import { IoIosPersonAdd } from "react-icons/io";

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
}

interface Name {
  firstname: string;
  lastname: string;
}

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
}

const Users = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [deleteUser, { isLoading: isDeleting, error: deleteError }] =
    useDeleteUserMutation();

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("/admin/add-user");
  };

  const handleEyeButtonClick = (user: User) => {
    setSelectedUser(user);
    setIsSliderOpen(true);
  };

  const handleCloseSlider = () => {
    setIsSliderOpen(false);
    setSelectedUser(null);
  };

  const handleEditUser = (userId: number) => {
    navigate(`/admin/edit-user/${userId}`);
  };

  const handleDeleteUser = async (userId: number) => {
    try {
      await deleteUser(userId).unwrap();
    } catch (err) {
      console.error("Failed to delete the user: ", err);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users.</div>;

  return (
    <>
      <div className="flex justify-end">
        <Button onClick={handleAddUser} className="m-4 border bg-sky-400">
          <IoIosPersonAdd />
        </Button>
      </div>

      <div className="users-container mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users?.map((user: User) => (
            <div key={user.id} className="relative">
              <UserCard user={user} />
              <div className="absolute bottom-0 right-4 flex gap-2">
                <Button onClick={() => handleEyeButtonClick(user)}>
                  <FaEye />
                </Button>
                <Button onClick={() => handleEditUser(user.id)}>
                  <AiFillEdit />
                </Button>
                <Button onClick={() => handleDeleteUser(user.id)}>
                  {isDeleting ? "Deleting..." : <MdDeleteForever />}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isSliderOpen && selectedUser && (
        <Slider user={selectedUser} onClose={handleCloseSlider} />
      )}
    </>
  );
};

export default Users;
