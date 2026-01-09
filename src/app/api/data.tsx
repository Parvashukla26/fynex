

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
  image: string;
  title: string;
  category: string;
  year: string;
}[] = [
    {
      image: "/images/portfolio/concept-ai-automation.svg",
      title: "AI-Powered Business Automation (Concept)",
      category: "Internal Build • AI & Workflow Automation",
      year: "2024",
    },
    {
      image: "/images/portfolio/concept-web-platform.svg",
      title: "Conversion-Focused Business Website (Demo)",
      category: "Web Design & Development • Growth Ready",
      year: "2024",
    },
    {
      image: "/images/portfolio/concept-digital-system.svg",
      title: "Scalable Digital System Architecture (Prototype)",
      category: "System Design • Operational Efficiency",
      year: "2024",
    },

    // NEW ADDED PROJECTS 👇

    {
      image: "/images/portfolio/ficlance.svg",
      title: "FicLance – AI-Driven Freelance Platform",
      category: "Startup Product • AI & Marketplace Systems",
      year: "2025",
    },
    {
      image: "/images/portfolio/pranflow.svg",
      title: "PranFlow – AI Habit Builder System",
      category: "AI Product • Behavior & Productivity",
      year: "2025",
    },
    {
      image: "/images/portfolio/ecommerce-brand.svg",
      title: "E-Commerce Platform for Personal Brand",
      category: "Commerce System • Brand & Revenue Growth",
      year: "2025",
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
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  stats: string;
  client: string;
  year: string;
  location: string;
  services: string[];
  challenge: string;
  solution: string;
  gallery: string[];
}[] = [
    {
      id: 1,
      title: "VANTAGE CAPITAL",
      category: "Fintech Interface",
      image: "/images/portfolio/case-vantage.svg",
      description: "A high-frequency trading platform reimagined with calm data visualization.",
      stats: "+45% User Retention",
      client: "Vantage Capital Group",
      year: "2025",
      location: "London, UK",
      services: ["UX Strategy", "UI Design", "Frontend Architecture"],
      challenge: "Traders were overwhelmed by cognitive load. The existing platform was powerful but chaotic, leading to decision fatigue and errors during high-volatility market sessions.",
      solution: "We introduced a 'Zen Mode' architecture. By reducing visual noise and prioritizing data through intelligent hierarchy, we created an interface that induces calm focus. Key metrics pulse gently; secondary data recedes until needed.",
      gallery: ["/images/portfolio/portfolio-01.jpg", "/images/portfolio/portfolio-02.jpg", "/images/portfolio/portfolio-03.jpg"]
    },
    {
      id: 2,
      title: "AURA BOUTIQUE",
      category: "E-Commerce",
      image: "/images/portfolio/case-aura.svg",
      description: "An immersive digital storefront for a luxury fashion house.",
      stats: "2.5x Conversion Rate",
      client: "Aura Maison",
      year: "2024",
      location: "Paris, France",
      services: ["Brand Identity", "E-Commerce Dev", "3D Modeling"],
      challenge: "The brand's online presence felt static and disconnected from their sensory in-store experience. They needed a digital flagship that felt as tactile and exclusive as their physical ateliers.",
      solution: "We built a WebGL-powered experience where fabric textures can be felt through the screen. Smooth, cinematic transitions mimic the flow of silk. The checkout process is invisible until the very last moment.",
      gallery: ["/images/portfolio/portfolio-02.jpg", "/images/portfolio/portfolio-03.jpg", "/images/portfolio/portfolio-01.jpg"]
    },
    {
      id: 3,
      title: "NEBULA SYSTEMS",
      category: "SaaS Dashboard",
      image: "/images/portfolio/case-nebula.svg",
      description: "Complex analytics simplified into a singular, intuitive neural command center.",
      stats: "Red Dot Award",
      client: "Nebula AI",
      year: "2025",
      location: "San Francisco, USA",
      services: ["Product Design", "Data Viz", "Design System"],
      challenge: "Nebula's AI was generating petabytes of insights, but users couldn't parse the data. The interface was a wall of numbers that alienated non-technical stakeholders.",
      solution: "We designed a 'living' dashboard. Instead of static charts, we used organic, fluid visualizations that behave like biological systems. Anomalies ripple. Growth blooms. It turns dry data into an intuitive narrative.",
      gallery: ["/images/portfolio/portfolio-03.jpg", "/images/portfolio/portfolio-01.jpg", "/images/portfolio/portfolio-02.jpg"]
    },
    {
      id: 4,
      title: "KRONOS REAL ESTATE",
      category: "Property Tech",
      image: "/images/portfolio/case-kronos.svg",
      description: "Virtual property tours integrated with real-time market intelligence.",
      stats: "$150M+ Sold",
      client: "Kronos Developments",
      year: "2024",
      location: "Dubai, UAE",
      services: ["VR Integration", "Web Platform", "Mobile App"],
      challenge: "Ultra-high-net-worth buyers needed to experience properties remotely without losing the sense of scale and luxury. Standard 360 viewers felt cheap and clunky.",
      solution: "We created a proprietary cinematic tour engine. High-fidelity rendering meets real-time market data overlay. Buyers can not only walk the halls but see the investment potential projected on the walls.",
      gallery: ["/images/portfolio/portfolio-04.jpg", "/images/portfolio/portfolio-05.jpg", "/images/portfolio/portfolio-06.jpg"]
    },
    {
      id: 5,
      title: "LUMEN HEALTH",
      category: "Medical AI",
      image: "/images/portfolio/case-lumen.svg",
      description: "Patient diagnostics dashboard powered by predictive machine learning.",
      stats: "HIPAA Compliant",
      client: "Lumen BioLabs",
      year: "2025",
      location: "Zurich, Switzerland",
      services: ["Healthcare UX", "Secure Architecture", "Mobile"],
      challenge: "Doctors were spending 40% of their time entering data. They needed a tool that anticipated their needs and flagged critical patient risks before they became emergencies.",
      solution: "We designed a predictive UI. The system learns the doctor's workflow and pre-fetches relevant history. Critical alerts use color psychology to demand attention without inciting panic.",
      gallery: ["/images/portfolio/portfolio-05.jpg", "/images/portfolio/portfolio-06.jpg", "/images/portfolio/portfolio-04.jpg"]
    },
    {
      id: 6,
      title: "ECHO ACOUSTICS",
      category: "Audio Brand",
      image: "/images/portfolio/case-echo.svg",
      description: "Sonic branding and visual identity for a high-fidelity audio manufacturer.",
      stats: "Global Launch",
      client: "Echo SoundLabs",
      year: "2024",
      location: "Tokyo, Japan",
      services: ["Branding", "Web Design", "Sound Design"],
      challenge: "How do you visualize sound? Echo needed a website that translated their audiophile-grade quality into a visual medium for a global digital launch.",
      solution: "We used cymatics—the study of visible sound—to generate the visual identity. The website vibrates and pulses with the user's interaction, creating a synesthetic experience where you can 'see' the bass.",
      gallery: ["/images/portfolio/portfolio-06.jpg", "/images/portfolio/portfolio-04.jpg", "/images/portfolio/portfolio-05.jpg"]
    }
  ];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];
