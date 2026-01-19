import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyOrdersPage = () => {
  const [orders, setOrders] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setOrders([
        {
          _id: "1234",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 150,
          isPaid: true,
        },
        {
          _id: "1567",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 150,
          isPaid: true,
        },
      ]);
    }, 1000);
  }, []);

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>

      {/* Horizontal scroll wrapper */}
      <div className="overflow-x-auto ">
        <table className="min-w-[750px] w-full text-left text-gray-500 cursor-pointer">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Order ID</th>

              <th className="px-4 py-3 hidden md:table-cell">Created</th>
              <th className="px-4 py-3 hidden md:table-cell">
                Shipping Address
              </th>
              <th className="px-4 py-3 hidden md:table-cell">Items</th>

              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order._id}
                onClick={() => handleRowClick(order._id)}
                className="border-b"
              >
                <td className="px-4 py-3">
                  <img
                    src={order.orderItems[0].image}
                    alt={order.orderItems[0].name}
                    className="w-12 h-12 rounded object-cover"
                  />
                </td>

                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                  {order._id}
                </td>

                <td className="px-4 py-3 hidden md:table-cell">
                  {new Date(order.createdAt).toLocaleString()}
                </td>

                <td className="px-4 py-3 hidden md:table-cell">
                  {order.shippingAddress.city}, {order.shippingAddress.country}
                </td>

                <td className="px-4 py-3 hidden md:table-cell">
                  {order.orderItems.length}
                </td>

                <td className="px-4 py-3 font-semibold">₦{order.totalPrice}</td>

                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.isPaid
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.isPaid ? "Paid" : "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
