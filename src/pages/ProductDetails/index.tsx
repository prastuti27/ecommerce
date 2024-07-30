// src/pages/ProductDetail.tsx
import { useParams } from "react-router-dom";
import { useGetProductsByIdQuery } from "../../service/Api/Product/ProductApiSlice";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import { Product } from "../../types/Product";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductsByIdQuery(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product details.</div>;

  if (!product) return <div>No product found.</div>;

  const { title, price, category, image, description } = product as Product;

  return (
    <div className="product-detail-container px-20 mt-10 p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={image}
          alt={title}
          className="w-full h-80 md:w-1/2  object-contain mb-4 md:mb-0"
        />
        <div className="md:ml-4">
          <Typography
            variant="h1"
            content={title}
            className="text-2xl font-bold mb-2"
          />
          <Typography variant="h3" content={`Price: $${price}`} />
          <Typography variant="p" content={`Category: ${category}`} />
          <Typography variant="p" content={description} />
          <Button className="bg-black text-white rounded-2xl py-2 px-4">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
