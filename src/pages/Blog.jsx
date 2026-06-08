import React from "react";
import { Link } from "react-router-dom";
import { featuredPost, feedPosts } from "../data/blogData";

export default function Blog() {
  const allPosts = [featuredPost, ...feedPosts];

  return (
    <div id="blog-page" className="page-enter min-h-screen pb-24" style={{ background: "#1E0F12", color: "#E2D4C9" }}>
      {/* ── HERO SECTION ── */}
      <section className="pt-28 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 
          className="text-5xl md:text-6xl font-bold text-white mb-6"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Travel <span className="italic text-[#C5A880] font-light">Logs</span>
        </h1>
        <p className="text-white/60 text-lg leading-relaxed font-light">
          Curated chronicles, immersive field dispatches and editorial essays by Gujarat's finest travel writers.
        </p>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post) => (
            <Link to={`/blog/${post.id}`} target="_blank" rel="noopener noreferrer" key={post.id}>
              <article 
                className="bg-[#150A0C] border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-[#C5A880]/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl h-full"
              >
              <div className="relative w-full h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="text-[10px] tracking-widest text-[#C5A880] uppercase" style={{ fontFamily: "DM Mono, monospace" }}>
                    {post.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/40 text-[10px] uppercase tracking-widest" style={{ fontFamily: "DM Mono, monospace" }}>
                    {post.date}
                  </span>
                  <span className="text-[#C5A880]/60 text-[10px] tracking-widest" style={{ fontFamily: "DM Mono, monospace" }}>
                    {post.readTime}
                  </span>
                </div>
                
                <h3 
                  className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#C5A880] transition-colors"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {post.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1 font-light">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-5 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <img 
                      src={post.authorAvatar} 
                      alt={post.author}
                      className="w-8 h-8 rounded-full border border-white/20 object-cover"
                    />
                    <div>
                      <div className="text-white/90 text-xs font-semibold tracking-wide" style={{ fontFamily: "Playfair Display, serif" }}>
                        {post.author}
                      </div>
                      <div className="text-white/40 text-[9px] uppercase tracking-widest mt-0.5" style={{ fontFamily: "DM Mono, monospace" }}>
                        {post.authorRole}
                      </div>
                    </div>
                  </div>
                  
                  <button className="text-[#C5A880] p-2 hover:bg-[#C5A880]/10 rounded-full transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
