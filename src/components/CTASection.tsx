import React from 'react';
import { Link } from '../router/RouterContext';
import { COMPANY_INFO } from '../data/siteData';
import { ArrowRight, Mail, Clock, Sparkles } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Ready to Grow Your Online Presence?',
  description = 'Partner with MZA Tech Zone to build a high-performance website, dominate search rankings, and convert local customers into loyal revenue.',
  buttonText = 'Start Your Project',
}) => {
  return (
    <section id="cta-section" className="py-20 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-indigo-600/15 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-[#0e1628] to-[#090d18] border border-cyan-500/20 rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
          {/* Subtle grid accent */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Let’s Build Something Exceptional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {description}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                id="cta-start-project-btn"
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                id="cta-email-inquiry-btn"
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>

            <div className="pt-6 flex items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80 mt-8">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Mon – Fri: 9:00 AM – 5:00 PM</span>
              </div>
              <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-700" />
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Free Initial Discovery & Proposal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
