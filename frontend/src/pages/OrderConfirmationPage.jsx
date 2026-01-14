const checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 120,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "T-shirt",
      color: "black",
      size: "M",
      price: 90,
      quantity: 1,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Fashion Street",
    city: "New York",
    country: "USA",
  },
};
// const OrderConfirmationPage = () => {
//   const calculateEstimatedDelivery = (createdAt) => {
//     const orderDate = new Date(createdAt);
//     orderDate.setDate(orderDate.getDate() + 10); // Add 10 days to the order date
//     return orderDate.toLocaleDateString();
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white">
//       <h1 className="text-w-4xl font-bold text-center text-emerald-700 mb-8">
//         Thank You for Your Order!
//       </h1>
//       {checkout && (
//         <div className="p-6 rounded-lg border">
//           <div className="flex justify-between mb-20">
//             {/* Order ID and DATE */}
//             <div>
//               <h2 className="text-xl font-semibold ">
//                 Order ID: {checkout._id}
//               </h2>
//               <p className="text-gray-500">
//                 Order date:{new Date(checkout.createdAt).toLocaleDateString()}
//               </p>
//             </div>
//             {/* Estimated Delivery */}
//             <div>
//               <p className="text-emerald-700 text-sm">
//                 Estimated Delivery:{""}{" "}
//                 {calculateEstimatedDelivery(checkout.createdAt)}
//               </p>
//             </div>
//           </div>
//           {/* Ordered Items */}
//           <div className="mb-20">
//             {checkout.checkoutItems.map((item) => (
//               <div key={item.productId} className="flex items-center mb-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover rounded-md mr-4"
//                 />
//                 <div>
//                   <h4 className="text-md font-semibold">{item.name}</h4>
//                   <p className="text-sm text-gray-500">
//                     {item.color} | {item.size}
//                   </p>
//                 </div>
//                 <div className="ml-auto text-right">
//                   <p className="text-md">${item.price}</p>
//                   <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* Payment and Delivery Info */}
//           <div className="grid grid-cols-2 gap-8">
//             {/* Payment Info */}
//             <div>
//               <h4 className="text-lg font-semibold mb-2">Payment</h4>
//               <p className="text-gray-600">PayStack</p>
//             </div>
//             {/* Delivery Info */}
//             <div>
//               <h4 className="text-lg font-semibold mb-2">Delivery</h4>
//               <p className="text-gray-600">
//                 {checkout.shippingAddress.address}
//               </p>
//               <p className="text-gray-600">
//                 {checkout.shippingAddress.city},{" "}
//                 {checkout.shippingAddress.country}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderConfirmationPage;

const OrderConfirmationPage = () => {
  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 bg-white">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-emerald-700 mb-6 sm:mb-8">
        Thank You for Your Order!
      </h1>

      {checkout && (
        <div className="p-4 sm:p-6 rounded-lg border">
          {/* Order Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <h2 className="text-base sm:text-lg font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-sm text-gray-500">
                Order date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-sm text-emerald-700 font-medium">
                Estimated Delivery:
              </p>
              <p className="text-sm text-gray-600">
                {calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>

          {/* Ordered Items */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            {checkout.checkoutItems.map((item) => (
              <div
                key={item.productId}
                className="flex flex-col sm:flex-row sm:items-center gap-4 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md"
                />

                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-sm sm:text-base font-medium">
                    ${item.price}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment & Delivery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-1">
                Payment
              </h4>
              <p className="text-sm text-gray-600">PayStack</p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-1">
                Delivery
              </h4>
              <p className="text-sm text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-sm text-gray-600">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
