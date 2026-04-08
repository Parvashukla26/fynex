

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Our Services", herf: "#" },
  { label: "Case Studies", herf: "#" },
  { label: "AI Labs", herf: "#" },
  { label: "Privacy Policy", herf: "#" },
];

export const pricedeta: {
  title: string;
  icon: string;
  background: string;
  value: string;
  tag: string;
  width: number;
  height: number;
  padding: string;
}[] = [
    {
      title: "AI-Powered Solutions",
      value: "Automate decisions and improve business efficiency",
      tag: "Growth",
      icon: "/images/icons/icon-bag.svg",
      background: "bg-primary/10",
      width: 24,
      height: 24,
      padding: "px-4 py-3",
    },
    {
      title: "System Automation",
      value: "Connect tools and processes into one smooth workflow",
      tag: "Efficiency",
      icon: "/images/icons/icon-bag.svg",
      background: "bg-primary/10",
      width: 24,
      height: 24,
      padding: "px-4 py-3",
    },
    {
      title: "Modern Web Platforms",
      value: "Fast, secure, and scalable products for your users",
      tag: "Performance",
      icon: "/images/icons/icon-bag.svg",
      background: "bg-primary/10",
      width: 24,
      height: 24,
      padding: "px-4 py-3",
    },
    {
      title: "Digital Identity & Security",
      value: "Protect data, users, and business-critical systems",
      tag: "Trust",
      icon: "/images/icons/icon-bag.svg",
      background: "bg-primary/10",
      width: 24,
      height: 24,
      padding: "px-4 py-3",
    },
  ];


export const portfolioData: {
  id: string;
  image: string;
  title: string;
  category: string;
  year: string;
  link?: string;
}[] = [
    {
      id: "saasify",
      image: "/images/portfolio/saasify.png",
      title: "SaaSify - Productivity Infrastructure Platform",
      category: "SaaS Product / Modern Team Collaboration",
      year: "2024",
      link: "https://saa-sify-omega.vercel.app/",
    },
    {
      id: "dkc",
      image: "/images/portfolio/DKC.png",
      title: "Designer Kids Club - Luxury Kidswear, Smarter & Sustainable",
      category: "E-commerce / Sustainable Fashion Marketplace",
      year: "2024",
      link: "https://designerkidsclub.com/",
    },
    {
      id: "lmneez",
      image: "/images/portfolio/Lmneez.png",
      title: "Lmneez - Natural Lemon-Based Beverages & Flavours",
      category: "Food & Beverage / Natural Drinks Brand",
      year: "2024",
      link: "https://www.sreydhafoods.com/",
    },
    {
      id: "finsathi",
      image: "/images/portfolio/FINsathi.png",
      title: "FINsathi - Tax, Legal & Financial Compliance Solutions",
      category: "Financial Services / Compliance Technology",
      year: "2024",
      link: "https://www.finsathi.com/",
    },
    {
      id: "FicLance",
      image: "/images/portfolio/ficlance.png",
      title: "Ficlance – AI-Powered Client Simulation Platform",
      category: "EdTech / AI Learning Platform / Freelancing Skill Development",
      year: "2025",
      link: "https://www.ficlance.com/",
    },
    {
      id: "Portfolio",
      image: "/images/portfolio/Portfolio.png",
      title: "Graphic Designer & Framer Developer Portfolio",
      category: "Personal Portfolio / UI-UX Design / Web Development",
      year: "2025",
      link: "https://sutharharsh.framer.website/",
    },
    {
      id: "Safar",
      image: "/images/portfolio/safar.png",
      title: "Safar – Travel & Tour Booking Platform",
      category: "Travel & Tourism / Tour Booking / Travel Services",
      year: "2025",
      link: "https://safar-two.vercel.app/",
    },
    {
      id: "visual-identity",
      image: "/images/portfolio/portfolio2.png",
      title: "Visual Identity & Brand Architecture",
      category: "Graphic Design / Creative Direction",
      year: "2024-2025",
      link: "https://drive.google.com/file/d/10VGPHV0FHLVV76H3SyXuWlFg6aQnjELu/view?usp=sharing",
    },
  ];


export const upgradeData: { title: string; description: string }[] = [
  {
    title: "Process Optimization",
    description: "Orchestrating complex enterprise workflows with high-precision neural logic."
  },
  {
    title: "Predictive Intelligence",
    description: "Synthesizing deep data patterns to forecast and drive strategic growth."
  },
  {
    title: "Infrastructure Scaling",
    description: "Seamlessly expanding operational capacity through autonomous AI architecture."
  },
  {
    title: "Neural Integration",
    description: "Bridging legacy systems with modern AI frameworks for unified performance."
  },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
    {
      icon: "/images/perks/icon-support.svg",
      title: "Precision Engineering",
      text: "Meticulously crafted solutions built with world-class standards.",
      space: "lg:mt-8",
    },
    {
      icon: "/images/perks/icon-community.svg",
      title: "Client Partnership",
      text: "Quiet confidence through collaborative excellence and trust.",
      space: "lg:mt-14",
    },
    {
      icon: "/images/perks/icon-academy.svg",
      title: "Timeless Design",
      text: "Interfaces that transcend trends and focus on eternal value.",
      space: "lg:mt-4",
    },
  ];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
    {
      icon: "/images/timeline/icon-planning.svg",
      title: "Planning",
      text: "Map the project's scope and architecture",
      position: "md:top-0 md:left-0",
    },
    {
      icon: "/images/timeline/icon-refinement.svg",
      title: "Refinement",
      text: "Refine and improve your solution",
      position: "md:top-0 md:right-0",
    },
    {
      icon: "/images/timeline/icon-prototype.svg",
      title: "Prototype",
      text: "Build a working prototype to test your product",
      position: "md:bottom-0 md:left-0",
    },
    {
      icon: "/images/timeline/support.svg",
      title: "Support",
      text: "Deploy the product and ensure full support by us",
      position: "md:bottom-0 md:right-0",
    },
  ];

export const servicesData: {
  title: string;
  description: string;
  icon: string;
  category: string;
}[] = [
    {
      title: "AI Strategy & Neural Design",
      description: "Defining the bridge between complex enterprise needs and autonomous machine intelligence.",
      icon: "ph:brain-light",
      category: "Strategic AI"
    },
    {
      title: "Boutique Web Architecture",
      description: "Crafting pixel-perfect, high-performance digital platforms with quiet luxury aesthetics.",
      icon: "ph:browser-light",
      category: "Digital Build"
    },
    {
      title: "Neural Process Automation",
      description: "Orchestrating complex workflows into self-optimizing, autonomous business engines.",
      icon: "ph:circuit-ry-light",
      category: "Automation"
    },
    {
      title: "Data Synthesis & Forecasting",
      description: "Transforming fragmented information into predictive insights for competitive edge.",
      icon: "ph:chart-line-up-light",
      category: "Analytics"
    },
    {
      title: "Identity & Luxury Branding",
      description: "Developing visual and digital identities that command presence through refined minimalism.",
      icon: "ph:palette-light",
      category: "Branding"
    },
    {
      title: "Scalable Infrastructure Design",
      description: "Building the high-performance foundations that power global digital operations.",
      icon: "ph:cube-light",
      category: "Engineering"
    },
    {
      title: "Digital Security Architecture",
      description: "Protecting elite business assets with advanced, proactive security frameworks.",
      icon: "ph:shield-check-light",
      category: "Security"
    },
    {
      title: "Custom LLM Integration",
      description: "Deploying proprietary language models tailored to unique industry vocabularies.",
      icon: "ph:chat-centered-dots-light",
      category: "AI Integration"
    },
    {
      title: "UX Psychology & Design",
      description: "Engineering interfaces that align with cognitive patterns for effortless interaction.",
      icon: "ph:users-four-light",
      category: "Experience"
    },
    {
      title: "Performance Optimization",
      description: "Fine-tuning existing systems to achieve unprecedented speeds and efficiency.",
      icon: "ph:gauge-light",
      category: "Optimization"
    }
  ];

export const caseStudiesData: {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  stats: string;
  client: string;
  year: string;
  location: string;
  services: string[];
  details: string[];
  iconSet: string;
  liveLink?: string;
}[] = [
    {
      id: "saasify",
      title: "SAASIFY PLATFORM",
      category: "Productivity SaaS",
      image: "/images/portfolio/saasify.png",
      description: "A centralized productivity infrastructure engineered for high-performance team collaboration.",
      stats: "+60% Workflow Velocity",
      client: "SaaSify Co.",
      year: "2024",
      location: "San Francisco, USA",
      services: ["Platform Architecture", "UX Strategy", "AI Integration"],
      details: [
        "SaaSify represents a paradigm shift in team synchronization. We engineered a neural-pathway interface that dramatically reduces 'Digital Friction,' allowing cross-functional teams to coexist within a single, high-fidelity environment.",
        "The project focused on the absolute reduction of tool-switching overhead. By architecting a modular 'Block-System,' we enabled users to construct their own workspace protocols without compromising global data integrity or performance.",
        "A sophisticated AI-integration layer was deployed to interpret team velocity. This allows for real-time workflow adjustments, ensuring that bottlenecking is identified and resolved dynamically before it impacts project momentum.",
        "The resulting platform has redefined productivity for our elite partners. With a 60% increase in measurable output velocity, SaaSify proves that architectural clarity is the ultimate driver of high-performance outcome."
      ],
      iconSet: "SaaS",
      liveLink: "https://saa-sify-omega.vercel.app/"
    },
    {
      id: "dkc",
      title: "DESIGNER KIDS CLUB",
      category: "Luxury E-Commerce",
      image: "/images/portfolio/DKC.png",
      description: "A sustainable luxury fashion marketplace redefining high-end kidswear through digital elegance.",
      stats: "2.4x Conversion Growth",
      client: "DKC Global",
      year: "2024",
      location: "London, UK",
      services: ["Brand Strategy", "E-Commerce Build", "Logistics UI"],
      details: [
        "Designer Kids Club was architected to transcend standard retail expectations. We utilized a high-contrast museum-grid system that treats every garment as an archival piece, elevating the digital selection process to an art form.",
        "The strategy prioritized brand value over transactional noise. By eliminating traditional discount-led marketing and focusing on 'The Art of Selection,' we successfully attracted a tier of parents who value curation above all else.",
        "Logistics and UX were seamlessly unified within a clean checkout protocol. We removed every non-essential field, resulting in a 2.4x growth in checkout completion while maintaining an exclusive, boutique feel.",
        "DKC now stands as a benchmark for luxury children's e-commerce. It demonstrates that a minimal, high-fidelity aesthetic can drive massive commercial growth by establishing an unrivaled sense of trust and permanence."
      ],
      iconSet: "ECom",
      liveLink: "https://designerkidsclub.com/"
    },
    {
      id: "lmneez",
      title: "LMNEEZ BEVERAGES",
      category: "FMCG / Brand Build",
      image: "/images/portfolio/Lmneez.png",
      description: "A sensory-driven digital experience for a premium lemon-based natural beverage line.",
      stats: "Global Reach",
      client: "Sreydha Foods",
      year: "2024",
      location: "New Delhi, India",
      services: ["Digital Identity", "Interactive Story", "FMCG Strategy"],
      details: [
        "The Lmneez digital identity is built on the concept of 'Organic Clarity.' We utilized a bespoke physics-based motion system that mimics the fluidity and refreshment of the product, resulting in a unique sensory-to-digital translation.",
        "The interactive storytelling component focuses on the purity of the source. By utilizing high-fidelity macro-cinematography and a vibrant color orchestration, we established an immediate emotional connection with health-conscious protagonists.",
        "The architecture was designed to facilitate rapid distributor acquisition. We created a 'Protocol-Clean' data section that allows B2B partners to access technical specification and logistics data with unrivaled ease and professionalism.",
        "Since launch, Lmneez has expanded its global reach significantly. The platform serves as a primary tool for brand consistency across diverse international markets, proving the power of a unified, high-end digital identity."
      ],
      iconSet: "FMCG",
      liveLink: "https://www.sreydhafoods.com/"
    },
    {
      id: "finsathi",
      title: "FINSATHI SOLUTIONS",
      category: "Fintech Compliance",
      image: "/images/portfolio/FINsathi.png",
      description: "Modernizing financial compliance through a streamlined, AI-assisted legal technology platform.",
      stats: "99.9% Accuracy Rate",
      client: "FINsathi Corp",
      year: "2024",
      location: "Mumbai, India",
      services: ["System Design", "Compliance UX", "Fullstack Dev"],
      details: [
        "FINsathi was designed to eliminate the inherent anxiety of financial compliance. We replaced opaque legal jargon with a clean, 'Tabular-Logic' UI that guides users through complex regulatory requirements with industrial precision.",
        "The core innovation lies in the AI-assisted legal checklist. This dynamic protocol interprets regulatory shifts in real-time, ensuring that clients are always operating within the latest legal frameworks without manual overhead.",
        "Audit-readiness was elevated through a 'Real-Time Monitoring' dashboard. By maintaining a continuous audit log with 99.9% accuracy, we removed the need for traditional, high-stress end-of-year reporting cycles.",
        "By implementing this protocol-driven navigational hierarchy, we transformed compliance from a cost center into a strategic advantage. FINsathi is now the primary legal-tech engine for Mumbai's most proactive finance firms."
      ],
      iconSet: "Fintech",
      liveLink: "https://www.finsathi.com/"
    },
    {
      id: "visual-identity",
      title: "BRAND ARCHITECTURE",
      category: "Creative Direction",
      image: "/images/portfolio/graphic-design-portfolio.png",
      description: "A comprehensive showcase of sovereign visual identities designed for industry protagonists.",
      stats: "Award Winning",
      client: "Various Elite Clients",
      year: "2024-2025",
      location: "International",
      services: ["Visual Identity", "Typography Design", "Art Direction"],
      details: [
        "Our 'Brand Architecture' project is an archival study in visual reduction. Each identity in this selection is built on a custom typographic foundation that projects an unrivaled sense of technical permanence and authority.",
        "The project challenge was to maintain a consistent 'Studio-Premium' thread while allowing each client's unique protagonist energy to shine. We achieved this through a unified 'Design Protocol' that governs whitespace and grid use.",
        "Each case study within this archive demonstrates the power of absolute visual economy. We focus on the distillation of a brand to its core components, ensuring that every visual asset serves as a high-impact strategic tool.",
        "This selection has received multiple awards for its commitment to minimal excellence. It remains a testament to our philosophy that luxury is not the addition of elements, but the removal of every non-essential friction."
      ],
      iconSet: "Identity",
      liveLink: "https://drive.google.com/file/d/10VGPHV0FHLVV76H3SyXuWlFg6aQnjELu/view?usp=sharing"
    }
  ];


export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];
