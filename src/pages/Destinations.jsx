/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DESTINATIONS PAGE — Gujarat Tourism
   Elite Travel Directory — 2 Column Extended Cards
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { destinationsData, destinationStats } from "../data/destinationsData";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   REVEAL ANIMATION
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function Reveal({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.25,1,0.5,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const categoryMeta = {
  HERITAGE: { color: "#C5A880", glow: "rgba(197,168,128,0.18)" },
  DESERT:   { color: "#D4A853", glow: "rgba(212,168,83,0.18)"  },
  WILDLIFE: { color: "#5DBB63", glow: "rgba(93,187,99,0.18)"   },
  URBAN:    { color: "#7B9EC8", glow: "rgba(123,158,200,0.18)" },
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DESTINATION CARD (Personalities Style)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function DestinationCard({ dest, isHovered, onHover, onLeave, onOpen }) {
  const meta = categoryMeta[dest.category] ?? { color: "#C5A880", glow: "rgba(197,168,128,0.15)" };

  return (
    <div
      id={`dest-card-${dest.id}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative bg-[#1A1012]/80 border border-white/[0.06] rounded-2xl p-5 flex flex-col transition-all duration-500 shadow-lg min-h-[280px] h-full ${
        isHovered ? "border-[#C5A880]/20" : ""
      }`}
      style={{ zIndex: isHovered ? 20 : 1 }}
    >
      {/* Card image */}
      <div className="w-full h-36 rounded-xl overflow-hidden relative mb-4 bg-[#120B0C] border border-white/[0.04]">
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover object-center opacity-65 transition-all duration-500"
          style={{ filter: "sepia(20%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1012] to-transparent" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <span
            className="text-[9px] tracking-widest uppercase block mb-1"
            style={{ color: meta.color, fontFamily: "DM Mono, monospace" }}
          >
            {dest.tag}
          </span>
          <h3
            className="text-xl font-bold text-[#E2D4C9] tracking-wide leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {dest.name}
          </h3>
        </div>
        <div className="flex items-center justify-between mt-4 border-t border-white/[0.05] pt-3">
          <span
            className="text-[10px] text-white/35"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            📍 {dest.zone}
          </span>
          <span
            className="text-[10px] font-medium"
            style={{ color: meta.color, fontFamily: "DM Mono, monospace" }}
          >
            {dest.category}
          </span>
        </div>

        {/* Mobile-only: direct open button */}
        <button
          id={`dest-read-mobile-${dest.id}`}
          onClick={() => onOpen(dest)}
          className="sm:hidden w-full mt-3 py-2.5 rounded-xl text-[#E2D4C9] font-bold text-xs tracking-wide cursor-pointer focus:outline-none transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #4A1521, #800020)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontFamily: "Playfair Display, serif",
          }}
        >
          Read Details ➔
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
            <span className="uppercase tracking-widest" style={{ color: meta.color }}>{dest.category}</span>
            <span className="text-white/35">{dest.zone}</span>
          </div>

          {/* Name */}
          <h4
            className="text-2xl font-bold text-[#E2D4C9] tracking-wide mb-3 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {dest.name}
          </h4>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span
              className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded border"
              style={{
                color: meta.color,
                background: `${meta.color}12`,
                borderColor: `${meta.color}20`,
                fontFamily: "DM Mono, monospace",
              }}
            >
              {dest.tag}
            </span>
          </div>

          {/* Short desc */}
          <p className="text-white/60 text-sm leading-relaxed font-light line-clamp-3">{dest.description}</p>
        </div>

        {/* CTA */}
        <button
          id={`dest-read-more-${dest.id}`}
          onClick={() => onOpen(dest)}
          className="w-full mt-4 py-3 rounded-xl text-[#E2D4C9] font-bold text-xs tracking-wide cursor-pointer focus:outline-none shadow-xl transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #4A1521, #800020)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontFamily: "Playfair Display, serif",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #5C1E2D, #9A0025)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #4A1521, #800020)"; }}
        >
          Read Full Guide ➔
        </button>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DESTINATIONS PAGE ROOT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Destinations() {
  const filtered = destinationsData;
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [selectedDest, setSelectedDest] = useState(null);

  /* ── Body scroll lock when modal is open ── */
  useEffect(() => {
    document.body.style.overflow = selectedDest ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedDest]);

  /* ── Escape key closes modal ── */
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setSelectedDest(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const openModal = useCallback((dest) => {
    setSelectedDest(dest);
    setHoveredCardId(null);
  }, []);

  return (
    <div
      id="destinations-page"
      className="page-enter min-h-screen text-[#E2D4C9] flex flex-col overflow-x-hidden"
      style={{ background: "#1E0F12" }}
    >
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          IMMERSIVE HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="destinations-hero"
        className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden"
        aria-label="Destinations hero"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1603251483777-f046b0fa3f6f?auto=format&fit=crop&w=1400&q=80"
            alt="Gujarat Destinations"
            className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_infinite_alternate]"
            style={{ filter: "brightness(0.40) sepia(0.08)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F12] via-[#1E0F12]/25 to-[#1E0F12]/55" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(74,21,33,0.30) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center relative w-full max-w-5xl mx-auto">
            <span
              className="text-[#C5A880] text-xs sm:text-sm font-mono uppercase tracking-[0.5em] mb-4 block drop-shadow-md"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              Gujarat Tourism
            </span>
            <div className="relative w-full flex justify-center items-center py-10 md:py-16">
              <div
                className="text-[22vw] md:text-[16rem] font-black leading-none uppercase text-transparent opacity-[0.07] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center"
                style={{
                  WebkitTextStroke: "2px #C5A880",
                  fontFamily: "Playfair Display, serif",
                  letterSpacing: "0.05em",
                }}
              >
                EXPLORE
              </div>
              <h1
                className="text-5xl sm:text-[7vw] md:text-[5.5rem] font-bold text-white leading-[1.1] relative z-10 text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Gujarat{" "}
                <span className="italic text-[#C5A880] font-light">Destinations</span>
              </h1>
            </div>
            <p
              className="text-white/50 text-xs sm:text-sm font-light tracking-widest mt-2 md:mt-4 max-w-xl mx-auto uppercase text-center"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              Heritage Cities · Desert Wonders · Wildlife Trails · Urban Marvels
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-bounce">
          <span
            className="text-white/30 text-[10px] font-mono uppercase tracking-[0.2em]"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            Scroll to Discover
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

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

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STATS BAR
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-0">
        <Reveal delay={0}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {destinationStats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#150A0C] border border-white/5 rounded-2xl p-6 text-center hover:border-[#C5A880]/20 transition-all duration-300"
              >
                <div
                  className="text-3xl md:text-4xl font-bold text-[#C5A880] mb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/30 text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MAIN DIRECTORY
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <main
        id="destinations-directory"
        className="max-w-7xl mx-auto px-6 pb-24 w-full"
        role="main"
      >
        <Reveal delay={0}>
          <div className="flex items-center gap-4 mb-8">
            <div
              className="h-px w-12"
              style={{ background: "linear-gradient(90deg, transparent, #C5A880)" }}
            />
            <span
              className="text-[#C5A880] text-[10px] tracking-[0.4em] uppercase"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              ✦ Major Destinations
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mb-12">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Discover the{" "}
              <span className="italic text-[#C5A880] font-light">Regions</span>
            </h2>
            <p className="text-white/40 text-sm md:text-base font-light max-w-2xl leading-relaxed">
              Explore the complete detailed guides to Gujarat's major regions right here. From ancient heritage cities to surreal desert landscapes, every story is laid out below.
            </p>
          </div>
        </Reveal>

        {/* ── GRID ── */}
        {filtered.length > 0 ? (
          <Reveal delay={120}>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((dest, index) => (
                <DestinationCard
                  key={dest.id}
                  dest={dest}
                  isHovered={hoveredCardId === dest.id}
                  onHover={() => setHoveredCardId(dest.id)}
                  onLeave={() => setHoveredCardId(null)}
                  onOpen={openModal}
                />
              ))}
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0}>
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="text-6xl mb-4 opacity-20">🗺</div>
              <p
                className="text-white/25 text-sm tracking-widest uppercase"
                style={{ fontFamily: "DM Mono, monospace" }}
              >
                No destinations available
              </p>
            </div>
          </Reveal>
        )}

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            FULL MAP CTA BANNER
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <Reveal delay={100} className="mt-24">
          <div
            className="relative overflow-hidden rounded-3xl border border-[#C5A880]/12 shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
            style={{
              background: "linear-gradient(135deg, #1A0C10 0%, #221015 50%, #1A0C10 100%)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #C5A880, transparent)" }}
            />
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(197,168,128,0.07) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(128,0,32,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
              <div className="max-w-lg text-center md:text-left">
                <span
                  className="text-[#C5A880] text-[10px] tracking-[0.4em] uppercase block mb-3"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  ✦ Complete Route Map
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Plan Your{" "}
                  <span className="italic text-[#C5A880] font-light">Journey</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  Gujarat spans 196,024 km² with 33 unique districts, each offering a completely different world to explore. From the salt flats of Kutch to the teak forests of Dangs — every route is an adventure.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 flex-shrink-0">
                {[
                  { label: "National Parks", value: "4" },
                  { label: "Bird Sanctuaries", value: "22" },
                  { label: "Pilgrimage Sites", value: "900+" },
                  { label: "Heritage Villages", value: "150+" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/3 border border-white/5 rounded-xl p-4 text-center hover:border-[#C5A880]/20 transition-all duration-300"
                  >
                    <div
                      className="text-2xl font-bold text-[#C5A880] mb-0.5"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {item.value}
                    </div>
                    <div
                      className="text-white/25 text-[9px] tracking-widest uppercase"
                      style={{ fontFamily: "DM Mono, monospace" }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </main>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          DETAIL MODAL — Heritage-style popup
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {selectedDest && createPortal(
        <div
          id="destinations-detail-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/60"
        >
          {/* Backdrop click to close */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedDest(null)} aria-hidden="true" />

          {/* Modal Panel */}
          <div
            className="relative z-10 w-full max-w-4xl bg-[#120B0C] rounded-[2rem] border border-[#C5A880]/20 shadow-[0_30px_70px_rgba(0,0,0,0.85)] flex flex-col md:flex-row overflow-hidden animate-fadeIn"
            style={{ maxHeight: "88vh" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDest(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 text-white/50 hover:text-[#C5A880] flex items-center justify-center border border-white/10 transition-all hover:border-[#C5A880]/30 cursor-pointer focus:outline-none"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* ── Left Image Panel ── */}
            <div className="w-full md:w-2/5 h-48 md:h-auto relative bg-[#1A1012]" style={{ minHeight: "250px" }}>
              <img
                src={selectedDest.image}
                alt={selectedDest.name}
                className="w-full h-full object-cover object-center opacity-60"
                style={{ filter: "sepia(20%) grayscale(10%)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#120B0C] to-transparent" />
              {/* Category badge */}
              <div className="absolute top-5 left-5">
                <span
                  className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-black/60"
                  style={{ 
                    color: categoryMeta[selectedDest.category]?.color || "#C5A880",
                    borderColor: `${categoryMeta[selectedDest.category]?.color || "#C5A880"}40`,
                    fontFamily: "DM Mono, monospace" 
                  }}
                >
                  {selectedDest.category}
                </span>
              </div>
            </div>

            {/* ── Right Detail Panel ── */}
            <div
              className="w-full md:w-3/5 p-8 md:p-10 flex flex-col overflow-y-auto no-scrollbar relative"
              style={{ maxHeight: "88vh" }}
            >
              <div className="relative z-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className="text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded border"
                    style={{
                      color: categoryMeta[selectedDest.category]?.color || "#C5A880",
                      background: `${categoryMeta[selectedDest.category]?.color || "#C5A880"}10`,
                      borderColor: `${categoryMeta[selectedDest.category]?.color || "#C5A880"}25`,
                      fontFamily: "DM Mono, monospace",
                    }}
                  >
                    {selectedDest.tag}
                  </span>
                </div>

                {/* Name */}
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {selectedDest.name}
                </h2>
                <p
                  className="text-sm font-semibold tracking-widest uppercase mb-5 font-mono"
                  style={{ color: categoryMeta[selectedDest.category]?.color || "#C5A880", fontFamily: "DM Mono, monospace" }}
                >
                  {selectedDest.zone}
                </p>

                {/* Meta */}
                <div
                  className="text-[11px] text-white/35 flex gap-5 border-b border-white/[0.06] pb-5 mb-5 flex-wrap"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  <span>📍 TOP SPOT: {selectedDest.popularSpot}</span>
                  <span>🗓 BEST TIME: {selectedDest.bestTime}</span>
                  <span>🚗 DISTANCE: {selectedDest.distance}</span>
                </div>

                {/* Full Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-light text-justify">
                   <span className="float-left text-4xl text-[#C5A880] font-bold leading-[0.8] pr-2 pt-1" style={{ fontFamily: "Playfair Display, serif" }}>
                     {selectedDest.description.charAt(0)}
                   </span>
                   {selectedDest.description.substring(1)}
                </p>

                {/* History */}
                <div className="mb-6">
                  <h4 className="text-[#C5A880] text-[10px] font-mono tracking-widest uppercase mb-3 border-b border-[#C5A880]/20 pb-2">
                    History
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    {selectedDest.history}
                  </p>
                </div>

                {/* Attractions */}
                <div className="mb-6">
                  <h4 className="text-[#C5A880] text-[10px] font-mono tracking-widest uppercase mb-3 border-b border-[#C5A880]/20 pb-2">
                    Key Attractions
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {selectedDest.attractions.map((attr, i) => (
                      <li key={i} className="bg-white/5 border border-white/5 p-3 rounded-xl">
                        <h5 className="text-white text-sm font-semibold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{attr.name}</h5>
                        <p className="text-white/60 text-xs leading-relaxed font-light">{attr.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-[#C5A880] text-[10px] font-mono tracking-widest uppercase mb-3 border-b border-[#C5A880]/20 pb-2">
                    Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDest.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 font-mono">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tips Block */}
                <div
                  className="rounded-xl p-5 mb-2"
                  style={{ background: "#1A1012", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span
                    className="text-[9px] tracking-widest uppercase block mb-2"
                    style={{ color: `${categoryMeta[selectedDest.category]?.color || "#C5A880"}80`, fontFamily: "DM Mono, monospace" }}
                  >
                    TRAVEL TIP 💡
                  </span>
                  <p
                    className="italic text-sm leading-relaxed"
                    style={{ fontFamily: "Playfair Display, serif", color: "rgba(226,212,201,0.9)" }}
                  >
                    "{selectedDest.tips}"
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}
