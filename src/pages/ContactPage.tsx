import React from 'react';
import { COMPANY_INFO, GENERAL_FAQS } from '../data/siteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { 
  Mail, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  PhoneCall, 
  MessageSquare,
  Building2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const seo = {
    title: 'Contact Us | MZA Tech Zone',
    description: 'Get in touch with MZA Tech Zone for custom web development, SEO strategies, or Google Business Profile optimization. Request a free project audit today.',
    canonicalUrl: `${COMPANY_INFO.websiteUrl}/contact`,
    h1: "Let's Build Something That Grows Your Business",
    schemaType: 'ContactPage' as const,
    breadcrumbName: 'Contact',
  };

  const breadcrumbs = [{ name: 'Contact', url: '/contact' }];

  return (
    <div id="contact-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
      <SEOHead seo={seo} breadcrumbs={breadcrumbs} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold">
          <Mail className="w-4 h-4 text-cyan-400" />
          <span>Direct Agency Contact</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-tight">
          Let’s Build Something That Grows Your Business
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Tell us about your company, current digital assets, and growth targets. We will evaluate your requirements and provide a clear, transparent strategic proposal.
        </p>
      </section>

      {/* Main Contact Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Contact Information & Guarantees */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white font-display">
                Agency Information
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Direct communication with technical strategists.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#060a12] border border-slate-800/90">
                <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Official Inquiries
                  </div>
                  <a
                    id="contact-page-email"
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm sm:text-base font-mono font-medium text-white hover:text-cyan-400 transition-colors break-all block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#060a12] border border-slate-800/90">
                <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Business Hours
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {COMPANY_INFO.businessDays}
                  </div>
                  <div className="text-xs text-slate-400">
                    {COMPANY_INFO.hoursDetail}
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                What to Expect:
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Prompt response within 1 business day</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Initial technical and search presence audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Fixed scope proposal with transparent timelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>No high-pressure sales tactics or spam</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm defaultService="Web Development" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-6">
        <FAQAccordion
          faqs={GENERAL_FAQS}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before submitting your project inquiry."
        />
      </section>
    </div>
  );
};
