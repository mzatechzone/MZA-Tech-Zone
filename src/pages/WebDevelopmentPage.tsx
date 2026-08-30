import React from 'react';
import { Link, useRouter } from '../router/RouterContext';
import { COMPANY_INFO, CORE_SERVICES, PORTFOLIO_PROJECTS } from '../data/siteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { 
  Code2, 
  Zap, 
  Smartphone, 
  Search, 
  ShieldCheck, 
  Cpu, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Gauge, 
  Lock, 
  Layers, 
  MonitorSmartphone 
} from 'lucide-react';

export const WebDevelopmentPage: React.FC = () => {
  const { openProjectModal } = useRouter();
  const service = CORE_SERVICES.find((s) => s.id === 'web-development')!;

  const seo = {
    title: 'Web Development Services | MZA Tech Zone',
    description: 'Custom, responsive, and high-speed web development services by MZA Tech Zone engineered to convert visitors into customers and accelerate business growth.',
    canonicalUrl: `${COMPANY_INFO.websiteUrl}/services/web-development`,
    h1: 'Modern Web Development Engineered for Speed & Conversions',
    schemaType: 'Service' as const,
    breadcrumbName: 'Web Development',
  };

  const breadcrumbs = [
    { name: 'Services', url: '/services' },
    { name: 'Web Development', url: '/services/web-development' },
  ];

  const webProjects = PORTFOLIO_PROJECTS.filter((p) =>
    p.categories.includes('Web Development')
  );

  return (
    <div id="web-development-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
      <SEOHead
        seo={seo}
        breadcrumbs={breadcrumbs}
        serviceSchema={{
          name: 'Web Development Services',
          description: service.shortDescription,
          serviceType: 'WebDevelopment',
        }}
        faqs={service.faq}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold">
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span>High Performance Web Engineering</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-tight">
          {service.heroHeadline}
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {service.heroSubheadline}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            id="web-dev-hero-cta"
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 transition-all"
          >
            <span>Start Your Web Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#types-of-websites"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-300 bg-slate-900 border border-slate-700 hover:border-slate-600 transition-all"
          >
            <span>Explore Solutions</span>
          </a>
        </div>
      </section>

      {/* Introduction & Overview */}
      <section className="bg-[#090e1a]/80 border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Why Strategic Web Development Is Your Most Critical Business Asset
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.overviewText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#060a12] border border-cyan-500/20 text-center space-y-2">
              <Gauge className="w-6 h-6 text-cyan-400 mx-auto" />
              <div className="text-2xl font-bold text-white font-display">&lt; 1.0s</div>
              <div className="text-xs text-slate-400">Target Core Load Speed</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#060a12] border border-slate-800 text-center space-y-2">
              <MonitorSmartphone className="w-6 h-6 text-emerald-400 mx-auto" />
              <div className="text-2xl font-bold text-white font-display">100%</div>
              <div className="text-xs text-slate-400">Mobile Responsive</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#060a12] border border-slate-800 text-center space-y-2">
              <Search className="w-6 h-6 text-blue-400 mx-auto" />
              <div className="text-2xl font-bold text-white font-display">SEO-Native</div>
              <div className="text-xs text-slate-400">Built-in Schema & Meta</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#060a12] border border-slate-800 text-center space-y-2">
              <Lock className="w-6 h-6 text-indigo-400 mx-auto" />
              <div className="text-2xl font-bold text-white font-display">Secure</div>
              <div className="text-xs text-slate-400">HTTPS & Sanitized Forms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Key Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Built for Real-World Business Results
          </h2>
          <p className="text-base text-slate-400 font-normal">
            Every website we create adheres to rigorous engineering standards for speed, security, and conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.coreBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 rounded-2xl bg-[#090e1a]/80 border border-slate-800 hover:border-cyan-500/30 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">{benefit.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Types of Websites We Build */}
      <section id="types-of-websites" className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Tailored Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Types of Websites We Build
          </h2>
          <p className="text-base text-slate-400 font-normal">
            From single-purpose lead funnels to robust corporate hubs and custom platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.serviceOfferings.map((offering) => (
            <div
              key={offering.title}
              className="p-7 rounded-3xl bg-[#090e1a]/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
                  {offering.tagline}
                </span>
                <h3 className="text-xl font-bold text-white font-display">{offering.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {offering.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Features:
                </div>
                <ul className="space-y-2">
                  {offering.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Foundations: Speed, SEO, Security */}
      <section className="bg-[#080c16] border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
            Under The Hood
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Engineering & Technical Standards
          </h2>
          <p className="text-sm text-slate-300">
            We write clean, modular TypeScript, HTML5, and CSS. No fragile page builders or sluggish third-party plugins.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.technicalHighlights.map((tech) => (
            <div key={tech.title} className="p-5 rounded-2xl bg-[#060a12] border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white font-display">{tech.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
            Step-by-Step Execution
          </div>
          <h2 className="text-3xl font-bold text-white font-display">
            Our Web Development Process
          </h2>
          <p className="text-sm text-slate-400">
            From initial wireframing to production deployment and indexing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {service.workflowSteps.map((wf) => (
            <div key={wf.step} className="p-5 rounded-2xl bg-[#090e1a]/80 border border-slate-800 space-y-2">
              <span className="font-mono text-2xl font-bold text-cyan-400">{wf.step}</span>
              <h3 className="text-sm font-bold text-white">{wf.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{wf.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Portfolio Preview */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
              Featured Case Studies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Recent Web Development Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:underline"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webProjects.slice(0, 2).map((proj) => (
            <div
              key={proj.id}
              className="p-6 rounded-3xl bg-[#090e1a] border border-slate-800 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="relative h-44 rounded-xl overflow-hidden">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-white">
                    {proj.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-display">{proj.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{proj.shortDescription}</p>
              </div>

              <button
                type="button"
                onClick={() => openProjectModal(proj.id)}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/30 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-6">
        <FAQAccordion faqs={service.faq} title="Web Development FAQ" />
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build a High-Converting Website?"
        description="Contact MZA Tech Zone today for a detailed web architecture review and fixed-scope proposal."
        buttonText="Start Your Web Project"
      />
    </div>
  );
};
