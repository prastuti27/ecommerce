import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../../service/Api/Product/ProductApiSlice";
import { useNavigate } from "react-router-dom";
import Table from "./Table";
import Button from "../Button";

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    navigate(`/admin/edit-product/${id}`);
  };

  const handleAddProduct = () => {
    navigate(`/admin/add-product`);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id).unwrap();
      console.log(`Deleted product with id: ${id}`);
    } catch (error) {
      console.error("Failed to delete the product: ", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products.</div>;

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white hover:bg-blue-700"
        >
          Add Product
        </Button>
      </div>
      <Table
        data={products ?? []}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};

export default Products;
