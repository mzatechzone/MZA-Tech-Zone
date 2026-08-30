import React from 'react';
import { Link } from '../router/RouterContext';
import { COMPANY_INFO, CORE_SERVICES, WHY_CHOOSE_US_POINTS, PROCESS_STEPS, GENERAL_FAQS } from '../data/siteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { 
  Code2, 
  TrendingUp, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ShieldCheck,
  Zap,
  Target,
  BarChart3
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const seo = {
    title: 'Services | MZA Tech Zone',
    description: 'Explore MZA Tech Zone’s specialized services: custom high-performance web development, strategic search engine optimization, and Google Business Profile management.',
    canonicalUrl: `${COMPANY_INFO.websiteUrl}/services`,
    h1: 'Digital Services That Help Your Business Grow',
    schemaType: 'Service' as const,
    breadcrumbName: 'Services',
  };

  const breadcrumbs = [{ name: 'Services', url: '/services' }];

  const iconMap: Record<string, React.ElementType> = {
    'web-development': Code2,
    'seo-services': TrendingUp,
    'google-business-profile': MapPin,
  };

  return (
    <div id="services-overview-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
      <SEOHead seo={seo} breadcrumbs={breadcrumbs} faqs={GENERAL_FAQS} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Complete Digital Growth Capabilities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-tight">
          Digital Services That Help Your Business Grow
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          We provide high-impact, synchronized digital solutions: responsive web development engineered for speed and conversion, strategic SEO that drives qualified search traffic, and Google Business Profile optimization that captures local customers.
        </p>
      </section>

      {/* Main 3 Services Detailed Cards */}
      <section className="space-y-12">
        {CORE_SERVICES.map((service, index) => {
          const Icon = iconMap[service.id] || Code2;
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={service.id}
              id={`service-detail-card-${service.id}`}
              className="bg-[#090e1a]/90 border border-slate-800 hover:border-cyan-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl transition-all duration-300"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                {/* Information Column */}
                <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
                    {service.title}
                  </h2>

                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.coreBenefits.slice(0, 4).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block">{benefit.title}</strong>
                          <span className="text-slate-400">{benefit.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      id={`explore-service-${service.id}-btn`}
                      to={service.route}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all"
                    >
                      <span>Explore Dedicated {service.title} Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Offerings Summary Box */}
                <div className={`lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#060a12] border border-slate-800/90 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
                    <span>Key Offerings</span>
                    <span className="text-cyan-400 font-mono text-[11px]">{service.serviceOfferings.length} Sub-Services</span>
                  </div>

                  <div className="space-y-3">
                    {service.serviceOfferings.slice(0, 4).map((offering, oIdx) => (
                      <div key={oIdx} className="space-y-1">
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {offering.title}
                        </div>
                        <p className="text-xs text-slate-400 pl-3.5 line-clamp-2">
                          {offering.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Why Businesses Choose Our Services */}
      <section className="bg-[#080c16] border border-slate-800/80 rounded-3xl p-8 sm:p-12 lg:p-16 space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why MZA Tech Zone</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Why Businesses Choose Our Services
          </h2>
          <p className="text-base text-slate-300">
            We avoid generic marketing promises and one-size-fits-all templates. Every deliverable is engineered to provide measurable commercial value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point) => (
            <div
              key={point.title}
              className="p-6 rounded-2xl bg-[#060a12] border border-slate-800 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">{point.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Structured Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            How We Deliver Predictable Results
          </h2>
          <p className="text-base text-slate-400">
            Our disciplined four-stage delivery model ensures transparency and momentum from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-3xl bg-[#090e1a]/70 border border-slate-800 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-mono text-3xl font-extrabold text-cyan-400">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-white font-display">{step.title}</h3>
                <div className="text-xs font-semibold text-cyan-400">{step.tagline}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[10px] uppercase font-semibold text-slate-400 mb-2">Deliverables:</div>
                <ul className="space-y-1">
                  {step.deliverables.map((del, i) => (
                    <li key={i} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services FAQ */}
      <section className="pt-6">
        <FAQAccordion faqs={GENERAL_FAQS} title="Services & Engagement FAQ" />
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Transform Your Digital Presence?"
        description="Contact MZA Tech Zone today to discuss your website, SEO, or Google Business Profile goals. We will build a customized plan tailored to your market."
        buttonText="Get Your Proposal"
      />
    </div>
  );
};
