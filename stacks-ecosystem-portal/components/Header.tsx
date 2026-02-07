
import React from 'react';

interface HeaderProps {
  onConnect: () => void;
  isConnected: boolean;
  address: string | null;
}

const Header: React.FC<HeaderProps> = ({ onConnect, isConnected, address }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
             <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" strokeLinecap="round"/>
          </svg>
          <span className="text-xl font-extrabold tracking-tight text-[#2D2926]">Stacks</span>
        </div>
        
        {/* Center: Resources / Archive */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group cursor-pointer flex items-center gap-1 text-[14px] font-medium text-slate-600 hover:text-black transition-colors">
            Resources
            <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <a href="#" className="text-[14px] font-medium text-slate-600 hover:text-black transition-colors">Archive</a>
        </nav>

        {/* Right: Auth / Wallet */}
        <div className="flex items-center gap-6">
          <button 
            onClick={onConnect}
            className="text-[14px] font-medium text-slate-600 hover:text-black transition-colors"
          >
            {isConnected ? (address?.slice(0,6) + '...') : 'Login'}
          </button>
          <button 
            onClick={onConnect}
            className="px-5 py-2 rounded-lg text-[14px] font-bold btn-orange"
          >
            {isConnected ? 'Disconnect' : 'Sign Up'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
