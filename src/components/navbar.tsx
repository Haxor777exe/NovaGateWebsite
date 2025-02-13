"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('common');
  const router = useRouter();

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setLanguageMenuOpen(false);

    // Set the cookie with an expiration date (e.g., 1 year)
    document.cookie = `locale=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    router.refresh();
  };


  useEffect(() => {
    const storedLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('locale='))
      ?.split('=')[1];

    setSelectedLanguage(storedLocale || 'EN');
  }, []);


  const navLinks = [
    { href: "/", label: t('Home') },
    { href: "", label: t('Services') },
    { href: "/about", label: t('About Us') },
    { href: "/careers", label: t('Careers') },
  ];

  // Services submenu items
  const servicesSubmenu = [
    { href: "/services/voicebot", label: t('AI Voicebots') },
    { href: "/services/chatbot", label: t('AI Chatbots') },
    { href: "/services/agents", label: t('AI Agents') },
    { href: "/services/software", label: t('Smart Software Development') },
    { href: "/services/automations", label: t('Automations') },
  ];

  return (
    <>
      <nav className="w-full z-50 flex justify-center bg-transparent">
        <div className="relative max-w-screen-xl w-full flex items-center justify-between px-4 py-6 font-mono text-white">
          {/* LEFT: LOGO */}
          <div className="flex items-center">
            <Link href="/" className="transition-transform duration-300 hover:scale-110">
              <img
                src="https://cdn.prod.website-files.com/66864a63a92c5e776e1508bc/66952a12ecf948adf082b8e9_logo%20%2BNovagate%20branco%20sobre%20transparente-p-500.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* CENTER: NAV LINKS (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
            {navLinks.map((link) => {
              if (link.label === t('Services')) {
                return (
                  <div key={link.href} className="relative group">
                    <Link href={link.href}>
                      <span
                        className={`hover-glitch cursor-pointer ${pathname === link.href ? "active" : ""
                          }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                    {/* Desktop Dropdown for Services - centered */}
                    <div
                      className="
                        absolute left-1/2 transform -translate-x-1/2 mt-2 w-60 origin-top 
                        bg-black/80 backdrop-blur-sm rounded-md 
                        shadow-lg shadow-blue-500/50 
                        opacity-0 translate-y-2 
                        group-hover:opacity-100 group-hover:translate-y-0 
                        transition-all duration-300
                        z-50
                      "
                    >
                      <ul className="flex flex-col text-center">
                        {servicesSubmenu.map((service) => (
                          <li key={service.href}>
                            <Link href={service.href}>
                              <span className="block px-4 py-2 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 transition-colors">
                                {service.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              } else {
                return (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`hover-glitch cursor-pointer ${pathname === link.href ? "active" : ""
                        }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              }
            })}
          </div>

          {/* RIGHT: LANGUAGE & LET'S CHAT (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
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

            <a
              href="https://cal.com/david.nabeiro/novagate.30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="relative px-4 py-2 rounded-lg bg-black border-2 border-blue-400/50 hover:border-blue-400 transition-all duration-300 
      shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 group text-lg font-semibold tracking-wide overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-widest">
                  {t('Lets Chat')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 animate-scan" />
              </button>
            </a>
          </div>

          {/* MOBILE CONTROLS: Single Toggle Button */}
          <div className="md:hidden flex items-center space-x-4">
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

            {/* New toggle button */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center focus:outline-none z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-center items-center">
                <span
                  className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${menuOpen ? "rotate-45" : "-translate-y-2"
                    }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${menuOpen ? "-rotate-45" : "translate-y-2"
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 md:hidden flex flex-col items-center justify-center 
          transition-all duration-300 ease-in-out
          ${menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
          }
        `}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => {
            if (link.label === t('Services')) {
              return (
                <div key={link.href} className="flex flex-col items-center">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    // Make main mobile links uppercase, larger, bold
                    className="text-white hover-glitch cursor-pointer text-center text-3xl uppercase font-bold"
                  >
                    {link.label}
                  </button>
                  {mobileServicesOpen && (
                    <div className="flex flex-col mt-4 space-y-4 bg-white text-2xl uppercase font-bold rounded-md p-4">
                      {servicesSubmenu.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setMenuOpen(false)}
                        >
                          {/* Sub-links can remain smaller */}
                          <span className="text-black text-lg">
                            {service.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {/* Make main mobile links uppercase, larger, bold */}
                  <span
                    className={`text-white hover-glitch cursor-pointer text-center text-3xl uppercase font-bold ${pathname === link.href ? "active" : ""
                      }`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            }
          })}

          {/* Mobile Let's Chat button */}
          <a
            href="https://cal.com/david.nabeiro/novagate.30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="relative px-4 py-2 rounded-lg bg-black border-2 border-blue-400/50 hover:border-blue-400 transition-all duration-300 
      shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 group text-lg font-semibold tracking-wide overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-widest">
                {t('Lets Chat')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 animate-scan" />
            </button>
          </a>
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
  animation: glitch 0.5s infinite;
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
