// src/components/Products.tsx

import { useGetProductsQuery } from "../../service/Api/FakeApiSlice";
import { useNavigate } from "react-router-dom";
import ProductCard from "./Card";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
}

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products.</div>;

  return (
    <>
      <div className="products-container mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products?.map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
