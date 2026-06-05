/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BLOG PAGE — Gujarat Tourism Travel Logs
   Luxury Editorial Magazine Layout
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import { useRef, useEffect, useState } from "react";
import { featuredPost, feedPosts, editorialStats } from "../data/blogData";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   REVEAL ANIMATION COMPONENT
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
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.85s ease ${delay}ms, transform 0.85s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TAG BADGE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function TagBadge({ tag, color = "#C5A880" }) {
  return (
    <span
      className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border"
      style={{
        color: color,
        background: `${color}15`,
        borderColor: `${color}30`,
        fontFamily: "DM Mono, monospace",
      }}
    >
      {tag}
    </span>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FEATURED HERO POST
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function FeaturedHero({ post }) {
  return (
    <Reveal delay={100}>
      <div
        id="blog-featured-post"
        className="relative w-full overflow-hidden rounded-3xl mb-16 shadow-2xl border border-white/5 group"
        style={{ minHeight: "50vh", aspectRatio: "21/9" }}
      >
        {/* Background image */}
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[2s] ease-out group-hover:scale-105"
          loading="eager"
        />

        {/* Velvet vignette layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0406] via-[#0A0406]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0406]/80 via-[#0A0406]/20 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 0% 100%, rgba(10,4,6,0.95) 0%, rgba(10,4,6,0.4) 50%, transparent 80%)",
          }}
        />

        {/* Decorative issue label top-right */}
        <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
          <span
            className="text-white/25 text-[10px] uppercase tracking-[0.3em]"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            Issue No. 01 · 2026
          </span>
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12 lg:p-16 max-w-4xl">
          {/* Tag + Location */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <TagBadge tag={post.tag} color={post.tagColor} />
            <span
              className="text-white/35 text-[10px] tracking-widest uppercase"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              📍 {post.location}
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-5 tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed font-light mb-8 max-w-2xl">
            {post.fullExcerpt}
          </p>

          {/* Author + Meta Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="w-10 h-10 rounded-full object-cover border border-white/10 flex-shrink-0"
              />
              <div>
                <div
                  className="text-white text-sm font-semibold tracking-wide"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {post.author}
                </div>
                <div
                  className="text-white/35 text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  {post.authorRole}
                </div>
              </div>
            </div>

            <div
              className="flex items-center gap-5 text-white/35 text-[11px] tracking-widest"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              <span>📅 {post.date}</span>
              <span>⏱ {post.readTime}</span>
              <span>👁 {post.views} views</span>
            </div>
          </div>

          {/* Read button */}
          <div className="mt-7">
            <button
              id="blog-featured-read-btn"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold tracking-wide border transition-all duration-300 cursor-pointer focus:outline-none group/btn"
              style={{
                background: "linear-gradient(135deg, #800020, #C5A880)",
                border: "1px solid rgba(197,168,128,0.4)",
                color: "#fff",
                fontFamily: "Playfair Display, serif",
                boxShadow: "0 8px 32px rgba(197,168,128,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #C5A880, #800020)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(197,168,128,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #800020, #C5A880)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(197,168,128,0.2)";
              }}
            >
              Read Full Chronicle
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Decorative bottom divider glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(197,168,128,0.4), transparent)" }}
        />
      </div>
    </Reveal>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FEED ARTICLE CARD
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function ArticleCard({ post, index }) {
  return (
    <Reveal delay={index * 120}>
      <article
        id={`blog-card-${post.id}`}
        className="bg-[#150A0C] border border-white/5 rounded-2xl flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:border-[#C5A880]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden group h-full"
      >
        {/* Card Image */}
        <div className="relative w-full h-52 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#150A0C] via-[#150A0C]/30 to-transparent" />

          {/* Tag on image */}
          <div className="absolute top-4 left-4">
            <TagBadge tag={post.tag} color={post.tagColor} />
          </div>

          {/* Views on image */}
          <div
            className="absolute bottom-4 right-4 text-white/40 text-[10px] tracking-widest"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            👁 {post.views}
          </div>
        </div>

        {/* Card Body */}
        <div className="flex flex-col flex-1 p-6">
          {/* Location */}
          <span
            className="text-white/30 text-[10px] tracking-widest uppercase mb-3 block"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            📍 {post.location}
          </span>

          {/* Title */}
          <h3
            className="text-white text-xl font-bold leading-snug mb-3 tracking-wide group-hover:text-[#C5A880] transition-colors duration-300"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-white/50 text-sm leading-relaxed font-light flex-1 mb-6">
            {post.excerpt}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-white/5 mb-5" />

          {/* Author row */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="w-8 h-8 rounded-full object-cover border border-white/10 flex-shrink-0"
              />
              <div>
                <div
                  className="text-white/80 text-xs font-semibold"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {post.author}
                </div>
                <div
                  className="text-white/30 text-[10px] tracking-wider"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  {post.date}
                </div>
              </div>
            </div>

            <span
              className="text-[#C5A880]/60 text-[10px] tracking-widest"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Read More Footer */}
        <div
          className="px-6 pb-5"
        >
          <button
            id={`blog-read-btn-${post.id}`}
            className="w-full py-2.5 rounded-xl text-sm font-semibold tracking-wide border border-[#C5A880]/15 text-[#C5A880]/70 hover:text-[#C5A880] hover:border-[#C5A880]/40 hover:bg-[#C5A880]/5 transition-all duration-300 cursor-pointer focus:outline-none flex items-center justify-center gap-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Read Article
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </article>
    </Reveal>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EDITORIAL STATS BAR
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function StatsBar({ stats }) {
  return (
    <Reveal delay={200}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {stats.map((stat, i) => (
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
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BLOG PAGE ROOT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Blog() {
  return (
    <div
      id="blog-page"
      className="page-enter min-h-screen"
      style={{ background: "#1E0F12", color: "#E2D4C9" }}
    >

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PAGE HERO HEADER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="blog-hero-header"
        className="relative pt-28 pb-14 px-6 overflow-hidden"
      >
        {/* Radial maroon glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(74,21,33,0.4) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Magazine label */}
          <Reveal delay={0}>
            <div className="flex items-center gap-4 mb-8">
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ background: "linear-gradient(90deg, transparent, #C5A880)" }}
              />
              <span
                className="text-[#C5A880] text-[10px] tracking-[0.4em] uppercase"
                style={{ fontFamily: "DM Mono, monospace" }}
              >
                Gujarat Tourism Editorial
              </span>
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ background: "linear-gradient(90deg, #C5A880, transparent)" }}
              />
            </div>
          </Reveal>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            {/* Left: Title block */}
            <Reveal delay={80} className="max-w-2xl">
              <div>
                {/* Outlined ghost word behind */}
                <div className="relative">
                  <div
                    className="text-[18vw] md:text-[8rem] font-black leading-none uppercase text-transparent select-none absolute top-1/2 -translate-y-1/2 -left-4 opacity-[0.04] pointer-events-none"
                    style={{
                      WebkitTextStroke: "2px #C5A880",
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    LOGS
                  </div>
                  <h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] relative z-10"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Travel{" "}
                    <span
                      className="italic font-light"
                      style={{ color: "#C5A880" }}
                    >
                      Logs
                    </span>
                  </h1>
                </div>
                <p
                  className="text-white/40 text-sm leading-relaxed font-light mt-4 max-w-md"
                >
                  Curated chronicles, immersive field dispatches and editorial essays by Gujarat's finest travel writers — told with depth, nuance, and wonder.
                </p>
              </div>
            </Reveal>

            {/* Right: Issue Info */}
            <Reveal delay={160}>
              <div
                className="flex flex-col items-start md:items-end gap-1 text-right"
                style={{ fontFamily: "DM Mono, monospace" }}
              >
                <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">
                  Current Issue
                </span>
                <span
                  className="text-[#C5A880] text-2xl font-bold"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Vol. IV · 2026
                </span>
                <span className="text-white/25 text-[10px] tracking-widest uppercase">
                  4 Articles · 22 min total read
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MAIN CONTENT AREA
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <main
        id="blog-main-content"
        className="max-w-7xl mx-auto px-6 pb-24"
        role="main"
      >

        {/* ── EDITORIAL STATS BAR ── */}
        <StatsBar stats={editorialStats} />

        {/* ── SECTION LABEL ── */}
        <Reveal delay={0}>
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-[#C5A880] text-[10px] tracking-[0.35em] uppercase"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              ✦ Cover Story
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
        </Reveal>

        {/* ── FEATURED HERO POST ── */}
        <FeaturedHero post={featuredPost} />

        {/* ── SECTION LABEL ── */}
        <Reveal delay={0}>
          <div className="flex items-center gap-4 mb-10">
            <span
              className="text-[#C5A880] text-[10px] tracking-[0.35em] uppercase"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              ✦ From the Field
            </span>
            <div className="flex-1 h-px bg-white/5" />
            <span
              className="text-white/20 text-[10px] tracking-widest"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              {feedPosts.length} Articles
            </span>
          </div>
        </Reveal>

        {/* ── DESKTOP GRID / MOBILE SLIDER ── */}

        {/* Desktop: 3-column grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedPosts.map((post, index) => (
            <ArticleCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Mobile: horizontal snap slider */}
        <div
          id="blog-mobile-slider"
          className="sm:hidden flex overflow-x-auto snap-x snap-mandatory pb-6 w-full gap-4 no-scrollbar"
        >
          {feedPosts.map((post) => (
            <div
              key={post.id}
              className="min-w-[300px] snap-center flex-shrink-0 h-full"
            >
              <article
                id={`blog-mobile-card-${post.id}`}
                className="bg-[#150A0C] border border-white/5 rounded-2xl flex flex-col justify-between transition-all duration-500 overflow-hidden group h-full"
              >
                {/* Card Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150A0C] via-[#150A0C]/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <TagBadge tag={post.tag} color={post.tagColor} />
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-5">
                  <span
                    className="text-white/30 text-[9px] tracking-widest uppercase mb-2 block"
                    style={{ fontFamily: "DM Mono, monospace" }}
                  >
                    📍 {post.location}
                  </span>
                  <h3
                    className="text-white text-lg font-bold leading-snug mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-white/45 text-xs leading-relaxed font-light flex-1 mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-7 h-7 rounded-full object-cover border border-white/10"
                      />
                      <span
                        className="text-white/60 text-xs"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {post.author}
                      </span>
                    </div>
                    <span
                      className="text-[#C5A880]/50 text-[10px] tracking-widest"
                      style={{ fontFamily: "DM Mono, monospace" }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            EXPLORE BY CATEGORY — Editorial Mosaic
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <Reveal delay={80} className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <span
              className="text-[#C5A880] text-[10px] tracking-[0.35em] uppercase"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              ✦ Explore by Category
            </span>
            <div className="flex-1 h-px bg-white/5" />
            <span
              className="text-white/20 text-[10px] tracking-widest"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              4 Themes · 42 Stories
            </span>
          </div>
        </Reveal>

        {/* Asymmetric mosaic: large left tile + 3 right tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

          {/* ── Large featured category tile (Exploration) ── */}
          <Reveal delay={0}>
            <div
              id="blog-cat-exploration"
              className="relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5 hover:border-[#C5A880]/30 transition-all duration-500 hover:shadow-[0_24px_60px_rgba(0,0,0,0.7)]"
              style={{ minHeight: "420px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80"
                alt="Exploration"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Deep vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0406] via-[#0A0406]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0406]/60 to-transparent" />

              {/* Hover glow tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(197,168,128,0.12) 0%, transparent 70%)" }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <TagBadge tag="EXPLORATION" color="#C5A880" />
                <h3
                  className="text-white text-3xl md:text-4xl font-bold mt-3 mb-2 leading-tight group-hover:text-[#C5A880] transition-colors duration-400"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Into the Wild &amp; Unknown
                </h3>
                <p className="text-white/50 text-sm font-light mb-5 max-w-xs">
                  Salt deserts, mountain shrines, and off-map trails — Gujarat's most daring expeditions.
                </p>
                <div className="flex items-center gap-4">
                  <span
                    className="text-white/30 text-[10px] tracking-widest uppercase"
                    style={{ fontFamily: "DM Mono, monospace" }}
                  >
                    14 Articles
                  </span>
                  {/* Animated underline */}
                  <div
                    className="h-px flex-1 max-w-[80px] transition-all duration-500 group-hover:max-w-[160px]"
                    style={{ background: "linear-gradient(90deg, #C5A880, transparent)" }}
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Right column: 3 stacked tiles ── */}
          <div className="flex flex-col gap-5">

            {/* Cuisine tile */}
            <Reveal delay={100}>
              <div
                id="blog-cat-cuisine"
                className="relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-[#E08040]/30 transition-all duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
                style={{ minHeight: "124px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=80"
                  alt="Cuisine"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "brightness(0.55)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0406]/85 via-[#0A0406]/40 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at 10% 50%, rgba(224,128,64,0.15) 0%, transparent 60%)" }}
                />
                <div className="absolute inset-0 p-6 flex items-center z-10 gap-6">
                  <div className="flex-1">
                    <TagBadge tag="CUISINE" color="#E08040" />
                    <h3
                      className="text-white text-xl font-bold mt-2 leading-tight group-hover:text-[#E08040] transition-colors duration-300"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Flavours of Gujarat
                    </h3>
                    <p className="text-white/35 text-[10px] tracking-widest mt-1 uppercase" style={{ fontFamily: "DM Mono, monospace" }}>
                      11 Articles
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-white/20 group-hover:text-[#E08040] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Reveal>

            {/* Heritage tile */}
            <Reveal delay={180}>
              <div
                id="blog-cat-heritage"
                className="relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-[#7B9EC8]/30 transition-all duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
                style={{ minHeight: "124px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80"
                  alt="Heritage"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "brightness(0.5)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0406]/85 via-[#0A0406]/40 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at 10% 50%, rgba(123,158,200,0.15) 0%, transparent 60%)" }}
                />
                <div className="absolute inset-0 p-6 flex items-center z-10 gap-6">
                  <div className="flex-1">
                    <TagBadge tag="HERITAGE" color="#7B9EC8" />
                    <h3
                      className="text-white text-xl font-bold mt-2 leading-tight group-hover:text-[#7B9EC8] transition-colors duration-300"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Lost Cities &amp; Ancient Ports
                    </h3>
                    <p className="text-white/35 text-[10px] tracking-widest mt-1 uppercase" style={{ fontFamily: "DM Mono, monospace" }}>
                      9 Articles
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-white/20 group-hover:text-[#7B9EC8] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Reveal>

            {/* Wildlife tile */}
            <Reveal delay={260}>
              <div
                id="blog-cat-wildlife"
                className="relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-[#5DBB63]/30 transition-all duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
                style={{ minHeight: "124px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1615959189197-48400dc26426?auto=format&fit=crop&w=700&q=80"
                  alt="Wildlife"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "brightness(0.48)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0406]/85 via-[#0A0406]/40 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at 10% 50%, rgba(93,187,99,0.15) 0%, transparent 60%)" }}
                />
                <div className="absolute inset-0 p-6 flex items-center z-10 gap-6">
                  <div className="flex-1">
                    <TagBadge tag="WILDLIFE" color="#5DBB63" />
                    <h3
                      className="text-white text-xl font-bold mt-2 leading-tight group-hover:text-[#5DBB63] transition-colors duration-300"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Sanctuaries &amp; Safari Trails
                    </h3>
                    <p className="text-white/35 text-[10px] tracking-widest mt-1 uppercase" style={{ fontFamily: "DM Mono, monospace" }}>
                      8 Articles
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-white/20 group-hover:text-[#5DBB63] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Reveal>

          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            GUJARAT IN NUMBERS — Marquee Ticker
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <Reveal delay={100} className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-[#C5A880] text-[10px] tracking-[0.35em] uppercase flex-shrink-0"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              ✦ Gujarat in Numbers
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          {/* Marquee container */}
          <div
            className="relative overflow-hidden rounded-2xl border border-white/5 py-6"
            style={{ background: "#150A0C" }}
          >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg, #150A0C, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(270deg, #150A0C, transparent)" }} />

            <div
              className="flex gap-0 animate-[marqueeScroll_28s_linear_infinite]"
              style={{ width: "max-content" }}
            >
              {[
                { stat: "1,600 km", label: "Coastline on Arabian Sea" },
                { stat: "5,000+", label: "Years of Civilisation" },
                { stat: "6", label: "UNESCO World Heritage Sites" },
                { stat: "600+", label: "Asiatic Lions in Gir" },
                { stat: "40+", label: "Pristine Beaches" },
                { stat: "3", label: "Jyotirlingas in Gujarat" },
                { stat: "900+", label: "Jain Temples on Palitana" },
                { stat: "7,500 km²", label: "Great Rann of Kutch" },
                { stat: "55+", label: "Wildlife Sanctuaries" },
                { stat: "33", label: "Districts to Explore" },
                /* Duplicate set for seamless loop */
                { stat: "1,600 km", label: "Coastline on Arabian Sea" },
                { stat: "5,000+", label: "Years of Civilisation" },
                { stat: "6", label: "UNESCO World Heritage Sites" },
                { stat: "600+", label: "Asiatic Lions in Gir" },
                { stat: "40+", label: "Pristine Beaches" },
                { stat: "3", label: "Jyotirlingas in Gujarat" },
                { stat: "900+", label: "Jain Temples on Palitana" },
                { stat: "7,500 km²", label: "Great Rann of Kutch" },
                { stat: "55+", label: "Wildlife Sanctuaries" },
                { stat: "33", label: "Districts to Explore" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-0 flex-shrink-0"
                >
                  <div className="flex items-center gap-3 px-8">
                    <span
                      className="text-xl md:text-2xl font-bold text-[#C5A880]"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {item.stat}
                    </span>
                    <span
                      className="text-white/30 text-xs tracking-widest uppercase"
                      style={{ fontFamily: "DM Mono, monospace" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <span className="text-[#C5A880]/20 text-lg select-none">✦</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <style>{`
          @keyframes marqueeScroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </main>
    </div>
  );
}
