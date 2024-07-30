import { useGetCartsQuery } from "../../service/Api/Cart/CartApiSlice";
import { useGetProductsByIdsQuery } from "../../service/Api/Product/ProductApiSlice";
import { useGetUsersByIdsQuery } from "../../service/Api/Users/UsersApiSlice";
import Typography from "../Typography";
import { TiDelete } from "react-icons/ti";
import { useDeleteCartMutation } from "../../service/Api/Cart/CartApiSlice";

const AdminCartList = () => {
  const {
    data: carts,
    error: cartsError,
    isLoading: cartsLoading,
  } = useGetCartsQuery();
  const allProductIds: number[] = carts
    ? carts.flatMap((cart) => cart.products.map((product) => product.productId))
    : [];
  const allUserIds: number[] = carts ? carts.map((cart) => cart.userId) : [];
  const {
    data: productsData,
    error: productsError,
    isLoading: productsLoading,
  } = useGetProductsByIdsQuery(allProductIds);
  const {
    data: usersData,
    error: usersError,
    isLoading: usersLoading,
  } = useGetUsersByIdsQuery(allUserIds);
  const [deleteCart] = useDeleteCartMutation();

  if (cartsLoading || productsLoading || usersLoading)
    return <div className="text-center mt-4 text-gray-600">Loading...</div>;
  if (cartsError || productsError || usersError)
    return (
      <div className="text-center mt-4 text-red-600">Error loading data</div>
    );

  const handleDelete = async (cartId: number) => {
    try {
      await deleteCart(cartId).unwrap();
    } catch (error) {
      console.error("Failed to delete the cart: ", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Typography
        variant="h1"
        content="Admin Cart List"
        className="text-center text-gray-800"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carts?.map((cart) => {
          const user = usersData?.find((user) => user.id === cart.userId);
          const username = user?.username ?? "User details not available";

          return (
            <div
              key={cart.id}
              className="relative bg-white shadow-lg rounded-lg p-6 border border-gray-200"
            >
              <button
                onClick={() => handleDelete(cart.id)}
                className="absolute top-2 right-2 p-2 text-gray-700"
              >
                <TiDelete size={24} />
              </button>
              <div className="flex flex-col h-full">
                <div className="flex flex-col mb-4">
                  <Typography
                    variant="h2"
                    content={`Cart ID: ${cart.id}`}
                    className="text-gray-700"
                  />
                  <Typography
                    variant="p"
                    content={`User: ${username}`}
                    className="text-gray-500"
                  />
                  <Typography
                    variant="p"
                    content={`Date: ${new Date(
                      cart.date
                    ).toLocaleDateString()}`}
                    className="text-gray-500"
                  />
                </div>
                <div className="flex-1">
                  <Typography
                    variant="h3"
                    content="Products:"
                    className="text-gray-700 mb-2"
                  />
                  <ul className="space-y-4">
                    {cart.products.map((product, index) => {
                      const productDetails = productsData?.find(
                        (p) => p.id === product.productId
                      );

                      if (!productDetails)
                        return (
                          <li key={index} className="text-gray-500">
                            Product details not available
                          </li>
                        );

                      return (
                        <li
                          key={index}
                          className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
                        >
                          <img
                            src={productDetails.image}
                            alt={`Product ${product.productId}`}
                            className="w-20 h-20 object-cover rounded-lg border border-gray-300"
                          />
                          <div className="flex-1">
                            <Typography
                              variant="p"
                              content={`Product ID: ${product.productId}`}
                              className="text-gray-800 font-medium"
                            />
                            <Typography
                              variant="p"
                              content={`Quantity: ${product.quantity}`}
                              className="text-gray-600"
                            />
                            <Typography
                              variant="p"
                              content={`Product Name: ${productDetails.title}`}
                              className="text-gray-800 font-medium"
                            />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminCartList;
