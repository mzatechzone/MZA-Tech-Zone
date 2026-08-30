import React from 'react';
import { useRouter, Link } from '../router/RouterContext';
import { COMPANY_INFO, CORE_SERVICES, PORTFOLIO_PROJECTS, WHY_CHOOSE_US_POINTS, PROCESS_STEPS, SAMPLE_REVIEWS } from '../data/siteData';
import { SEOHead } from '../components/SEOHead';
import { ValueStrip } from '../components/ValueStrip';
import { CTASection } from '../components/CTASection';
import { GrowthChart } from '../components/GrowthChart';
import { ContactForm } from '../components/ContactForm';
import { 
  ArrowRight, 
  Code2, 
  TrendingUp, 
  MapPin, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight, 
  Clock, 
  Mail, 
  Layers, 
  ChevronRight,
  BarChart3,
  Globe
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { openProjectModal } = useRouter();

  const seo = {
    title: 'MZA Tech Zone | Web Development & SEO Services',
    description: 'MZA Tech Zone provides professional web development, SEO, and Google Business Profile services to help businesses build visibility and grow online.',
    canonicalUrl: `${COMPANY_INFO.websiteUrl}/`,
    h1: 'Build Your Digital Presence. Grow Your Business.',
    schemaType: 'ProfessionalService' as const,
    breadcrumbName: 'Home',
  };

  const serviceIconMap: Record<string, React.ElementType> = {
    'web-development': Code2,
    'seo-services': TrendingUp,
    'google-business-profile': MapPin,
  };

  return (
    <div id="home-page" className="relative space-y-24 sm:space-y-32">
      <SEOHead seo={seo} />

      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-20 overflow-hidden">
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
            alt="Digital technology network and business growth background"
            className="w-full h-full object-cover object-center opacity-18 scale-105 transform filter brightness-75 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06080d]/85 via-[#06080d]/95 to-[#06080d]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-15" />
          {/* Subtle Ambient Glowing Orbs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Agency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-cyan-950/50">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Full-Stack Digital Growth Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
              Build Your Digital Presence.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                Grow Your Business.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              MZA Tech Zone helps businesses improve their online presence through professional, high-performance websites, data-backed SEO strategies, and Google Business Profile optimization designed to drive real customer acquisition.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                id="hero-primary-cta"
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                id="hero-secondary-cta"
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
              >
                <span>View Our Services</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>

            {/* Trust Indicators Pill Row */}
            <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Web Development</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>SEO Optimization</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Google Business Profile</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Growth Focused Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / VALUE STRIP */}
      <ValueStrip />

      {/* 3. SERVICES SECTION */}
      <section id="services-overview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Digital Solutions Built for Business Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            We integrate modern engineering, search optimization, and local visibility to build a resilient and high-converting online asset for your company.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => {
            const Icon = serviceIconMap[service.id] || Code2;
            return (
              <div
                key={service.id}
                id={`home-service-card-${service.id}`}
                className="group relative bg-[#090e1a]/90 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/40 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                <div className="space-y-6">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Highlights Bullet list */}
                  <ul className="space-y-2.5 pt-2 border-t border-slate-800/80">
                    {service.coreBenefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{benefit.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <div className="pt-8 mt-6 border-t border-slate-800/60">
                  <Link
                    id={`learn-more-${service.id}-btn`}
                    to={service.route}
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/30 text-sm font-semibold text-white group-hover:text-cyan-300 transition-all"
                  >
                    <span>Learn More About {service.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-cyan-400" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section id="why-choose-us-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#090e1a]/80 border border-slate-800/90 rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Agency Values & Quality Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Why Businesses Partner With MZA Tech Zone
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              We combine engineering discipline with commercial marketing strategy. Here is why clients trust us with their critical digital assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US_POINTS.map((point) => (
              <div
                key={point.title}
                className="p-6 rounded-2xl bg-[#060a12] border border-slate-800 hover:border-cyan-500/30 transition-all duration-200 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="recent-projects-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Recent Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Recent Projects & Case Studies
            </h2>
            <p className="text-base text-slate-400 font-normal">
              Explore how our web engineering and search optimization strategies solve real business challenges.
            </p>
          </div>

          <Link
            id="view-all-projects-btn"
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/40 text-sm font-semibold text-slate-200 hover:text-white transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="group bg-[#090e1a] border border-slate-800 hover:border-cyan-500/30 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#06080d]/80 backdrop-blur-md border border-white/10 text-cyan-400 text-[11px] font-semibold">
                    {project.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {project.industry}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.servicesProvided.slice(0, 2).map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => openProjectModal(project.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/30 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ABOUT PREVIEW */}
      <section id="about-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gradient-to-r from-[#0a0f1d] via-[#090e1a] to-[#070b14] border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About MZA Tech Zone</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Technology, Strategy, and Growth Under One Roof
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              MZA Tech Zone was established on a single premise: businesses achieve superior growth when their web development, search engine optimization, and Google Business Profile management operate as a unified, synchronized system.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              We do not treat websites as static brochure pages or SEO as an afterthought. We build clean, high-speed web architectures, map high-intent commercial keywords, and optimize local map presence to systematically turn searchers into qualified clients.
            </p>

            <div className="pt-2">
              <Link
                id="learn-more-about-us-btn"
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 transition-all"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#060a12] border border-slate-800 space-y-2">
              <div className="text-cyan-400 font-bold text-sm uppercase tracking-wider">
                Our Core Mission
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Empowering businesses with robust web infrastructure and data-driven visibility that generates sustainable customer demand.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#060a12] border border-slate-800 space-y-2">
              <div className="text-blue-400 font-bold text-sm uppercase tracking-wider">
                Direct Communication
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                You work directly with strategic builders and engineers. No account manager layers, no runarounds, and no vanity metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLIENT REVIEWS / TESTIMONIALS */}
      <section id="reviews-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Sample Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Built on Trust & Strategic Execution
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Read illustrative sample feedback demonstrating our client-first engagement principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SAMPLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-3xl bg-[#090e1a]/80 border border-slate-800 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {review.serviceType}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white font-display">{review.author}</div>
                  <div className="text-xs text-slate-400">{review.role}, {review.companyPlaceholder}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. GROWTH / RESULTS SECTION */}
      <section id="growth-results-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Trackable Growth Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Built for Measurable Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            We focus on metrics that impact your bottom line: load speeds, search impression gains, local map actions, and qualified inbound leads.
          </p>
        </div>

        <GrowthChart />
      </section>

      {/* 9. PROCESS SECTION */}
      <section id="process-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Our Simple Process
          </h2>
          <p className="text-base text-slate-400">
            A clear, four-phase execution framework designed to deliver predictability and compound results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-3xl bg-[#090e1a]/70 border border-slate-800/90 relative space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-400">
                  {step.tagline}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                  Key Deliverables:
                </div>
                <ul className="space-y-1.5">
                  {step.deliverables.map((del, i) => (
                    <li key={i} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <CTASection
        title="Ready to Grow Your Online Presence?"
        description="Schedule a project discovery discussion with MZA Tech Zone. We will evaluate your website, analyze search opportunities, and build an actionable growth roadmap."
        buttonText="Start Your Project"
      />

      {/* 11. CONTACT PREVIEW */}
      <section id="contact-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white font-display">
                Direct Communication & Fast Turnarounds
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have an immediate website redesign requirement or are looking for long-term SEO and Google Business Profile growth, our team is ready to assist.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email Inquiries</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-white font-mono text-sm hover:text-cyan-400 transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm pt-3 border-t border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Business Hours</div>
                  <div className="text-white font-medium text-xs sm:text-sm">
                    {COMPANY_INFO.businessHours}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm defaultService="Web Development" />
          </div>
        </div>
      </section>
    </div>
  );
};
