import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/AuthContext";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { name: "New Products", path: "/products?new=true" },
  { name: "Men", path: "/products?gender=men" },
  { name: "Women", path: "/products?gender=women" },
  { name: "Shoes", path: "/products?category=shoes" },
  { name: "Accessories", path: "/products?category=accessories" },
  { name: "Artefact", path: "/products?category=artefact" },
  { name: "My Account", path: "/profile" },
  { name: "My Orders", path: "/my-orders" },
];

const NavBar = () => {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();

  const isQueryActive = (path) => {
    return location.pathname + location.search === path;
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-5">
        <div>
          <Link
            to="/"
            className="relative font-garamond
    text-xl sm:text-2xl md:text-3xl
    tracking-wide
    bg-gradient-to-r
    from-[var(--gold-from)]
    via-[var(--gold-mid)]
    to-[var(--gold-to)]
    bg-clip-text text-transparent"
          >
            SHARPS
            <span
              className="absolute -bottom-1 left-0 w-10 h-[3px]
      bg-gradient-to-r
      from-[var(--gold-from)]
      to-[var(--gold-to)]
      rounded-full"
            />
          </Link>
        </div>
        {/* Right Icons */}
        <div className=" flex items-center space-x-4">
          {/* Search */}
          <SearchBar />
          {/* Admin Button - Only visible if user is admin */}
          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="block bg-black px-2 rounded text-sm text-white hover:bg-gray-800 transition"
            >
              Admin
            </Link>
          )}
          {/* Profile */}
          <Link to="/profile" className="hidden lg:block cursor-pointer">
            <HiOutlineUser className="h-7 w-7 text-gray-700 hover:text-black transition" />
          </Link>
          {/* Login/Logout Button */}
          {user ? (
            <button
              onClick={logout}
              className="bg-red-600 px-3 py-1 rounded text-sm text-white hover:bg-red-700 transition hidden lg:block"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] px-3 py-1 rounded text-sm text-white hover:opacity-90 transition hidden lg:block"
            >
              Login
            </Link>
          )}

          <button onClick={toggleCartDrawer} className="relative">
            <HiOutlineShoppingBag className="h-7 w-7 text-gray-700 cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-1 right-1 bg-gray-400 text-xs rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={toggleNavDrawer} className="cursor-pointer">
            <HiBars3BottomLeft size={30} />
          </button>
        </div>
      </nav>
      {navDrawerOpen && (
        <div
          onClick={toggleNavDrawer}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-50
    w-[90%] sm:w-3/4 md:w-2/5 lg:w-1/3
    ${navDrawerOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer} className="cursor-pointer">
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col space-y-6 px-8 mt-6">
          {navLinks.map((link) => {
            const active = isQueryActive(link.path);

            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={`
    relative font-medium transition
    text-sm sm:text-base md:text-lg lg:text-xl
    ${active ? "text-black" : "text-gray-700 hover:text-black"}
    inline-block
  `}
                onClick={toggleNavDrawer}
              >
                <span className="relative">
                  {link.name}
                  <span
                    className={`
        absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)]
        transition-all duration-300
        ${active ? "w-full" : "w-0"}
      `}
                  />
                </span>
              </NavLink>
            );
          })}
          {/* Mobile Login/Logout */}
          <div className="border-t pt-6">
            {user ? (
              <button
                onClick={() => {
                  logout();
                  toggleNavDrawer();
                }}
                className="w-full bg-red-600 px-3 py-2 rounded text-sm text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                onClick={toggleNavDrawer}
                className="block w-full text-center bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] px-3 py-2 rounded text-sm text-white hover:opacity-90 transition"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
