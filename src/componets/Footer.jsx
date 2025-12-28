"use client";
import Contact from "../pages/Contact";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer({ onOpenBook }) {
  return (
    <footer className="bg-gradient-to-b from-white to-[#E0F5FF] border-t-2 border-[#A0D8FF] mt-16 shadow-lg">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Branding and CTA */}
        <div className="max-w-sm group">
          <div className="text-3xl font-extrabold text-[#007ACC] mb-3 group-hover:text-[#005A9C] transition-colors duration-300">
            <Link to="/">Pawslive</Link>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The care your dog deserves — training, grooming, medical visits, and
            loving boarding.
          </p>
          <button
            onClick={onOpenBook}
            className="bg-[#3A9DFF] hover:bg-[#2B7ACC] active:scale-95 transition-all duration-300 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl font-semibold"
          >
            Book Appointment
          </button>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-16 text-gray-700">
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#007ACC]">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link className="cursor-pointer text-gray-600 hover:text-[#3A9DFF] font-medium transition-colors duration-300 hover:translate-x-1 transform block">
                  About
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer text-gray-600 hover:text-[#3A9DFF] font-medium transition-colors duration-300 hover:translate-x-1 transform block">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#007ACC]">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link className="cursor-pointer text-gray-600 hover:text-[#3A9DFF] font-medium transition-colors duration-300 hover:translate-x-1 transform block">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer text-gray-600 hover:text-[#3A9DFF] font-medium transition-colors duration-300 hover:translate-x-1 transform block">
                  Privacy
                </Link>
              </li>
            </ul>

            {/* Social icons under Contact + Privacy */}
            {/* Social icons under Contact + Privacy */}
            <div className="flex flex-wrap items-center gap-4 mt-5 justify-start md:justify-center">
              <a
                href="https://www.instagram.com/pawslive_?igsh=MWEzbXFhdTF4ZHp0bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007ACC] hover:text-[#FF4D88] transition-all duration-300 text-2xl sm:text-[26px] hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com/@pawslive?si=SO9JuUqwap4BmNDk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007ACC] hover:text-red-500 transition-all duration-300 text-2xl sm:text-[26px] hover:scale-110"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#B3E6FF] bg-opacity-40 py-6 text-center text-sm text-gray-600 border-t border-[#A0D8FF] font-medium">
        © {new Date().getFullYear()} Pawslive. All rights reserved.
      </div>
    </footer>
  );
}
