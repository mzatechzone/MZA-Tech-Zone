import React, { useState } from 'react';
import { Zap, TrendingUp, MapPin, Target, BarChart2, Activity, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface MetricDataset {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  headline: string;
  subtext: string;
  kpiMain: string;
  kpiLabel: string;
  kpiSecondary: string;
  kpiSecondaryLabel: string;
  chartType: 'line' | 'bars';
  datapoints: { month: string; before: number; after: number; label: string }[];
  focusAreas: string[];
}

export const GrowthChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('performance');

  const datasets: Record<string, MetricDataset> = {
    performance: {
      id: 'performance',
      name: 'Website Performance',
      category: 'Core Web Vitals',
      icon: Zap,
      headline: 'Sub-Second Load Times & 95+ Core Web Vitals',
      subtext: 'Optimized asset pipelines, clean semantic code, and minimal script bloat reduce bounce rates and maximize user conversion.',
      kpiMain: '< 0.9s',
      kpiLabel: 'Average First Contentful Paint',
      kpiSecondary: '98/100',
      kpiSecondaryLabel: 'Lighthouse Performance Score',
      chartType: 'line',
      datapoints: [
        { month: 'Month 1', before: 35, after: 72, label: 'Initial Optimization' },
        { month: 'Month 2', before: 38, after: 86, label: 'Asset Compression' },
        { month: 'Month 3', before: 40, after: 94, label: 'Core Vitals Fine-Tuning' },
        { month: 'Month 4', before: 42, after: 97, label: 'Full Edge Caching' },
        { month: 'Month 5', before: 41, after: 98, label: 'Sustained Peak Speed' },
      ],
      focusAreas: [
        'Largest Contentful Paint (LCP) under 1.2s',
        'Cumulative Layout Shift (CLS) score < 0.05',
        'Zero render-blocking unnecessary scripts',
      ],
    },
    visibility: {
      id: 'visibility',
      name: 'Organic Visibility',
      category: 'Search Engine Optimization',
      icon: TrendingUp,
      headline: 'Compounding Search Impressions & High-Intent Queries',
      subtext: 'Targeted keyword intent mapping and technical schema infrastructure systematically build topical authority on Google Search.',
      kpiMain: '+165%',
      kpiLabel: 'Targeted Search Impressions Growth',
      kpiSecondary: 'Top 3',
      kpiSecondaryLabel: 'Primary Commercial Terms Target',
      chartType: 'line',
      datapoints: [
        { month: 'Month 1', before: 20, after: 32, label: 'Technical Audit & Fixes' },
        { month: 'Month 2', before: 22, after: 55, label: 'On-Page Optimization' },
        { month: 'Month 3', before: 24, after: 88, label: 'Content Clusters Live' },
        { month: 'Month 4', before: 25, after: 124, label: 'Search Console Growth' },
        { month: 'Month 5', before: 26, after: 165, label: 'Compounding Inbound Traffic' },
      ],
      focusAreas: [
        'Commercial search intent optimization',
        'Structured Schema.org data for rich snippets',
        'Regular indexing & Search Console monitoring',
      ],
    },
    local: {
      id: 'local',
      name: 'Local Search Presence',
      category: 'Google Business Profile',
      icon: MapPin,
      headline: 'Dominating Local Maps & Local 3-Pack Discovery',
      subtext: 'Synchronized NAP signals, service category precision, and active Google updates expand your business map radius.',
      kpiMain: '+210%',
      kpiLabel: 'Local Discovery Interactions',
      kpiSecondary: '88%',
      kpiSecondaryLabel: 'Direct Phone Call Action Rate',
      chartType: 'bars',
      datapoints: [
        { month: 'Month 1', before: 25, after: 48, label: 'Profile Verification & Setup' },
        { month: 'Month 2', before: 28, after: 90, label: 'Service Menu & Photos' },
        { month: 'Month 3', before: 30, after: 140, label: 'Review Acquisition Flow' },
        { month: 'Month 4', before: 32, after: 180, label: 'Weekly Google Updates' },
        { month: 'Month 5', before: 33, after: 210, label: 'Local Map Dominance' },
      ],
      focusAreas: [
        'Optimized primary & secondary category selections',
        'Direct review collection workflows',
        'Consistent NAP citations across web ecosystem',
      ],
    },
    leads: {
      id: 'leads',
      name: 'Lead Generation',
      category: 'Conversion Optimization',
      icon: Target,
      headline: 'Turning Passive Visitors into Qualified Inquiries',
      subtext: 'Frictionless multi-step forms, clear value propositions, and mobile click-to-call buttons maximize inquiry conversion.',
      kpiMain: '3.8x',
      kpiLabel: 'Average Inquiry Rate Multiplier',
      kpiSecondary: '< 24hr',
      kpiSecondaryLabel: 'Target Inquiry Response Window',
      chartType: 'bars',
      datapoints: [
        { month: 'Month 1', before: 15, after: 30, label: 'Frictionless Forms Deployed' },
        { month: 'Month 2', before: 18, after: 52, label: 'Trust Signals & Proof Added' },
        { month: 'Month 3', before: 20, after: 78, label: 'Mobile Tap-to-Call Optimized' },
        { month: 'Month 4', before: 21, after: 98, label: 'Funnel Friction Removed' },
        { month: 'Month 5', before: 22, after: 120, label: 'Consistent Qualified Leads' },
      ],
      focusAreas: [
        'Tactile mobile phone & email click triggers',
        'Clear service pricing and scope clarity',
        'Immediate confirmation and inquiry validation',
      ],
    },
  };

  const current = datasets[activeTab] || datasets.performance;

  return (
    <div id="growth-metrics-visualizer" className="bg-[#0b101e]/90 border border-slate-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80">
      {/* Metric Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-slate-800/80">
        {Object.values(datasets).map((ds) => {
          const Icon = ds.icon;
          const isSelected = ds.id === activeTab;
          return (
            <button
              key={ds.id}
              type="button"
              onClick={() => setActiveTab(ds.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                isSelected
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
              <span>{ds.name}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: KPI Indicators & Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              <Activity className="w-3.5 h-3.5" />
              <span>{current.category}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug">
              {current.headline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {current.subtext}
            </p>
          </div>

          {/* KPI Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#070b14] border border-cyan-500/20 shadow-inner">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-display">
                {current.kpiMain}
              </div>
              <div className="text-[11px] font-medium text-slate-400 mt-1">
                {current.kpiLabel}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#070b14] border border-slate-800 shadow-inner">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {current.kpiSecondary}
              </div>
              <div className="text-[11px] font-medium text-slate-400 mt-1">
                {current.kpiSecondaryLabel}
              </div>
            </div>
          </div>

          {/* Focus Points */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Optimization Focus Areas:
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {current.focusAreas.map((area, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Visual Chart Graphic */}
        <div className="lg:col-span-7 bg-[#070b14] border border-slate-800 rounded-2xl p-5 sm:p-6">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 text-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                <span>Baseline Starting Point</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                <span>Optimized Growth Trajectory</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-500 font-mono">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Measurable Trajectory</span>
            </div>
          </div>

          {/* Interactive Chart Visualizer */}
          <div className="space-y-4 pt-2">
            {current.datapoints.map((dp, idx) => {
              const maxVal = Math.max(...current.datapoints.map((d) => d.after));
              const afterWidth = Math.min(100, Math.round((dp.after / maxVal) * 100));
              const beforeWidth = Math.min(100, Math.round((dp.before / maxVal) * 100));

              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300">{dp.month}</span>
                    <span className="text-[11px] text-slate-400">{dp.label}</span>
                  </div>

                  <div className="relative h-6 bg-slate-900 rounded-lg overflow-hidden border border-slate-800/80 flex items-center px-2">
                    {/* Baseline bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 bg-slate-800 transition-all duration-500 rounded-l-lg"
                      style={{ width: `${beforeWidth}%` }}
                    />
                    {/* Growth bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-90 transition-all duration-700 rounded-lg shadow-sm"
                      style={{ width: `${afterWidth}%` }}
                    />

                    {/* Progress indicator text */}
                    <span className="relative z-10 text-[11px] font-mono font-bold text-white pl-1 drop-shadow">
                      {dp.after}{activeTab === 'performance' ? ' pts' : activeTab === 'visibility' ? ' index' : '%'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>*Illustrative representation of key digital marketing performance targets.</span>
            <span className="text-cyan-400 font-medium">Continuous Monthly Optimization</span>
          </div>
        </div>
      </div>
    </div>
  );
};
