/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   App.jsx — Gujarat Tourism SPA Root
   URL-based Declarative Navigation via react-router-dom
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ── Lazy-loaded pages for performance ── */
const Home          = lazy(() => import("./pages/Home"));
const Destinations  = lazy(() => import("./pages/Destinations"));
const Temples       = lazy(() => import("./pages/Temples"));
const Beaches       = lazy(() => import("./pages/Beaches"));
const Forest        = lazy(() => import("./pages/Forest"));
const Heritage      = lazy(() => import("./pages/Heritage"));
const Personalities = lazy(() => import("./pages/Personalities"));
const WhenToVisit   = lazy(() => import("./pages/WhenToVisit"));
const Timeline      = lazy(() => import("./pages/Timeline"));
const Blog          = lazy(() => import("./pages/Blog"));
const BlogPost      = lazy(() => import("./pages/BlogPost"));
const AboutUs         = lazy(() => import("./pages/AboutUs"));
const ContactUs       = lazy(() => import("./pages/ContactUs"));
const PrivacyPolicy   = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const Disclaimer      = lazy(() => import("./pages/Disclaimer"));

/* ── Dynamic SEO Metadata per route path ── */
const pageMeta = {
  "/": {
    title: "Gujarat Tourism — The Land of Legends",
    desc:  "Discover Gujarat — vibrant heritage, sacred temples, golden beaches, and spectacular wildlife. Plan your visit to Incredible India's most culturally rich state.",
    keywords: "Gujarat tourism, Rann of Kutch, Gujarat travel guide, Gujarat places to visit",
  },
  "/destinations": {
    title: "Destinations — Gujarat Tourism Travel Directory",
    desc:  "Explore Gujarat's major destinations — Ahmedabad, Kutch, Gir, Surat, Vadodara and more. Find heritage cities, desert wonders, wildlife trails, and urban marvels.",
    keywords: "Gujarat destinations, Ahmedabad travel, Rann of Kutch, Gir National Park, Surat Vadodara",
  },
  "/temples": {
    title: "Sacred Temples of Gujarat — Pilgrimage & Architecture",
    desc:  "Explore Somnath, Dwarka, Modhera Sun Temple and Gujarat's most revered temples and Jain pilgrimage sites.",
    keywords: "Gujarat temples, Somnath temple, Dwarkadhish, Akshardham, Modhera, Palitana",
  },
  "/beaches": {
    title: "Gujarat Beaches — 1,600 km of Arabian Sea Coastline",
    desc:  "Discover Mandvi, Diu, Chorwad, Tithal and more — Gujarat's pristine beaches along the Arabian Sea coastline.",
    keywords: "Gujarat beaches, Mandvi beach, Diu island, Chorwad beach, Gujarat coastline",
  },
  "/forest": {
    title: "Wildlife & Forests of Gujarat — Gir, Nal Sarovar & Beyond",
    desc:  "Gir National Park, Marine National Park, Nal Sarovar — Gujarat's incredible wildlife sanctuaries and nature reserves.",
    keywords: "Gir National Park, Asiatic lion, Gujarat wildlife, Nal Sarovar birds, Wild Ass sanctuary",
  },
  "/heritage": {
    title: "Gujarat Heritage — UNESCO World Heritage Sites & 5000 Years of History",
    desc:  "Rani ki Vav, Champaner, Dholavira, Ahmedabad Walled City — Gujarat's UNESCO World Heritage Sites and ancient civilisations.",
    keywords: "Gujarat UNESCO heritage, Rani ki Vav, Dholavira, Champaner, Ahmedabad heritage city",
  },
  "/personalities": {
    title: "Icons of Gujarat — Leaders, Visionaries & Pioneers",
    desc:  "Inspiring personalities who shaped India and the world from Gujarat — Gandhi, Patel, Vikram Sarabhai, Dhirubhai Ambani and more.",
    keywords: "Gujarat personalities, Mahatma Gandhi, Sardar Patel, Vikram Sarabhai, Dhirubhai Ambani",
  },
  "/when-to-visit": {
    title: "Best Time to Visit Gujarat — Complete Season & Travel Guide",
    desc:  "Month-by-month guide to visiting Gujarat — seasons, festivals, weather, region tips, and how to get there. Plan your perfect trip to Gujarat.",
    keywords: "best time to visit Gujarat, Gujarat weather, Gujarat seasons, Gujarat travel guide, Rann Utsav, Navratri Gujarat",
  },
  "/history": {
    title: "Gujarat Timeline — A Journey Through 5000 Years of History",
    desc:  "Explore the epic historical timeline of Gujarat, from the Indus Valley Civilization and ancient dynasties to the freedom struggle and modern era.",
    keywords: "Gujarat history, Indus Valley Civilization Lothal, Dandi March, Gujarat timeline, Solanki Dynasty",
  },
  "/blog": {
    title: "Travel Logs — Gujarat Tourism Editorial Magazine",
    desc:  "Curated travel chronicles, immersive field dispatches and editorial essays by Gujarat's finest travel writers. Explore hidden trails, culinary journeys and cultural stories.",
    keywords: "Gujarat travel blog, Gujarat travel stories, Rann of Kutch blog, Gujarat food culture, Gujarat wildlife photography",
  },
};

/* ── Scroll-to-top on every route change ── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

/* ── Premium Page Loader ── */
function PageLoader() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center gap-5"
      style={{ background: "#1E0F12" }}
      aria-label="Loading page"
      role="status"
    >
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border border-amber-500/15" />
        <div className="absolute inset-0 rounded-full border-t-2 border-[#C5A880] animate-spin" />
        <div
          className="absolute inset-3 rounded-full animate-pulse"
          style={{ background: "linear-gradient(135deg, #800020, #C5A880)" }}
        />
      </div>
      <p
        className="text-[#C5A880]/50 text-xs tracking-[0.3em] uppercase animate-pulse"
        style={{ fontFamily: "DM Mono, monospace" }}
      >
        Loading Gujarat...
      </p>
    </div>
  );
}

/* ── Dynamic SEO Metadata Controller ── */
function SEOController() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname] ?? pageMeta["/"];

    document.title = meta.title;

    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.name = "description";
      document.head.appendChild(descTag);
    }
    descTag.content = meta.desc;

    let kwTag = document.querySelector('meta[name="keywords"]');
    if (!kwTag) {
      kwTag = document.createElement("meta");
      kwTag.name = "keywords";
      document.head.appendChild(kwTag);
    }
    kwTag.content = meta.keywords;

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = meta.title;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = meta.desc;
  }, [pathname]);

  return null;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   APP ROOT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function App() {
  /* ── Prevent browser scroll restoration on reload ── */
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div
      id="app-root"
      className="min-h-screen flex flex-col overflow-x-hidden"
      style={{ background: "#1E0F12", color: "#E2D4C9" }}
    >
      {/* ── Global route-level utilities ── */}
      <ScrollToTop />
      <SEOController />

      {/* ── Navbar — Shown on all pages ── */}
      <Navbar />

      {/* ── Main Page Content ── */}
      <main
        id="main-content"
        className="flex-grow relative z-10 w-full max-w-full"
        role="main"
      >
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"               element={<Home />} />
            <Route path="/destinations"   element={<Destinations />} />
            <Route path="/temples"        element={<Temples />} />
            <Route path="/beaches"        element={<Beaches />} />
            <Route path="/forest"         element={<Forest />} />
            <Route path="/heritage"       element={<Heritage />} />
            <Route path="/personalities"  element={<Personalities />} />
            <Route path="/when-to-visit"  element={<WhenToVisit />} />
            <Route path="/history"        element={<Timeline />} />
            <Route path="/blog"           element={<Blog />} />
            <Route path="/blog/:id"       element={<BlogPost />} />
            <Route path="/about-us"       element={<AboutUs />} />
            <Route path="/contact-us"     element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer"     element={<Disclaimer />} />
            {/* Fallback — redirect unknown paths to home */}
            <Route path="*"              element={<Home />} />
          </Routes>
        </Suspense>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}