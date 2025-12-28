import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email: `${firstName}.${lastName}@demo.com`,
    };
    onLogin(user);
    nav("/");
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-[#A0D8FF] animate-fadeIn">
        
        <h2 className="text-3xl font-extrabold text-center text-[#007ACC] mb-6">
          Welcome Back 🐾
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Login or Sign Up to continue with Pawslive
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* First Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">First Name</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full p-3 border border-[#A0D8FF] rounded-lg outline-none focus:ring-2 focus:ring-[#80CCFF] transition"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Last Name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full p-3 border border-[#A0D8FF] rounded-lg outline-none focus:ring-2 focus:ring-[#80CCFF] transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#007ACC] hover:bg-[#005EA1] text-white py-3 rounded-xl shadow-lg font-semibold transition transform active:scale-95"
          >
            Continue
          </button>

        </form>

        {/* Footer text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          This is a demo login — no password required.
        </p>
      </div>
    </div>
  );
}
