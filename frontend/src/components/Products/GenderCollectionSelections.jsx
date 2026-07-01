import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import API from "../../api/api";
import ScrollToTopButton from "../Common/ScrollToTopButton";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(12);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 1,
  });
  const [params] = useSearchParams();

  const queryString = params.toString();
  const searchQuery = params.get("q")?.toLowerCase() || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await API.get("/products/getProducts", {
          params: {
            ...Object.fromEntries(params.entries()),
            search: searchQuery || undefined,
            page,
            limit: pageSize,
          },
        });
        setProducts(Array.isArray(res.data.products) ? res.data.products : []);
        setPagination({
          page: res.data.page || 1,
          limit: res.data.limit || pageSize,
          total: res.data.total || 0,
          totalPages: res.data.totalPages || 1,
        });
      } catch (err) {
        console.error(err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    setPage(1);
    fetchProducts();
  }, [queryString]);

  useEffect(() => {
    if (page === 1) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await API.get("/products/getProducts", {
          params: {
            ...Object.fromEntries(params.entries()),
            search: searchQuery || undefined,
            page,
            limit: pageSize,
          },
        });
        setProducts(Array.isArray(res.data.products) ? res.data.products : []);
        setPagination({
          page: res.data.page || 1,
          limit: res.data.limit || pageSize,
          total: res.data.total || 0,
          totalPages: res.data.totalPages || 1,
        });
      } catch (err) {
        console.error(err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, queryString]);

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
                src={p.images?.[0]?.url || p.image}
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

      {pagination.totalPages > 1 && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
          <button
            type="button"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={page === 1 || loading}
            className="rounded border border-gray-300 px-3 py-2 disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {pagination.page} of {pagination.totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page >= pagination.totalPages || loading}
            className="rounded border border-gray-300 px-3 py-2 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* 🔝 Scroll to top */}
      <ScrollToTopButton />
    </div>
  );
};

export default ProductsPage;
