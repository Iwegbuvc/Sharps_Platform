import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { products as allProducts } from "../../data/products";

const STORAGE_KEY = "recent_searches";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [recent, setRecent] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const panelRef = useRef(null);
  const navigate = useNavigate();

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved)) setRecent(saved);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target))
        handleClose();
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Keyboard ESC close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setSearchTerm("");
    setFiltered([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const updated = [
      searchTerm,
      ...recent.filter((item) => item !== searchTerm),
    ].slice(0, 5);
    setRecent(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Navigate to search results page with query param
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    handleClose();
  };

  useEffect(() => {
    if (searchTerm.trim()) {
      setFiltered(
        allProducts.filter((p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    } else {
      setFiltered([]);
    }
  }, [searchTerm]);

  return (
    <div className="relative">
      {/* Search Icon */}
      <button onClick={() => setIsOpen(true)}>
        <HiMagnifyingGlass className="h-6 w-6 cursor-pointer" />
      </button>

      {/* Search Panel */}
      <div
        className={`
          fixed inset-0 z-50 flex items-start justify-center
          px-4 pt-4 sm:pt-4
          bg-black/30 sm:bg-transparent
          transition-opacity duration-500 ease-out
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Card / Panel */}
        <div
          ref={panelRef}
          className={`
            w-full max-w-xl
            transform transition-all duration-500 ease-out
            ${
              isOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-4"
            }
          `}
        >
          <form
            onSubmit={handleSubmit}
            className="
              flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2
              p-3 sm:px-4 sm:py-2
              bg-white
              rounded-2xl
              shadow-lg
            "
          >
            {/* Input */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              autoFocus={isOpen}
              className="w-full flex-1 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none"
            />

            {/* Buttons */}
            <div className="flex items-center justify-end gap-2 mt-2 sm:mt-0 flex-shrink-0">
              <button
                type="submit"
                className="bg-black text-white px-3 py-2 rounded-lg cursor-pointer"
              >
                Search
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="text-gray-600 hover:text-gray-800"
              >
                <HiMiniXMark className="h-6 w-6 cursor-pointer" />
              </button>
            </div>
          </form>

          {/* Local Filtered Results */}
          {filtered.length > 0 && (
            <div className="mt-3 bg-white rounded-xl shadow p-3 sm:p-4">
              <p className="text-sm text-gray-500 mb-2">Quick results</p>
              <ul className="space-y-2">
                {filtered.slice(0, 5).map((item) => (
                  <li
                    key={item._id}
                    className="cursor-pointer rounded-lg px-3 py-2 bg-gray-100 hover:bg-gray-200 text-sm flex justify-between items-center"
                    onClick={() => navigate(`/products/${item._id}`)}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-gray-400">₦{item.price}</span>
                  </li>
                ))}
              </ul>
              {filtered.length > 5 && (
                <button
                  className="mt-2 w-full text-center text-blue-600 hover:underline text-sm"
                  onClick={() => {
                    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
                    handleClose();
                  }}
                >
                  See all results
                </button>
              )}
            </div>
          )}

          {/* Recent Searches */}
          {recent.length > 0 && (
            <div className="mt-3 bg-white rounded-xl shadow p-3 sm:p-4">
              <p className="text-sm text-gray-500 mb-2">Recent searches</p>
              <ul className="space-y-2">
                {recent.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSearchTerm(item)}
                    className="cursor-pointer rounded-lg px-3 py-2 bg-gray-100 hover:bg-gray-200 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
