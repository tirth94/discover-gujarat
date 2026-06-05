/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BEACHES PAGE — Gujarat Tourism
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

import React, { useState, useEffect, useRef } from "react";
import { beaches } from "../data/beachesData";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const coverflowBeaches = [
  { id: "mandvi-beach", name: "Mandvi Beach", tagline: "Golden sands and peaceful sunsets", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
  { id: "shivrajpur-beach", name: "Shivrajpur Beach", tagline: "Blue Flag certified coastal paradise", image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80" },
  { id: "tithal-beach", name: "Tithal Beach", tagline: "Famous black sand beach of Gujarat", image: "https://images.unsplash.com/photo-1520050735087-1ed65d9b0273?auto=format&fit=crop&w=800&q=80" },
  { id: "dumas-beach", name: "Dumas Beach", tagline: "Mysterious shores and local delicacies", image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80" },
  { id: "beyt-dwarka-beach", name: "Beyt Dwarka Beach", tagline: "Island tranquility and marine life", image: "https://images.unsplash.com/photo-1621272036047-bb0f76bbc1ad?auto=format&fit=crop&w=800&q=80" },
  { id: "madhavpur-beach", name: "Madhavpur Beach", tagline: "Crystal clear waters and palm fringes", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80" },
  { id: "ahmedpur-mandvi-beach", name: "Ahmedpur Mandvi Beach", tagline: "White sands meeting azure waters", image: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=800&q=80" },
  { id: "chorwad-beach", name: "Chorwad Beach", tagline: "Rocky shores and historical palaces", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80" },
  { id: "nagoa-beach", name: "Nagoa Beach", tagline: "Crescent shaped pristine coastline", image: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80" },
  { id: "gopnath-beach", name: "Gopnath Beach", tagline: "Limestone cliffs and rich biodiversity", image: "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=800&q=80" }
];

/* ── Beach Card ── */
function BeachCard({ beach }) {
  return (
    <div
      id={`beach-card-${beach.id}`}
      className="ag-glass ag-hover-card overflow-hidden group flex flex-col h-full"
      style={{ "--accent": beach.accentColor }}
    >
      <div className="w-full h-48 relative overflow-hidden">
        <img 
          src={beach.image} 
          alt={beach.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1012] via-[#1A1012]/40 to-transparent" />
        <div
          className="absolute top-0 left-0 right-0 h-1 z-10"
          style={{ background: `linear-gradient(90deg, #008080, ${beach.accentColor}, #008080)` }}
        />
      </div>

      <div className="p-6 flex flex-col flex-1 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {beach.tags.map((tag) => (
                <span key={tag} className="badge-teal">{tag}</span>
              ))}
            </div>
            <h3
              className="text-white font-bold text-xl mb-1 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {beach.name}
            </h3>
            <p className="text-[#4dd9d9]/70 text-xs flex items-center gap-1.5">
              <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {beach.location}
            </p>
          </div>
          <div className="text-right flex-shrink-0 ml-4">
            <div className="text-[#C5A880] font-bold text-xl" style={{ fontFamily: "Playfair Display, serif" }}>
              {beach.rating}
            </div>
            <div className="stars text-xs">★★★★★</div>
          </div>
        </div>

        <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1 font-light">{beach.desc}</p>

        {/* Activities */}
        <div className="mb-5">
          <h4
            className="text-[#4dd9d9] text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            Activities
          </h4>
          <div className="flex flex-wrap gap-2">
            {beach.activities.map((a) => (
              <span
                key={a}
                className="text-xs bg-teal-900/20 border border-teal-700/30 text-teal-300 px-3 py-1 rounded-full font-light"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-3 gap-3 pt-5 border-t border-white/[0.06] text-xs">
          <div>
            <div className="text-white/25 mb-1" style={{ fontFamily: "DM Mono, monospace" }}>BEST TIME</div>
            <div className="text-white/60 font-light">{beach.bestTime}</div>
          </div>
          <div>
            <div className="text-white/25 mb-1" style={{ fontFamily: "DM Mono, monospace" }}>ACCESS</div>
            <div className="text-[#C5A880] font-medium">{beach.difficulty}</div>
          </div>
          <div>
            <div className="text-white/25 mb-1" style={{ fontFamily: "DM Mono, monospace" }}>DISTANCE</div>
            <div className="text-white/60 font-light">{beach.distance}</div>
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
   BEACHES PAGE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Beaches() {
  return (
    <div id="beaches-page" className="page-enter" style={{ background: "#1E0F12" }}>

      {/* ── IMMERSIVE HERO ── */}
      <section
        id="beaches-hero"
        className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden"
        aria-label="Beaches hero"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/gujarat_beaches.png"
            alt="Gujarat Coastline"
            className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_infinite_alternate]"
            style={{ filter: "brightness(0.45) sepia(0.1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F12] via-[#1E0F12]/25 to-[#1E0F12]/60" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,80,80,0.35) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center relative w-full max-w-5xl mx-auto">
            <span
              className="text-[#4dd9d9] text-xs sm:text-sm font-mono uppercase tracking-[0.5em] mb-4 block drop-shadow-md"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              Coastal Gujarat
            </span>

            <div className="relative w-full flex justify-center items-center py-10 md:py-16">
              {/* Background ghost text */}
              <div
                className="text-[22vw] md:text-[17rem] font-black leading-none uppercase text-transparent opacity-10 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center"
                style={{
                  WebkitTextStroke: "2px #4dd9d9",
                  fontFamily: "Playfair Display, serif",
                  letterSpacing: "0.05em",
                }}
              >
                SHORES
              </div>
              <h1
                className="text-5xl sm:text-[7vw] md:text-[5.5rem] font-bold text-white leading-[1.1] relative z-10 text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Golden{" "}
                <span className="italic text-gold-shimmer font-light">Beaches</span>
              </h1>
            </div>

            <p
              className="text-white/55 text-xs sm:text-sm font-light tracking-widest mt-2 md:mt-4 max-w-xl mx-auto uppercase text-center"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              1,600 km of Coastline · Arabian Sea · Golden Sands
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

      {/* ── OCEAN STATS ── */}
      <section
        id="beaches-stats"
        className="py-14 max-w-7xl mx-auto px-6"
        aria-label="Coastal statistics"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: "🌊", value: "1,600 km", label: "Coastline" },
            { icon: "🏖️", value: "40+",      label: "Beaches" },
            { icon: "🐠", value: "5",         label: "Marine Sanctuaries" },
            { icon: "⛵", value: "Year-round",label: "Water Sports" },
          ].map((s) => (
            <div key={s.label} className="ag-glass p-5 text-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-gold-shimmer text-2xl font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
                {s.value}
              </div>
              <div className="text-white/40 text-xs font-light">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BEACHES GRID / SLIDER ── */}
      <section
        id="beaches-grid-section"
        className="pb-24 max-w-7xl mx-auto px-6"
        aria-label="Beach listings"
      >
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Stunning{" "}
            <span className="text-gold-shimmer">Coastal Destinations</span>
          </h2>
          <div className="section-divider" />
          <p className="text-white/35 mt-4 max-w-lg mx-auto text-sm font-light">
            From black volcanic sands to pristine white shores, Gujarat's beaches are as diverse as its culture.
          </p>
        </div>

        {/* Unified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {beaches.map((beach, index) => (
            <Reveal key={beach.id} delay={(index % 3) * 100} className="h-full">
              <BeachCard beach={beach} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── EXPLORE GUJARAT BEACHES (COVERFLOW CAROUSEL) ── */}
      <section className="py-24 w-full relative overflow-hidden" aria-label="Explore Gujarat Beaches">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-[#0A0507]/60 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-teal-900/10 blur-[120px] rounded-full z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[100vw] px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Explore Gujarat's <span className="text-gold-shimmer italic">Coastal Gems</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base font-light">
              Discover the most beautiful beaches of Gujarat, from serene shores to vibrant coastal destinations.
            </p>
          </div>

          <div className="w-full relative px-0 md:px-12 max-w-[1400px] mx-auto">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={800}
              breakpoints={{
                320: { slidesPerView: 1.2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 2.5,
                slideShadows: false,
                scale: 0.9,
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              modules={[EffectCoverflow, Navigation, Autoplay]}
              className="w-full py-10 !overflow-visible"
            >
              {coverflowBeaches.map((beach) => (
                <SwiperSlide key={beach.id} className="relative group transition-transform duration-500 ease-out swiper-slide-custom">
                  {({ isActive }) => (
                    <div className={`w-full aspect-[3/4] md:aspect-[4/5] rounded-[24px] overflow-hidden relative shadow-[0_15px_50px_rgba(0,0,0,0.6)] border border-white/10 group-hover:border-[#C5A880]/40 transition-all duration-500 ${isActive ? 'scale-110 z-50' : 'scale-100 z-10 opacity-70'}`}>
                      <img
                        src={beach.image}
                        alt={beach.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-[#0A0507]/40 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end">
                        <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2 transform transition-transform duration-500 group-hover:-translate-y-2" style={{ fontFamily: "Playfair Display, serif" }}>
                          {beach.name}
                        </h3>
                        <p className={`text-white/70 text-sm font-light transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                          {beach.tagline}
                        </p>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <button className="swiper-button-prev-custom absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-[#C5A880] hover:border-[#C5A880]/50 hover:bg-white/10 transition-all cursor-pointer hidden md:flex hover:scale-110 active:scale-95">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button className="swiper-button-next-custom absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-[#C5A880] hover:border-[#C5A880]/50 hover:bg-white/10 transition-all cursor-pointer hidden md:flex hover:scale-110 active:scale-95">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── WATER SPORTS ── */}
      <section
        id="beaches-water-sports"
        className="pb-24 max-w-7xl mx-auto px-6"
        aria-label="Water sports"
      >
        <div className="relative ag-glass p-8 bg-gradient-to-br from-[#006666]/15 to-[#C5A880]/4">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#008080] to-[#C5A880]" />
          <h3
            className="text-[#C5A880] font-bold text-2xl mb-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            🏄 Adventure on the Arabian Sea
          </h3>
          <p className="text-white/40 text-sm mb-7 font-light">Gujarat's coastline is perfect for a wide range of water sports and marine adventures.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🤿", sport: "Scuba Diving",  location: "Diu, Gulf of Kutch" },
              { icon: "🪂", sport: "Parasailing",   location: "Mandvi, Diu" },
              { icon: "🚣", sport: "Kayaking",      location: "Gir Somnath Coast" },
              { icon: "🏊", sport: "Snorkelling",   location: "Marine Sanctuary, Jamnagar" },
            ].map((s) => (
              <div key={s.sport} className="bg-white/4 border border-white/6 rounded-xl p-4 text-center hover:border-teal-500/20 hover:bg-teal-900/10 transition-all duration-300">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-white/75 font-semibold text-sm mb-1">{s.sport}</div>
                <div className="text-[#4dd9d9] text-xs font-light">{s.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="pb-12 max-w-7xl mx-auto px-6 text-center">
        <p className="text-white/30 text-xs font-mono tracking-wider italic">
          * Information is for guidance only. Please verify locally before visiting.
        </p>
      </section>
    </div>
  );
}
