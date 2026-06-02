import { useState, useEffect, useRef } from "react";

const stats = [
  { value: "1,600+", label: "Tourist Spots" },
  { value: "1,600 km", label: "Coastline" },
  { value: "5,000+", label: "Years of History" },
  { value: "3", label: "UNESCO Sites" },
];

const categories = [
  {
    id: "temples",
    title: "Sacred Temples",
    desc: "Explore divine shrines from Somnath to Dwarka, where spirituality meets majestic architecture.",
    icon: "🛕",
    page: "temples",
    color: "from-red-950/30 to-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    id: "beaches",
    title: "Pristine Beaches",
    desc: "Sun-kissed shores along 1,600 km of coastline with tranquil waters and vibrant culture.",
    icon: "🏖️",
    page: "beaches",
    color: "from-teal-950/40 to-amber-500/10",
    border: "border-teal-500/30",
  },
  {
    id: "forest",
    title: "Wildlife & Forest",
    desc: "Gir National Park — the last refuge of the majestic Asiatic lion in the wild.",
    icon: "🦁",
    page: "forest",
    color: "from-green-950/40 to-teal-950/20",
    border: "border-green-700/30",
  },
  {
    id: "heritage",
    title: "Rich Heritage",
    desc: "UNESCO world heritage sites, ancient stepwells, and centuries-old architectural wonders.",
    icon: "🏛️",
    page: "heritage",
    color: "from-red-950/20 to-teal-950/20",
    border: "border-red-800/30",
  },
];

const highlights = [
  {
    title: "Rann Utsav",
    subtitle: "Festival of Kutch",
    desc: "The world's largest salt desert comes alive with music, dance, and color under a full moon sky.",
    image: "/gujarat_hero.png",
    badge: "Festival",
  },
  {
    title: "Somnath Temple",
    subtitle: "Jyotirlinga Shrine",
    desc: "One of the twelve Jyotirlinga shrines of Shiva, standing proud on the shores of the Arabian Sea.",
    image: "/gujarat_temples.png",
    badge: "Sacred",
  },
  {
    title: "Gir Sanctuary",
    subtitle: "Asiatic Lion Reserve",
    desc: "Home to 600+ Asiatic lions — a conservation success story and a wildlife lover's paradise.",
    image: "/gujarat_forest.png",
    badge: "Wildlife",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Travel Blogger",
    text: "Gujarat is like no other state in India. The warmth of its people, the grandeur of its temples, and the raw beauty of the Rann left me completely spellbound.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "James Thornton",
    role: "Wildlife Photographer",
    text: "Photographing the Asiatic lion at Gir was the highlight of my career. Gujarat's wildlife sanctuaries are simply extraordinary.",
    rating: 5,
    avatar: "JT",
  },
  {
    name: "Aisha Malhotra",
    role: "Heritage Explorer",
    text: "Rani ki Vav is a masterpiece of human achievement. The intricate carvings and the sheer scale of the stepwell left me in awe.",
    rating: 5,
    avatar: "AM",
  },
];

function CountUpStat({ value, label }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          setDisplay(value);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
      <div className="text-amber-400 text-3xl md:text-4xl font-bold mb-1 font-serif">
        {display}
      </div>
      <div className="text-white/50 text-xs tracking-wide uppercase font-medium">{label}</div>
    </div>
  );
}

export default function Home({ onNavigate }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative">
      
      {/* ── HERO SECTION ── */}
      <section className="relative flex items-center justify-center overflow-hidden min-h-[85vh] lg:min-h-screen -mt-24 pt-24">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gujarat_hero.png"
            alt="Gujarat Rann of Kutch"
            className="w-full h-full object-cover scale-105"
          />
          {/* Subtle gradient matching our brand new lighter #1E0F12 background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E0F12]/50 via-[#1E0F12]/30 to-[#1E0F12]" />
        </div>

        {/* Floating Luxury Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-red-900/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-teal-900/10 blur-3xl pointer-events-none" />

        {/* Hero Main Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center py-12 flex flex-col items-center">
          <div className="bg-amber-500/10 border border-amber-500/30 text-amber-400 font-medium tracking-widest text-xs px-4 py-1.5 rounded-full uppercase mb-6 shadow-sm">
            ✦ &nbsp;Incredible India's Jewel
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight font-serif tracking-tight">
            Discover the<br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">Soul of Gujarat</span>
          </h1>

          <p className="text-white/70 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            From the mystical white deserts of Kutch to the sacred shores of Dwarka, 
            embark on a journey through India's most vibrant and culturally rich state.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none">
            <button 
              onClick={() => onNavigate("temples")} 
              className="bg-gradient-to-r from-red-800 to-amber-600 hover:from-amber-600 hover:to-red-800 text-white font-medium text-sm py-3.5 px-8 rounded-full shadow-lg hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
            >
              Explore Destinations
            </button>
            <button 
              onClick={() => onNavigate("heritage")} 
              className="border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 font-medium text-sm py-3.5 px-8 rounded-full transition-all duration-300 cursor-pointer"
            >
              View Heritage Sites
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="py-12 border-y border-amber-500/10 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <CountUpStat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* ── CATEGORY CARDS SECTION ── */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs px-4 py-1 rounded-full uppercase tracking-widest font-medium inline-block mb-3">
            Our Destinations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">
            Experience Every Facet<br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">of Gujarat</span>
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-4 rounded-full opacity-60" />
          <p className="text-white/50 max-w-xl mx-auto mt-5 text-sm md:text-base leading-relaxed">
            Each corner of Gujarat holds a unique story — divine temples, golden beaches, 
            ancient heritage, and wild forests await your exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onNavigate(cat.page)}
              className={`relative group p-8 rounded-3xl text-left overflow-hidden bg-gradient-to-br ${cat.color} border ${cat.border} hover:border-amber-500/40 transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1`}
            >
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {cat.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 font-serif">
                {cat.title}
              </h3>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-6 font-light">
                {cat.desc}
              </p>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-medium mt-auto">
                <span>Explore</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-500/5 to-transparent rounded-tl-full" />
            </button>
          ))}
        </div>
      </section>

      {/* ── HIGHLIGHTS SECTION ── */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs px-4 py-1 rounded-full uppercase tracking-widest font-medium inline-block mb-3">
              Must-See
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-serif">
              Iconic Highlights
            </h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-4 rounded-full opacity-60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden shadow-xl hover:border-amber-500/20 transition-all duration-300 group">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-black font-semibold text-[10px] uppercase px-3 py-1 rounded-full tracking-wider shadow-md">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-amber-400/60 text-[10px] tracking-widest uppercase mb-1 font-medium">{item.subtitle}</div>
                  <h3 className="text-white font-bold text-lg mb-2 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAVEL GUIDE SECTION ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs px-4 py-1 rounded-full uppercase tracking-widest font-medium inline-block mb-3">
              Travel Guide
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
              When to Visit<br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">Gujarat</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 font-light">
              Gujarat welcomes visitors year-round, but each season offers a unique and magical experience.
              From the festive brilliance of Navratri to the surreal white expanse of the Rann during winter.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { season: "Oct – Feb", label: "Peak Season", desc: "Perfect weather, Rann Utsav, Navratri festivities", icon: "❄️" },
                { season: "Mar – May", label: "Warm Season", desc: "Explore temples & beaches before monsoon", icon: "☀️" },
                { season: "Jun – Sep", label: "Monsoon", desc: "Lush greenery and stunning waterfalls", icon: "🌧️" },
              ].map((s) => (
                <div key={s.season} className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex items-center gap-4">
                  <div className="text-2xl">{s.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-0.5">
                      <span className="text-amber-400 font-semibold text-sm">{s.season}</span>
                      <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] px-2 py-0.5 rounded-md font-medium">{s.label}</span>
                    </div>
                    <p className="text-white/50 text-xs font-light">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-md lg:max-w-none mx-auto">
            <div className="border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/gujarat_heritage.png"
                alt="Rani ki Vav heritage"
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#140a0e] border border-amber-500/20 rounded-2xl p-5 max-w-xs shadow-2xl backdrop-blur-md">
              <div className="text-amber-400 text-2xl font-bold font-serif mb-0.5">
                4.9/5
              </div>
              <div className="text-amber-500 text-xs mb-1">★★★★★</div>
              <div className="text-white/40 text-[10px] uppercase tracking-wider">Rated by 50,000+ travellers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-b from-transparent via-teal-950/10 to-transparent">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs px-4 py-1 rounded-full uppercase tracking-widest font-medium inline-block mb-3">
            Traveller Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-serif">
            What Visitors Say
          </h2>

          <div className="bg-white/[0.02] border border-amber-500/10 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-800 via-amber-500 to-teal-600" />
            <div className="text-5xl text-amber-500/20 font-serif leading-none h-6 text-left">“</div>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 min-h-[80px] font-light">
              {testimonials[activeTestimonial].text}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/5 pt-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-800 to-amber-500 flex items-center justify-center text-white font-bold text-sm">
                {testimonials[activeTestimonial].avatar}
              </div>
              <div className="text-center sm:text-left">
                <div className="text-white font-medium text-sm">{testimonials[activeTestimonial].name}</div>
                <div className="text-white/40 text-xs">{testimonials[activeTestimonial].role}</div>
              </div>
              <div className="text-amber-400 text-xs sm:ml-auto">
                {"★".repeat(testimonials[activeTestimonial].rating)}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeTestimonial ? "w-6 h-1.5 bg-amber-400" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER SECTION ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 border-t border-white/5">
        <div className="relative bg-white/[0.01] border border-white/5 rounded-3xl overflow-hidden p-8 md:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 via-transparent to-teal-950/10" />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-800 via-amber-500 to-teal-600" />

          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">
              Ready to Explore<br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">Gujarat?</span>
            </h2>
            <p className="text-white/50 text-sm md:text-base mb-8 leading-relaxed font-light">
              Start planning your dream trip to one of India's most culturally rich and diverse states. 
              Let the journey of a lifetime begin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none">
              <button 
                onClick={() => onNavigate("temples")} 
                className="bg-gradient-to-r from-red-800 to-amber-600 text-white font-medium text-sm py-3 px-8 rounded-full shadow-lg cursor-pointer transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Exploring
              </button>
              <button 
                onClick={() => onNavigate("heritage")} 
                className="border border-white/10 hover:bg-white/5 text-white/80 text-sm py-3 px-8 rounded-full transition-all duration-300 cursor-pointer"
              >
                UNESCO Heritage Sites
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}