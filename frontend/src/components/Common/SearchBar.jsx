// import { useState } from "react";
// import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

// const SearchBar = () => {

//     const [searchTerm, setSearchTerm] = useState("");
//     const [isOpen, setIsOpen] = useState(false);

//     const handleSearchToggle = () => {
//         setIsOpen(!isOpen);
//         console.log("Search Term:", searchTerm)
//         // setIsOpen( false)

//     }
//   return (
//     <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen?"absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}  `}>
//     {isOpen ? (
//       <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
//         <div className="relative w-1/2">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search..."
//           className="bg-gray-100 rounded-lg px-4 py-2 pl-2 pr-12 focus:outline-none w-full placeholder:text-gray-700"
//         />
//         </div>
//         <button
//           type="submit"
//           className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg--700 transition duration-200"
//         >
//           Search
//         </button>
//         {/* close button */}
//        <button
//   type="button"
//   onClick={() => setIsOpen(false)}
//   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
// >
//   <HiMiniXMark className="h-6 w-6" />
// </button>

//       </form>
//     ) : (
//       <button onClick={handleSearchToggle} >
//         <HiMagnifyingGlass className="h-6 w-6"/>
//       </button>
//     )}
//     </div>
//   )
// }

// export default SearchBar
import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchTerm(""); // ✅ clear input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return; // optional safety check

    console.log("Searching for:", searchTerm);

    // TODO: trigger search / navigate / API call here

    setIsOpen(false);
    setSearchTerm(""); // ✅ clear after search
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen
          ? "absolute top-0 left-0 w-full bg-white h-24 z-50"
          : "w-auto"
      }`}
    >
      {isOpen ? (
        <form className="relative flex items-center gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none"
            autoFocus
          />

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Search
          </button>

          <button
            type="button"
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button onClick={handleOpen}>
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
