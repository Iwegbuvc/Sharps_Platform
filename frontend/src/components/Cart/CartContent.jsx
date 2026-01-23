// import { RiDeleteBin3Line } from "react-icons/ri";

// const CartContent = () => {
//   const cartProducts = [
//     {
//       id: 1,
//       name: "T-Shirt",
//       price: 29.99,
//       quantity: 1,
//       image: "https://picsum.photos/200?random=1",
//     },
//     {
//       id: 2,
//       name: "Jeans",
//       price: 25.99,
//       quantity: 1,
//       image: "https://picsum.photos/200?random=2",
//     },
//   ];
//   return (
//     <div>
//       {cartProducts.map((product, index) => (
//         <div
//           key={index}
//           className="flex items-start justify-between py-4 border-b mb-4"
//         >
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-26 h-26 object-cover rounded-md"
//           />
//           <div className="ml-4">
//             <h3 className="font-semibold">{product.name}</h3>
//             <p className="text-gray-600">${product.price.toFixed(2)}</p>
//             <p className="text-gray-500">Qty: {product.quantity}</p>
//             <div className="flex items-center mt-2">
//               <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l font-medium">
//                 -
//               </button>
//               <span className="bg-gray-100 px-3 py-1">{product.quantity}</span>
//               <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r">
//                 +
//               </button>
//             </div>
//           </div>
//           <div>
//             <p>${(product.price * product.quantity).toFixed(2)}</p>
//             <button>
//               <RiDeleteBin3Line className="h-6 w-6 text-red-600 mt-2" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CartContent;

// import { RiDeleteBin3Line } from "react-icons/ri";
// import useCart from "../../hooks/useCart";

// const CartContent = () => {
//   const { cart, updateItem, removeItem } = useCart();

//   if (!cart.items.length) {
//     return <p className="text-gray-500">Your cart is empty</p>;
//   }

//   return (
//     <div>
//       {cart.items.map((item) => (
//         <div
//           key={item._id}
//           className="flex items-start justify-between py-4 border-b mb-4"
//         >
//           <img
//             src={item.product.images[0]?.url}
//             alt={item.product.name}
//             className="w-26 h-26 object-cover rounded-md"
//           />

//           <div className="ml-4">
//             <h3 className="font-semibold">{item.product.name}</h3>
//             <p className="text-gray-600">£{item.priceAtTime.toFixed(2)}</p>
//             <p className="text-gray-500">Qty: {item.quantity}</p>

//             <div className="flex items-center mt-2">
//               <button
//                 className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l font-medium"
//                 onClick={() => updateItem(item._id, item.quantity - 1)}
//                 disabled={item.quantity <= 1}
//               >
//                 -
//               </button>

//               <span className="bg-gray-100 px-3 py-1">{item.quantity}</span>

//               <button
//                 className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r"
//                 onClick={() => updateItem(item._id, item.quantity + 1)}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <div className="text-right">
//             <p>£{(item.priceAtTime * item.quantity).toFixed(2)}</p>
//             <button onClick={() => removeItem(item._id)}>
//               <RiDeleteBin3Line className="h-6 w-6 text-red-600 mt-2" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CartContent;

import { RiDeleteBin3Line } from "react-icons/ri";
import { useCart } from "../../context/cartContext"; // Use useCart directly from context

const CartContent = () => {
  // Use updateQuantity and removeItem from your new Context
  const { cart, updateQuantity, removeItem } = useCart();

  // Safety check: if cart or items is undefined, show loading or empty
  if (!cart?.items || cart.items.length === 0) {
    return <p className="text-gray-500">Your cart is empty</p>;
  }

  return (
    <div>
      {cart.items.map((item) => (
        <div
          key={item._id}
          className="flex items-start justify-between py-4 border-b mb-4"
        >
          {/* SAFE IMAGE ACCESS */}
          <img
            src={
              item.product?.images?.[0]?.url ||
              "https://via.placeholder.com/150"
            }
            alt={item.product?.name || "Product"}
            className="w-26 h-26 object-cover rounded-md"
          />

          <div className="ml-4 flex-1">
            <h3 className="font-semibold">
              {item.product?.name || "Loading..."}
            </h3>
            <p className="text-gray-600">₦{item.priceAtTime?.toFixed(2)}</p>

            <div className="flex items-center mt-2">
              <button
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l font-medium disabled:opacity-50"
                // Pass all required arguments to updateQuantity
                onClick={() => updateQuantity(item._id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>

              <span className="bg-gray-100 px-3 py-1">{item.quantity}</span>

              <button
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r"
                onClick={() => updateQuantity(item._id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="text-right">
            <p className="font-medium">
              #{((item.priceAtTime || 0) * item.quantity).toFixed(2)}
            </p>
            <button onClick={() => removeItem(item._id)}>
              <RiDeleteBin3Line className="h-6 w-6 text-red-600 mt-2 hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
