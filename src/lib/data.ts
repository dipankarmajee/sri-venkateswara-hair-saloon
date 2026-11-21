export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'beard' | 'spa' | 'skin' | 'rituals';
  duration: string;
  tagline: string;
  description: string;
  ritualSteps: string[];
  recommendedFor: string;
  badge?: string;
  image: string;
}

export interface HaircutStyle {
  id: string;
  name: string;
  teluguTitle: string;
  faceShape: string;
  hairType: string;
  maintenance: string;
  description: string;
  stylingTips: string;
  image: string;
}

export const SALOON_CONFIG = {
  name: "Sri Venkateswara Hair Saloon",
  tagline: "The Art of Distinguished Grooming",
  subtitle: "Master Haircutters • Precision Beard Sculptors • Rejuvenating Head Spas",
  phone: "+91 93470 17507",
  whatsappNumber: "919347017507",
  address: {
    shop: "Shop No. 3, Block L, Near Netaji Nagar",
    colony: "Gulmohar Park Colony",
    area: "Serilingampalle Mandal",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500019",
    full: "Shop No. 3, Block L, Near Netaji Nagar, Gulmohar Park Colony, Serilingampalle, Hyderabad - 500019",
    landmark: "Right by Netaji Nagar Arch, minutes from Lingampally Station & Nallagandla",
  },
  hours: {
    weekdays: "8:00 AM – 9:30 PM",
    weekends: "7:30 AM – 10:00 PM",
    openDays: "Open All 7 Days",
  },
  googleMaps: {
    queryUrl: "https://www.google.com/maps/search/?api=1&query=Sri+Venkateswara+Hair+Saloon+Gulmohar+Park+Colony+Serilingampalle+Hyderabad",
    knowledgeUrl: "https://www.google.com/search?kgmid=%2Fg%2F11kj6cj0jt",
    embedUrl: "https://maps.google.com/maps?q=Sri+Venkateswara+Hair+Saloon+Gulmohar+Park+Colony+Serilingampalle+Hyderabad&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
  stats: [
    { value: "12+", label: "Years of Heritage" },
    { value: "15,000+", label: "Clients Groomed" },
    { value: "4.8 ★", label: "Google Community Rating" },
    { value: "100%", label: "Single-Use Sterile Blades" },
  ]
};

export const SERVICES_CATALOG: ServiceItem[] = [
  // Hair
  {
    id: "bespoke-haircut",
    name: "The Bespoke Signature Haircut",
    category: "hair",
    duration: "25 – 30 mins",
    tagline: "Precision scissor-over-comb architecture tailored to your cranial profile.",
    description: "Begins with a personal consultation to evaluate face geometry and hair growth patterns. Includes precision shear layering, edge graduation, warm lather nape razor clean, blow-dry finish, and premium matte clay styling.",
    ritualSteps: [
      "Face Shape & Hair Density Consultation",
      "Sectioning & Precision Scissor Sculpting",
      "Clipper Taper & Temple Gradient",
      "Hot Lather Straight-Razor Neckline Lineup",
      "Invigorating Tonic Mist & Volumizing Style Finish"
    ],
    recommendedFor: "Executives, college graduates, and gentlemen who value pristine symmetry.",
    badge: "Signature Craft",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "skin-fade-taper",
    name: "Low / Mid / High Skin Fade",
    category: "hair",
    duration: "30 mins",
    tagline: "Ultra-seamless zero-fade graduation with razor-sharp temple lines.",
    description: "An exacting fade service utilizing multiple foil guards and straight razor detailing to achieve a flawlessly smooth gradient from skin to length.",
    ritualSteps: [
      "Fade Level & Height Assessment",
      "Bulk Reduction & Clipper Work",
      "Foil Shaver Zero Blending",
      "Razor Temple & Sideburn Detailing",
      "Cooling Post-Fade Tonic Application"
    ],
    recommendedFor: "Modern athletic and casual cuts requiring sharp contrast and definition.",
    badge: "Most Requested",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "textured-crop-pompadour",
    name: "Textured Crop & Modern Pompadour",
    category: "hair",
    duration: "30 mins",
    tagline: "Artistic top texturizing with textured point cutting and dimensional hold.",
    description: "Designed for expressive, high-impact styles. Creates textured separation or slick, elevated volume with enduring hold suited for Hyderabad weather.",
    ritualSteps: [
      "Point Cutting & Thinning Shears Texturizing",
      "Weight Balancing & Crown Adjustment",
      "Directional Heat Sculpting",
      "Matte Dust & Sea Salt Mist Application"
    ],
    recommendedFor: "Trendsetters seeking effortless daily versatility.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "junior-gentleman-cut",
    name: "Young Gentlemen's Cut (Boys)",
    category: "hair",
    duration: "20 mins",
    tagline: "Gentle, patient, and engaging haircutting experience for children.",
    description: "We understand that haircuts should be fun and relaxing for children. Our stylists work gently with quiet, low-vibration tools and clean capes while kids enjoy the TV entertainment.",
    ritualSteps: [
      "Comfort Seating & TV Entertainment Setup",
      "Whisper-Quiet Trimmer Scissor Grooming",
      "Soft Comb Style & Clean Brush-Down",
      "Child-Safe Refreshing Mist"
    ],
    recommendedFor: "Boys from toddlers to teens.",
    badge: "Child Friendly",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
  },

  // Beard & Shave
  {
    id: "royal-shave",
    name: "The Royal Hot Towel Straight Razor Shave",
    category: "beard",
    duration: "25 mins",
    tagline: "The timeless ritual of hot towel preparation and surgical straight razor glide.",
    description: "A traditional luxury shaving ritual. Essential oils soften beard follicles before a steaming hot towel wrap, warm badger brush lather, single-use surgical blade pass, and a chilled alum stone and aloe recovery compress.",
    ritualSteps: [
      "Pre-Shave Sandalwood Oil Massage",
      "Infused Steaming Hot Towel Compress",
      "Rich Warm Lather Application",
      "Single-Use Sterile Razor Glide (With the Grain)",
      "Chilled Towel Pore Closure & Antiseptic Balm"
    ],
    recommendedFor: "Gentlemen seeking the smoothest possible finish and therapeutic relaxation.",
    badge: "Heritage Ritual",
    image: "https://images.unsplash.com/photo-1517832606589-7629c33971f6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "beard-architecture",
    name: "Beard Sculpting, Shaping & Razor Edge",
    category: "beard",
    duration: "20 – 25 mins",
    tagline: "Geometric jawline definition and crisp cheek symmetry.",
    description: "Sculpts and balances full beards or designer stubble to sharpen jaw angles. Includes mustache thinning, cheek alignment, neck clearance, and organic argan conditioning.",
    ritualSteps: [
      "Beard Length Grading & Symmetrical Trimming",
      "Mustache Contouring & Lip Line Clearance",
      "Clear Gel Straight-Razor Cheek Lines",
      "Antiseptic Alum Stone Touchup",
      "Nourishing Cedarwood Beard Oil Treatment"
    ],
    recommendedFor: "Anyone with stubble, boxed beard, or heavy beard growth.",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=900&q=80"
  },

  // Head Spa & Scalp Health
  {
    id: "ayurvedic-head-spa",
    name: "Ayurvedic Herbal & Mint Pressure Head Spa",
    category: "spa",
    duration: "25 – 30 mins",
    tagline: "Deep marma-point scalp release with cooling herbal extracts.",
    description: "An authentic Indian pressure-point head massage that melts away mental tension, stimulates microcirculation to hair roots, and cools the skull. Finished with warm neck and shoulder acupressure.",
    ritualSteps: [
      "Herbal / Cooling Mint Oil Selection",
      "Scalp Marma Point Stimulation",
      "Deep Kneading & Circulation Therapy",
      "Temples, Neck & Trapezius Stress Release",
      "Warm Towel Wrap for Deep Penetration"
    ],
    recommendedFor: "Relief from work fatigue, headaches, screen strain, and heat exhaustion.",
    badge: "Deep Relaxation",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "scalp-detox-steam",
    name: "Anti-Dandruff Scalp Detox & Ozone Steam",
    category: "spa",
    duration: "35 mins",
    tagline: "Clinical clarifying therapy targeting scalp buildup and flakes.",
    description: "Deep exfoliation to clear sebum, dead skin cells, and pollution residue. Uses tea tree and salicylic clarifying serums followed by ozone mist steaming to soothe itchiness.",
    ritualSteps: [
      "Scalp Diagnostic & Flake Clearance",
      "Tea Tree & Zinc Purifying Treatment Application",
      "Ozone Warm Steam Infusion",
      "Cool Water Conditioning Scalp Wash"
    ],
    recommendedFor: "Flaky scalp, seasonal irritation, or oily hair build-up.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "ammonia-free-color",
    name: "Natural Tone Grey Blending & Hair Color",
    category: "spa",
    duration: "35 – 45 mins",
    tagline: "Seamless, natural-looking grey coverage without scalp staining.",
    description: "Gentle ammonia-free formulation that enriches hair with subtle, youthful tones. Precision brushwork ensures zero coloration on ears, forehead, or neck.",
    ritualSteps: [
      "Skin-Tone & Color Matching Analysis",
      "Skin Barrier Protection Cream Application",
      "Uniform Micro-Brush Pigment Layering",
      "Post-Color Restorative Cleansing Wash"
    ],
    recommendedFor: "Natural grey coverage for hair, temples, or beard.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
  },

  // Skin & Facials
  {
    id: "active-charcoal-facial",
    name: "Charcoal Deep-Pore Detox Facial",
    category: "skin",
    duration: "35 mins",
    tagline: "Pore cleansing to reverse the effects of traffic pollution and sun exposure.",
    description: "Activated bamboo charcoal attracts embedded impurities, extracts stubborn blackheads, regulates oil production, and restores a balanced matte texture to tired skin.",
    ritualSteps: [
      "Gentle Face Cleanse & Steaming",
      "Bamboo Charcoal Scrub Exfoliation",
      "T-Zone Blackhead Extraction",
      "Cooling Clay Detox Mask",
      "Hyaluronic Hydration Mist"
    ],
    recommendedFor: "Daily commuters and anyone combating oily, clogged skin.",
    badge: "Skin Detox",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "instant-detan-glow",
    name: "Instant De-Tan & Vitamin C Brightening",
    category: "skin",
    duration: "25 mins",
    tagline: "Fast-acting solar tan removal with cooling botanical extracts.",
    description: "Formulated specifically for Hyderabad's intense ultraviolet index. Swiftly removes surface hyperpigmentation, dead stratum cells, and leaves an instant refreshed glow.",
    ritualSteps: [
      "Cucumber & Aloe Cleansing Prep",
      "De-Tan Botanical Pack Layering",
      "Gentle Facial Massage",
      "Chilled Rose Water Splash & SPF Finish"
    ],
    recommendedFor: "Post-travel, weekend outings, or before attending celebrations.",
    image: "https://images.unsplash.com/photo-1512290900672-1f55b922a16d?auto=format&fit=crop&w=900&q=80"
  },

  // Complete Rituals
  {
    id: "gentleman-total-ritual",
    name: "The Executive Complete Grooming Ritual",
    category: "rituals",
    duration: "75 mins",
    tagline: "The definitive full-service transformation.",
    description: "Our master tier experience combining our signature tailored haircut, hot towel royal straight razor shave or beard sculpture, invigorating mint scalp therapy, and deep-pore de-tan facial.",
    ritualSteps: [
      "Bespoke Precision Haircut & Styling",
      "Royal Hot Towel Straight Razor Shave / Beard Sculpt",
      "Ayurvedic Scalp Massage with Ozone Steam",
      "De-Tan Facial Scrub & Rejuvenating Mask",
      "Complimentary Beverage & Final Hair Wash"
    ],
    recommendedFor: "Grooms, anniversary milestones, business conferences, and comprehensive self-care.",
    badge: "The Ultimate Ritual",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80"
  }
];

export const HAIRCUT_STYLES: HaircutStyle[] = [
  {
    id: "style-skin-fade",
    name: "Mid & Low Skin Fade",
    teluguTitle: "మిడ్ / లో స్కిన్ ఫేడ్",
    faceShape: "Oval, Square, Round",
    hairType: "Straight, Wavy, Coarse",
    maintenance: "10 – 14 Days",
    description: "The gold standard of modern barbershop cutting. Creates a clean gradient from bare skin near the temples into graduated volume on top.",
    stylingTips: "Use matte paste or volumizing powder for natural texture with zero shine.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "style-french-crop",
    name: "Textured French Crop",
    teluguTitle: "ట్రెండీ ఫ్రెంచ్ క్రాప్",
    faceShape: "Oblong, Oval, Diamond",
    hairType: "Dense, Thick or Thinning Hairline",
    maintenance: "2 – 3 Weeks",
    description: "Features a blunt or textured forward fringe with tightly clipped tapered flanks. Exceptional for framing eyes and concealing high temples.",
    stylingTips: "Towel dry and apply sea salt spray; scrunch forward with fingertips.",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "style-pompadour",
    name: "Executive Pompadour & Slick Back",
    teluguTitle: "పాంపాడోర్ & స్లిక్ బ్యాక్",
    faceShape: "Square, Round, Heart",
    hairType: "Medium to Long Hair Length",
    maintenance: "3 Weeks",
    description: "High-volume classic styling swept smoothly upwards and backwards over clean tapered sideburns. The hallmark of traditional sophistication.",
    stylingTips: "Blow dry with a round barrel brush; lock in with medium-sheen pomade.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "style-classic-taper",
    name: "Classic Gentleman's Scissor Part",
    teluguTitle: "క్లాసిక్ సిజర్ కట్",
    faceShape: "Universal (All Face Types)",
    hairType: "All Textures",
    maintenance: "3 – 4 Weeks",
    description: "Understated, distinguished scissor architecture. Balanced proportions over the ears and a crisp hairline suited for corporate environments.",
    stylingTips: "Light grooming cream rubbed through damp hair; side-part with a fine-tooth comb.",
    image: "https://images.unsplash.com/photo-1517832606589-7629c33971f6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "style-taper-beard",
    name: "Faded Beard & Sculpted Lineup",
    teluguTitle: "ఫేడెడ్ బేర్డ్ & లైన్‌అప్",
    faceShape: "Round, Oval, Triangular",
    hairType: "Coarse or Wavy Beard Growth",
    maintenance: "7 – 10 Days",
    description: "Seamlessly connects sideburn fade into a graduated beard density, finished with razor-straight cheek geometry.",
    stylingTips: "Brush downward daily with boar bristle brush and apply argan beard oil.",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "style-junior-cut",
    name: "Smart Junior Boy's Styling",
    teluguTitle: "పిల్లల జూనియర్ స్టైలింగ్",
    faceShape: "All Junior Faces",
    hairType: "Soft / Fine / Curly",
    maintenance: "3 – 4 Weeks",
    description: "Comfortable, neat school and holiday cut executed with patience, quiet clippers, and a friendly atmosphere.",
    stylingTips: "Simple water splash and comb through for effortless morning readiness.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
  }
];

export const SALOON_PILLARS = [
  {
    title: "Chilled Split Air Conditioning",
    desc: "Unwind in true comfort away from Hyderabad's humidity and heat with climate-controlled styling stations.",
    icon: "Snowflake"
  },
  {
    icon: "ShieldCheck",
    title: "100% Single-Use Sterile Blades",
    desc: "Every straight razor shave and lineup uses a brand-new, freshly unsealed surgical blade discarded immediately after use."
  },
  {
    icon: "Tv",
    title: "Live HD Entertainment",
    desc: "Catch live cricket, news, and entertainment on wall-mounted screens throughout your appointment."
  },
  {
    icon: "Sparkles",
    title: "UV Disinfected Instruments",
    desc: "Clippers, shears, and guards undergo thorough sanitization between appointments with medical-grade disinfectant."
  },
  {
    icon: "Clock",
    title: "Open 7 Days • Minimal Wait",
    desc: "Full roster of master barbers ensures brisk turnaround without compromising on meticulous detail."
  },
  {
    icon: "CreditCard",
    title: "Cashless UPI Payments",
    desc: "Fast, contactless payment through PhonePe, Google Pay, Paytm, bank transfer or cash."
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "The cleanest and most professional salon in Gulmohar Park Colony. Their skin fade and beard shaping is on par with luxury chains in Jubilee Hills, but right here in our neighborhood.",
    author: "K. Venkat Rao",
    location: "Gulmohar Park Colony, Hyderabad",
    tag: "Regular Client",
    rating: 5
  },
  {
    quote: "Took my 5-year-old son here after a terrible experience elsewhere. The barbers here were patient, kind, and kept him entertained with cartoons. Super impressed!",
    author: "Sai Teja M.",
    location: "Serilingampally, Hyderabad",
    tag: "Family Visit",
    rating: 5
  },
  {
    quote: "The hot towel shave and herbal head massage after a tiring week is therapy. Full AC comfort, sterile blades every single time, and genuine hospitality.",
    author: "Rahul Sharma",
    location: "Nallagandla, Hyderabad",
    tag: "Verified Client",
    rating: 5
  }
];
