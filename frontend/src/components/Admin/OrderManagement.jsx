// import { useState } from "react";

// const STATUS_COLORS = {
//   processing: "bg-yellow-100 text-yellow-800",
//   shipped: "bg-blue-100 text-blue-800",
//   delivered: "bg-green-100 text-green-800",
//   cancelled: "bg-red-100 text-red-800",
// };

// const ORDER_STATUSES = ["processing", "shipped", "delivered", "cancelled"];

// const initialOrders = [
//   {
//     id: "ORD-1001",
//     user: "John Doe",
//     email: "john@email.com",
//     total: 120,
//     status: "processing",
//     createdAt: "2026-01-12",
//   },
// ];

// const AdminOrders = () => {
//   const [orders, setOrders] = useState(initialOrders);

//   const updateOrderStatus = (orderId, newStatus) => {
//     setOrders((prev) =>
//       prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
//     );
//   };

//   const canUpdateStatus = (current, next) => {
//     if (current === "cancelled" || current === "delivered") return false;
//     if (current === "processing" && next === "shipped") return true;
//     if (current === "shipped" && next === "delivered") return true;
//     if (next === "cancelled") return true;
//     return false;
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4 md:p-6">
//       <h1 className="text-2xl font-semibold mb-6">Orders</h1>

//       {/* DESKTOP TABLE */}
//       <div className="hidden md:block bg-white rounded shadow overflow-x-auto">
//         <table className="min-w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left">Order</th>
//               <th className="px-6 py-3 text-left">Customer</th>
//               <th className="px-6 py-3 text-left">Email</th>
//               <th className="px-6 py-3 text-left">Total</th>
//               <th className="px-6 py-3 text-left">Status</th>
//               <th className="px-6 py-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y">
//             {orders.map((o) => (
//               <tr key={o.id}>
//                 <td className="px-6 py-4">{o.id}</td>
//                 <td className="px-6 py-4">{o.user}</td>
//                 <td className="px-6 py-4">{o.email}</td>
//                 <td className="px-6 py-4">${o.total}</td>
//                 <td className="px-6 py-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
//                       STATUS_COLORS[o.status]
//                     }`}
//                   >
//                     {o.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex flex-wrap gap-2">
//                     {ORDER_STATUSES.map((s) => (
//                       <button
//                         key={s}
//                         disabled={
//                           o.status === s || !canUpdateStatus(o.status, s)
//                         }
//                         onClick={() => updateOrderStatus(o.id, s)}
//                         className={`px-3 py-1 text-xs rounded border ${
//                           o.status === s
//                             ? "bg-black text-white"
//                             : "hover:bg-gray-100"
//                         } ${
//                           !canUpdateStatus(o.status, s)
//                             ? "opacity-40 cursor-not-allowed"
//                             : ""
//                         }`}
//                       >
//                         {s}
//                       </button>
//                     ))}
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* MOBILE CARDS */}
//       <div className="md:hidden space-y-4">
//         {orders.map((o) => (
//           <div key={o.id} className="bg-white p-4 rounded shadow space-y-2">
//             <div className="flex justify-between">
//               <span className="font-medium">{o.id}</span>
//               <span
//                 className={`px-2 py-1 rounded text-xs capitalize ${
//                   STATUS_COLORS[o.status]
//                 }`}
//               >
//                 {o.status}
//               </span>
//             </div>

//             <p className="text-sm">{o.user}</p>
//             <p className="text-sm">{o.email}</p>
//             <p className="font-semibold">${o.total}</p>

//             <div className="flex flex-wrap gap-2 pt-2">
//               {ORDER_STATUSES.map((s) => (
//                 <button
//                   key={s}
//                   disabled={o.status === s || !canUpdateStatus(o.status, s)}
//                   onClick={() => updateOrderStatus(o.id, s)}
//                   className="px-3 py-1 text-xs border rounded"
//                 >
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminOrders;

import { useState } from "react";

const STATUS_COLORS = {
  processing: "bg-yellow-100 text-yellow-800",
  shipped: "bg-blue-100 text-blue-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const ORDER_STATUSES = ["processing", "shipped", "delivered", "cancelled"];

const initialOrders = [
  {
    id: "ORD-1001",
    user: "John Doe",
    email: "john@email.com",
    total: 120,
    status: "processing",
    createdAt: "2026-01-12",
  },
];

const AdminOrders = () => {
  const [orders, setOrders] = useState(initialOrders);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  const canUpdateStatus = (current, next) => {
    if (current === "cancelled" || current === "delivered") return false;
    if (current === "processing" && next === "shipped") return true;
    if (current === "shipped" && next === "delivered") return true;
    if (next === "cancelled") return true;
    return false;
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-semibold mb-6">Orders</h1>

      {/* DESKTOP / TABLET TABLE */}
      <div className="hidden md:block bg-white rounded shadow overflow-x-auto">
        <div className="min-w-full max-w-full">
          <table className="w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">Order</th>
                <th className="px-6 py-3 text-left">Customer</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Total</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orders.map((o) => (
                <tr key={o.id}>
                  <td className="px-6 py-4">{o.id}</td>
                  <td className="px-6 py-4">{o.user}</td>
                  <td className="px-6 py-4">{o.email}</td>
                  <td className="px-6 py-4">${o.total}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                        STATUS_COLORS[o.status]
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {ORDER_STATUSES.map((s) => (
                        <button
                          key={s}
                          disabled={
                            o.status === s || !canUpdateStatus(o.status, s)
                          }
                          onClick={() => updateOrderStatus(o.id, s)}
                          className={`px-3 py-1 text-xs rounded border transition ${
                            o.status === s
                              ? "bg-black text-white cursor-default"
                              : "hover:bg-gray-100"
                          } ${
                            !canUpdateStatus(o.status, s)
                              ? "opacity-40 cursor-not-allowed"
                              : ""
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4">
        {orders.map((o) => (
          <div key={o.id} className="bg-white p-4 rounded shadow space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{o.id}</span>
              <span
                className={`px-2 py-1 rounded text-xs capitalize ${
                  STATUS_COLORS[o.status]
                }`}
              >
                {o.status}
              </span>
            </div>
            <p className="text-sm">{o.user}</p>
            <p className="text-sm">{o.email}</p>
            <p className="font-semibold">${o.total}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {ORDER_STATUSES.map((s) => (
                <button
                  key={s}
                  disabled={o.status === s || !canUpdateStatus(o.status, s)}
                  onClick={() => updateOrderStatus(o.id, s)}
                  className="px-3 py-1 text-xs border rounded"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;
