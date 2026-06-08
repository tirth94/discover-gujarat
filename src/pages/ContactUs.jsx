import React from "react";

export default function ContactUs() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-[#C5A880] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
        Contact Us
      </h1>
      <div className="prose prose-invert prose-p:text-white/70 prose-a:text-[#C5A880] max-w-none space-y-6 text-lg leading-relaxed">
        <p>We love hearing from our readers, travelers, and history enthusiasts! Whether you have a question about our content, want to give feedback about the website layout, noticed something that needs an edit, or want to discuss a project with our agency, M-Three Pixel, feel free to drop us a message.</p>
        <p>You can reach us directly via email:<br/>
        📧 Email: <a href="mailto:tirt.rathod94@gmail.com">tirt.rathod94@gmail.com</a></p>
        <p>Website Owner & Developer: Tirth Rathod<br/>
        Agency: M-Three Pixel<br/>
        Live Project: <a href="https://discover-gujarat.vercel.app" target="_blank" rel="noopener noreferrer">discover-gujarat.vercel.app</a></p>
        <p>We do our best to respond to all inquiries within 24 to 48 hours. Thank you for supporting Discover Gujarat!</p>
      </div>
    </div>
  );
}
