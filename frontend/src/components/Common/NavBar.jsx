// import { NavLink, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { HiBars3BottomLeft } from "react-icons/hi2";
// import { HiOutlineUser } from "react-icons/hi";
// import { useCart } from "../../context/cartContext";
// import { useAuth } from "../../context/AuthContext";
// import SearchBar from "./SearchBar";
// import CartDrawer from "../Layout/CartDrawer";
// import { useState } from "react";
// import { IoMdClose } from "react-icons/io";

// const navLinks = [
//   // { name: "New Products", path: "/products?new=true" },
//   { name: "New Products", path: "/products?isNew=true" },
//   { name: "Men", path: "/products?gender=men" },
//   { name: "Women", path: "/products?gender=women" },
//   { name: "Interiors", path: "/products?category=interiors" },
//   { name: "Shoes", path: "/products?category=shoes" },
//   { name: "Accessories", path: "/products?category=accessories" },
//   { name: "Artifacts", path: "/products?category=artifacts" },
//   { name: "My Account", path: "/profile" },
//   { name: "My Orders", path: "/my-orders" },
// ];

// const NavBar = () => {
//   const { cartCount } = useCart();
//   const { user, logout } = useAuth();
//   const location = useLocation();

//   const isQueryActive = (path) => {
//     return location.pathname + location.search === path;
//   };

//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [navDrawerOpen, setNavDrawerOpen] = useState(false);

//   const toggleNavDrawer = () => {
//     setNavDrawerOpen(!navDrawerOpen);
//   };
//   const toggleCartDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <>
//       <nav className="container mx-auto flex items-center justify-between py-4 px-5">
//         <div>
//           <Link
//             to="/"
//             className="relative font-garamond
//     text-xl sm:text-2xl md:text-3xl
//     tracking-wide
//     bg-gradient-to-r
//     from-[var(--gold-from)]
//     via-[var(--gold-mid)]
//     to-[var(--gold-to)]
//     bg-clip-text text-transparent"
//           >
//             SHARPS
//             <span
//               className="absolute -bottom-1 left-0 w-10 h-[3px]
//       bg-gradient-to-r
//       from-[var(--gold-from)]
//       to-[var(--gold-to)]
//       rounded-full"
//             />
//           </Link>
//         </div>
//         {/* Right Icons */}
//         <div className=" flex items-center space-x-4">
//           {/* Search */}
//           <SearchBar />
//           {/* Admin Button - Only visible if user is admin */}
//           {user?.role === "admin" && (
//             <Link
//               to="/admin"
//               className="block bg-black px-2 rounded text-sm text-white hover:bg-gray-800 transition"
//             >
//               Admin
//             </Link>
//           )}
//           {/* Profile */}
//           <Link to="/profile" className="hidden lg:block cursor-pointer">
//             <HiOutlineUser className="h-7 w-7 text-gray-700 hover:text-black transition" />
//           </Link>
//           {/* Login/Logout Button removed from visible navbar, now only in menu bar */}

//           <button onClick={toggleCartDrawer} className="relative">
//             <HiOutlineShoppingBag className="h-7 w-7 text-gray-700 cursor-pointer" />
//             {cartCount > 0 && (
//               <span className="absolute -top-1 right-1 bg-gray-400 text-xs rounded-full px-2 py-0.5">
//                 {cartCount}
//               </span>
//             )}
//           </button>
//           <button onClick={toggleNavDrawer} className="cursor-pointer">
//             <HiBars3BottomLeft size={30} />
//           </button>
//         </div>
//       </nav>
//       {navDrawerOpen && (
//         <div
//           onClick={toggleNavDrawer}
//           className="fixed inset-0 bg-black/40 z-40"
//         />
//       )}

//       <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
//       {/* Mobile Navigation */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-50
//     w-[90%] sm:w-3/4 md:w-2/5 lg:w-1/3
//     ${navDrawerOpen ? "translate-x-0" : "translate-x-full"}
//   `}
//       >
//         {/* Close Button */}
//         <div className="flex justify-end p-4">
//           <button onClick={toggleNavDrawer} className="cursor-pointer">
//             <IoMdClose className="h-6 w-6 text-gray-600" />
//           </button>
//         </div>
//         {/* Navigation Links */}
//         <div className="flex flex-col space-y-6 px-8 mt-6">
//           {navLinks.map((link) => {
//             const active = isQueryActive(link.path);

//             return (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 className={`
//     relative font-medium transition
//     text-sm sm:text-base md:text-lg lg:text-xl
//     ${active ? "text-black" : "text-gray-700 hover:text-black"}
//     inline-block
//   `}
//                 onClick={toggleNavDrawer}
//               >
//                 <span className="relative">
//                   {link.name}
//                   <span
//                     className={`
//         absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)]
//         transition-all duration-300
//         ${active ? "w-full" : "w-0"}
//       `}
//                   />
//                 </span>
//               </NavLink>
//             );
//           })}
//           {/* Mobile Login/Logout */}
//           <div className="border-t pt-6">
//             {user ? (
//               <button
//                 onClick={() => {
//                   logout();
//                   toggleNavDrawer();
//                 }}
//                 className="w-full bg-red-600 px-3 py-2 rounded text-sm text-white hover:bg-red-700 transition"
//               >
//                 Logout
//               </button>
//             ) : (
//               <NavLink
//                 to="/login"
//                 onClick={toggleNavDrawer}
//                 className="block w-full text-center bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] px-3 py-2 rounded text-sm text-white hover:opacity-90 transition"
//               >
//                 Login
//               </NavLink>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;

// NEW UPDATE
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
  { name: "New Products", path: "/products?isNew=true" },
  { name: "Men", path: "/products?gender=men" },
  { name: "Women", path: "/products?gender=women" },
  {
    name: "Interiors",
    path: "/products?category=interiors",
    children: [
      { name: "Frames", path: "/products?subcategory=frames" },
      { name: "Big Lights", path: "/products?subcategory=big-lights" },
      { name: "Small Lights", path: "/products?subcategory=small-lights" },
      { name: "Couch", path: "/products?subcategory=couch" },
      { name: "Tables", path: "/products?subcategory=tables" },
      { name: "Clocks", path: "/products?subcategory=clocks" },
      { name: "Books", path: "/products?subcategory=books" },
      { name: "Figurines", path: "/products?subcategory=figurines" },
      { name: "Plants", path: "/products?subcategory=plants" },
      { name: "Rugs", path: "/products?subcategory=rugs" },
      { name: "Scents", path: "/products?subcategory=scents" },
      {
        name: "Other Artifacts",
        path: "/products?subcategory=other-artifacts",
      },
    ],
  },
  {
    name: "Clothing",
    path: "/products?category=clothing",
    children: [
      { name: "Shoes", path: "/products?subcategory=shoes" },
      { name: "Shirts", path: "/products?subcategory=shirts" },
      { name: "Bags", path: "/products?subcategory=bags" },
      { name: "Pants / Joggers", path: "/products?subcategory=pants-joggers" },
      { name: "Jeans", path: "/products?subcategory=jeans" },
      { name: "Slides", path: "/products?subcategory=slides" },
      { name: "Jewelries", path: "/products?subcategory=jewelries" },
      {
        name: "Other Accessories",
        path: "/products?subcategory=other-accessories",
      },
    ],
  },
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
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (name) => {
    setOpenSection((prev) => (prev === name ? null : name));
  };

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
          {/* Login/Logout Button removed from visible navbar, now only in menu bar */}

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
  flex flex-col
  `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer} className="cursor-pointer">
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto flex flex-col px-8 mt-6">
          {navLinks.map((link) => {
            const active = isQueryActive(link.path);
            const isExpanded = openSection === link.name;

            if (link.children) {
              return (
                <div key={link.name}>
                  {/* Parent row — tapping navigates AND toggles */}
                  <div className="flex items-center justify-between py-4 border-b border-gray-100">
                    <NavLink
                      to={link.path}
                      onClick={toggleNavDrawer}
                      className={`font-medium text-sm sm:text-base md:text-lg lg:text-xl transition ${
                        active ? "text-black" : "text-gray-700 hover:text-black"
                      }`}
                    >
                      {link.name}
                    </NavLink>
                    <button
                      onClick={() => toggleSection(link.name)}
                      className="ml-4 p-1 text-gray-400 hover:text-black transition"
                      aria-label={`Toggle ${link.name}`}
                    >
                      <span
                        className={`inline-block transition-transform duration-300 text-xs ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      >
                        ▶
                      </span>
                    </button>
                  </div>

                  {/* Subcategory list */}
                  {isExpanded && (
                    <div className="flex flex-col pl-4 border-l-2 border-gray-100 ml-1 mb-2">
                      {link.children.map((child) => {
                        const childActive = isQueryActive(child.path);
                        return (
                          <NavLink
                            key={child.name}
                            to={child.path}
                            onClick={toggleNavDrawer}
                            className={`py-2.5 text-xs sm:text-sm transition ${
                              childActive
                                ? "text-black font-medium"
                                : "text-gray-500 hover:text-black"
                            }`}
                          >
                            {child.name}
                          </NavLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={`
                  relative font-medium transition py-4 border-b border-gray-100
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
