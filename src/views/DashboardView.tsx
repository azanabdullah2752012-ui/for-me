import React, { useState, useEffect, useMemo } from 'react';
import {
  Flame,
  Star,
  BookOpen,
  Activity,
  Droplets,
  Moon,
  Footprints,
  Play,
  Pause,
  RotateCcw,
  Sun,
  Bell,
  CheckCircle2,
  ImageIcon,
  Link2,
  Smile,
  Compass,
  Radio,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  PenTool,
  Headphones,
  Target,
  Brain,
  Zap,
  Waves,
  Lightbulb,
  BatteryCharging,
  ChevronDown,
} from 'lucide-react';
import { NavView } from '../types';
import { useData } from '../context/DataContext';
import { sound } from '../audio/sound';

interface DashboardViewProps {
  onNavigate: (view: NavView) => void;
}

const VIBES = [
  { label: 'Locked In', icon: Target },
  { label: 'Deep Focus', icon: Brain },
  { label: 'Energized', icon: Zap },
  { label: 'Calm & Flow', icon: Waves },
  { label: 'Creative', icon: Lightbulb },
  { label: 'Recharging', icon: BatteryCharging },
];

const SUBJECTS = ['Mathematics', 'Science', 'Deep Coding', 'Physics', 'Philosophy', 'Language'];

const AUDIO_TRACKS = [
  { id: 'deep-work', name: 'Deep Work', duration: '1:00:00' },
  { id: 'lofi', name: 'Lofi & Chill', duration: '45:00' },
  { id: 'ambient', name: 'Ambient & Drone', duration: '1:30:00' },
  { id: 'coding', name: 'Coding Flow', duration: '55:00' },
  { id: 'binaural', name: 'Binaural Beats', duration: '1:15:00' },
];

export const DashboardView: React.FC<DashboardViewProps> = ({ onNavigate }) => {
  const {
    userName,
    selectedDate,
    currentLog,
    updateDailyLog,
    incrementWater,
    toggleChecklist,
    setDailyVibe,
    studyTimer,
    startStudyTimer,
    pauseStudyTimer,
    resetStudyTimer,
    updateStudyTimerMeta,
    lifeDimensions,
    activeTrackIndex,
    setActiveTrackIndex,
    isPlayingAudio,
    toggleAudioPlayback,
  } = useData();

  // Live Digital Clock
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format Date for Header
  const [y, m, d] = selectedDate.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  const formattedFullDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  // Local state
  const [quickJournal, setQuickJournal] = useState(currentLog.quickJournal || '');
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    setQuickJournal(currentLog.quickJournal || '');
  }, [currentLog.quickJournal]);

  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSaveJournal = () => {
    sound.complete();
    updateDailyLog({ quickJournal });
  };

  const handleTrackSelect = (idx: number) => {
    sound.tick();
    setActiveTrackIndex(idx);
    if (!isPlayingAudio) {
      toggleAudioPlayback();
    }
  };

  // Radar points for 6 dimensions
  const radarPoints = useMemo(() => {
    const total = lifeDimensions.length || 6;
    const center = 100;
    const maxRadius = 75;
    return lifeDimensions
      .map((dim, i) => {
        const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
        const normalized = Math.min(10, Math.max(1, dim.score || 8)) / 10;
        const r = maxRadius * normalized;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(' ');
  }, [lifeDimensions]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16 select-none animate-fadeIn">
      {/* ================================================================ */}
      {/* 1. CINEMATIC COSMIC HERO PLATE & HORIZON GREETING                */}
      {/* ================================================================ */}
      <section className="relative rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#090B10]">
        {/* Background Starfield & Crescent Planet SVG Canvas */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Stars */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 150px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 300px 140px, #E56A38, rgba(0,0,0,0)), radial-gradient(2px 2px at 450px 50px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 600px 120px, #F59E0B, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 800px 90px, #ffffff, rgba(0,0,0,0))',
              backgroundSize: '550px 250px',
            }}
          />

          {/* Luminous Crescent Planet on Horizon */}
          <svg
            className="absolute right-4 sm:right-16 md:right-32 top-[-70px] md:top-[-100px] w-[340px] md:w-[480px] h-[340px] md:h-[480px] opacity-85"
            viewBox="0 0 500 500"
            fill="none"
          >
            <defs>
              <radialGradient id="planetBody" cx="45%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#2E1B14" />
                <stop offset="65%" stopColor="#140D0B" />
                <stop offset="100%" stopColor="#080709" />
              </radialGradient>
              <linearGradient id="crescentRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#FBD5B5" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#E56A38" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#9A3412" stopOpacity="0" />
              </linearGradient>
              <filter id="crescentGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Planet Sphere */}
            <circle cx="250" cy="250" r="190" fill="url(#planetBody)" />

            {/* Glowing Crescent Rim */}
            <path
              d="M 125 110 A 190 190 0 0 1 430 330 A 195 195 0 0 0 125 110 Z"
              fill="url(#crescentRim)"
              filter="url(#crescentGlow)"
            />

            {/* Atmosphere Falloff Ring */}
            <circle
              cx="250"
              cy="250"
              r="192"
              stroke="#E56A38"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              fill="none"
            />
          </svg>

          {/* Solitary Cliff Wanderer Silhouette */}
          <div className="absolute right-20 sm:right-36 md:right-64 bottom-0 w-36 h-28 pointer-events-none">
            <svg viewBox="0 0 140 100" fill="#090B10" className="w-full h-full drop-shadow-2xl">
              {/* Rocky mountain ridge */}
              <path d="M 0 100 L 25 70 L 60 55 L 90 60 L 120 75 L 140 100 Z" />
              {/* Seated wanderer with cloak */}
              <circle cx="68" cy="40" r="4.5" fill="#090B10" />
              <path d="M 64 45 C 64 45, 60 58, 55 62 L 75 62 C 72 56, 72 47, 68 45 Z" fill="#090B10" />
              <path d="M 62 47 C 56 50, 52 56, 50 63 L 56 63 Z" fill="#090B10" />
            </svg>
          </div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 p-6 md:p-8 space-y-6">
          {/* Top Row: Greeting, Status, and Live Clock */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <h1 className="text-2xl md:text-4xl font-serif text-white tracking-tight">
                  Good Morning, <span className="text-[#E56A38] font-bold drop-shadow-[0_0_15px_rgba(229,106,56,0.5)]">{userName}.</span>
                </h1>
              </div>
              <p className="text-xs font-serif italic text-zinc-400 mt-1 flex items-center gap-1.5">
                <span className="text-[#E56A38]">✦</span>
                <span>Discipline today. Freedom tomorrow. —</span>
              </p>
            </div>

            {/* Time & Quick System Utilities */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-[11px] font-mono text-zinc-400 tracking-wider">
                  {formattedFullDate}
                </p>
                <p className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight drop-shadow-sm">
                  {currentTime}
                </p>
              </div>

              {/* Minimal Utilities */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => sound.complete()}
                  className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] flex items-center justify-center text-amber-300 transition-colors"
                  title="Test Sound"
                >
                  <Sun size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('music')}
                  className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                  title="Focus Music"
                >
                  <Bell size={14} />
                </button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#E56A38] to-[#9A3412] border border-[#E56A38]/50 flex items-center justify-center text-white text-xs font-serif font-bold shadow-[0_0_12px_rgba(229,106,56,0.3)]">
                  {userName.charAt(0)}
                </div>
              </div>
            </div>
          </div>

          {/* Mood Pills: "How do you feel today?" */}
          <div className="pt-2 space-y-2">
            <span className="text-xs font-sans text-zinc-400 font-medium block">
              How do you feel today?
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {VIBES.map((v) => {
                const isSelected = currentLog.vibe === v.label;
                const IconComponent = v.icon;
                return (
                  <button
                    key={v.label}
                    type="button"
                    onClick={() => setDailyVibe(v.label)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans transition-all ${
                      isSelected
                        ? 'bg-[#E56A38]/20 text-[#E56A38] border border-[#E56A38]/70 shadow-[0_0_15px_rgba(229,106,56,0.35)] font-semibold'
                        : 'bg-black/40 text-zinc-400 hover:text-white border border-white/[0.08] hover:border-white/[0.15]'
                    }`}
                  >
                    <IconComponent size={13} className={isSelected ? 'text-[#E56A38]' : 'text-zinc-400'} />
                    <span>{v.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. BENTO ROW 1: BIOMETRICS, STUDY FOCUS, STREAK, DAILY PROMISE   */}
      {/* ================================================================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* CARD 1: YOUR BIOMETRICS */}
        <section className="p-5 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-[#E56A38]" />
              <h2 className="text-xs font-sans font-bold text-white tracking-wide">
                Your Biometrics
              </h2>
            </div>
            <button
              onClick={() => onNavigate('health')}
              className="text-[11px] text-zinc-400 hover:text-white transition-colors"
            >
              View Details →
            </button>
          </div>

          {/* 3 Concentric Ring Indicators */}
          <div className="grid grid-cols-3 gap-2 text-center py-1">
            {/* Hydration (1-Click Interactive Logger) */}
            <div
              onClick={incrementWater}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') incrementWater(); }}
              title="Click to log +1 glass of water"
              className="flex flex-col items-center space-y-1.5 cursor-pointer group focus:outline-none"
            >
              <div className="relative w-14 h-14 flex items-center justify-center transition-transform group-hover:scale-105">
                <svg className="w-14 h-14 transform -rotate-90">
                  <circle cx="28" cy="28" r="22" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="4" fill="none" />
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    stroke="#38BDF8"
                    strokeWidth="4"
                    strokeDasharray={138}
                    strokeDashoffset={138 * (1 - Math.min(1, (currentLog.waterGlasses || 6) / 8))}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <Droplets size={13} className="text-[#38BDF8] absolute group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-xs font-mono font-bold text-white">{Math.round(((currentLog.waterGlasses || 6) / 8) * 100)}%</span>
              <span className="text-[10px] text-zinc-500 font-sans group-hover:text-[#38BDF8] transition-colors">Hydration +1</span>
            </div>

            {/* Sleep */}
            <div className="flex flex-col items-center space-y-1.5">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <svg className="w-14 h-14 transform -rotate-90">
                  <circle cx="28" cy="28" r="22" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="4" fill="none" />
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    stroke="#A855F7"
                    strokeWidth="4"
                    strokeDasharray={138}
                    strokeDashoffset={138 * (1 - 0.85)}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <Moon size={13} className="text-[#A855F7] absolute" />
              </div>
              <span className="text-xs font-mono font-bold text-white">{currentLog.sleepHours || 7.7}h</span>
              <span className="text-[10px] text-zinc-500 font-sans">Sleep</span>
            </div>

            {/* Movement */}
            <div className="flex flex-col items-center space-y-1.5">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <svg className="w-14 h-14 transform -rotate-90">
                  <circle cx="28" cy="28" r="22" stroke="rgba(52, 211, 153, 0.15)" strokeWidth="4" fill="none" />
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    stroke="#34D399"
                    strokeWidth="4"
                    strokeDasharray={138}
                    strokeDashoffset={138 * (1 - (currentLog.movementRating || 72) / 100)}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <Footprints size={13} className="text-[#34D399] absolute" />
              </div>
              <span className="text-xs font-mono font-bold text-white">{currentLog.movementRating || 72}%</span>
              <span className="text-[10px] text-zinc-500 font-sans">Movement</span>
            </div>
          </div>
        </section>

        {/* CARD 2: STUDY FOCUS (LIVE TIMER) */}
        <section className="p-5 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <BookOpen size={14} className="text-[#E56A38]" />
              <h2 className="text-xs font-sans font-bold text-white tracking-wide">
                Study Focus
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#E56A38] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E56A38] animate-pulse" />
              <span>LIVE</span>
            </span>
          </div>

          {/* Big Digital Timer & Play Controls */}
          <div className="flex items-baseline justify-between pt-1">
            <span className="text-3xl font-mono font-black text-white tracking-tight">
              {formatTimer(studyTimer.seconds)}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  if (studyTimer.isRunning) pauseStudyTimer();
                  else startStudyTimer();
                }}
                className="w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.1] flex items-center justify-center text-white transition-all shadow-sm"
              >
                {studyTimer.isRunning ? <Pause size={13} /> : <Play size={13} fill="currentColor" />}
              </button>
              <button
                type="button"
                onClick={resetStudyTimer}
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                title="Reset stopwatch"
              >
                <RotateCcw size={12} />
              </button>
            </div>
          </div>

          {/* Subject Dropdown & Waveforms */}
          <div className="flex items-center justify-between pt-1 border-t border-white/[0.05]">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSubjectDropdownOpen(!isSubjectDropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-sans text-zinc-400 hover:text-white transition-colors"
              >
                <span>{studyTimer.subject || 'Mathematics'}</span>
                <ChevronDown size={12} />
              </button>
              {isSubjectDropdownOpen && (
                <div className="absolute left-0 bottom-full mb-1 w-36 bg-[#12141D] border border-white/[0.1] rounded-xl p-1 shadow-2xl z-20 space-y-0.5">
                  {SUBJECTS.map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => {
                        updateStudyTimerMeta(sub, studyTimer.topic);
                        setIsSubjectDropdownOpen(false);
                      }}
                      className="w-full text-left px-2.5 py-1 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-white/[0.06]"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Equalizer Frequency Waves */}
            <div className="flex items-end gap-0.5 h-3" title="Focus frequency">
              <span className="w-0.5 h-full bg-[#E56A38] rounded-full animate-eq-1" />
              <span className="w-0.5 h-full bg-[#E56A38] rounded-full animate-eq-2" />
              <span className="w-0.5 h-full bg-amber-400 rounded-full animate-eq-3" />
              <span className="w-0.5 h-full bg-[#E56A38] rounded-full animate-eq-4" />
              <span className="w-0.5 h-full bg-amber-500 rounded-full animate-eq-5" />
            </div>
          </div>
        </section>

        {/* CARD 3: STREAK HEATMAP */}
        <section className="p-5 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <Flame size={14} className="text-[#E56A38]" />
              <h2 className="text-xs font-sans font-bold text-white tracking-wide">
                Streak Heatmap
              </h2>
            </div>
            <span className="text-[10px] font-mono text-zinc-400">Last 8 Weeks ⌵</span>
          </div>

          {/* 8-Week Amber Heatmap Grid */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <div className="grid grid-rows-5 grid-flow-col gap-1.5 flex-1">
              {Array.from({ length: 40 }).map((_, i) => {
                const isLit = i > 4 && (i % 2 === 0 || i % 3 === 0 || i > 30);
                const isPeak = i === 38 || i === 39 || i === 34;
                return (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-[2px] transition-all ${
                      isPeak
                        ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]'
                        : isLit
                        ? 'bg-[#E56A38]/70'
                        : 'bg-white/[0.05]'
                    }`}
                  />
                );
              })}
            </div>

            {/* Streak Counter */}
            <div className="text-right shrink-0">
              <div className="flex items-baseline gap-1 justify-end">
                <span className="text-2xl font-mono font-black text-white">48</span>
              </div>
              <span className="text-[10px] font-sans text-zinc-400 block">Day Streak 🔥</span>
              <span className="text-[10px] font-mono text-amber-400 font-bold block mt-0.5">▲ +2 This Week</span>
            </div>
          </div>
        </section>

        {/* CARD 4: DAILY PROMISE */}
        <section className="p-5 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center gap-2 pb-1">
            <Star size={14} className="text-[#E56A38] fill-[#E56A38]" />
            <h2 className="text-xs font-sans font-bold text-white tracking-wide">
              Daily Promise
            </h2>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-serif italic text-zinc-200 leading-snug">
              &ldquo;Get 3 hours of deep study (Maths + Science).&rdquo;
            </p>
            <span className="text-[10px] font-mono text-zinc-500 block">— By 11:59 PM</span>
          </div>

          {/* Progress Bar: 2 / 3 */}
          <div className="space-y-1.5 pt-1">
            <div className="w-full h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full bg-[#E56A38] rounded-full w-[66%] shadow-[0_0_8px_rgba(229,106,56,0.5)]" />
            </div>
            <div className="flex justify-end text-[10px] font-mono text-zinc-400">
              <span>2 / 3</span>
            </div>
          </div>
        </section>
      </div>

      {/* ================================================================ */}
      {/* 3. BENTO ROW 2: TODAY'S OVERVIEW, QUICK JOURNAL, UPCOMING         */}
      {/* ================================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* CARD 1: TODAY'S OVERVIEW (5 Cols) */}
        <section className="lg:col-span-5 p-6 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-2 pb-1">
            <span className="text-[#E56A38] text-sm">✦</span>
            <h2 className="text-xs font-sans font-bold text-white tracking-wide">
              Today&apos;s Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Semicircular Gauge: 82% */}
            <div className="sm:col-span-4 flex flex-col items-center justify-center text-center">
              <div className="relative w-28 h-20 flex items-center justify-center overflow-hidden">
                <svg className="w-28 h-28 transform -rotate-180 absolute top-0">
                  <circle
                    cx="56"
                    cy="56"
                    r="44"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="8"
                    strokeDasharray={276}
                    strokeDashoffset={138}
                    fill="none"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="44"
                    stroke="#E56A38"
                    strokeWidth="8"
                    strokeDasharray={276}
                    strokeDashoffset={276 - (138 * 0.82)}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <div className="absolute bottom-2 text-center">
                  <span className="text-2xl font-mono font-black text-white">82%</span>
                </div>
              </div>
              <span className="text-[10px] text-zinc-500 font-sans mt-1">Overall Progress</span>
            </div>

            {/* Checklist */}
            <div className="sm:col-span-5 space-y-2 text-xs font-sans">
              {Object.entries(currentLog.checklist || {}).map(([task, isDone]) => (
                <div
                  key={task}
                  onClick={() => toggleChecklist(task)}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-[4px] flex items-center justify-center transition-colors ${
                      isDone
                        ? 'bg-[#E56A38] text-white'
                        : 'border border-white/[0.2] group-hover:border-white/[0.4]'
                    }`}
                  >
                    {isDone && <CheckCircle2 size={12} className="stroke-[3]" />}
                  </div>
                  <span className={`text-[11px] truncate ${isDone ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    {task}
                  </span>
                </div>
              ))}
            </div>

            {/* Daily Rating */}
            <div className="sm:col-span-3 border-l border-white/[0.06] pl-3 text-center sm:text-left space-y-2">
              <span className="text-[10px] text-zinc-500 font-sans block">Daily Rating</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-mono font-bold text-white">9</span>
                <span className="text-xs font-mono text-zinc-500">/10</span>
              </div>
              <span className="text-[10px] font-mono text-amber-400 block">▲ +1</span>

              {/* Mini Bar Chart */}
              <div className="flex items-end gap-1 h-5 pt-1">
                {[4, 6, 7, 5, 8, 7, 9].map((val, idx) => (
                  <span
                    key={idx}
                    className={`w-1 rounded-sm ${idx === 6 ? 'bg-[#E56A38]' : 'bg-white/[0.1]'}`}
                    style={{ height: `${(val / 10) * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CARD 2: QUICK JOURNAL (4 Cols) */}
        <section className="lg:col-span-4 p-6 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <PenTool size={14} className="text-[#E56A38]" />
              <h2 className="text-xs font-sans font-bold text-white tracking-wide">
                Quick Journal
              </h2>
            </div>
          </div>

          <textarea
            rows={3}
            value={quickJournal}
            onChange={(e) => setQuickJournal(e.target.value)}
            placeholder="What's on your mind?..."
            className="w-full bg-black/40 border border-white/[0.08] focus:border-[#E56A38]/60 rounded-2xl p-3.5 text-xs font-serif italic text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E56A38]/40 resize-none leading-relaxed transition-colors"
          />

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2 text-zinc-500">
              <button type="button" className="p-1 hover:text-white transition-colors">
                <ImageIcon size={14} />
              </button>
              <button type="button" className="p-1 hover:text-white transition-colors">
                <Link2 size={14} />
              </button>
              <button type="button" className="p-1 hover:text-white transition-colors">
                <Smile size={14} />
              </button>
            </div>

            <button
              type="button"
              onClick={handleSaveJournal}
              className="px-5 py-1.5 rounded-full bg-[#E56A38] hover:bg-[#D9531E] text-white text-xs font-sans font-bold shadow-[0_0_12px_rgba(229,106,56,0.35)] transition-all"
            >
              Save
            </button>
          </div>
        </section>

        {/* CARD 3: UPCOMING (3 Cols) */}
        <section className="lg:col-span-3 p-6 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <span className="text-[#E56A38] text-sm">📅</span>
              <h2 className="text-xs font-sans font-bold text-white tracking-wide">
                Upcoming
              </h2>
            </div>
            <button
              onClick={() => onNavigate('daily-tracker')}
              className="text-[11px] text-zinc-400 hover:text-white transition-colors"
            >
              View All →
            </button>
          </div>

          <div className="space-y-3 pt-1 text-xs font-sans">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E56A38]" />
                <span className="text-zinc-200">Weekly Audit</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">Sun, 2 Nov</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-zinc-200">Allen TalentX (if any)</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">Mon, 3 Nov</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-zinc-200">Exercise</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">Mon, 3 Nov</span>
            </div>
          </div>
        </section>
      </div>

      {/* ================================================================ */}
      {/* 4. BENTO ROW 3: RADAR CHART, FOCUS AUDIO, LIFE AUDIT PROGRESS     */}
      {/* ================================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* CARD 1: YOUR LIFE AT A GLANCE (5 Cols) */}
        <section className="lg:col-span-5 p-6 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-2 pb-1">
            <Compass size={14} className="text-[#E56A38]" />
            <h2 className="text-xs font-sans font-bold text-white tracking-wide">
              Your Life at a Glance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Hexagonal Radar Spider Chart */}
            <div className="sm:col-span-6 flex items-center justify-center relative">
              <svg className="w-44 h-44" viewBox="0 0 200 200">
                {/* Background Concentric Webs */}
                {[0.25, 0.5, 0.75, 1].map((scale, idx) => (
                  <polygon
                    key={idx}
                    points="100,25 165,62.5 165,137.5 100,175 35,137.5 35,62.5"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                    fill="none"
                    transform={`scale(${scale})`}
                    transform-origin="100 100"
                  />
                ))}

                {/* Radar Area */}
                <polygon
                  points={radarPoints}
                  stroke="#E56A38"
                  strokeWidth="2"
                  fill="rgba(229, 106, 56, 0.18)"
                  className="drop-shadow-[0_0_8px_rgba(229,106,56,0.3)]"
                />

                {/* Dimension Axis Labels */}
                <text x="100" y="18" fill="#A1A1AA" fontSize="8" textAnchor="middle" fontFamily="sans-serif">Career 9.0</text>
                <text x="175" y="60" fill="#A1A1AA" fontSize="8" textAnchor="start" fontFamily="sans-serif">Health 8.5</text>
                <text x="175" y="145" fill="#A1A1AA" fontSize="8" textAnchor="start" fontFamily="sans-serif">Rel. 8.0</text>
                <text x="100" y="192" fill="#A1A1AA" fontSize="8" textAnchor="middle" fontFamily="sans-serif">Finance 7.5</text>
                <text x="25" y="145" fill="#A1A1AA" fontSize="8" textAnchor="end" fontFamily="sans-serif">Mind 7.5</text>
                <text x="25" y="60" fill="#A1A1AA" fontSize="8" textAnchor="end" fontFamily="sans-serif">Env. 8.5</text>
              </svg>
            </div>

            {/* Alignment Card: Starry Mountain Skyline */}
            <div className="sm:col-span-6 p-4 rounded-2xl bg-gradient-to-br from-[#12141D] to-[#0A0B10] border border-white/[0.08] relative overflow-hidden space-y-2 text-center">
              <p className="text-sm font-serif font-bold text-white leading-tight">
                You&apos;re <span className="text-[#E56A38]">82%</span> aligned with your ideal self.
              </p>
              <p className="text-xs font-serif italic text-zinc-400">
                Keep going.
              </p>
              <div className="w-8 h-0.5 bg-[#E56A38] mx-auto rounded-full" />
            </div>
          </div>
        </section>

        {/* CARD 2: FOCUS AUDIO PLAYER (4 Cols) */}
        <section className="lg:col-span-4 p-6 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <Headphones size={14} className="text-[#E56A38]" />
              <h2 className="text-xs font-sans font-bold text-white tracking-wide">
                Focus Audio
              </h2>
            </div>
            <button
              onClick={() => onNavigate('music')}
              className="text-[11px] text-zinc-400 hover:text-white transition-colors"
            >
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
            {/* Left: Artwork & Controls */}
            <div className="space-y-3">
              {/* Cosmic Galaxy Thumbnail */}
              <div className="relative w-full h-20 rounded-xl overflow-hidden border border-white/[0.1] bg-[#14121A] flex items-center justify-center group">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform"
                  style={{
                    backgroundImage: 'radial-gradient(ellipse at center, rgba(229,106,56,0.4), rgba(10,11,16,0.9) 75%)',
                  }}
                />
                <span className="relative z-10 text-[10px] font-mono text-zinc-300">
                  🌌 Cosmic Waves
                </span>
              </div>

              <div>
                <p className="text-xs font-sans font-bold text-white truncate">
                  {AUDIO_TRACKS[activeTrackIndex]?.name || 'Deep Work'}
                </p>
                <p className="text-[10px] text-zinc-500 font-sans">
                  Focus • {AUDIO_TRACKS[activeTrackIndex]?.duration || '1:00:00'}
                </p>
              </div>

              {/* Player Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleTrackSelect((activeTrackIndex - 1 + AUDIO_TRACKS.length) % AUDIO_TRACKS.length)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <SkipBack size={13} />
                </button>
                <button
                  type="button"
                  onClick={toggleAudioPlayback}
                  className="w-7 h-7 rounded-full bg-[#E56A38] hover:bg-[#D9531E] flex items-center justify-center text-white transition-all shadow-[0_0_12px_rgba(229,106,56,0.4)]"
                >
                  {isPlayingAudio ? <Pause size={12} /> : <Play size={12} fill="currentColor" />}
                </button>
                <button
                  type="button"
                  onClick={() => handleTrackSelect((activeTrackIndex + 1) % AUDIO_TRACKS.length)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <SkipForward size={13} />
                </button>
                <Volume2 size={13} className="text-zinc-500 ml-2" />
              </div>
            </div>

            {/* Right: Radio Playlist Selection */}
            <div className="space-y-1.5 text-xs font-sans border-l border-white/[0.06] pl-3">
              {AUDIO_TRACKS.map((track, idx) => {
                const isSelected = activeTrackIndex === idx;
                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => handleTrackSelect(idx)}
                    className={`w-full text-left flex items-center gap-2 py-1 px-1.5 rounded-lg transition-colors ${
                      isSelected
                        ? 'text-[#E56A38] font-bold bg-[#E56A38]/10'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span className="text-[10px]">{isSelected ? '●' : '○'}</span>
                    <span className="truncate text-[11px]">{track.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* CARD 3: LIFE AUDIT PROGRESS (3 Cols) */}
        <section className="lg:col-span-3 p-6 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center gap-2 pb-1">
            <span className="text-[#E56A38] text-sm">✦</span>
            <h2 className="text-xs font-sans font-bold text-white tracking-wide">
              Life Audit Progress
            </h2>
          </div>

          {/* Donut Meter: 76% */}
          <div className="flex flex-col items-center justify-center text-center py-2">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle cx="48" cy="48" r="38" stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" />
                <circle
                  cx="48"
                  cy="48"
                  r="38"
                  stroke="#E56A38"
                  strokeWidth="6"
                  strokeDasharray={238}
                  strokeDashoffset={238 * (1 - 0.76)}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span className="absolute font-mono text-xl font-black text-white">76%</span>
            </div>
            <span className="text-[10px] text-zinc-500 font-sans mt-2">Next Review: End of Month</span>
          </div>
        </section>
      </div>

      {/* ================================================================ */}
      {/* 5. PHILOSOPHICAL FOOTER                                          */}
      {/* ================================================================ */}
      <footer className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-500">
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="text-[#E56A38]">✦</span>
          <span className="font-serif italic text-zinc-300">&ldquo;A disciplined mind builds a free life.&rdquo;</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
          <span>Plan</span>
          <span>•</span>
          <span>Execute</span>
          <span>•</span>
          <span>Reflect</span>
          <span>•</span>
          <span>Improve</span>
        </div>
      </footer>
    </div>
  );
};
