
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import EcosystemGrid from './components/EcosystemGrid';
import AskStacks from './components/AskStacks';
import WalletModal from './components/WalletModal';

const App: React.FC = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleConnect = () => {
    if (isConnected) {
      setIsConnected(false);
      setWalletAddress(null);
    } else {
      setIsWalletModalOpen(true);
    }
  };

  const selectWallet = (id: string) => {
    setIsConnected(true);
    setWalletAddress('SP3K8QEB7V6YY97EAZ15V94M7C89K3EA15R1M1M1M');
    setIsWalletModalOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-[#FF6B3D]/10 selection:text-[#FF6B3D]">
      <Header 
        onConnect={handleConnect} 
        isConnected={isConnected} 
        address={walletAddress} 
      />
      
      <main>
        <Hero />
        
        <div className="max-w-7xl mx-auto px-6">
          <StatsSection />
        </div>
        
        <EcosystemGrid />
        
        <AskStacks />

        <section className="py-32 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#2D2926] mb-6">Build on the future of Bitcoin.</h2>
            <p className="text-slate-500 mb-10 text-lg">
              Unlock $1T+ in dormant capital. Start building smart contracts secured by the most decentralized network on earth.
            </p>
            <button className="px-10 py-4 rounded-xl font-bold btn-orange text-lg shadow-lg shadow-[#FF6B3D]/20">
              Developer Docs
            </button>
          </div>
        </section>

        <footer className="py-12 px-6 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                 <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" strokeLinecap="round"/>
              </svg>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Stacks Foundation</span>
            </div>
            
            <nav className="flex gap-8 text-sm font-medium text-slate-400">
              <a href="https://x.com/stacks" target="_blank" className="hover:text-[#FF6B3D] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[#FF6B3D] transition-colors">Discord</a>
              <a href="#" className="hover:text-[#FF6B3D] transition-colors">Github</a>
              <a href="#" className="hover:text-[#FF6B3D] transition-colors">Careers</a>
            </nav>
            
            <p className="text-xs font-bold text-slate-300">© 2024 STACKS SNACKS</p>
          </div>
        </footer>
      </main>

      <WalletModal 
        isOpen={isWalletModalOpen} 
        onClose={() => setIsWalletModalOpen(false)} 
        onSelect={selectWallet}
      />
    </div>
  );
};

export default App;
