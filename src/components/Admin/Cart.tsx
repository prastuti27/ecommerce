import { useGetCartsQuery } from "../../service/Api/Cart/CartApiSlice";
import { useGetProductsByIdsQuery } from "../../service/Api/Product/ProductApiSlice";
import { useGetUsersByIdsQuery } from "../../service/Api/Users/UsersApiSlice";

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

  if (cartsLoading || productsLoading || usersLoading)
    return <div className="text-center mt-4">Loading...</div>;
  if (cartsError || productsError || usersError)
    return <div className="text-center mt-4 text-red-500">Error loading</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Admin Cart List
      </h1>
      <ul className="space-y-4">
        {carts?.map((cart) => {
          const user = usersData?.find((user) => user.id === cart.userId);
          const username = user?.username ?? "User details not available";

          return (
            <li key={cart.id} className="bg-white shadow-md rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium">Cart ID: {cart.id}</p>
                  <p className="text-gray-600">User: {username}</p>
                  <p className="text-gray-600">
                    Date: {new Date(cart.date).toLocaleDateString()}
                  </p>
                </div>
                {/* <EditCart id={cart.id} />
                <DeleteCart id={cart.id} /> */}
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Products:</h2>
                <ul className="list-disc ml-6">
                  {cart.products.map((product, index) => {
                    const productDetails = productsData?.find(
                      (p) => p.id === product.productId
                    );

                    if (!productDetails)
                      return <li key={index}>Product details not available</li>;

                    return (
                      <li
                        key={index}
                        className="text-gray-800 flex items-center space-x-4"
                      >
                        <img
                          src={productDetails.image}
                          alt={`Product ${product.productId}`}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <p>Product ID: {product.productId}</p>
                          <p>Quantity: {product.quantity}</p>
                          <p>Product Name: {productDetails.name}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminCartList;
