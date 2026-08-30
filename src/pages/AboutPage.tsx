import React from 'react';
import { Link } from '../router/RouterContext';
import { COMPANY_INFO, WHY_CHOOSE_US_POINTS, PROCESS_STEPS } from '../data/siteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CTASection } from '../components/CTASection';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  Code2, 
  TrendingUp, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Award,
  HeartHandshake
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const seo = {
    title: 'About Us | MZA Tech Zone',
    description: 'Learn about MZA Tech Zone, our engineering principles, and our mission to help businesses scale through high-performance web development, SEO, and Google Business Profile optimization.',
    canonicalUrl: `${COMPANY_INFO.websiteUrl}/about`,
    h1: 'Technology, Strategy, and Growth Under One Roof',
    schemaType: 'AboutPage' as const,
    breadcrumbName: 'About',
  };

  const breadcrumbs = [{ name: 'About', url: '/about' }];

  const coreValues = [
    {
      title: 'Technical Integrity',
      description: 'We build with clean, maintainable code and follow ethical, white-hat search engine optimization standards. No shortcuts or fragile hacks.',
      icon: ShieldCheck,
    },
    {
      title: 'Commercial Relevance',
      description: 'We do not build technology for technology’s sake. Every line of code and keyword strategy is designed to drive tangible business growth.',
      icon: Target,
    },
    {
      title: 'Radical Transparency',
      description: 'Clear deliverables, direct communication with strategic engineers, and honest reporting on what works and what needs refinement.',
      icon: HeartHandshake,
    },
    {
      title: 'Continuous Optimization',
      description: 'The digital landscape is never static. We continuously analyze search patterns, user interactions, and technical performance.',
      icon: TrendingUp,
    },
  ];

  return (
    <div id="about-company-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
      <SEOHead seo={seo} breadcrumbs={breadcrumbs} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold">
          <Building2 className="w-4 h-4 text-cyan-400" />
          <span>About MZA Tech Zone</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-tight">
          Technology, Strategy, and Growth Under One Roof
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          MZA Tech Zone is a dedicated digital growth partner. We combine custom web development, search engine optimization, and Google Business Profile management into a single, cohesive engine for business growth.
        </p>
      </section>

      {/* Company Intro & Mission / Vision Grid */}
      <section className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#090e1a]/80 border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Who We Are & What We Stand For
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              At MZA Tech Zone, we believe that establishing a credible and high-converting online presence shouldn't be fragmented between disconnected freelancers or bloated agencies that prioritize vanity metrics.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              We operate as your direct strategic partner—crafting modern, lightning-fast web applications, executing deep search engine optimization campaigns, and managing your local Google Maps visibility to ensure you capture and convert high-intent customer demand.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Mission */}
            <div className="p-6 rounded-2xl bg-[#060a12] border border-cyan-500/20 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">Our Mission</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To empower growing businesses with resilient web engineering and transparent search visibility that produces predictable, long-term customer demand.
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 rounded-2xl bg-[#060a12] border border-blue-500/20 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-500/30 text-blue-400">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">Our Vision</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To be the most trusted digital growth partner for businesses that demand high technical standards, measurable accountability, and authentic partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Our Core Values
          </h2>
          <p className="text-base text-slate-400">
            The fundamental standards that govern every client engagement and line of code we ship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="p-6 rounded-3xl bg-[#090e1a]/90 border border-slate-800 hover:border-cyan-500/30 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{val.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Expertise / Pillars */}
      <section className="bg-[#080c16] border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-10">
        <div className="max-w-3xl space-y-3">
          <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
            Domain Focus
          </div>
          <h2 className="text-3xl font-bold text-white font-display">
            Our Four Pillars of Digital Expertise
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            We specialize in interconnected competencies that directly move the needle for client acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#060a12] border border-slate-800 space-y-3">
            <Code2 className="w-6 h-6 text-cyan-400" />
            <h3 className="text-base font-bold text-white font-display">Web Development</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Custom responsive websites, landing pages, and interactive platforms engineered for sub-second speeds and flawless mobile UX.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#060a12] border border-slate-800 space-y-3">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
            <h3 className="text-base font-bold text-white font-display">SEO Services</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Data-driven technical SEO, commercial keyword mapping, on-page optimization, and structured Schema.org data markup.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#060a12] border border-slate-800 space-y-3">
            <MapPin className="w-6 h-6 text-blue-400" />
            <h3 className="text-base font-bold text-white font-display">Google Business Profile</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Complete local map optimization, category configuration, photo strategy, review generation systems, and weekly updates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#060a12] border border-slate-800 space-y-3">
            <Target className="w-6 h-6 text-indigo-400" />
            <h3 className="text-base font-bold text-white font-display">Local Digital Growth</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Geo-targeted landing pages, NAP consistency across regional directories, and frictionless click-to-call conversion paths.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The MZA Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            What Makes Us Different
          </h2>
          <p className="text-base text-slate-400">
            Why forward-thinking business owners choose MZA Tech Zone over traditional marketing agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point) => (
            <div
              key={point.title}
              className="p-6 rounded-2xl bg-[#090e1a]/80 border border-slate-800 space-y-3"
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

      {/* Final CTA */}
      <CTASection
        title="Ready to Partner with MZA Tech Zone?"
        description="Let’s have a focused discovery conversation about your business, current digital footprint, and revenue goals."
        buttonText="Start a Discovery Conversation"
      />
    </div>
  );
};
