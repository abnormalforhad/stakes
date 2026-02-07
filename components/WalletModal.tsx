
import React from 'react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (wallet: string) => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-8 animate-in fade-in zoom-in duration-300">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Connect Wallet</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
          >
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-slate-500 text-sm mb-8 leading-relaxed">
          Select your preferred Bitcoin wallet to interact with Stacks decentralized applications.
        </p>

        <div className="space-y-3">
          {[
            { id: 'leather', name: 'Leather', icon: 'L', color: 'bg-orange-500' },
            { id: 'xverse', name: 'Xverse', icon: 'X', color: 'bg-indigo-600' },
            { id: 'okx', name: 'OKX Wallet', icon: 'O', color: 'bg-black' }
          ].map(wallet => (
            <button
              key={wallet.id}
              onClick={() => onSelect(wallet.id)}
              className="w-full flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl ${wallet.color} flex items-center justify-center text-white font-bold`}>
                  {wallet.icon}
                </div>
                <span className="font-bold text-slate-800">{wallet.name}</span>
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">Connect</span>
            </button>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-50 text-center">
          <p className="text-xs text-slate-400">
            By connecting, you agree to our <span className="underline cursor-pointer">Terms</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
