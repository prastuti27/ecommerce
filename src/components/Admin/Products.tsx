import { useState } from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../../service/Api/Product/ProductApiSlice";
import { useNavigate } from "react-router-dom";
import Table from "./Table";
import Button from "../Button";
import DeleteModal from "./DeleteModal";

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState<number | null>(
    null
  );
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    navigate(`/admin/edit-product/${id}`);
  };

  const handleAddProduct = () => {
    navigate(`/admin/add-product`);
  };

  const openDeleteConfirmation = (id: number) => {
    setProductIdToDelete(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (productIdToDelete !== null) {
      try {
        await deleteProduct(productIdToDelete).unwrap();
        console.log(`Deleted product with id: ${productIdToDelete}`);
      } catch (error) {
        console.error("Failed to delete the product: ", error);
      }
      setIsModalOpen(false);
      setProductIdToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setProductIdToDelete(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products.</div>;

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white hover:bg-blue-700 mt-5"
        >
          Add Product
        </Button>
      </div>
      <Table
        data={products ?? []}
        onEdit={handleEdit}
        onDelete={openDeleteConfirmation} // Pass the function to open the modal
      />
      <DeleteModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        message="Are you sure you want to delete this product?"
      />
    </>
  );
};

export default Products;
