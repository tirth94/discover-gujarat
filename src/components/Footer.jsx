const footerSections = {
  Explore: [
    { label: "Home",          page: "home" },
    { label: "Sacred Temples",page: "temples" },
    { label: "Golden Beaches",page: "beaches" },
    { label: "Wildlife & Forest", page: "forest" },
    { label: "Rich Heritage", page: "heritage" },
    { label: "Personalities", page: "personalities" },
  ],
  Destinations: [
    { label: "Ahmedabad",       page: "heritage" },
    { label: "Somnath",         page: "temples" },
    { label: "Gir Forest",      page: "forest" },
    { label: "Mandvi Beach",    page: "beaches" },
    { label: "Dholavira",       page: "heritage" },
    { label: "Rann of Kutch",   page: "home" },
  ],
  Travel: [
    { label: "Best Time to Visit", page: "home" },
    { label: "How to Reach",       page: "home" },
    { label: "Local Cuisine",      page: "home" },
    { label: "Navratri Festival",  page: "home" },
    { label: "Rann Utsav",         page: "home" },
    { label: "Accommodation",      page: "home" },
  ],
};

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  const go = (page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="site-footer"
      className="relative border-t border-[#C5A880]/10 overflow-hidden"
      aria-label="Site footer"
    >
      {/* Gradient atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#800020]/4 to-[#0A050720] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[#C5A880]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* ── Top Grid ── */}
        <div className="flex flex-col lg:flex-row gap-10 mb-14 justify-between">
          {/* Brand Column */}
          <div className="w-full lg:w-2/5">
            <button
              onClick={() => go("home")}
              className="flex items-center gap-3 group mb-6 cursor-pointer focus:outline-none"
              aria-label="Gujarat Tourism Home"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#800020] to-[#C5A880] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl" style={{ fontFamily: "Playfair Display, serif" }}>G</span>
              </div>
              <div>
                <div className="text-gold-shimmer text-xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>Gujarat Tourism</div>
                <div className="text-white/35 text-xs tracking-[0.22em] uppercase mt-0.5" style={{ fontFamily: "DM Mono, monospace" }}>The Land of Legends</div>
              </div>
            </button>

            <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-sm font-light">
              Discover the vibrant tapestry of Gujarat — where ancient heritage meets stunning 
              landscapes, sacred temples, pristine beaches, and magnificent wildlife.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-[#C5A880] hover:border-[#C5A880]/30 hover:bg-[#C5A880]/8 transition-all duration-300 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h4
                  className="text-[#C5A880] font-semibold text-xs tracking-[0.14em] uppercase mb-5"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  {title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => go(link.page)}
                        className="text-white/40 hover:text-[#C5A880] text-sm transition-all duration-200 hover:translate-x-1 inline-flex text-left items-center gap-1 group focus:outline-none font-light"
                      >
                        <span className="opacity-0 group-hover:opacity-100 text-[#C5A880] text-xs transition-opacity duration-200">›</span>
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Contact / Quick Support Strip ── */}
        <div className="relative bg-white/[0.02] border border-white/6 rounded-2xl p-6 md:p-8 mb-10 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#800020] via-[#C5A880] to-[#008080]" />
          <div>
            <h4 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
              Need Help Planning Your Trip?
            </h4>
            <p className="text-white/35 text-sm font-light">Contact our tourism experts for personalized guidance.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C5A880]/40 rounded-xl px-5 py-3 text-sm text-white transition-colors font-light group focus:outline-none">
              <span className="text-[#C5A880] group-hover:scale-110 transition-transform">📞</span>
              Toll Free: 1800 200 5080
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#C5A880] hover:bg-[#D4B68A] text-[#120B0C] rounded-xl px-5 py-3 text-sm font-bold transition-colors focus:outline-none shadow-lg">
              <span className="text-[#120B0C]">✉️</span>
              Email Support
            </button>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
          <p className="text-white/25 text-xs font-light" style={{ fontFamily: "DM Mono, monospace" }}>
            © {year} Gujarat Tourism. All rights reserved. | Crafted with ❤️ for Incredible India
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <a key={item} href="#" className="text-white/25 hover:text-[#C5A880] text-xs transition-colors duration-200 font-light">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
