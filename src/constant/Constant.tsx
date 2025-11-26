import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export const talksData = [
  {
    id: 1,
    image: "/paper.png",
    alt: "talk1",
    category: "CAR MAKING",
    title: "5 Essential Email Marketing Tips",
    description:
      "Email marketing is one of the most important and popular tools in a marketer's arsenal these days. We all know...",
  },
  {
    id: 2,
    image: "/unplash.jpg",
    alt: "talk2",
    category: "SOCIAL MEDIA",
    title: "Making The Most of Ephemeral Content On Social Media",
    description:
      "You view a story on your favorite skincare brand's Instagram page, and you are delighted by the offer they are...",
  },
  {
    id: 3,
    image: "/unplash5.jpg",
    alt: "talk3",
    category: "SEARCH ENGINE OPTIMIZATION",
    title: "Avoid These Re-targeting Mistakes",
    description:
      "There are certain strategies that should definitely be part of a digital marketer's arsenal. Re-targeting is one of them. When […]",
  },
  {
    id: 4,
    image: "/unplash2.jpg",
    alt: "talk4",
    category: "SOCIAL MEDIA",
    title: "Making The Most of Ephemeral Content On Social Media",
    description:
      "You view a story on your favorite skincare brand's Instagram page, and you are delighted by the offer they are...",
  },
  {
    id: 5,
    image: "/unplash3.jpg",
    alt: "talk5",
    category: "SOCIAL MEDIA",
    title: "Why Clubhouse Is The Latest Social Media Trend",
    description:
      "Just when everybody thought technology has peaked, a new player entered the field. Years ago, no one could anticipate that...",
  },
  {
    id: 6,
    image: "/unplash4.jpg",
    alt: "talk6",
    category: "CAR MAKING",
    title: "Why Your Business Needs To Invest Social Media Marketing",
    description:
      "Social media has evolved beyond being just a platform used for forging connections and staying in touch. Platforms such as...",
  },
];

export const footerLinks = {
  Main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Contact", href: "/contact" },
    { name: "Faqs", href: "/faqs" },
    { name: "Marketing", href: "/marketing" },
    { name: "Brand", href: "/brand" },
  ],
  Services: [
    { name: "Web Design", href: "/web-design" },
    { name: "Web Development", href: "/web-development" },
    { name: "SEO", href: "/seo" },
    { name: "Social Media", href: "/social-media" },
  ],
  Focus: [
    { name: "Ecommerce", href: "/ecommerce" },
    { name: "Quality Products", href: "/quality-products" },
    { name: "Best Prices", href: "/best-prices" },
    { name: "Fast Delivery", href: "/fast-delivery" },
    { name: "Trusted Store", href: "/trusted-store" },
  ],
  Industries: [
    { name: "Ecommerce", href: "/ecommerce" },
    { name: "Quality Products", href: "/quality-products" },
    { name: "Best Prices", href: "/best-prices" },
    { name: "Fast Delivery", href: "/fast-delivery" },
    { name: "Trusted Store", href: "/trusted-store" },
    { name: "Retail", href: "/retail" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Healthcare", href: "/healthcare" },
    { name: "Education", href: "/education" },
    { name: "Financial Services", href: "/financial-services" },
    { name: "Government", href: "/government" },
    { name: "Non-Profit", href: "/non-profit" },
    { name: "Technology", href: "/technology" },
  ],
} as const;

export const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
  },
  {
    name: "Youtube",
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com",
    icon: FaPinterest,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
] as const;

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/service",
  },
  {
    name: "Contact",
    href: "/contact",
  },
] as const;

export const imagesData = [
  {
    id: 1,
    src: "/unplash1.jpg",
    alt: "img1",
    name: "img1 name",
    description: "img1 description",
  },
  {
    id: 2,
    src: "/unplash2.jpg",
    alt: "img2",
    name: "img2 name",
    description: "img2 description",
  },
  {
    id: 3,
    src: "/unplash3.jpg",
    alt: "img3",
    name: "img3 name",
    description: "img3 description",
  },
  {
    id: 4,
    src: "/unplash4.jpg",
    alt: "img4",
    name: "img4 name",
    description: "img4 description",
  },
  {
    id: 5,
    src: "/unplash5.jpg",
    alt: "img5",
    name: "img5 name",
    description: "img5 description",
  },
  {
    id: 6,
    src: "/unplash6.jpg",
    alt: "img6",
    name: "img6 name",
    description: "img6 description",
  },
  {
    id: 7,
    src: "/unplash7.jpg",
    alt: "img7",
    name: "img7 name",
    description: "img7 description",
  },
  {
    id: 8,
    src: "/unplash8.jpg",
    alt: "img8",
    name: "img8 name",
    description: "img8 description",
  },
  {
    id: 9,
    src: "/unplash9.jpg",
    alt: "img9",
    name: "img9 name",
    description: "img9 description",
  },
  {
    id: 10,
    src: "/unplash10.jpg",
    alt: "img10",
    name: "img10 name",
    description: "img10 description",
  },
] as const;

export const faqsData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We offer comprehensive digital marketing services including web design, web development, SEO, social media marketing, content creation, brand identity design, and e-commerce solutions. Our team provides end-to-end digital services to help your business grow online.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a comprehensive e-commerce platform could take 8-12 weeks. We provide detailed timelines during the initial consultation and keep you updated throughout the project.",
  },
  {
    id: 3,
    question: "What is your pricing structure?",
    answer:
      "Our pricing is customized based on your specific needs and project requirements. We offer flexible packages for startups, small businesses, and enterprise clients. Contact us for a free consultation and detailed quote tailored to your project.",
  },
  {
    id: 4,
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer various maintenance and support packages to ensure your website and digital assets continue to perform optimally. This includes updates, security monitoring, content updates, and technical support. We can discuss support options that best fit your needs.",
  },
  {
    id: 5,
    question: "Can you work with our existing brand guidelines?",
    answer:
      "Absolutely! We can work within your existing brand guidelines or help you develop new ones. Our team is experienced in maintaining brand consistency while enhancing your digital presence. We'll ensure all deliverables align with your brand identity.",
  },
  {
    id: 6,
    question: "What technologies do you use?",
    answer:
      "We use modern, industry-standard technologies including React, Next.js, TypeScript, Tailwind CSS, and various CMS platforms. We stay updated with the latest trends and tools to deliver cutting-edge solutions that are scalable, secure, and performant.",
  },
  {
    id: 7,
    question: "How do you ensure website security?",
    answer:
      "Security is a top priority. We implement best practices including SSL certificates, regular security updates, secure hosting, data encryption, and compliance with industry standards. We also provide security monitoring and maintenance services.",
  },
  {
    id: 8,
    question: "Do you offer SEO services?",
    answer:
      "Yes, we provide comprehensive SEO services including keyword research, on-page optimization, technical SEO, content optimization, link building, and ongoing SEO monitoring. We help improve your search engine rankings and drive organic traffic to your website.",
  },
];
