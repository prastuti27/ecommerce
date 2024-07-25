import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Product } from "../../types/types";
import Typography from "../../components/Typography";
import { FaImage } from "react-icons/fa";
import Button from "../../components/Button";
import Input from "../Input";

interface ProductFormState {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface ProductFormProps {
  editMode?: boolean;
  productToEdit?: Product;
  onSubmit: (productData: Partial<Product>) => void;
}

const ProductForm = ({
  editMode = false,
  productToEdit,
  onSubmit,
}: ProductFormProps) => {
  const [formData, setFormData] = useState<ProductFormState>({
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (productToEdit) {
      setFormData({
        title: productToEdit.title,
        price: productToEdit.price,
        description: productToEdit.description,
        image: productToEdit.image,
        category: productToEdit.category,
      });
      setImagePreview(productToEdit.image);
    }
  }, [productToEdit]);

  const { title, price, description, category } = formData;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" ? parseFloat(value) : value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result as string,
        }));
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Typography
        variant="h1"
        content={editMode ? "Edit Product" : "Add Product"}
      />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-8">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-48 h-48 object-cover rounded-full"
            />
          ) : (
            <div className="w-48 h-48 flex items-center justify-center rounded-full border border-dotted border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-500">
              <FaImage size={48} />
            </div>
          )}
        </div>
        <div className="space-y-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white"
          />
          <div className="flex flex-wrap space-x-4">
            <Input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              placeholder="Title"
              className="flex-1 p-4 "
            />
            <Input
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              placeholder="Price"
              className="flex-1 p-4 "
            />
          </div>
          <div className="flex flex-wrap space-x-4">
            <Input
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
              placeholder="Description"
              className="flex-1 p-4 "
            />
            <Input
              type="text"
              name="category"
              value={category}
              onChange={handleChange}
              placeholder="Category"
              className="flex-1 p-4 "
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-lg font-semibold"
        >
          {editMode ? "Update Product" : "Add Product"}
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
