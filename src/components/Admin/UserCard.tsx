// src/components/UserCard.tsx

import React from "react";
import Typography from "../Typography";
import Button from "../Button";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa6";

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

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md cursor-pointer">
      <div className="flex gap-1">
        <Typography
          variant="h2"
          className="text-xl font-semibold"
          content={user.name.firstname}
        />
        <Typography
          variant="h2"
          className="text-xl font-semibold"
          content={user.name.lastname}
        />
      </div>

      <Typography variant="p" content={user.username} />
      <Typography variant="p" content={user.email} />

      <Typography variant="p" content={user.phone} />
    </div>
  );
};

export default UserCard;
