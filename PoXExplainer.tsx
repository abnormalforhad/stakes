import React from 'react';

const PoXExplainer: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#FF6B3D] font-bold tracking-wider uppercase text-sm mb-3 block">
            Consensus Mechanism
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D2926] mb-6 tracking-tight">
            Proof of Transfer (PoX)
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Stacks leverages Bitcoin's security by recycling its energy. Miners spend BTC to mine STX, and that BTC is transferred to Stacks holders.
          </p>
        </div>

        {/* Interactive-looking Diagram */}
        <div className="grid md:grid-cols-2 gap-6 relative mb-16">
          
          {/* Miners Card */}
          <div className="group relative bg-[#FAFAFA] p-8 rounded-[2.5rem] border border-slate-100 hover:border-[#F7931A]/30 transition-all duration-300">
            <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-xl border border-slate-100">
              ⛏️
            </div>
            <h3 className="text-2xl font-bold text-[#2D2926] mb-2">Miners</h3>
            <p className="text-slate-400 font-medium mb-8">Secure the network</p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#F7931A]/10 flex items-center justify-center text-[#F7931A] font-bold text-xs">
                  BTC
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-400 uppercase">Action</div>
                  <div className="text-[#2D2926] font-semibold">Commit Bitcoin</div>
                </div>
              </div>
              <div className="flex justify-center text-slate-300">↓</div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#5546FF]/10 flex items-center justify-center text-[#5546FF] font-bold text-xs">
                  STX
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-400 uppercase">Reward</div>
                  <div className="text-[#2D2926] font-semibold">Earn New STX</div>
                </div>
              </div>
            </div>
          </div>

          {/* Exchange Icon (Absolute centered) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#2D2926] rounded-full items-center justify-center text-white z-10 shadow-xl border-[6px] border-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>

          {/* Stackers Card */}
          <div className="group relative bg-[#FAFAFA] p-8 rounded-[2.5rem] border border-slate-100 hover:border-[#5546FF]/30 transition-all duration-300">
            <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-xl border border-slate-100">
              🔒
            </div>
            <h3 className="text-2xl font-bold text-[#2D2926] mb-2">Stackers</h3>
            <p className="text-slate-400 font-medium mb-8">Support consensus</p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#5546FF]/10 flex items-center justify-center text-[#5546FF] font-bold text-xs">
                  STX
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-400 uppercase">Action</div>
                  <div className="text-[#2D2926] font-semibold">Lock Stacks</div>
                </div>
              </div>
              <div className="flex justify-center text-slate-300">↓</div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#F7931A]/10 flex items-center justify-center text-[#F7931A] font-bold text-xs">
                  BTC
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-400 uppercase">Reward</div>
                  <div className="text-[#2D2926] font-semibold">Earn Bitcoin</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats / CTA */}
        <div className="bg-[#2D2926] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B3D] opacity-10 blur-[80px] rounded-full -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-2">Ready to start Stacking?</h4>
              <p className="text-slate-400 font-medium">
                Join thousands of users earning Bitcoin yields on their STX.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-[#FF6B3D] hover:bg-[#E55A2B] rounded-xl font-bold transition-all shadow-lg shadow-[#FF6B3D]/20">
                Start Stacking
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoXExplainer;