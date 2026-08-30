import React from 'react';
import { Link } from '../router/RouterContext';
import { COMPANY_INFO } from '../data/siteData';
import { SEOHead } from '../components/SEOHead';
import { ArrowLeft, Home, Layers, Mail, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const seo = {
    title: 'Page Not Found (404) | MZA Tech Zone',
    description: 'The requested page could not be found. Return to the MZA Tech Zone homepage or explore our services.',
    canonicalUrl: `${COMPANY_INFO.websiteUrl}/404`,
    h1: 'Page Not Found',
    schemaType: 'WebPage' as const,
    noIndex: true,
  };

  return (
    <div id="not-found-page" className="min-h-[70vh] flex items-center justify-center max-w-4xl mx-auto px-4 py-16 text-center">
      <SEOHead seo={seo} />

      <div className="p-8 sm:p-14 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-8 max-w-2xl mx-auto shadow-2xl">
        <div className="space-y-3">
          <span className="font-mono text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            404
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Explore Services</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
