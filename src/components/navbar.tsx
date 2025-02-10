"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

export default function Navbar() {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <>
      <nav className="w-full z-50 flex justify-center bg-transparent">
        <div className="relative max-w-screen-xl w-full flex items-center justify-between px-4 py-6 font-mono text-white">
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

          {/* DESKTOP NAV LINKS */}
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

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language dropdown - Desktop */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="hover-glitch cursor-pointer"
              >
                {selectedLanguage}
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 flex flex-col text-sm py-2 bg-black/80 backdrop-blur-sm rounded z-50">
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

            <button className="relative px-4 py-2 rounded-lg bg-black border-2 border-blue-400/50 hover:border-blue-400 transition-all duration-300 
              shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 group text-lg font-semibold tracking-wide overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-widest">
                Let's Chat
              </span>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 animate-scan" />
            </button>
          </div>

          {/* MOBILE CONTROLS - Grouped burger and language */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Language selector for mobile */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="hover-glitch cursor-pointer text-white"
              >
                {selectedLanguage}
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 flex flex-col text-sm py-2 bg-black/80 backdrop-blur-sm rounded z-50">
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

            {/* Burger Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="block focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-between items-center">
                <span
                  className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* 
        FULL SCREEN MOBILE MENU 
        Always rendered, but we toggle classes to animate open/close.
      */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 md:hidden flex flex-col items-center justify-center 
          transition-all duration-300 ease-in-out
          ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"}
        `}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-4 text-white z-50 p-2"
          aria-label="Close mobile menu"
        >
          <X size={32} />
        </button>

        <div className="h-full flex flex-col items-center justify-center space-y-8 text-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              <span
                className={`text-white hover-glitch cursor-pointer ${
                  pathname === link.href ? "active" : ""
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}

          {/* Mobile Let's Chat button */}
          <button className="relative px-4 py-2 rounded-lg bg-black border-2 border-blue-400/50 hover:border-blue-400 transition-all duration-300 
              shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 group text-lg font-semibold tracking-wide overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-widest">
                Let's Chat
              </span>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 animate-scan" />
            </button>
        </div>
      </div>

      {/* Extra styles for glitch effect and active link */}
      <style jsx>{`
        .hover-glitch {
          transition: color 0.3s ease;
        }
        .hover-glitch:hover {
          color: #1a64c4;
          animation: glitch 0.5s infinite;
        }
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
    </>
  );
}
