import React, { useEffect } from 'react';
import { ProjectCaseStudy } from '../types';
import { useRouter, Link } from '../router/RouterContext';
import { 
  X, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  ExternalLink,
  Sparkles 
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { navigate } = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-case-study-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#090e1a] border border-slate-700/80 rounded-3xl shadow-2xl shadow-black overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-800 bg-[#070b14]/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Industry: <span className="text-white">{project.industry}</span>
            </span>
          </div>

          <button
            id="close-project-modal-btn"
            type="button"
            onClick={onClose}
            aria-label="Close case study details"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-200">
          {/* Banner Image & Hero Title */}
          <div className="space-y-4">
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                  Case Study Breakdown
                </div>
                <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {project.title}
                </h2>
              </div>
            </div>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              {project.shortDescription}
            </p>
          </div>

          {/* Trackable Metrics Grid */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>Trackable Growth Indicators</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.trackableMetrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#060a12] border border-cyan-500/20 shadow-inner">
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-display">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-white mt-1">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Structured Deep Dive: Challenge, Strategy, Solution */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#070b14] border border-slate-800/80 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                01. The Challenge
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070b14] border border-slate-800/80 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                02. Strategy & Architecture
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.strategy}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070b14] border border-slate-800/80 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                03. Technical Solution
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Services & Technology Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-[#070b14] border border-slate-800 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Services Provided</span>
              </div>
              <ul className="space-y-2">
                {project.servicesProvided.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#070b14] border border-slate-800 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>Technologies & Frameworks</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologyUsed.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Bottom CTA */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">
                Interested in similar results for your business?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Let’s analyze your current presence and build a custom execution plan.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                navigate('/contact');
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
