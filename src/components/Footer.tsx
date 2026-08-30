import React from 'react';
import { Link } from '../router/RouterContext';
import { COMPANY_INFO } from '../data/siteData';
import { BrandLogo } from './BrandLogo';
import { Mail, Clock, Shield, FileText, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#04060a] border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800/70">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center group">
              <BrandLogo size="md" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional digital growth partner specializing in custom web development, search engine optimization, and Google Business Profile management.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Accepting New Client Projects</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  id="footer-link-home"
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link-services"
                  to="/services"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link-projects"
                  to="/projects"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link-about"
                  to="/about"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link-contact"
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  id="footer-link-web-dev"
                  to="/services/web-development"
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center justify-between group"
                >
                  <span>Web Development</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link-seo"
                  to="/services/seo"
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center justify-between group"
                >
                  <span>SEO Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link-gbp"
                  to="/services/google-business-profile"
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center justify-between group"
                >
                  <span>Google Business Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <a
                id="footer-email-link"
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/30">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="break-all font-mono text-xs">{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-medium text-xs">Monday to Friday</div>
                  <div className="text-xs text-slate-400">9:00 AM – 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 MZA Tech Zone. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              id="footer-link-privacy"
              to="/privacy-policy"
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1"
            >
              <Shield className="w-3 h-3" />
              <span>Privacy Policy</span>
            </Link>
            <Link
              id="footer-link-terms"
              to="/terms-and-conditions"
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              <span>Terms and Conditions</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
