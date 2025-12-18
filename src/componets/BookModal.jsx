"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import servicesList from "../data/services";

/* Generate 12-hour time slots */
const generateTimeSlots = () => {
  const slots = [];
  const startHour = 10;  // 9 AM
  const endHour = 21;   // 7 PM

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let min of ["00", "30"]) {
      const period = hour >= 12 ? "PM" : "AM";
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;

      slots.push(`${displayHour}:${min} ${period}`);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

export default function BookModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    services: [],
    date: "",
    time: "",
  });

  const [status, setStatus] = useState(null);

  if (!open) return null;

  function toggleService(id) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.mobile ||
      !form.date ||
      !form.time ||
      form.services.length === 0
    ) {
      setStatus({
        type: "error",
        message: "Please complete all fields including date & time.",
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
        Swal.fire({
          icon: "success",
          title: "Appointment Booked!",
          text: `Scheduled on ${form.date} at ${form.time}`,
          confirmButtonColor: "#007ACC",
        });

        setForm({
          name: "",
          email: "",
          mobile: "",
          services: [],
          date: "",
          time: "",
        });
        setStatus(null);
        onClose();
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
      <div className="bg-white rounded-3xl w-full max-w-3xl p-8 shadow-2xl border-2 border-[#80CCFF] max-h-[90vh] overflow-y-auto relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-3xl font-bold text-gray-400 hover:text-gray-700"
        >
          &times;
        </button>

        <h3 className="text-3xl font-extrabold text-[#007ACC] mb-8 text-center">
          Book Your Appointment
        </h3>

        {status?.message && (
          <div
            className={`mb-6 p-4 rounded-lg text-center font-medium ${
              status.type === "error"
                ? "bg-red-50 text-red-700 border-2 border-red-300"
                : "bg-yellow-50 text-yellow-700 border-2 border-yellow-300"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="p-4 border-2 border-[#80CCFF] rounded-xl focus:ring-2 focus:ring-[#80CCFF]"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-4 border-2 border-[#80CCFF] rounded-xl focus:ring-2 focus:ring-[#80CCFF]"
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              className="p-4 border-2 border-[#80CCFF] rounded-xl focus:ring-2 focus:ring-[#80CCFF]"
              required
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Select Date
              </label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full p-4 border-2 border-[#80CCFF] rounded-xl focus:ring-2 focus:ring-[#80CCFF]"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Select Time
              </label>
              <select
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full p-4 border-2 border-[#80CCFF] rounded-xl focus:ring-2 focus:ring-[#80CCFF] bg-white"
                required
              >
                <option value="">Choose time slot</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Services */}
          <div>
            <label className="block mb-4 font-bold text-gray-700 text-lg">
              Select Services
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {servicesList.map((s) => (
                <label
                  key={s.id}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition ${
                    form.services.includes(s.id)
                      ? "border-[#007ACC] bg-[#D0F0FF]"
                      : "border-gray-300 hover:border-[#4AB3FF]"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={form.services.includes(s.id)}
                    onChange={() => toggleService(s.id)}
                    className="mr-2"
                  />
                  <div className="font-bold text-[#007ACC]">{s.title}</div>
                  <div className="text-sm text-gray-600">{s.short}</div>
                </label>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t-2">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border-2 border-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#007ACC] to-[#005EA1] text-white font-bold shadow-lg"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
