import React from 'react';
import { Link } from '../router/RouterContext';
import { COMPANY_INFO, CORE_SERVICES } from '../data/siteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { GrowthChart } from '../components/GrowthChart';
import { 
  TrendingUp, 
  Search, 
  FileText, 
  Cpu, 
  MapPin, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  Layers, 
  Compass, 
  Globe, 
  ShieldCheck 
} from 'lucide-react';

export const SEOServicesPage: React.FC = () => {
  const service = CORE_SERVICES.find((s) => s.id === 'seo-services')!;

  const seo = {
    title: 'SEO Services | MZA Tech Zone',
    description: 'Data-driven SEO services by MZA Tech Zone. We deliver technical audits, on-page optimization, and high-intent keyword strategies to grow your organic visibility.',
    canonicalUrl: `${COMPANY_INFO.websiteUrl}/services/seo`,
    h1: 'Data-Driven SEO Strategies That Attract Qualified Customers',
    schemaType: 'Service' as const,
    breadcrumbName: 'SEO Services',
  };

  const breadcrumbs = [
    { name: 'Services', url: '/services' },
    { name: 'SEO Services', url: '/services/seo' },
  ];

  return (
    <div id="seo-services-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
      <SEOHead
        seo={seo}
        breadcrumbs={breadcrumbs}
        serviceSchema={{
          name: 'Search Engine Optimization (SEO) Services',
          description: service.shortDescription,
          serviceType: 'SearchEngineOptimization',
        }}
        faqs={service.faq}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span>Strategic Organic Search Positioning</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-tight">
          {service.heroHeadline}
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {service.heroSubheadline}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            id="seo-hero-cta"
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:via-teal-500 hover:to-cyan-500 shadow-xl shadow-emerald-500/20 transition-all"
          >
            <span>Request an SEO Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#seo-pillars"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-300 bg-slate-900 border border-slate-700 hover:border-slate-600 transition-all"
          >
            <span>View Our Methodology</span>
          </a>
        </div>
      </section>

      {/* Intro & Why SEO Matters */}
      <section className="bg-[#090e1a]/80 border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Why Organic Search Is the Most Enduring Growth Channel
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.overviewText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-[#060a12] border border-emerald-500/20 space-y-2">
              <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                High-Intent Acquisition
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Searchers are actively looking for solutions. Capturing their intent at the search bar generates the highest conversion rates of any digital channel.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#060a12] border border-slate-800 space-y-2">
              <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
                No Pay-Per-Click Bleed
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Unlike pay-per-click ad campaigns that stop delivering traffic the moment your daily ad budget exhausts, organic search equity continues to compound over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Core Pillars / Offerings */}
      <section id="seo-pillars" className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Comprehensive Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            The Building Blocks of Sustainable Search Visibility
          </h2>
          <p className="text-base text-slate-400 font-normal">
            We cover every facet of organic search: keyword mapping, on-page optimization, technical infrastructure, and local schema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.serviceOfferings.map((offering) => (
            <div
              key={offering.title}
              className="p-7 rounded-3xl bg-[#090e1a]/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                  {offering.tagline}
                </span>
                <h3 className="text-xl font-bold text-white font-display">{offering.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {offering.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  What We Deliver:
                </div>
                <ul className="space-y-2">
                  {offering.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical SEO, Console & Analytics */}
      <section className="bg-[#080c16] border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Technical Rigor
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Google Search Console & Technical Auditing
          </h2>
          <p className="text-sm text-slate-300">
            We inspect crawl errors, schema markup validation, canonical accuracy, index status, and mobile rendering to ensure your site is completely accessible to search crawlers.
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

      {/* Growth Metrics Visualization */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Compounding Impact
          </div>
          <h2 className="text-3xl font-bold text-white font-display">
            Metrics We Focus On
          </h2>
          <p className="text-sm text-slate-400">
            Trackable search impressions, click-through rates, and commercial query movements.
          </p>
        </div>

        <GrowthChart />
      </section>

      {/* SEO Process */}
      <section className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Structured Execution
          </div>
          <h2 className="text-3xl font-bold text-white font-display">
            Our 5-Stage SEO Methodology
          </h2>
          <p className="text-sm text-slate-400">
            A continuous loop of auditing, optimizing, measuring, and expanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {service.workflowSteps.map((wf) => (
            <div key={wf.step} className="p-5 rounded-2xl bg-[#090e1a]/80 border border-slate-800 space-y-2">
              <span className="font-mono text-2xl font-bold text-emerald-400">{wf.step}</span>
              <h3 className="text-sm font-bold text-white">{wf.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{wf.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-6">
        <FAQAccordion faqs={service.faq} title="SEO Services FAQ" />
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Boost Your Organic Search Visibility?"
        description="Let MZA Tech Zone perform a comprehensive SEO health check on your website and build a high-impact keyword roadmap."
        buttonText="Get Your SEO Proposal"
      />
    </div>
  );
};
