"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import servicesList from "../data/services";

export default function BookModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    services: [],
  });
  const [status, setStatus] = useState(null);

  if (!open) return null;

  function toggleService(id) {
    setForm((prev) => {
      const exists = prev.services.includes(id);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== id)
          : [...prev.services, id],
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.mobile || form.services.length === 0) {
      setStatus({
        type: "error",
        message: "Please fill all fields and select at least one service.",
      });
      return;
    }

    setStatus({ type: "loading", message: "Booking appointment..." });

    try {
      const res = await fetch("http://localhost:5000/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        // Show SweetAlert success message
        Swal.fire({
          icon: "success",
          title: "Appointment Booked!",
          text: "Appointment booked successfully! We will reach you out shortly.",
          confirmButtonColor: "#007ACC",
        });

        setStatus(null);
        setForm({ name: "", email: "", mobile: "", services: [] });
        onClose();
      } else {
        setStatus({ type: "error", message: data.message || "Something went wrong" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error: Could not book appointment." });
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4 animate-fadeIn"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-3xl p-8 animate-scaleIn relative border-2 border-[#80CCFF] max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 transition-all duration-300 text-3xl font-bold hover:scale-125 hover:rotate-90"
        >
          &times;
        </button>

        {/* Title */}
        <h3
          id="modal-title"
          className="text-3xl font-extrabold text-[#007ACC] mb-8 text-center tracking-wide"
        >
          Book Your Appointment
        </h3>

        {/* Status Message */}
        {status?.message && (
          <div
            role="alert"
            className={`mb-6 p-4 rounded-lg text-center text-sm font-medium animate-fadeIn ${
              status.type === "error"
                ? "bg-red-50 text-red-700 border-2 border-red-300"
                : status.type === "loading"
                ? "bg-yellow-50 text-yellow-700 border-2 border-yellow-300"
                : "bg-[#D0F0FF] text-[#005EA1] border-2 border-[#80CCFF]"
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Full name"
              className="p-4 border-2 border-[#80CCFF] rounded-xl focus:ring-2 focus:ring-[#80CCFF] focus:border-[#80CCFF] outline-none transition-all duration-300 shadow-sm hover:border-[#A0D8FF] bg-white"
              required
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              className="p-4 border-2 border-[#80CCFF] rounded-xl focus:ring-2 focus:ring-[#80CCFF] focus:border-[#80CCFF] outline-none transition-all duration-300 shadow-sm hover:border-[#A0D8FF] bg-white"
              required
            />
            <input
              type="tel"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              placeholder="Mobile number"
              className="p-4 border-2 border-[#80CCFF] rounded-xl focus:ring-2 focus:ring-[#80CCFF] focus:border-[#80CCFF] outline-none transition-all duration-300 shadow-sm hover:border-[#A0D8FF] bg-white"
              required
            />
          </div>

          {/* Services */}
          <div>
            <label className="block mb-4 font-bold text-gray-700 text-lg">
              Select Services (Multiple)
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {servicesList.map((s) => (
                <label
                  key={s.id}
                  className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    form.services.includes(s.id)
                      ? "border-[#007ACC] bg-[#D0F0FF] shadow-lg scale-105"
                      : "border-gray-300 hover:border-[#4AB3FF] hover:bg-[#D0F0FF] hover:shadow-md"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={form.services.includes(s.id)}
                    onChange={() => toggleService(s.id)}
                    className="mt-1 w-5 h-5 text-[#007ACC] rounded border-gray-300 focus:ring-2 focus:ring-[#80CCFF]"
                    aria-checked={form.services.includes(s.id)}
                  />

                  <div>
                    <div className="font-bold text-[#007ACC]">{s.title}</div>
                    <div className="text-sm text-gray-600">{s.short}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t-2 border-[#A0D8FF]">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 font-semibold text-gray-700 active:scale-95"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={status?.type === "loading"}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#007ACC] to-[#005EA1] text-white shadow-lg hover:shadow-xl hover:from-[#005EA1] hover:to-[#004080] active:scale-95 transition-all duration-300 font-bold"
            >
              {status?.type === "loading" ? "Booking..." : "Book Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
