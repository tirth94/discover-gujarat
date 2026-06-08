import React from "react";

export default function AboutUs() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-[#C5A880] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
        About Us
      </h1>
      <div className="prose prose-invert prose-p:text-white/70 prose-a:text-[#C5A880] max-w-none space-y-6 text-lg leading-relaxed">
        <p>Welcome to Discover Gujarat, your ultimate digital guide to the vibrant state of Gujarat. This platform is proudly developed and managed by M-Three Pixel, a creative web development agency led by Tirth Rathod.</p>
        <p>Our mission is simple: to bring the rich history, diverse culture, breathtaking geography, and iconic tourist destinations of Gujarat closer to the world. From the ancient port city of Lothal and the golden era of the Solanki dynasty to the mesmerizing white sands of the Rann of Kutch and the roaring wilderness of Gir National Park, we cover it all with a passion for high-quality UI/UX design.</p>
        <p>Whether you are a student researching Gujarat’s historical evolution, a traveler planning your next big road trip, or someone who loves exploring deep cultural roots, Discover Gujarat provides well-researched, engaging, and highly informative content tailored just for you.</p>
        <p>We are committed to delivering seamless digital experiences and authentic insights. Thank you for visiting our site, and we hope you enjoy exploring Gujarat with us!</p>
        <p>If you have any questions, suggestions, or feedback, please feel free to reach out to us at <a href="mailto:tirt.rathod94@gmail.com">tirt.rathod94@gmail.com</a>.</p>
      </div>
    </div>
  );
}
