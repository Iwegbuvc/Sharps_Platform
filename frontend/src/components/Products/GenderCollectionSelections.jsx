import { products } from "../../data/products";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [params] = useSearchParams();

  const gender = params.get("gender");
  const category = params.get("category");
  const isNew = params.get("new");

  const filteredProducts = products.filter((p) => {
    if (gender && p.gender !== gender) return false;
    if (category && p.category !== category) return false;
    if (isNew && !p.isNew) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          xl:grid-cols-3
          gap-10
          max-w-[1600px]
          mx-auto
        "
      >
        {filteredProducts.map((p) => (
          <Link
            key={p._id}
            to={`/products/${p._id}`}
            className="group cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={p.image}
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
                text-sm
                lg:text-base
                font-bold
                uppercase
                text-center
                tracking-wide
              "
            >
              {p.name}
            </h3>

            <p className="mt-1 text-center font-semibold opacity-80">
              ${p.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
