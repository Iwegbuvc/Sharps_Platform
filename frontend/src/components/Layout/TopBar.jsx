import { IoLogoInstagram } from "react-icons/io";
import { IoLogoSnapchat } from "react-icons/io";
const TopBar = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 text-sm">
        <div className="hidden md:flex items-center space-x-2">
          <a href="#" className="hover:text-gray-400 ml-4">
            <IoLogoInstagram size={20} />
          </a>
          <a href="#" className="hover:text-gray-400 ml-4">
            <IoLogoSnapchat size={20} />
          </a>
        </div>
        <div className="text-sm text-center grow">
          <a
            href="https://www.google.com/maps/search/?api=1&query=49+Rumuprikom+Iwofe+Road+Opposite+Mobil+Fuel+Station+Port+Harcourt+Rivers+State+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Visit Our Store – Rumuprikom PH
          </a>
        </div>

        <div className="text-sm hidden md:block">
          <a href="tel:+1234567890" className="hover:text-gray-400">
            08142853360
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
