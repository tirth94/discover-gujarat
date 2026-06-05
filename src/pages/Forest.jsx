/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FOREST PAGE — Gujarat Tourism
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import React, { useState, useEffect, useRef } from "react";

import { wildlife, conservationFacts, tabs, tabMap } from "../data/forestData";

/* ── Wildlife Card ── */
function WildlifeCard({ animal }) {
  return (
    <div
      id={`wildlife-card-${animal.id}`}
      className={`ag-glass ag-hover-card overflow-hidden group flex flex-col h-full bg-gradient-to-b ${animal.accentFrom} to-transparent`}
    >
      <div className="w-full h-48 relative overflow-hidden">
        <img 
          src={animal.image} 
          alt={animal.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1012] via-[#1A1012]/40 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 z-10 bg-gradient-to-r from-green-900 via-[#C5A880] to-green-900" />
      </div>

      <div className="p-6 flex flex-col flex-1 relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-4xl w-12 flex-shrink-0 text-center group-hover:scale-125 transition-transform duration-500">
            {animal.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {animal.tags.map((tag) => (
                <span key={tag} className={animal.tagClass}>{tag}</span>
              ))}
            </div>
            <h3
              className="text-white font-bold text-lg leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {animal.name}
            </h3>
            <p className="text-[#C5A880]/60 text-xs flex items-center gap-1.5 mt-1">
              <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {animal.zone}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-[#C5A880] font-bold text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
              {animal.rating}
            </div>
            <div className="stars text-xs">★★★★★</div>
          </div>
        </div>

        <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1 font-light">{animal.desc}</p>

        {/* Key Species */}
        <div className="mb-5">
          <h4
            className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            Key Species
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {animal.animals.map((a) => (
              <span
                key={a}
                className="text-xs bg-green-900/20 border border-green-800/30 text-green-300 px-2.5 py-0.5 rounded-full font-light"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Safari Info */}
        <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06] text-xs">
          <div className="flex justify-between gap-2">
            <span className="text-white/25" style={{ fontFamily: "DM Mono, monospace" }}>SAFARI</span>
            <span className="text-white/55 text-right font-light">{animal.safariTimes}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/25" style={{ fontFamily: "DM Mono, monospace" }}>BEST TIME</span>
            <span className="text-white/55 text-right font-light">{animal.bestTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/25" style={{ fontFamily: "DM Mono, monospace" }}>AREA</span>
            <span className="text-[#C5A880] font-medium">{animal.area}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Reveal Animation Component ── */
function Reveal({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FOREST PAGE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Forest() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all"
    ? wildlife
    : wildlife.filter((w) => {
        const match = tabMap[activeTab];
        return match ? match.includes(w.type) : false;
      });

  return (
    <div id="forest-page" className="page-enter" style={{ background: "#1E0F12" }}>

      {/* ── IMMERSIVE HERO ── */}
      <section
        id="forest-hero"
        className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden"
        aria-label="Forest hero"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/gujarat_forest.png"
            alt="Gujarat Wildlife"
            className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_infinite_alternate]"
            style={{ filter: "brightness(0.42) sepia(0.15)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F12] via-[#1E0F12]/20 to-[#1E0F12]/55" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(10,50,10,0.45) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center relative w-full max-w-5xl mx-auto">
            <span
              className="text-green-400 text-xs sm:text-sm font-mono uppercase tracking-[0.5em] mb-4 block drop-shadow-md"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              Wildlife Gujarat
            </span>

            <div className="relative w-full flex justify-center items-center py-10 md:py-16">
              {/* Background ghost text */}
              <div
                className="text-[22vw] md:text-[17rem] font-black leading-none uppercase text-transparent opacity-10 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center"
                style={{
                  WebkitTextStroke: "2px #6dff6d",
                  fontFamily: "Playfair Display, serif",
                  letterSpacing: "0.05em",
                }}
              >
                WILD
              </div>
              <h1
                className="text-5xl sm:text-[7vw] md:text-[5.5rem] font-bold text-white leading-[1.1] relative z-10 text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Forests &amp;{" "}
                <span className="italic text-gold-shimmer font-light">Wildlife</span>
              </h1>
            </div>

            <p
              className="text-white/55 text-xs sm:text-sm font-light tracking-widest mt-2 md:mt-4 max-w-xl mx-auto uppercase text-center"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              Asiatic Lions · Flamingo Wetlands · Marine Sanctuaries
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-bounce">
          <span className="text-white/30 text-[10px] font-mono uppercase tracking-[0.2em]">Scroll to Discover</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.15); }
        }
      `}</style>

      {/* ── CONSERVATION FACTS ── */}
      <section
        id="forest-conservation"
        className="py-14 max-w-7xl mx-auto px-6"
        aria-label="Conservation facts"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {conservationFacts.map((f) => (
            <div key={f.fact} className="ag-glass p-5 flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">{f.icon}</span>
              <p className="text-white/50 text-sm leading-relaxed font-light">{f.fact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section
        id="forest-filter-tabs"
        className="pb-6 max-w-7xl mx-auto px-6"
        aria-label="Filter sanctuaries"
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              id={`forest-tab-${tab}`}
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 capitalize cursor-pointer focus:outline-none ${
                activeTab === tab
                  ? "bg-[#C5A880] text-[#1E0F12] shadow-lg shadow-[#C5A880]/20 font-bold"
                  : "ag-glass text-white/50 hover:text-white border-white/10"
              }`}
            >
              {tab === "all" ? "All Sanctuaries" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* ── WILDLIFE GRID ── */}
      <section
        id="forest-grid-section"
        className="pb-24 max-w-7xl mx-auto px-6"
        aria-label="Wildlife listings"
      >
        {/* Unified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
          {filtered.map((animal, index) => (
            <Reveal key={animal.id} delay={(index % 3) * 100} className="h-full">
              <WildlifeCard animal={animal} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SAFARI TIPS ── */}
      <section
        id="forest-safari-tips"
        className="pb-24 max-w-7xl mx-auto px-6"
        aria-label="Safari etiquette"
      >
        <div className="relative ag-glass p-8 bg-gradient-to-br from-green-900/15 to-[#C5A880]/4">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-800 to-[#C5A880]" />
          <h3
            className="text-[#C5A880] font-bold text-2xl mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            🌿 Safari Etiquette & Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🤫", tip: "Maintain silence — sudden noise scares animals away" },
              { icon: "👕", tip: "Wear earth-toned, neutral clothing (avoid bright colours)" },
              { icon: "📵", tip: "Keep mobile phones on silent mode during safari" },
              { icon: "🚫", tip: "Never feed, touch or approach wild animals" },
              { icon: "⏰", tip: "Arrive early — dawn safaris yield the best sightings" },
              { icon: "💧", tip: "Carry water — but avoid single-use plastic in reserves" },
            ].map((t) => (
              <div key={t.tip} className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <p className="text-white/50 text-sm leading-relaxed font-light">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
