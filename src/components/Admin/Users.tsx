// src/components/Users.tsx

import { useGetUsersQuery } from "../../service/Api/Users/UsersApiSlice";

import UserCard from "./UserCard";
import { FaEye } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import Button from "../Button";
import { useState } from "react";
import Slider from "./Slider";

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

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleEyeButtonClick = (user: User) => {
    setSelectedUser(user);
    setIsSliderOpen(true);
  };

  const handleCloseSlider = () => {
    setIsSliderOpen(false);
    setSelectedUser(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users.</div>;

  return (
    <>
      <div className="users-container mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users?.map((user: User) => (
            <div key={user.id} className="relative">
              <UserCard user={user} />
              <div className="absolute  bottom-0 right-4 flex gap-2">
                <Button onClick={() => handleEyeButtonClick(user)}>
                  <FaEye />
                </Button>
                <Button>
                  <AiFillEdit />
                </Button>
                <Button>
                  <MdDeleteForever />
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
