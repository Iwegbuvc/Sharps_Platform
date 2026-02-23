import React, { useState } from "react";
import API from "../api/api";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await API.post("/auth/forgot-password", { email });
      setMessage("If your email exists, a reset link has been sent.");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending reset link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full min-h-full justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password?</h2>
        <p className="text-center mb-6 text-gray-600">
          Enter your email address and we'll send you a link to reset your password.
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
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded font-bold transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
        {message && <p className="mt-4 text-center text-sm text-blue-600">{message}</p>}
        <p className="mt-6 text-center text-sm">
          <Link to="/login" className="text-blue-500 hover:underline font-semibold">
            Back to Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
