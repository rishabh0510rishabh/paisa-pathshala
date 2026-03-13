import { useState } from 'react'
import {
  Home, BookOpen, TrendingUp, User,
  Coins, Zap, Star, Trophy, ArrowRight,
  BarChart2, Flame, PlayCircle, Target,
  ChevronRight, Sparkles
} from 'lucide-react'

import TradeMachineContent from './components/TradeMachineContent'

/* ══════════════════════════════════════════════════════
   PLACEHOLDER TABS  (to be replaced with real content)
══════════════════════════════════════════════════════ */

function TradeReelsContent({ coins, setCoins }) {
  return (
    <div className="flex flex-col items-center justify-center h-64 gap-3 text-center px-6">
      <PlayCircle size={52} className="text-brand-pink animate-float" />
      <p className="text-xl font-bold text-white">Trade Reels</p>
      <p className="text-sm text-white/50">Short video lessons – coming soon!</p>
      <span className="text-xs text-brand-yellow/70">Coins: {coins}</span>
    </div>
  )
}


function QuestContent({ coins, setCoins }) {
  return (
    <div className="flex flex-col items-center justify-center h-64 gap-3 text-center px-6">
      <Trophy size={52} className="text-brand-yellow animate-float" />
      <p className="text-xl font-bold text-white">Your Profile & Quests</p>
      <p className="text-sm text-white/50">Achievements & leaderboard – coming soon!</p>
      <span className="text-xs text-brand-yellow/70">Coins: {coins}</span>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   LANDING PAGE — HOME TAB
══════════════════════════════════════════════════════ */

const POP_CARDS = [
  {
    icon: <Zap size={28} className="text-brand-yellow" />,
    title: 'Bite-Sized Lessons',
    desc:  'Learn stocks in 60-second reels. No jargon, pure fun.',
    bg:    'from-[#FF6B35] to-[#FF8C61]',
    rotate: '-rotate-1',
  },
  {
    icon: <BarChart2 size={28} className="text-brand-green" />,
    title: 'Paper Trade',
    desc:  'Practice buying & selling with virtual ₹ — zero risk.',
    bg:    'from-[#118AB2] to-[#06D6A0]',
    rotate: 'rotate-1',
  },
  {
    icon: <Trophy size={28} className="text-brand-yellow" />,
    title: 'Win Quests',
    desc:  'Complete daily quests, climb leaderboards, earn coins.',
    bg:    'from-[#7B5EA7] to-[#FF6B9D]',
    rotate: '-rotate-1',
  },
  {
    icon: <Target size={28} className="text-white" />,
    title: 'Smart Portfolio',
    desc:  'Get AI-powered suggestions tailored to your goals.',
    bg:    'from-[#FFD60A] to-[#FF6B35]',
    rotate: 'rotate-2',
  },
]

const STATS = [
  { label: 'Students',  value: '2.4L+',  color: 'text-brand-yellow' },
  { label: 'Lessons',   value: '500+',   color: 'text-brand-green'  },
  { label: 'Avg Score', value: '94%',    color: 'text-brand-pink'   },
]

function LandingPage({ setTab }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="pb-6 overflow-y-auto no-scrollbar">

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden mx-4 mt-4 rounded-3xl p-6 clay-card"
        style={{ background: 'linear-gradient(135deg, #1a0533 0%, #0d1f4f 50%, #001a3a 100%)' }}>

        {/* Decorative blobs */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20 blur-3xl"
          style={{ background: '#FFD60A' }} />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full opacity-20 blur-3xl"
          style={{ background: '#FF6B35' }} />
        <div className="absolute top-1/2 right-4 w-24 h-24 rounded-full opacity-15 blur-2xl"
          style={{ background: '#06D6A0' }} />

        {/* Floating emoji badge */}
        <div className="absolute top-4 right-4 animate-float text-4xl select-none">📈</div>

        {/* Tagline chip */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 text-xs font-700
          bg-white/10 border border-white/20 text-brand-yellow">
          <Sparkles size={12} /> India&apos;s #1 Stock Learning App
        </div>

        <h1 className="text-3xl font-black leading-tight mb-2">
          Invest Smart,<br />
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(90deg, #FFD60A, #FF6B35)' }}>
            Earn Coins!
          </span>
        </h1>

        <p className="text-white/65 text-sm mb-5 max-w-xs">
          Master the stock market through fun reels, quizzes &amp; paper trading.
          Start with zero experience — end up a pro!
        </p>

        {/* CTA buttons */}
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setTab('learn')}
            className="btn-clay px-5 py-2.5 text-sm"
            style={{ background: 'linear-gradient(135deg,#FFD60A,#FF6B35)', color: '#141414' }}>
            <PlayCircle size={16} /> Start Learning
          </button>
          <button
            onClick={() => setTab('trade')}
            className="btn-clay px-5 py-2.5 text-sm bg-white/10 text-white border-white/20">
            <TrendingUp size={16} /> Try Paper Trade
          </button>
        </div>

        {/* Stats row */}
        <div className="flex gap-5 mt-6 pt-5 border-t border-white/10">
          {STATS.map(s => (
            <div key={s.label}>
              <div className={`text-xl font-black ${s.color}`}>{s.value}</div>
              <div className="text-xs text-white/45">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── "Simple as Pop" section header ──────────────── */}
      <div className="flex items-center justify-between px-5 mt-7 mb-1">
        <h2 className="text-base font-bold text-white">
          Simple as <span className="text-brand-yellow">Pop</span> 🎯
        </h2>
        <span className="text-xs text-white/40">What you&apos;ll get</span>
      </div>

      {/* ── Pop Cards ──────────────────────────────────── */}
      <div className="px-4 grid grid-cols-2 gap-3 mt-3">
        {POP_CARDS.map((c, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`clay-card p-4 cursor-pointer ${c.rotate}
              ${hovered === i ? 'scale-105' : ''} transition-transform duration-200`}
            style={{ background: `linear-gradient(135deg, ${c.bg.replace('from-[', '').replace('] to-[', ', ').replace(']', '')})` }}>
            <div className="w-10 h-10 rounded-2xl bg-black/20 flex items-center justify-center mb-3">
              {c.icon}
            </div>
            <p className="text-white font-bold text-sm leading-snug">{c.title}</p>
            <p className="text-white/65 text-xs mt-1 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Daily Challenge Banner ──────────────────────── */}
      <div
        onClick={() => setTab('learn')}
        className="mx-4 mt-5 clay-card p-4 flex items-center gap-4 cursor-pointer"
        style={{ background: 'linear-gradient(135deg,#0d1f4f, #1a0533)' }}>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 animate-pulse_glow"
          style={{ background: 'linear-gradient(135deg,#FFD60A,#FF6B35)' }}>
          <Flame size={24} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-white text-sm">Daily Challenge 🔥</p>
          <p className="text-xs text-white/50 truncate">3 questions · Earn +50 coins</p>
        </div>
        <ChevronRight size={20} className="text-brand-yellow flex-shrink-0" />
      </div>

      {/* ── Trending Topics ─────────────────────────────── */}
      <div className="flex items-center justify-between px-5 mt-6 mb-3">
        <h2 className="text-base font-bold text-white">Trending Topics 📊</h2>
      </div>
      <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar pb-1">
        {[
          { label: 'What is SIP?',      emoji: '💰', color: '#FFD60A' },
          { label: 'Bull vs Bear',      emoji: '🐂', color: '#06D6A0' },
          { label: 'Options 101',       emoji: '📉', color: '#FF6B9D' },
          { label: 'IPO Basics',        emoji: '🚀', color: '#7B5EA7' },
          { label: 'ETFs Explained',    emoji: '📦', color: '#FF6B35' },
        ].map((t, i) => (
          <button
            key={i}
            onClick={() => setTab('learn')}
            className="flex-shrink-0 btn-clay px-4 py-2 text-xs font-600 text-white"
            style={{ background: `${t.color}20`, borderColor: `${t.color}55` }}>
            {t.emoji} {t.label}
          </button>
        ))}
      </div>

      {/* ── Learn More CTA ──────────────────────────────── */}
      <button
        onClick={() => setTab('learn')}
        className="btn-clay mx-4 mt-6 w-[calc(100%-2rem)] py-3 justify-center text-sm font-bold text-[#141414]"
        style={{ background: 'linear-gradient(90deg,#FFD60A,#FF6B35)' }}>
        Explore All Lessons <ArrowRight size={16} />
      </button>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   TOP NAV
══════════════════════════════════════════════════════ */
function TopNav({ coins }) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-5 py-3
      border-b border-white/10"
      style={{ background: 'rgba(15,12,41,0.92)', backdropFilter: 'blur(14px)' }}>
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl flex items-center justify-center text-base font-black shadow-clay-sm"
          style={{ background: 'linear-gradient(135deg,#FFD60A,#FF6B35)' }}>
          ₹
        </div>
        <span className="font-black text-base tracking-tight">
          Paisa&nbsp;<span className="text-brand-yellow">Pathshala</span>
        </span>
      </div>

      {/* Coin badge */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold
        border border-brand-yellow/30 animate-pulse_glow"
        style={{ background: 'rgba(255,214,10,0.12)' }}>
        <Coins size={15} className="text-brand-yellow" />
        <span className="text-brand-yellow">{coins.toLocaleString('en-IN')}</span>
      </div>
    </header>
  )
}

/* ══════════════════════════════════════════════════════
   BOTTOM NAV
══════════════════════════════════════════════════════ */
const NAV_ITEMS = [
  { id: 'home',    label: 'Home',    Icon: Home       },
  { id: 'learn',   label: 'Learn',   Icon: BookOpen   },
  { id: 'trade',   label: 'Trade',   Icon: TrendingUp },
  { id: 'profile', label: 'Profile', Icon: User       },
]

function BottomNav({ tab, setTab }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around
      px-2 py-3 border-t border-white/10 max-w-md mx-auto"
      style={{ background: 'rgba(15,12,41,0.95)', backdropFilter: 'blur(16px)' }}>
      {NAV_ITEMS.map(({ id, label, Icon }) => {
        const active = tab === id
        return (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex flex-col items-center gap-0.5 px-4 py-1 rounded-2xl transition-all duration-200"
            style={active ? { background: 'rgba(255,214,10,0.15)' } : {}}>
            <Icon
              size={22}
              strokeWidth={active ? 2.5 : 1.8}
              className={active ? 'text-brand-yellow' : 'text-white/40'}
            />
            <span className={`text-[10px] font-semibold ${active ? 'text-brand-yellow' : 'text-white/40'}`}>
              {label}
            </span>
            {active && (
              <div className="w-1 h-1 rounded-full mt-0.5 bg-brand-yellow" />
            )}
          </button>
        )
      })}
    </nav>
  )
}

/* ══════════════════════════════════════════════════════
   ROOT APP
══════════════════════════════════════════════════════ */
export default function App() {
  const [tab, setTab]     = useState('home')
  const [coins, setCoins] = useState(1250)

  return (
    <div className="min-h-screen max-w-md mx-auto relative flex flex-col"
      style={{ background: 'linear-gradient(160deg, #0f0c29 0%, #141e30 60%, #0f0c29 100%)' }}>
      <TopNav coins={coins} />

      {/* ── Page content ────────────────────────────── */}
      <main className="flex-1 overflow-y-auto no-scrollbar" style={{ paddingBottom: '5rem' }}>

        {tab === 'home'    && <LandingPage setTab={setTab} />}
        {tab === 'learn'   && <TradeReelsContent  coins={coins} setCoins={setCoins} />}
        {tab === 'trade'   && <TradeMachineContent coins={coins} setCoins={setCoins} />}
        {tab === 'profile' && <QuestContent        coins={coins} setCoins={setCoins} />}

      </main>

      <BottomNav tab={tab} setTab={setTab} />
    </div>
  )
}
