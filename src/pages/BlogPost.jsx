import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { featuredPost, feedPosts } from "../data/blogData";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
    
    // Find post
    const allPosts = [featuredPost, ...feedPosts];
    const foundPost = allPosts.find((p) => p.id === parseInt(id));
    
    if (foundPost) {
      setPost(foundPost);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1E0F12] text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
          <button 
            onClick={() => navigate("/blog")}
            className="text-[#C5A880] hover:text-white transition-colors"
          >
            &larr; Back to Travel Logs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1E0F12] text-[#E2D4C9] pb-24 font-light">
      {/* ── HERO IMAGE ── */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F12] via-[#1E0F12]/60 to-transparent" />
        
        {/* Back Button */}
        <button 
          onClick={() => navigate("/blog")}
          className="absolute top-8 left-6 md:left-12 z-20 flex items-center gap-2 text-white/70 hover:text-white transition-colors backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full border border-white/10"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm font-medium tracking-wide">Back</span>
        </button>
      </div>

      {/* ── ARTICLE HEADER ── */}
      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10 text-center">
        <div className="inline-block bg-[#C5A880]/10 border border-[#C5A880]/30 text-[#C5A880] px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md">
          {post.tag}
        </div>
        
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 drop-shadow-lg"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50 font-mono tracking-widest uppercase border-y border-white/10 py-6 mb-12 backdrop-blur-sm bg-[#150A0C]/50 rounded-2xl">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C5A880]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C5A880]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {post.readTime}
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C5A880]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {post.location}
          </span>
        </div>
      </div>

      {/* ── ARTICLE CONTENT ── */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="prose prose-invert prose-lg max-w-none text-white/70">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 italic" style={{ fontFamily: "Playfair Display, serif" }}>
            {post.fullExcerpt || post.excerpt}
          </p>
          
          <div className="w-16 h-px bg-[#C5A880]/50 mb-10" />
          
          {/* Split content by newlines and map to paragraphs */}
          {post.content && post.content.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* ── AUTHOR SECTION ── */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center md:items-start gap-6 bg-[#150A0C] p-8 rounded-3xl">
          <img 
            src={post.authorAvatar} 
            alt={post.author} 
            className="w-20 h-20 rounded-full object-cover border-2 border-[#C5A880]/30"
          />
          <div className="text-center md:text-left flex-1">
            <div className="text-sm text-[#C5A880] font-mono tracking-widest uppercase mb-1">Written By</div>
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "Playfair Display, serif" }}>{post.author}</h3>
            <p className="text-white/50 text-sm mb-4">{post.authorRole}</p>
            <p className="text-white/60 text-sm leading-relaxed">
              An explorer of stories, culture, and untold histories across Gujarat. Documenting the intersection of heritage, nature, and modern Indian narratives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
