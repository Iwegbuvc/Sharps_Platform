import { useParams } from "react-router-dom";
import { selectedProductIds } from "../../data/products";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const product = selectedProductIds.find((p) => p._id === id);

  const [isLoading, setIsLoading] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  // WHEN BACKEND IS READY, INTEGRATE ACTUAL ADD TO CART
  // const handleAddToCart = async () => {
  //   try {
  //     setIsLoading(true);
  //     await addToCart(item);
  //     toast.success("Added to cart");
  //   } catch (err) {
  //     toast.error("Failed to add to cart");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleAddToCart = () => {
    // Logic to add the product to the cart
    if (!size || !quantity) {
      toast.error("Please select size and quantity", { duration: 3000 });
      return;
    }

    setIsLoading(true);

    // Simulate API / cart processing delay
    setTimeout(() => {
      toast.success(
        `Added ${quantity} x ${product.name} (Size: ${size}) to cart!`,
        { duration: 3000 }
      );

      setIsLoading(false);
    }, 800);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  useEffect(() => {
    if (product?.images?.length) {
      setActiveImage(product.images[0].url);
    }
  }, [product]);

  if (!product) return <div>Product not found</div>;

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
          {activeImage && (
            <img
              src={activeImage}
              alt={product.name}
              className="
        w-auto
        max-w-[520px]
        max-h-[650px]
        object-contain
        select-none
      "
              draggable={false}
            />
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl font-extrabold uppercase">{product.name}</h1>
          <p className="text-xl font-semibold">£{product.price}</p>
          <p className="text-sm opacity-80">{product.description}</p>

          {/* Sizes */}
          <div>
            <h3 className="text-sm font-semibold mb-2">SIZE</h3>
            <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
              {product.sizes.map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`
            border px-4 py-2 text-sm font-semibold transition
            ${
              size === item
                ? "bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white border-black"
                : "border-black hover:bg-black hover:text-white"
            }
          `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <button
              onClick={decrementQuantity}
              className="w-10 h-10 border border-black"
            >
              −
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="w-10 h-10 border border-black"
            >
              +
            </button>
          </div>

          {/* Add to Bag */}
          <button
            disabled={!size || isLoading}
            onClick={handleAddToCart}
            className={`
    w-full py-4 font-bold uppercase rounded-lg transition
    flex items-center justify-center gap-2
    ${
      !size || isLoading
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white hover:scale-105"
    }
  `}
          >
            {isLoading ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
