import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiBars3BottomLeft } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { name: "New Products", path: "/products?new=true" },
  { name: "Men", path: "/products?gender=men" },
  { name: "Women", path: "/products?gender=women" },
  { name: "Shoes", path: "/products?category=shoe" },
  { name: "Login", path: "/login" },
];

const NavBar = () => {
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
          {/* No design just underline with plain color text
          <Link
            to="/"
            className="font-serif text-3xl tracking-wide text-gray-900 relative"
          >
            SHARPS
            <span className="absolute -bottom-1 left-0 w-10 h-[3px] bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full"></span>
          </Link> */}

          {/* Use gradient text */}
          <Link
            to="/"
            className="relative font-serif 
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

          {/* SH colored the rest normal */}
          {/* <Link
            to="/"
            className="font-serif text-3xl tracking-wide text-gray-900 relative"
          >
            <span className="text-yellow-600">SH</span>ARPS
            <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-yellow-600"></span>
          </Link> */}
        </div>
        {/* Right Icons */}
        <div className=" flex items-center space-x-4">
          {/* Search */}
          <SearchBar />
          <button onClick={toggleCartDrawer} className="relative">
            <HiOutlineShoppingBag className="h-7 w-7 text-gray-700 cursor-pointer" />
            <span className="absolute -top-1 right-1 bg-gray-400 text-xs rounded-full px-2 py-0.5">
              4
            </span>
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
        <div className="flex flex-col space-y-6 px-8 mt-10">
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
        </div>
      </div>
    </>
  );
};

export default NavBar;
