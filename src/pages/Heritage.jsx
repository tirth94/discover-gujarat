import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { heritageSites, timeline, filters, livingTraditions } from "../data/heritageData";

/* ── Reveal Component ── */
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

export default function Heritage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeTraditionPopup, setActiveTraditionPopup] = useState(null);

  // Disable scroll when popup is open
  useEffect(() => {
    if (activeTraditionPopup) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [activeTraditionPopup]);

  const filterFn = (site) => {
    if (activeFilter === "all")     return true;
    if (activeFilter === "UNESCO")  return site.tags.includes("UNESCO");
    if (activeFilter === "Ancient") return ["Indus Valley City", "Harappan City", "Sun Temple"].includes(site.type);
    if (activeFilter === "Medieval") return ["Archaeological Park", "Walled City", "Stepwell"].includes(site.type);
    return true;
  };

  const filteredSites = heritageSites.filter(filterFn);

  return (
    <div id="heritage-page" className="page-enter bg-[#120B0C] min-h-screen">
      
      {/* ── IMMERSIVE HERO ── */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/gujarat_heritage.png" alt="Gujarat Heritage" className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_infinite_alternate]" style={{ filter: "brightness(0.5) sepia(0.2)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120B0C] via-transparent to-[#120B0C]/80" />
        </div>
        
        <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center">
          <Reveal>
            <div className="flex flex-col items-center relative w-full max-w-6xl mx-auto">
              <span className="text-[#C5A880] text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.5em] mb-4 md:mb-10 ml-[0.5em] block drop-shadow-md">
                Timeless Echoes
              </span>
              
              <div className="relative w-full flex justify-center items-center py-10 md:py-16">
                {/* Background massive outlined text */}
                <div 
                  className="text-[20vw] md:text-[16rem] font-black leading-none uppercase text-transparent opacity-20 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center"
                  style={{ 
                    WebkitTextStroke: "2px #C5A880", 
                    fontFamily: "Playfair Display, serif",
                    letterSpacing: "0.05em"
                  }}
                >
                  HERITAGE
                </div>
                
                {/* Foreground solid elegant text */}
                <h1 
                  className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]" 
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Timeless <span className="italic text-[#C5A880] font-light">Heritage</span>
                </h1>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-white/60 text-xs sm:text-sm md:text-base font-light tracking-widest mt-6 md:mt-10 max-w-xl mx-auto uppercase" style={{ fontFamily: "DM Mono, monospace" }}>
              5000 Years of Civilisation
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FILTER NAVIGATION (Sticky) ── */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#120B0C]/90 backdrop-blur-md border-y border-white/5 py-4 mb-16 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 font-mono ${
                activeFilter === f
                  ? "bg-[#C5A880] text-[#120B0C] font-bold shadow-[0_0_20px_rgba(197,168,128,0.4)]"
                  : "border border-[#C5A880]/30 text-[#C5A880] hover:bg-[#C5A880]/20"
              }`}
            >
              {f === "all" ? "All Exhibitions" : f}
            </button>
          ))}
        </div>
      </div>

      {/* ── EDITORIAL SITES LAYOUT ── */}
      <section className="max-w-7xl mx-auto px-6 pb-24 flex flex-col gap-24 lg:gap-32">
        {filteredSites.map((site, index) => {
          const isEven = index % 2 === 0;
          return (
            <Reveal key={site.id} delay={100}>
              <div id={`heritage-card-${site.id}`} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-0 relative`}>
                
                {/* Large Image Panel */}
                <div className="w-full lg:w-[65%] h-[40vh] sm:h-[50vh] lg:h-[70vh] relative rounded-3xl overflow-hidden shadow-2xl">
                  <img src={site.image} alt={site.name} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1012] to-transparent opacity-60" />
                  
                  {/* Decorative Era Tag */}
                  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white/90 text-xs font-mono tracking-widest">
                    {site.era}
                  </div>
                </div>

                {/* Overlapping Content Panel */}
                <div className={`w-full lg:w-[45%] lg:-mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 ${isEven ? 'lg:right-0 lg:pl-16' : 'lg:left-0 lg:pr-16'} z-10`}>
                  <div className="bg-[#1A1012]/95 backdrop-blur-xl p-8 lg:p-12 rounded-[2rem] border border-[#C5A880]/20 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl p-3 bg-white/5 rounded-full border border-white/10">{site.icon}</div>
                      <div>
                        <div className="text-[#C5A880] text-[10px] tracking-widest uppercase font-mono mb-1">{site.type}</div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "Playfair Display, serif" }}>{site.name}</h2>
                      </div>
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed mb-8 font-light">
                      {site.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <div className="text-white/30 text-[10px] font-mono tracking-widest mb-1">STATUS</div>
                        <div className="text-white text-xs leading-tight">{site.status}</div>
                      </div>
                      <div>
                        <div className="text-white/30 text-[10px] font-mono tracking-widest mb-1">VISITORS</div>
                        <div className="text-[#C5A880] text-sm font-bold">{site.visits}</div>
                      </div>
                    </div>

                    {/* Must See List */}
                    <div>
                      <div className="text-[#C5A880] text-[10px] font-mono tracking-widest uppercase mb-3 border-b border-[#C5A880]/20 pb-2">Must See Highlights</div>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {site.must_see.map((m) => (
                          <li key={m} className="text-white/70 text-sm flex items-center gap-3 font-light">
                            <span className="text-[#C5A880] text-[10px]">◆</span> {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          );
        })}
      </section>


      {/* ── LIVING TRADITIONS COLLAGE ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Living <span className="text-gold-shimmer italic">Traditions</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#C5A880] to-transparent mx-auto rounded-full opacity-50 mb-6" />
            <p className="text-white/50 text-base max-w-2xl mx-auto font-light leading-relaxed">
              Beyond monuments, Gujarat's heritage breathes through its vibrant people, meticulous crafts, and timeless festivals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
            {livingTraditions.map((craft, i) => (
              <div 
                key={craft.id} 
                onClick={() => setActiveTraditionPopup(craft)}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5 hover:border-[#C5A880]/30 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(197,168,128,0.15)] ${
                  i === 0 ? 'sm:col-span-2 sm:row-span-2' : 
                  i === 3 ? 'sm:col-span-2 sm:row-span-1' : 'col-span-1 row-span-1'
                }`}
              >
                {/* Background Image */}
                <img src={craft.image} alt={craft.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-50" style={{ filter: "sepia(30%) grayscale(20%)" }} />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#120B0C] via-[#120B0C]/80 to-transparent group-hover:from-[#1A1012] transition-colors duration-500" />
                
                {/* Decorative glowing orb */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#C5A880]/10 blur-[40px] rounded-full group-hover:bg-[#C5A880]/30 transition-all duration-500" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 overflow-hidden">
                  <div className="transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                    <h4 className="text-white font-bold text-xl sm:text-2xl group-hover:text-[#C5A880] transition-colors duration-500" style={{ fontFamily: "Playfair Display, serif" }}>
                      {craft.name}
                    </h4>
                    <p className="text-white/60 text-sm font-light mt-2 line-clamp-2">
                      {craft.shortDesc}
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-white/50 text-xs font-mono tracking-widest mt-4 flex items-center gap-2">
                      EXPLORE CRAFT <span className="text-[#C5A880] group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── LIVING TRADITIONS POPUP MODAL ── */}
      {activeTraditionPopup && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/60">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveTraditionPopup(null)} />
          
          <div className="relative w-full max-w-2xl bg-[#120B0C] rounded-[2rem] border border-[#C5A880]/20 shadow-[0_30px_70px_rgba(0,0,0,0.85)] flex flex-col md:flex-row overflow-hidden animate-fadeIn z-10">
            {/* Close Button */}
            <button
              onClick={() => setActiveTraditionPopup(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 text-white/50 hover:text-[#C5A880] flex items-center justify-center border border-white/10 transition-all hover:border-[#C5A880]/30 cursor-pointer focus:outline-none"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Left Image Panel */}
            <div className="w-full md:w-2/5 h-48 md:h-auto relative bg-[#1A1012]">
              <img src={activeTraditionPopup.image} alt={activeTraditionPopup.name} className="w-full h-full object-cover opacity-60" style={{ filter: "sepia(20%) grayscale(10%)" }} />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#120B0C] to-transparent" />
            </div>

            {/* Right Content Panel */}
            <div className="w-full md:w-3/5 p-8 md:p-10 max-h-[80vh] overflow-y-auto no-scrollbar relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A880]/5 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[#C5A880] text-[10px] font-mono tracking-widest uppercase mb-2 block">Origin: {activeTraditionPopup.origin}</span>
                <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "Playfair Display, serif" }}>{activeTraditionPopup.name}</h2>
                
                <p className="text-white/70 text-sm leading-relaxed font-light mb-8">
                  {activeTraditionPopup.desc}
                </p>
                
                <div>
                  <h4 className="text-[#C5A880] text-[10px] font-mono tracking-widest uppercase mb-4 border-b border-[#C5A880]/20 pb-2">Key Highlights</h4>
                  <ul className="flex flex-col gap-3">
                    {activeTraditionPopup.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex gap-3 items-start group">
                        <div className="w-5 h-5 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880] flex-shrink-0 mt-0.5">
                          <span className="text-[10px]">◆</span>
                        </div>
                        <span className="text-white/60 text-sm font-light leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

    </div>
  );
}
