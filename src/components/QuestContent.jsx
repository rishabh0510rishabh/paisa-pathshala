import { useState } from 'react'
import { Trophy, Star, ChevronRight, Zap, Target, CheckCircle2, XCircle } from 'lucide-react'
import arjunAvatar from '../assets/arjun.png'
import priyaAvatar from '../assets/priya.png'

export default function QuestContent({ coins, setCoins }) {
  const [showGstModal, setShowGstModal] = useState(false)
  const [gstResult, setGstResult] = useState(null) // 'success' | 'fail' | null

  const handleGstAnswer = (answer) => {
    if (answer === '18%') {
      setGstResult('success')
      setCoins(c => c + 50)
    } else {
      setGstResult('fail')
    }
  }

  const closeGstModal = () => {
    setShowGstModal(false)
    setGstResult(null)
  }

  return (
    <div className="pb-6 overflow-y-auto no-scrollbar animate-pop_in">
      
      {/* ── User Profile Card ──────────────────────── */}
      <section className="relative overflow-hidden mx-4 mt-4 rounded-3xl p-6 clay-card flex flex-col items-center"
        style={{ background: 'linear-gradient(135deg, #1a0533 0%, #0d1f4f 50%, #001a3a 100%)' }}>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full opacity-20 blur-3xl bg-brand-pink" />
        <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-20 blur-3xl bg-brand-blue" />
        
        <div className="relative w-24 h-24 mb-4">
          <div className="absolute inset-0 rounded-full bg-brand-yellow blur-md opacity-40 animate-pulse_glow" />
          <img 
            src={arjunAvatar} 
            alt="Arjun Sharma Avatar" 
            className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-clay"
          />
          <div className="absolute -bottom-2 -right-2 bg-brand-yellow text-[#141414] text-xs font-black px-2 py-1 rounded-full border-2 border-[#141414]">
            Lvl 8
          </div>
        </div>

        <h2 className="text-2xl font-black text-white mb-1">Arjun Sharma</h2>
        <p className="text-sm border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
          <Star size={14} className="fill-brand-yellow" /> Rising Investor
        </p>
      </section>

      {/* ── Active Quests Header ───────────────────── */}
      <div className="flex items-center justify-between px-5 mt-7 mb-3">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Trophy size={18} className="text-brand-yellow" /> Active Quests
        </h2>
        <span className="text-xs text-white/40">Daily goals</span>
      </div>

      {/* ── Quests Container ───────────────────────── */}
      <div className="px-4 flex flex-col gap-4">
        
        {/* GST Hero Quest */}
        <div 
          onClick={() => setShowGstModal(true)}
          className="clay-card p-4 relative overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform"
          style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C61 100%)' }}>
          
          <div className="absolute -right-4 -top-4 opacity-20">
            <Zap size={80} className="text-white" />
          </div>
          
          <div className="relative z-10 flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 shadow-clay-sm">
              <span className="text-2xl">🍦</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-base leading-tight">GST Hero Quest</h3>
              <p className="text-white/80 text-xs mt-1">Answer 1 question &bull; 🪙 50</p>
            </div>
            <ChevronRight className="text-white opacity-80" />
          </div>
        </div>

        {/* Income Tax Sprint */}
        <div className="clay-card p-4 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #118AB2 0%, #06D6A0 100%)' }}>
          
          <div className="absolute -right-4 -bottom-4 opacity-20">
            <Target size={80} className="text-white" />
          </div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-white font-bold text-base leading-tight mb-1">Income Tax Sprint</h3>
                <p className="text-white/80 text-xs">Old vs New Regime</p>
              </div>
              
              {/* Mentor badge */}
              <div className="flex items-center gap-2 bg-[#001a3a]/40 p-1.5 pr-3 rounded-full border border-white/10 shadow-clay-sm">
                <img src={priyaAvatar} alt="Priya K" className="w-6 h-6 rounded-full object-cover border border-white/20" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-white leading-none">Priya K.</span>
                  <span className="text-[8px] text-brand-yellow leading-none mt-0.5">Equity Expert</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs font-semibold text-white/90 mb-1.5">
                <span>Progress</span>
                <span>65%</span>
              </div>
              <div className="h-2.5 w-full bg-black/20 rounded-full overflow-hidden border border-white/10">
                <div className="h-full bg-brand-yellow rounded-full relative" style={{ width: '65%' }}>
                  <div className="absolute inset-0 bg-white/20 shimmering" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── GST Quiz Modal ───────────────────────── */}
      {showGstModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-pop_in">
          <div className="w-full max-w-sm clay-card p-6 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a0533 0%, #0d1f4f 100%)' }}>
            
            {!gstResult ? (
              <>
                <div className="w-14 h-14 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-orange/40 shadow-clay-sm animate-float">
                  <span className="text-3xl">🍦</span>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">GST Check</h3>
                <p className="text-sm text-white/70 text-center mb-5">
                  Which GST slab applies to Ice Cream?
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {['5%', '12%', '18%', '28%'].map(ans => (
                    <button 
                      key={ans}
                      onClick={() => handleGstAnswer(ans)}
                      className="py-3 rounded-xl bg-white/10 text-white font-bold border border-white/10 hover:bg-white/20 hover:border-brand-yellow transition-all"
                    >
                      {ans}
                    </button>
                  ))}
                </div>
              </>
            ) : gstResult === 'success' ? (
              <div className="text-center py-4">
                <CheckCircle2 size={64} className="text-brand-green mx-auto mb-4 animate-pop_in" />
                <h3 className="text-2xl font-black text-white mb-2">Correct!</h3>
                <p className="text-brand-yellow font-bold text-lg mb-4">+50 Coins</p>
                <button 
                  onClick={closeGstModal}
                  className="w-full py-3 rounded-xl font-bold bg-brand-green text-[#141414] shadow-clay-sm"
                >
                  Awesome
                </button>
              </div>
            ) : (
              <div className="text-center py-4">
                <XCircle size={64} className="text-brand-orange mx-auto mb-4 animate-pop_in" />
                <h3 className="text-2xl font-black text-white mb-2">Oops!</h3>
                <p className="text-white/60 text-sm mb-4">Ice cream actually falls under the 18% slab.</p>
                <button 
                  onClick={closeGstModal}
                  className="w-full py-3 rounded-xl font-bold bg-white/20 text-white shadow-clay-sm border border-white/20 hover:bg-white/30"
                >
                  Try Again
                </button>
              </div>
            )}
            
            {!gstResult && (
              <button 
                onClick={closeGstModal}
                className="absolute top-3 right-3 text-white/40 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  )
}
