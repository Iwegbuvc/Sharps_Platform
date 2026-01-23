// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import PayStackButton from "./PayStackButton";

// const cart = {
//   products: [
//     {
//       cartItemId: "c1",
//       productId: "1",
//       name: "Black Utility Jacket",
//       price: 120,
//       // image: "/images/p1_product_i1.png",
//       image: "https://picsum.photos/150?random=1",
//       size: "M",
//       color: "Black",
//       quantity: 1,
//       subtotal: 120,
//     },
//     {
//       cartItemId: "c2",
//       productId: "3",
//       name: "Oversized Hoodie",
//       price: 90,
//       image: "https://picsum.photos/150?random=2",
//       size: "L",
//       color: "Gray",
//       quantity: 2,
//       subtotal: 180,
//     },
//   ],
//   totalPrice: 300,
// };

// const CheckOut = () => {
//   const navigate = useNavigate();

//   const [checkoutId, setCheckoutId] = useState(null);

//   const [shippingAddress, setShippingAddress] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     country: "",
//     phone: "",
//   });

//   // BACKEND
//   const handleCreateCheckout = async (e) => {
//     e.preventDefault();

//     const res = await API.post("/checkout", {
//       shippingAddress,
//     });

//     setCheckoutId(res.data.orderId);
//   };

//   // const handleCreateCheckout = (e) => {
//   //   e.preventDefault();
//   //   setCheckoutId(Date.now().toString()); // simulate backend checkout
//   // };

//   const handlePaymentSuccess = (details) => {
//     console.log("Payment Successful", details);
//     navigate("/order-confirmation");
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
//       {/* Left Section */}
//       <div className="bg-white rounded-lg p-6">
//         <h2 className="text-2xl uppercase mb-6">Checkout</h2>
//         <form onSubmit={handleCreateCheckout} className="space-y-4">
//           <h3 className="text-lg mb-4">Contact Details</h3>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email Address</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 border rounded"
//               value="user@example.com"
//               disabled
//             />
//           </div>
//           <h3 className="text-lg mb-4">Delivery</h3>
//           <div className="mb-4 grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700">First Name</label>
//               <input
//                 type="text"
//                 value={shippingAddress.firstName}
//                 onChange={(e) =>
//                   setShippingAddress({
//                     ...shippingAddress,
//                     firstName: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-2 border rounded"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Last Name</label>
//               <input
//                 type="text"
//                 value={shippingAddress.lastName}
//                 onChange={(e) =>
//                   setShippingAddress({
//                     ...shippingAddress,
//                     lastName: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-2 border rounded"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Address</label>
//             <input
//               type="text"
//               value={shippingAddress.address}
//               onChange={(e) =>
//                 setShippingAddress({
//                   ...shippingAddress,
//                   address: e.target.value,
//                 })
//               }
//               className="w-full px-4 py-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-4 grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700">City</label>
//               <input
//                 type="text"
//                 value={shippingAddress.city}
//                 onChange={(e) =>
//                   setShippingAddress({
//                     ...shippingAddress,
//                     city: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-2 border rounded"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700">Postal Code</label>
//               <input
//                 type="text"
//                 value={shippingAddress.postalCode}
//                 onChange={(e) =>
//                   setShippingAddress({
//                     ...shippingAddress,
//                     postalCode: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-2 border rounded"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Country</label>
//             <input
//               type="text"
//               value={shippingAddress.country}
//               onChange={(e) =>
//                 setShippingAddress({
//                   ...shippingAddress,
//                   country: e.target.value,
//                 })
//               }
//               className="w-full px-4 py-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Phone</label>
//             <input
//               type="text"
//               value={shippingAddress.phone}
//               onChange={(e) =>
//                 setShippingAddress({
//                   ...shippingAddress,
//                   phone: e.target.value,
//                 })
//               }
//               className="w-full px-4 py-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mt-6">
//             {/* Proceed to Payment Button */}
//             {!checkoutId ? (
//               <button
//                 type="submit"
//                 className="w-full cursor-pointer bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white px-4 py-3 rounded hover:bg-blue-600 hover:opacity-90 transition-opacity"
//               >
//                 Proceed to Payment
//               </button>
//             ) : (
//               <div className="space-y-4">
//                 <div className="text-center sm:text-left">
//                   <h3 className="text-base sm:text-lg font-semibold">
//                     Pay with Paystack
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1">
//                     Secure payment powered by Paystack
//                   </p>
//                 </div>

//                 <PayStackButton
//                   amount={cart.totalPrice}
//                   email="user@example.com"
//                   onSuccess={(reference) => {
//                     console.log("Payment successful:", reference);
//                     navigate("/order-confirmation");
//                   }}
//                   onClose={() => console.log("Payment closed")}
//                 />
//               </div>
//             )}
//           </div>
//         </form>
//       </div>
//       {/* Right Section */}
//       <div className="bg-gray-50 p-6 rounded-lg">
//         <h3 className="text-lg mb-4">Order Summary</h3>
//         <div className="border-t py-4 mb-4">
//           {cart.products.map((product, index) => (
//             <div
//               key={index}
//               className="flex items-start justify-between py-2 border-b"
//             >
//               <div className="flex items-start">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-20 h-24 object-cover me-4"
//                 />
//                 <div>
//                   <h3 className="text-md">{product.name}</h3>
//                   <p className="text-gray-500">Size: {product.size}</p>
//                   <p className="text-gray-500">Color: {product.color}</p>
//                 </div>
//               </div>
//               <p className="text-xl">${product.price?.toLocaleString()}</p>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-between items-center text-lg mb-4">
//           <p>Subtotal</p>
//           <p>${cart.totalPrice?.toLocaleString()}</p>
//         </div>
//         <div className="flex justify-between items-center text-lg">
//           <p>Shipping</p>
//           <p>Free</p>
//         </div>
//         <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
//           <p>Total</p>
//           <p>${cart.totalPrice?.toLocaleString()}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckOut;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PayStackButton from "./PayStackButton";
import API from "../../api/api";
import useCart from "../../hooks/useCart";
import { useAuth } from "../../context/AuthContext";
import { useRef } from "react";

const CheckOut = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const { user } = useAuth();

  const [checkoutId, setCheckoutId] = useState(null);
  const [payAmount, setPayAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const checkoutInProgress = useRef(false);

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  // CREATE CHECKOUT (ORDER)
  const handleCreateCheckout = async (e) => {
    e.preventDefault();

    // Prevent double submission
    if (checkoutInProgress.current || loading) return;
    checkoutInProgress.current = true;
    setLoading(true);

    try {
      const res = await API.post("/checkout", {
        shippingAddress,
      });

      setCheckoutId(res.data.orderId);
      setPayAmount(res.data.amount);
    } catch (err) {
      console.error(err);
      checkoutInProgress.current = false;
    } finally {
      setLoading(false);
    }
  };

  if (!cart || !cart.items?.length) {
    return <p className="text-center mt-20">Your cart is empty</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* LEFT */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>

        <form onSubmit={handleCreateCheckout} className="space-y-4">
          <h3 className="text-lg mb-4">Contact Details</h3>

          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded"
              value="user@example.com"
              disabled
            />
          </div>

          <h3 className="text-lg mb-4">Delivery</h3>

          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="First Name"
              value={shippingAddress.firstName}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  firstName: e.target.value,
                })
              }
              className="px-4 py-2 border rounded"
              required
            />
            <input
              placeholder="Last Name"
              value={shippingAddress.lastName}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  lastName: e.target.value,
                })
              }
              className="px-4 py-2 border rounded"
              required
            />
          </div>

          <input
            placeholder="Address"
            value={shippingAddress.address}
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                address: e.target.value,
              })
            }
            className="w-full px-4 py-2 border rounded"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="City"
              value={shippingAddress.city}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, city: e.target.value })
              }
              className="px-4 py-2 border rounded"
              required
            />
            <input
              placeholder="Postal Code"
              value={shippingAddress.postalCode}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  postalCode: e.target.value,
                })
              }
              className="px-4 py-2 border rounded"
              required
            />
          </div>

          <input
            placeholder="Country"
            value={shippingAddress.country}
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                country: e.target.value,
              })
            }
            className="w-full px-4 py-2 border rounded"
            required
          />

          <input
            placeholder="Phone"
            value={shippingAddress.phone}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, phone: e.target.value })
            }
            className="w-full px-4 py-2 border rounded"
            required
          />

          {/* PAYMENT */}
          {!checkoutId ? (
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white px-4 py-3 rounded hover:opacity-90"
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          ) : (
            // <PayStackButton
            //   amount={payAmount}
            //   email="user@example.com"
            //   orderId={checkoutId}
            //   onSuccess={async (reference) => {
            //     // 1️⃣ Verify payment with backend
            //     await API.post("/checkout/verify", {
            //       reference: reference.reference,
            //       orderId: checkoutId,
            //     });

            //     // 2️⃣ Clear cart state in frontend
            //     clearCart();

            //     // 3️⃣ Navigate to confirmation page
            //     navigate("/order-confirmation");
            //   }}
            //   onClose={() => console.log("Payment closed")}
            // />
            <PayStackButton
              amount={payAmount}
              email={user?.email || "user@example.com"}
              orderId={checkoutId}
              onSuccess={(response) => {
                // Prevent double processing
                if (paymentProcessing) return;
                setPaymentProcessing(true);
                clearCart();
                navigate(`/order-confirmation/${checkoutId}`);
              }}
              onClose={() => console.log("Payment closed")}
            />
          )}
        </form>
      </div>

      {/* RIGHT */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>

        <div className="border-t py-4 mb-4">
          {cart.items.map((item) => (
            <div
              key={item._id}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex">
                <img
                  src={item.product.images[0]?.url}
                  className="w-20 h-24 object-cover me-4"
                />
                <div>
                  <h3>{item.product.name}</h3>
                  <p className="text-gray-500">Size: {item.size}</p>
                  <p className="text-gray-500">Color: {item.color}</p>
                </div>
              </div>
              <p className="text-xl">
                #{(item.priceAtTime * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p>
            #{cart.items.reduce((a, i) => a + i.priceAtTime * i.quantity, 0)}
          </p>
        </div>

        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>

        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>
            ₦{cart.items.reduce((a, i) => a + i.priceAtTime * i.quantity, 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
