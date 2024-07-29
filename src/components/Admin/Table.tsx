import Button from "../Button";
import { FaEdit, FaTrash } from "react-icons/fa";

interface TableProps {
  data: {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
  }[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const Table = ({ data, onEdit, onDelete }: TableProps) => {
  return (
    <div className="products-container mt-5">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">{product.id}</td>
              <td className="py-2 px-4 border-b">{product.title}</td>
              <td className="py-2 px-4 border-b">{product.price}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <div className="flex">
                  <Button
                    onClick={() => onEdit(product.id)}
                    className="mr-2 text-blue-500 hover:text-blue-700 flex items-center"
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    onClick={() => onDelete(product.id)}
                    className="text-red-500 hover:text-red-700 flex items-center"
                  >
                    <FaTrash />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
