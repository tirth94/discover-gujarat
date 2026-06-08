import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { temples } from "../data/templesData";
import { districtTemples } from "../data/districtTemplesData";

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
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Vertical Premium Temple Card ── */
function TempleCard({ temple }) {
  return (
    <div id={`temple-card-${temple.id}`} className="relative flex flex-col gap-4 items-stretch p-5 rounded-[2rem] overflow-hidden group h-full transition-all duration-500 hover:-translate-y-2">
      {/* Background with glassmorphism */}
      <div className="absolute inset-0 bg-[#28161A]/40 backdrop-blur-xl border border-white/5 rounded-[2rem] transition-all duration-700 group-hover:bg-[#28161A]/60 group-hover:border-[#C5A880]/30" />
      
      {/* Glowing Blob */}
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br ${temple.accent} blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`} />
      
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Temple Image */}
        <div className="w-full h-48 md:h-52 rounded-2xl overflow-hidden mb-5 border border-white/5 shadow-lg">
          <img 
            src={temple.image} 
            alt={temple.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="badge-gold px-3 py-1 text-[10px] tracking-widest bg-[#C5A880]/10">{temple.type}</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C5A880]/30 to-transparent" />
        </div>
        
        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: "Playfair Display, serif" }}>
          {temple.name}
        </h3>
        
        <p className="text-[#C5A880] text-xs font-mono uppercase tracking-widest mb-4 flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {temple.location}
        </p>
        
        <p className="text-white/60 text-sm leading-relaxed font-light mb-5 flex-1">
          {temple.desc}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-white/10 mb-4">
          <div>
            <div className="text-white/30 text-[10px] font-mono mb-1.5 uppercase tracking-widest">Timings</div>
            <div className="text-white/90 text-sm font-medium">{temple.timings}</div>
          </div>
          <div>
            <div className="text-white/30 text-[10px] font-mono mb-1.5 uppercase tracking-widest">Best Season</div>
            <div className="text-white/90 text-sm font-medium">{temple.bestTime}</div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col gap-3">
        <div className="bg-black/20 rounded-xl p-4 border border-white/5 backdrop-blur-md flex-1">
          <div className="text-[#C5A880] text-[10px] font-mono uppercase tracking-widest mb-3">Highlights</div>
          <ul className="space-y-2">
            {temple.highlights.map(h => (
              <li key={h} className="flex items-start gap-2.5 text-white/70 text-sm font-light">
                <span className="text-[#C5A880] mt-0.5 text-sm leading-none">✦</span>
                <span className="leading-snug">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TEMPLES PAGE - REDESIGNED
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Temples() {
  const [activeDistrictPopup, setActiveDistrictPopup] = useState(null);

  useEffect(() => {
    if (activeDistrictPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDistrictPopup]);

  return (
    <div id="temples-page" className="page-enter bg-[#1E0F12] min-h-screen">

      {/* ── IMMERSIVE HERO ── */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/gujarat_temples.png"
            alt="Sacred Temples of Gujarat"
            className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-[#1E0F12]/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F12] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E0F12]/50 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto">
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#C5A880]" />
              <span className="text-[#C5A880] font-mono text-sm tracking-[0.3em] uppercase">Spiritual Awakening</span>
              <span className="h-px w-8 bg-[#C5A880]" />
            </div>
          </Reveal>
          
          <Reveal delay={150}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]" style={{ fontFamily: "Playfair Display, serif" }}>
              Sacred <span className="text-gold-shimmer italic pr-2">Gujarat</span>
            </h1>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
              Embark on a divine journey through ancient Jyotirlingas, breathtaking mountaintop shrines, and modern architectural marvels.
            </p>
          </Reveal>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-bounce">
          <span className="text-white/30 text-[10px] font-mono uppercase tracking-[0.2em]">Scroll to Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── FLOATING STATS ── */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-6 pb-12">
        <Reveal delay={400}>
          <div className="ag-glass p-6 md:p-8 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/10 bg-[#28161A]/80 backdrop-blur-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                { icon: "🛕", label: "50+", sub: "Major Temples", desc: "Across the entire state" },
                { icon: "🕉️", label: "3", sub: "Jyotirlingas", desc: "Out of 12 in India" },
                { icon: "🏔️", label: "900+", sub: "Jain Shrines", desc: "Atop Palitana hills" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center pt-6 md:pt-0 first:pt-0">
                  <div className="text-3xl mb-3 bg-white/5 w-14 h-14 rounded-full flex items-center justify-center border border-white/5 shadow-inner">{s.icon}</div>
                  <div className="text-white text-3xl font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{s.label}</div>
                  <div className="text-[#C5A880] font-mono text-[10px] uppercase tracking-widest mb-1">{s.sub}</div>
                  <div className="text-white/40 text-xs font-light">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── PREMIUM LISTING ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Must-Visit <span className="text-gold-shimmer italic">Sacred Sites</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A880] to-transparent mx-auto rounded-full opacity-50 mb-10" />
            
            <button 
              onClick={() => document.getElementById('explore-district')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 text-[#C5A880] hover:bg-[#C5A880] hover:text-[#120B0C] transition-all duration-300 font-medium tracking-wide shadow-[0_0_20px_rgba(197,168,128,0.1)] hover:shadow-[0_0_30px_rgba(197,168,128,0.4)] hover:-translate-y-1 group"
            >
              Explore By District
              <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {temples.map((temple, index) => (
            <Reveal key={temple.id} delay={(index % 3) * 100}>
              <TempleCard temple={temple} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── DISTRICT WISE TEMPLES ── */}
      <section id="explore-district" className="py-24 max-w-[90rem] mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Explore By <span className="text-gold-shimmer italic">District</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#C5A880] to-transparent mx-auto rounded-full opacity-50" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {districtTemples.map((district, i) => (
            <Reveal key={district.id} delay={(i % 5) * 100} className="h-full">
              <div 
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1012] to-[#120B0C] border border-white/5 hover:border-[#C5A880]/30 transition-all duration-300 p-5 flex items-center justify-between cursor-pointer hover:shadow-[0_10px_30px_rgba(197,168,128,0.1)] hover:-translate-y-1 h-full"
                onClick={() => setActiveDistrictPopup(district)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#28161A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C5A880]/5 flex items-center justify-center border border-[#C5A880]/10 group-hover:bg-[#C5A880] group-hover:text-[#120B0C] text-[#C5A880] transition-colors duration-500 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#C5A880] transition-colors duration-300" style={{ fontFamily: "Playfair Display, serif" }}>
                      {district.name}
                    </h3>
                    <span className="text-white/40 text-[10px] font-mono tracking-widest uppercase block mt-0.5">
                      {district.templesList.length} Temples
                    </span>
                  </div>
                </div>

                <div className="relative z-10 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:border-[#C5A880] group-hover:text-[#C5A880] transition-all duration-300 transform group-hover:translate-x-1 flex-shrink-0 ml-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── ETIQUETTE SECTION ── */}
      <section className="py-24 max-w-6xl mx-auto px-6 mb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 border border-white/10 bg-gradient-to-br from-[#800020]/20 to-[#C5A880]/10">
            <div className="absolute inset-0 bg-[#28161A]/40 backdrop-blur-lg -z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 blur-[100px] rounded-full -z-10" />
            
            <div className="text-center mb-12">
              <span className="text-[#C5A880] text-3xl mb-4 block">🙏</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                Temple Etiquette
              </h3>
              <p className="text-white/50 text-sm md:text-base font-light max-w-xl mx-auto">
                Help preserve the sanctity and spiritual energy of these ancient sites by following a few simple guidelines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "👟", title: "Footwear", tip: "Remove before entering premises" },
                { icon: "👘", title: "Attire", tip: "Dress modestly, cover shoulders" },
                { icon: "📸", title: "Photography", tip: "Ask permission before shooting" },
                { icon: "🤫", title: "Silence", tip: "Maintain peace in sanctum areas" },
              ].map((t) => (
                <div key={t.title} className="bg-black/30 border border-white/5 rounded-2xl p-6 text-center hover:bg-black/50 transition-colors">
                  <div className="text-3xl mb-4">{t.icon}</div>
                  <div className="text-white font-medium mb-2">{t.title}</div>
                  <div className="text-white/50 text-sm font-light leading-relaxed">{t.tip}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* ── DISTRICT POPUP MODAL ── */}
      {activeDistrictPopup && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/60">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveDistrictPopup(null)} />
          
          <div className="relative w-full max-w-2xl bg-[#120B0C] rounded-[2rem] border border-[#C5A880]/20 shadow-[0_30px_70px_rgba(0,0,0,0.85)] flex flex-col md:flex-row overflow-hidden animate-fadeIn z-10">
            {/* Close Button */}
            <button
              onClick={() => setActiveDistrictPopup(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 text-white/50 hover:text-[#C5A880] flex items-center justify-center border border-white/10 transition-all hover:border-[#C5A880]/30 cursor-pointer focus:outline-none"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Left Image Panel */}
            <div className="w-full md:w-2/5 h-48 md:h-auto relative bg-[#1A1012]">
              <img src={activeDistrictPopup.image} alt={activeDistrictPopup.name} className="w-full h-full object-cover opacity-60" style={{ filter: "sepia(20%)" }} />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#120B0C] to-transparent" />
            </div>

            {/* Right List Panel */}
            <div className="w-full md:w-3/5 p-8 md:p-10 max-h-[80vh] overflow-y-auto no-scrollbar relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A880]/5 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[#C5A880] text-[10px] font-mono tracking-widest uppercase mb-2 block">Sacred Sites of</span>
                <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "Playfair Display, serif" }}>{activeDistrictPopup.name}</h2>
                
                <div className="flex flex-col gap-6">
                  {activeDistrictPopup.templesList.map((t, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880]/10 transition-colors flex-shrink-0">
                        <span className="text-xs font-mono">{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-medium tracking-wide mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{t.name}</h4>
                        <p className="text-[#C5A880] text-[10px] uppercase tracking-widest font-mono flex items-center gap-1.5 mb-2">
                          <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {t.city}
                        </p>
                        <p className="text-white/50 text-xs leading-relaxed font-light">{t.desc}</p>
                      </div>
                    </div>
                  ))}
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
