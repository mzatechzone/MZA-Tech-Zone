import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../router/RouterContext';
import { COMPANY_INFO } from '../data/siteData';
import { BrandLogo } from './BrandLogo';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Code2, 
  TrendingUp, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, isActive } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [currentPath]);

  const serviceLinks = [
    {
      name: 'Web Development',
      to: '/services/web-development',
      icon: Code2,
      desc: 'High-speed, responsive & conversion-ready sites',
      badge: 'Custom UI/UX',
    },
    {
      name: 'SEO Services',
      to: '/services/seo',
      icon: TrendingUp,
      desc: 'Data-driven search visibility & organic growth',
      badge: 'On-Page & Tech',
    },
    {
      name: 'Google Business Profile',
      to: '/services/google-business-profile',
      icon: MapPin,
      desc: 'Local search engine dominance & Google Maps',
      badge: 'Local Pack',
    },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06080d]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/50'
          : 'bg-[#06080d]/70 backdrop-blur-md border-b border-white/[0.05]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            id="brand-logo"
            to="/"
            className="focus:outline-none"
            title="MZA Tech Zone Home"
          >
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              id="nav-home"
              to="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/', true)
                  ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="inline-flex items-stretch h-9">
                <Link
                  id="nav-services-main"
                  to="/services"
                  className={`inline-flex items-center px-3.5 rounded-l-lg text-sm font-medium transition-all duration-200 ${
                    isActive('/services')
                      ? 'text-cyan-400 bg-cyan-950/40 border-l border-t border-b border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  Services
                </Link>
                <button
                  id="nav-services-toggle"
                  type="button"
                  aria-expanded={servicesDropdownOpen}
                  aria-label="Toggle Services Dropdown"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`inline-flex items-center justify-center px-2 rounded-r-lg text-sm font-medium transition-all duration-200 ${
                    isActive('/services')
                      ? 'text-cyan-400 bg-cyan-950/40 border-r border-t border-b border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div 
                  id="services-dropdown-menu"
                  className="absolute top-full left-0 w-84 pt-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                >
                  <div className="p-3 bg-[#0d1322] border border-slate-800/90 rounded-2xl shadow-2xl shadow-black/80 backdrop-blur-2xl">
                    <div className="px-3 py-2 mb-1 border-b border-slate-800/60 flex items-center justify-between">
                      <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                        Primary Capabilities
                      </span>
                      <Link
                        to="/services"
                        className="text-[11px] font-medium text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        Overview <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {serviceLinks.map((service) => {
                        const Icon = service.icon;
                        const active = isActive(service.to, true);
                        return (
                          <Link
                            key={service.to}
                            to={service.to}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                              active
                                ? 'bg-cyan-950/50 border border-cyan-500/30 text-white'
                                : 'hover:bg-slate-800/50 text-slate-300 hover:text-white border border-transparent'
                            }`}
                          >
                            <div className={`p-2 rounded-lg shrink-0 ${active ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-cyan-400'}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-white truncate">
                                  {service.name}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 truncate mt-0.5">
                                {service.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              id="nav-projects"
              to="/projects"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/projects')
                  ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Projects
            </Link>

            <Link
              id="nav-about"
              to="/about"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/about')
                  ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              About
            </Link>

            <Link
              id="nav-contact"
              to="/contact"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/contact')
                  ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              id="header-cta-button"
              to="/contact"
              className="relative group inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
            >
              Get Started
            </Link>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer-nav"
          className="md:hidden border-b border-slate-800 bg-[#080c14]/98 backdrop-blur-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-1.5">
            <Link
              id="mob-nav-home"
              to="/"
              className={`block px-4 py-3 rounded-xl text-base font-medium ${
                isActive('/', true)
                  ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 font-semibold'
                  : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Home
            </Link>

            <div className="py-1">
              <Link
                id="mob-nav-services"
                to="/services"
                className={`block px-4 py-3 rounded-xl text-base font-medium ${
                  isActive('/services')
                    ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 font-semibold'
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                Services Overview
              </Link>
              
              <div className="pl-4 pr-2 mt-1.5 space-y-1 border-l-2 border-slate-800 ml-4">
                <Link
                  id="mob-nav-service-web"
                  to="/services/web-development"
                  className={`flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm ${
                    isActive('/services/web-development', true)
                      ? 'text-cyan-400 bg-cyan-950/30 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  Web Development
                </Link>
                <Link
                  id="mob-nav-service-seo"
                  to="/services/seo"
                  className={`flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm ${
                    isActive('/services/seo', true)
                      ? 'text-cyan-400 bg-cyan-950/30 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  SEO Services
                </Link>
                <Link
                  id="mob-nav-service-gbp"
                  to="/services/google-business-profile"
                  className={`flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm ${
                    isActive('/services/google-business-profile', true)
                      ? 'text-cyan-400 bg-cyan-950/30 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-blue-400" />
                  Google Business Profile
                </Link>
              </div>
            </div>

            <Link
              id="mob-nav-projects"
              to="/projects"
              className={`block px-4 py-3 rounded-xl text-base font-medium ${
                isActive('/projects')
                  ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 font-semibold'
                  : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Projects
            </Link>

            <Link
              id="mob-nav-about"
              to="/about"
              className={`block px-4 py-3 rounded-xl text-base font-medium ${
                isActive('/about')
                  ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 font-semibold'
                  : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              About
            </Link>

            <Link
              id="mob-nav-contact"
              to="/contact"
              className={`block px-4 py-3 rounded-xl text-base font-medium ${
                isActive('/contact')
                  ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 font-semibold'
                  : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <Link
              id="mob-nav-cta-btn"
              to="/contact"
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-lg shadow-cyan-500/20"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-1">
              <span>{COMPANY_INFO.email}</span>
              <span>Mon - Fri, 9am - 5pm</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
