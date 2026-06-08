import React from "react";

export default function Disclaimer() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-[#C5A880] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
        Disclaimer
      </h1>
      <div className="prose prose-invert prose-p:text-white/70 prose-a:text-[#C5A880] max-w-none space-y-6 text-lg leading-relaxed">
        <p>The information provided on Discover Gujarat (<a href="https://discover-gujarat.vercel.app" target="_blank" rel="noopener noreferrer">discover-gujarat.vercel.app</a>) is for general informational, educational, and travel guiding purposes only.</p>
        <p>While we strive to keep the historical data, travel insights, and images accurate and up-to-date, Tirth Rathod and M-Three Pixel make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information contained on the website.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Images and Placeholders</h2>
        <p>Please note that during the current preview/development phase of this website, some images and content may serve as temporary placeholders to test the UI/UX layout and responsiveness. Original ownership of any third-party media remains with their respective creators.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">External Links</h2>
        <p>Through this website, you may be able to link to other websites which are not under our control. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
      </div>
    </div>
  );
}
