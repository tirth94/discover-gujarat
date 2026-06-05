/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DESTINATIONS PAGE — Gujarat Tourism
   Elite Travel Directory — 2 Column Extended Cards
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import { useState, useEffect, useRef } from "react";
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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CATEGORY BADGE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const categoryMeta = {
  HERITAGE: { color: "#C5A880", glow: "rgba(197,168,128,0.18)" },
  DESERT:   { color: "#D4A853", glow: "rgba(212,168,83,0.18)"  },
  WILDLIFE: { color: "#5DBB63", glow: "rgba(93,187,99,0.18)"   },
  URBAN:    { color: "#7B9EC8", glow: "rgba(123,158,200,0.18)" },
};

function CategoryBadge({ category }) {
  const meta = categoryMeta[category] ?? { color: "#C5A880", glow: "rgba(197,168,128,0.15)" };
  return (
    <span
      className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border backdrop-blur-md"
      style={{
        color: meta.color,
        background: "rgba(10,4,6,0.6)",
        borderColor: `${meta.color}50`,
        fontFamily: "DM Mono, monospace",
      }}
    >
      {category}
    </span>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DESTINATION CARD (EXTENDED - NO IMAGE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function DestinationCard({ dest, index }) {
  const meta = categoryMeta[dest.category] ?? { color: "#C5A880", glow: "rgba(197,168,128,0.15)" };

  return (
    <Reveal delay={index * 100}>
      <article
        id={`dest-card-${dest.id}`}
        className="bg-[#150A0C] border border-white/5 rounded-3xl flex flex-col transition-all duration-500 hover:border-[#C5A880]/30 shadow-2xl overflow-hidden group h-full"
      >
        {/* Text Header (Replaced Image) */}
        <div className="relative w-full p-5 md:p-6 bg-gradient-to-br from-[#1A0C10] to-[#150A0C] border-b border-white/5 flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <CategoryBadge category={dest.category} />
            <div
              className="px-3 py-1 rounded-full text-[10px] tracking-widest uppercase"
              style={{
                background: "rgba(10,4,6,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.6)",
                fontFamily: "DM Mono, monospace",
              }}
            >
              {dest.zone}
            </div>
          </div>
          <div className="mt-2">
             <span
              className="text-[10px] tracking-widest uppercase mb-1 block"
              style={{ color: meta.color, fontFamily: "DM Mono, monospace" }}
            >
              ✦ {dest.tag}
            </span>
            <h3
              className="text-white text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {dest.name}
            </h3>
          </div>
        </div>

        {/* Card Body (All Content - Reduced margins/padding, Bigger Text) */}
        <div className="flex flex-col flex-1 p-5 md:p-6 gap-6">
          
          {/* Overview */}
          <div>
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-light text-justify">
               <span className="float-left text-5xl text-[#C5A880] font-bold leading-[0.8] pr-3 pt-2" style={{ fontFamily: "Playfair Display, serif" }}>
                 {dest.description.charAt(0)}
               </span>
               {dest.description.substring(1)}
            </p>
          </div>

          {/* Highlights & Top Spot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="flex items-start gap-3 p-4 rounded-2xl"
              style={{ background: meta.glow, border: `1px solid ${meta.color}20` }}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">📍</span>
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase block mb-1 text-white/50" style={{ fontFamily: "DM Mono, monospace" }}>
                  Top Spot
                </span>
                <span className="text-white text-base md:text-lg font-medium" style={{ fontFamily: "Playfair Display, serif" }}>
                  {dest.popularSpot}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col justify-center bg-[#1A0C10] border border-white/5 p-4 rounded-2xl">
               <span className="text-[10px] tracking-[0.2em] uppercase block mb-2 text-white/40" style={{ fontFamily: "DM Mono, monospace" }}>
                  Highlights
                </span>
                <div className="flex flex-wrap gap-2">
                  {dest.highlights.slice(0, 3).map((h, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full tracking-wide bg-white/5 border border-white/10 text-white/70"
                      style={{ fontFamily: "DM Mono, monospace" }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5" />

          {/* History */}
          <div>
            <h4 className="text-2xl md:text-3xl text-[#C5A880] mb-3" style={{ fontFamily: "Playfair Display, serif" }}>History</h4>
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
              {dest.history}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5" />

          {/* Attractions */}
          <div>
            <h4 className="text-2xl md:text-3xl text-[#C5A880] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>Key Attractions</h4>
            <div className="grid grid-cols-1 gap-4">
               {dest.attractions.map((attr, i) => (
                 <div key={i} className="flex gap-4 items-start bg-gradient-to-r from-white/5 to-transparent border border-white/5 p-4 rounded-xl hover:border-[#C5A880]/20 transition-colors duration-300">
                    <span className="text-[#C5A880] font-black text-3xl opacity-40 font-serif">0{i+1}</span>
                    <div>
                      <h5 className="text-white text-lg font-semibold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{attr.name}</h5>
                      <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">{attr.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Spacer to push tips to bottom */}
          <div className="flex-1" />

          {/* Tips & Footer Meta */}
          <div className="bg-[#0A0507] border border-[#C5A880]/20 rounded-2xl p-5 relative overflow-hidden mt-2">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A880]/50 to-transparent" />
             <div className="flex flex-col gap-4">
                <div>
                   <span className="text-[#C5A880] text-xs tracking-[0.2em] uppercase block mb-2" style={{ fontFamily: "DM Mono, monospace" }}>Travel Tip 💡</span>
                   <p className="text-white/90 text-base md:text-lg italic font-light leading-relaxed">{dest.tips}</p>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                   <span className="text-white/50 text-[10px] md:text-xs tracking-widest uppercase" style={{ fontFamily: "DM Mono, monospace" }}>🗓 {dest.bestTime}</span>
                   <span className="text-[#C5A880] text-xs md:text-sm font-semibold" style={{ fontFamily: "DM Mono, monospace" }}>{dest.distance}</span>
                </div>
             </div>
          </div>

        </div>
      </article>
    </Reveal>
  );
}


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DESTINATIONS PAGE ROOT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Destinations() {
  const filtered = destinationsData;

  return (
    <div
      id="destinations-page"
      className="page-enter min-h-screen"
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
        className="max-w-7xl mx-auto px-6 pb-24"
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

        {/* ── DESKTOP GRID (sm+) ── */}
        {filtered.length > 0 ? (
          <>
            {/* 2 Cards in a Row Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {filtered.map((dest, index) => (
                <DestinationCard key={dest.id} dest={dest} index={index} />
              ))}
            </div>

            {/* ── MOBILE HORIZONTAL SNAP SLIDER ── */}
            <div className="md:hidden w-full relative mt-8">
              {/* Swipe Indicator */}
              <div className="flex items-center justify-between mb-4 px-2">
                 <div className="text-[#C5A880]/60 animate-[pulse_2s_infinite]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                 </div>
                 <span className="text-[#C5A880]/80 text-[10px] tracking-widest uppercase" style={{ fontFamily: "DM Mono, monospace" }}>
                    Swipe to explore
                 </span>
                 <div className="text-[#C5A880]/60 animate-[pulse_2s_infinite]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                 </div>
              </div>

              <div
                id="destinations-mobile-slider"
                className="flex overflow-x-auto snap-x snap-mandatory pb-6 w-full gap-4 no-scrollbar"
              >
                {filtered.map((dest, index) => {
                  return (
                    <div
                      key={dest.id}
                      className="w-[90vw] max-w-[400px] snap-center flex-shrink-0"
                    >
                       <DestinationCard dest={dest} index={index} />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
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
    </div>
  );
}
