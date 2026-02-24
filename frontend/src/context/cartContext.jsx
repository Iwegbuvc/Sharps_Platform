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
import { toast } from "sonner";

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
  // Add selectedImage to cart item
  const addToCart = async ({
    productId,
    quantity,
    size,
    color,
    selectedImage,
  }) => {
    // Early check for token before API call
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to add items to your cart.");
      return;
    }
    try {
      const res = await API.post("/cart/add", {
        productId,
        quantity,
        size,
        color,
        selectedImage, // Pass selectedImage to backend
      });
      setCart(res.data);
    } catch (err) {
      // Show backend error message as toast if available
      let message = err?.response?.data?.message || "Add to cart failed";
      if (err?.response?.status === 401) {
        message = "You must be logged in to add items to your cart.";
      }
      if (typeof toast !== 'undefined') {
        toast.error(message);
      } else if (typeof window !== 'undefined' && window.toast) {
        window.toast.error(message);
      } else {
        console.error(message);
      }
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

  // Add clearCart to context value
  const clearCart = () => {
    setCart({ items: [], totalPrice: 0 });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        updateQuantity,
        removeItem,
        fetchCart,
        loading,
        clearCart, // <-- now available everywhere
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
