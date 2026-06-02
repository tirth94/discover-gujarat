const beaches = [
  {
    name: "Mandvi Beach",
    location: "Mandvi, Kutch",
    type: "Historic & Scenic",
    desc: "Mandvi is Gujarat's most popular beach, where the historic Vijay Vilas Palace meets the golden sands. Watch traditional wooden dhow ships being hand-crafted in the nearby shipyard while camel rides and water sports complete the experience.",
    activities: ["Camel rides", "Water sports", "Shipyard tour", "Vijay Vilas Palace"],
    bestTime: "October – March",
    difficulty: "Easy",
    rating: "4.7",
    distance: "60 km from Bhuj",
    tags: ["Popular", "Heritage", "Water Sports"],
  },
  {
    name: "Diu Beach",
    location: "Diu Island",
    type: "Island Paradise",
    desc: "A former Portuguese colony blessed with crystal-clear waters, ancient fortresses, and palm-fringed shores. Diu's beaches offer a blend of Indian and European character found nowhere else in Gujarat.",
    activities: ["Snorkeling", "Parasailing", "Fort exploration", "Portuguese cuisine"],
    bestTime: "November – April",
    difficulty: "Easy",
    rating: "4.8",
    distance: "75 km from Una",
    tags: ["Island", "Heritage", "Scuba Diving"],
  },
  {
    name: "Ahmedpur-Mandvi Beach",
    location: "Amreli, Saurashtra",
    type: "Serene Getaway",
    desc: "A secluded crescent of golden sand with crystal clear waters, backed by swaying palms. This unspoiled beach near Diu is perfect for those seeking peace away from the crowds.",
    activities: ["Swimming", "Beach camping", "Sunset photography", "Seafood dining"],
    bestTime: "October – February",
    difficulty: "Easy",
    rating: "4.5",
    distance: "8 km from Diu",
    tags: ["Secluded", "Camping", "Serene"],
  },
  {
    name: "Chorwad Beach",
    location: "Chorwad, Junagadh",
    type: "Royal Beach",
    desc: "Once the summer retreat of the Nawab of Junagadh, Chorwad is a pristine beach framed by a crumbling palace. Watch local fishermen mend their nets against the backdrop of the Arabian Sea.",
    activities: ["Palace visit", "Fishing village tour", "Photography", "Sunset viewing"],
    bestTime: "October – March",
    difficulty: "Easy",
    rating: "4.4",
    distance: "45 km from Veraval",
    tags: ["Royal Heritage", "Fishing Village", "Photography"],
  },
  {
    name: "Tithal Beach",
    location: "Tithal, Valsad",
    type: "Black Sand Wonder",
    desc: "Famous for its distinctive black volcanic sand and serene atmosphere, Tithal Beach in South Gujarat is popular with families. The Swaminarayan Temple and pleasant breezes make it a favourite local retreat.",
    activities: ["Black sand experience", "Boating", "Temple visit", "Beachside snacks"],
    bestTime: "October – April",
    difficulty: "Easy",
    rating: "4.3",
    distance: "8 km from Valsad",
    tags: ["Unique", "Black Sand", "Family"],
  },
  {
    name: "Somnath Beach",
    location: "Prabhas Patan, Gir Somnath",
    type: "Spiritual Shoreline",
    desc: "Adjacent to the famous Somnath Temple, this beach carries profound spiritual significance. The meeting point of the three rivers — Kapila, Hiran, and Saraswati — with the Arabian Sea is considered sacred.",
    activities: ["Temple darshan", "Triveni Sangam dip", "Ghat photography", "Sunrise prayers"],
    bestTime: "November – February",
    difficulty: "Easy",
    rating: "4.7",
    distance: "At Somnath town",
    tags: ["Spiritual", "Sacred", "Pilgrim"],
  },
];

function BeachCard({ beach }) {
  return (
    <div className="glass-card hover-card overflow-hidden group flex flex-col">
      <div className="h-2 bg-gradient-to-r from-[#008080] via-[#D4AF37] to-[#008080]" />

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {beach.tags.map((tag) => (
                <span key={tag} className="badge-teal">{tag}</span>
              ))}
            </div>
            <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
              {beach.name}
            </h3>
            <p className="text-[#008080] text-xs flex items-center gap-1">
              <span>📍</span> {beach.location}
            </p>
          </div>
          <div className="text-right flex-shrink-0 ml-4">
            <div className="text-[#D4AF37] font-bold text-xl">{beach.rating}</div>
            <div className="stars text-xs">★★★★★</div>
          </div>
        </div>

        <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">{beach.desc}</p>

        <div className="mb-5">
          <h4 className="text-[#008080] text-xs font-semibold tracking-widest uppercase mb-3">Activities</h4>
          <div className="flex flex-wrap gap-2">
            {beach.activities.map((a) => (
              <span
                key={a}
                className="text-xs bg-[#008080]/10 border border-[#008080]/25 text-[#4dd9d9] px-3 py-1 rounded-full"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-5 border-t border-white/8 text-xs">
          <div>
            <div className="text-white/30 mb-1">Best Time</div>
            <div className="text-white/65">{beach.bestTime}</div>
          </div>
          <div>
            <div className="text-white/30 mb-1">Difficulty</div>
            <div className="text-[#D4AF37]">{beach.difficulty}</div>
          </div>
          <div>
            <div className="text-white/30 mb-1">Distance</div>
            <div className="text-white/65">{beach.distance}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Beaches() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-72 md:h-96 lg:h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/gujarat_beaches.png" alt="Gujarat Beaches" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0508]/20 via-[#0d0508]/45 to-[#0d0508]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#008080]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className="badge-teal mb-4 inline-flex">Coastal Gujarat</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Golden <span className="text-gold-shimmer">Beaches</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            1,600 kilometres of breathtaking coastline — Gujarat's shores offer golden sands, 
            sacred ghats, Portuguese heritage, and the serenity of the Arabian Sea.
          </p>
        </div>
      </section>

      {/* Ocean Stats */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🌊", value: "1,600 km", label: "Coastline" },
            { icon: "🏖️", value: "40+", label: "Beaches" },
            { icon: "🐠", value: "5", label: "Marine Sanctuaries" },
            { icon: "⛵", value: "Year-round", label: "Water Sports" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-5 text-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-gold-shimmer text-2xl font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{s.value}</div>
              <div className="text-white/45 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Beach Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
            Stunning <span className="text-gold-shimmer">Coastal Destinations</span>
          </h2>
          <div className="section-divider" />
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm">
            From black volcanic sands to pristine white shores, Gujarat's beaches are as diverse as its culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {beaches.map((beach) => (
            <BeachCard key={beach.name} beach={beach} />
          ))}
        </div>
      </section>

      {/* Water Sports Section */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="glass-card p-8 bg-gradient-to-br from-[#008080]/15 to-[#D4AF37]/5">
          <h3 className="text-[#D4AF37] font-bold text-2xl mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            🏄 Adventure on the Arabian Sea
          </h3>
          <p className="text-white/50 text-sm mb-6">Gujarat's coastline is perfect for a wide range of water sports and marine adventures.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🤿", sport: "Scuba Diving", location: "Diu, Gulf of Kutch" },
              { icon: "🪂", sport: "Parasailing", location: "Mandvi, Diu" },
              { icon: "🚣", sport: "Kayaking", location: "Gir Somnath Coast" },
              { icon: "🏊", sport: "Snorkelling", location: "Marine Sanctuary, Jamnagar" },
            ].map((s) => (
              <div key={s.sport} className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/8 transition-colors">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-white/80 font-semibold text-sm mb-1">{s.sport}</div>
                <div className="text-[#008080] text-xs">{s.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
