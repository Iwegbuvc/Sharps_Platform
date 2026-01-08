import { IoLogoInstagram } from "react-icons/io"
import { IoLogoSnapchat } from "react-icons/io"
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
            <a href="#" className="hover:text-gray-400">Check Us Out at Our Location</a>
        </div>
        <div className="text-sm hidden md:block">
            <a href="tel:+1234567890" className="hover:text-gray-400">+23412567890</a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
