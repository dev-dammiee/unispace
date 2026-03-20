import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-5 left-0 right-0 z-50 px-4">
        <div className="max-w-7xl mx-auto bg-[#CCDBFF] rounded-2xl px-5 py-3 flex items-center justify-between shadow-lg">

          {/* Logo */}
          <div className="text-xl font-bold tracking-wider text-[#2b4dbf]">
            <img src="logo.png" alt="Unispace" className="h-8 w-40" />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Service</li>
            <li className="hover:text-blue-600 cursor-pointer">Contributors</li>
            <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-5">
            <button className="hover:text-blue-600 cursor-pointer text-gray-700 font-medium">
              Login
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700 transition">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col gap-6 p-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Service</li>
          <li className="hover:text-blue-600 cursor-pointer">Contributors</li>
          <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col gap-4 px-6">
          <button className="border border-blue-600 text-blue-600 py-2 rounded-xl">
            Login
          </button>
          <button className="bg-blue-600 text-white py-2 rounded-xl">
            Register
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;