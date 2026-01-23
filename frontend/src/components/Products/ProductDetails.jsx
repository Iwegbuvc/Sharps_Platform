// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { toast } from "sonner";
// import API from "../../api/api";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isAdding, setIsAdding] = useState(false);

//   const [activeImage, setActiveImage] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [size, setSize] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await API.get(`/products/getProduct/${id}`);
//         setProduct(res.data);
//         setActiveImage(res.data.images?.[0]?.url);
//       } catch (err) {
//         toast.error("Product not found");
//         navigate("/products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id, navigate]);

//   const handleAddToCart = async () => {
//     // Only require size if product has sizes
//     if (product.sizes && product.sizes.length > 0 && !size) {
//       toast.error("Please select a size");
//       return;
//     }

//     try {
//       setIsAdding(true);
//       await API.post("/cart/add", {
//         productId: product._id,
//         quantity,
//         size: product.sizes && product.sizes.length > 0 ? size : undefined,
//       });
//       toast.success("Added to cart");
//     } catch (err) {
//       toast.error("Please login to add items to cart");
//       navigate("/login");
//     } finally {
//       setIsAdding(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50">
//         <div className="h-12 w-12 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
//       </div>
//     );
//   }

//   if (!product) return null;

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-gray-200 text-black px-6 py-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-10">
//         {/* Thumbnails */}
//         <div className="flex flex-row lg:flex-col gap-4 justify-center">
//           {product.images.map((img, i) => (
//             <img
//               key={i}
//               src={img.url}
//               alt={img.altText}
//               onClick={() => setActiveImage(img.url)}
//               className={`w-20 h-20 object-cover cursor-pointer transition
//                 ${activeImage === img.url ? "opacity-100" : "opacity-60"}
//               `}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="flex justify-center">
//           <img
//             src={activeImage}
//             alt={product.name}
//             className="
//               w-auto
//               max-w-[520px]
//               max-h-[650px]
//               object-contain
//               select-none
//             "
//             draggable={false}
//           />
//         </div>

//         {/* Product Info */}
//         <div className="space-y-6 text-center lg:text-left">
//           <h1 className="text-3xl font-extrabold uppercase">{product.name}</h1>
//           <p className="text-xl font-semibold">₦{product.price}</p>
//           <p className="text-sm opacity-80">{product.description}</p>

//           {/* Sizes */}
//           <div>
//             <h3 className="text-sm font-semibold mb-2">SIZE</h3>
//             <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
//               {product.sizes.map((s) => (
//                 <button
//                   key={s}
//                   onClick={() => setSize(s)}
//                   className={`
//                     border px-4 py-2 text-sm font-semibold transition
//                     ${
//                       size === s
//                         ? "bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white border-black"
//                         : "border-black hover:bg-black hover:text-white"
//                     }
//                   `}
//                 >
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity */}
//           <div className="flex items-center justify-center lg:justify-start gap-4">
//             <button
//               onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//               className="w-10 h-10 border border-black"
//             >
//               −
//             </button>
//             <span className="text-lg font-semibold">{quantity}</span>
//             <button
//               onClick={() => setQuantity((q) => q + 1)}
//               className="w-10 h-10 border border-black"
//             >
//               +
//             </button>
//           </div>

//           {/* Add to Cart */}
//           <button
//             disabled={!size || isAdding}
//             onClick={handleAddToCart}
//             className={`
//               w-full py-4 font-bold uppercase rounded-lg transition
//               flex items-center justify-center gap-2
//               ${
//                 !size || isAdding
//                   ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   : "bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white hover:scale-105"
//               }
//             `}
//           >
//             {isAdding ? "Adding..." : "Add to Cart"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import API from "../../api/api";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  const [activeImage, setActiveImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/getProduct/${id}`);
        setProduct(res.data);
        setActiveImage(res.data.images?.[0]?.url);
      } catch (err) {
        toast.error("Product not found");
        navigate("/products");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  // 👇 helper flag
  const hasSizes = product?.sizes && product.sizes.length > 0;

  const handleAddToCart = async () => {
    // Require size ONLY if product has sizes
    if (hasSizes && !size) {
      toast.error("Please select a size");
      return;
    }

    try {
      setIsAdding(true);
      await API.post("/cart/add", {
        productId: product._id,
        quantity,
        size: hasSizes ? size : undefined,
      });
      toast.success("Added to cart");
    } catch (err) {
      toast.error("Please login to add items to cart");
      navigate("/login");
    } finally {
      setIsAdding(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="h-12 w-12 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 text-black px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-10">
        {/* Thumbnails */}
        <div className="flex flex-row lg:flex-col gap-4 justify-center">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img.url}
              alt={img.altText}
              onClick={() => setActiveImage(img.url)}
              className={`w-20 h-20 object-cover cursor-pointer transition
                ${activeImage === img.url ? "opacity-100" : "opacity-60"}
              `}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex justify-center">
          <img
            src={activeImage}
            alt={product.name}
            className="w-auto max-w-[520px] max-h-[650px] object-contain select-none"
            draggable={false}
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl font-extrabold uppercase">{product.name}</h1>
          <p className="text-xl font-semibold">₦{product.price}</p>
          <p className="text-sm opacity-80">{product.description}</p>

          {/* Sizes – render ONLY if product has sizes */}
          {hasSizes && (
            <div>
              <h3 className="text-sm font-semibold mb-2">SIZE</h3>
              <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`
                      border px-4 py-2 text-sm font-semibold transition
                      ${
                        size === s
                          ? "bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white border-black"
                          : "border-black hover:bg-black hover:text-white"
                      }
                    `}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-10 h-10 border border-black"
            >
              −
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-10 h-10 border border-black"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button
            disabled={(hasSizes && !size) || isAdding}
            onClick={handleAddToCart}
            className={`
              w-full py-4 font-bold uppercase rounded-lg transition
              flex items-center justify-center gap-2
              ${
                (hasSizes && !size) || isAdding
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white hover:scale-105"
              }
            `}
          >
            {isAdding ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
