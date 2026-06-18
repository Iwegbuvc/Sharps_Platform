import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 lg:grid-cols-[1.8fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3">
            <img
              src="/sharpLogo.png"
              alt="SHARPS logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <p className="text-xl font-semibold">SHARPS</p>
              <p className="text-sm text-gray-300 max-w-md">
                A modern fashion destination with fast shipping, easy returns,
                and transparent policies for every customer.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
            Quick links
          </h2>
          <div className="space-y-3 text-sm text-gray-300">
            <Link to="/terms-and-conditions" className="block hover:text-white">
              Terms and Conditions
            </Link>
            <Link to="/privacy-policy" className="block hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/refund-policy" className="block hover:text-white">
              Refund Policy
            </Link>
            <Link to="/shipping-policy" className="block hover:text-white">
              Shipping Policy
            </Link>
            <Link to="/faq" className="block hover:text-white">
              FAQs
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
            Contact
          </h2>
          <div className="text-sm text-gray-300 space-y-3">
            <p>sharpscollection.online@gmail.com</p>
            <p>+2348142853360</p>
            <p>49 Rumuepirikom/Iwofe Rd Rumuopirikom Port Harcourt</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © 2026 SHAPRS. Crafted for seamless style and easy returns.
      </div>
    </footer>
  );
};

export default Footer;
