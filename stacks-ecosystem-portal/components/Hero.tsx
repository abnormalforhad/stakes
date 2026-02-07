
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#2D2926] mb-6 tracking-tight">
          Stacks Snacks
        </h1>
        
        <p className="text-[17px] text-slate-500 mb-12 font-medium">
          Bite-sized weekly 'best-of' newsletter covering the Stacks Ecosystem.
        </p>

        <div className="max-w-md mx-auto relative group">
          <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-[#FF6B3D]/10 focus-within:border-[#FF6B3D] transition-all">
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-1 px-4 py-3 bg-transparent outline-none text-slate-800 placeholder:text-slate-400 font-medium"
            />
            <button className="px-6 py-3 rounded-lg font-bold btn-orange text-[15px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
