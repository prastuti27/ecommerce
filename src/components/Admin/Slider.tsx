import { Users } from "../../types/Users";
import Typography from "../Typography";
import { IoIosCloseCircle } from "react-icons/io";

interface SliderProps {
  user: Users;
  onClose: () => void;
}

const Slider = ({ user, onClose }: SliderProps) => {
  return (
    <div className="fixed top-0 right-0 h-full w-1/4 bg-white shadow-lg p-6 mt-14 overflow-y-auto flex flex-col items-center border border-gray-300 rounded-lg">
      <div className="flex-grow flex flex-col justify-center items-center">
        <button
          onClick={onClose}
          className="absolute top-6 right-2 text-xl text-gray-600 hover:text-gray-800 transition-colors"
        >
          <IoIosCloseCircle size={24} />
        </button>
        <div className="relative w-full mb-4 text-center">
          <Typography variant="h2" content="User Details" />
        </div>
        <div className="space-y-2 text-center">
          <Typography variant="p" content={`Username: ${user.username}`} />
          <Typography variant="p" content={`Email: ${user.email}`} />
          <Typography variant="p" content={`Password: ${user.password}`} />
          <Typography
            variant="p"
            content={`Name: ${user.name.firstname} ${user.name.lastname}`}
          />
          <Typography variant="p" content={`City: ${user.address.city}`} />
          <Typography variant="p" content={`Street: ${user.address.street}`} />
          <Typography variant="p" content={`Number: ${user.address.number}`} />
          <Typography
            variant="p"
            content={`Zipcode: ${user.address.zipcode}`}
          />
          <Typography variant="p" content={`Geolocation:`} />
          <Typography
            variant="p"
            content={`Latitude: ${user.address.geolocation.lat}`}
          />
          <Typography
            variant="p"
            content={`Longitude: ${user.address.geolocation.long}`}
          />
          <Typography variant="p" content={`Phone: ${user.phone}`} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
