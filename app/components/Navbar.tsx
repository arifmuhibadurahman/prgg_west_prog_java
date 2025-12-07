import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative">
      <div className="bg-[#C1FF9B] rounded-full mx-4 mt-4 px-8 py-4 shadow-lg">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          
          {/* Logo */}
          <div className="text-2xl font-black">WEB POTENSI</div>

          {/* Menu */}
          <div className="flex items-center gap-12 text-xl font-bold">

            <Link href="/Map" className="hover:opacity-70">
              Map
            </Link>

            <a href="#data" className="hover:opacity-70">
              Data
            </a>

            <a href="#about" className="hover:opacity-70">
              About
            </a>

            {/* LOGIN BUTTON */}
            <Link
              href="/login"
              className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              Login
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
