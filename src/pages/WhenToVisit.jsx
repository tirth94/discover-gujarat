/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   WhenToVisit.jsx — Full Detail Page
   Gujarat Tourism — Complete Seasonal Travel Guide
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ── Reveal on scroll helper ── */
function Reveal({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

/* ── Data ── */
import { seasons, quickFacts, regionGuide } from "../data/whenToVisitData";

export default function WhenToVisit() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("peak");
  const activeSeason = seasons.find(s => s.id === activeTab);

  return (
    <div className="w-full page-enter" style={{ background: "#1E0F12", color: "#E2D4C9" }}>

      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1600&q=80"
            alt="Rann of Kutch — Gujarat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E0F12]/50 via-[#1E0F12]/30 to-[#1E0F12]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E0F12]/60 to-transparent" />
        </div>
        <div className="absolute top-0 left-0 w-full h-1"
          style={{ background: "linear-gradient(90deg, #800020, #C5A880, #008080)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pb-16 pt-32 w-full">
          <span className="badge-teal mb-4 inline-flex">Complete Travel Guide</span>
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-4 mt-2"
            style={{ fontFamily: "Playfair Display, serif", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            When to Visit<br />
            <span className="text-gold-shimmer">Gujarat</span>
          </h1>
          <p className="text-white/55 text-base md:text-xl max-w-2xl font-light leading-relaxed">
            A month-by-month breakdown of Gujarat's seasons, festivals, weather, and regional travel windows —
            everything you need to plan your perfect journey to India's most vibrant state.
          </p>
        </div>
      </section>

      {/* ── QUICK FACTS STRIP ── */}
      <section className="py-0 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px overflow-hidden rounded-2xl"
            style={{ background: "rgba(197,168,128,0.07)", border: "1px solid rgba(197,168,128,0.1)" }}
          >
            {quickFacts.map((f, i) => (
              <Reveal key={f.label} delay={i * 60}>
                <div className="flex flex-col items-center text-center py-7 px-3 hover:bg-white/[0.02] transition-colors duration-300">
                  <span className="text-xl mb-2">{f.icon}</span>
                  <div className="text-[#C5A880] font-semibold text-sm mb-0.5" style={{ fontFamily: "Playfair Display, serif" }}>{f.value}</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "DM Mono, monospace" }}>{f.label}</div>
                  <div className="text-white/25 text-[10px] font-light">{f.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEASON TABS ── */}
      <section className="py-20" style={{ background: "linear-gradient(to bottom, transparent, rgba(0,128,128,0.04), transparent)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="badge-gold mb-4 inline-flex">Season by Season</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3" style={{ fontFamily: "Playfair Display, serif" }}>
                Choose Your <span className="text-gold-shimmer">Season</span>
              </h2>
              <div className="section-divider" />
              <p className="text-white/40 text-sm mt-5 max-w-xl mx-auto leading-relaxed font-light">
                Each season in Gujarat is a completely different experience. Click a season to explore what it offers.
              </p>
            </div>
          </Reveal>

          {/* Tab Buttons */}
          <Reveal delay={100}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              {seasons.map(s => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className="group inline-flex items-center gap-3 font-semibold text-sm py-3.5 px-8 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                  style={activeTab === s.id ? {
                    background: `linear-gradient(135deg, #800020, ${s.color})`,
                    border: `1px solid ${s.color}50`,
                    color: "white",
                    boxShadow: `0 8px 28px ${s.color}30, 0 0 0 1px ${s.color}20`,
                  } : {
                    color: s.color,
                    border: `1px solid ${s.color}30`,
                    background: `${s.color}08`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                  <span className="text-xs opacity-60" style={{ fontFamily: "DM Mono, monospace" }}>{s.range.split(" – ")[0]}</span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Active Season Detail */}
          {activeSeason && (
            <div
              key={activeSeason.id}
              style={{
                animation: "fadeInScale 0.4s cubic-bezier(0.34,1.2,0.64,1) both",
                border: `1px solid ${activeSeason.color}20`,
                borderRadius: "1.5rem",
                background: "rgba(255,255,255,0.02)",
                overflow: "hidden",
              }}
            >
              {/* Hero image */}
              <div className="relative" style={{ height: "clamp(220px, 35vw, 400px)" }}>
                <img src={activeSeason.image} alt={activeSeason.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(30,15,18,0.85) 0%, rgba(30,15,18,0.3) 60%, transparent 100%)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,15,18,0.7) 0%, transparent 50%)" }} />
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, #800020, ${activeSeason.color}, #008080)` }} />

                {/* Season meta overlay */}
                <div className="absolute bottom-0 left-0 p-8 z-10">
                  <span
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-4"
                    style={{ background: `${activeSeason.color}18`, color: activeSeason.color, border: `1px solid ${activeSeason.color}35`, fontFamily: "DM Mono, monospace" }}
                  >
                    {activeSeason.icon} {activeSeason.label}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "Playfair Display, serif" }}>
                    {activeSeason.range}
                  </h3>
                  <p style={{ color: activeSeason.color }} className="text-sm font-medium mt-1 tracking-wider uppercase" style={{ fontFamily: "DM Mono, monospace", color: activeSeason.color }}>
                    {activeSeason.tagline}
                  </p>
                </div>

                {/* Weather badges */}
                <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
                  {Object.entries(activeSeason.weather).map(([k, v]) => (
                    <div key={k} className="text-right">
                      <span
                        className="inline-block text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg"
                        style={{ background: "rgba(30,15,18,0.8)", color: activeSeason.color, border: `1px solid ${activeSeason.color}25`, backdropFilter: "blur(8px)", fontFamily: "DM Mono, monospace" }}
                      >
                        {k}: <span className="text-white">{v}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content below image */}
              <div className="p-8 md:p-10">
                {/* Overview */}
                <p className="text-white/60 text-base leading-relaxed font-light mb-10 max-w-3xl">
                  {activeSeason.overview}
                </p>

                {/* Highlights grid */}
                <h4 className="text-white font-semibold text-lg mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
                  ✦ Season Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                  {activeSeason.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: `${activeSeason.color}06`,
                        border: `1px solid ${activeSeason.color}18`,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = `${activeSeason.color}35`; e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,0,0,0.3)`; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = `${activeSeason.color}18`; e.currentTarget.style.boxShadow = "none"; }}
                    >
                      <div className="text-2xl mb-3">{h.icon}</div>
                      <div className="font-semibold text-sm mb-2" style={{ color: activeSeason.color, fontFamily: "Playfair Display, serif" }}>{h.title}</div>
                      <div className="text-white/45 text-xs leading-relaxed font-light">{h.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Tips + Festivals row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pro Tips */}
                  <div className="p-6 rounded-2xl" style={{ background: "rgba(128,0,32,0.07)", border: "1px solid rgba(128,0,32,0.15)" }}>
                    <div className="text-white/50 text-[10px] uppercase tracking-widest mb-4 font-bold" style={{ fontFamily: "DM Mono, monospace" }}>
                      💡 Pro Tips for This Season
                    </div>
                    {activeSeason.tips.map((t, i) => (
                      <div key={i} className="flex gap-3 mb-3 last:mb-0">
                        <span style={{ color: activeSeason.color, fontSize: "0.65rem", marginTop: "0.2rem", flexShrink: 0 }}>◆</span>
                        <span className="text-white/55 text-sm leading-relaxed font-light">{t}</span>
                      </div>
                    ))}
                  </div>

                  {/* Festivals */}
                  <div className="p-6 rounded-2xl" style={{ background: `${activeSeason.color}06`, border: `1px solid ${activeSeason.color}18` }}>
                    <div className="text-white/50 text-[10px] uppercase tracking-widest mb-4 font-bold" style={{ fontFamily: "DM Mono, monospace" }}>
                      🎉 Festivals This Season
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeSeason.festivals.map((f, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium px-3 py-1.5 rounded-full"
                          style={{ background: `${activeSeason.color}15`, color: activeSeason.color, border: `1px solid ${activeSeason.color}25` }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── REGION-BY-REGION GUIDE ── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="badge-maroon mb-4 inline-flex">Region Guide</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3" style={{ fontFamily: "Playfair Display, serif" }}>
                Best Time by <span className="text-gold-shimmer">Region</span>
              </h2>
              <div className="section-divider" />
              <p className="text-white/40 text-sm mt-5 max-w-xl mx-auto leading-relaxed font-light">
                Gujarat spans desert, coast, forest, and hill station — each region has its own ideal visiting window.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regionGuide.map((r, i) => (
              <Reveal key={r.region} delay={i * 80}>
                <div
                  className="p-6 rounded-2xl h-full transition-all duration-400 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${r.color}30`; e.currentTarget.style.background = `${r.color}06`; e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.25)`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.025)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{r.icon}</span>
                    <h3 className="text-white font-bold text-base" style={{ fontFamily: "Playfair Display, serif" }}>{r.region}</h3>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md" style={{ background: `${r.color}15`, color: r.color, border: `1px solid ${r.color}25`, fontFamily: "DM Mono, monospace" }}>
                        ✓ Best
                      </span>
                      <span className="text-white/65 text-xs font-medium">{r.bestMonths}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md" style={{ background: "rgba(239,68,68,0.1)", color: "#f87171", border: "1px solid rgba(239,68,68,0.2)", fontFamily: "DM Mono, monospace" }}>
                        ✗ Avoid
                      </span>
                      <span className="text-white/45 text-xs">{r.avoid}</span>
                    </div>
                  </div>
                  <p className="text-white/35 text-xs leading-relaxed font-light italic">{r.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MONTH-BY-MONTH CALENDAR ── */}
      <section className="py-20 border-t border-white/5" style={{ background: "linear-gradient(to bottom, transparent, rgba(128,0,32,0.05), transparent)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="badge-teal mb-4 inline-flex">Month by Month</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3" style={{ fontFamily: "Playfair Display, serif" }}>
                The Full <span className="text-gold-shimmer">Calendar</span>
              </h2>
              <div className="section-divider" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { month: "Jan", season: "Peak", color: "#4dd9d9", rating: 5, note: "Rann Utsav, Uttarayan" },
              { month: "Feb", season: "Peak", color: "#4dd9d9", rating: 5, note: "Rann Utsav ends, cool" },
              { month: "Mar", season: "Warm", color: "#fbbf24", rating: 4, note: "Holi, Gir open" },
              { month: "Apr", season: "Warm", color: "#fbbf24", rating: 3, note: "Hot, less crowd" },
              { month: "May", season: "Hot", color: "#f97316", rating: 2, note: "Very hot, Gir closing" },
              { month: "Jun", season: "Pre-Monsoon", color: "#f97316", rating: 2, note: "Humid, rains start" },
              { month: "Jul", season: "Monsoon", color: "#4ade80", rating: 3, note: "Saputara beautiful" },
              { month: "Aug", season: "Monsoon", color: "#4ade80", rating: 3, note: "Green, waterfalls" },
              { month: "Sep", season: "Late Monsoon", color: "#4ade80", rating: 3, note: "Rains easing" },
              { month: "Oct", season: "Transition", color: "#C5A880", rating: 4, note: "Navratri, Diwali" },
              { month: "Nov", season: "Peak", color: "#4dd9d9", rating: 5, note: "Rann Utsav begins" },
              { month: "Dec", season: "Peak", color: "#4dd9d9", rating: 5, note: "Best weather, Gir" },
            ].map((m, i) => (
              <Reveal key={m.month} delay={i * 40}>
                <div
                  className="p-4 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `${m.color}08`,
                    border: `1px solid ${m.color}20`,
                  }}
                >
                  <div className="font-bold text-lg mb-1" style={{ color: m.color, fontFamily: "Playfair Display, serif" }}>{m.month}</div>
                  <div className="text-[9px] uppercase tracking-widest text-white/30 mb-2" style={{ fontFamily: "DM Mono, monospace" }}>{m.season}</div>
                  <div className="flex justify-center gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div key={j} className="w-2 h-2 rounded-full" style={{ background: j < m.rating ? m.color : "rgba(255,255,255,0.1)" }} />
                    ))}
                  </div>
                  <div className="text-white/30 text-[9px] leading-relaxed font-light">{m.note}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {[
              { dots: 5, label: "Excellent", color: "#4dd9d9" },
              { dots: 4, label: "Very Good", color: "#fbbf24" },
              { dots: 3, label: "Good", color: "#4ade80" },
              { dots: 2, label: "Fair", color: "#f97316" },
            ].map(l => (
              <div key={l.label} className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="w-2 h-2 rounded-full" style={{ background: j < l.dots ? l.color : "rgba(255,255,255,0.1)" }} />
                  ))}
                </div>
                <span className="text-white/35 text-xs" style={{ fontFamily: "DM Mono, monospace" }}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO REACH ── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="badge-gold mb-4 inline-flex">Getting There</span>
              <h2 className="text-4xl font-bold text-white mt-3" style={{ fontFamily: "Playfair Display, serif" }}>
                How to Reach <span className="text-gold-shimmer">Gujarat</span>
              </h2>
              <div className="section-divider" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "✈️", mode: "By Air",
                color: "#4dd9d9",
                points: [
                  "Sardar Vallabhbhai Patel International Airport, Ahmedabad — direct flights from 30+ Indian cities and Dubai, London, Singapore.",
                  "Secondary airports: Surat, Vadodara, Rajkot, Bhavnagar, Jamnagar, and Bhuj (for Kutch).",
                  "Peak season fares (Nov–Feb) can be 2× higher — book 3 months ahead.",
                  "Budget airlines: IndiGo, Air India Express, SpiceJet cover major routes.",
                ],
              },
              {
                icon: "🚆", mode: "By Train",
                color: "#fbbf24",
                points: [
                  "Ahmedabad is a major rail junction connected to Mumbai (6–7 hrs), Delhi (12–15 hrs), and all major Indian cities.",
                  "Rajkot, Surat, Vadodara, and Bhuj are also connected by rail.",
                  "Premium trains: Shatabdi, Duronto, Tejas, and Vande Bharat Express serve Gujarat.",
                  "Book via IRCTC at least 60 days ahead for peak season travel (Oct–Feb).",
                ],
              },
              {
                icon: "🚌", mode: "By Road",
                color: "#4ade80",
                points: [
                  "National Highway 48 connects Mumbai to Ahmedabad (550 km, ~8 hrs) — well-maintained 6-lane expressway.",
                  "State transport buses (GSRTC) cover all major towns reliably and affordably.",
                  "Self-drive road trips are excellent — Gujarat has well-maintained roads and abundant fuel stations.",
                  "The Ahmedabad–Vadodara Expressway is India's fastest intercity road — a stunning 90-minute drive.",
                ],
              },
            ].map((t, i) => (
              <Reveal key={t.mode} delay={i * 100}>
                <div
                  className="p-7 rounded-2xl h-full"
                  style={{ background: `${t.color}06`, border: `1px solid ${t.color}20` }}
                >
                  <span className="text-4xl block mb-4">{t.icon}</span>
                  <h3 className="font-bold text-xl text-white mb-5" style={{ fontFamily: "Playfair Display, serif" }}>{t.mode}</h3>
                  <ul className="space-y-3">
                    {t.points.map((p, j) => (
                      <li key={j} className="flex gap-2.5">
                        <span style={{ color: t.color, flexShrink: 0, fontSize: "0.65rem", marginTop: "0.25rem" }}>◆</span>
                        <span className="text-white/50 text-sm leading-relaxed font-light">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-3xl p-12 md:p-16"
              style={{
                background: "linear-gradient(135deg, rgba(128,0,32,0.15) 0%, rgba(30,15,18,0.8) 50%, rgba(197,168,128,0.08) 100%)",
                border: "1px solid rgba(197,168,128,0.12)",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, #800020, #C5A880, #008080, transparent)" }} />
              <div className="absolute top-5 left-5 w-10 h-10 border-t border-l rounded-tl-xl" style={{ borderColor: "rgba(197,168,128,0.2)" }} />
              <div className="absolute bottom-5 right-5 w-10 h-10 border-b border-r rounded-br-xl" style={{ borderColor: "rgba(197,168,128,0.2)" }} />

              <div className="text-4xl mb-5">✦</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                Ready to Plan<br /><span className="text-gold-shimmer">Your Gujarat Journey?</span>
              </h2>
              <p className="text-white/45 text-sm md:text-base mb-10 leading-relaxed font-light max-w-xl mx-auto">
                Now that you know the best time to visit, start exploring everything Gujarat has to offer —
                temples, beaches, wildlife, heritage and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/destinations")}
                  className="group inline-flex items-center gap-2.5 text-white font-semibold text-sm py-4 px-10 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg, #800020, #C5A880)",
                    border: "1px solid rgba(197,168,128,0.5)",
                    boxShadow: "0 8px 28px rgba(197,168,128,0.2)",
                  }}
                >
                  Start Exploring
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  onClick={() => navigate("/heritage")}
                  className="group inline-flex items-center gap-2.5 font-semibold text-sm py-4 px-10 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
                  style={{ color: "#C5A880", border: "1px solid rgba(197,168,128,0.3)" }}
                >
                  Explore Heritage
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
