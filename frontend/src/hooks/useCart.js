// import { useEffect, useState } from "react";
// import API from "../api/api";

// const useCart = () => {
//   const [cart, setCart] = useState({ items: [], totalPrice: 0 });
//   const [loading, setLoading] = useState(true);

//   const fetchCart = async () => {
//     try {
//       const res = await API.get("/cart");
//       setCart(res.data);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addToCart = async (data) => {
//     const res = await API.post("/cart/add", data);
//     setCart(res.data);
//   };

//   const updateItem = async (itemId, quantity) => {
//     const res = await API.put(`/cart/item/${itemId}`, { quantity });
//     setCart(res.data);
//   };

//   const removeItem = async (itemId) => {
//     const res = await API.delete(`/cart/item/${itemId}`);
//     setCart(res.data);
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   return {
//     cart,
//     loading,
//     addToCart,
//     updateItem,
//     removeItem,
//   };
// };

// export default useCart;
import { useEffect, useState, useCallback } from "react";
import API from "../api/api";

const useCart = () => {
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });
  const [loading, setLoading] = useState(true);

  const fetchCart = useCallback(async () => {
    try {
      const res = await API.get("/cart");
      setCart(res.data);
    } catch {
      // If cart no longer exists (after payment)
      setCart({ items: [], totalPrice: 0 });
    } finally {
      setLoading(false);
    }
  }, []);

  const addToCart = async (data) => {
    const res = await API.post("/cart/add", data);
    setCart(res.data);
  };

  const updateItem = async (itemId, quantity) => {
    const res = await API.put(`/cart/item/${itemId}`, { quantity });
    setCart(res.data);
  };

  const removeItem = async (itemId) => {
    const res = await API.delete(`/cart/item/${itemId}`);
    setCart(res.data);
  };

  // 🔥 NEW: Clear cart locally (used after payment)
  const clearCart = () => {
    setCart({ items: [], totalPrice: 0 });
  };

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return {
    cart,
    loading,
    addToCart,
    updateItem,
    removeItem,
    fetchCart, // 👈 important
    clearCart, // 👈 important
  };
};

export default useCart;
