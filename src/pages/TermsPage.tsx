import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const seo = {
    title: 'Terms & Conditions | MZA Tech Zone',
    description: 'Read the terms and conditions for engaging MZA Tech Zone for web development, search engine optimization, and Google Business Profile services.',
    canonicalUrl: `${COMPANY_INFO.websiteUrl}/terms-and-conditions`,
    h1: 'Terms and Conditions',
    schemaType: 'WebPage' as const,
    breadcrumbName: 'Terms & Conditions',
  };

  const breadcrumbs = [{ name: 'Terms & Conditions', url: '/terms-and-conditions' }];

  return (
    <div id="terms-page" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SEOHead seo={seo} breadcrumbs={breadcrumbs} />

      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
          <FileText className="w-3.5 h-3.5" />
          <span>Service Terms & Client Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
          Terms and Conditions
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Last Updated: January 1, 2025 • Effective Date: January 1, 2025
        </p>
      </div>

      <div className="bg-[#090e1a]/90 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">1.</span> Agreement to Terms
          </h2>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("Client", "you"), and MZA Tech Zone ("Company", "we", "us", or "our"), concerning your access to and use of our website and our professional services (including Web Development, Search Engine Optimization, and Google Business Profile management).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">2.</span> Scope of Services
          </h2>
          <p>
            MZA Tech Zone provides digital agency solutions under individually scoped Statements of Work (SOW) or engagement proposals. Services include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-xs sm:text-sm">
            <li><strong className="text-slate-200">Web Development:</strong> Design, frontend and backend engineering, mobile responsiveness, testing, and deployment.</li>
            <li><strong className="text-slate-200">SEO Services:</strong> Technical audits, keyword research, on-page optimization, and organic ranking growth strategies.</li>
            <li><strong className="text-slate-200">Google Business Profile Management:</strong> Verification support, listing optimization, local citation audit, and ongoing updates.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">3.</span> Intellectual Property & Ownership
          </h2>
          <p>
            Upon full settlement of all associated project invoices, all custom website source code, visual designs, and written copy developed specifically for the Client shall transfer in full ownership to the Client. MZA Tech Zone retains the right to display completed, publicly accessible project samples and case study summaries within its marketing portfolio unless a non-disclosure agreement (NDA) explicitly prohibits it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">4.</span> Search Engine & Ranking Disclaimers
          </h2>
          <p>
            While MZA Tech Zone uses proven, industry-standard, white-hat optimization methodologies, the Client acknowledges that third-party search engines (including Google, Bing, and Yahoo) operate proprietary algorithms that undergo continuous and unpredictable updates. MZA Tech Zone does not provide, nor does it imply, any guarantee of specific numerical ranking positions on third-party search engines.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">5.</span> Client Responsibilities
          </h2>
          <p>
            The Client agrees to provide necessary digital assets (logos, images, brand guidelines, and copy) and timely feedback required to ensure project milestones remain on schedule. Delays in supplying requested materials may result in milestone schedule adjustments.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">6.</span> Limitation of Liability
          </h2>
          <p>
            In no event shall MZA Tech Zone, its directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the website or service deliverables.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-800">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">7.</span> Inquiries and Legal Notices
          </h2>
          <p>
            For any inquiries regarding these Terms and Conditions, please contact:
          </p>
          <div className="p-4 rounded-xl bg-[#060a12] border border-slate-800 font-mono text-xs space-y-1">
            <div className="text-white font-bold">MZA Tech Zone</div>
            <div className="text-slate-400">Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 hover:underline">{COMPANY_INFO.email}</a></div>
            <div className="text-slate-400">Business Hours: {COMPANY_INFO.businessHours}</div>
          </div>
        </section>
      </div>
    </div>
  );
};
