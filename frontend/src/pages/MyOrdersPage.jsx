// import React, { useEffect } from "react";

// const MyOrdersPage = () => {
//   const [orders, setOrders] = React.useState([]);

//   useEffect(() => {
//     // Simulate fetching orders from an API
//     setTimeout(() => {
//       const mockedOrders = [
//         {
//           _id: "1234",
//           createdAt: new Date(),
//           shippingAddress: { city: "New York", country: "USA" },
//           orderItems: [
//             {
//               name: "Product 1",
//               image: "https://picsum.photos/500/500?random=1",
//             },
//           ],
//           totalPrice: 150,
//           isPaid: true,
//         },
//         {
//           _id: "1567",
//           createdAt: new Date(),
//           shippingAddress: { city: "New York", country: "USA" },
//           orderItems: [
//             {
//               name: "Product 2",
//               image: "https://picsum.photos/500/500?random=2",
//             },
//           ],
//           totalPrice: 150,
//           isPaid: true,
//         },
//       ];
//       setOrders(mockedOrders);
//     }, 1000);
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 relative shadow-md sm:rounded-lg overflow-x-auto">
//       <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
//       <div className="relative shadow-md sm:rounded-lg">
//         <table className="min-w-[800px] text-left text-gray-500">
//           <thead className="bg-gray-100 text-xs uppercase text-gray-700">
//             <tr>
//               <th className="px-4 py-2 sm:py-3">Image</th>
//               <th className="px-4 py-2 sm:py-3">Order ID</th>
//               <th className="px-4 py-2 sm:py-3 hidden md:table-cell">
//                 Created
//               </th>
//               <th className="px-4 py-2 sm:py-3 hidden md:table-cell">
//                 Shipping Address
//               </th>
//               <th className="px-4 py-2 sm:py-3 hidden md:table-cell">Items</th>
//               <th className="px-4 py-2 sm:py-3">Price</th>
//               <th className="px-4 py-2 sm:py-3">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.length > 0 ? (
//               orders.map((order) => (
//                 <tr key={order._id} className="border-b hover:bg-gray-50">
//                   <td className="px-4 py-2 sm:py-3">
//                     <img
//                       src={order.orderItems[0].image}
//                       alt={order.orderItems[0].name}
//                       className="w-12 h-12 object-cover rounded-lg"
//                     />
//                   </td>
//                   <td className="px-2 py-2 sm:py-4 font-medium text-gray-900 whitespace-nowrap">
//                     {order._id}
//                   </td>
//                   <td className="px-2 py-2 sm:py-4 sm:px-4">
//                     {new Date(order.createdAt).toLocaleDateString()}
//                     {""} {new Date(order.createdAt).toLocaleTimeString()}
//                   </td>
//                   <td className="px-2 py-2 sm:py-4 sm:px-4">
//                     {order.shippingAddress
//                       ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
//                       : "N/A"}
//                   </td>
//                   <td className="px-2 py-2 sm:py-4 sm:px-4">
//                     {order.orderItems.length} item
//                   </td>
//                   <td className="px-2 py-2 sm:py-4 sm:px-4">
//                     #{order.totalPrice}
//                   </td>
//                   <td className="px-2 py-2 sm:py-4 sm:px-4">
//                     {order.isPaid ? "Paid" : "Not Paid"}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan="7"
//                   className="px-4 py-4 text-gray-500 sm:py-3 text-center"
//                 >
//                   No orders found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyOrdersPage;
import React, { useEffect } from "react";

const MyOrdersPage = () => {
  const [orders, setOrders] = React.useState([]);

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

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>

      {/* Horizontal scroll wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-[750px] w-full text-left text-gray-500">
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
              <tr key={order._id} className="border-b">
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
