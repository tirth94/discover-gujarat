import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home",          path: "/",              icon: "⌂" },
  { label: "Destinations",  path: "/destinations",  icon: "🗺️" },
  { label: "Temples",       path: "/temples",        icon: "🛕" },
  { label: "Beaches",       path: "/beaches",        icon: "🏖️" },
  { label: "Forest",        path: "/forest",         icon: "🦁" },
  { label: "Heritage",      path: "/heritage",       icon: "🏛️" },
  { label: "Personalities", path: "/personalities",  icon: "👤" },
  { label: "Travel Logs",   path: "/blog",           icon: "📝" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const drawerRef = useRef(null);
  const location  = useLocation();
  const navigate  = useNavigate();

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Close drawer on Escape ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ── Close drawer on route change ── */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Active check — home "/" needs exact match */
  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname === path;

  return (
    <>
      {/* ── Main Navbar Bar ── */}
      <nav
        id="main-navbar"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-50 h-20 flex items-center transition-all duration-500 ${
          scrolled
            ? "bg-[#1E0F12]/80 backdrop-blur-md border-b border-amber-500/10 shadow-2xl"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* ── Logo ── */}
          <button
            id="nav-logo"
            onClick={handleLogoClick}
            aria-label="Gujarat Tourism — Home"
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#800020] to-[#C5A880] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span
                  className="text-white font-bold text-base"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  G
                </span>
              </div>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#800020] to-[#C5A880] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300 scale-150 -z-10" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-amber-300 text-lg font-bold tracking-wide"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Gujarat
              </span>
              <span className="text-[9px] text-white/50 tracking-[0.22em] uppercase font-light mt-0.5" style={{ fontFamily: "DM Mono, monospace" }}>
                Tourism
              </span>
            </div>
          </button>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden md:flex items-center gap-1 m-0 p-0 list-none" role="list">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <li key={link.path}>
                  <Link
                    id={`nav-link-${link.path.replace(/\//g, "") || "home"}`}
                    to={link.path}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full cursor-pointer focus:outline-none group inline-flex items-center ${
                      active
                        ? "text-amber-300 bg-amber-500/10 border border-amber-500/25"
                        : "text-white/65 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Animated gold underline */}
                    <span
                      className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-px bg-amber-400 transition-all duration-300 ${
                        active ? "w-4" : "w-0 group-hover:w-4"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Mobile Hamburger ── */}
          <button
            id="nav-hamburger"
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-white/5 cursor-pointer focus:outline-none transition-colors duration-200"
            onClick={() => setMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={menuOpen}
          >
            <span className="block w-6 h-[2px] rounded-full bg-amber-400 transition-all duration-300" />
            <span className="block w-6 h-[2px] rounded-full bg-amber-400 transition-all duration-300" />
            <span className="block w-6 h-[2px] rounded-full bg-amber-400 transition-all duration-300" />
          </button>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Curtain Drawer ── */}
      {/* Backdrop */}
      <div
        id="mobile-menu-backdrop"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[99998] modal-backdrop transition-all duration-400 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        id="mobile-menu-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed top-0 right-0 h-screen w-[85vw] max-w-sm z-[99999] flex flex-col md:hidden transition-transform duration-400 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "linear-gradient(135deg, #1A0C10 0%, #2A1318 50%, #1E0F12 100%)" }}
      >
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#800020] via-[#C5A880] to-[#800020]" />

        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#800020] to-[#C5A880] flex items-center justify-center">
              <span className="text-white font-bold text-sm" style={{ fontFamily: "Playfair Display, serif" }}>G</span>
            </div>
            <div>
              <div className="text-amber-300 font-bold text-base" style={{ fontFamily: "Playfair Display, serif" }}>Gujarat</div>
              <div className="text-white/30 text-[9px] tracking-widest uppercase" style={{ fontFamily: "DM Mono, monospace" }}>Tourism</div>
            </div>
          </div>
          <button
            id="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all cursor-pointer focus:outline-none"
            aria-label="Close menu"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 p-6 flex flex-col gap-2 overflow-y-auto no-scrollbar" aria-label="Mobile navigation">
          {navLinks.map((link, i) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                id={`mobile-nav-${link.path.replace(/\//g, "") || "home"}`}
                to={link.path}
                aria-current={active ? "page" : undefined}
                style={{
                  fontFamily: "Playfair Display, serif",
                  animationDelay: menuOpen ? `${i * 60}ms` : "0ms",
                }}
                className={`flex items-center gap-4 w-full text-left px-5 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                  active
                    ? "bg-[#C5A880]/10 text-[#C5A880] border border-[#C5A880]/25 shadow-lg"
                    : "text-white/60 hover:bg-white/5 hover:text-white border border-transparent"
                }`}
              >
                <span className="text-xl w-7 text-center">{link.icon}</span>
                <span>{link.label}</span>
                {active && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer info at bottom */}
        <div className="p-6 border-t border-white/5">
          <p className="text-white/20 text-xs text-center mt-3 tracking-wider" style={{ fontFamily: "DM Mono, monospace" }}>
            GUJARAT TOURISM © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
}