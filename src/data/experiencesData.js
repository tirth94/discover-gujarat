/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GUJARAT TOURISM — All Experiences Data
   Each entry has card info + rich popup content
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const experiences = [
  {
    id: "temple-trails",
    icon: "🕌",
    title: "Temple Trails",
    count: "200+ Temples",
    color: "#C5A880",
    tagline: "Where Faith Meets Architecture",
    popup: {
      hero: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarat is the heartland of India's spiritual geography. From the oceanfront grandeur of Somnath to the intricate marble carvings of Dilwara, the state is home to over 200 temples that span more than 2,000 years of devotional art and architecture. Each shrine is a living testament to Gujarat's unbroken thread of faith.",
      highlights: [
        {
          label: "Somnath Temple",
          desc: "One of the 12 Jyotirlinga shrines of Lord Shiva, rebuilt seven times over centuries, standing defiantly on the shores of the Arabian Sea.",
        },
        {
          label: "Dwarka — City of Krishna",
          desc: "One of the four sacred dhams of Hinduism, believed to be the ancient kingdom of Lord Krishna, partially submerged beneath the sea.",
        },
        {
          label: "Palitana Jain Temples",
          desc: "A cluster of 863 marble temples atop Shatrunjaya Hill — the only city in the world to be declared fully vegetarian by law.",
        },
        {
          label: "Modhera Sun Temple",
          desc: "An 11th-century Solanki masterpiece dedicated to the Sun God, renowned for its intricately carved stepped kund and mandapa.",
        },
      ],
      bestTime: "October – March",
      tip: "Visit Somnath at sunset for the sound-and-light show on the sea-facing steps — a deeply moving experience.",
      facts: ["200+ temples across the state", "12 UNESCO-listed structures", "Over 1,000 years of stone-carving tradition", "Jain & Hindu pilgrimage circuits"],
    },
  },
  {
    id: "beach-escapes",
    icon: "🏖️",
    title: "Beach Escapes",
    count: "50+ Beaches",
    color: "#4dd9d9",
    tagline: "India's Hidden Coastal Treasures",
    popup: {
      hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarat's 1,600 km coastline — the longest of any Indian state — cradles some of the country's most pristine and least-crowded beaches. From the vibrant beach town of Mandvi with its ship-building yards to the lonely dunes of Diu, each stretch offers a unique escape from the ordinary.",
      highlights: [
        {
          label: "Mandvi Beach",
          desc: "A tranquil crescent of golden sand backed by the Vijay Vilas Palace — where camel rides meet spectacular sunsets over the Arabian Sea.",
        },
        {
          label: "Diu Island",
          desc: "A Union Territory with Portuguese colonial charm, white-sand beaches, and a laid-back atmosphere unlike anywhere else in India.",
        },
        {
          label: "Ahmedpur Mandvi",
          desc: "A quiet gem popular with backpackers and water sports enthusiasts, offering parasailing, jet-skiing, and banana boat rides.",
        },
        {
          label: "Tithal Beach",
          desc: "A black-sand beach near Valsad, famous for its unique volcanic sands and the nearby Swaminarayan temple.",
        },
      ],
      bestTime: "November – February",
      tip: "Mandvi beach has a camel polo ground — book a sunrise camel ride for a truly golden start to your day.",
      facts: ["1,600 km of coastline", "50+ accessible beaches", "Multiple water sports hubs", "Pristine marine biodiversity"],
    },
  },
  {
    id: "safari-rides",
    icon: "🦁",
    title: "Safari Rides",
    count: "Gir Forest",
    color: "#4ade80",
    tagline: "Walk Among Kings",
    popup: {
      hero: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80",
      overview:
        "The Gir National Park and Wildlife Sanctuary is the last natural habitat of the Asiatic lion on Earth. Spanning 1,412 sq km of dry deciduous forest, Gir is a conservation miracle — the lion population has grown from a mere 20 in 1900 to over 670 today. A jeep safari through this ancient forest is one of the most thrilling wildlife experiences in the world.",
      highlights: [
        {
          label: "Asiatic Lion Spotting",
          desc: "With over 670 lions, your chances of a sighting are exceptionally high. Dawn and dusk safaris offer the best opportunities.",
        },
        {
          label: "Leopard & Hyena Trails",
          desc: "Beyond lions, the park is rich in leopards, striped hyenas, jungle cats, and over 300 species of birds.",
        },
        {
          label: "Kamleshwar Dam",
          desc: "A serene reservoir inside Gir where crocodiles bask and lions come to drink — an iconic wildlife photography spot.",
        },
        {
          label: "Night Safari (Amreli)",
          desc: "The recently opened night safari zone lets you spot nocturnal wildlife — porcupines, owlets, and the elusive jungle cat.",
        },
      ],
      bestTime: "December – April (park closed July–Oct)",
      tip: "Book jeep safaris at least 90 days in advance. Morning slots at 6 AM offer the highest lion sighting probability.",
      facts: ["670+ Asiatic lions (2024 census)", "1,412 sq km protected area", "300+ bird species", "Near-zero poaching since 1972"],
    },
  },
  {
    id: "folk-culture",
    icon: "🎭",
    title: "Folk Culture",
    count: "Navratri & More",
    color: "#fbbf24",
    tagline: "Dance, Music & Living Traditions",
    popup: {
      hero: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarat's folk culture is one of India's most vibrant and intact living traditions. From the nine nights of Navratri — the world's largest folk dance festival — to the puppetry of Kathputli and the devotional singing of Bhavai, the state's cultural pulse beats with extraordinary colour and energy.",
      highlights: [
        {
          label: "Navratri — World's Largest Folk Dance",
          desc: "Nine nights of Garba and Dandiya-Raas celebrated across Gujarat, with Vadodara's celebrations attracting over 5 lakh participants nightly.",
        },
        {
          label: "Rann Utsav Festival",
          desc: "A 3-month cultural extravaganza in the Rann of Kutch featuring folk music, craft markets, camel rides, and tent city stays under the stars.",
        },
        {
          label: "Bhavai — Folk Theatre",
          desc: "Gujarat's centuries-old folk theatre tradition, performed with acrobatics, satire, and vibrant costumes across village squares.",
        },
        {
          label: "Tribal Art of Kutch",
          desc: "The Rabari and Ahir communities of Kutch maintain extraordinary embroidery, mirror-work, and mural painting traditions.",
        },
      ],
      bestTime: "October – March (festival season)",
      tip: "Attend Navratri at Vadodara's Fatehgunj grounds — the choreography and costume competition is a visual feast unlike anywhere else.",
      facts: ["Navratri: UNESCO Intangible Cultural Heritage", "5+ distinct folk dance forms", "3-month Rann Utsav festival", "200+ tribal craft villages"],
    },
  },
  {
    id: "local-cuisine",
    icon: "🍛",
    title: "Local Cuisine",
    count: "100+ Dishes",
    color: "#f97316",
    tagline: "A Symphony of Vegetarian Flavours",
    popup: {
      hero: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarati cuisine is a revelation for the senses — predominantly vegetarian yet explosively diverse. The iconic Gujarati Thali is a universe of flavours in itself, balancing sweet, salty, sour, and spicy in perfect harmony. From the street-side Dhokla stalls of Ahmedabad to the royal kitchens of Bhavnagar, every bite tells a story.",
      highlights: [
        {
          label: "Gujarati Thali",
          desc: "A complete meal experience featuring dal, shaak, roti, rice, kadhi, papad, pickle, and an array of sweets — a true vegetarian feast.",
        },
        {
          label: "Khakhra & Fafda-Jalebi",
          desc: "Gujarat's beloved street snacks: thin crispy khakhra with a dozen varieties, and the iconic fafda-jalebi breakfast combination.",
        },
        {
          label: "Undhiyu",
          desc: "A slow-cooked winter delicacy of mixed vegetables and fenugreek dumplings, traditionally made upside-down in earthen pots.",
        },
        {
          label: "Manek Chowk Night Market",
          desc: "Ahmedabad's legendary open-air market transforms into a food paradise after sunset — don't miss the pav bhaji and kulfi faluda.",
        },
      ],
      bestTime: "Year-round (winter for Undhiyu)",
      tip: "Try the Gujarati Thali at Agashiye restaurant in Ahmedabad's old city — a rooftop heritage dining experience with live folk music.",
      facts: ["100% vegetarian state by tradition", "Over 100 distinct regional dishes", "World-famous street food culture", "UNESCO Creative City of Gastronomy: Ahmedabad"],
    },
  },
  {
    id: "handicrafts",
    icon: "🏺",
    title: "Handicrafts",
    count: "Patola & Bandhani",
    color: "#a78bfa",
    tagline: "Threads of a Thousand Years",
    popup: {
      hero: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarat is one of India's greatest craft capitals. The state produces some of the world's most intricate textile arts — Patola silk weaving that takes months to complete a single saree, Bandhani tie-dye that creates thousands of micro-knots by hand, and Ajrakh block-printing that dates back 4,000 years to the Indus Valley Civilization.",
      highlights: [
        {
          label: "Patola Silk of Patan",
          desc: "A UNESCO-recognised craft where a single double-ikat Patola saree takes 6 months to weave, with prices starting at ₹1 lakh.",
        },
        {
          label: "Bandhani Tie-Dye",
          desc: "A tradition of creating intricate patterns by tying thousands of tiny knots before dyeing — a skill passed down through Khatri families.",
        },
        {
          label: "Kutch Embroidery",
          desc: "Six distinct embroidery styles from Kutch — Ahir, Rabari, Jat, Mutwa, Sodha, and Sumra — each a community's visual identity.",
        },
        {
          label: "Ajrakh Block Printing",
          desc: "A 4,500-year-old natural dye printing technique using hand-carved wooden blocks and mineral dyes, revived by Kutch artisans.",
        },
      ],
      bestTime: "October – February (craft fairs season)",
      tip: "Visit the Khamir Craft Resource Centre in Kutch to meet master artisans and buy directly — supporting livelihoods while getting authentic pieces.",
      facts: ["6 distinct Kutch embroidery styles", "Patola: 900-year-old tradition", "15,000+ artisan families", "Craft exports worth ₹500 crore annually"],
    },
  },
  {
    id: "festivals",
    icon: "🎪",
    title: "Festivals",
    count: "Rann Utsav & More",
    color: "#f43f5e",
    tagline: "Celebrations That Illuminate the Soul",
    popup: {
      hero: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarat is a state perpetually in celebration. Its festival calendar is one of the richest in India — from the moon-drenched white desert of Rann Utsav to the kite-filled skies of Uttarayan. Each festival is a window into Gujarat's joyful, inclusive, and deeply rooted cultural identity.",
      highlights: [
        {
          label: "Rann Utsav (Oct – Mar)",
          desc: "A 100-day cultural extravaganza on the white salt desert, featuring tent city stays, folk performances, and full-moon walks.",
        },
        {
          label: "Uttarayan — International Kite Festival",
          desc: "Every January 14th, millions of kites fill the sky across Gujarat — Ahmedabad hosts one of the world's largest kite festivals.",
        },
        {
          label: "Navratri (Oct)",
          desc: "Nine nights of Garba in traditional dress — Vadodara, Ahmedabad, and Rajkot host the grandest celebrations in the country.",
        },
        {
          label: "Modhera Dance Festival (Jan)",
          desc: "A classical dance festival held at the illuminated Modhera Sun Temple — one of the most visually stunning cultural events in India.",
        },
      ],
      bestTime: "October – January",
      tip: "Book Rann Utsav tent city accommodation 3 months in advance. Full-moon nights (November – February) are the most magical.",
      facts: ["Uttarayan: 2 million+ kites flown in Ahmedabad", "Navratri: UNESCO Intangible Heritage", "100-day Rann Utsav season", "15+ major annual festivals"],
    },
  },
  {
    id: "maritime-heritage",
    icon: "⚓",
    title: "Maritime Heritage",
    count: "Lothal & Beyond",
    color: "#38bdf8",
    tagline: "The World's First Seafarers",
    popup: {
      hero: "https://images.unsplash.com/photo-1565361836478-f7a9bcdabb3c?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarat was home to the world's first known tidal dock — at Lothal, built by the Indus Valley Civilisation over 4,500 years ago. This maritime legacy continues to the present day, with Gujarat operating India's busiest commercial ports and maintaining a vibrant boat-building tradition in Mandvi that dates back centuries.",
      highlights: [
        {
          label: "Lothal — World's First Dock (2400 BCE)",
          desc: "An Indus Valley site with the world's oldest known tidal dock, bead factories, and a warehouse — a UNESCO tentative list site.",
        },
        {
          label: "Mandvi Boat Yards",
          desc: "Traditional wooden dhow ships are still hand-built in Mandvi using centuries-old techniques, with some vessels sailing to the Persian Gulf.",
        },
        {
          label: "Diu Fort & Coastal Fortifications",
          desc: "Portuguese sea fortresses built to control Arabian Sea trade routes, offering dramatic views over the Gujarat coastline.",
        },
        {
          label: "National Maritime Heritage Complex",
          desc: "India's largest maritime museum, currently being built at Lothal — set to be a world-class centre for ocean history.",
        },
      ],
      bestTime: "November – February",
      tip: "Visit Lothal at sunrise when the ancient brick structures glow golden — the bead museum on-site has rare Indus Valley artefacts.",
      facts: ["4,500-year-old maritime history", "World's first tidal dock", "India's longest coastline (state)", "5+ major active commercial ports"],
    },
  },
  {
    id: "textile-art",
    icon: "🎨",
    title: "Textile Art",
    count: "4,500 Years Old",
    color: "#e879f9",
    tagline: "Colours Woven Into Identity",
    popup: {
      hero: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarat's textile heritage is among the most celebrated in the world. The state's artisans have been dyeing, weaving, and printing fabrics for over 4,500 years — a tradition that influenced fashion across Asia, Europe, and the Middle East. From the geometric patterns of Ajrakh to the luminous Patola silk, Gujarat's textiles are living art.",
      highlights: [
        {
          label: "Ajrakh Block Printing",
          desc: "Using hand-carved wooden blocks and natural mineral dyes, Ajrakh masters create complex geometric patterns in a process spanning 16 stages.",
        },
        {
          label: "Mashru Weaving",
          desc: "A fabric of silk warp and cotton weft, traditionally worn by those forbidden to wear pure silk — a perfect compromise of luxury and faith.",
        },
        {
          label: "Mata ni Pachedi",
          desc: "A ritual cloth painted by the Vaghari community as portable temples for goddess shrines — an extraordinary blend of art and devotion.",
        },
        {
          label: "Kalamkari & Natural Dyeing",
          desc: "Traditional pen and block printing using pomegranate, turmeric, and indigo plant dyes — chemical-free and centuries old.",
        },
      ],
      bestTime: "October – March (workshops available)",
      tip: "Take a hands-on Ajrakh block printing workshop in Bhuj — many artisan cooperatives offer half-day sessions for visitors.",
      facts: ["4,500-year textile tradition", "UNESCO recognised crafts", "50+ distinct textile techniques", "Exported to 30+ countries"],
    },
  },
  {
    id: "desert-safari",
    icon: "🌅",
    title: "Desert Safari",
    count: "Rann of Kutch",
    color: "#fb923c",
    tagline: "Infinity Under a Silver Moon",
    popup: {
      hero: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=80",
      overview:
        "The Rann of Kutch is the world's largest salt desert — a vast, hypnotic expanse of white stretching to the horizon, transforming at night into a mirror for stars. A desert safari here is not just travel — it is a meditation. Camel rides, tent city nights, folk music under a full moon, and silence so profound it becomes its own music.",
      highlights: [
        {
          label: "Full Moon Walk on White Rann",
          desc: "On full-moon nights between November and February, the white salt desert reflects the moon like a surreal silver lake — utterly otherworldly.",
        },
        {
          label: "Camel Cart Safari",
          desc: "Traditional camel carts take you deep into the desert at sunrise and sunset — a slow, meditative journey through silence.",
        },
        {
          label: "Fossil Park & Wild Ass Sanctuary",
          desc: "The Little Rann of Kutch is home to the rare Indian Wild Ass and one of the world's largest bird rookeries.",
        },
        {
          label: "Tent City Bhirandiyara",
          desc: "Luxury Swiss tents and traditional Bhunga huts inside the Rann — fall asleep to folk music and wake up to the white desert at dawn.",
        },
      ],
      bestTime: "November – February (Rann Utsav season)",
      tip: "Book a tent city stay for at least 2 nights — the second night on the Rann, alone with the silence, is a transcendent experience.",
      facts: ["World's largest salt desert", "30,000 sq km area", "UNESCO tentative heritage site", "100+ bird species in the Rann"],
    },
  },
  {
    id: "bird-watching",
    icon: "🐦",
    title: "Bird Watching",
    count: "Flamingo City",
    color: "#fb7185",
    tagline: "Pink Horizons & Feathered Wonders",
    popup: {
      hero: "https://images.unsplash.com/photo-1571570261703-b1a3ff96e41f?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarat is one of the world's premier bird-watching destinations. The state hosts over 600 bird species and is home to the largest flamingo colony in Asia — turning the Little Rann of Kutch into a breathtaking ocean of pink every winter. From pelicans at Nal Sarovar to eagles over Gir, every season brings a new spectacle.",
      highlights: [
        {
          label: "Flamingo City — Little Rann",
          desc: "Over 1 lakh flamingos gather at the Little Rann during winter — the largest congregation of lesser flamingos in Asia.",
        },
        {
          label: "Nal Sarovar Bird Sanctuary",
          desc: "A vast shallow lake sanctuary near Ahmedabad hosting 200+ species including pelicans, spoonbills, and painted storks.",
        },
        {
          label: "Khijadia Bird Sanctuary (Jamnagar)",
          desc: "A UNESCO World Heritage Site and Ramsar wetland hosting 300+ species — a birdwatcher's paradise near the coast.",
        },
        {
          label: "Great Indian Bustard at Kutch",
          desc: "One of the world's most critically endangered birds, with the last breeding population found in Kutch's grasslands.",
        },
      ],
      bestTime: "November – February",
      tip: "Hire a local birding guide at Nal Sarovar — they can spot rare species invisible to the untrained eye, and know the best sunrise spots.",
      facts: ["600+ bird species in Gujarat", "Largest flamingo colony in Asia", "4 Ramsar Wetland sites", "3 UNESCO-listed sanctuaries"],
    },
  },
  {
    id: "yoga-wellness",
    icon: "🧘",
    title: "Yoga & Wellness",
    count: "Ashram Life",
    color: "#34d399",
    tagline: "Return to the Source",
    popup: {
      hero: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarat is the birthplace of Gandhi and the land of ashrams — a place where the ancient wisdom of yoga, meditation, and Ayurveda is not a tourism product but a living way of life. The Sabarmati Ashram in Ahmedabad, founded by Mahatma Gandhi, remains one of the world's most powerful centres of mindful living.",
      highlights: [
        {
          label: "Sabarmati Ashram — Gandhi's Home",
          desc: "Gandhi's spiritual headquarters for 12 years — a place of profound stillness where the journey to Indian independence was planned.",
        },
        {
          label: "Isha Yoga & Retreat Centres",
          desc: "Multiple retreat centres offer 3-day to 21-day inner engineering programs, yoga, and silent meditation retreats.",
        },
        {
          label: "Ayurvedic Spa Tourism",
          desc: "Heritage havelis and forest resorts in Gujarat now offer authentic Panchakarma treatments using locally-sourced herbs and oils.",
        },
        {
          label: "Dandi March Trail — Walking Meditation",
          desc: "Walk portions of Gandhi's historic 241-mile Salt March route — a pilgrimage of simplicity and reflection.",
        },
      ],
      bestTime: "October – March",
      tip: "Spend a quiet morning at Sabarmati Ashram before 8 AM — before tour groups arrive — to experience its profound serenity.",
      facts: ["Birthplace of Mahatma Gandhi", "10+ certified yoga retreat centres", "Ancient Ayurvedic traditions", "UNESCO Peace Heritage sites"],
    },
  },
  {
    id: "photography-tours",
    icon: "📸",
    title: "Photography Tours",
    count: "Heritage Walks",
    color: "#94a3b8",
    tagline: "Every Frame a Masterpiece",
    popup: {
      hero: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarat is a photographer's dream destination. The state offers an extraordinary diversity of subjects — from the geometric precision of stepwell architecture to the electric colours of tribal embroidery, from lions at golden hour in Gir to the surreal reflections of the full-moon Rann. World-class photography workshops are now offered by master photographers across the state.",
      highlights: [
        {
          label: "Old Ahmedabad Heritage Walk",
          desc: "The UNESCO World Heritage City's labyrinthine pols (residential clusters) offer unparalleled architectural photography opportunities at every turn.",
        },
        {
          label: "Gir Forest Golden Hour Safari",
          desc: "Shoot Asiatic lions in the dramatic golden light of dawn and dusk — a once-in-a-lifetime wildlife photography opportunity.",
        },
        {
          label: "Kutch Craft Village Photography",
          desc: "Document the extraordinary colours of Kutchi embroidery, Rann salt pans, and tribal communities against dramatic desert landscapes.",
        },
        {
          label: "Rani ki Vav Stepwell — Symmetry Photography",
          desc: "The UNESCO-listed stepwell's perfect geometric reflection in water creates extraordinary compositions for architecture photographers.",
        },
      ],
      bestTime: "October – February (best light conditions)",
      tip: "Join the 'Colours of Kutch' photography festival in February — a curated 5-day workshop with access to restricted tribal villages.",
      facts: ["UNESCO World Heritage Photography sites", "3 distinct climate zones for variety", "Annual photography festivals", "60+ heritage structures to photograph"],
    },
  },
  {
    id: "street-markets",
    icon: "🛍️",
    title: "Street Markets",
    count: "Ahmedabad Bazaars",
    color: "#fcd34d",
    tagline: "Bazaars Alive With Colour",
    popup: {
      hero: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarat's street markets are sensory experiences unlike any other. From the dazzling jewellery bazaars of Ahmedabad's Zaveri Bazaar to the labyrinthine craft lanes of Bhuj in Kutch, these markets are where centuries-old commerce meets contemporary creativity. Shopping here is not just retail — it is cultural immersion.",
      highlights: [
        {
          label: "Manek Chowk — Day Market & Night Food Street",
          desc: "By day, a jewellery market; by night, one of India's most famous open-air food streets — with over 200 food stalls.",
        },
        {
          label: "Aina Mahal Craft Bazar, Bhuj",
          desc: "A curated craft market near the historic Aina Mahal palace in Bhuj — the best place to buy authentic Kutch handicrafts.",
        },
        {
          label: "Rann Utsav Craft Village",
          desc: "A temporary craft village assembled each winter in the Rann, where 300+ artisans from across Gujarat sell directly to visitors.",
        },
        {
          label: "Vadodara's Mandvi Gate Market",
          desc: "A centuries-old market specialising in Bandhani saris, antique jewellery, and Baroda-style embroideries.",
        },
      ],
      bestTime: "October – March",
      tip: "At Manek Chowk, arrive at 9 PM when all the food stalls are at full swing — the pav bhaji and ice cream kulfi are legendary.",
      facts: ["200+ food stalls at Manek Chowk", "300+ artisans at Rann craft village", "6+ UNESCO craft traditions sold", "Centuries-old bazaar traditions"],
    },
  },
  {
    id: "forts-palaces",
    icon: "🏰",
    title: "Forts & Palaces",
    count: "Royal Grandeur",
    color: "#c084fc",
    tagline: "Echoes of Royal Gujarat",
    popup: {
      hero: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarat's landscape is dotted with forts, palaces, and havelias that chronicle centuries of Rajput, Mughal, Maratha, and British history. From the clifftop grandeur of Lakhpat Fort on the Pakistani border to the Indo-Saracenic splendour of Baroda's Lakshmi Vilas Palace — one of the largest private residences in the world — Gujarat's royal heritage is staggering.",
      highlights: [
        {
          label: "Lakshmi Vilas Palace, Vadodara",
          desc: "Built in 1890, this Indo-Saracenic palace is four times the size of Buckingham Palace and is still the residence of the Baroda royal family.",
        },
        {
          label: "Lakhpat Fort — Ghost City",
          desc: "A perfectly preserved walled city on the edge of the Rann of Kutch, abandoned after the 1819 earthquake diverted a river.",
        },
        {
          label: "Uparkot Fort, Junagadh",
          desc: "An ancient fort dating back 2,300 years to the Mauryan Empire, with Buddhist caves, stepwells, and panoramic views.",
        },
        {
          label: "Vijay Vilas Palace, Mandvi",
          desc: "A honey-coloured sandstone summer palace of the Kutch royal family, with a private beach and stunning Arabian Sea views.",
        },
      ],
      bestTime: "October – February",
      tip: "Visit Lakshmi Vilas Palace on a weekday — the Baroda Museum inside has some of the finest Mughal miniature paintings in private hands.",
      facts: ["200+ forts and palaces", "Lakshmi Vilas: 4× size of Buckingham Palace", "2,300-year-old Uparkot Fort", "Several heritage hotels in royal palaces"],
    },
  },
  {
    id: "boat-rides",
    icon: "⛵",
    title: "Boat Rides",
    count: "Gulf of Kutch",
    color: "#67e8f9",
    tagline: "Sail Into the Horizon",
    popup: {
      hero: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gujarat's extraordinary coastline and inland waterways offer some of India's most memorable boating experiences. From sunset dhow cruises in the Gulf of Kutch past marine national parks to speedboat rides around Diu's Portuguese fortresses, the sea here is never just scenery — it is an invitation to adventure.",
      highlights: [
        {
          label: "Gulf of Kutch Marine National Park",
          desc: "India's first marine national park — boat safaris reveal coral reefs, sea turtles, dolphins, and nesting flamingos at close range.",
        },
        {
          label: "Dhow Sunset Cruise, Mandvi",
          desc: "Traditional wooden dhow boats offer guided sunset cruises from Mandvi, past the boat-building yards and into the open Arabian Sea.",
        },
        {
          label: "Diu Island Speedboat Tour",
          desc: "Circle the historic island of Diu by speedboat, passing sea caves, Portuguese fortresses, and pristine coral beaches.",
        },
        {
          label: "Sabarmati Riverfront — Ahmedabad",
          desc: "Evening boat rides on the beautifully developed Sabarmati Riverfront, with the illuminated Ahmedabad skyline as backdrop.",
        },
      ],
      bestTime: "November – March",
      tip: "Book the Gulf of Kutch marine park boat at Jodiya jetty — arrive early morning for the best chance of spotting dolphins and sea turtles.",
      facts: ["India's first Marine National Park", "450+ species of marine life", "Traditional 500-year-old dhow building", "2 UNESCO-listed coastal sites"],
    },
  },
];
