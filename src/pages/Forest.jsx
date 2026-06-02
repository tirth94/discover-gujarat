import { useState } from "react";

const wildlife = [
  {
    name: "Gir National Park",
    zone: "Sasan Gir, Junagadh",
    type: "Lion Reserve",
    icon: "🦁",
    desc: "The last refuge of the Asiatic lion in the world. Gir spans 1,412 sq km and is home to 600+ lions, along with leopards, hyenas, Indian star tortoise, and 300+ bird species. A safari here is truly once in a lifetime.",
    animals: ["Asiatic Lion", "Leopard", "Sambar Deer", "Nilgai", "Python", "Crocodile"],
    safariTimes: "6:00 AM – 9:30 AM | 3:00 PM – 6:30 PM",
    bestTime: "December – April (peak: Feb–April)",
    permits: "Required — Book on GIR online portal",
    rating: "4.9",
    area: "1,412 sq km",
    tags: ["UNESCO Biosphere", "Lion Reserve", "Flagship"],
  },
  {
    name: "Velavadar Blackbuck Sanctuary",
    zone: "Bhavnagar District",
    type: "Antelope Paradise",
    icon: "🦌",
    desc: "Home to one of the highest densities of blackbuck in the world — over 4,000 animals roam the open grasslands. Also a haven for wolves, nilgai, and hundreds of migratory Lesser Florican birds.",
    animals: ["Blackbuck", "Wolf", "Nilgai", "Lesser Florican", "Harriers", "Spotted Eagle"],
    safariTimes: "6:30 AM – 10:00 AM | 3:00 PM – 6:00 PM",
    bestTime: "October – March (winter for migratory birds)",
    permits: "Required — Forest Department office",
    rating: "4.6",
    area: "34 sq km",
    tags: ["Grassland", "Blackbuck", "Bird Watching"],
  },
  {
    name: "Marine National Park",
    zone: "Gulf of Kutch, Jamnagar",
    type: "Marine Sanctuary",
    icon: "🐠",
    desc: "India's first marine national park, protecting vibrant coral reefs, mangroves, and 42 islands. Spot dolphins, sea turtles, octopuses, and 70+ coral species in pristine Arabian Sea waters.",
    animals: ["Dolphins", "Sea Turtle", "Octopus", "Dugong", "Puffer Fish", "Flamingo"],
    safariTimes: "By boat — check tides for schedule",
    bestTime: "November – March",
    permits: "Required — DFO Office, Jamnagar",
    rating: "4.5",
    area: "295 sq km",
    tags: ["Marine", "Coral Reef", "UNESCO"],
  },
  {
    name: "Wild Ass Sanctuary",
    zone: "Little Rann of Kutch",
    type: "Desert Wildlife",
    icon: "🐴",
    desc: "The Little Rann of Kutch is the last home of the Indian Wild Ass (Ghudkhur). The vast saline desert expanse also hosts flamingos, wolves, desert foxes, and migratory raptors.",
    animals: ["Indian Wild Ass", "Flamingo", "Wolf", "Desert Fox", "Cranes", "Pelican"],
    safariTimes: "Dawn to dusk (jeep safaris)",
    bestTime: "October – February",
    permits: "Required — pay at entry check post",
    rating: "4.7",
    area: "4,849 sq km",
    tags: ["Desert", "Wild Ass", "Flamingo"],
  },
  {
    name: "Jessore Sloth Bear Sanctuary",
    zone: "Banaskantha District",
    type: "Bear & Biodiversity",
    icon: "🐻",
    desc: "Nestled in the Aravalli Hills, this sanctuary shelters the highest density of sloth bears in India. The rocky terrain and mixed forests also house leopards, wolves, and 200+ bird species.",
    animals: ["Sloth Bear", "Leopard", "Wolf", "Nilgai", "Rock Python", "Honey Badger"],
    safariTimes: "6:00 AM – 10:00 AM | 3:00 PM – 6:00 PM",
    bestTime: "November – February",
    permits: "Required — local forest office",
    rating: "4.4",
    area: "180 sq km",
    tags: ["Aravalli", "Sloth Bear", "Trekking"],
  },
  {
    name: "Nal Sarovar Bird Sanctuary",
    zone: "Ahmedabad District",
    type: "Wetland & Avifauna",
    icon: "🦩",
    desc: "A Ramsar-listed wetland heaven spread across 120 sq km, hosting over 200 bird species during winter migration. Watch thousands of flamingos, pelicans, and ducks from traditional boats at sunrise.",
    animals: ["Flamingo", "Pelican", "Spoonbill", "Painted Stork", "Dalmatian Pelican", "Purple Heron"],
    safariTimes: "Boat rides at sunrise | 6:00 AM – 9:00 AM",
    bestTime: "November – February (migration season)",
    permits: "Entry fee at gate; boats available",
    rating: "4.6",
    area: "120 sq km",
    tags: ["Ramsar Site", "Bird Paradise", "Wetland"],
  },
];

const conservationFacts = [
  { icon: "🦁", fact: "Gujarat is home to 600+ Asiatic Lions — 100% of the world's wild population" },
  { icon: "🌿", fact: "Over 16% of Gujarat's area is protected as national parks or sanctuaries" },
  { icon: "🐦", fact: "Gujarat records 500+ bird species — a paradise for birdwatchers" },
  { icon: "🌊", fact: "India's first Marine National Park protects 70+ coral species in the Gulf of Kutch" },
];

export default function Forest({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = ["all", "reserve", "sanctuary", "marine", "wetland"];
  const tabMap = {
    reserve: "Lion Reserve",
    sanctuary: ["Antelope Paradise", "Bear & Biodiversity", "Desert Wildlife"],
    marine: "Marine Sanctuary",
    wetland: "Wetland & Avifauna",
  };

  const filtered = activeTab === "all"
    ? wildlife
    : wildlife.filter((w) => {
        const match = tabMap[activeTab];
        return Array.isArray(match) ? match.includes(w.type) : w.type === match;
      });

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-72 md:h-96 lg:h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/gujarat_forest.png" alt="Gujarat Wildlife" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0508]/20 via-[#0d0508]/45 to-[#0d0508]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a1a]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className="badge-teal mb-4 inline-flex" style={{ background: "rgba(26,74,26,0.3)", borderColor: "rgba(0,200,0,0.3)", color: "#6dff6d" }}>
            Wildlife Gujarat
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Forests &amp; <span className="text-gold-shimmer">Wildlife</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            From the roar of Asiatic lions in Gir to the flamingo-pink wetlands of Nal Sarovar — 
            Gujarat's wild spaces are a sanctuary for nature lovers and wildlife enthusiasts.
          </p>
        </div>
      </section>

      {/* Conservation Facts */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {conservationFacts.map((f) => (
            <div key={f.fact} className="glass-card p-5 flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">{f.icon}</span>
              <p className="text-white/55 text-sm leading-relaxed">{f.fact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-6 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                activeTab === tab
                  ? "bg-[#D4AF37] text-[#0d0508] shadow-lg shadow-[#D4AF37]/20"
                  : "glass-card text-white/55 hover:text-white border-white/10"
              }`}
            >
              {tab === "all" ? "All Sanctuaries" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Wildlife Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {filtered.map((animal) => (
            <div key={animal.name} className="glass-card hover-card overflow-hidden group flex flex-col">
              <div className="h-2 bg-gradient-to-r from-green-900 via-[#D4AF37] to-green-900" />

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl w-12 flex-shrink-0 text-center group-hover:scale-125 transition-transform duration-400">
                    {animal.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {animal.tags.map((tag) => (
                        <span key={tag} className="badge-gold">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-white font-bold text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
                      {animal.name}
                    </h3>
                    <p className="text-[#D4AF37]/60 text-xs flex items-center gap-1">
                      <span>📍</span> {animal.zone}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[#D4AF37] font-bold text-lg">{animal.rating}</div>
                    <div className="stars text-xs">★★★★★</div>
                  </div>
                </div>

                <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">{animal.desc}</p>

                <div className="mb-5">
                  <h4 className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-3">Key Species</h4>
                  <div className="flex flex-wrap gap-2">
                    {animal.animals.map((a) => (
                      <span key={a} className="text-xs bg-green-900/20 border border-green-800/40 text-green-300 px-3 py-1 rounded-full">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-4 border-t border-white/8 text-xs">
                  <div className="flex justify-between">
                    <span className="text-white/30">Safari Times</span>
                    <span className="text-white/60 text-right max-w-[55%]">{animal.safariTimes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/30">Best Time</span>
                    <span className="text-white/60 text-right max-w-[55%]">{animal.bestTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/30">Area</span>
                    <span className="text-[#D4AF37]">{animal.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safari Tips */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="glass-card p-8 bg-gradient-to-br from-green-900/20 to-[#D4AF37]/5">
          <h3 className="text-[#D4AF37] font-bold text-2xl mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            🌿 Safari Etiquette & Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🤫", tip: "Maintain silence — sudden noise scares animals away" },
              { icon: "👕", tip: "Wear earth-toned, neutral clothing (avoid bright colours)" },
              { icon: "📵", tip: "Keep mobile phones on silent mode during safari" },
              { icon: "🚫", tip: "Never feed, touch or approach wild animals" },
              { icon: "⏰", tip: "Arrive early — dawn safaris yield the best sightings" },
              { icon: "💧", tip: "Carry water — but avoid single-use plastic in reserves" },
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
