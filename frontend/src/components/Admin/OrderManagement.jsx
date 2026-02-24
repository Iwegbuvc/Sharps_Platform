import React from "react";
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
//       prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o)),
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

// {/* DESKTOP / TABLET TABLE */}
// <div className="hidden md:block bg-white rounded shadow overflow-x-auto">
//   <div className="min-w-full max-w-full">
//     <table className="w-full table-auto">
//       <thead className="bg-gray-50">
//         <tr>
//           <th className="px-6 py-3 text-left">Order</th>
//           <th className="px-6 py-3 text-left">Customer</th>
//           <th className="px-6 py-3 text-left">Email</th>
//           <th className="px-6 py-3 text-left">Total</th>
//           <th className="px-6 py-3 text-left">Status</th>
//           <th className="px-6 py-3 text-left">Actions</th>
//         </tr>
//       </thead>
//       <tbody className="divide-y">
//         {orders.map((o) => (
//           <tr key={o.id}>
//             <td className="px-6 py-4">{o.id}</td>
//             <td className="px-6 py-4">{o.user}</td>
//             <td className="px-6 py-4">{o.email}</td>
//             <td className="px-6 py-4">${o.total}</td>
//             <td className="px-6 py-4">
//               <span
//                 className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
//                   STATUS_COLORS[o.status]
//                 }`}
//               >
//                 {o.status}
//               </span>
//             </td>
//             <td className="px-6 py-4">
//               <div className="flex flex-wrap gap-2">
//                 {ORDER_STATUSES.map((s) => (
//                   <button
//                     key={s}
//                     disabled={
//                       o.status === s || !canUpdateStatus(o.status, s)
//                     }
//                     onClick={() => updateOrderStatus(o.id, s)}
//                     className={`px-3 py-1 text-xs rounded border transition ${
//                       o.status === s
//                         ? "bg-black text-white cursor-default"
//                         : "hover:bg-gray-100"
//                     } ${
//                       !canUpdateStatus(o.status, s)
//                         ? "opacity-40 cursor-not-allowed"
//                         : ""
//                     }`}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>

// {/* MOBILE CARDS */}
// <div className="md:hidden space-y-4">
//   {orders.map((o) => (
//     <div key={o.id} className="bg-white p-4 rounded shadow space-y-2">
//       <div className="flex justify-between">
//         <span className="font-medium">{o.id}</span>
//         <span
//           className={`px-2 py-1 rounded text-xs capitalize ${
//             STATUS_COLORS[o.status]
//           }`}
//         >
//           {o.status}
//         </span>
//       </div>
//       <p className="text-sm">{o.user}</p>
//       <p className="text-sm">{o.email}</p>
//       <p className="font-semibold">${o.total}</p>
//       <div className="flex flex-wrap gap-2 pt-2">
//         {ORDER_STATUSES.map((s) => (
//           <button
//             key={s}
//             disabled={o.status === s || !canUpdateStatus(o.status, s)}
//             onClick={() => updateOrderStatus(o.id, s)}
//             className="px-3 py-1 text-xs border rounded"
//           >
//             {s}
//           </button>
//         ))}
//       </div>
//     </div>
//   ))}
// </div>
//     </div>
//   );
// };

// export default AdminOrders;

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import API from "../../api/api";

const STATUS_COLORS = {
  processing: "bg-yellow-100 text-yellow-800",
  shipped: "bg-blue-100 text-blue-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const ORDER_STATUSES = ["processing", "shipped", "delivered", "cancelled"];

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  // Fetch orders from backend
  // const fetchOrders = async () => {
  //   try {
  //     const res = await axios.get("/api/admin/orders", {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     });
  //     // Set only the orders array
  //     setOrders(Array.isArray(res.data.orders) ? res.data.orders : []);
  //   } catch (err) {
  //     console.error("Failed to fetch orders:", err);
  //     setOrders([]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchOrders = async () => {
    try {
      // The second argument in .get() is the 'config' object where headers live
      const res = await API.get("/admin/orders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setOrders(Array.isArray(res.data.orders) ? res.data.orders : []);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  // Update order status
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      // 1. Use 'API' instead of 'axios'
      // 2. Remove '/api' from the start if your API instance baseURL already includes it
      const res = await API.patch(
        `/admin/orders/${orderId}/status`, // Changed path
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      );

      // Update local state
      setOrders((prev) =>
        prev.map((o) =>
          o._id === orderId ? { ...o, orderStatus: newStatus } : o,
        ),
      );

      // Optional: add a success toast or alert
      console.log("Status updated:", res.data.message);
    } catch (err) {
      console.error(
        "Failed to update order status:",
        err.response?.data || err.message,
      );
      alert(err.response?.data?.message || "Failed to update status");
    }
  };
  // Determine which status buttons are allowed
  const canUpdateStatus = (current, next) => {
    if (current === "cancelled" || current === "delivered") return false;
    if (current === "processing" && next === "shipped") return true;
    if (current === "shipped" && next === "delivered") return true;
    if (next === "cancelled") return true;
    return false;
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    fetchOrders();
  }, []);

  if (loading) return <p className="text-center py-20">Loading orders...</p>;
  if (!orders.length)
    return <p className="text-center py-20">No orders found.</p>;

  return (
    <div className="w-full space-y-6">
      <h1 className="text-2xl font-semibold mb-6">Orders</h1>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded shadow overflow-x-auto w-full">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm">Order ID</th>
              <th className="px-4 py-3 text-left text-sm">Customer</th>
              <th className="px-4 py-3 text-left text-sm hidden lg:table-cell">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm">Total</th>
              <th className="px-4 py-3 text-left text-sm">Payment</th>
              <th className="px-4 py-3 text-left text-sm">Status</th>
              <th className="px-4 py-3 text-left text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {orders.map((o) => (
              <React.Fragment key={o._id}>
                <tr>
                  <td className="px-4 py-4 text-sm break-all">{o._id}</td>
                  <td className="px-4 py-4 text-sm">{o.user?.name || "N/A"}</td>
                  <td className="px-4 py-4 text-sm hidden lg:table-cell truncate">
                    {o.user?.email || "N/A"}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium">
                    ₦{o.totalAmount?.toLocaleString()}
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <span className="block text-xs font-medium">
                      {o.paymentMethod || "Paystack"}
                    </span>
                    <span
                      className={`block text-xs mt-1 font-semibold ${o.paymentStatus === "paid" ? "text-green-700" : "text-red-600"}`}
                    >
                      {o.paymentStatus === "paid"
                        ? "Paid"
                        : o.paymentMethod === "Pay on Delivery"
                          ? "Not Paid"
                          : "Pending"}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium capitalize inline-block ${
                        STATUS_COLORS[o.orderStatus]
                      }`}
                    >
                      {o.orderStatus}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1">
                      {ORDER_STATUSES.map((s) => (
                        <button
                          key={s}
                          disabled={
                            o.orderStatus === s ||
                            !canUpdateStatus(o.orderStatus, s)
                          }
                          onClick={() => updateOrderStatus(o._id, s)}
                          className={`px-2 py-1 text-xs rounded border transition ${
                            o.orderStatus === s
                              ? "bg-black text-white cursor-default"
                              : "hover:bg-gray-100"
                          } ${
                            !canUpdateStatus(o.orderStatus, s)
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
                {/* Responsive product details row */}
                <tr>
                  <td colSpan={7} className="bg-gray-50 px-4 py-2">
                    <div className="flex flex-wrap gap-4">
                      {(o.items || o.cartItems || []).map((item) => (
                        <div
                          key={item._id}
                          className="flex items-center gap-2 border p-2 rounded w-full sm:w-auto"
                        >
                          <img
                            src={
                              item.selectedImage ||
                              item.image ||
                              item.product.images[0]?.url
                            }
                            alt={item.product.name}
                            className="w-14 h-14 object-cover rounded"
                          />
                          <div>
                            <div className="font-semibold text-xs md:text-sm">
                              {item.product.name}
                            </div>
                            <div className="text-xs">Size: {item.size}</div>
                            <div className="text-xs">Qty: {item.quantity}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4 w-full">
        {orders.map((o) => (
          <div key={o._id} className="bg-white p-4 rounded shadow space-y-3">
            <div className="flex justify-between items-start gap-2">
              <div className="flex-1">
                <p className="text-xs text-gray-600 mb-1">
                  Order ID: {o._id?.slice(-8)}
                </p>
                <p className="font-semibold text-sm">{o.user?.name || "N/A"}</p>
                <p className="text-xs text-gray-600">
                  {o.user?.email || "N/A"}
                </p>
                <p className="text-xs mt-1 font-medium">
                  {o.paymentMethod || "Paystack"}
                </p>
                <span
                  className={`block text-xs mt-1 font-semibold ${o.paymentStatus === "paid" ? "text-green-700" : "text-red-600"}`}
                >
                  {o.paymentStatus === "paid"
                    ? "Paid"
                    : o.paymentMethod === "Pay on Delivery"
                      ? "Not Paid"
                      : "Pending"}
                </span>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full font-medium capitalize whitespace-nowrap ${
                  STATUS_COLORS[o.orderStatus]
                }`}
              >
                {o.orderStatus}
              </span>
            </div>
            <p className="text-sm font-semibold">
              ₦{o.totalAmount?.toLocaleString()}
            </p>
            {/* Responsive product details for mobile */}
            <div className="flex flex-wrap gap-2 mt-2">
              {(o.items || o.cartItems || []).map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-2 border p-1 rounded w-full sm:w-auto"
                >
                  <img
                    src={
                      item.selectedImage ||
                      item.image ||
                      item.product.images[0]?.url
                    }
                    alt={item.product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <div className="font-semibold text-xs">
                      {item.product.name}
                    </div>
                    <div className="text-xs">Size: {item.size}</div>
                    <div className="text-xs">Qty: {item.quantity}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1 pt-2">
              {ORDER_STATUSES.map((s) => (
                <button
                  key={s}
                  disabled={
                    o.orderStatus === s || !canUpdateStatus(o.orderStatus, s)
                  }
                  onClick={() => updateOrderStatus(o._id, s)}
                  className={`px-2 py-1 text-xs border rounded transition ${
                    o.orderStatus === s
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  } ${
                    !canUpdateStatus(o.orderStatus, s)
                      ? "opacity-40 cursor-not-allowed"
                      : ""
                  }`}
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
