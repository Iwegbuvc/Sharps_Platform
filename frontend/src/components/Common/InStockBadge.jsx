const InStockBadge = ({ isInStock = true }) => {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] ${
        isInStock
          ? "bg-green-50 text-green-900"
          : "bg-gray-100 text-gray-700"
      }`}
    >
      {isInStock ? "In Stock — Ready to Ship" : "Coming Soon"}
    </div>
  );
};

export default InStockBadge;
