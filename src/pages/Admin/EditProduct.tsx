// src/pages/EditProduct.tsx
import { useParams } from "react-router-dom";
import {
  useGetProductsByIdQuery,
  useEditProductMutation,
} from "../../service/Api/FakeApiSlice";
import ProductForm from "../../components/Admin/ProductForm";
import { Product } from "../../types/types";

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: productToEdit,
    error,
    isLoading,
  } = useGetProductsByIdQuery(Number(id));
  const [editProduct] = useEditProductMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product</div>;
  }

  const handleEditProduct = async (productData: Partial<Product>) => {
    try {
      await editProduct({ id: Number(id), product: productData }).unwrap();
    } catch (error) {
      console.error("Failed to edit product:", error);
    }
  };

  if (!productToEdit) {
    return <div>No product data found.</div>;
  }

  return (
    <ProductForm
      editMode
      productToEdit={productToEdit}
      onSubmit={handleEditProduct}
    />
  );
};

export default EditProduct;
