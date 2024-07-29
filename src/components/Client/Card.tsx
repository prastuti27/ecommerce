// src/components/ProductCard.tsx

import Typography from "../Typography";
import Button from "../Button";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  onClick: (id: number) => void;
}

const ProductCard = ({
  id,
  title,
  price,
  category,
  image,
  onClick,
}: ProductCardProps) => {
  const formattedPrice = `$${price}`;

  return (
    <div
      key={id}
      className="p-4 rounded-3xl00   cursor-pointer" // Add cursor-pointer to indicate it's clickable
      onClick={() => onClick(id)}
    >
      <Button className="bg-black text-white rounded-2xl text-xs mb-2">
        {category}
      </Button>
      <img src={image} alt={title} className="w-full h-40 object-cover mb-2" />
      <Typography variant="h2" content={title} className="line-clamp-2" />
      <Typography
        className="text-gray-700"
        variant="p"
        content={formattedPrice}
      />
    </div>
  );
};

export default ProductCard;
