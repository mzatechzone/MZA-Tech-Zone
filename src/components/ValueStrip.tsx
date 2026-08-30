import React from 'react';
import { VALUE_POINTS } from '../data/siteData';
import { Code2, TrendingUp, MapPin, Target } from 'lucide-react';

export const ValueStrip: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Code2,
    TrendingUp,
    MapPin,
    Target,
  };

  return (
    <section id="trust-value-strip" className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0b101c]/90 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-6 lg:p-8 shadow-2xl shadow-black/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
          {VALUE_POINTS.map((point, index) => {
            const Icon = iconMap[point.icon] || Target;
            return (
              <div
                key={point.title}
                className={`flex items-start gap-4 ${index !== 0 ? 'pt-5 sm:pt-0 sm:pl-6 lg:pl-8' : ''}`}
              >
                <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
