/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DESTINATIONS DATA — Gujarat Tourism
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const destinationsData = [
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    zone: "Central Gujarat",
    category: "HERITAGE",
    tag: "UNESCO City",
    description:
      "India's first UNESCO World Heritage City, blending ancient pols and intricate stone jaali mosques with modern urban design. A living tapestry of 600 years of history.",
    image:
      "https://images.unsplash.com/photo-1603251483777-f046b0fa3f6f?auto=format&fit=crop&w=800&q=80",
    popularSpot: "Sabarmati Ashram & Adalaj Stepwell",
    highlights: ["Pols & Heritage Walk", "Adalaj Stepwell", "Sabarmati Ashram", "Kankaria Lake"],
    bestTime: "October – March",
    distance: "0 km (State Capital)",
    color: "#C5A880",
    history: "Founded in 1411 by Sultan Ahmed Shah, the city served as the capital of the Gujarat Sultanate. It later became an important center for the textile industry during the British era, earning the title 'Manchester of the East'. Mahatma Gandhi established the Sabarmati Ashram here in 1917, making it the epicenter of the Indian independence movement.",
    attractions: [
      { name: "Sabarmati Ashram", desc: "The former residence of Mahatma Gandhi and the nerve center of the Indian freedom struggle." },
      { name: "Adalaj Stepwell", desc: "A stunning five-story deep stepwell built in 1498, famous for its intricate Indo-Islamic carvings." },
      { name: "Sidi Saiyyed Mosque", desc: "Known for its exquisite stone jaali work, particularly the Tree of Life motif." }
    ],
    tips: "Best explored through the morning Heritage Walk. Winter (Oct-Mar) is the best time to visit."
  },
  {
    id: "kutch",
    name: "Kutch – Bhuj",
    zone: "North-West Gujarat",
    category: "DESERT",
    tag: "Cultural Hub",
    description:
      "The gateway to the surreal White Rann desert, famous for rich Kutchi handicrafts, historic Aina Mahal, and palaces carved from centuries of nomadic artisan tradition.",
    image:
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
    popularSpot: "White Desert & Bhujodi Village",
    highlights: ["Rann of Kutch", "Aina Mahal", "Bhujodi Craft Village", "Prag Mahal"],
    bestTime: "November – February (Rann Utsav)",
    distance: "400 km from Ahmedabad",
    color: "#D4A853",
    history: "Kutch has a history that dates back to the Indus Valley Civilization (Dholavira). Historically, it was an independent princely state known for its maritime trade routes. The devastating 2001 earthquake reshaped the region, but it rose from the ashes to become a global tourism hub.",
    attractions: [
      { name: "Great Rann of Kutch", desc: "The largest salt desert in the world, stretching to the horizon in blinding white." },
      { name: "Aina Mahal & Prag Mahal", desc: "Historic palaces in Bhuj showcasing a blend of Indian and European architecture." },
      { name: "Bhujodi & Nirona Villages", desc: "Centers of traditional Kutchi art, including Rogan art, block printing, and embroidery." }
    ],
    tips: "Visit during the full moon in winter to experience the magical glow of the salt flats. Permits are required for the Rann."
  },
  {
    id: "junagadh",
    name: "Junagadh – Gir",
    zone: "Saurashtra",
    category: "WILDLIFE",
    tag: "Royal Foothills",
    description:
      "An ancient city nestled at the base of Mount Girnar, home to wild eco-system tracks where the majestic Asiatic Lion roams in its last natural habitat on earth.",
    image:
      "https://images.unsplash.com/photo-1615959189197-48400dc26426?auto=format&fit=crop&w=800&q=80",
    popularSpot: "Gir National Park & Uparkot Fort",
    highlights: ["Gir National Park", "Uparkot Fort", "Girnar Hill", "Sasan Gir Safari"],
    bestTime: "December – March",
    distance: "320 km from Ahmedabad",
    color: "#5DBB63",
    history: "The history of Junagadh is etched in stone—literally, with Ashokan edicts dating back to 250 BC. It was ruled by the Mauryans, Kshatrapas, Guptas, and later the Babi Nawabs. Uparkot Fort has withstood sieges lasting over a decade.",
    attractions: [
      { name: "Gir National Park", desc: "The only place in the world to spot Asiatic lions in the wild, alongside leopards and diverse birdlife." },
      { name: "Uparkot Fort", desc: "An ancient fort over 2300 years old, featuring deep stepwells and Buddhist caves." },
      { name: "Mahabat Maqbara", desc: "A spectacular mausoleum featuring unique spiral staircases and intricate carvings." }
    ],
    tips: "Safari permits for Gir must be booked well in advance online. The sanctuary is closed from mid-June to mid-October."
  },
  {
    id: "surat",
    name: "Surat & Vadodara",
    zone: "South / Central Gujarat",
    category: "URBAN",
    tag: "Cultural & Diamond Hubs",
    description:
      "Vadodara represents the cultural capital with the grand Laxmi Vilas Palace, while Surat stands as the fast-paced global textile and diamond cutting capital of the world.",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    popularSpot: "Laxmi Vilas Palace & Dumas Coast",
    highlights: ["Laxmi Vilas Palace", "Dumas Beach", "Surat Diamond Market", "Baroda Museum"],
    bestTime: "October – February",
    distance: "265 km (Vadodara) / 263 km (Surat)",
    color: "#7B9EC8",
    history: "Vadodara blossomed under the visionary rule of Maharaja Sayajirao Gaekwad III, who transformed it into an educational and architectural marvel. Surat was India's premier seaport during the Mughal era and the site of the first British trading factory in 1612.",
    attractions: [
      { name: "Laxmi Vilas Palace (Vadodara)", desc: "Four times the size of Buckingham Palace, this opulent royal residence is an architectural masterpiece." },
      { name: "Champaner-Pavagadh", desc: "A nearby UNESCO World Heritage site featuring un-touched Islamic and Hindu architecture." },
      { name: "Dumas Beach (Surat)", desc: "A popular black sand beach on the Arabian Sea coast, known for its local snacks." }
    ],
    tips: "Don't miss the street food in Surat, especially Locho and Surti Undhiyu. In Vadodara, explore the Baroda Museum."
  },
];

export const filterCategories = ["ALL", "HERITAGE", "WILDLIFE", "DESERT", "URBAN"];

export const destinationStats = [
  { value: "33+",   label: "Districts" },
  { value: "1,600 km", label: "Coastline" },
  { value: "5,000+",  label: "Years of History" },
  { value: "6",     label: "UNESCO Sites" },
];
