/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PERSONALITIES PAGE — Gujarat Tourism
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DATA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import { personalities } from "../data/personalitiesData";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PERSONALITIES PAGE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Personalities() {
  const [searchQuery,    setSearchQuery]    = useState("");
  const [hoveredCardId,  setHoveredCardId]  = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);

  /* ── Body scroll lock when modal is open ── */
  useEffect(() => {
    document.body.style.overflow = selectedPerson ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedPerson]);

  /* ── Escape key closes modal ── */
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setSelectedPerson(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const openModal = useCallback((person) => {
    setSelectedPerson(person);
    setHoveredCardId(null);
  }, []);

  const filtered = personalities.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.birthplace.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      id="personalities-page"
      className="page-enter min-h-screen text-[#E2D4C9] flex flex-col overflow-x-hidden"
      style={{ background: "#120B0C" }}
    >
      {/* ── IMMERSIVE HERO WITH BACKGROUND IMAGE ── */}
      <section
        id="personalities-hero"
        className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden"
        aria-label="Personalities hero"
      >
        {/* Background image with slow zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gujarat_hero.png"
            alt="Gujarat Personalities Background"
            className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_infinite_alternate]"
            style={{ filter: "brightness(0.38) sepia(0.3)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120B0C] via-[#120B0C]/30 to-[#120B0C]/70" />
          {/* Maroon tint overlay */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(74,21,33,0.45) 0%, transparent 70%)" }} />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center relative w-full max-w-5xl mx-auto">
            <span
              className="text-[#C5A880] text-xs sm:text-sm font-mono uppercase tracking-[0.5em] mb-4 ml-[0.5em] block drop-shadow-md"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              Biographical Gallery
            </span>

            <div className="relative w-full flex justify-center items-center py-10 md:py-16">
              {/* Background massive outlined text */}
              <div
                className="text-[20vw] md:text-[16rem] font-black leading-none uppercase text-transparent opacity-15 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center"
                style={{
                  WebkitTextStroke: "2px #C5A880",
                  fontFamily: "Playfair Display, serif",
                  letterSpacing: "0.05em",
                }}
              >
                ICONS
              </div>

              {/* Foreground elegant heading */}
              <h1
                className="text-5xl sm:text-[7vw] md:text-[5.5rem] font-bold text-white leading-[1.1] relative z-10 text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Legends of{" "}
                <span className="italic text-[#C5A880] font-light">Gujarat</span>
              </h1>
            </div>

            <p
              className="text-white/55 text-xs sm:text-sm font-light tracking-widest mt-2 md:mt-4 max-w-xl mx-auto uppercase text-center"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              Extraordinary Minds · Visionary Souls · Timeless Legacy
            </p>
          </div>
        </div>
      </section>

      {/* ── SEARCH BAR ── */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#120B0C]/90 backdrop-blur-md border-y border-white/5 py-4 mb-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-xl mx-auto px-6 relative">
          <input
            id="personalities-search"
            type="search"
            placeholder="Search by name, role or origin..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search personalities"
            style={{ fontFamily: "Playfair Display, serif" }}
            className="w-full bg-[#1A1012] border border-white/10 rounded-2xl pl-12 pr-6 py-3.5 text-[#E2D4C9] placeholder-white/25 focus:outline-none focus:border-[#C5A880]/40 transition-all duration-300 text-sm tracking-wide"
          />
          <svg className="absolute left-10 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* ── CARDS GRID ── */}
      <section
        id="personalities-cards"
        className="flex-1 max-w-6xl mx-auto w-full px-5 md:px-8 pb-24 relative z-10"
        aria-label="Personality cards"
      >
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-white/30">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-sm font-light">No results found for "{searchQuery}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((person) => (
              <PersonCard
                key={person.id}
                person={person}
                isHovered={hoveredCardId === person.id}
                onHover={() => setHoveredCardId(person.id)}
                onLeave={() => setHoveredCardId(null)}
                onOpen={openModal}
              />
            ))}
          </div>
        )}
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          DETAIL MODAL — Heritage-style popup
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {selectedPerson && createPortal(
        <div
          id="personalities-detail-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-person-name"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/60"
        >
          {/* Backdrop click to close */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedPerson(null)} aria-hidden="true" />

          {/* Modal Panel */}
          <div
            className="relative z-10 w-full max-w-2xl bg-[#120B0C] rounded-[2rem] border border-[#C5A880]/20 shadow-[0_30px_70px_rgba(0,0,0,0.85)] flex flex-col md:flex-row overflow-hidden animate-fadeIn"
            style={{ maxHeight: "88vh" }}
          >
            {/* Close Button */}
            <button
              id="modal-close-btn"
              onClick={() => setSelectedPerson(null)}
              aria-label="Close detail panel"
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 text-white/50 hover:text-[#C5A880] flex items-center justify-center border border-white/10 transition-all hover:border-[#C5A880]/30 cursor-pointer focus:outline-none"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* ── Left Image Panel ── */}
            <div className="w-full md:w-2/5 h-48 md:h-auto relative bg-[#1A1012]" style={{ minHeight: "200px" }}>
              <img
                src={selectedPerson.image}
                alt={selectedPerson.name}
                className="w-full h-full object-cover object-center opacity-60"
                style={{ filter: "sepia(20%) grayscale(10%)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#120B0C] to-transparent" />
              {/* Era badge */}
              <div className="absolute top-5 left-5">
                <span
                  className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#C5A880]/25 bg-black/60 text-[#C5A880]"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  {selectedPerson.era}
                </span>
              </div>
            </div>

            {/* ── Right Detail Panel ── */}
            <div
              id="modal-content-scroll"
              className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-between overflow-y-auto no-scrollbar relative"
              style={{ maxHeight: "88vh" }}
            >
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A880]/5 blur-[60px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedPerson.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded border"
                      style={{
                        color: selectedPerson.tagColor,
                        background: `${selectedPerson.tagColor}10`,
                        borderColor: `${selectedPerson.tagColor}25`,
                        fontFamily: "DM Mono, monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <h2
                  id="modal-person-name"
                  className="text-3xl md:text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {selectedPerson.name}
                </h2>
                <p
                  className="text-sm font-semibold tracking-widest uppercase mb-5 font-mono"
                  style={{ color: selectedPerson.tagColor, fontFamily: "DM Mono, monospace" }}
                >
                  {selectedPerson.role}
                </p>

                {/* Meta */}
                <div
                  className="text-[11px] text-white/35 flex gap-5 border-b border-white/[0.06] pb-5 mb-5 flex-wrap"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  <span>📅 ERA: {selectedPerson.lifespan}</span>
                  <span>📍 ORIGIN: {selectedPerson.birthplace}</span>
                </div>

                {/* Full Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
                  {selectedPerson.desc}
                </p>

                {/* Vision Block */}
                <div
                  className="rounded-xl p-5 mb-6"
                  style={{ background: "#1A1012", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span
                    className="text-[9px] tracking-widest uppercase block mb-2"
                    style={{ color: `${selectedPerson.tagColor}80`, fontFamily: "DM Mono, monospace" }}
                  >
                    IDEOLOGICAL VISION
                  </span>
                  <p
                    className="italic text-sm leading-relaxed"
                    style={{ fontFamily: "Playfair Display, serif", color: "rgba(226,212,201,0.9)" }}
                  >
                    "{selectedPerson.vision}"
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="pt-5 border-t border-white/[0.06] relative z-10">
                <h4
                  className="text-[#C5A880] text-[10px] font-mono tracking-widest uppercase mb-4 border-b border-[#C5A880]/20 pb-2"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  Chronicles of Historical Impact
                </h4>
                <ul className="flex flex-col gap-3">
                  {selectedPerson.achievements.map((ach, i) => (
                    <li
                      key={i}
                      className="text-white/60 text-sm flex items-start gap-3 leading-relaxed font-light"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880] flex-shrink-0 mt-0.5">
                        <span className="text-[10px]">◆</span>
                      </div>
                      {ach}
                    </li>
                  ))}
                </ul>

                {/* Bottom decorative bar */}
                <div
                  className="mt-8 h-px rounded-full"
                  style={{ background: `linear-gradient(90deg, ${selectedPerson.tagColor}40, transparent)` }}
                />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);     }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PERSON CARD — Desktop hover preview + Mobile direct tap
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function PersonCard({ person, isHovered, onHover, onLeave, onOpen }) {
  return (
    <div
      id={`personality-card-${person.id}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative bg-[#1A1012]/80 border border-white/[0.06] rounded-2xl p-5 flex flex-col transition-all duration-500 shadow-lg min-h-[280px] ${
        isHovered ? "border-[#C5A880]/20" : ""
      }`}
      style={{ zIndex: isHovered ? 20 : 1 }}
    >
      {/* Card image */}
      <div className="w-full h-36 rounded-xl overflow-hidden relative mb-4 bg-[#120B0C] border border-white/[0.04]">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover object-top opacity-65 transition-all duration-500"
          style={{ filter: "sepia(20%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1012] to-transparent" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <span
            className="text-[9px] tracking-widest uppercase block mb-1"
            style={{ color: "#C5A880", fontFamily: "DM Mono, monospace" }}
          >
            {person.role}
          </span>
          <h3
            className="text-xl font-bold text-[#E2D4C9] tracking-wide leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {person.name}
          </h3>
        </div>
        <div className="flex items-center justify-between mt-4 border-t border-white/[0.05] pt-3">
          <span
            className="text-[10px] text-white/35"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            📍 {person.birthplace.split(",")[0]}
          </span>
          <span
            className="text-[10px] text-[#C5A880] font-medium"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            {person.lifespan}
          </span>
        </div>

        {/* Mobile-only: direct open button */}
        <button
          id={`personality-read-mobile-${person.id}`}
          onClick={() => onOpen(person)}
          className="sm:hidden w-full mt-3 py-2.5 rounded-xl text-[#E2D4C9] font-bold text-xs tracking-wide cursor-pointer focus:outline-none transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #4A1521, #800020)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontFamily: "Playfair Display, serif",
          }}
        >
          Read Chronicle ➔
        </button>
      </div>

      {/* ── Hover Preview Overlay (Desktop only) ── */}
      <div
        className={`absolute inset-x-[-14px] top-[-18px] rounded-2xl p-6 flex-col justify-between transition-all duration-500 ease-out transform hidden sm:flex ${
          isHovered
            ? "opacity-100 scale-[1.04] pointer-events-auto translate-y-0 shadow-[0_30px_70px_rgba(0,0,0,0.85)]"
            : "opacity-0 scale-95 pointer-events-none translate-y-3"
        }`}
        style={{
          background: "linear-gradient(135deg, #221619, #2D1015)",
          border: "2px solid rgba(197,168,128,0.25)",
          zIndex: 40,
          minHeight: "calc(100% + 32px)",
        }}
      >
        <div>
          {/* Header */}
          <div
            className="flex justify-between items-center mb-2 text-[10px]"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            <span className="text-[#C5A880] uppercase tracking-widest">{person.role}</span>
            <span className="text-white/35">{person.lifespan}</span>
          </div>

          {/* Name */}
          <h4
            className="text-2xl font-bold text-[#E2D4C9] tracking-wide mb-3 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {person.name}
          </h4>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {person.tags.map((t) => (
              <span
                key={t}
                className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded border"
                style={{
                  color: person.tagColor,
                  background: `${person.tagColor}12`,
                  borderColor: `${person.tagColor}20`,
                  fontFamily: "DM Mono, monospace",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Short desc */}
          <p className="text-white/60 text-sm leading-relaxed font-light">{person.shortDesc}</p>
        </div>

        {/* CTA */}
        <button
          id={`personality-read-more-${person.id}`}
          onClick={() => onOpen(person)}
          className="w-full mt-4 py-3 rounded-xl text-[#E2D4C9] font-bold text-xs tracking-wide cursor-pointer focus:outline-none shadow-xl transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #4A1521, #800020)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontFamily: "Playfair Display, serif",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #5C1E2D, #9A0025)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #4A1521, #800020)"; }}
        >
          Read Full Chronicle ➔
        </button>
      </div>
    </div>
  );
}