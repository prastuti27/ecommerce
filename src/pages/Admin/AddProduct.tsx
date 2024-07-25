// src/pages/AddProduct.tsx
import { useAddProductMutation } from "../../service/Api/Product/ProductApiSlice";
import ProductForm from "../../components/Admin/ProductForm";
import { Product } from "../../types/Product";

const AddProduct = () => {
  const [addProduct] = useAddProductMutation();

  const handleAddProduct = async (productData: Partial<Product>) => {
    try {
      await addProduct(productData).unwrap();
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  return <ProductForm onSubmit={handleAddProduct} />;
};

export default AddProduct;
