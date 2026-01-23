// import React, { useEffect, useState } from "react";
// import MyOrdersPage from "./MyOrdersPage";
// import API from "../api/api";

// const Profile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await API.get("/auth/myProfile");
//         setUser(res.data.user);
//       } catch (err) {
//         navigate("/");
//       }
//     };
//     fetchProfile();
//   }, [navigate]);

//   if (!user) return <div>Loading...</div>;

//   return (
//     <div className="flex h-full min-h-full flex-col">
//       <div className="flex-grow container mx-auto p-4 md:p-6">
//         <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
//           {/* Left Section */}
//           <div className="w-full md:w-2/3 lg:w-3/4 overflow-x-auto shadow-md rounded-lg p-6">
//             <h1 className="text-2xl md:text-3xl font-bold mb-4">{user.name}</h1>
//             <p className="text-lg text-gray-600 mb-4">{user.email}</p>
//             <button
//               className="bg-red-500 w-full text-white py-2 px-4 rounded hover:bg-red-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onClick={() => {
//                 localStorage.removeItem("token");
//                 localStorage.removeItem("user");
//                 window.location.reload(); // simple logout
//               }}
//             >
//               Logout
//             </button>
//           </div>

//           {/* Right Section */}
//           <div className="w-full md:w-2/3 lg:w-3/4">
//             <MyOrdersPage />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyOrdersPage from "./MyOrdersPage";
import API from "../api/api";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/auth/myProfile");
        setUser(res.data.user);
      } catch (err) {
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          <p className="text-gray-600 text-sm">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-gray-600">User not found. Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-full flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="w-full md:w-2/3 lg:w-3/4 shadow-md rounded-lg p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{user.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{user.email}</p>

            <button
              className="bg-red-500 w-full text-white py-2 px-4 rounded hover:bg-red-700"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrdersPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
