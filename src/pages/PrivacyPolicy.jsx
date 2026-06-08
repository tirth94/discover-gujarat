import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-[#C5A880] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
        Privacy Policy
      </h1>
      <div className="prose prose-invert prose-p:text-white/70 prose-a:text-[#C5A880] max-w-none space-y-6 text-lg leading-relaxed">
        <p>At Discover Gujarat, accessible from <a href="https://discover-gujarat.vercel.app" target="_blank" rel="noopener noreferrer">discover-gujarat.vercel.app</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by our website and how we use it.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Log Files</h2>
        <p>Discover Gujarat follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Cookies and Web Beacons</h2>
        <p>Like any other website, Discover Gujarat uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Third-Party Privacy Policies</h2>
        <p>Our Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers (like Google AdSense) for more detailed information.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Consent</h2>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
      </div>
    </div>
  );
}
