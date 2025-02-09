"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // For the language dropdown
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  // For the main mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setLanguageMenuOpen(false);
    // Insert your language-switching logic here if needed
  };

  // Navigation links array for easy mapping and active state
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <nav
      className="fixed top-6 left-0 w-full z-50 flex justify-center"
      style={{ border: "none", background: "transparent" }}
    >
      <div className="relative max-w-screen-xl w-full flex items-center justify-between px-4 py-2 font-mono text-white">
        {/* LOGO */}
        <div className="flex items-center">
          <Link href="/" className="transition-transform duration-300 hover:scale-110">
            <img
              src="https://cdn.prod.website-files.com/66864a63a92c5e776e1508bc/66952a12ecf948adf082b8e9_logo%20%2BNovagate%20branco%20sobre%20transparente-p-500.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* DESKTOP NAV LINKS (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`hover-glitch cursor-pointer ${
                  pathname === link.href ? "active" : ""
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* DESKTOP RIGHT SIDE (Language + Let’s Chat) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="hover-glitch cursor-pointer"
            >
              {selectedLanguage}
            </button>
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 flex flex-col text-sm py-2">
                {["EN", "NL", "PT"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageSelect(lang)}
                    className="px-4 py-2 text-white text-left hover:bg-[#1a64c4] transition-colors"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="relative px-4 py-2 rounded-lg bg-black border-2 border-blue-400/50 hover:border-blue-400 transition-all duration-300 
            shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 group text-lg font-semibold tracking-wide overflow-hidden"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Button text with gradient */}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-widest">
              Let’s Chat
            </span>
            {/* Scanning line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 animate-scan" />
          </button>
        </div>

        {/* MOBILE BURGER ICON (shown on mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between items-center">
              {/* Top bar */}
              <span
                className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              {/* Middle bar */}
              <span
                className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              {/* Bottom bar */}
              <span
                className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU (slide/fade in) */}
        <div
          className={`
            absolute top-full left-0 w-full 
            md:hidden 
            flex flex-col items-center 
            overflow-hidden 
            transition-all duration-300 
            ${menuOpen ? "max-h-screen py-4" : "max-h-0 py-0"}
          `}
        >
          {/* Nav links for mobile */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              <span
                className={`hover-glitch py-2 cursor-pointer ${
                  pathname === link.href ? "active" : ""
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}

          {/* Language selector on mobile */}
          <div className="relative py-2">
            <button
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="hover-glitch cursor-pointer"
            >
              {selectedLanguage}
            </button>
            {languageMenuOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 flex flex-col text-sm py-2">
                {["EN", "NL", "PT"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      handleLanguageSelect(lang);
                      setMenuOpen(false);
                    }}
                    className="px-4 py-2 text-white text-left hover:bg-[#1a64c4] transition-colors"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Let’s Chat button on mobile */}
          <Link
            href="#"
            className="mt-2 px-4 py-2 font-bold text-white rounded-md bg-[#1a64c4] shadow-[0_0_5px_#1a64c4] hover:shadow-[0_0_10px_#1a64c4] transition-shadow duration-300"
            style={{ textDecoration: "none" }}
            onClick={() => setMenuOpen(false)}
          >
            Let’s Chat
          </Link>
        </div>
      </div>

      {/* Inline “matrix glitch” animation styles */}
      <style jsx>{`
        /* Glitch effect for hover */
        .hover-glitch {
          transition: color 0.3s ease;
        }
        .hover-glitch:hover {
          color: #1a64c4;
          animation: glitch 0.5s infinite;
        }
        /* Active link styling */
        .active {
          color: #1a64c4;
          font-weight: bold;
        }
        @keyframes glitch {
          0% {
            text-shadow: none;
            transform: none;
          }
          20% {
            text-shadow: 2px 0 #1a64c4;
            transform: translate(-1px, -1px);
          }
          40% {
            text-shadow: -2px 0 #1a64c4;
            transform: translate(1px, 1px);
          }
          60% {
            text-shadow: 2px 0 #1a64c4;
            transform: translate(-1px, 1px);
          }
          80% {
            text-shadow: -2px 0 #1a64c4;
            transform: translate(1px, -1px);
          }
          100% {
            text-shadow: none;
            transform: translate(0, 0);
          }
        }
      `}</style>
    </nav>
  );
}
