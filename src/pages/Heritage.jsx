import { useState } from "react";

const heritageSites = [
  {
    name: "Rani ki Vav",
    location: "Patan, North Gujarat",
    era: "11th Century AD",
    type: "Stepwell",
    status: "UNESCO World Heritage (2014)",
    desc: "Built by Queen Udayamati in memory of King Bhimdev I, this is the finest stepwell in India. Its seven storeys house over 800 intricately carved sculptures depicting deities, celestial beings, and mythological scenes. Listed as a UNESCO World Heritage Site in 2014.",
    icon: "🏛️",
    rating: "4.9",
    visits: "300,000+/year",
    tags: ["UNESCO", "Solanki Architecture", "11th Century"],
    must_see: ["Vishnu Avatars panel", "Apsara sculptures", "Seven-storey descent", "Patan Patola Museum nearby"],
  },
  {
    name: "Champaner-Pavagadh",
    location: "Panchmahal District",
    era: "15th–16th Century",
    type: "Archaeological Park",
    status: "UNESCO World Heritage (2004)",
    desc: "A perfectly preserved 15th-century capital city with mosques, stepwells, tombs, and a hill-top Kalikamata Temple still active today. The site blends Hindu and Islamic architectural traditions with extraordinary skill.",
    icon: "🕌",
    rating: "4.7",
    visits: "200,000+/year",
    tags: ["UNESCO", "Medieval Capital", "Sultanate"],
    must_see: ["Jama Masjid", "Kalikamata Temple", "Kevada Masjid", "Pavagadh Hill Fort"],
  },
  {
    name: "Historic City of Ahmedabad",
    location: "Ahmedabad",
    era: "Founded 1411 AD",
    type: "Walled City",
    status: "UNESCO World Heritage (2017)",
    desc: "The old walled city of Ahmedabad is India's first UNESCO World Heritage City, founded by Ahmed Shah in 1411. Its pols (unique neighbourhood clusters), ornate havelis, and diverse temples and mosques tell six centuries of history.",
    icon: "🏙️",
    rating: "4.8",
    visits: "1M+/year",
    tags: ["UNESCO", "Walled City", "Living Heritage"],
    must_see: ["Bhadra Fort", "Jama Masjid", "Sidi Saiyyed Jali", "Teen Darwaza", "Adalaj Stepwell"],
  },
  {
    name: "Modhera Sun Temple",
    location: "Modhera, Mehsana",
    era: "Built 1026 AD",
    type: "Sun Temple",
    status: "National Monument (ASI)",
    desc: "Built by Solanki king Bhima I, this masterpiece of ancient Indian architecture features a remarkable Surya Kund tank with 108 mini-shrines. During equinoxes, sunlight illuminates the inner sanctum completely — an astronomical marvel.",
    icon: "☀️",
    rating: "4.8",
    visits: "150,000+/year",
    tags: ["Solanki Art", "Sun Worship", "Astronomical"],
    must_see: ["Surya Kund stepwell", "Sabha Mandap carvings", "Equinox sun alignment", "Modhera Dance Festival"],
  },
  {
    name: "Lothal",
    location: "Dholka, Ahmedabad",
    era: "2400–1900 BCE",
    type: "Indus Valley City",
    status: "UNESCO Tentative List",
    desc: "One of the most important cities of the Indus Valley Civilisation, Lothal housed the world's first known tidal dock 4,500 years ago. The archaeological museum here displays fascinating artefacts including beads, seals, and tools.",
    icon: "🏺",
    rating: "4.6",
    visits: "100,000+/year",
    tags: ["Indus Valley", "4500 Years Old", "Archaeological"],
    must_see: ["Ancient dock structure", "Bead factory ruins", "Archaeological Museum", "Necropolis"],
  },
  {
    name: "Dholavira",
    location: "Rann of Kutch",
    era: "2650–1450 BCE",
    type: "Harappan City",
    status: "UNESCO World Heritage (2021)",
    desc: "One of the five largest cities of the Indus Valley Civilisation and the most extensively excavated Harappan site in India. Dholavira's sophisticated water management system — with 16 reservoirs — is breathtaking even by modern standards.",
    icon: "🏗️",
    rating: "4.8",
    visits: "80,000+/year",
    tags: ["UNESCO", "Harappan", "5000 Years Old"],
    must_see: ["Great Bath", "Water reservoirs system", "Signboard inscription", "City citadel & Bailey"],
  },
];

const timeline = [
  { year: "2650 BCE", event: "Dholavira & Lothal — Indus Valley at its peak" },
  { year: "1411 AD", event: "Sultan Ahmed Shah founds Ahmedabad city" },
  { year: "1026 AD", event: "Solanki king Bhima I builds the Sun Temple at Modhera" },
  { year: "11th C.", event: "Queen Udayamati builds the magnificent Rani ki Vav stepwell" },
  { year: "1483 AD", event: "Mahmud Begada builds the grand Champaner city" },
  { year: "2014–21", event: "UNESCO inscribes multiple Gujarat sites on World Heritage List" },
];

function HeritageCard({ site }) {
  return (
    <div className="glass-card hover-card overflow-hidden group flex flex-col">
      <div className="h-2 bg-gradient-to-r from-[#800020] via-[#D4AF37] to-[#008080]" />

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-4xl w-14 h-14 flex items-center justify-center glass-card flex-shrink-0 group-hover:scale-110 transition-transform duration-400">
            {site.icon}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {site.tags.map((tag) => (
                <span key={tag} className={tag === "UNESCO" ? "badge-gold" : "badge-maroon"}>{tag}</span>
              ))}
            </div>
            <h3 className="text-white font-bold text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
              {site.name}
            </h3>
            <p className="text-[#D4AF37]/60 text-xs flex items-center gap-1">
              <span>📍</span> {site.location}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-[#D4AF37] font-bold text-lg">{site.rating}</div>
            <div className="stars text-xs">★★★★★</div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="badge-teal">{site.era}</div>
          <div className="text-white/30 text-xs">{site.type}</div>
        </div>

        <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">{site.desc}</p>

        <div className="mb-5">
          <h4 className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-3">Must-See</h4>
          <ul className="grid grid-cols-2 gap-1.5">
            {site.must_see.map((m) => (
              <li key={m} className="text-white/50 text-xs flex items-start gap-1.5">
                <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">✦</span>
                {m}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-white/8">
          <div className="flex justify-between text-xs">
            <div>
              <div className="text-white/30 mb-1">Annual Visitors</div>
              <div className="text-[#D4AF37]">{site.visits}</div>
            </div>
            <div className="text-right">
              <div className="text-white/30 mb-1">Status</div>
              <div className="text-white/60 text-xs max-w-[140px] text-right">{site.status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Heritage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "UNESCO", "Ancient", "Medieval"];
  const filterFn = (site) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "UNESCO") return site.tags.includes("UNESCO");
    if (activeFilter === "Ancient") return ["Indus Valley", "Harappan", "Sun Worship"].includes(site.type);
    if (activeFilter === "Medieval") return ["Archaeological Park", "Walled City", "Stepwell"].includes(site.type);
    return true;
  };

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-72 md:h-96 lg:h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/gujarat_heritage.png" alt="Gujarat Heritage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0508]/20 via-[#0d0508]/50 to-[#0d0508]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#800020]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className="badge-gold mb-4 inline-flex">UNESCO & Beyond</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Rich <span className="text-gold-shimmer">Heritage</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            5,000 years of civilisation meet magnificent architecture — Gujarat's heritage spans 
            Indus Valley cities to Sultanate capitals and UNESCO-recognised masterpieces.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: "🏛️", value: "3", label: "UNESCO World Heritage Sites" },
            { icon: "🏺", value: "5,000+", label: "Years of Civilisation" },
            { icon: "🔮", value: "1,400+", label: "Monuments Protected" },
            { icon: "📜", value: "4", label: "Sites on UNESCO Tentative List" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-5 text-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-gold-shimmer text-2xl font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{s.value}</div>
              <div className="text-white/45 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-16 max-w-7xl mx-auto px-6">
        <div className="glass-card p-8 bg-gradient-to-br from-[#800020]/10 to-[#008080]/5">
          <h3 className="text-[#D4AF37] font-bold text-xl mb-6 text-center" style={{ fontFamily: "Playfair Display, serif" }}>
            ⏳ Gujarat's Historical Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] via-[#800020] to-[#008080] hidden md:block" />
            <div className="flex flex-col gap-6">
              {timeline.map((t, i) => (
                <div key={t.year} className={`flex items-center gap-4 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="text-[#D4AF37] font-bold text-sm">{t.year}</span>
                    <p className="text-white/55 text-sm">{t.event}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#D4AF37] flex-shrink-0 hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#0d0508]" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-6 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                activeFilter === f
                  ? "bg-[#D4AF37] text-[#0d0508] shadow-lg shadow-[#D4AF37]/20"
                  : "glass-card text-white/55 hover:text-white"
              }`}
            >
              {f === "all" ? "All Sites" : f}
            </button>
          ))}
        </div>
      </section>

      {/* Heritage Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {heritageSites.filter(filterFn).map((site) => (
            <HeritageCard key={site.name} site={site} />
          ))}
        </div>
      </section>

      {/* Cultural Note */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="glass-card p-8 text-center bg-gradient-to-br from-[#D4AF37]/5 to-transparent">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
            Living Traditions of Gujarat
          </h3>
          <p className="text-white/50 max-w-2xl mx-auto text-sm leading-relaxed mb-6">
            Beyond monuments, Gujarat's heritage lives in its people — in the intricate patola silk weaving of Patan, 
            the mirror-work embroidery of Kutch, the bandhani tie-dye of Jamnagar, and the vibrant Navratri festival 
            dances celebrated across the state.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Patola Silk Weaving", "Kutch Embroidery", "Bandhani Tie-Dye", "Navratri Garba", "Warli Art", "Kite Festival"].map((craft) => (
              <span key={craft} className="badge-gold">{craft}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
