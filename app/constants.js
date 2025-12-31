import { 
  BarChart3, 
  Code2, 
  Globe, 
  Megaphone, 
  Smartphone, 
  Target, 
  Search,
  Zap,
  Mail,
  ShoppingCart,
  Layers,
  Award,
  Star,
  Trophy,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const APP_NAME = "MindWorks";
export const LOGO_URL = "https://mindworksme.com/frontend/assets/img/mindwworks_black_logo.webp";

export const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'Process', href: '#process' },
];

export const HERO_CONTENT = {
  title: "Engineering Digital Dominance in Dubai",
  description: "MindWorks is where advanced technology meets psychological conversion design. We build high-performance growth engines for the region's most ambitious brands.",
  cta: "Claim Your Free Growth Audit"
};

export const WHO_WE_ARE = {
  title: "Engineering Digital Dominance in the MENA Region",
  content: [
    "MindWorks was founded on the principle that digital marketing should be a science, not a guessing game. We combine advanced software engineering with behavioral psychology to create high-performance growth systems.",
    "Our team of senior strategists and data scientists works exclusively with ambitious brands that demand measurable, scalable ROI. We don't just deliver clicks; we deliver market dominance.",
    "Headquartered in Dubai, we possess deep intelligence into regional market nuances, allowing us to navigate the complex digital landscape of the Middle East with precision and speed."
  ]
};

export const SERVICES = [
  {
    title: "Digital Marketing",
        slug: "digital-marketing",

    description: "360° omnichannel strategies focused on aggressive market share acquisition and brand dominance. The difference is in the details.  ",
    icon: Megaphone,
    features: [
      "Custom storefront design & development",
      "Payment gateway integration",
      "Inventory & order management systems",
      "Conversion rate optimization",
    ],
    img:"/about.png",
    link: "/services/digital-marketing",
  },
  {
    title: "SEO",
    slug: "search-engine-optimization",
    description: "Deep-tech search engine optimization. We don't just rank; we dominate intent-based search landscapes.",
    icon: Search,
    features: [
      "Automated email campaign workflows",
      "List segmentation & personalization",
      "A/B testing & performance analytics",
      "Template design & copywriting",
    ],
    link: "/services/search-engine-optimization",
  },
  {
    title: "Website Development",
    slug: "website-development",
    description: "High-conversion, lightning-fast digital experiences built with modern stacks for superior performance.",
    icon: Globe,
    features: [
      "Automated email campaign workflows",
      "List segmentation & personalization",
      "A/B testing & performance analytics",
      "Template design & copywriting",
    ],
    link: "/services/website-development",
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    description: "Turning social interactions into high-intent revenue streams through targeted performance creative.",
    icon: Zap ,
    features: [
      "Platform-specific ad creatives", 
      "Audience targeting & retargeting",
      "Engagement & conversion tracking",
      "Influencer partnership strategies",
    ],
    link: "/services/social-media-marketing",
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    description: "Data-driven storytelling that builds topical authority and nurtures leads through the entire funnel.",
    icon: Layers,
    features: [
      "SEO-optimized blog posts",
      "Ebooks & whitepapers", 
      "Video scripts & production",
      "Infographics & visual content",
    ],
    img: "/content-marketing-service.jpeg",
    link: "/services/content-marketing",
  },
  {
    title: "Software Development",  
    slug: "software-development",
    description: "Custom enterprise-grade software solutions, automation tools, and proprietary growth stacks.",
    icon: Code2,
    features: [
      "Custom enterprise-grade software solutions",
      "Automation tools & workflows",
      "Proprietary growth stacks",
      "API integrations & data pipelines",
    ],
    img: "/software-development-service.jpeg",
    link: "/services/software-development",
  },
  {
    title: "Email Marketing",
    slug: "email-marketing",
    description: "Hyper-personalized lifecycle automation that maximizes customer LTV and retention rates.",
    icon: Mail,
    features: [
      "Automated email campaign workflows",
      "List segmentation & personalization",    
      "A/B testing & performance analytics",
      "Template design & copywriting",
    ],
    img: "/email-marketing-service.jpeg",
    link: "/services/email-marketing",
  },
  {
    title: "E-commerce Marketing",
    slug: "ecommerce-marketing",
    description: "Scalable performance marketing for stores, focused on ROAS, CAC optimization, and repeat purchase rate.",
    icon: ShoppingCart,
    features: [
      "Platform-specific ad creatives", 
      "Audience targeting & retargeting", 
      "Engagement & conversion tracking",
      "Influencer partnership strategies",
    ],
    img: "/ecommerce-marketing-service.jpeg",
    link: "/services/ecommerce-marketing",

  }
];
export const CONTACT_CARD = {
  title: "Talk to Our Specialists",
  subtitle: "Need Expert Guidance?",
  buttonText: "Contact Us Now",
};

export const FEATURES = [
  {
    title: "Verified ROI Tracking",
    description: "100% transparency. We provide real-time dashboards tracking every dirham of your ad spend against revenue.",
    icon: BarChart3
  },
  {
    title: "Technical Excellence",
    description: "Our team consists of senior engineers and data scientists, not just account managers.",
    icon: Target
  },
  {
    title: "Local Market Mastery",
    description: "Deep understanding of the MENA consumer psychology and regional market nuances in Dubai.",
    icon: Globe
  }
];

export const TRUST_BADGES = [
  { name: "Google Premier Partner", icon: ShieldCheck },
  { name: "Meta Business Partner", icon: Award },
  { name: "Clutch Top Rated 2024", icon: Star },
  { name: "Forbes Council", icon: Trophy }
];

export const STATS = [
  { label: "Revenue Generated", value: "$450M+", suffix: "" },
  { label: "Ad Spend Managed", value: "$25M+", suffix: "/yr" },
  { label: "Client Retention", value: "94", suffix: "%" },
  { label: "Campaigns Scaled", value: "1.2K", suffix: "+" }
];

export const TESTIMONIALS = [
  {
    text: "We couldn't imagine building our scale without MindWorks",
    author: "Ken",
    position: "Head of Marketing",
    company: "EzyDog",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
   
    videoId: "V0gn21FZz4E"
  },
  {
    text: "The technical depth of their team delivered serious SEO growth for our platform.",
    author: "Oliver",
    position: "Founder",
    company: "Stellar Digital",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
   
    videoId: "Y-QyXfBUltI"
  },
  {
    text: "Best decision we made for our e-commerce expansion in the MENA region.",
    author: "Lu",
    position: "Creative Director",
    company: "Innovate Solutions",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
   
    videoId: "Y-QyXfBUltI"
  },
  {
    text: "Their software development team built us a tool that saved us thousands in manual labor.",
    author: "Fatima",
    position: "Operations Manager",
    company: "Emirates Group Sub",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
   
    videoId:"Y-QyXfBUltI"

  }
];

export const PARTNER_LOGOS = [
  "/image.png",
  "/image3.png",
  "/image2.png",
  "/image4.png",
  "/image2.png",
  
];

export const PROCESS = [
  { number: "01", title: "Audit", description: "Deep dive into your data silos and competitor gaps." },
  { number: "02", title: "Strategy", description: "Architecting your unique 90-day growth blueprint." },
  { number: "03", title: "Execute", description: "Agile implementation with weekly performance sprints." },
  { number: "04", title: "Scale", description: "Aggressive reinvestment in winning channels." }
];

export const FAQS = [
  {
    question: "What makes MindWorks different from other agencies?",
    answer: "We are an engineering-first agency. While others focus on 'vanity metrics', we focus on technical performance, data attribution, and bottom-line revenue."
  },
  {
    question: "How long until we see measurable results?",
    answer: "Performance marketing usually shows positive traction within 14-30 days. Technical SEO typically requires 3-6 months for market dominance."
  }
];

export const WHY_CHOOSE_US_CONTENT = {
  title: "Why High-Growth Brands Choose MindWorks",
  subtitle: "We replace guesswork with data-science and technical mastery.",
  points: [
    "No Junior Account Managers. You work with Senior Strategists only.",
    "Proprietary AI and Automation stacks for superior efficiency.",
    "Performance-based pricing models available for select partners.",
    "24/7 Real-time reporting dashboards via Looker Studio."
  ]
};
