// import { useAuth } from "../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";
// import API from "../api/api";
// import loginImg from "../assets/login.webp";

// const Login = () => {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [loading, setLoading] = React.useState(false);
//   const [showPassword, setShowPassword] = React.useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     setLoading(true);
//     try {
//       const res = await API.post("/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token); // store JWT
//       localStorage.setItem("user", JSON.stringify(res.data.user)); // optional: store user
//       navigate("/profile"); // redirect after login
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//     // console.log("User Logged In:", { email, password });
//   };
//   return (
//     <div className="flex h-full min-h-full">
//       <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
//         >
//           <div className="flex justify-center mb-6">
//             <h2 className="text-xl font-medium">Login</h2>
//           </div>
//           <h2 className="text-2xl font-bold text-center mb-6">Hey there!</h2>
//           <p className="text-center mb-6">
//             Enter your email and password to access your account.
//           </p>
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
//           {/* <div className="mb-4 relative">
//             <label className="block text-sm font-semibold mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//             />
//           </div> */}
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
//             disabled={loading}
//             className="w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//           <p className="mt-6 text-center text-sm">
//             Don't have an account?{""}
//             <Link to="/register" className="text-blue-500 hover:underline ml-1">
//               Register
//             </Link>
//           </p>
//         </form>
//       </div>
//       <div className="hidden md:block w-1/2 bg-gray-800">
//         <div className="h-full flex-col justify-center items-center">
//           <img
//             src={loginImg}
//             alt="Login"
//             className="w-full h-[600px] object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react"; // Make sure React is imported for useState
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";
import loginImg from "../assets/login.webp";
import { useToast } from "../context/ToastContext";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();
  const { login } = useAuth(); // 1. Pull the login function from context
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/auth/login", { email, password });

      // 2. Use the context login function.
      // This handles localStorage AND updates the global 'user' state immediately.
      login(res.data.user, res.data.token);

      // 3. Conditional redirection based on role
      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/profile");
      }
    } catch (err) {
      showToast(err.response?.data?.message || "Login failed", "error");
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
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Login</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hey there!</h2>
          <p className="text-center mb-6 text-gray-600">
            Enter your email and password to access your account.
          </p>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-sm text-gray-500 hover:text-gray-700 font-medium"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded font-bold transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="mt-6 text-center text-sm">
            Don't have an account?
            <Link
              to="/register"
              className="text-blue-500 hover:underline ml-1 font-semibold"
            >
              Register
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={loginImg}
            alt="Login"
            className="w-full h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
