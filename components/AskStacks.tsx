
import React, { useState, useRef, useEffect } from 'react';
import { askStacksAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';

const AskStacks: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Welcome to Stacks Expert Research. Ask me a deep protocol question about Bitcoin Layer 2s, Clarity, or the Nakamoto upgrade." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askStacksAssistant(messages, userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response || "Research timeout. Please try again." }]);
    setIsLoading(false);
  };

  return (
    <section id="ask" className="py-24 px-6 bg-white border-y border-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-extrabold text-[#2D2926] mb-4">Deep Research</h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Powered by Gemini 3 Pro, our research agent helps you understand the technical nuances of building on Bitcoin.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#FF6B3D]"></span>
                Protocol Expert Enabled
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-400">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Clarity Language Reference
              </div>
            </div>
          </div>

          <div className="md:w-2/3 bg-[#F9FAFB] rounded-[2rem] border border-slate-100 overflow-hidden flex flex-col h-[550px] shadow-sm">
            <div className="flex-1 overflow-y-auto p-8 space-y-6 chat-scroll">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-[1.5rem] text-[15px] leading-[1.6] ${
                    msg.role === 'user' 
                      ? 'bg-[#2D2926] text-white rounded-br-none' 
                      : 'bg-white text-slate-700 border border-slate-100 shadow-sm rounded-bl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#FF6B3D] rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#FF6B3D] rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-[#FF6B3D] rounded-full animate-bounce [animation-delay:-.5s]"></div>
                    <span className="text-xs font-bold text-slate-400 ml-2">Researcher is thinking...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-white border-t border-slate-100">
              <div className="flex items-center gap-3">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a deep protocol question..."
                  className="flex-1 bg-transparent px-4 py-3 text-sm font-medium focus:outline-none"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="w-11 h-11 rounded-xl bg-[#2D2926] text-white flex items-center justify-center hover:bg-black disabled:opacity-20 transition-all shadow-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskStacks;
