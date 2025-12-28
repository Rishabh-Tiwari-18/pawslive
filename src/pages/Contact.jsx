"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import Hero from "../componets/Hero";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export default function Contact({ onOpenBook }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Message sent successfully!",
          confirmButtonColor: "#007ACC",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: data.message || "Something went wrong.",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: error.message || "Failed to send message.",
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Have a question? We're here to help you and your furry friend."
        onCta={onOpenBook}
      />

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-white to-[#E0F5FF] p-10 rounded-2xl shadow-xl border-2 border-[#A0D8FF] hover:shadow-2xl transition-all duration-500">
          <h3 className="text-3xl font-bold text-center text-[#007ACC] mb-8">
            Get in Touch
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border-2 border-[#A0D8FF] focus:ring-2 focus:ring-[#80CCFF] bg-white"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-4 rounded-lg border-2 border-[#A0D8FF] focus:ring-2 focus:ring-[#80CCFF] bg-white"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full p-4 rounded-lg border-2 border-[#A0D8FF] focus:ring-2 focus:ring-[#80CCFF] bg-white resize-none"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#007ACC] hover:bg-[#005EA1] text-white font-bold rounded-lg shadow-lg transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-10 pt-8 border-t-2 border-[#A0D8FF] text-center text-gray-600 space-y-2">
            <p className="font-semibold text-gray-700 text-lg">📞 Phone: +91 97548 08085</p>
            <p className="font-semibold text-gray-700 text-lg">📧 Email: pawsliveindore09@gmail.com</p>
            <p className="text-sm mt-4">We usually respond within 24 hours.</p>
          </div>
        </div>
      </div>
    </>
  );
}
