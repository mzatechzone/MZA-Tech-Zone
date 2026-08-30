import React, { useState } from 'react';
import { useRouter } from '../router/RouterContext';
import { COMPANY_INFO, PORTFOLIO_PROJECTS } from '../data/siteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CTASection } from '../components/CTASection';
import { 
  BarChart3, 
  Filter, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Cpu, 
  TrendingUp 
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { openProjectModal } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web Development', 'SEO', 'Local SEO', 'Google Business Profile'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.categories.includes(selectedCategory));

  const seo = {
    title: 'Projects & Case Studies | MZA Tech Zone',
    description: 'Explore client case studies and verified growth results across custom web development, SEO campaigns, and Google Business Profile management by MZA Tech Zone.',
    canonicalUrl: `${COMPANY_INFO.websiteUrl}/projects`,
    h1: 'Featured Projects & Case Studies',
    schemaType: 'WebPage' as const,
    breadcrumbName: 'Projects',
  };

  const breadcrumbs = [{ name: 'Projects', url: '/projects' }];

  return (
    <div id="projects-portfolio-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <SEOHead seo={seo} breadcrumbs={breadcrumbs} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Header */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold">
          <BarChart3 className="w-4 h-4 text-cyan-400" />
          <span>Case Studies & Work Showcase</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-tight">
          Recent Projects & Strategic Case Studies
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Explore our recent web development, organic SEO, and Google Business Profile optimizations. Each case study details the technical challenge, strategic architecture, and trackable growth metrics.
        </p>
      </section>

      {/* Category Filter Controls */}
      <section className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <div className="flex items-center gap-2 mr-2 text-xs text-slate-400 font-semibold uppercase tracking-wider hidden sm:flex">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter By:</span>
        </div>
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              id={`filter-cat-${category.toLowerCase().replace(/\s+/g, '-')}`}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                isSelected
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-[#090e1a] text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          );
        })}
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="group bg-[#090e1a] border border-slate-800 hover:border-cyan-500/40 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/20 flex flex-col justify-between"
          >
            <div>
              {/* Image Banner */}
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#06080d]/85 backdrop-blur-md border border-white/10 text-cyan-400 text-[11px] font-semibold">
                  {project.category}
                </span>
                <span className="absolute bottom-3 right-3 text-[11px] font-medium text-slate-300 bg-slate-900/90 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-slate-800">
                  {project.industry}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                  {project.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Primary Metric Preview */}
                <div className="p-3.5 rounded-xl bg-[#060a12] border border-slate-800/90 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    {project.trackableMetrics[0]?.label || 'Key Indicator'}
                  </div>
                  <div className="text-sm font-extrabold text-cyan-400 font-display">
                    {project.trackableMetrics[0]?.value}
                  </div>
                </div>

                {/* Services Provided Badges */}
                <div className="pt-1 flex flex-wrap gap-1.5">
                  {project.servicesProvided.slice(0, 3).map((srv, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-6 sm:p-7 pt-0">
              <button
                type="button"
                onClick={() => openProjectModal(project.id)}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/30 text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-all flex items-center justify-center gap-2"
              >
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Build Your Success Story?"
        description="Let’s discuss your current website architecture, keyword opportunities, or local Google Maps visibility."
        buttonText="Discuss Your Project"
      />
    </div>
  );
};
