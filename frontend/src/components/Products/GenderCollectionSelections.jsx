// import { products } from "../../data/products";
// import { useSearchParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import ScrollToTopButton from "../Common/ScrollToTopButton";

// const ProductsPage = () => {
//   const [params] = useSearchParams();

//   const gender = params.get("gender");
//   const category = params.get("category");
//   const isNew = params.get("new");

//   const filteredProducts = products.filter((p) => {
//     if (gender && p.gender !== gender) return false;
//     if (category && p.category !== category) return false;
//     if (isNew && !p.isNew) return false;
//     return true;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
//       <div
//         className="
//           grid
//           grid-cols-1
//           lg:grid-cols-2
//           xl:grid-cols-3
//           gap-10
//           max-w-[1600px]
//           mx-auto
//         "
//       >
//         {filteredProducts.map((p) => (
//           <Link
//             key={p._id}
//             to={`/products/${p._id}`}
//             className="group cursor-pointer"
//           >
//             {/* Image */}
//             <div className="overflow-hidden rounded-lg">
//               <img
//                 src={p.image}
//                 alt={p.name}
//                 className="
//                   w-full
//                   aspect-square
//                   object-cover
//                   transition-transform
//                   duration-500
//                   group-hover:scale-105
//                 "
//               />
//             </div>

//             {/* Text */}
//             <h3
//               className="
//                 mt-4
//                 text-sm
//                 lg:text-base
//                 font-bold
//                 uppercase
//                 text-center
//                 tracking-wide
//               "
//             >
//               {p.name}
//             </h3>

//             <p className="mt-1 text-center font-semibold opacity-80">
//               ${p.price}
//             </p>
//           </Link>
//         ))}
//       </div>

//       {/* 🔝 Scroll to top */}
//       <ScrollToTopButton />
//     </div>
//   );
// };

// export default ProductsPage;
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import API from "../../api/api";
import ScrollToTopButton from "../Common/ScrollToTopButton";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [params] = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/products/getProducts", {
          params: Object.fromEntries(params),
        });
        setProducts(res.data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="h-10 w-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-2
          lg:grid-cols-2
          xl:grid-cols-3
          gap-10
          max-w-[1600px]
          mx-auto
        "
      >
        {products.map((p) => (
          <Link
            key={p._id}
            to={`/products/${p._id}`}
            className="group cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={p.images?.[0]?.url}
                alt={p.name}
                className="
                  w-full
                  aspect-square
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Text */}
            <h3
              className="
                mt-4
                text-xs
                md:text-sm
                lg:text-base
                font-bold
                uppercase
                text-center
                tracking-wide
              "
            >
              {p.name}
            </h3>

            <p className="mt-1 text-center text-xs md:text-sm font-semibold opacity-80">
              ₦{p.price}
            </p>
          </Link>
        ))}
      </div>

      {/* 🔝 Scroll to top */}
      <ScrollToTopButton />
    </div>
  );
};

export default ProductsPage;
