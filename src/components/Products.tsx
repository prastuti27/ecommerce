// src/components/Products.tsx

import { useGetProductsQuery } from "../service/Api/FakeApiSlice";
import ProductCard from "./Card";

interface Products {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
}

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products.</div>;

  return (
    <div className="products-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products?.map((product: Products) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
