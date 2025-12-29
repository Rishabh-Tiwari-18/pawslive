"use client";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* LOGO + TEXT */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="h-14 w-14 rounded-full overflow-hidden shadow-md cursor-pointer 
                 hover:shadow-lg transition-shadow duration-300 my-2">
                <img
                  src={logo}
                  alt="Pawslive Logo"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Pawslive Label */}
              <span className="text-[#1FB1EA] text-xl font-bold select-none">
                PawsLive
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-[#007ACC] font-semibold" : "text-gray-700 hover:text-[#007ACC]"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-[#007ACC] font-semibold" : "text-gray-700 hover:text-[#007ACC]"
                  }`
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-[#007ACC] font-semibold" : "text-gray-700 hover:text-[#007ACC]"
                  }`
                }
              >
                Services
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-[#007ACC] font-semibold" : "text-gray-700 hover:text-[#007ACC]"
                  }`
                }
              >
                Contact
              </NavLink>

              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-[#007ACC] font-semibold" : "text-gray-700 hover:text-[#007ACC]"
                  }`
                }
              >
                Gallery
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-[#007ACC] hover:bg-blue-50 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-50 bg-white shadow-2xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-1">

          {/* Mobile nav items (same as before) */}
          <NavItemMobile to="/" label="Home" closeMenu={closeMenu} />
          <NavItemMobile to="/about" label="About Us" closeMenu={closeMenu} />
          <NavItemMobile to="/services" label="Services" closeMenu={closeMenu} />
          <NavItemMobile to="/contact" label="Contact" closeMenu={closeMenu} />
          <NavItemMobile to="/gallery" label="Gallery" closeMenu={closeMenu} />

        </div>
      </div>

      <div className="pt-16" />
    </>
  );
}

/* Mobile Nav Item Component */
function NavItemMobile({ to, label, closeMenu }) {
  return (
    <NavLink
      to={to}
      onClick={closeMenu}
      className={({ isActive }) =>
        `block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
          isActive
            ? "bg-[#007ACC]/10 text-[#007ACC] font-bold"
            : "text-gray-800 hover:bg-gray-100"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
