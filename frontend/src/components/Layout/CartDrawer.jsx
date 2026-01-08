import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";
const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col z-50
    w-[90%] sm:w-3/4 md:w-2/5 lg:w-1/3
    ${drawerOpen ? "translate-x-0" : "translate-x-full"}
  `}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer} className="cursor-pointer">
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      {/* Card Content with scrollable area */}
      <div className="flex-grow overflow-y-auto px-6">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {/* Component for Cart Content */}
        <CartContent />
      </div>
      {/* Checkout Button fixed at the bottom */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full cursor-pointer bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white py-2 rounded-lg shadow-md font-semibold hover:opacity-90 transition-opacity">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and delivery charges will be calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
