
import React, { useState } from 'react';
import { ECOSYSTEM_APPS } from '../constants';

const EcosystemGrid: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'DeFi', 'NFTs', 'Wallet', 'Infrastructure'];

  const filteredApps = filter === 'All' 
    ? ECOSYSTEM_APPS 
    : ECOSYSTEM_APPS.filter(app => app.category === filter);

  return (
    <section id="ecosystem" className="py-20 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Explore Ecosystem</h2>
            <p className="text-slate-600">The most highlighted applications building on Bitcoin.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map(app => (
            <a 
              key={app.id} 
              href={app.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                </div>
                {app.featured && (
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {app.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {app.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 px-3 py-1 bg-slate-50 rounded-lg">
                  {app.category}
                </span>
                <span className="text-indigo-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Launch App
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemGrid;
