import React from "react";

export default function TermsConditions() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-[#C5A880] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
        Terms & Conditions
      </h1>
      <div className="prose prose-invert prose-p:text-white/70 prose-a:text-[#C5A880] max-w-none space-y-6 text-lg leading-relaxed">
        <p>Welcome to Discover Gujarat!</p>
        <p>These terms and conditions outline the rules and regulations for the use of our website, located at <a href="https://discover-gujarat.vercel.app" target="_blank" rel="noopener noreferrer">discover-gujarat.vercel.app</a>, managed by M-Three Pixel. By accessing this website, we assume you accept these terms and conditions. Do not continue to use the site if you do not agree to take all of the terms and conditions stated on this page.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">License & Intellectual Property</h2>
        <p>Unless otherwise stated, Tirth Rathod and/or M-Three Pixel own the intellectual property rights for all material on Discover Gujarat. All intellectual property rights are reserved. You may access this from our site for your own personal use subjected to restrictions set in these terms and conditions.</p>
        
        <p>You must not:</p>
        <ul className="list-disc pl-6 text-white/70 space-y-2">
          <li>Republish material from our website without proper credit.</li>
          <li>Sell, rent, or sub-license material from Discover Gujarat.</li>
          <li>Reproduce, duplicate, or copy material from this platform for commercial purposes.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Content Liability</h2>
        <p>We shall not be held responsible for any content that appears on your website if you share our links. You agree to protect and defend us against all claims that are rising on your website.</p>
      </div>
    </div>
  );
}
