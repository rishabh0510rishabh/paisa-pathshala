import React, { useState } from 'react';
import { PlayCircle, Coins, CheckCircle, ChevronDown } from 'lucide-react';

const REELS_DATA = [
  {
    id: 1,
    title: "What is a Bull Market?",
    points: [
      "Prices are rising or expected to rise.",
      "Investors have high confidence.",
      "Economy is usually strong and growing."
    ],
    bg: "#118AB2, #06D6A0", /* green/blue gradient */
    emoji: "🐂"
  },
  {
    id: 2,
    title: "What is a Bear Market?",
    points: [
      "Prices are falling 20% or more.",
      "Pessimism and fear among investors.",
      "Economy might be slowing down."
    ],
    bg: "#FF6B35, #FF8C61", /* orange gradient */
    emoji: "🐻"
  },
  {
    id: 3,
    title: "The Power of SIPs",
    points: [
      "Invest fixed amounts regularly.",
      "Benefit from Rupee Cost Averaging.",
      "Takes the emotion out of investing."
    ],
    bg: "#7B5EA7, #FF6B9D", /* purple/pink gradient */
    emoji: "💰"
  },
  {
    id: 4,
    title: "Blue-Chip Stocks",
    points: [
      "Shares of large, well-established companies.",
      "Financially sound and historically stable.",
      "Often pay consistent dividends."
    ],
    bg: "#FFD60A, #FF6B35", /* yellow/orange gradient */
    emoji: "🏢"
  }
];

export default function TradeReelsContent({ coins, setCoins }) {
  const [claimed, setClaimed] = useState({});
  const [messages, setMessages] = useState({});

  const handleClaim = (id) => {
    if (claimed[id]) return;
    
    // Add 5 coins
    setCoins(prev => prev + 5);
    
    // Set claimed and show message
    setClaimed(prev => ({ ...prev, [id]: true }));
    setMessages(prev => ({ ...prev, [id]: "Success!" }));
    
    // Hide message after 2 seconds
    setTimeout(() => {
      setMessages(prev => ({ ...prev, [id]: null }));
    }, 2000);
  };

  return (
    <div className="h-[calc(100vh-130px)] w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar pb-20">
      {REELS_DATA.map((reel, index) => (
        <div 
          key={reel.id} 
          className="h-full w-full snap-start snap-always flex flex-col justify-center items-center px-4 relative"
        >
          {/* Main Card */}
          <div 
            className="clay-card w-full max-w-sm p-6 flex flex-col items-center justify-between mx-auto"
            style={{ 
              minHeight: '420px', 
              background: `linear-gradient(135deg, ${reel.bg})` 
            }}
          >
            {/* Reel Header */}
            <div className="text-6xl mb-6 animate-float">{reel.emoji}</div>
            
            <h2 className="text-2xl font-black text-white text-center mb-6 leading-tight drop-shadow-md">
              {reel.title}
            </h2>
            
            {/* Learning Points */}
            <ul className="text-white/95 text-sm space-y-4 mb-8 w-full">
              {reel.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 bg-black/15 p-3.5 rounded-xl shadow-inner backdrop-blur-sm">
                  <span className="text-[#FFD60A] shrink-0 mt-0.5"><CheckCircle size={18} /></span>
                  <span className="font-semibold leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            {/* Claim Button */}
            <button
              onClick={() => handleClaim(reel.id)}
              disabled={claimed[reel.id]}
              className={`btn-clay w-full py-3.5 justify-center text-[15px] transition-all duration-300 ${
                claimed[reel.id] 
                  ? 'bg-black/20 text-white/50 border-white/10 cursor-not-allowed shadow-none transform-none' 
                  : 'text-[#141414] hover:scale-[1.02]'
              }`}
              style={!claimed[reel.id] ? { background: 'linear-gradient(90deg,#FFD60A,#FF6B35)' } : {}}
            >
              {messages[reel.id] ? (
                <span className="font-black flex items-center gap-2 drop-shadow-sm"><CheckCircle size={20} /> Success!</span>
              ) : claimed[reel.id] ? (
                <span className="font-bold flex items-center gap-2">Claimed <Coins size={16} /></span>
              ) : (
                <span className="font-black flex items-center gap-2 drop-shadow-sm"><Coins size={20} /> Claim 5 Coins</span>
              )}
            </button>
          </div>
          
          {/* Swipe Indicator */}
          {index < REELS_DATA.length - 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 animate-bounce flex flex-col items-center gap-1">
              <span className="text-xs font-bold tracking-widest uppercase">Swipe</span>
              <ChevronDown size={28} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
