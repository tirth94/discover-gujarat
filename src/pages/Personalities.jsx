import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", page: "home" },
  { label: "Temples", page: "temples" },
  { label: "Beaches", page: "beaches" },
  { label: "Forest", page: "forest" },
  { label: "Heritage", page: "heritage" },
  { label: "Personalities", page: "personalities" },
];

const personalities = [
  {
    id: 1,
    name: "Mahatma Gandhi",
    role: "Father of the Nation",
    lifespan: "1869 – 1948",
    birthplace: "Porbandar, Gujarat",
    shortDesc: "The global pioneer of Satyagraha and non-violence who fractured colonial rules with moral strength.",
    desc: "The global icon of truth, perseverance, and non-violence who redefined modern political resistance. Born on the coastal soil of Porbandar, his philosophy of Satyagraha didn't just liberate India from colonial rule, but also became a timeless blueprint for civil rights movements across the globe, inspiring leaders like Martin Luther King Jr. and Nelson Mandela.",
    vision: "To achieve absolute freedom through self-reliance, moral truth, and communal harmony.",
    tags: ["Freedom Fighter", "Global Icon", "Philosopher"],
    achievements: ["Led the historic 241-mile Dandi Salt March", "Established Sabarmati & Navajivan Ashrams", "Pioneered the philosophy of Ahimsa (Non-violence)"],
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Sardar Vallabhbhai Patel",
    role: "Iron Man of India",
    lifespan: "1875 – 1950",
    birthplace: "Nadiad, Gujarat",
    shortDesc: "The monumental unifier who structurally integrated 562 fragmented princely states into one nation.",
    desc: "The monumental statesman and unifier who architected the geopolitical map of modern India. Facing the colossal challenge of a fragmented nation post-independence, he used a masterclass mix of iron willpower, strategic diplomacy, and brilliant statesmanship to seamlessly integrate 562 autonomous princely states into a single sovereign democratic union.",
    vision: "A politically seamless, consolidated, and administratively strong United India.",
    tags: ["Statesman", "Unifier", "Iron Man"],
    achievements: ["Successfully integrated 562 princely states", "Spearheaded the Bardoli Satyagraha", "Established the modern All India Administrative Services"],
    image: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Vikram Sarabhai",
    role: "Father of Space Program",
    lifespan: "1919 – 1971",
    birthplace: "Ahmedabad, Gujarat",
    shortDesc: "The cosmic visionary who founded ISRO and established advanced scientific institutions from scratch.",
    desc: "An extraordinary visionary, physicist, and industrialist who recognized that a developing nation like India must deploy advanced space technology to solve real-world problems. He didn't just dream of the stars; he established the foundations of ISRO, built world-class institutes from scratch, and put India on the global technological map through sheer scientific leadership.",
    vision: "Deploying cutting-edge space research and technology for national development and social upliftment.",
    tags: ["Scientist", "Space Pioneer", "Visionary"],
    achievements: ["Founded Indian Space Research Organisation (ISRO)", "Established Physical Research Laboratory (PRL)", "Co-founded IIM Ahmedabad & ATIRA"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Dhirubhai Ambani",
    role: "Founder, Reliance Industries",
    lifespan: "1932 – 2002",
    birthplace: "Chorwad, Junagadh",
    shortDesc: "The ultimate business tycoon who revolutionized the Indian stock market and corporate ecosystem.",
    desc: "The ultimate trailblazer of Indian capitalism who broke traditional corporate monopolies and rewritten the rules of business. Starting from a modest textile trading setup, he pioneered the retail equity cult in India, inviting millions of middle-class citizens to become shareholders, and built an industrial empire that reshaped global manufacturing landscapes.",
    vision: "To democratize wealth creation and build world-scale enterprises driven by Indian talent.",
    tags: ["Industrialist", "Business Tycoon", "Pioneer"],
    achievements: ["Pioneered the equity cult & stock market culture in India", "Built the world's largest grassroots refinery at Jamnagar", "Posthumously honored with the prestigious Padma Vibhushan"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Personalities({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    if (selectedPerson) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedPerson]);

  const filteredPersonalities = personalities.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.birthplace.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // 🎨 FIXED COLOR THEME: Deep Museum Charcoal Maroon Blend (#120B0C)
    <div className="bg-[#120B0C] min-h-screen text-[#E2D4C9] pb-24 relative selection:bg-[#C5A880]/30 overflow-x-hidden flex flex-col lg:flex-row">
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
        .no-scrollbar { -ms-overflow-style: none !important; scrollbar-width: none !important; }
        body::-webkit-scrollbar { width: 6px; }
        body::-webkit-scrollbar-track { background: #120B0C; }
        body::-webkit-scrollbar-thumb { background: #3A2326; border-radius: 10px; }
      `}</style>

      {/* CULTURAL FLOATING SIDEBAR NAVIGATION */}
      <aside className="w-full lg:w-64 bg-[#1A1012] border-b lg:border-b-0 lg:border-r border-white/5 lg:fixed lg:h-screen z-30 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#800020] to-[#C5A880] flex items-center justify-center font-bold text-white shadow-md font-serif text-lg">
              G
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#E2D4C9] text-md font-bold tracking-wide" style={{ fontFamily: "Playfair Display, serif" }}>
                Gujarat
              </span>
              <span className="text-[9px] text-white/40 uppercase tracking-widest font-mono mt-0.5">Tourism</span>
            </div>
          </div>

          <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-3 lg:pb-0">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate && onNavigate(link.page)}
                style={{ fontFamily: "Playfair Display, serif" }}
                className={`px-4 py-2.5 text-sm font-medium tracking-wide rounded-xl transition-all whitespace-nowrap cursor-pointer text-left w-full ${
                  link.page === "personalities"
                    ? "text-[#C5A880] bg-[#C5A880]/10 border border-[#C5A880]/20"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="hidden lg:block pt-6 border-t border-white/5">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Chronicle Exhibit v2.0</p>
        </div>
      </aside>

      {/* MAIN VIEW */}
      <main className="flex-1 lg:ml-64 transition-all duration-300">
        
        {/* HERO HEADER */}
        <section className="relative min-h-[40vh] flex flex-col items-center justify-center pt-16 pb-12 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(#4A1521_0%,transparentTracking_70%)] opacity-30 pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center z-10 w-full">
            <span className="text-[#C5A880] font-mono tracking-[0.25em] text-[10px] font-bold uppercase bg-[#C5A880]/5 px-4 py-1.5 rounded-full border border-[#C5A880]/10">
              Biographical Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#E2D4C9] via-[#C5A880] to-white/60" style={{ fontFamily: "Playfair Display, serif" }}>
              Legends of Gujarat
            </h1>
            
            <div className="max-w-xl mx-auto mt-6 relative">
              <input 
                type="text"
                placeholder="Search historical archives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontFamily: "Playfair Display, serif" }}
                className="w-full bg-[#1A1012] border border-white/10 rounded-xl pl-12 pr-6 py-3.5 text-[#E2D4C9] placeholder-white/30 focus:outline-none focus:border-[#C5A880] transition-all duration-300 text-sm tracking-wide shadow-inner"
              />
              <span className="absolute left-4 top-4 text-white/30">🔍</span>
            </div>
          </div>
        </section>

        {/* CARDS GRID */}
        <section className="max-w-7xl mx-auto px-6 mt-2 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPersonalities.map((person) => (
              <div 
                key={person.id}
                onMouseEnter={() => setHoveredCardId(person.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="bg-[#1A1012]/80 border border-white/5 rounded-2xl p-5 min-h-[260px] flex flex-col justify-between relative transition-all duration-500 shadow-lg"
              >
                <div className="w-full h-32 rounded-xl overflow-hidden relative mb-4 bg-[#120B0C] border border-white/5">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover opacity-70 sepia-[20%] group-hover:sepia-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1012] to-transparent" />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#C5A880] uppercase block mb-1">{person.role}</span>
                    <h3 className="text-xl font-bold text-[#E2D4C9] tracking-wide" style={{ fontFamily: "Playfair Display, serif" }}>
                      {person.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-4 border-t border-white/5 pt-3">
                    <span className="text-[10px] font-mono text-white/40">📍 {person.birthplace.split(',')[0]}</span>
                    <span className="text-[10px] font-mono text-[#C5A880]">View Profile ➔</span>
                  </div>
                </div>

                {/* STEP 1: HOVER TRANSITION PREVIEW */}
                <div 
                  className={`absolute inset-x-[-15px] top-[-20px] bg-[#221619] border-2 border-[#C5A880]/30 rounded-2xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-40 flex flex-col justify-between transition-all duration-500 ease-out transform min-h-[115%] ${
                    hoveredCardId === person.id ? "opacity-100 scale-105 pointer-events-auto translate-y-0" : "opacity-0 scale-95 pointer-events-none translate-y-2"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-2 font-mono text-[10px]">
                      <span className="text-[#C5A880] uppercase tracking-widest">{person.role}</span>
                      <span className="text-white/40">{person.lifespan}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-[#E2D4C9] tracking-wide mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                      {person.name}
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed font-light">{person.shortDesc}</p>
                  </div>
                  
                  <button
                    onClick={() => { setSelectedPerson(person); setHoveredCardId(null); }}
                    style={{ fontFamily: "Playfair Display, serif" }}
                    className="w-full bg-gradient-to-r from-[#4A1521] to-[#800020] border border-white/10 text-[#E2D4C9] font-bold text-xs py-3 rounded-xl transition-all mt-4 cursor-pointer focus:outline-none tracking-wide shadow-xl hover:from-[#5C1E2D]"
                  >
                    Read Full Chronicle ➔
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ========================================== */}
      {/* 🌟 STEP 2: FULL SCREEN EXHIBIT MODAL */}
      {/* ========================================== */}
      {selectedPerson && (
        <div className="fixed inset-0 w-screen h-screen z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 overflow-hidden animate-fadeIn">
          
          <div onClick={() => setSelectedPerson(null)} className="absolute inset-0 cursor-pointer" />

          <div className="bg-[#1A1012] border border-[#C5A880]/20 w-full max-w-7xl rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(197,168,128,0.15)] relative z-50 flex flex-col md:flex-row h-auto max-h-[85vh] my-auto">
            
            <button 
              onClick={() => setSelectedPerson(null)}
              className="absolute top-5 right-5 z-30 w-9 h-9 rounded-full bg-black/60 text-white/60 hover:text-[#C5A880] flex items-center justify-center border border-white/5 transition-all cursor-pointer text-base focus:outline-none shadow-xl"
            >
              ✕
            </button>

            {/* Left Image Section */}
            <div className="w-full md:w-[35%] bg-[#120B0C] relative min-h-[250px] md:min-h-full">
              <img src={selectedPerson.image} alt={selectedPerson.name} className="w-full h-full object-cover object-top opacity-75 sepia-[15%]" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1A1012] via-transparent to-transparent" />
            </div>

            {/* Right Detailed Content Side */}
            <div className="w-full md:w-[65%] p-8 md:p-12 flex flex-col justify-between overflow-y-auto no-scrollbar max-h-[55vh] md:max-h-none">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedPerson.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono tracking-wider uppercase text-[#C5A880] bg-[#C5A880]/5 px-3 py-0.5 rounded border border-[#C5A880]/15">
                      {t}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-[#E2D4C9] tracking-wide mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                  {selectedPerson.name}
                </h2>
                <p className="text-sm font-semibold tracking-wide text-[#C5A880]/80 uppercase mb-4 font-mono">{selectedPerson.role}</p>

                <div className="text-[11px] text-white/40 font-mono mb-6 flex gap-6 border-b border-white/5 pb-4">
                  <span>📅 ERA: {selectedPerson.lifespan}</span>
                  <span>📍 ORIGIN: {selectedPerson.birthplace}</span>
                </div>

                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 font-light">{selectedPerson.desc}</p>

                <div className="bg-[#120B0C] border border-white/5 rounded-xl p-4 mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#C5A880]/60 block mb-1">IDEOLOGICAL VISION</span>
                  <p className="text-white/90 italic text-sm" style={{ fontFamily: "Playfair Display, serif" }}>"{selectedPerson.vision}"</p>
                </div>
              </div>

              {/* Lower Achievements Area */}
              <div className="pt-4 border-t border-white/5">
                <h4 className="text-white/30 uppercase tracking-widest text-[10px] font-mono mb-3">Chronicles of Historical Impact</h4>
                <ul className="flex flex-col gap-2">
                  {selectedPerson.achievements.map((ach, i) => (
                    <li key={i} className="text-white/60 text-xs md:text-sm flex items-start gap-2 leading-relaxed">
                      <span className="text-[#C5A880] mt-1">✦</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}