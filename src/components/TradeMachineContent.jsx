import { useState } from 'react'
import { Rocket, TrendingUp, X, Minus, Plus } from 'lucide-react'

export default function TradeMachineContent({ coins, setCoins }) {
  const [shares, setShares] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState(false)
  
  const STOCK_PRICE = 185.92
  const estimatedCost = (shares * STOCK_PRICE).toFixed(2)

  const handleTrade = () => {
    if (parseFloat(estimatedCost) <= coins) {
      setCoins(prev => parseFloat((prev - parseFloat(estimatedCost)).toFixed(2)))
      setShowSuccess(true)
      setError(false)
    } else {
      setError(true)
      setTimeout(() => setError(false), 800)
    }
  }

  return (
    <div className="flex flex-col gap-6 px-6 py-4 animate-fade_in pb-24">
      {/* ── Header ──────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white flex items-center gap-2">
            AAPL <span className="text-sm font-bold text-white/50 px-2 py-1 bg-white/10 rounded-lg">Apple Inc.</span>
          </h2>
          <div className="text-brand-green font-bold text-lg mt-1 flex items-center gap-1">
            ${STOCK_PRICE} <TrendingUp size={16} /> <span className="text-xs">+1.24% Today</span>
          </div>
        </div>
      </div>

      {/* ── SVG Line Chart ─────────────────────────────── */}
      <div className="clay-card p-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #0d1f4f 100%)' }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, #06D6A0 0%, transparent 70%)' }} />
        <p className="text-xs text-brand-green font-bold mb-2 uppercase tracking-wider relative z-10">1W Trend</p>
        <div className="h-32 w-full relative z-10">
          <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_0_8px_rgba(6,214,160,0.5)]">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06D6A0" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06D6A0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,40 L0,30 C10,28 20,35 30,25 C40,15 50,22 60,10 C70,-2 80,15 90,5 L100,0 L100,40 Z" fill="url(#chartGrad)" />
            <path d="M0,30 C10,28 20,35 30,25 C40,15 50,22 60,10 C70,-2 80,15 90,5 L100,0" fill="none" stroke="#06D6A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="100" cy="0" r="2" fill="#fff" className="animate-pulse" />
          </svg>
        </div>
      </div>

      {/* ── Share Stepper ──────────────────────────────── */}
      <div className="flex flex-col items-center mt-4">
        <p className="text-sm font-bold text-white/60 mb-3 uppercase tracking-wider">How many shares?</p>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setShares(s => Math.max(1, s - 1))}
            className="w-14 h-14 rounded-2xl flex items-center justify-center btn-clay bg-white/10 text-white border-white/20 active:scale-95 transition-transform">
            <Minus size={24} />
          </button>
          <div className="w-24 text-center text-5xl font-black text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #FFF, #A0A0A0)' }}>
            {shares}
          </div>
          <button 
            onClick={() => setShares(s => s + 1)}
            className="w-14 h-14 rounded-2xl flex items-center justify-center btn-clay" style={{ background: 'linear-gradient(135deg, #118AB2, #06D6A0)', color: '#141414' }}>
            <Plus size={24} />
          </button>
        </div>
      </div>

      {/* ── Estimated Cost & Action ────────────────────── */}
      <div className="mt-4 flex flex-col items-center">
        <div className="clay-card w-full p-4 flex flex-col items-center justify-center bg-black/20 border-brand-yellow/30">
          <span className="text-xs text-brand-yellow font-bold mb-1">Estimated Cost</span>
          <span className="text-2xl font-black text-white">${estimatedCost}</span>
        </div>

        <button 
          onClick={handleTrade}
          className={`mt-6 w-full py-4 rounded-full font-black text-lg text-[#141414] btn-clay flex items-center justify-center gap-2 transition-transform ${error ? 'animate-shake' : ''}`}
          style={{ background: 'linear-gradient(90deg, #FFD60A, #FF6B35)' }}>
          {error ? "NOT ENOUGH COINS" : "POW! TRADE NOW!"} {error ? '' : <Rocket size={20} className="animate-float" />}
        </button>
      </div>

      {/* ── Success Modal Overlay ──────────────────────── */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade_in" style={{ background: 'rgba(15,12,41,0.85)', backdropFilter: 'blur(8px)' }}>
          <div className="clay-card relative w-full max-w-sm p-8 flex flex-col items-center text-center animate-bounce_in" style={{ background: 'linear-gradient(135deg, #7B5EA7 0%, #FF6B9D 100%)' }}>
            <button 
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-white hover:bg-black/40 transition-colors">
              <X size={18} />
            </button>
            <div className="w-24 h-24 mb-6 rounded-3xl bg-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <Rocket size={48} className="text-white animate-launch" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">Trade Executed!</h3>
            <p className="text-white/90 text-sm mb-6 font-medium leading-relaxed">
              You just bought {shares} share{shares > 1 ? 's' : ''} of AAPL.<br/> To the moon! 🚀
            </p>
            <button 
              onClick={() => setShowSuccess(false)}
              className="w-full py-3 rounded-xl font-bold text-[#141414] bg-white hover:bg-white/90 transition-colors shadow-lg">
              Awesome
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
