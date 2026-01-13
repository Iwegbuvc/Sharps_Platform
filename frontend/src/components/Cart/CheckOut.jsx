import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PayStackButton from "./PayStackButton";

const cart = {
  products: [
    {
      cartItemId: "c1",
      productId: "1",
      name: "Black Utility Jacket",
      price: 120,
      image: "/images/p1_product_i1.png",
      size: "M",
      color: "Black",
      quantity: 1,
      subtotal: 120,
    },
    {
      cartItemId: "c2",
      productId: "3",
      name: "Oversized Hoodie",
      price: 90,
      image: "/images/product_3.png",
      size: "L",
      color: "Gray",
      quantity: 2,
      subtotal: 180,
    },
  ],
  totalPrice: 300,
};

const CheckOut = () => {
  const navigate = useNavigate();

  const [checkoutId, setCheckoutId] = useState(null);

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  //   const handleCreateCheckout = (e) => {
  //     e.preventDefault();
  //     // Logic to create checkout session
  //     // setCheckoutId("123456789"); // Simulated checkout ID
  //   };
  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(Date.now().toString()); // simulate backend checkout
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment Successful", details);
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout} className="space-y-4">
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded"
              value="user@example.com"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
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
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
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
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div className="mt-6">
            {/* Proceed to Payment Button */}
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full cursor-pointer bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white px-4 py-3 rounded hover:bg-blue-600"
              >
                Proceed to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay with Paystack</h3>
                {/* Paystack integration will go here */}
                <PayStackButton
                  amount={cart.totalPrice}
                  email="user@example.com"
                  onSuccess={(reference) => {
                    console.log("Payment successful:", reference);
                    navigate("/order-confirmation");
                  }}
                  onClose={() => console.log("Payment closed")}
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
