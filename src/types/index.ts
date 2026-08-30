export type RoutePath =
  | '/'
  | '/services'
  | '/services/web-development'
  | '/services/seo'
  | '/services/google-business-profile'
  | '/projects'
  | '/about'
  | '/contact'
  | '/privacy-policy'
  | '/terms-and-conditions';

export interface PageSEO {
  title: string;
  description: string;
  canonicalUrl: string;
  h1: string;
  schemaType?: 'Organization' | 'ProfessionalService' | 'Service' | 'AboutPage' | 'ContactPage' | 'WebPage';
  breadcrumbName: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  route: RoutePath;
  title: string;
  badge: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  overviewText: string[];
  coreBenefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  serviceOfferings: {
    title: string;
    tagline: string;
    description: string;
    points: string[];
  }[];
  technicalHighlights: {
    title: string;
    description: string;
  }[];
  workflowSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  category: 'Web Development' | 'SEO' | 'Local SEO' | 'Google Business Profile';
  categories: string[];
  shortDescription: string;
  overview: string;
  challenge: string;
  strategy: string;
  solution: string;
  servicesProvided: string[];
  technologyUsed: string[];
  trackableMetrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  imageUrl: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  companyPlaceholder: string;
  rating: number;
  content: string;
  serviceType: string;
  isSample: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget?: string;
  message: string;
}
