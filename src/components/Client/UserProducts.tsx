import { useGetProductsQuery } from "../../service/Api/Product/ProductApiSlice";
import { useAddCartMutation } from "../../service/Api/Cart/CartApiSlice";
import { useNavigate } from "react-router-dom";
import ProductCard from "./Card";
import Button from "../Button";
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [addCart] = useAddCartMutation();
  const navigate = useNavigate();
  const [cart, setCart] = useState<{ productId: number; quantity: number }[]>(
    []
  );

  const handleCardClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = async (id: number) => {
    console.log(`Product ${id} added to cart`);
    try {
      const newCartItem = { productId: id, quantity: 1 };
      await addCart({ products: [newCartItem] }).unwrap();
      setCart((prevCart) => [...prevCart, newCartItem]);
    } catch (error) {
      console.error("Failed to add to cart", error);
      console.log(cart);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products.</div>;

  return (
    <div className="products-container mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products?.map((product: Product) => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
              onClick={handleCardClick}
            />
            <Button
              className="bg-black text-white rounded-2xl py-2 px-4 mt-2"
              onClick={() => handleAddToCart(product.id)}
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
