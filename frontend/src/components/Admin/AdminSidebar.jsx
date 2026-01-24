import {
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onClose?.(); // close sidebar on mobile
    navigate("/");
  };

  const baseLink = "py-3 px-4 rounded flex items-center space-x-2 transition";

  const activeLink = "bg-gray-700 text-white";
  const inactiveLink = "text-gray-300 hover:bg-gray-700 hover:text-white";

  return (
    <div className="h-full min-h-screen p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-6">
        <Link
          to="/"
          onClick={onClose}
          className="relative font-garamond text-xl sm:text-2xl md:text-3xl tracking-wide
          bg-gradient-to-r from-[var(--gold-from)] via-[var(--gold-mid)] to-[var(--gold-to)]
          bg-clip-text text-transparent"
        >
          SHARPS
          <span
            className="absolute -bottom-1 left-0 w-10 h-[3px]
            bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)]
            rounded-full"
          />
        </Link>
      </div>

      <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin/users"
          onClick={onClose}
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : inactiveLink}`
          }
        >
          <FaUser />
          <span>Users</span>
        </NavLink>

        <NavLink
          to="/admin/products"
          onClick={onClose}
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : inactiveLink}`
          }
        >
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>

        <NavLink
          to="/admin/orders"
          onClick={onClose}
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : inactiveLink}`
          }
        >
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>

        <NavLink
          to="/products"
          onClick={onClose}
          className={({ isActive }) =>
            `${baseLink} ${isActive ? activeLink : inactiveLink}`
          }
        >
          <FaStore />
          <span>Shop</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded
          flex items-center justify-center space-x-2"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
