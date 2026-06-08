import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { experiences } from "../data/experiencesData";
import ExperiencePopup from "../components/experiences/ExperiencePopup";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STATIC DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

import { stats, categories, highlights, testimonials, seasons } from "../data/homeData";
import { destinationsData } from "../data/destinationsData";
import { temples } from "../data/templesData";
import { beaches } from "../data/beachesData";
import { wildlife } from "../data/forestData";
import { heritageSites } from "../data/heritageData";
import { personalities } from "../data/personalitiesData";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GLOBAL SEARCH INDEX
━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const buildSearchIndex = () => {
  const index = [];
  destinationsData.forEach(d => index.push({ id: d.id, name: d.name, searchStr: `${d.name} ${d.location} ${d.tags?.join(" ")} ${d.desc}`, page: "destinations", targetId: `dest-card-${d.id}` }));
  temples.forEach(t => index.push({ id: t.id, name: t.name, searchStr: `${t.name} ${t.location} ${t.tags?.join(" ")} ${t.desc}`, page: "temples", targetId: `temple-card-${t.id}` }));
  beaches.forEach(b => index.push({ id: b.id, name: b.name, searchStr: `${b.name} ${b.location} ${b.tags?.join(" ")} ${b.desc}`, page: "beaches", targetId: `beach-card-${b.id}` }));
  wildlife.forEach(w => index.push({ id: w.id, name: w.name, searchStr: `${w.name} ${w.location} ${w.tags?.join(" ")} ${w.desc}`, page: "forest", targetId: `wildlife-card-${w.id}` }));
  heritageSites.forEach(h => index.push({ id: h.id, name: h.name, searchStr: `${h.name} ${h.location} ${h.tags?.join(" ")} ${h.desc}`, page: "heritage", targetId: `heritage-card-${h.id}` }));
  personalities.forEach(p => index.push({ id: p.id, name: p.name, searchStr: `${p.name} ${p.era} ${p.tags?.join(" ")} ${p.desc}`, page: "personalities", targetId: `personality-card-${p.id}` }));
  return index;
};
const searchIndex = buildSearchIndex();

/* experiences imported from ../data/experiencesData.js */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ANIMATED NUMBER COUNTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function AnimatedCounter({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const numericValue = parseInt(value.replace(/,/g, ""), 10);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, numericValue, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
   REVEAL ON SCROLL
━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function RevealOnScroll({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
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
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HIGHLIGHT SLIDER (Full-Width)
━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function HighlightSlider({ items }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(idx);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((active + 1) % items.length), [active, items.length, goTo]);
  const prev = useCallback(() => goTo((active - 1 + items.length) % items.length), [active, items.length, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const item = items[active];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl" style={{ height: "clamp(380px, 55vw, 620px)" }}>
      {/* Background image with transition */}
      {items.map((it, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <img src={it.image} alt={it.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F12] via-[#1E0F12]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E0F12]/70 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 z-10">
        <div
          className="transition-all duration-500"
          style={{ opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? "translateY(16px)" : "translateY(0)" }}
        >
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4"
            style={{ background: `${item.badgeColor}22`, color: item.badgeColor, border: `1px solid ${item.badgeColor}44` }}
          >
            {item.badge}
          </span>
          <h3
            className="text-3xl md:text-5xl font-bold text-white mb-2"
            style={{ fontFamily: "Playfair Display, serif", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            {item.title}
          </h3>
          <p className="text-[#C5A880] text-sm mb-3 font-medium tracking-wider uppercase" style={{ fontFamily: "DM Mono, monospace" }}>
            {item.subtitle}
          </p>
          <p className="text-white/65 text-sm md:text-base max-w-lg leading-relaxed mb-6 font-light">
            {item.desc}
          </p>
          <button
            onClick={() => navigate(`/${item.page === 'home' ? '' : item.page}`)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #800020, #C5A880)",
              border: "1px solid rgba(197,168,128,0.4)",
              boxShadow: "0 4px 20px rgba(197,168,128,0.2)",
            }}
          >
            Discover More
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={() => { clearInterval(timerRef.current); prev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 z-20"
        style={{ background: "rgba(30,15,18,0.7)", border: "1px solid rgba(197,168,128,0.2)", backdropFilter: "blur(8px)" }}
        aria-label="Previous"
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#C5A880" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => { clearInterval(timerRef.current); next(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 z-20"
        style={{ background: "rgba(30,15,18,0.7)", border: "1px solid rgba(197,168,128,0.2)", backdropFilter: "blur(8px)" }}
        aria-label="Next"
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#C5A880" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 right-6 flex gap-2 z-20">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => { clearInterval(timerRef.current); goTo(i); }}
            className="rounded-full cursor-pointer transition-all duration-300"
            style={{
              width: i === active ? "2rem" : "0.5rem",
              height: "0.5rem",
              background: i === active ? "#C5A880" : "rgba(255,255,255,0.3)",
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div
        className="absolute top-6 right-6 text-xs font-medium z-20"
        style={{ fontFamily: "DM Mono, monospace", color: "rgba(197,168,128,0.7)" }}
      >
        {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HOME PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Home() {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [activePopup, setActivePopup] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setActiveTestimonial((p) => (p + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;

    // ── Page key → URL path map ──
    const pageToPath = {
      destinations: "/destinations",
      temples:      "/temples",
      beaches:      "/beaches",
      forest:       "/forest",
      heritage:     "/heritage",
      personalities:"/personalities",
    };

    // 1. Check for exact or partial name match
    let match = searchIndex.find(item => item.name.toLowerCase().includes(q));
    
    // 2. Fallback to description/tags match
    if (!match) {
      match = searchIndex.find(item => item.searchStr.toLowerCase().includes(q));
    }

    if (match) {
      const path = pageToPath[match.page] ?? `/${match.page}`;
      // Encode target element ID as search param for deep-link scroll
      navigate(`${path}?highlight=${encodeURIComponent(match.targetId)}`);
      return;
    }

    // 3. Generic fallback routing
    if (q.includes("temple") || q.includes("shrine") || q.includes("somnath")) navigate("/temples");
    else if (q.includes("beach") || q.includes("coast") || q.includes("mandvi")) navigate("/beaches");
    else if (q.includes("forest") || q.includes("gir") || q.includes("lion")) navigate("/forest");
    else if (q.includes("heritage") || q.includes("unesco") || q.includes("rani")) navigate("/heritage");
    else if (q.includes("person") || q.includes("leader") || q.includes("gandhi")) navigate("/personalities");
    else navigate("/destinations");
  };

  return (
    <div id="home-page" className="w-full relative page-enter overflow-x-hidden">

      {/* ══════════════════════════════════════════
          SECTION 1 — CINEMATIC HERO
      ══════════════════════════════════════════ */}
      <section
        id="home-hero"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Parallax background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gujarat_hero.png"
            alt="Gujarat — The Soul of India"
            className="w-full h-full object-cover scale-[1.08] transition-transform duration-[8000ms]"
            style={{
              transformOrigin: "center center",
              transform: heroLoaded ? "scale(1.04)" : "scale(1.08)",
            }}
          />
          {/* Dynamic spotlight following mouse */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle 600px at ${mousePos.x}% ${mousePos.y}%, rgba(197,168,128,0.04) 0%, transparent 70%)`,
            }}
          />
          {/* Layered vignettes */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E0F12]/70 via-[#1E0F12]/20 to-[#1E0F12]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E0F12]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F12]/90 via-transparent to-[#1E0F12]/40" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full pointer-events-none animate-pulse"
          style={{ background: "radial-gradient(circle, rgba(128,0,32,0.06) 0%, transparent 70%)", animationDuration: "6s" }} />
        <div className="absolute bottom-1/3 right-1/5 w-[400px] h-[400px] rounded-full pointer-events-none animate-pulse"
          style={{ background: "radial-gradient(circle, rgba(197,168,128,0.06) 0%, transparent 70%)", animationDuration: "8s" }} />

        {/* Decorative line */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
          <div className="w-px h-20 bg-gradient-to-b from-transparent to-[#C5A880]/40" />
          <span className="text-[#C5A880]/40 text-[9px] tracking-[0.3em] uppercase [writing-mode:vertical-lr]" style={{ fontFamily: "DM Mono, monospace" }}>
            Discover Gujarat
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-[#C5A880]/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center pt-20">

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2.5 text-xs px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0)" : "translateY(-20px)",
              transition: "all 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s",
              background: "rgba(197,168,128,0.08)",
              border: "1px solid rgba(197,168,128,0.25)",
              color: "#C5A880",
              fontFamily: "DM Mono, monospace",
              letterSpacing: "0.2em",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
            Incredible India's Jewel
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold text-white leading-[1.02] mb-6"
            style={{
              fontFamily: "Playfair Display, serif",
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s cubic-bezier(0.25,0.46,0.45,0.94) 0.4s",
              textShadow: "0 4px 40px rgba(0,0,0,0.4)",
            }}
          >
            Discover the<br />
            <span className="text-gold-shimmer">Soul of Gujarat</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/60 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s cubic-bezier(0.25,0.46,0.45,0.94) 0.6s",
            }}
          >
            From the mystical white deserts of Kutch to the sacred shores of Dwarka,
            embark on a journey through India's most vibrant and culturally rich state.
          </p>

          {/* Search Bar */}
          <form
            id="hero-search-form"
            onSubmit={handleSearch}
            className="w-full max-w-xl mx-auto mb-10"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
              transition: "all 0.9s cubic-bezier(0.25,0.46,0.45,0.94) 0.75s",
            }}
          >
            <div className="relative flex items-center gap-2 p-1.5 rounded-2xl backdrop-blur-md"
              style={{ background: "rgba(30,15,18,0.6)", border: "1px solid rgba(197,168,128,0.2)" }}>
              <svg className="absolute left-5 w-4 h-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="rgba(197,168,128,0.5)" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                id="hero-search-input"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search temples, beaches, wildlife..."
                aria-label="Search Gujarat destinations"
                className="flex-1 bg-transparent pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none font-light"
              />
              <button
                type="submit"
                id="hero-search-btn"
                className="text-white font-semibold text-sm px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:brightness-110 hover:-translate-y-px"
                style={{
                  background: "linear-gradient(135deg, #800020, #C5A880)",
                  border: "1px solid rgba(197,168,128,0.4)",
                  boxShadow: "0 4px 16px rgba(197,168,128,0.2)",
                }}
              >
                Explore
              </button>
            </div>
          </form>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s cubic-bezier(0.25,0.46,0.45,0.94) 0.9s",
            }}
          >
            <button
              id="hero-cta-explore"
              onClick={() => navigate("/destinations")}
              className="group inline-flex items-center gap-2.5 text-white font-semibold text-sm py-4 px-9 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #800020, #C5A880)",
                border: "1px solid rgba(197,168,128,0.5)",
                boxShadow: "0 8px 32px rgba(197,168,128,0.2), 0 0 0 1px rgba(197,168,128,0.1)",
              }}
            >
              Explore Destinations
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              id="hero-cta-heritage"
              onClick={() => navigate("/heritage")}
              className="group inline-flex items-center gap-2.5 font-semibold text-sm py-4 px-9 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
              style={{
                color: "#C5A880",
                border: "1px solid rgba(197,168,128,0.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              UNESCO Heritage Sites
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Scroll cue */}
          <div className="mt-16 flex flex-col items-center gap-2 animate-bounce" style={{ animationDuration: "2.5s" }}>
            <span className="text-white/20 text-[9px] tracking-[0.3em] uppercase" style={{ fontFamily: "DM Mono, monospace" }}>Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/20" />
            <div className="w-4 h-4 rounded-full border border-white/15 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C5A880]/60 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — ANIMATED STATS
      ══════════════════════════════════════════ */}
      <section id="home-stats" className="relative py-0" aria-label="Gujarat statistics">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl"
            style={{ background: "rgba(197,168,128,0.08)", border: "1px solid rgba(197,168,128,0.1)" }}>
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 80}>
                <div className="group flex flex-col items-center py-10 px-4 transition-all duration-500 hover:bg-white/[0.02] cursor-default">
                  <span className="text-2xl mb-3 group-hover:scale-125 transition-transform duration-500">{s.icon}</span>
                  <div
                    className="text-3xl md:text-4xl font-bold mb-1 text-gold-shimmer"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-white/40 text-[10px] tracking-widest uppercase font-medium" style={{ fontFamily: "DM Mono, monospace" }}>
                    {s.label}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — CATEGORY CARDS
      ══════════════════════════════════════════ */}
      <section id="home-categories" className="py-28 max-w-7xl mx-auto px-5 sm:px-8" aria-label="Destination categories">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="badge-teal mb-4 inline-flex">Our Destinations</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Experience Every Facet<br />
              <span className="text-gold-shimmer">of Gujarat</span>
            </h2>
            <div className="section-divider" />
            <p className="text-white/40 max-w-xl mx-auto mt-5 text-sm md:text-base leading-relaxed font-light">
              Each corner of Gujarat holds a unique story — divine temples, golden beaches,
              ancient heritage, and wild forests await your exploration.
            </p>
          </div>
        </RevealOnScroll>

        {/* Desktop 2x2 Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <RevealOnScroll key={cat.id} delay={i * 100}>
              <button
                id={`category-card-${cat.id}`}
                onClick={() => navigate(`/${cat.page === 'home' ? '' : cat.page}`)}
                className="group relative overflow-hidden rounded-3xl text-left cursor-pointer focus:outline-none w-full"
                style={{ height: "360px" }}
              >
                {/* Background image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to top, rgba(30,15,18,0.95) 0%, rgba(30,15,18,0.5) 50%, transparent 100%)`,
                  }}
                />
                {/* Colored tint on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${cat.glow} 0%, transparent 60%)` }}
                />

                {/* Top border glow */}
                <div
                  className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-500 inline-block">
                    {cat.emoji}
                  </div>
                  <div
                    className="inline-flex items-center text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full mb-3 ml-3 align-middle"
                    style={{ background: `${cat.accent}18`, color: cat.accent, border: `1px solid ${cat.accent}35` }}
                  >
                    {cat.tag}
                  </div>
                  <h3
                    className="text-white font-bold text-xl mb-2 group-hover:text-gold-shimmer transition-all duration-300"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-4 font-light">{cat.desc}</p>
                  <div
                    className="flex items-center gap-2 text-xs font-semibold group-hover:gap-3 transition-all duration-300"
                    style={{ color: cat.accent, fontFamily: "DM Mono, monospace" }}
                  >
                    <span>Explore</span>
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100"
                  style={{ background: `${cat.accent}18`, border: `1px solid ${cat.accent}40` }}
                >
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke={cat.accent} strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </RevealOnScroll>
          ))}
        </div>

        {/* Mobile Snap Slider */}
        <div
          id="home-categories-mobile"
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`category-card-mobile-${cat.id}`}
              onClick={() => navigate(`/${cat.page === 'home' ? '' : cat.page}`)}
              className="snap-start flex-shrink-0 relative overflow-hidden rounded-2xl text-left cursor-pointer focus:outline-none"
              style={{ width: "75vw", maxWidth: "300px", height: "340px" }}
            >
              <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,15,18,0.95) 0%, transparent 60%)" }} />
              <div className="absolute bottom-0 left-0 w-full p-5 z-10">
                <div className="text-2xl mb-2">{cat.emoji}</div>
                <span className="inline-flex items-center text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2"
                  style={{ background: `${cat.accent}18`, color: cat.accent, border: `1px solid ${cat.accent}35` }}>
                  {cat.tag}
                </span>
                <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{cat.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed mb-3 font-light line-clamp-2">{cat.desc}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: cat.accent, fontFamily: "DM Mono, monospace" }}>
                  Explore →
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — HIGHLIGHT SLIDER
      ══════════════════════════════════════════ */}
      <section id="home-highlights" className="py-16 border-t border-white/5" aria-label="Iconic highlights">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="badge-maroon mb-4 inline-flex">Must-See</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-3" style={{ fontFamily: "Playfair Display, serif" }}>
                  Iconic Highlights
                </h2>
                <div className="section-divider" style={{ margin: "0.75rem 0 0" }} />
              </div>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed font-light hidden sm:block">
                Curated experiences that define the spirit of Gujarat
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((h, i) => (
                <button
                  key={h.title}
                  onClick={() => navigate(`/${h.page === 'home' ? '' : h.page}`)}
                  className="group relative overflow-hidden rounded-2xl text-left focus:outline-none transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                  style={{ height: "400px", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <img src={h.image} alt={h.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F12] via-[#1E0F12]/60 to-transparent" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3" style={{ background: `${h.badgeColor}20`, color: h.badgeColor, border: `1px solid ${h.badgeColor}40` }}>
                      {h.badge}
                    </span>
                    <h3 className="text-white font-bold text-2xl mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{h.title}</h3>
                    <p className="text-[#C5A880] text-sm mb-3 font-medium tracking-wide" style={{ fontFamily: "DM Mono, monospace" }}>{h.subtitle}</p>
                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                      <p className="text-white/70 text-sm font-light leading-relaxed mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile Slider */}
            <div className="md:hidden">
              <HighlightSlider items={highlights} />
            </div>
          </RevealOnScroll>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          SECTION 4.5 — HISTORY HIGHLIGHT
      ══════════════════════════════════════════ */}
      <section id="home-history" className="py-24 relative overflow-hidden border-t border-white/5" aria-label="Gujarat historical overview">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 100%, rgba(197,168,128,0.05) 0%, transparent 60%)" }} />
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <RevealOnScroll>
            <span className="badge-gold mb-6 inline-flex">5,000 Years of Legacy</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
              A Journey Through <br className="md:hidden" />
              <span className="text-gold-shimmer">Epic Time</span>
            </h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              From the pioneering maritime dockyards of the Indus Valley Civilization to the non-violent revolution that shook the British Empire, discover the chronological milestones that forged the modern identity of Gujarat.
            </p>
            <button
              onClick={() => navigate("/history")}
              className="group inline-flex items-center justify-center gap-3 text-white font-semibold text-sm sm:text-base py-4 px-8 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, rgba(197,168,128,0.2), rgba(197,168,128,0.05))",
                border: "1px solid rgba(197,168,128,0.4)",
                boxShadow: "0 8px 32px rgba(197,168,128,0.15), inset 0 0 0 1px rgba(197,168,128,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              Explore Chronological Infographic History
              <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 text-[#C5A880]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </RevealOnScroll>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SECTION 5 — EXPERIENCES GRID (16 cards)
      ══════════════════════════════════════════ */}
      <section id="home-experiences" className="py-24 border-t border-white/5" aria-label="Gujarat experiences">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="badge-gold mb-4 inline-flex">What Awaits You</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4" style={{ fontFamily: "Playfair Display, serif" }}>
                Endless <span className="text-gold-shimmer">Experiences</span>
              </h2>
              <div className="section-divider" />
              <p className="text-white/40 max-w-lg mx-auto mt-5 text-sm leading-relaxed font-light">
                From ancient temples to open deserts — Gujarat offers 16 extraordinary ways to discover India's most vibrant state.
              </p>
            </div>
          </RevealOnScroll>

          {/* Desktop Grid — 4 columns */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
            {experiences.map((exp, i) => (
              <RevealOnScroll key={exp.id} delay={i * 45}>
                <div
                  className="group relative flex flex-col p-7 rounded-2xl transition-all duration-400"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(10px)",
                    cursor: "default",
                    minHeight: "220px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${exp.color}08`;
                    e.currentTarget.style.borderColor = `${exp.color}30`;
                    e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.35), 0 0 0 1px ${exp.color}18`;
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.cursor = "pointer";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.cursor = "default";
                  }}
                >
                  {/* Top accent line on hover */}
                  <div
                    className="absolute top-0 left-0 w-full h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `linear-gradient(90deg, transparent, ${exp.color}, transparent)` }}
                  />

                  {/* Icon */}
                  <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-400 block">{exp.icon}</span>

                  {/* Title & Count */}
                  <div className="flex-1">
                    <div className="text-white font-bold text-base mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{exp.title}</div>
                    <div className="text-xs font-light mb-2" style={{ color: exp.color, fontFamily: "DM Mono, monospace" }}>{exp.count}</div>
                    <div className="text-white/35 text-xs leading-relaxed font-light">{exp.tagline}</div>
                  </div>

                  {/* Click Here Button */}
                  <button
                    onClick={() => setActivePopup(exp)}
                    style={{
                      marginTop: "1.2rem",
                      width: "100%",
                      padding: "0.55rem 0",
                      borderRadius: "9999px",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      background: `${exp.color}12`,
                      border: `1px solid ${exp.color}30`,
                      color: exp.color,
                      fontFamily: "DM Mono, monospace",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${exp.color}25`;
                      e.currentTarget.style.borderColor = `${exp.color}60`;
                      e.currentTarget.style.boxShadow = `0 4px 16px ${exp.color}20`;
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${exp.color}12`;
                      e.currentTarget.style.borderColor = `${exp.color}30`;
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Click Here ✦
                  </button>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Mobile Snap Slider */}
          <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="snap-start flex-shrink-0 flex flex-col p-5 rounded-2xl"
                style={{
                  width: "68vw",
                  maxWidth: "240px",
                  minHeight: "200px",
                  background: `${exp.color}08`,
                  border: `1px solid ${exp.color}22`,
                  cursor: "pointer",
                }}
                onClick={() => setActivePopup(exp)}
              >
                <span className="text-3xl mb-3">{exp.icon}</span>
                <div className="text-white font-bold text-sm mb-1 flex-1" style={{ fontFamily: "Playfair Display, serif" }}>{exp.title}</div>
                <div className="text-xs mb-2 font-light" style={{ color: exp.color, fontFamily: "DM Mono, monospace" }}>{exp.count}</div>
                <div className="text-white/35 text-xs leading-relaxed font-light mb-3">{exp.tagline}</div>
                <button
                  onClick={(e) => { e.stopPropagation(); setActivePopup(exp); }}
                  style={{
                    padding: "0.45rem 0",
                    borderRadius: "9999px",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    background: `${exp.color}15`,
                    border: `1px solid ${exp.color}35`,
                    color: exp.color,
                    cursor: "pointer",
                    fontFamily: "DM Mono, monospace",
                  }}
                >
                  Click Here ✦
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience Popup Modal ── */}
      {activePopup && (
        <ExperiencePopup
          experience={activePopup}
          onClose={() => setActivePopup(null)}
        />
      )}

      {/* ══════════════════════════════════════════
          SECTION 6 — TRAVEL GUIDE
      ══════════════════════════════════════════ */}
      <section id="home-travel-guide" className="py-24 border-t border-white/5" aria-label="Travel guide">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left Text */}
            <RevealOnScroll>
              <div>
                <span className="badge-teal mb-5 inline-block">Travel Guide</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-4" style={{ fontFamily: "Playfair Display, serif" }}>
                  When to Visit<br />
                  <span className="text-gold-shimmer">Gujarat</span>
                </h2>
                <p className="text-white/45 text-sm md:text-base leading-relaxed mb-8 font-light">
                  Gujarat welcomes visitors year-round, but each season offers a unique and magical
                  experience. From the festive brilliance of Navratri to the surreal expanse of the Rann, plan your journey perfectly to witness the state at its absolute best. 
                  Explore our comprehensive month-by-month guide to align your travels with the greatest festivals, optimal weather, and prime wildlife spotting windows.
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  {seasons.map((s, i) => (
                    <div
                      key={s.season}
                      className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-default hover:-translate-y-0.5"
                      style={{
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${s.color}30`;
                        e.currentTarget.style.background = `${s.color}06`;
                        e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.2)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div className="text-2xl w-10 text-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-semibold text-sm" style={{ color: s.color, fontFamily: "Playfair Display, serif" }}>{s.season}</span>
                          <span
                            className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                            style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}25`, fontFamily: "DM Mono, monospace" }}
                          >
                            {s.label}
                          </span>
                        </div>
                        <p className="text-white/40 text-xs font-light">{s.desc}</p>
                      </div>
                      <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ background: `linear-gradient(180deg, transparent, ${s.color}, transparent)` }} />
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Right — Image Card */}
            <RevealOnScroll delay={150}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                  <img
                    src="/gujarat_heritage.png"
                    alt="Rani ki Vav — Gujarat Heritage"
                    className="w-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ height: "clamp(260px, 35vw, 420px)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F12]/60 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="badge-teal">Rani ki Vav — UNESCO</span>
                  </div>
                </div>

                {/* Floating Rating Card */}
                <div
                  className="absolute -bottom-6 -right-4 sm:-right-8 p-5 rounded-2xl shadow-2xl backdrop-blur-md"
                  style={{
                    background: "rgba(20,10,14,0.95)",
                    border: "1px solid rgba(197,168,128,0.2)",
                  }}
                >
                  <div className="text-gold-shimmer text-2xl font-bold mb-0.5" style={{ fontFamily: "Playfair Display, serif" }}>4.9/5</div>
                  <div className="text-[#C5A880] text-xs mb-1 tracking-wider">★★★★★</div>
                  <div className="text-white/35 text-[9px] uppercase tracking-wider" style={{ fontFamily: "DM Mono, monospace" }}>
                    50,000+ Travellers
                  </div>
                </div>

                {/* Floating accent orb */}
                <div
                  className="absolute -top-6 -left-6 w-20 h-20 rounded-full pointer-events-none animate-pulse"
                  style={{ background: "radial-gradient(circle, rgba(197,168,128,0.12) 0%, transparent 70%)", animationDuration: "4s" }}
                />
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Centered CTA */}
          <RevealOnScroll delay={200}>
            <div className="flex justify-center mt-10">
              <button
                onClick={() => navigate("/when-to-visit")}
                className="btn-gold inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4"
              >
                See Full Details
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 7 — TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section id="home-testimonials" className="py-24 border-t border-white/5" aria-label="Traveller testimonials"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,128,128,0.04), transparent)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <span className="badge-teal mb-5 inline-block">Traveller Stories</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
                What <br className="md:hidden" />
                <span className="text-gold-shimmer">Visitors Say</span>
              </h2>
              <div className="section-divider" />
            </div>
          </RevealOnScroll>

          {/* Desktop: 2x2 Grid of 4 Cards */}
          <div className="hidden md:grid grid-cols-2 gap-5 mb-6">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 80}>
                <div
                  className="group relative p-6 rounded-2xl cursor-pointer transition-all duration-400 hover:-translate-y-1"
                  style={{
                    background: i === activeTestimonial ? "rgba(197,168,128,0.06)" : "rgba(255,255,255,0.02)",
                    border: i === activeTestimonial ? "1px solid rgba(197,168,128,0.25)" : "1px solid rgba(255,255,255,0.06)",
                    boxShadow: i === activeTestimonial ? "0 12px 40px rgba(0,0,0,0.3)" : "none",
                  }}
                  onClick={() => setActiveTestimonial(i)}
                >
                  {i === activeTestimonial && (
                    <div className="absolute top-0 left-0 w-full h-0.5 rounded-t-2xl"
                      style={{ background: "linear-gradient(90deg, #800020, #C5A880)" }} />
                  )}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: t.gradient }}
                    >
                      {t.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/35 text-xs font-light">{t.role}</div>
                    </div>
                    <div className="text-[#C5A880] text-xs tracking-wider flex-shrink-0">{"★".repeat(t.rating)}</div>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed font-light line-clamp-3">"{t.text}"</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Mobile: Auto-Slider (1 card at a time) */}
          <div className="md:hidden relative w-full mb-6">
            <div className="overflow-hidden rounded-3xl" style={{ border: "1px solid rgba(197,168,128,0.15)", background: "rgba(255,255,255,0.02)", boxShadow: "0 24px 60px rgba(0,0,0,0.2)" }}>
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={t.name} className="w-full flex-shrink-0 p-8">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl mb-4" style={{ background: t.gradient }}>{t.avatar}</div>
                      <div className="text-[#C5A880] text-lg tracking-wider mb-2">{"★".repeat(t.rating)}</div>
                      <div className="text-gold-shimmer text-4xl font-serif leading-none mb-4 opacity-50">"</div>
                      <p className="text-white/80 text-lg text-center leading-relaxed font-light mb-6">
                        {t.text}
                      </p>
                      <div className="text-white font-semibold text-lg" style={{ fontFamily: "Playfair Display, serif" }}>{t.name}</div>
                      <div className="text-white/40 text-sm tracking-widest uppercase mt-1" style={{ fontFamily: "DM Mono, monospace" }}>{t.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="rounded-full transition-all duration-300 cursor-pointer hover:scale-110"
                  style={{
                    width: i === activeTestimonial ? "2.5rem" : "0.5rem",
                    height: "0.5rem",
                    background: i === activeTestimonial ? "#C5A880" : "rgba(255,255,255,0.2)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 8 — CTA BANNER
      ══════════════════════════════════════════ */}
      <section id="home-cta" className="py-24 border-t border-white/5 relative" aria-label="Call to action">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <div
              className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-24 text-center group"
              style={{
                background: "#1E0F12",
                border: "1px solid rgba(197,168,128,0.2)",
                boxShadow: "0 30px 100px -20px rgba(0,0,0,0.5)",
              }}
            >
              {/* Cinematic Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/gujarat_hero.png" 
                  alt="Gujarat landscape" 
                  className="w-full h-full object-cover opacity-40 transition-transform duration-[10s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1E0F12]/80 via-[#1E0F12]/50 to-[#1E0F12]/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E0F12]/90 via-transparent to-[#1E0F12]/90" />
              </div>

              {/* Animated Glowing Orbs */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#800020] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse" style={{ animationDuration: "6s" }} />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C5A880] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: "8s" }} />

              {/* Top/Bottom Golden Borders */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/50 to-transparent" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/30 to-transparent" />

              {/* Content */}
              <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                <span className="badge-gold mb-6 inline-block">Your Journey Begins Here</span>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Playfair Display, serif", textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                  Ready to Explore <br />
                  <span className="text-gold-shimmer">Incredible Gujarat?</span>
                </h2>
                
                <p className="text-white/60 text-base md:text-lg mb-12 leading-relaxed font-light max-w-xl mx-auto">
                  From the shimmering white sands of Kutch to the dense forests of Gir, your extraordinary adventure is just a click away. Let the journey of a lifetime begin.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
                  <button
                    id="cta-start-exploring"
                    onClick={() => navigate("/destinations")}
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-3 text-white font-semibold text-sm py-4 px-10 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(135deg, #800020, #a00028)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      boxShadow: "0 10px 40px rgba(128,0,32,0.4)",
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 tracking-wide">Start Exploring</span>
                    <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  <button
                    id="cta-personalities"
                    onClick={() => navigate("/personalities")}
                    className="group inline-flex items-center justify-center gap-3 font-semibold text-sm py-4 px-10 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1"
                    style={{ 
                      color: "#C5A880", 
                      background: "rgba(197,168,128,0.05)",
                      border: "1px solid rgba(197,168,128,0.3)", 
                      backdropFilter: "blur(12px)" 
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(197,168,128,0.1)"; e.currentTarget.style.borderColor = "rgba(197,168,128,0.6)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(197,168,128,0.05)"; e.currentTarget.style.borderColor = "rgba(197,168,128,0.3)"; }}
                  >
                    Meet Gujarat's Legends
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
}