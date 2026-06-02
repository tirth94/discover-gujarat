import { useState, useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy-loaded pages for better performance
const Home     = lazy(() => import("./pages/Home"));
const Temples  = lazy(() => import("./pages/Temples"));
const Beaches  = lazy(() => import("./pages/Beaches"));
const Forest   = lazy(() => import("./pages/Forest"));
const Heritage = lazy(() => import("./pages/Heritage"));

function PageLoader() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#2D1B1E] text-white">  
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-amber-500/20" />
          <div className="absolute inset-0 rounded-full border-t-2 border-amber-500 animate-spin" />
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-red-800 to-amber-500 animate-pulse" />
        </div>
        <p className="text-amber-500/60 text-sm tracking-widest uppercase animate-pulse">
          Loading Gujarat...
        </p>
      </div>
    </div>
  );
}

const pageMeta = {
  home:     { title: "Gujarat Tourism — The Land of Legends", desc: "Discover Gujarat — vibrant heritage, sacred temples, golden beaches, and wildlife." },
  temples:  { title: "Sacred Temples of Gujarat — Pilgrimage & Architecture", desc: "Explore Somnath, Dwarka, Modhera and Gujarat's most revered temples." },
  beaches:  { title: "Gujarat Beaches — Arabian Sea Coastline", desc: "1,600 km of pristine coastline — Mandvi, Diu, Chorwad and more." },
  forest:   { title: "Wildlife & Forests of Gujarat — Gir & Beyond", desc: "Gir National Park, Marine Sanctuary, Nal Sarovar — Gujarat's wild side." },
  heritage: { title: "Gujarat Heritage — UNESCO World Heritage Sites", desc: "Rani ki Vav, Champaner, Dholavira — 5,000 years of civilisation." },
};

function renderPage(page, navigate) {
  switch (page) {
    case "temples":  return <Temples onNavigate={navigate} />;
    case "beaches":  return <Beaches onNavigate={navigate} />;
    case "forest":   return <Forest  onNavigate={navigate} />;
    case "heritage": return <Heritage onNavigate={navigate} />;
    default:         return <Home    onNavigate={navigate} />;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // 🔥 FIX: Reset scroll position and clear history restoration on reload
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const meta = pageMeta[currentPage] || pageMeta.home;
    document.title = meta.title;
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.name = "description";
      document.head.appendChild(descTag);
    }
    descTag.content = meta.desc;
  }, [currentPage]);

  return (
    // Updated to global premium background color [#1E0F12]
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#1E0F12] text-white">
      
      {/* Fixed Navbar component */}
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      {/* Main Container */}
      <main className="flex-grow pt-24 relative z-10 w-full max-w-full">
        <Suspense fallback={<PageLoader />}>
          {renderPage(currentPage, navigate)}
        </Suspense>
      </main>

      {/* Footer Element */}
      <Footer onNavigate={navigate} />
    </div>
  );
}