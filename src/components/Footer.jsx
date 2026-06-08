import { Link } from "react-router-dom";

const footerSections = {
  Explore: [
    { label: "Home",          path: "/" },
    { label: "Sacred Temples",path: "/temples" },
    { label: "Golden Beaches",path: "/beaches" },
    { label: "Wildlife & Forest", path: "/forest" },
    { label: "Rich Heritage", path: "/heritage" },
    { label: "Personalities", path: "/personalities" },
  ],
  Destinations: [
    { label: "Ahmedabad",       path: "/heritage" },
    { label: "Somnath",         path: "/temples" },
    { label: "Gir Forest",      path: "/forest" },
    { label: "Mandvi Beach",    path: "/beaches" },
    { label: "Dholavira",       path: "/heritage" },
    { label: "Rann of Kutch",   path: "/" },
  ],
  Travel: [
    { label: "Best Time to Visit", path: "/when-to-visit" },
    { label: "How to Reach",       path: "/when-to-visit" },
    { label: "Local Cuisine",      path: "/" },
    { label: "Navratri Festival",  path: "/" },
    { label: "Rann Utsav",         path: "/" },
    { label: "Accommodation",      path: "/" },
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

export default function Footer() {
  const year = new Date().getFullYear();

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
            <Link
              to="/"
              className="flex items-center gap-3 group mb-6 focus:outline-none"
              aria-label="Gujarat Tourism Home"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#800020] to-[#C5A880] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl" style={{ fontFamily: "Playfair Display, serif" }}>G</span>
              </div>
              <div>
                <div className="text-gold-shimmer text-xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>Gujarat Tourism</div>
                <div className="text-white/35 text-xs tracking-[0.22em] uppercase mt-0.5" style={{ fontFamily: "DM Mono, monospace" }}>The Land of Legends</div>
              </div>
            </Link>

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
                      <Link
                        to={link.path}
                        className="text-white/40 hover:text-[#C5A880] text-sm transition-all duration-200 hover:translate-x-1 inline-flex text-left items-center gap-1 group focus:outline-none font-light"
                      >
                        <span className="opacity-0 group-hover:opacity-100 text-[#C5A880] text-xs transition-opacity duration-200">›</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Feedback & Improvement Hub ── */}
        <div className="relative bg-[#150A0C] border-t border-white/5 rounded-2xl p-6 md:p-8 mb-10 overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent opacity-30" />
          
          <div className="max-w-md">
            <h4 className="text-[#C5A880] font-bold text-xl md:text-2xl mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              Help Us Refine The Journey
            </h4>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Spotted a data bug? Want to suggest an update or add a new cultural spot? Connect directly with our team to improve the experience.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 w-full lg:w-auto">
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/918980238802" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex-1 bg-[#1C1113] border border-white/5 p-5 rounded-2xl transition-all duration-300 hover:border-[#C5A880]/30 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(197,168,128,0.1)] focus:outline-none flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.082 19.165c-1.385.001-2.744-.359-3.922-1.04l-.282-.162-2.918.765.783-2.843-.177-.282c-.742-1.186-1.134-2.553-1.136-3.955.002-4.105 3.341-7.441 7.452-7.443 1.99.001 3.861.777 5.268 2.185 1.407 1.407 2.183 3.279 2.182 5.267-.002 4.106-3.341 7.443-7.448 7.445z" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm">Message for Quick Edits</span>
              </div>
              <div className="text-white/70 font-mono text-sm mt-1 group-hover:text-[#C5A880] transition-colors">+91 8980238802</div>
            </a>
            
            {/* Email Card */}
            <a 
              href="mailto:tirth.rathod94@gmail.com"
              className="group flex-1 bg-[#1C1113] border border-white/5 p-5 rounded-2xl transition-all duration-300 hover:border-[#C5A880]/30 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(197,168,128,0.1)] focus:outline-none flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm">Official Improvements Desk</span>
              </div>
              <div className="text-white/70 font-mono text-sm mt-1 group-hover:text-[#C5A880] transition-colors break-all">tirth.rathod94@gmail.com</div>
            </a>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <p className="text-white/25 text-xs font-light" style={{ fontFamily: "DM Mono, monospace" }}>
              © {year} Gujarat Tourism. All rights reserved.
            </p>
            <p className="text-white/25 text-xs font-light" style={{ fontFamily: "DM Mono, monospace" }}>
              Crafted with ❤️ by M-Three Pixel for Incredible India
            </p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
            {[
              { label: "About Us", path: "/about-us" },
              { label: "Contact Us", path: "/contact-us" },
              { label: "Privacy Policy", path: "/privacy-policy" },
              { label: "Terms & Conditions", path: "/terms-and-conditions" },
              { label: "Disclaimer", path: "/disclaimer" },
            ].map((item) => (
              <Link 
                key={item.label} 
                to={item.path} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/25 hover:text-[#C5A880] text-xs transition-colors duration-200 font-light whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
