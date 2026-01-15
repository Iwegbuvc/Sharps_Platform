import { Link } from "react-router-dom";

// Dummy data for stats & recent orders
const stats = [
  {
    title: "Total Revenue",
    value: "$12,450",
    linkText: "Manage Orders",
    link: "/admin/orders",
  },
  {
    title: "Total Orders",
    value: "120",
    linkText: "Manage Orders",
    link: "/admin/orders",
  },
  {
    title: "Total Products",
    value: "85",
    linkText: "Manage Products",
    link: "/admin/products",
  },
];

const recentOrders = [
  {
    id: "ORD-001",
    user: "John Doe",
    total: "$120",
    status: "Processing",
  },
  {
    id: "ORD-002",
    user: "Jane Smith",
    total: "$250",
    status: "Shipped",
  },
  {
    id: "ORD-003",
    user: "Alice Johnson",
    total: "$75",
    status: "Delivered",
  },
  {
    id: "ORD-004",
    user: "Bob Williams",
    total: "$180",
    status: "Canceled",
  },
];

const statusColors = {
  Processing: "bg-yellow-200 text-yellow-800",
  Shipped: "bg-blue-200 text-blue-800",
  Delivered: "bg-green-200 text-green-800",
  Canceled: "bg-red-200 text-red-800",
};

// const AdminDashboard = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {stats.map((stat) => (
//           <div
//             key={stat.title}
//             className="bg-white shadow rounded-lg p-6 flex flex-col justify-between"
//           >
//             <div>
//               <h3 className="text-gray-500 text-sm font-medium">
//                 {stat.title}
//               </h3>
//               <p className="mt-2 text-2xl font-semibold text-gray-900">
//                 {stat.value}
//               </p>
//             </div>
//             <Link
//               to={stat.link}
//               className="mt-4 text-sm text-blue-600 hover:underline"
//             >
//               {stat.linkText}
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* Recent Orders Table */}
//       <div className="bg-white shadow rounded-lg overflow-x-auto">
//         <h2 className="text-xl font-medium text-gray-900 p-6 border-b">
//           Recent Orders
//         </h2>
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Order ID
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 User
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Total Price
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {recentOrders.map((order) => (
//               <tr key={order.id}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   {order.id}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {order.user}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {order.total}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span
//                     className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       statusColors[order.status]
//                     }`}
//                   >
//                     {order.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
const AdminDashboard = () => {
  return (
    <div className="w-full p-4 sm:p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white shadow rounded-lg p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
            </div>
            <Link
              to={stat.link}
              className="mt-4 text-sm text-blue-600 hover:underline"
            >
              {stat.linkText}
            </Link>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white shadow rounded-lg">
        <h2 className="text-lg font-medium p-4 border-b">Recent Orders</h2>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4">{order.id}</td>
                  <td className="px-6 py-4">{order.user}</td>
                  <td className="px-6 py-4">{order.total}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        statusColors[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="md:hidden divide-y">
          {recentOrders.map((order) => (
            <div key={order.id} className="p-4 space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{order.id}</span>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    statusColors[order.status]
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{order.user}</p>
              <p className="font-semibold">{order.total}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
