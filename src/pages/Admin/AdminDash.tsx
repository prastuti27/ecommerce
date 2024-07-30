import { useState, useEffect } from "react";
import Card from "../../components/Admin/DashCard";
import { FaUsers, FaBox, FaShoppingCart } from "react-icons/fa";
import { useGetProductsQuery } from "../../service/Api/Product/ProductApiSlice";
import { useGetUsersQuery } from "../../service/Api/Users/UsersApiSlice";
import { useGetCartsQuery } from "../../service/Api/Cart/CartApiSlice";

const AdminDash = () => {
  const {
    data: products,
    error: productError,
    isLoading: productLoading,
  } = useGetProductsQuery();
  const {
    data: users,
    error: userError,
    isLoading: userLoading,
  } = useGetUsersQuery();
  const {
    data: orders,
    error: orderError,
    isLoading: orderLoading,
  } = useGetCartsQuery();

  const [stats, setStats] = useState({ products: 0, users: 0, orders: 0 });

  useEffect(() => {
    if (products) setStats((prev) => ({ ...prev, products: products.length }));
  }, [products]);

  useEffect(() => {
    if (orders) setStats((prev) => ({ ...prev, orders: orders.length }));
  }, [orders]);

  useEffect(() => {
    if (users) setStats((prev) => ({ ...prev, users: users.length }));
  }, [users]);

  if (productLoading || userLoading || orderLoading)
    return <div>Loading...</div>;
  if (productError || userError || orderError)
    return <div>Error fetching data.</div>;

  return (
    <div className="mt-14 flex justify-around flex-wrap p-5">
      <Card
        title="Users"
        count={stats.users}
        color="#f48285"
        icon={<FaUsers />}
        additionalInfo="Total Users"
      />
      <Card
        title="Products"
        count={stats.products}
        color="#76b5c5"
        icon={<FaBox />}
        additionalInfo="Total Products"
      />
      <Card
        title="Orders"
        count={stats.orders}
        color="#847c89"
        icon={<FaShoppingCart />}
        additionalInfo="Total Orders"
      />
    </div>
  );
};

export default AdminDash;
