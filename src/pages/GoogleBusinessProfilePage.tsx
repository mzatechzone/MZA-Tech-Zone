import React from 'react';
import { Link } from '../router/RouterContext';
import { COMPANY_INFO, CORE_SERVICES } from '../data/siteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { 
  MapPin, 
  PhoneCall, 
  Award, 
  Network, 
  Clock, 
  LineChart, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Image as ImageIcon, 
  MessageSquare, 
  Layers, 
  ShieldCheck,
  Building2
} from 'lucide-react';

export const GoogleBusinessProfilePage: React.FC = () => {
  const service = CORE_SERVICES.find((s) => s.id === 'google-business-profile')!;

  const seo = {
    title: 'Google Business Profile Services | MZA Tech Zone',
    description: 'Expert Google Business Profile optimization and local map ranking services from MZA Tech Zone to attract high-intent local customers to your business.',
    canonicalUrl: `${COMPANY_INFO.websiteUrl}/services/google-business-profile`,
    h1: 'Dominate Local Search & Win More Customers on Google Maps',
    schemaType: 'Service' as const,
    breadcrumbName: 'Google Business Profile',
  };

  const breadcrumbs = [
    { name: 'Services', url: '/services' },
    { name: 'Google Business Profile', url: '/services/google-business-profile' },
  ];

  return (
    <div id="gbp-service-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
      <SEOHead
        seo={seo}
        breadcrumbs={breadcrumbs}
        serviceSchema={{
          name: 'Google Business Profile Management Services',
          description: service.shortDescription,
          serviceType: 'LocalBusinessManagement',
        }}
        faqs={service.faq}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold">
          <MapPin className="w-4 h-4 text-blue-400" />
          <span>Local Maps & Google 3-Pack Optimization</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-tight">
          {service.heroHeadline}
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {service.heroSubheadline}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            id="gbp-hero-cta"
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-500 via-indigo-600 to-cyan-600 hover:from-blue-400 hover:via-indigo-500 hover:to-cyan-500 shadow-xl shadow-blue-500/20 transition-all"
          >
            <span>Optimize Your Profile</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#gbp-features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-300 bg-slate-900 border border-slate-700 hover:border-slate-600 transition-all"
          >
            <span>Explore GBP Services</span>
          </a>
        </div>
      </section>

      {/* Overview & Importance */}
      <section className="bg-[#090e1a]/80 border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Why Your Google Business Profile Decides Where Local Customers Go
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.overviewText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-[#060a12] border border-blue-500/20 space-y-2">
              <div className="text-blue-400 text-xs font-bold uppercase tracking-wider">
                Direct Calls & Direction Requests
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                A verified, fully optimized Google listing allows local customers to tap-to-call, request GPS directions, or message your team in seconds.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#060a12] border border-slate-800 space-y-2">
              <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
                Social Proof & Community Trust
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Active photo updates, verified business hours, transparent service listings, and professional review responses signal trust to prospective clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits Grid */}
      <section className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Local Market Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Key Advantages of Active Profile Management
          </h2>
          <p className="text-base text-slate-400 font-normal">
            Designed to maximize high-intent local customer discovery and phone inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.coreBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 rounded-2xl bg-[#090e1a]/80 border border-slate-800 hover:border-blue-500/30 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">{benefit.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GBP Specific Services / Pillars */}
      <section id="gbp-features" className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Comprehensive Management</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Our Google Business Profile Optimization Services
          </h2>
          <p className="text-base text-slate-400 font-normal">
            From category selection and service menus to ongoing updates and review response strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.serviceOfferings.map((offering) => (
            <div
              key={offering.title}
              className="p-7 rounded-3xl bg-[#090e1a]/90 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block">
                  {offering.tagline}
                </span>
                <h3 className="text-xl font-bold text-white font-display">{offering.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {offering.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Tasks Covered:
                </div>
                <ul className="space-y-2">
                  {offering.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Local SEO & NAP Synergy */}
      <section className="bg-[#080c16] border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            Technical Alignment
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Connecting Google Business Profile With Your Website’s Local SEO
          </h2>
          <p className="text-sm text-slate-300">
            A Google listing performs best when paired with local schema markup, matching NAP citations, and geo-targeted service landing pages on your website.
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

      {/* 5-Step Process */}
      <section className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            Execution Steps
          </div>
          <h2 className="text-3xl font-bold text-white font-display">
            How We Optimize Your Listing
          </h2>
          <p className="text-sm text-slate-400">
            Audit, configuration, media curation, review strategy, and continuous monthly insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {service.workflowSteps.map((wf) => (
            <div key={wf.step} className="p-5 rounded-2xl bg-[#090e1a]/80 border border-slate-800 space-y-2">
              <span className="font-mono text-2xl font-bold text-blue-400">{wf.step}</span>
              <h3 className="text-sm font-bold text-white">{wf.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{wf.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-6">
        <FAQAccordion faqs={service.faq} title="Google Business Profile FAQ" />
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Dominate Google Maps in Your Area?"
        description="Contact MZA Tech Zone today for a complete local search audit of your Google Business Profile and local citations."
        buttonText="Get Your Profile Optimized"
      />
    </div>
  );
};
