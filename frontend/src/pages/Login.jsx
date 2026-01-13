import React from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.webp";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("User Logged In:", { email, password });
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
          <p className="text-center mb-6">
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
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[var(--gold-from)] to-[var(--gold-to)] text-white py-2 rounded hover:scale-105 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account?{""}
            <Link to="/register" className="text-blue-500 hover:underline ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex-col justify-center items-center">
          <img
            src={login}
            alt="Login"
            className="w-full h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
