import { useGetProductsQuery } from "../../service/Api/Product/ProductApiSlice";
import { useAddCartMutation } from "../../service/Api/Cart/CartApiSlice";
import { useNavigate } from "react-router-dom";
import ProductCard from "./Card";
import Button from "../Button";
import { useState } from "react";
import { IoMdCart } from "react-icons/io";

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

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Error fetching products.
      </div>
    );

  return (
    <div className="products-container mt-10 px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products?.map((product: Product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
              onClick={handleCardClick}
            />
            <Button
              className="w-full bg-black text-white rounded-none py-2 mt-2 flex items-center justify-center gap-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              onClick={() => handleAddToCart(product.id)}
            >
              <IoMdCart size={24} />
              <span>BUY</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
