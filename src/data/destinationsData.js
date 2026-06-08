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
    image: "/ahmedabad.png",
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
    tips: "Best explored through the morning Heritage Walk. Winter (Oct-Mar) is the best time to visit.",
  },
  {
    id: "kutch",
    name: "Kutch – Bhuj",
    zone: "North-West Gujarat",
    category: "DESERT",
    tag: "Cultural Hub",
    description:
      "The gateway to the surreal White Rann desert, famous for rich Kutchi handicrafts, historic Aina Mahal, and palaces carved from centuries of nomadic artisan tradition.",
    image: "/kutch.png",
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
    tips: "Visit during the full moon in winter to experience the magical glow of the salt flats. Permits are required for the Rann.",
  },
  {
    id: "junagadh",
    name: "Junagadh – Gir",
    zone: "Saurashtra",
    category: "WILDLIFE",
    tag: "Royal Foothills",
    description:
      "An ancient city nestled at the base of Mount Girnar, home to wild eco-system tracks where the majestic Asiatic Lion roams in its last natural habitat on earth.",
    image: "/junagadh.png",
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
    tips: "Safari permits for Gir must be booked well in advance online. The sanctuary is closed from mid-June to mid-October.",
  },
  {
    id: "surat",
    name: "Surat & Vadodara",
    zone: "South / Central Gujarat",
    category: "URBAN",
    tag: "Cultural & Diamond Hubs",
    description:
      "Vadodara represents the cultural capital with the grand Laxmi Vilas Palace, while Surat stands as the fast-paced global textile and diamond cutting capital of the world.",
    image: "/surat.png",
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
    tips: "Don't miss the street food in Surat, especially Locho and Surti Undhiyu. In Vadodara, explore the Baroda Museum.",
  },
  {
    id: "dwarka",
    name: "Dwarka",
    zone: "Saurashtra",
    category: "SPIRITUAL",
    tag: "Char Dham",
    description:
      "One of India's four sacred Char Dhams, Dwarka is the legendary kingdom of Lord Krishna on the western tip of Gujarat — a city where mythology, history, and the Arabian Sea converge.",
    image: "/dwarka.png",
    popularSpot: "Dwarkadhish Temple & Beyt Dwarka",
    highlights: ["Dwarkadhish Temple", "Nageshwar Jyotirlinga", "Beyt Dwarka Island", "Gomti Ghat"],
    bestTime: "October – March",
    distance: "450 km from Ahmedabad",
    color: "#FFD700",
    history: "Dwarka is believed to be the ancient kingdom established by Lord Krishna after leaving Mathura. Submerged ruins of an ancient city have been discovered offshore, lending credibility to its legendary status. The present Dwarkadhish Temple dates back to the 16th century, though the site has been sacred for over 2,500 years.",
    attractions: [
      { name: "Dwarkadhish Temple", desc: "The magnificent five-storey temple dedicated to Lord Krishna, one of India's holiest Char Dham pilgrimage sites." },
      { name: "Nageshwar Jyotirlinga", desc: "One of the twelve sacred Jyotirlingas, featuring a colossal 25-metre statue of Lord Shiva in meditation." },
      { name: "Beyt Dwarka Island", desc: "The legendary island residence of Lord Krishna, accessible by boat from Okha with pristine beaches and sacred temples." }
    ],
    tips: "Visit Gomti Ghat at sunrise for a deeply spiritual experience. Book boat tickets to Beyt Dwarka early as queues get long during festivals.",
  },
  {
    id: "somnath",
    name: "Somnath",
    zone: "Saurashtra",
    category: "SPIRITUAL",
    tag: "Jyotirlinga",
    description:
      "Home to the eternal Somnath Jyotirlinga — the first of twelve sacred Shiva shrines — this coastal temple city has risen from destruction seven times, standing as an undying symbol of faith.",
    image: "/somnath.png",
    popularSpot: "Somnath Temple & Triveni Sangam",
    highlights: ["Somnath Jyotirlinga", "Bhalka Tirth", "Triveni Sangam", "Light & Sound Show"],
    bestTime: "November – February",
    distance: "400 km from Ahmedabad",
    color: "#FF6B35",
    history: "Somnath is one of the most ancient pilgrimage sites in India, mentioned in the Rigveda. The temple was repeatedly plundered — most famously by Mahmud of Ghazni in 1026 AD — and rebuilt each time by devoted rulers. The current temple was reconstructed after Indian independence under the initiative of Sardar Vallabhbhai Patel.",
    attractions: [
      { name: "Somnath Temple", desc: "The first Jyotirlinga shrine of Lord Shiva, standing magnificently on the Arabian Sea shore with a breathtaking evening aarti." },
      { name: "Bhalka Tirth", desc: "The sacred site where Lord Krishna is believed to have ended his earthly journey, marked by an ancient peepal tree." },
      { name: "Triveni Sangam", desc: "The holy confluence of three sacred rivers — Hiran, Kapila, and Saraswati — meeting the Arabian Sea." }
    ],
    tips: "The evening light and sound show at Somnath Temple is unmissable. Arrive at least 30 minutes early for the sunset aarti.",
  },
  {
    id: "rann-of-kutch",
    name: "Rann of Kutch",
    zone: "North-West Gujarat",
    category: "DESERT",
    tag: "Salt Wonder",
    description:
      "The world's largest salt desert stretches endlessly under an infinite sky — a surreal lunar landscape that transforms into a magical white canvas under the full moon during Rann Utsav.",
    image: "/rann-of-kutch.png",
    popularSpot: "White Rann & Kala Dungar",
    highlights: ["White Rann Sunset", "Kala Dungar Black Hill", "Flamingo Sanctuary", "Tent City"],
    bestTime: "November – February (Rann Utsav)",
    distance: "425 km from Ahmedabad",
    color: "#E8D5A3",
    history: "The Rann of Kutch was once a navigable sea arm of the Arabian Sea. Over millennia, tectonic activity and sedimentation transformed it into a vast salt marsh. The region was home to the ancient Harappan city of Dholavira and has been a crossroads of trade, migration, and culture for over 5,000 years.",
    attractions: [
      { name: "White Rann Sunset Point", desc: "The most photographed sunset in Gujarat — the salt flats glow in shades of gold, pink, and violet as the sun dips below the horizon." },
      { name: "Kala Dungar", desc: "The highest point in Kutch at 462 metres, offering a panoramic view of the vast Rann and the Pakistan border beyond." },
      { name: "Flamingo City", desc: "One of the world's largest flamingo breeding grounds in the Little Rann, hosting hundreds of thousands of birds in season." }
    ],
    tips: "A government permit is required to visit the White Rann. Full moon nights are absolutely magical — plan your trip around the lunar calendar.",
  },
  {
    id: "vadodara",
    name: "Vadodara",
    zone: "Central Gujarat",
    category: "HERITAGE",
    tag: "Cultural Capital",
    description:
      "The cultural capital of Gujarat, where the grand Laxmi Vilas Palace — larger than Buckingham Palace — stands alongside world-class museums, vibrant art galleries, and the legacy of the progressive Gaekwad dynasty.",
    image: "/vadodara.png",
    popularSpot: "Laxmi Vilas Palace & Sayaji Baug",
    highlights: ["Laxmi Vilas Palace", "Sayaji Baug Museum", "Champaner-Pavagadh", "Kirti Mandir"],
    bestTime: "October – March",
    distance: "110 km from Ahmedabad",
    color: "#9B59B6",
    history: "Vadodara, formerly known as Baroda, was the capital of the Gaekwad princely state. The visionary Maharaja Sayajirao Gaekwad III transformed the city in the late 19th century by introducing free compulsory education, public libraries, and progressive social reforms decades ahead of British India. The city's artistic and intellectual legacy endures to this day.",
    attractions: [
      { name: "Laxmi Vilas Palace", desc: "A magnificent Indo-Saracenic palace four times the size of Buckingham Palace, still home to the Gaekwad royal family." },
      { name: "Champaner-Pavagadh", desc: "A UNESCO World Heritage Site featuring the powerful Mahakali Temple atop Pavagadh hill and stunning Sultanate-era mosques." },
      { name: "Sayaji Baug & Museum", desc: "A sprawling 113-acre garden housing one of India's finest museums with rare Gaekwad-era collections." }
    ],
    tips: "Vadodara's Navratri celebrations are among the most authentic in Gujarat. The Champaner-Pavagadh ropeway offers stunning views — visit on a clear day.",
  },
  {
    id: "dholavira",
    name: "Dholavira",
    zone: "North-West Gujarat",
    category: "ANCIENT",
    tag: "UNESCO Heritage",
    description:
      "A UNESCO World Heritage City rising from the Kutch desert — Dholavira is one of the five largest cities of the ancient Indus Valley Civilisation, revealing the extraordinary urban genius of a 5,000-year-old culture.",
    image: "/dholavira.png",
    popularSpot: "Harappan Citadel & Ancient Reservoirs",
    highlights: ["Harappan Citadel", "Ancient Water Reservoirs", "Indus Script Signboard", "Dholavira Museum"],
    bestTime: "October – February",
    distance: "390 km from Ahmedabad",
    color: "#C09050",
    history: "Dholavira was one of the most sophisticated cities of the Indus Valley Civilisation, flourishing between 2600–1900 BC. Located on Khadir Island in the Rann of Kutch, it featured advanced urban planning including a multi-tiered city layout, sophisticated water harvesting systems with 16 reservoirs, and a unique stone inscription believed to be an early form of the Indus script.",
    attractions: [
      { name: "The Harappan Citadel", desc: "The fortified upper city of ancient Dholavira, revealing the remarkable urban planning and governance of a 5,000-year-old civilisation." },
      { name: "Ancient Water Reservoirs", desc: "A network of 16 sophisticated rock-cut reservoirs that supplied water to the entire city — an engineering marvel of the ancient world." },
      { name: "Dholavira Archaeological Museum", desc: "Houses remarkable artefacts including pottery, jewellery, and seals from one of antiquity's greatest urban civilisations." }
    ],
    tips: "Dholavira is remote — stay overnight in the village for sunrise over the ruins. Combine with a Rann of Kutch trip for a complete Kutch experience.",
  },
  {
    id: "palitana",
    name: "Palitana",
    zone: "Saurashtra",
    category: "SPIRITUAL",
    tag: "Jain Pilgrimage",
    description:
      "Atop the sacred Shatrunjaya Hill rise over 900 breathtaking marble temples — the holiest site in Jainism and one of the world's most extraordinary concentrations of sacred architecture.",
    image: "/palitana.png",
    popularSpot: "Shatrunjaya Hill Temple Complex",
    highlights: ["900+ Marble Temples", "3,500 Sacred Steps", "Adinath Temple", "Panoramic Saurashtra Views"],
    bestTime: "October – March",
    distance: "215 km from Ahmedabad",
    color: "#A0C4FF",
    history: "Palitana's Shatrunjaya Hill has been a sacred Jain pilgrimage site for over 2,500 years. According to Jain tradition, all 24 Tirthankaras have meditated on this hill. The present temple complex was built primarily between the 11th and 16th centuries by wealthy Jain merchants, representing an unparalleled concentration of devotional investment and artistic achievement.",
    attractions: [
      { name: "Adinath Temple", desc: "The principal temple atop Shatrunjaya Hill dedicated to the first Jain Tirthankara, featuring breathtaking marble carvings and gold ornamentation." },
      { name: "The Sacred Climb", desc: "The 3,500-step pilgrimage ascent through the Shatrunjaya Hills — a physically demanding but spiritually transformative journey undertaken by Jain pilgrims worldwide." },
      { name: "Sunrise from the Summit", desc: "The panoramic sunrise view from the hilltop over the Saurashtra plains and the Gulf of Khambhat is one of Gujarat's most magnificent natural spectacles." }
    ],
    tips: "The temples are closed between sunset and sunrise — plan to ascend by 6 AM. No leather items are allowed on the hill. The climb takes 2–3 hours.",
  },
  {
    id: "saputara",
    name: "Saputara",
    zone: "South Gujarat",
    category: "NATURE",
    tag: "Hill Station",
    description:
      "Gujarat's only hill station, nestled in the Sahyadri ranges of the Dang district at 1,000 metres above sea level — a misty paradise of dense forests, waterfalls, and tribal Dang culture.",
    image: "/saputara.png",
    popularSpot: "Saputara Lake & Sunset Point",
    highlights: ["Saputara Lake", "Sunset Point", "Step Garden", "Tribal Museum"],
    bestTime: "June – September (Monsoon) & October – February",
    distance: "250 km from Ahmedabad",
    color: "#27AE60",
    history: "Saputara, meaning 'abode of serpents' in the Dang tribal language, has been home to the indigenous Dang tribe for centuries. The region was part of the Dang Agency under British rule. It was developed as a hill station after Indian independence to provide a mountain retreat for Gujarat's residents, and remains the only hill station in the state.",
    attractions: [
      { name: "Saputara Lake", desc: "A scenic artificial lake in the heart of the hill station, ideal for boating, surrounded by hills and dense Sahyadri forest." },
      { name: "Sunset Point", desc: "The most celebrated viewpoint in Saputara, offering dramatic panoramic views over the Sahyadri ranges glowing in the evening light." },
      { name: "Dang Tribal Museum", desc: "A fascinating museum documenting the unique culture, art, music, and traditions of the indigenous Dang tribe of South Gujarat." }
    ],
    tips: "Monsoon transforms Saputara into a lush green paradise with active waterfalls — the best season to visit. The Dang Darbar tribal festival in Holi season is unmissable.",
  },
  {
    id: "statue-of-unity",
    name: "Statue of Unity",
    zone: "Central Gujarat",
    category: "LANDMARK",
    tag: "World's Tallest",
    description:
      "At 182 metres, the world's tallest statue stands as a colossal tribute to Sardar Vallabhbhai Patel — the Iron Man of India — rising from the Narmada River in a spectacular valley setting.",
    image: "/statue-of-unity.png",
    popularSpot: "Viewing Gallery & Valley of Flowers",
    highlights: ["182m Viewing Gallery", "Valley of Flowers", "Jungle Safari", "Laser Light Show"],
    bestTime: "October – March",
    distance: "200 km from Ahmedabad",
    color: "#B05A2F",
    history: "The Statue of Unity was conceived as a tribute to Sardar Vallabhbhai Patel, who unified 562 princely states into modern India after independence. Built at a cost of ₹2,989 crore, it was inaugurated by Prime Minister Narendra Modi on 31 October 2018 — Sardar Patel's 143rd birth anniversary. Over 5 million kg of iron was collected from farmers across India to build it.",
    attractions: [
      { name: "Viewing Gallery at 153m", desc: "An observation deck inside the statue at 153 metres offering breathtaking 360-degree views of the Sardar Sarovar Dam and surrounding Satpura and Vindhya ranges." },
      { name: "Valley of Flowers", desc: "A spectacular 24-acre garden with thousands of seasonal flowers, one of India's most photographed landscape attractions." },
      { name: "Jungle Safari & Tent City", desc: "A wildlife zone with lion, tiger, and leopard enclosures, combined with luxury tent city accommodation on the Narmada riverbank." }
    ],
    tips: "Book tickets online well in advance — the viewing gallery sells out quickly on weekends. The laser and light show on the Sardar Sarovar Dam in the evening is spectacular.",
  },
];

export const filterCategories = ["ALL", "HERITAGE", "WILDLIFE", "DESERT", "URBAN"];

export const destinationStats = [
  { value: "33+",   label: "Districts" },
  { value: "1,600 km", label: "Coastline" },
  { value: "5,000+",  label: "Years of History" },
  { value: "6",     label: "UNESCO Sites" },
];
