// import React from "react";
// import { Link } from "react-router-dom";
// import register from "../assets/register.webp";

// const Register = () => {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//     console.log("User Registered:", { name, email, password });
//   };
//   return (
//     <div className="flex h-full min-h-full ">
//       <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-6">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
//         >
//           <div className="flex justify-center mb-6">
//             <h2 className="text-xl font-medium">Get Registered</h2>
//           </div>
//           <h2 className="text-2xl font-bold text-center mb-6">Hey there!</h2>
//           <p className="text-center mb-6">
//             Enter your email and password to access your account.
//           </p>
//           <div className="mb-4">
//             <label className="block text-sm font-semibold mb-2">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your name"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email address"
//             />
//           </div>
//           {/* <div className="mb-4">
//             <label className="block text-sm font-semibold mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//             />
//           </div> */}

//           {/* Password */}
//           <div className="mb-4 relative">
//             <label className="block text-sm font-semibold mb-2">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
//               placeholder="Enter your password"
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-9 text-sm text-gray-500 hover:text-gray-700"
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white py-2 rounded hover:scale-105 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Sign Up
//           </button>
//           <p className="mt-6 text-center text-sm">
//             Don't have an account?{""}
//             <Link to="/login" className="text-blue-500 hover:underline ml-1">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//       <div className="hidden md:block w-1/2 h-full bg-gray-800">
//         <div className="h-full flex-col justify-center items-center">
//           <img
//             src={register}
//             alt="Register"
//             className="w-full h-[600px] object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";
import registerImg from "../assets/register.webp";
import { useToast } from "../context/ToastContext";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      // Save auth data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/login");
    } catch (err) {
      showToast(err.response?.data?.message || "Registration failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full min-h-full">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Get Registered!
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-sm text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white py-2 rounded hover:scale-105 transition-transform duration-300"
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>

          <p className="mt-6 text-center text-sm">
            Already have an account?
            <Link to="/login" className="text-blue-500 hover:underline ml-1">
              Login
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2">
        <img
          src={registerImg}
          alt="Register"
          className="w-full h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
