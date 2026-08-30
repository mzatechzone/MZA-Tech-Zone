import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const seo = {
    title: 'Privacy Policy | MZA Tech Zone',
    description: 'Read the privacy policy for MZA Tech Zone. Learn how we handle client data, cookies, analytics, and personal information with utmost care.',
    canonicalUrl: `${COMPANY_INFO.websiteUrl}/privacy-policy`,
    h1: 'Privacy Policy',
    schemaType: 'WebPage' as const,
    breadcrumbName: 'Privacy Policy',
  };

  const breadcrumbs = [{ name: 'Privacy Policy', url: '/privacy-policy' }];

  return (
    <div id="privacy-policy-page" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SEOHead seo={seo} breadcrumbs={breadcrumbs} />

      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Data Governance & Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Last Updated: January 1, 2025 • Effective Date: January 1, 2025
        </p>
      </div>

      <div className="bg-[#090e1a]/90 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">1.</span> Introduction
          </h2>
          <p>
            MZA Tech Zone ("we", "our", or "us") is dedicated to protecting your personal information and your right to privacy. This Privacy Policy governs our privacy practices and explains how we collect, use, disclose, and safeguard your information when you visit our website at <span className="text-cyan-300 font-mono text-xs">{COMPANY_INFO.websiteUrl}</span> or engage our web development, SEO, and Google Business Profile management services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">2.</span> Information We Collect
          </h2>
          <p>
            We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, or when contacting us directly.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-xs sm:text-sm">
            <li><strong className="text-slate-200">Contact Data:</strong> Name, business email address ({COMPANY_INFO.email}), phone number, company name, and project requirements.</li>
            <li><strong className="text-slate-200">Technical Analytics:</strong> Device identifiers, browser type, operating system, IP address, page response times, and general geographic location data collected via standard web analytics tools.</li>
            <li><strong className="text-slate-200">Project Assets:</strong> Access credentials or diagnostic reports provided willingly for the sole purpose of technical audits and service fulfillment.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">3.</span> How We Use Your Information
          </h2>
          <p>
            We use personal information collected via our website for a variety of legitimate business purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-xs sm:text-sm">
            <li>To respond to user inquiries and deliver technical proposals or audits.</li>
            <li>To execute agreed-upon web development, SEO optimization, and Google Business Profile management deliverables.</li>
            <li>To analyze website traffic, diagnose server issues, and enhance site speed and usability.</li>
            <li>To comply with applicable legal obligations and enforce our terms of service.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">4.</span> Cookies and Tracking Technologies
          </h2>
          <p>
            We may use cookies, web beacons, and tracking pixels to customize your browsing experience, measure site performance, and monitor referral sources. You can configure your browser settings to decline cookies; however, some site functionalities may become temporarily unavailable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">5.</span> Data Security & Retention
          </h2>
          <p>
            We maintain strict technical and organizational security measures designed to protect the security of any personal information we process. While we strive to use commercially acceptable means to safeguard your personal data, no internet transmission is ever completely immune to vulnerabilities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">6.</span> Third-Party Disclosures
          </h2>
          <p>
            We do not sell, rent, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third-party service providers who assist us in operating our website and conducting our business, provided those parties agree to keep this information strictly confidential.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-800">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <span className="text-cyan-400">7.</span> Contacting Us
          </h2>
          <p>
            If you have questions or comments about this Privacy Policy or our privacy practices, please contact us at:
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
