// import { createContext, useContext, useEffect, useState } from "react";
// import API from "../api/api";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState({ items: [], totalPrice: 0 });
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem("token");

//   const fetchCart = async () => {
//     if (!token) {
//       setCart({ items: [], totalPrice: 0 });
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await API.get("/cart");
//       setCart(res.data);
//     } catch (err) {
//       console.error("Failed to fetch cart", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, [token]);

//   const addToCart = async ({ productId, quantity, size, color }) => {
//     const res = await API.post("/cart/add", {
//       productId,
//       quantity,
//       size,
//       color,
//     });
//     setCart(res.data);
//   };

//   const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <CartContext.Provider
//       value={{ cart, cartCount, addToCart, fetchCart, loading }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

import { createContext, useContext, useEffect, useState } from "react";
import API from "../api/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchCart = async () => {
    if (!token) {
      setCart({ items: [], totalPrice: 0 });
      setLoading(false);
      return;
    }
    try {
      const res = await API.get("/cart");
      setCart(res.data);
    } catch (err) {
      console.error("Failed to fetch cart", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]);
  const addToCart = async ({ productId, quantity, size, color }) => {
    try {
      const res = await API.post("/cart/add", {
        productId,
        quantity,
        size,
        color,
      });
      setCart(res.data);
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    try {
      const res = await API.put(`/cart/item/${itemId}`, { quantity });
      setCart(res.data); // res.data now has full product info
    } catch (err) {
      console.error("Update quantity failed", err);
    }
  };

  const removeItem = async (itemId) => {
    try {
      const res = await API.delete(`/cart/item/${itemId}`);
      setCart(res.data);
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  // Fix cartCount to handle cases where cart or items might be undefined
  const cartCount =
    cart?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <CartContext.Provider
      // --- ADD THEM TO THE VALUE PROP SO COMPONENTS CAN USE THEM ---
      value={{
        cart,
        cartCount,
        addToCart,
        updateQuantity,
        removeItem,
        fetchCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
