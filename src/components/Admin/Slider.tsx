import { Users } from "../../types/Users";
import Typography from "../Typography";

interface SliderProps {
  user: Users;
  onClose: () => void;
}

const Slider = ({ user, onClose }: SliderProps) => {
  return (
    <div className="fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg p-6 overflow-y-auto flex flex-col items-center">
      <button onClick={onClose} className="absolute top-2 right-2 text-xl">
        &times;
      </button>
      <div className="text-center">
        <Typography variant="h2" content="User Details" />
      </div>
      <div className="mt-4 space-y-2 text-center">
        <Typography variant="p" content={`Username: ${user.username}`} />
        <Typography variant="p" content={`Email: ${user.email}`} />
        <Typography variant="p" content={`Password: ${user.password}`} />
        <Typography
          variant="p"
          content={`Name: ${user.name.firstname} ${user.name.lastname}`}
        />
        <Typography variant="p" content={`Address:`} />
        <Typography variant="p" content={`City: ${user.address.city}`} />
        <Typography variant="p" content={`Street: ${user.address.street}`} />
        <Typography variant="p" content={`Number: ${user.address.number}`} />
        <Typography variant="p" content={`Zipcode: ${user.address.zipcode}`} />
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
  );
};

export default Slider;
