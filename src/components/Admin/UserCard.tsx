// src/components/UserCard.tsx

import Typography from "../Typography";

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

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <Typography
            variant="h2"
            className="text-2xl font-bold text-gray-600 uppercase"
            content={`${user.name.firstname[0]} ${user.name.lastname[0]}`}
          />
        </div>
        <div>
          <Typography
            variant="h2"
            className="text-2xl font-semibold text-blue-600"
            content={`${user.name.firstname} ${user.name.lastname}`}
          />
          <Typography
            variant="p"
            className="text-gray-500"
            content={user.username}
          />
        </div>
      </div>

      <div className="mb-4 text-center">
        <Typography
          variant="p"
          className="text-gray-700"
          content={user.email}
        />
        <Typography
          variant="p"
          className="text-gray-700"
          content={user.phone}
        />
      </div>

      <div className="text-center text-sm text-gray-400">
        <Typography
          variant="p"
          content={`${user.address.city}, ${user.address.street} ${user.address.number}`}
        />
      </div>
    </div>
  );
};

export default UserCard;
