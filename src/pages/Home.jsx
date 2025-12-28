"use client";

import { useState } from "react";
import services from "../data/services";
import ServiceCard from "../componets/ServiceCard";
import onOpenBook from '../pages/Contact';

export default function Home({onOpenBook}) {
  // For the CTA button on Hero sections, let's create a dummy handler
  // You can replace this with real modal open or navigation logic
  

  return (
    <main className="font-sans bg-gradient-to-b from-[#E0F5FF] to-white min-h-screen">
      {/* Main Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#8CE4FF] via-white to-[#B3E6FF] py-20 md:py-28 transition-smooth">
        <div className="absolute top-10 left-10 text-[#6AC7FF] text-5xl opacity-20 select-none animate-pulse">
          🐾
        </div>
        <div className="absolute bottom-10 right-10 text-[#6AC7FF] text-6xl opacity-20 select-none animate-pulse">
          🐾
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 transform transition-smooth hover:scale-105">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#007ACC] leading-tight drop-shadow-sm text-balance">
              Welcome to Pawslive
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
              Premium care for your furry family — grooming, training, walking,
              vet visits & more.
            </p>
            <div className="flex gap-4 mt-10">
              <button
                onClick={onOpenBook}
                className="bg-[#007ACC] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#005F99] active:scale-95 transition-all duration-300 font-semibold"
              >
                Book Appointment
              </button>
              <a
                href="#services"
                className="px-8 py-4 rounded-xl border-2 border-[#007ACC] text-[#007ACC] font-semibold hover:bg-[#D0EBFF] hover:border-[#005F99] active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-[#A9D6FF] hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-[#007ACC] mb-6">
                Why Pawslive?
              </h3>
              <ul className="text-gray-800 text-base space-y-4">
                <li className="flex items-start gap-3 transform transition-transform duration-300 hover:translate-x-2">
                  <span className="text-[#0099FF] text-2xl flex-shrink-0">
                    ✓
                  </span>
                  <span className="font-medium">
                    Certified trainers & veterinary experts
                  </span>
                </li>
                <li className="flex items-start gap-3 transform transition-transform duration-300 hover:translate-x-2">
                  <span className="text-[#0099FF] text-2xl flex-shrink-0">
                    ✓
                  </span>
                  <span className="font-medium">
                    Personalized care plans for every dog
                  </span>
                </li>
                <li className="flex items-start gap-3 transform transition-transform duration-300 hover:translate-x-2">
                  <span className="text-[#0099FF] text-2xl flex-shrink-0">
                    ✓
                  </span>
                  <span className="font-medium">
                    Best quality food for your dog
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div
          className="max-w-3xl mx-auto bg-gradient-to-br from-[#E0F5FF] to-white 
                        p-8 rounded-2xl border-2 border-[#A0D8FF] 
                        shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-[#007ACC] mb-4">Who We Are</h3>

          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            I’m{" "}
            <span className="font-semibold text-[#007ACC]">
              Abhishek Tiwari
            </span>
            —a devoted dog lover, trained caregiver, and certified pet-care
            professional. Pawslive was created from a heartfelt belief:
            <span className="font-medium">
              every dog deserves more than basic care; they deserve compassion,
              understanding, and a safe space where they feel genuinely loved.
            </span>{" "}
            Over the years, I’ve had the privilege of caring for dogs of every
            breed, temperament, and age, and each one has taught me something
            meaningful about trust, patience, and the true beauty of
            unconditional love.
            {"\n\n"}
            With extensive hands-on experience in dog walking, daycare, training
            support, behavioral understanding, and specialized care, I know that
            no two dogs are ever alike. Every dog has their own quirks,
            preferences, personality, and emotional needs. That’s why Pawslive
            follows a deeply personalized approach—whether your furry friend
            enjoys adventurous outdoor activities, prefers calm and gentle
            walks, loves playful social time, or feels safest with dedicated
            one-on-one attention.
            {"\n\n"}
            At Pawslive, our commitment goes far beyond routine service.
            <span className="font-medium">
              Your dog’s safety, emotional well-being, and happiness always come
              first.
            </span>
            You’ll receive real-time updates, transparent communication, and
            sincere care at every step. Because to us, your dog is not just a
            pet—they are a cherished member of your family… and when they’re
            with us, they become a cherished part of ours too.
            {"\n\n"}
            Thank you for trusting Pawslive with your beloved companion. We're
            here to give them comfort, joy, and the kind of love they truly
            deserve.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-white via-[#E0F5FF] to-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#007ACC] drop-shadow-sm text-balance">
              Our Premium Services
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed text-lg">
              Everything your furry companion needs — grooming, training,
              walking, medical care & more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.id}
                className="transform transition-smooth duration-500"
              >
                <ServiceCard s={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-white to-[#E0F5FF] p-10 rounded-2xl shadow-xl border-2 border-[#A0D8FF] hover:shadow-2xl transition-all duration-500">
          <h3 className="text-3xl font-bold text-center text-[#007ACC] mb-8">
            Get in Touch
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border-2 border-[#A0D8FF] focus:ring-2 focus:ring-[#80CCFF] focus:border-[#80CCFF] outline-none transition-all duration-300 bg-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-4 rounded-lg border-2 border-[#A0D8FF] focus:ring-2 focus:ring-[#80CCFF] focus:border-[#80CCFF] outline-none transition-all duration-300 bg-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                rows="6"
                placeholder="How can we help you?"
                className="w-full p-4 rounded-lg border-2 border-[#A0D8FF] focus:ring-2 focus:ring-[#80CCFF] focus:border-[#80CCFF] outline-none transition-all duration-300 bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#007ACC] hover:bg-[#005EA1] active:scale-95 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-10 pt-8 border-t-2 border-[#A0D8FF] text-center text-gray-600 space-y-2">
            <p className="font-semibold text-gray-700 text-lg">
              📞 Phone: +91 97548 08085
            </p>
            <p className="font-semibold text-gray-700 text-lg">
              📧 Email: pawsliveindore09@gmail.com
            </p>
            <p className="text-sm mt-4">We usually respond within 24 hours.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
