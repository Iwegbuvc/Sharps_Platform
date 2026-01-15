// import { useParams, Link } from "react-router-dom";

// const mockOrder = {
//   _id: "1234",
//   createdAt: new Date(),
//   isPaid: true,
//   paymentMethod: "Paystack",
//   shippingAddress: {
//     address: "123 Fashion Street",
//     city: "New York",
//     country: "USA",
//   },
//   orderItems: [
//     {
//       productId: "1",
//       name: "Black Utility Jacket",
//       price: 120,
//       quantity: 1,
//       size: "M",
//       color: "Black",
//       image: "https://picsum.photos/150?random=1",
//     },
//     {
//       productId: "2",
//       name: "Oversized Hoodie",
//       price: 90,
//       quantity: 2,
//       size: "L",
//       color: "Gray",
//       image: "https://picsum.photos/150?random=2",
//     },
//   ],
//   totalPrice: 300,
// };

// const OrderDetailsPage = () => {
//   const { id } = useParams(); // for future API use
//   const order = mockOrder;

//   return (
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
//         <div>
//           <h1 className="text-2xl sm:text-3xl font-bold">Order #{order._id}</h1>
//           <p className="text-sm text-gray-500">
//             Placed on {new Date(order.createdAt).toLocaleString()}
//           </p>
//         </div>

//         <span
//           className={`px-4 py-1 rounded-full text-sm font-semibold w-fit ${
//             order.isPaid
//               ? "bg-green-100 text-green-700"
//               : "bg-yellow-100 text-yellow-700"
//           }`}
//         >
//           {order.isPaid ? "Paid" : "Pending Payment"}
//         </span>
//       </div>

//       {/* Info Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//         {/* Payment Info */}
//         <div className="bg-white border rounded-lg p-4 sm:p-6">
//           <h3 className="font-semibold mb-2">Payment Information</h3>
//           <p className="text-sm text-gray-600">
//             Method: <span className="font-medium">{order.paymentMethod}</span>
//           </p>
//           <p className="text-sm text-gray-600">
//             Status:{" "}
//             <span className="font-medium">
//               {order.isPaid ? "Paid" : "Not Paid"}
//             </span>
//           </p>
//         </div>

//         {/* Shipping Info */}
//         <div className="bg-white border rounded-lg p-4 sm:p-6">
//           <h3 className="font-semibold mb-2">Shipping Information</h3>
//           <p className="text-sm text-gray-600">
//             {order.shippingAddress.address}
//           </p>
//           <p className="text-sm text-gray-600">
//             {order.shippingAddress.city}, {order.shippingAddress.country}
//           </p>
//         </div>
//       </div>

//       {/* Ordered Products */}
//       <div className="bg-white border rounded-lg p-4 sm:p-6 mb-8">
//         <h2 className="text-lg font-semibold mb-4">Products Ordered</h2>

//         <div className="space-y-4">
//           {order.orderItems.map((item) => (
//             <div
//               key={item.productId}
//               className="flex flex-col sm:flex-row sm:items-center gap-4 border-b pb-4 last:border-none"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-16 h-20 object-cover rounded"
//               />

//               <div className="flex-1">
//                 <h4 className="font-medium">{item.name}</h4>
//                 <p className="text-sm text-gray-500">
//                   {item.color} • Size {item.size}
//                 </p>
//                 <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
//               </div>

//               <p className="font-semibold">₦{item.price * item.quantity}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Total + Back Link */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <p className="text-lg font-semibold">Total Paid: ₦{order.totalPrice}</p>

//         <Link
//           to="/profile"
//           className="inline-block text-sm font-medium text-emerald-700 hover:underline"
//         >
//           ← Back to My Orders
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default OrderDetailsPage;

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const mockOrder = {
  _id: "1234",
  createdAt: new Date(),
  isPaid: true,
  paymentMethod: "Paystack",
  shippingAddress: {
    address: "123 Fashion Street",
    city: "New York",
    country: "USA",
  },
  orderItems: [
    {
      productId: "1",
      name: "Black Utility Jacket",
      price: 120,
      quantity: 1,
      size: "M",
      color: "Black",
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "Oversized Hoodie",
      price: 90,
      quantity: 2,
      size: "L",
      color: "Gray",
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 300,
};

const OrderDetailsPage = () => {
  const { id } = useParams();

  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API request
    setLoading(true);

    setTimeout(() => {
      if (id === mockOrder._id) {
        setOrderDetails(mockOrder);
      } else {
        setOrderDetails(null);
      }
      setLoading(false);
    }, 800);
  }, [id]);

  /* ------------------ STATES ------------------ */

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading order details...
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="max-w-xl mx-auto py-20 text-center">
        <h2 className="text-xl font-semibold mb-3">No order details found</h2>
        <p className="text-gray-500 mb-6">
          This order does not exist or may have been removed.
        </p>
        <Link
          to="/profile"
          className="text-emerald-700 font-medium hover:underline"
        >
          ← Back to My Orders
        </Link>
      </div>
    );
  }

  /* ------------------ MAIN UI ------------------ */

  const order = orderDetails;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Order #{order._id}</h1>
          <p className="text-sm text-gray-500">
            Placed on {new Date(order.createdAt).toLocaleString()}
          </p>
        </div>

        <span
          className={`px-4 py-1 rounded-full text-sm font-semibold w-fit ${
            order.isPaid
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {order.isPaid ? "Paid" : "Pending Payment"}
        </span>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Payment */}
        <div className="bg-white border rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold mb-2">Payment Information</h3>
          <p className="text-sm text-gray-600">
            Method: <span className="font-medium">{order.paymentMethod}</span>
          </p>
          <p className="text-sm text-gray-600">
            Status:{" "}
            <span className="font-medium">
              {order.isPaid ? "Paid" : "Not Paid"}
            </span>
          </p>
        </div>

        {/* Shipping */}
        <div className="bg-white border rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold mb-2">Shipping Information</h3>
          <p className="text-sm text-gray-600">
            {order.shippingAddress.address}
          </p>
          <p className="text-sm text-gray-600">
            {order.shippingAddress.city}, {order.shippingAddress.country}
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="bg-white border rounded-lg p-4 sm:p-6 mb-8 cursor-pointer">
        <h2 className="text-lg font-semibold mb-4">Products Ordered</h2>

        <div className="space-y-4">
          {order.orderItems.map((item) => (
            <div
              key={item.productId}
              className="flex flex-col sm:flex-row sm:items-center gap-4 border-b pb-4 last:border-none"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-20 object-cover rounded"
              />

              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-500">
                  {item.color} • Size {item.size}
                </p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>

              <p className="font-semibold">₦{item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-lg font-semibold">Total Paid: ₦{order.totalPrice}</p>

        <Link
          to="/profile"
          className="text-sm font-medium text-emerald-700 hover:underline"
        >
          ← Back to My Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
