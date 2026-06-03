import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", page: "home" },
  { label: "Temples", page: "temples" },
  { label: "Beaches", page: "beaches" },
  { label: "Forest", page: "forest" },
  { label: "Heritage", page: "heritage" },
  { label: "Personalities", page: "personalities" }
];

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (page) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-20 flex items-center transition-all duration-500 ${
        scrolled 
          ? "bg-[#2D1B1E]/75 backdrop-blur-md border-b border-amber-500/10 shadow-2xl" 
          : "bg-transparent border-b border-transparent shadow-none" 
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        
        {/* LOGO */}
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-3 group text-left cursor-pointer"
          aria-label="Gujarat Tourism Home"
        >
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-800 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg font-serif">G</span>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-800 to-amber-500 opacity-0 group-hover:opacity-40 blur-md transition-all duration-300 scale-150 -z-10" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-amber-400 text-lg font-bold tracking-wide font-serif">
              Gujarat
            </span>
            <span className="text-[10px] text-white/60 tracking-[0.2em] uppercase font-light mt-0.5">
              Tourism
            </span>
          </div>
        </button>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex items-center gap-2 m-0 p-0 list-none">
          {navLinks.map((link) => (
            <li key={link.page}>
              <button
                onClick={() => handleNav(link.page)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full cursor-pointer z-10 ${
                  currentPage === link.page
                    ? "text-amber-400 bg-amber-500/10 border border-amber-500/30"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA BUTTON */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNav("home")}
            className="bg-gradient-to-r from-red-800 to-amber-600 hover:from-amber-600 hover:to-red-800 text-white font-medium text-xs py-2.5 px-6 rounded-full shadow-lg hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
          >
            Plan Your Trip
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 cursor-pointer focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* MOBILE MENU DROPDOWN */}
        <div
          className={`absolute top-16 left-0 w-full md:hidden transition-all duration-300 origin-top transform ${
            menuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible pointer-events-none"
          }`}
        >
          <div className="bg-[#2D1B1E]/95 border border-amber-500/20 rounded-2xl mx-4 my-2 px-4 py-4 flex flex-col gap-1 shadow-2xl backdrop-blur-lg">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`text-left py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  currentPage === link.page
                    ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => handleNav("home")} 
              className="w-full bg-gradient-to-r from-red-800 to-amber-600 text-white font-medium text-xs py-3 rounded-xl mt-2 shadow-lg"
            >
              Plan Your Trip
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}