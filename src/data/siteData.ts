import { ServiceDetail, ProjectCaseStudy, Testimonial, ProcessStep, FAQ } from '../types';

export const COMPANY_INFO = {
  name: 'MZA Tech Zone',
  tagline: 'Build Your Digital Presence. Grow Your Business.',
  email: 'hello@mzatechzone.pro',
  businessHours: 'Monday to Friday, 9:00 AM – 5:00 PM',
  businessDays: 'Monday to Friday',
  hoursDetail: '9:00 AM – 5:00 PM',
  websiteUrl: 'https://mzatechzone.pro',
  shortDescription: 'MZA Tech Zone is a modern digital agency specializing in custom Web Development, Search Engine Optimization (SEO), and Google Business Profile management to help businesses establish a credible and high-performing online presence.',
};

export const VALUE_POINTS = [
  {
    title: 'Professional Web Development',
    description: 'Fast, secure, responsive websites built with clean code and conversion-focused architectures.',
    icon: 'Code2',
  },
  {
    title: 'Search Engine Visibility',
    description: 'Data-driven on-page, technical, and local SEO strategies that attract qualified organic search traffic.',
    icon: 'TrendingUp',
  },
  {
    title: 'Google Business Profile Growth',
    description: 'Comprehensive local listing management and map optimization to capture high-intent local customers.',
    icon: 'MapPin',
  },
  {
    title: 'Results-Focused Strategy',
    description: 'Transparent workflows, actionable growth metrics, and ongoing optimization built for sustainable ROI.',
    icon: 'Target',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Custom Solutions',
    description: 'Every business has distinct objectives. We build custom websites and tailored optimization plans that reflect your unique value proposition without generic shortcuts.',
    icon: 'Layers',
  },
  {
    title: 'Mobile-Friendly Websites',
    description: 'With over 60% of web traffic originating on smartphones, our responsive designs deliver seamless, fluid experiences across every screen size and device.',
    icon: 'Smartphone',
  },
  {
    title: 'SEO-Focused Development',
    description: 'We build search engine friendliness into the foundation of your website—clean semantic code, fast Core Web Vitals, schema markup, and logical URL structures.',
    icon: 'Search',
  },
  {
    title: 'Local Search Expertise',
    description: 'We understand the nuances of local geographic search algorithms, citation consistency, and map ranking signals that drive local phone calls and foot traffic.',
    icon: 'Compass',
  },
  {
    title: 'Transparent Communication',
    description: 'Clear deliverables, regular milestone check-ins, and direct access to your strategy team. No cryptic jargon or hidden surprises.',
    icon: 'MessageSquareCheck',
  },
  {
    title: 'Long-Term Growth Strategy',
    description: 'We do not rely on short-lived hacks. We build resilient digital foundations and scalable strategies designed for sustained multi-year business growth.',
    icon: 'LineChart',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    tagline: 'Understanding Your Business & Audience',
    description: 'We begin by analyzing your business goals, target market, competitive landscape, and current digital footprint to identify high-impact growth opportunities.',
    deliverables: ['Business & Audience Audit', 'Competitive Analysis', 'Growth Opportunity Roadmap'],
  },
  {
    number: '02',
    title: 'Strategy',
    tagline: 'Formulating the Growth Blueprint',
    description: 'We develop a customized action plan spanning technical architecture, search positioning, keyword mapping, conversion funnels, and local listing optimization.',
    deliverables: ['Site Architecture & Wireframes', 'Keyword & Content Strategy', 'Local Optimization Plan'],
  },
  {
    number: '03',
    title: 'Build & Optimize',
    tagline: 'Executing with Technical Precision',
    description: 'Our team develops fast, accessible web assets, implements rigorous on-page and technical SEO, and thoroughly configures your Google Business Profile.',
    deliverables: ['Responsive Web Development', 'On-Page & Technical SEO Setup', 'Google Business Profile Configuration'],
  },
  {
    number: '04',
    title: 'Measure & Improve',
    tagline: 'Continuous Refinement & Reporting',
    description: 'We monitor core vitals, search rankings, organic impressions, and user conversions—iterating continuously to maximize performance and business impact.',
    deliverables: ['Analytics & Search Console Tracking', 'Monthly Performance Reporting', 'Ongoing Iterative Enhancements'],
  },
];

export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    route: '/services/web-development',
    title: 'Web Development',
    badge: 'High Performance & Conversion',
    shortDescription: 'Professional, responsive, fast loading websites designed to turn visitors into customers.',
    heroHeadline: 'Modern Web Development Engineered for Speed & Conversions',
    heroSubheadline: 'We build custom, accessible, and ultra-responsive websites that establish immediate credibility, load in milliseconds, and turn qualified visitors into paying customers.',
    overviewText: [
      'In today’s digital-first economy, your website is often the very first interaction a prospective client has with your brand. A slow, outdated, or confusing website directly erodes trust and repels potential revenue.',
      'At MZA Tech Zone, we build high-performing websites engineered from the ground up for speed, security, search engine visibility, and seamless user experiences across every device.',
      'Whether you require a clean corporate brochure site, a high-converting lead generation landing page, or a custom business platform, our technical standards ensure your website serves as an active growth engine.',
    ],
    coreBenefits: [
      {
        title: 'Ultra-Fast Performance',
        description: 'Optimized asset delivery, clean code, and Core Web Vitals optimization for instant load times.',
        icon: 'Zap',
      },
      {
        title: 'Conversion-Centric UX',
        description: 'Strategic page hierarchy, intuitive navigation, and high-impact calls-to-action that capture leads.',
        icon: 'Target',
      },
      {
        title: 'Fully Mobile-Responsive',
        description: 'Flawless visual rendering and tactile touch interactions across smartphones, tablets, and desktops.',
        icon: 'Smartphone',
      },
      {
        title: 'SEO-Native Foundations',
        description: 'Semantic HTML5 structure, schema markup, Open Graph tags, and crawlable site hierarchies.',
        icon: 'Search',
      },
      {
        title: 'Ironclad Security & Uptime',
        description: 'Modern security headers, HTTPS encryption, robust forms validation, and maintenance readiness.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Scalable Architecture',
        description: 'Modular codebases that effortlessly expand as your company adds new service lines or content.',
        icon: 'Cpu',
      },
    ],
    serviceOfferings: [
      {
        title: 'Business & Corporate Websites',
        tagline: 'Professional digital hubs for established brands',
        description: 'Custom-designed websites tailored to showcase your services, build brand authority, and communicate complex offerings with clarity.',
        points: ['Custom UI/UX layout design', 'Executive team & service showcases', 'Multi-step contact & inquiry workflows', 'Brand style guide alignment'],
      },
      {
        title: 'High-Converting Landing Pages',
        tagline: 'Laser-focused pages built for specific campaigns',
        description: 'Distraction-free landing pages optimized for paid search, social campaigns, or product launches with streamlined conversion funnels.',
        points: ['Frictionless lead capture forms', 'Social proof & trust badging', 'Fast-loading single-purpose layouts', 'A/B testing-ready architecture'],
      },
      {
        title: 'Local Business Websites',
        tagline: 'Lead-generating websites for service area businesses',
        description: 'Engineered specifically for local contractors, professional practices, and service providers who need direct phone inquiries and appointment bookings.',
        points: ['Click-to-call & map integrations', 'Service area landing pages', 'Customer review feeds & trust signals', 'Local schema markup integration'],
      },
      {
        title: 'E-commerce & Catalog Websites',
        tagline: 'Modern shopping experiences that drive sales',
        description: 'Fast, secure online stores with intuitive product discovery, streamlined checkout flows, and reliable inventory management.',
        points: ['Fast product search & filtering', 'Secure payment gateway integrations', 'Mobile checkout optimization', 'Order notification systems'],
      },
      {
        title: 'Website Redesigns & Modernization',
        tagline: 'Transform outdated sites into high-performing assets',
        description: 'Complete visual and technical overhaul of aging websites to restore brand relevance, speed up performance, and fix conversion bottlenecks.',
        points: ['Comprehensive UX & speed audits', 'Preservation of existing SEO rankings & 301 redirects', 'Modern responsive UI system', 'Content restructuring & refresh'],
      },
      {
        title: 'Custom Web Solutions & Portals',
        tagline: 'Bespoke web applications for specialized business workflows',
        description: 'Tailored web interfaces, interactive estimators, client portals, and dynamic dashboards built to streamline your internal or customer operations.',
        points: ['Custom interactive calculators & forms', 'Protected client portal interfaces', 'API data integrations', 'Clean TypeScript/React architecture'],
      },
    ],
    technicalHighlights: [
      {
        title: 'Core Web Vitals Excellence',
        description: 'We target green scores for Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).',
      },
      {
        title: 'Semantic HTML & Accessibility',
        description: 'Strict adherence to WCAG 2.1 AA accessibility guidelines, screen reader friendly markup, and proper ARIA landmarks.',
      },
      {
        title: 'Clean Modular Code',
        description: 'Maintainable, lightweight code avoiding heavy third-party bloat, ensuring long-term reliability and effortless updates.',
      },
      {
        title: 'Security Hardening',
        description: 'Implementation of modern Content Security Policies (CSP), sanitized user inputs, CSRF defenses, and SSL/TLS best practices.',
      },
    ],
    workflowSteps: [
      { step: '01', title: 'Architecture & Wireframing', description: 'Defining user journeys, information hierarchy, and conversion paths before writing code.' },
      { step: '02', title: 'Visual Design & Prototyping', description: 'Crafting responsive, high-contrast layouts aligned with your brand aesthetic.' },
      { step: '03', title: 'Clean-Code Development', description: 'Building the website with modern TypeScript, semantic HTML, and optimized styling.' },
      { step: '04', title: 'Testing & Core Vitals QA', description: 'Cross-browser, mobile device, speed, accessibility, and form validation testing.' },
      { step: '05', title: 'Deployment & Launch Verification', description: 'Production deployment, domain DNS configuration, and search engine index submission.' },
    ],
    faq: [
      {
        question: 'How long does a typical website development project take?',
        answer: 'Timelines vary based on complexity. A focused local business website or landing page typically takes 2 to 4 weeks, while comprehensive multi-page corporate websites or custom web solutions usually take 4 to 8 weeks from initial discovery to final deployment.',
      },
      {
        question: 'Will my website be mobile friendly and work on all devices?',
        answer: 'Yes, 100%. All websites developed by MZA Tech Zone are built with a mobile-first philosophy, ensuring smooth performance, readable typography, and effortless touch interactions across smartphones, tablets, laptops, and wide desktop displays.',
      },
      {
        question: 'How do you ensure the website is optimized for search engines?',
        answer: 'We embed technical SEO best practices into the core build—clean semantic HTML5 markup, optimized title and header hierarchies, automated sitemap generation, robots.txt configuration, schema structured data, and fast page load speeds.',
      },
      {
        question: 'Can you redesign my existing website without losing current search rankings?',
        answer: 'Absolutely. We conduct a thorough pre-migration URL audit, map out precise 301 redirects for any altered paths, preserve established meta data, and ensure your organic search equity remains intact during and after the launch.',
      },
    ],
  },
  {
    id: 'seo-services',
    slug: 'seo',
    route: '/services/seo',
    title: 'SEO Services',
    badge: 'Organic Search & Visibility',
    shortDescription: 'Strategic SEO focused on improving search visibility, attracting qualified traffic, and increasing organic growth.',
    heroHeadline: 'Data-Driven SEO Strategies That Attract Qualified Customers',
    heroSubheadline: 'We help your business earn high-intent search visibility through comprehensive technical SEO, deep keyword research, strategic on-page optimization, and authoritative content planning.',
    overviewText: [
      'Showing up when prospective customers actively search for your services is the most cost-effective and enduring customer acquisition channel available to modern businesses.',
      'Search Engine Optimization is not about guessing algorithms or chasing fleeting shortcuts. It is a systematic process of aligning your website’s technical architecture, content quality, and topical authority with how modern search engines evaluate relevance.',
      'MZA Tech Zone delivers transparent, ethical, and measurement-backed SEO services designed to increase search impressions, boost qualified clicks, and generate tangible inbound business inquiries.',
    ],
    coreBenefits: [
      {
        title: 'High-Intent Inbound Leads',
        description: 'Capture users at the exact moment they are actively searching for solutions your business provides.',
        icon: 'Target',
      },
      {
        title: 'Long-Term Compound Value',
        description: 'Unlike paid ads that stop the moment your budget runs out, organic search equity continues to deliver value.',
        icon: 'TrendingUp',
      },
      {
        title: 'Technical Health & Crawlability',
        description: 'Eliminate crawl errors, broken links, slow render times, and indexation blockers holding your site back.',
        icon: 'CheckCircle2',
      },
      {
        title: 'Topical Authority Building',
        description: 'Position your brand as the definitive authority in your industry with comprehensive content clusters.',
        icon: 'BookOpen',
      },
      {
        title: 'Local & National Reach',
        description: 'Target geographically specific buyer searches or broader regional and national service queries.',
        icon: 'Globe',
      },
      {
        title: 'Transparent Reporting',
        description: 'Clear visibility into keyword ranking movements, organic impression trends, and actionable next steps.',
        icon: 'BarChart3',
      },
    ],
    serviceOfferings: [
      {
        title: 'Comprehensive Keyword Research & Intent Mapping',
        tagline: 'Targeting phrases that drive real business inquiries',
        description: 'We identify the precise search terms, search volumes, commercial intents, and question queries your prospective clients use when looking for your services.',
        points: ['Commercial vs. informational intent analysis', 'Competitor keyword gap analysis', 'Search volume & difficulty assessment', 'Page-by-page keyword mapping'],
      },
      {
        title: 'On-Page Content & Structural Optimization',
        tagline: 'Fine-tuning every page for maximum relevance',
        description: 'Optimizing titles, headings, meta descriptions, internal linking, body copy, and media assets to communicate maximum clarity to search engines and users.',
        points: ['Strategic H1, H2, and H3 structuring', 'Compelling, click-worthy meta tags', 'Internal linking architecture optimization', 'Image alt attributes and compression'],
      },
      {
        title: 'Technical SEO & Core Web Vitals',
        tagline: 'Building an error-free technical foundation',
        description: 'Resolving behind-the-scenes technical issues that impede search engine bots from crawling, indexing, and properly ranking your website.',
        points: ['Robots.txt & XML sitemap optimization', 'Canonical tags & duplicate content resolution', 'Structured data / Schema.org implementation', 'Mobile usability and Core Web Vitals audits'],
      },
      {
        title: 'Local SEO & Geo-Targeting',
        tagline: 'Dominating search in your target service areas',
        description: 'Targeting local search intent to ensure your business appears prominently when nearby customers search for regional service providers.',
        points: ['Service area landing page optimization', 'NAP (Name, Address, Phone) consistency', 'Local schema markup generation', 'Localized keyword targeting'],
      },
      {
        title: 'Google Search Console & Analytics Integration',
        tagline: 'Actionable data to guide ongoing decisions',
        description: 'Complete setup and continuous monitoring of Google Search Console and web analytics to uncover search queries, impressions, and indexation health.',
        points: ['Search Console property verification', 'Index coverage and sitemap monitoring', 'Query impression and CTR tracking', 'Conversion and goal tracking setup'],
      },
      {
        title: 'Monthly Performance Reporting & Strategy Reviews',
        tagline: 'Clear insight into your organic growth trajectory',
        description: 'Regular, easy-to-understand performance reports highlighting keyword progress, search impressions, crawl health, and upcoming optimization priorities.',
        points: ['Trackable growth metric trends', 'Search query performance analysis', 'Technical health status check', 'Next-month strategic roadmap'],
      },
    ],
    technicalHighlights: [
      {
        title: 'Schema.org Structured Data',
        description: 'Implementation of rich schemas (Organization, LocalBusiness, ProfessionalService, WebSite, FAQPage, BreadcrumbList) for enhanced search engine understanding.',
      },
      {
        title: 'Crawl Budget & Indexation Control',
        description: 'Fine-tuning robots directives, sitemaps, and canonical links to ensure search engines focus their crawling on your most valuable revenue-generating pages.',
      },
      {
        title: 'Content Depth & Semantic Relevancy',
        description: 'Structuring content to answer natural customer questions, incorporate related subtopics, and satisfy search algorithms without keyword stuffing.',
      },
      {
        title: 'Mobile-First Indexing Compliance',
        description: 'Ensuring your mobile version contains identical structured data, headings, and quality content as the desktop version.',
      },
    ],
    workflowSteps: [
      { step: '01', title: 'Technical & Content Audit', description: 'Comprehensive inspection of crawl errors, index status, meta tags, and site speed.' },
      { step: '02', title: 'Keyword Research & Mapping', description: 'Identifying high-value search queries and assigning target terms to specific pages.' },
      { step: '03', title: 'On-Page & Technical Implementation', description: 'Refining code, headers, schema, meta tags, and site structure for maximum relevance.' },
      { step: '04', title: 'Analytics & Console Tracking', description: 'Configuring Search Console and web analytics to monitor indexation and impressions.' },
      { step: '05', title: 'Ongoing Refinement & Reporting', description: 'Analyzing real search data and iteratively expanding content and technical authority.' },
    ],
    faq: [
      {
        question: 'How long does it take to see results from SEO?',
        answer: 'SEO is a compounding long-term investment. While technical fixes and on-page improvements often show initial impression movement within 4 to 8 weeks, significant and sustained organic traffic growth typically develops over 3 to 6 months of consistent optimization.',
      },
      {
        question: 'Do you guarantee number 1 rankings on Google?',
        answer: 'No reputable agency can guarantee specific #1 rankings, as search algorithms consider hundreds of dynamic factors outside any single entity’s direct control. We guarantee transparent, industry-standard best practices, technical excellence, and data-driven strategies designed to systematically improve your visibility.',
      },
      {
        question: 'What is the difference between On-Page and Technical SEO?',
        answer: 'On-Page SEO focuses on content elements visible to users and crawlers (headlines, body copy, keywords, meta tags, image alt text), while Technical SEO focuses on the underlying infrastructure (crawlability, sitemaps, canonical tags, schema markup, page speed, and mobile responsiveness).',
      },
      {
        question: 'Will I receive regular reports on our SEO progress?',
        answer: 'Yes. We provide regular, transparent reporting covering search impressions, top performing search queries, technical health status, and strategic next steps so you always understand where your investment is going.',
      },
    ],
  },
  {
    id: 'google-business-profile',
    slug: 'google-business-profile',
    route: '/services/google-business-profile',
    title: 'Google Business Profile',
    badge: 'Local Search & Google Maps',
    shortDescription: 'Optimization and management designed to improve local visibility, customer engagement, and Google Maps presence.',
    heroHeadline: 'Dominate Local Search & Win More Customers on Google Maps',
    heroSubheadline: 'We optimize and manage your Google Business Profile to capture high-intent local searches, build immediate community trust, and turn map views into direct phone calls and visits.',
    overviewText: [
      'When customers in your area need immediate services, they turn to Google Search and Google Maps. For local businesses, your Google Business Profile (GBP) is often the decisive factor in whether a prospect calls you or your competitor.',
      'An unverified, incomplete, or poorly managed profile results in lost leads every single day. A fully optimized profile showcases your services, verifies your legitimacy, highlights positive customer feedback, and maximizes your visibility in local map pack results.',
      'MZA Tech Zone manages and optimizes every aspect of your Google Business Profile—from primary category selection and service menus to photo updates, review response strategies, and local search signal reinforcement.',
    ],
    coreBenefits: [
      {
        title: 'Prominent Map Pack Visibility',
        description: 'Increase the frequency with which your listing appears in Google Maps and local 3-pack search results.',
        icon: 'MapPin',
      },
      {
        title: 'Direct Customer Actions',
        description: 'Generate direct phone calls, website clicks, direction requests, and message inquiries from local buyers.',
        icon: 'PhoneCall',
      },
      {
        title: 'Enhanced Brand Trust',
        description: 'Showcase verified business information, high-quality photos, updated hours, and structured review strategies.',
        icon: 'Award',
      },
      {
        title: 'Local SEO Synergies',
        description: 'Bridge your Google Business Profile with your website’s local schema and service pages for stronger relevance.',
        icon: 'Network',
      },
      {
        title: 'Accurate Business Information',
        description: 'Ensure your business hours, holiday schedules, services, and contact details are always 100% accurate.',
        icon: 'Clock',
      },
      {
        title: 'Performance Insights',
        description: 'Track how customers find your profile, what search terms they used, and what actions they took.',
        icon: 'LineChart',
      },
    ],
    serviceOfferings: [
      {
        title: 'Profile Audit & Setup Optimization',
        tagline: 'Establishing a rock-solid local foundation',
        description: 'Complete inspection and optimization of all core profile fields to ensure compliance with Google guidelines and maximum algorithmic relevance.',
        points: ['Primary & secondary category selection', 'Precise service area radius definition', 'Accurate business hours & holiday schedules', 'Attributes & accessibility tags configuration'],
      },
      {
        title: 'Comprehensive Service Menu & Description Crafting',
        tagline: 'Clearly explaining what you offer to local buyers',
        description: 'Writing rich, keyword-optimized service descriptions and structured item pricing to help potential customers understand your full capabilities.',
        points: ['Service categorization & custom items', 'Natural keyword-rich business description', 'Service feature highlights', 'Direct booking/contact link integration'],
      },
      {
        title: 'Photo Strategy & Visual Branding',
        tagline: 'Making a memorable visual first impression',
        description: 'Curating and formatting high-resolution interior, exterior, team, and project imagery to boost profile engagement and click-through rates.',
        points: ['Cover photo and logo optimization', 'Geotagged project & work showcase imagery', 'Team and facility photos', 'Regular visual content refresh guidelines'],
      },
      {
        title: 'Review Generation Strategy & Response Framework',
        tagline: 'Building lasting social proof and community trust',
        description: 'Implementing ethical workflows to encourage satisfied clients to leave detailed feedback, along with professional response guidance for all reviews.',
        points: ['Direct review link generation for easy sharing', 'Professional response templates for positive reviews', 'Constructive response framework for critical feedback', 'Review sentiment monitoring'],
      },
      {
        title: 'Google Updates & Post Management',
        tagline: 'Keeping your listing active and engaging',
        description: 'Publishing regular Google updates, announcements, special offers, and service spotlights to signal active management to search algorithms.',
        points: ['Service spotlight posts with direct CTAs', 'Company announcements & holiday notices', 'Promotional offer highlights', 'Engaging imagery and action buttons'],
      },
      {
        title: 'Performance Monitoring & Local Insights',
        tagline: 'Tracking tangible calls, clicks, and queries',
        description: 'Analyzing Google Business Profile performance data to understand search query triggers, call volumes, and direction requests.',
        points: ['Breakdown of discovery vs. direct searches', 'Customer action tracking (Calls, Clicks, Directions)', 'Top search queries triggering your listing', 'Month-over-month engagement trends'],
      },
    ],
    technicalHighlights: [
      {
        title: 'Category Relevance Optimization',
        description: 'Careful selection of primary and secondary categories to align with how local searchers query Google Maps for your specific services.',
      },
      {
        title: 'NAP Consistency Coordination',
        description: 'Ensuring your Name, Address, and Phone details exactly match between your website, schema markup, and Google listing.',
      },
      {
        title: 'Website Local Landing Page Linking',
        description: 'Connecting your Google Business Profile URL to the most relevant local service page with matching geographic structured data.',
      },
      {
        title: 'Guideline Compliance & Suspension Avoidance',
        description: 'Strict adherence to Google Business Profile quality guidelines to prevent listing flagging, policy violations, or algorithmic penalties.',
      },
    ],
    workflowSteps: [
      { step: '01', title: 'Listing Audit & Access Verification', description: 'Reviewing current profile status, category alignment, and guideline compliance.' },
      { step: '02', title: 'Data & Service Menu Optimization', description: 'Optimizing categories, hours, business descriptions, and comprehensive service menus.' },
      { step: '03', title: 'Visuals & Media Upload', description: 'Formatting and publishing high-quality brand assets, work photos, and facility visuals.' },
      { step: '04', title: 'Review Strategy & Post Deployment', description: 'Setting up direct review generation links and publishing initial service updates.' },
      { step: '05', title: 'Monthly Insights & Ongoing Management', description: 'Reviewing search query triggers, customer action metrics, and refining listings.' },
    ],
    faq: [
      {
        question: 'Why is Google Business Profile important for my business?',
        answer: 'For businesses serving local or regional clients, Google Business Profile is the primary engine behind Google Maps rankings and the prominent "Local 3-Pack" that appears at the top of local search results. It drives high-intent phone calls, website visits, and direct customer trust.',
      },
      {
        question: 'Do I need a physical storefront to have a Google Business Profile?',
        answer: 'Not necessarily. Businesses that travel to clients or operate in specific geographic areas can configure a Service Area Business (SAB) profile on Google, specifying the towns or radius served without publishing a public home address.',
      },
      {
        question: 'Can you guarantee that my listing will rank #1 on Google Maps?',
        answer: 'No agency can guarantee specific rank positions on Google Maps because proximity to the searcher, user location, and algorithmic weightings vary constantly. We optimize all factors within your control—relevance, completeness, category accuracy, and engagement signals—to maximize your map visibility.',
      },
      {
        question: 'How do you handle negative customer reviews?',
        answer: 'We provide structured, professional response frameworks designed to acknowledge the feedback calmly, demonstrate accountability to prospective customers reading the exchange, and offer offline resolution paths without escalating conflicts online.',
      },
    ],
  },
];

export const PORTFOLIO_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'apex-logistics',
    slug: 'apex-logistics',
    title: 'Apex Freight & Logistics Portal',
    industry: 'Transportation & Supply Chain',
    category: 'Web Development',
    categories: ['Web Development', 'SEO'],
    shortDescription: 'Modern corporate website and shipment inquiry interface engineered for speed, clean UX, and commercial search visibility.',
    overview: 'A full redesign and technical re-architecture for a regional logistics provider whose legacy website suffered from slow mobile load times and low search discovery.',
    challenge: 'The client’s prior website took over 6 seconds to load on mobile devices, lacked clear service tier categorization, and was virtually invisible for regional freight queries.',
    strategy: 'We designed a modern, high-contrast dark luxury interface with instant quote calculators, rebuilt the frontend in lightweight modern TypeScript, and implemented local and commercial freight schema markup.',
    solution: 'Delivered a fully responsive web application with sub-second page transitions, streamlined quote inquiry forms, and an optimized content structure targeting commercial logistics searches.',
    servicesProvided: ['Custom Web Development', 'Core Web Vitals Optimization', 'Technical SEO Setup', 'Commercial Lead Funnel Design'],
    technologyUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Schema.org', 'Cloudflare'],
    trackableMetrics: [
      { label: 'Mobile Page Speed', value: '0.8s', detail: 'Reduced from 6.2s prior to rebuild' },
      { label: 'Inquiry Form Completion', value: '+64%', detail: 'Measured across 90-day post launch' },
      { label: 'Organic Impressions', value: '+142%', detail: 'Observed in Search Console trends' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Web Development', 'Performance', 'Corporate'],
  },
  {
    id: 'vanguard-dental',
    slug: 'vanguard-dental',
    title: 'Vanguard Family & Cosmetic Dentistry',
    industry: 'Healthcare & Dental Practice',
    category: 'Google Business Profile',
    categories: ['Google Business Profile', 'Local SEO'],
    shortDescription: 'Local search engine dominance and Google Business Profile optimization to capture patient appointment requests.',
    overview: 'Complete overhaul of a multi-practitioner dental clinic’s Google Business Profile and local service area landing pages.',
    challenge: 'The practice had conflicting business names across directory citations, unoptimized categories, zero photo updates in 2 years, and low map pack visibility outside a 1-mile radius.',
    strategy: 'We synchronized NAP information across all listings, restructured the primary and secondary service categories, implemented an ethical review generation protocol, and published weekly service updates.',
    solution: 'Turned the clinic’s Google Business Profile into an active patient acquisition channel with high-definition facility photography, comprehensive service pricing guides, and direct appointment booking links.',
    servicesProvided: ['Google Business Profile Optimization', 'Local Citation Alignment', 'Review Generation Strategy', 'Local Schema Integration'],
    technologyUsed: ['Google Business Profile API', 'Local Search Console', 'Schema.org LocalBusiness'],
    trackableMetrics: [
      { label: 'Direct Phone Inquiries', value: '+88%', detail: 'Tracked via GBP call button insights' },
      { label: 'Map Pack Discovery', value: '+210%', detail: 'Expanded geographical search radius' },
      { label: 'Verified Reviews Added', value: '45+', detail: 'Collected through patient follow-up workflow' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    tags: ['Google Business Profile', 'Local SEO', 'Healthcare'],
  },
  {
    id: 'solaris-clean-energy',
    slug: 'solaris-clean-energy',
    title: 'Solaris Commercial & Residential Energy',
    industry: 'Renewable Energy & Solar',
    category: 'SEO',
    categories: ['SEO', 'Web Development'],
    shortDescription: 'High-intent technical SEO campaign and educational solar calculator landing page targeting commercial property owners.',
    overview: 'A data-driven SEO strategy and content hub built to capture commercial and residential property owners researching solar tax incentives and installation ROI.',
    challenge: 'The solar provider faced intense competitive bidding on paid search keywords ($40+ CPC) and had zero organic presence for educational or high-intent search queries.',
    strategy: 'We performed in-depth keyword intent mapping, created comprehensive regional solar incentive guides, resolved critical canonicalization errors, and embedded an interactive ROI savings estimator.',
    solution: 'Engineered an authoritative content library supported by clean structured data and fast-loading web calculators that naturally attracted backlinks and ranked for competitive regional keywords.',
    servicesProvided: ['Comprehensive SEO Audit', 'Keyword Intent Mapping', 'Interactive Calculator Development', 'Technical SEO & Content Clustering'],
    technologyUsed: ['Next.js / React', 'Tailwind CSS', 'Google Search Console', 'Ahrefs Data'],
    trackableMetrics: [
      { label: 'Organic Search Traffic', value: '+185%', detail: 'Sustained growth over 6 months' },
      { label: 'Organic Lead Inquiries', value: '+92%', detail: 'Qualified consultation bookings' },
      { label: 'Keywords in Top 10', value: '38+', detail: 'High-intent commercial search phrases' },
    ],
    imageUrl: 'https://www.residencestyle.com/wp-content/uploads/2021/08/Solar-Panels-1.jpg',
    tags: ['SEO', 'Content Strategy', 'Clean Energy'],
  },
  {
    id: 'krona-architects',
    slug: 'krona-architects',
    title: 'Krona Modern Architecture Studio',
    industry: 'Architecture & Interior Design',
    category: 'Web Development',
    categories: ['Web Development', 'SEO'],
    shortDescription: 'Minimalist, luxury architectural portfolio website with buttery smooth gallery transitions and lightning-fast image delivery.',
    overview: 'A premium portfolio platform built for an award-winning boutique architectural studio to showcase high-end residential and commercial projects.',
    challenge: 'High-resolution architectural photography was causing the previous site to take over 8 seconds to load, resulting in 70%+ mobile bounce rates.',
    strategy: 'We implemented next-gen WebP/AVIF responsive image serving, smooth layout animations, intuitive project filtering, and refined typographic contrast.',
    solution: 'A dark luxury aesthetic combining generous negative space, refined typography, and sub-second asset delivery that lets the studio’s craftsmanship shine.',
    servicesProvided: ['Luxury UI/UX Design', 'Custom Responsive Web Development', 'Image Optimization Pipeline', 'Portfolio CMS Structure'],
    technologyUsed: ['React', 'TypeScript', 'Motion', 'Tailwind CSS', 'Vite'],
    trackableMetrics: [
      { label: 'Average Session Duration', value: '+120%', detail: 'Visitors browsing multiple project galleries' },
      { label: 'Bounce Rate Reduction', value: '-48%', detail: 'Significantly improved mobile engagement' },
      { label: 'Consultation Inquiries', value: '+75%', detail: 'Direct project RFP submissions' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Web Development', 'Portfolio', 'Luxury Design'],
  },
  {
    id: 'metro-law-partners',
    slug: 'metro-law-partners',
    title: 'Metro Legal Counsel & Attorneys',
    industry: 'Legal Services & Corporate Law',
    category: 'Local SEO',
    categories: ['Local SEO', 'SEO', 'Google Business Profile'],
    shortDescription: 'Local search engine dominance and practice-area authority strategy for a multi-partner corporate law firm.',
    overview: 'A targeted local SEO and Google Business Profile campaign designed to establish regional authority in business litigation and commercial real estate.',
    challenge: 'The law firm was overshadowed by larger regional competitors in search results and struggled with inconsistent geographic signals across search engines.',
    strategy: 'We crafted individual practice area landing pages with dedicated attorney bios, implemented legal schema markup, and optimized their multi-location Google Business Profiles.',
    solution: 'Positioned the firm as a regional authority with deep educational FAQ sections, authoritative case study breakdowns, and frictionless consultation request forms.',
    servicesProvided: ['Local SEO Strategy', 'Google Business Profile Multi-Location Setup', 'Legal Schema Implementation', 'Practice Area Content Optimization'],
    technologyUsed: ['Schema.org LegalService', 'Google Search Console', 'React'],
    trackableMetrics: [
      { label: 'Organic Search Impressions', value: '+160%', detail: 'Observed across legal keyword clusters' },
      { label: 'Consultation Phone Calls', value: '+52%', detail: 'Verified through tracking channels' },
      { label: 'Local Pack Placements', value: 'Top 3', detail: 'For primary regional corporate law queries' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tags: ['Local SEO', 'Legal', 'Google Business Profile'],
  },
  {
    id: 'summit-hvac-pros',
    slug: 'summit-hvac-pros',
    title: 'Summit Heating, Cooling & Air Solutions',
    industry: 'Home Services & HVAC Contracting',
    category: 'Google Business Profile',
    categories: ['Google Business Profile', 'Local SEO', 'Web Development'],
    shortDescription: 'Emergency service call capture system, local map optimization, and high-converting mobile dispatch interface.',
    overview: 'Emergency dispatch web platform and Google Business Profile campaign for a 24/7 HVAC contractor.',
    challenge: 'Homeowners needing urgent furnace or AC repairs were unable to quickly find click-to-call buttons on mobile, and the company was missing from Google Maps emergency searches.',
    strategy: 'We built a high-speed, tactile mobile web interface featuring prominent emergency tap-to-call triggers and fully optimized their Google Business Profile for seasonal HVAC search triggers.',
    solution: 'A high-converting local digital system that captures urgent home service requests within seconds of searching.',
    servicesProvided: ['Mobile First Web Development', 'Google Business Profile 24/7 Setup', 'Local Search Strategy', 'Click-to-Call Conversion Tracking'],
    technologyUsed: ['React', 'Tailwind CSS', 'Google Maps API', 'GBP Insights'],
    trackableMetrics: [
      { label: 'Emergency Call Volume', value: '+110%', detail: 'During peak seasonal weather shifts' },
      { label: 'Mobile Conversion Rate', value: '14.2%', detail: 'Visitors initiating phone inquiries' },
      { label: '5-Star Reviews Gathered', value: '60+', detail: 'Via post-service SMS review workflow' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Google Business Profile', 'Local Service', 'Web Development'],
  },
];

export const SAMPLE_REVIEWS: Testimonial[] = [
  {
    id: 'review-1',
    author: 'David Vance',
    role: 'Managing Director',
    companyPlaceholder: 'Regional Supply Solutions',
    rating: 5,
    content: 'MZA Tech Zone transformed our digital presence completely. Our new website is lightning fast on mobile, and our service inquiries increased significantly within months of launch. Highly professional team.',
    serviceType: 'Web Development & SEO',
    isSample: true,
  },
  {
    id: 'review-2',
    author: 'Elena Rostova',
    role: 'Practice Administrator',
    companyPlaceholder: 'Metropolitan Medical Group',
    rating: 5,
    content: 'The Google Business Profile optimization and local SEO work gave us immediate visibility in local map searches. The step-by-step reporting kept our partners confident throughout the entire process.',
    serviceType: 'Google Business Profile',
    isSample: true,
  },
  {
    id: 'review-3',
    author: 'Marcus Chen',
    role: 'Founder & CEO',
    companyPlaceholder: 'Cascade Solar & Energy',
    rating: 5,
    content: 'Working with MZA Tech Zone was refreshing. No sales fluff or unrealistic ranking promises—just methodical, data-driven technical execution that produced measurable search impression growth.',
    serviceType: 'SEO Services',
    isSample: true,
  },
  {
    id: 'review-4',
    author: 'Sarah Jenkins',
    role: 'Principal Architect',
    companyPlaceholder: 'Studio Linea Architecture',
    rating: 5,
    content: 'Our architectural portfolio needed a dark, modern luxury aesthetic that did not compromise load speed. MZA Tech Zone delivered a pristine website that our high-end clients constantly compliment.',
    serviceType: 'Web Development',
    isSample: true,
  },
];

export const GENERAL_FAQS: FAQ[] = [
  {
    question: 'What makes MZA Tech Zone different from other digital agencies?',
    answer: 'We focus strictly on what drives real business outcomes: high-speed modern web development, search engine visibility, and Google Business Profile optimization. We do not use bloated templates, invent fake metrics, or make impossible guarantees. You get transparent communication, clean code, and measurable growth strategies.',
  },
  {
    question: 'How do you structure your project pricing?',
    answer: 'Every project is scoped transparently based on your specific requirements, technical complexity, and target market. We offer clear fixed-price proposals for website builds and predictable monthly agreements for ongoing SEO and Google Business Profile management. No hidden fees.',
  },
  {
    question: 'Can I choose individual services or do I have to package them together?',
    answer: 'You have complete flexibility. You can engage us specifically for a standalone Web Development project, dedicated SEO campaign, or Google Business Profile optimization—or combine them for maximum synergy across your entire digital presence.',
  },
  {
    question: 'How do we get started with MZA Tech Zone?',
    answer: 'Simply click "Get Started" or visit our Contact page to send us a project inquiry. We will schedule a discovery conversation to understand your business goals, review your current digital assets, and provide a clear strategic proposal.',
  },
  {
    question: 'What are your standard business hours?',
    answer: 'Our strategy and development team operates Monday to Friday, 9:00 AM to 5:00 PM. You can reach us anytime at hello@mzatechzone.pro, and we respond promptly during business hours.',
  },
];
