const temples = [
  {
    name: "Somnath Temple",
    location: "Prabhas Patan, Saurashtra",
    type: "Jyotirlinga",
    desc: "One of the twelve Jyotirlinga shrines of Lord Shiva, this eternal temple has been rebuilt seven times and stands proudly on the shores of the Arabian Sea. Its Chalukya-style architecture and spiritual aura make it truly divine.",
    timings: "6:00 AM – 9:00 PM",
    bestTime: "November – February",
    rating: "4.9",
    tags: ["Jyotirlinga", "Pilgrimage", "Coastal"],
    highlights: ["Aarti at dawn & dusk", "Arabian Sea view", "Light & Sound show"],
  },
  {
    name: "Dwarkadhish Temple",
    location: "Dwarka, Gujarat",
    type: "Char Dham",
    desc: "One of the four sacred dhams of Hinduism, the Dwarkadhish Temple is dedicated to Lord Krishna. Its 78.3-metre tall spire draped with a massive flag is a sight that stirs every pilgrim's soul.",
    timings: "6:30 AM – 1:00 PM, 5:00 PM – 9:30 PM",
    bestTime: "October – March",
    rating: "4.8",
    tags: ["Char Dham", "Vaishnav", "Ancient"],
    highlights: ["72-pillar sanctum", "Gomti chakra", "Evening aarti"],
  },
  {
    name: "Akshardham Temple",
    location: "Gandhinagar, Gujarat",
    type: "BAPS Swaminarayan",
    desc: "A breathtaking modern temple complex carved from 6,000 tonnes of pink Rajasthani sandstone, featuring 97 carved pillars and exquisite sculptures narrating ancient Vedic wisdom.",
    timings: "9:30 AM – 6:00 PM (Tue–Sun)",
    bestTime: "Year-round",
    rating: "4.9",
    tags: ["Modern", "Architecture", "Family"],
    highlights: ["Musical fountain", "Exhibition halls", "Botanical garden"],
  },
  {
    name: "Sun Temple, Modhera",
    location: "Modhera, Mehsana",
    type: "Sun Worship",
    desc: "Built in 1026 AD by the Solanki dynasty, this architectural marvel aligns perfectly with the sun's path. During equinoxes, sunlight illuminates the entire sanctum with golden brilliance.",
    timings: "7:00 AM – 6:00 PM",
    bestTime: "November – February",
    rating: "4.7",
    tags: ["UNESCO Tentative", "Solanki Art", "Historic"],
    highlights: ["Surya Kund stepwell", "Equinox sun alignment", "Intricate torana"],
  },
  {
    name: "Ambaji Temple",
    location: "Danta, Banaskantha",
    type: "Shakti Peetha",
    desc: "One of the 51 Shakti Peethas and an extremely important pilgrimage center in Gujarat, situated in the Aravalli hills. Millions of devotees flock here during the Bhadravi Poonam fair.",
    timings: "5:30 AM – 9:30 PM",
    bestTime: "September (Poonam fair)",
    rating: "4.8",
    tags: ["Shakti Peetha", "Hill Temple", "Pilgrimage"],
    highlights: ["Gabbar Hill viewpoint", "Aarasuri Mata festival", "Marble temple architecture"],
  },
  {
    name: "Palitana Temples",
    location: "Palitana, Bhavnagar",
    type: "Jain Heritage",
    desc: "Considered the world's only vegetarian city, Palitana houses over 900 Jain temples on Shatrunjaya Hill, each carved from white marble. Climbing 3,500 steps is a spiritual journey in itself.",
    timings: "7:00 AM – 6:00 PM (dawn only on special days)",
    bestTime: "October – March",
    rating: "4.8",
    tags: ["Jain", "UNESCO Tentative", "Pilgrimage"],
    highlights: ["900+ marble temples", "3,500 step ascent", "Panoramic hilltop views"],
  },
];

function TempleCard({ temple }) {
  return (
    <div className="glass-card hover-card overflow-hidden group flex flex-col">
      {/* Color accent header */}
      <div className="h-2 bg-gradient-to-r from-[#800020] via-[#D4AF37] to-[#800020]" />

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {temple.tags.map((tag) => (
                <span key={tag} className="badge-maroon">{tag}</span>
              ))}
            </div>
            <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
              {temple.name}
            </h3>
            <p className="text-[#D4AF37]/70 text-xs tracking-wide flex items-center gap-1">
              <span>📍</span> {temple.location}
            </p>
          </div>
          <div className="text-right flex-shrink-0 ml-4">
            <div className="text-[#D4AF37] font-bold text-xl">{temple.rating}</div>
            <div className="stars text-xs">★★★★★</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">{temple.desc}</p>

        {/* Highlights */}
        <div className="mb-5">
          <h4 className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-3">Highlights</h4>
          <ul className="flex flex-col gap-1.5">
            {temple.highlights.map((h) => (
              <li key={h} className="text-white/50 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Info Row */}
        <div className="grid grid-cols-2 gap-3 pt-5 border-t border-white/8">
          <div>
            <div className="text-white/30 text-xs mb-1">Timings</div>
            <div className="text-white/65 text-xs">{temple.timings}</div>
          </div>
          <div>
            <div className="text-white/30 text-xs mb-1">Best Season</div>
            <div className="text-white/65 text-xs">{temple.bestTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Temples() {
  return (
    <div className="page-enter">
      {/* Hero — h-[55vh] works cleanly since App.jsx already offsets by pt-24 */}
      <section className="relative h-72 md:h-96 lg:h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/gujarat_temples.png" alt="Gujarat Temples" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0508]/30 via-[#0d0508]/50 to-[#0d0508]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#800020]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className="badge-maroon mb-4 inline-flex">Sacred Gujarat</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Divine <span className="text-gold-shimmer">Temples</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Journey through Gujarat's sacred landscape — home to some of India's most revered temples,
            from ancient Jyotirlingas to breathtaking Jain pilgrimage mountains.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🛕", label: "50+", sub: "Major Temples" },
            { icon: "🕉️", label: "3", sub: "Jyotirlingas in Gujarat" },
            { icon: "🏔️", label: "900+", sub: "Jain Temples at Palitana" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-6 text-center">
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="text-gold-shimmer text-3xl font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{s.label}</div>
              <div className="text-white/50 text-sm">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Temples Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
            Must-Visit <span className="text-gold-shimmer">Sacred Sites</span>
          </h2>
          <div className="section-divider" />
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm">
            Each temple carries centuries of devotion, stunning architecture, and a divine energy that stays with you long after you leave.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {temples.map((temple) => (
            <TempleCard key={temple.name} temple={temple} />
          ))}
        </div>
      </section>

      {/* Tips Banner */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="relative glass-card p-8 bg-gradient-to-br from-[#800020]/15 to-[#D4AF37]/5">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#800020] to-[#D4AF37]" />
          <h3 className="text-[#D4AF37] font-bold text-xl mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            🙏 Visitor Etiquette
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "👟", tip: "Remove footwear before entering temple premises" },
              { icon: "👘", tip: "Dress modestly — cover shoulders and knees" },
              { icon: "📸", tip: "Always ask permission before photographing deities" },
              { icon: "🤫", tip: "Maintain silence and respect in sanctum areas" },
            ].map((t) => (
              <div key={t.tip} className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <p className="text-white/55 text-sm leading-relaxed">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
