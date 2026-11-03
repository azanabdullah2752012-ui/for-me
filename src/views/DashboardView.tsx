import React, { useState, useEffect, useMemo } from 'react';
import {
  Home,
  Clock,
  Flame,
  Check,
  Star,
  BookOpen,
  Calendar as CalendarIcon,
  Activity,
  Droplets,
  Moon,
  Footprints,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Heart,
  Volume2,
  ChevronDown,
  ArrowRight,
  Sun,
  Bell,
  CheckCircle2,
  Image as ImageIcon,
  Link2,
  Smile,
  Compass,
  Radio,
  SkipForward,
  SkipBack,
  VolumeX,
  PenTool,
  Headphones,
  Target,
  Brain,
  Zap,
  Waves,
  Lightbulb,
  BatteryCharging,
} from 'lucide-react';
import { NavView } from '../types';
import { useData } from '../context/DataContext';
import { sound } from '../audio/sound';
import { StreakHeatmapMatrix } from '../components/widgets/StreakHeatmapMatrix';
import { BiometricsRingChart } from '../components/widgets/BiometricsRingChart';
import { DynamicVibeWidget } from '../components/widgets/DynamicVibeWidget';

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
    selectedDate,
    currentLog,
    habits,
    toggleHabit,
    goals,
    settings,
    updateDailyLog,
    updateDailyPromiseStatus,
    studyTimer,
    studyTimerElapsed,
    startStudyTimer,
    pauseStudyTimer,
    resetStudyTimer,
    updateStudyTimerMeta,
    setIsMusicDrawerOpen,
  } = useData();

  // Quick Journal Local State
  const [quickJournal, setQuickJournal] = useState(currentLog?.dailyNotes || '');
  const selectedVibe = currentLog?.extendedReflections?.emotions || 'Locked In';

  // Audio Player State in Dashboard
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [audioVolume, setAudioVolume] = useState(0.7);

  // Subject Selector for Study Timer
  const [selectedSubject, setSelectedSubject] = useState(studyTimer.subject || 'Mathematics');
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);

  // Checkbox state for Today's Overview
  const [dailyChecklist, setDailyChecklist] = useState({
    water: true,
    study: true,
    nightly: true,
    workout: false,
    reading: false,
  });

  useEffect(() => {
    setQuickJournal(currentLog?.dailyNotes || '');
  }, [currentLog?.dailyNotes]);

  // Determine dynamic greeting based on current local hour
  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

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

  // Format selected date
  const [y, m, d] = selectedDate.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  const formattedFullDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  // Daily Promise Data
  const dailyPromise = currentLog?.dailyPromise;
  const hasPromise = Boolean(dailyPromise && dailyPromise.text);

  // Habit completions map for streak matrix
  const habitCompletionsMap = useMemo(() => {
    const map: Record<string, number> = {};
    habits.forEach((h) => {
      if (h.completions) {
        Object.entries(h.completions).forEach(([dateKey, done]) => {
          if (done) {
            map[dateKey] = (map[dateKey] || 0) + 1;
          }
        });
      }
    });
    return map;
  }, [habits]);

  // Metrics
  const studyHours = currentLog?.trackers?.study?.hoursStudied || (studyTimerElapsed ? Math.round((studyTimerElapsed / 3600) * 10) / 10 : 0.4);
  const sleepHours = currentLog?.trackers?.sleep?.hours || currentLog?.sleepHours || 7.7;
  const waterGlasses = currentLog?.trackers?.waterAndMovement?.waterGlasses || currentLog?.waterGlasses || 6;

  const handleVibeClick = (label: string) => {
    sound.tick();
    const existing = currentLog?.extendedReflections || {
      emotions: '',
      triggers: '',
      gratitude: '',
      happiness: '',
      decisions: '',
      mistakes: '',
      lessons: '',
    };
    updateDailyLog({
      extendedReflections: {
        ...existing,
        emotions: label,
      },
    });
  };

  const handleSaveJournalField = () => {
    sound.complete();
    updateDailyLog({
      dailyNotes: quickJournal,
    });
  };

  const handleIncrementWater = () => {
    sound.tick();
    const currentWater = currentLog?.trackers?.waterAndMovement;
    const currentGlasses = currentWater?.waterGlasses || currentLog?.waterGlasses || 0;
    const nextCount = Math.min(16, currentGlasses + 1);

    if (currentLog?.trackers) {
      updateDailyLog({
        waterGlasses: nextCount,
        trackers: {
          ...currentLog.trackers,
          waterAndMovement: {
            ...currentLog.trackers.waterAndMovement,
            waterGlasses: nextCount,
          },
        },
      });
    } else {
      updateDailyLog({
        waterGlasses: nextCount,
      });
    }
  };

  const handleToggleTimer = () => {
    if (studyTimer.isRunning) {
      pauseStudyTimer();
      sound.tick();
    } else {
      startStudyTimer(selectedSubject);
      sound.complete();
    }
  };

  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const toggleChecklistItem = (key: keyof typeof dailyChecklist) => {
    sound.tick();
    setDailyChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelectTrack = (idx: number) => {
    sound.tick();
    setActiveTrackIndex(idx);
    setIsPlayingAudio(true);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16 select-none animate-fadeIn">
      {/* ================================================================ */}
      {/* 1. CINEMATIC COSMIC HERO PLATE & HORIZON GREETING                */}
      {/* ================================================================ */}
      <section className="relative rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#090B10]">
        {/* Authoritative Cosmic Background Artwork (Crescent Planet & Solitary Silhouette) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Luminous Space Nebula Gradient */}
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                'radial-gradient(circle at 75% 25%, rgba(229, 106, 56, 0.28) 0%, rgba(139, 92, 246, 0.12) 35%, transparent 70%), linear-gradient(180deg, #07080D 0%, #0D0F18 100%)',
            }}
          />

          {/* Majestic Crescent Planet SVG */}
          <svg
            className="absolute right-[12%] top-[-100px] w-[500px] h-[500px] opacity-75 pointer-events-none"
            viewBox="0 0 500 500"
          >
            <defs>
              <radialGradient id="planetGlow" cx="60%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#FFD2B0" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#E56A38" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#3B1C10" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0B0D13" stopOpacity="0" />
              </radialGradient>
              <mask id="crescentMask">
                <circle cx="250" cy="250" r="210" fill="white" />
                <circle cx="285" cy="275" r="200" fill="black" />
              </mask>
            </defs>
            <circle cx="250" cy="250" r="210" fill="url(#planetGlow)" mask="url(#crescentMask)" />
          </svg>

          {/* Solitary Cliff Wanderer Silhouette */}
          <svg
            className="absolute right-[22%] bottom-0 w-[240px] h-[130px] opacity-90 pointer-events-none"
            viewBox="0 0 240 130"
            fill="#07080B"
          >
            {/* Craggy Mountain Ridge */}
            <path d="M0 130 Q40 90 90 85 Q140 80 180 100 Q210 115 240 130 Z" />
            {/* Seated Cloaked Silhouette */}
            <circle cx="120" cy="55" r="7" fill="#07080B" />
            <path d="M112 62 Q120 60 128 62 L132 82 Q120 85 110 82 Z" fill="#07080B" />
          </svg>

          {/* Ambient Warm Horizon Glow */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090B10] via-[#090B10]/70 to-transparent" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between min-h-[220px] space-y-6">
          {/* Top Row: Greeting & Digital Clock Telemetry */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1.5 max-w-lg">
              <h1 className="text-3xl md:text-4xl font-serif text-white tracking-tight">
                {timeGreeting},{' '}
                <span className="text-[#E56A38] font-bold drop-shadow-[0_0_15px_rgba(229,106,56,0.5)]">
                  {settings.journalOwnerName || 'Azan'}.
                </span>
              </h1>
              <p className="text-xs font-mono text-zinc-400 tracking-wide flex items-center gap-2">
                <span className="text-[#E56A38]">✦</span>
                <span>Discipline today. Freedom tomorrow. —</span>
              </p>
            </div>

            {/* Time & Quick System Icons */}
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
                  onClick={() => sound.playLoudChime()}
                  className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] flex items-center justify-center text-amber-300 transition-colors"
                  title="Test Sound"
                >
                  <Sun size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsMusicDrawerOpen(true)}
                  className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                  title="Music Hub"
                >
                  <Bell size={14} />
                </button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#E56A38] to-[#9A3412] border border-[#E56A38]/50 flex items-center justify-center text-white text-xs font-serif font-bold shadow-[0_0_12px_rgba(229,106,56,0.3)]">
                  A
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: "How do you feel today?" Mood Pills */}
          <div className="pt-2 space-y-2">
            <span className="text-xs font-sans text-zinc-400 font-medium block">
              How do you feel today?
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {VIBES.map((v) => {
                const isSelected = selectedVibe === v.label;
                const IconComponent = v.icon;
                return (
                  <button
                    key={v.label}
                    type="button"
                    onClick={() => handleVibeClick(v.label)}
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
            {/* Hydration */}
            <div
              onClick={handleIncrementWater}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleIncrementWater(); }}
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
                    strokeDashoffset={138 * (1 - Math.min(1, (waterGlasses || 6) / 8))}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <Droplets size={13} className="text-[#38BDF8] absolute group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-xs font-mono font-bold text-white">{Math.round(((waterGlasses || 6) / 8) * 100)}%</span>
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
              <span className="text-xs font-mono font-bold text-white">7h 42m</span>
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
                    strokeDashoffset={138 * (1 - 0.72)}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <Footprints size={13} className="text-[#34D399] absolute" />
              </div>
              <span className="text-xs font-mono font-bold text-white">72%</span>
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
              {formatTimer(studyTimerElapsed)}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleToggleTimer}
                className="w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.1] flex items-center justify-center text-white transition-all shadow-sm"
              >
                {studyTimer.isRunning ? <Pause size={13} /> : <Play size={13} fill="currentColor" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.strike();
                  resetStudyTimer();
                }}
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              >
                <RotateCcw size={12} />
              </button>
            </div>
          </div>

          {/* Subject Dropdown & Mini EQ Waves */}
          <div className="flex items-center justify-between pt-1">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSubjectDropdownOpen(!isSubjectDropdownOpen)}
                className="text-xs font-sans text-zinc-400 hover:text-white flex items-center gap-1"
              >
                <span>{selectedSubject}</span>
                <ChevronDown size={11} />
              </button>
              {isSubjectDropdownOpen && (
                <div className="absolute left-0 bottom-full mb-1 z-30 w-36 rounded-xl bg-[#111420] border border-white/[0.1] shadow-2xl p-1 space-y-0.5">
                  {SUBJECTS.map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => {
                        setSelectedSubject(sub);
                        updateStudyTimerMeta(sub, '');
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

          <div className="flex items-center justify-between">
            {/* Mini Amber Cells Matrix */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 28 }).map((_, i) => {
                const isHigh = i % 3 === 0;
                const isMed = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-sm transition-colors ${
                      isHigh
                        ? 'bg-[#E56A38] shadow-[0_0_6px_rgba(229,106,56,0.5)]'
                        : isMed
                        ? 'bg-[#E56A38]/50'
                        : 'bg-white/[0.05]'
                    }`}
                  />
                );
              })}
            </div>

            {/* Streak Number */}
            <div className="text-right pl-2">
              <div className="text-3xl font-mono font-bold text-white flex items-center justify-end gap-1">
                <span>48</span>
                <Flame size={18} className="text-[#E56A38]" />
              </div>
              <span className="text-[10px] text-zinc-500 font-sans block">Day Streak</span>
              <span className="text-[10px] text-emerald-400 font-mono font-semibold block">▲ +2 This Week</span>
            </div>
          </div>
        </section>

        {/* CARD 4: DAILY PROMISE */}
        <section className="p-5 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2 text-[#E56A38]">
              <Star size={14} className="fill-current text-[#E56A38]" />
              <h2 className="text-xs font-sans font-bold text-white tracking-wide">
                Daily Promise
              </h2>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-serif italic text-zinc-200 leading-snug">
              &ldquo;{dailyPromise?.text || 'Get 3 hours of deep study (Maths + Science).'}&rdquo;
            </p>
            <span className="text-[10px] font-mono text-zinc-500 block">
              — By 11:59 PM
            </span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1 pt-1">
            <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#E56A38] to-amber-400 rounded-full shadow-[0_0_8px_rgba(229,106,56,0.6)]"
                style={{ width: '66%' }}
              />
            </div>
            <div className="flex justify-end text-[10px] font-mono text-zinc-400">
              2 / 3
            </div>
          </div>
        </section>
      </div>

      {/* ================================================================ */}
      {/* 3. BENTO ROW 2: TODAY'S OVERVIEW, QUICK JOURNAL, UPCOMING         */}
      {/* ================================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* CARD 1: TODAY'S OVERVIEW (5 COLS) */}
        <section className="lg:col-span-5 p-6 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2 pb-1">
            <Sparkles size={14} className="text-[#E56A38]" />
            <h2 className="text-xs font-sans font-bold text-white tracking-wide">
              Today&apos;s Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Semicircular Arc Gauge */}
            <div className="flex flex-col items-center justify-center relative">
              <svg className="w-32 h-20" viewBox="0 0 120 70">
                <path
                  d="M 15 65 A 45 45 0 0 1 105 65"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M 15 65 A 45 45 0 0 1 105 65"
                  fill="none"
                  stroke="url(#arcGradient)"
                  strokeWidth="8"
                  strokeDasharray="141"
                  strokeDashoffset={141 * (1 - 0.82)}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EA580C" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-center -mt-6">
                <span className="text-2xl font-mono font-black text-white">82%</span>
                <span className="text-[10px] text-zinc-500 font-sans block">Overall Progress</span>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-2">
              <label
                onClick={() => toggleChecklistItem('water')}
                className="flex items-center gap-2.5 text-xs font-sans text-zinc-300 cursor-pointer"
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                    dailyChecklist.water ? 'bg-[#E56A38] text-white' : 'border border-zinc-600'
                  }`}
                >
                  {dailyChecklist.water && '✓'}
                </span>
                <span>Drink 2L Water</span>
              </label>

              <label
                onClick={() => toggleChecklistItem('study')}
                className="flex items-center gap-2.5 text-xs font-sans text-zinc-300 cursor-pointer"
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                    dailyChecklist.study ? 'bg-[#E56A38] text-white' : 'border border-zinc-600'
                  }`}
                >
                  {dailyChecklist.study && '✓'}
                </span>
                <span>Complete Study Goal</span>
              </label>

              <label
                onClick={() => toggleChecklistItem('nightly')}
                className="flex items-center gap-2.5 text-xs font-sans text-zinc-300 cursor-pointer"
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                    dailyChecklist.nightly ? 'bg-[#E56A38] text-white' : 'border border-zinc-600'
                  }`}
                >
                  {dailyChecklist.nightly && '✓'}
                </span>
                <span>Nightly Review</span>
              </label>

              <label
                onClick={() => toggleChecklistItem('workout')}
                className="flex items-center gap-2.5 text-xs font-sans text-zinc-400 cursor-pointer"
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                    dailyChecklist.workout ? 'bg-[#E56A38] text-white' : 'border border-zinc-600'
                  }`}
                >
                  {dailyChecklist.workout && '✓'}
                </span>
                <span>Workout</span>
              </label>

              <label
                onClick={() => toggleChecklistItem('reading')}
                className="flex items-center gap-2.5 text-xs font-sans text-zinc-400 cursor-pointer"
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                    dailyChecklist.reading ? 'bg-[#E56A38] text-white' : 'border border-zinc-600'
                  }`}
                >
                  {dailyChecklist.reading && '✓'}
                </span>
                <span>Read 20 Pages</span>
              </label>
            </div>
          </div>
        </section>

        {/* CARD 2: QUICK JOURNAL (4 COLS) */}
        <section className="lg:col-span-4 p-6 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center gap-2 pb-1">
            <PenTool size={14} className="text-[#E56A38]" />
            <h2 className="text-xs font-sans font-bold text-white tracking-wide">
              Quick Journal
            </h2>
          </div>

          <textarea
            rows={3}
            value={quickJournal}
            onChange={(e) => setQuickJournal(e.target.value)}
            onBlur={handleSaveJournalField}
            placeholder="What's on your mind? Thoughts, reflections, or breakthroughs..."
            className="w-full bg-black/30 border border-white/[0.06] rounded-2xl p-3.5 text-xs font-serif italic text-zinc-200 placeholder:text-zinc-600 leading-relaxed focus:outline-none focus:border-[#E56A38]/50 resize-none"
          />

          {/* Bottom Toolbar & Save CTA */}
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
              onClick={handleSaveJournalField}
              className="px-4 py-1.5 rounded-xl bg-[#E56A38] hover:bg-[#D9531E] text-white text-xs font-sans font-semibold shadow-[0_0_15px_rgba(229,106,56,0.4)] transition-all"
            >
              Save
            </button>
          </div>
        </section>

        {/* CARD 3: UPCOMING (3 COLS) */}
        <section className="lg:col-span-3 p-6 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <CalendarIcon size={14} className="text-[#E56A38]" />
              <h2 className="text-xs font-sans font-bold text-white tracking-wide">
                Upcoming
              </h2>
            </div>
            <button
              onClick={() => onNavigate('weekly-audit')}
              className="text-[11px] text-zinc-400 hover:text-white transition-colors"
            >
              View All →
            </button>
          </div>

          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E56A38]" />
                <span className="text-zinc-200">Weekly Audit</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">Sun, 2 Nov</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-zinc-200">Allen TalentX (if any)</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">Mon, 3 Nov</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-zinc-200">Exercise</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">Mon, 3 Nov</span>
            </div>
          </div>
        </section>
      </div>

      {/* ================================================================ */}
      {/* 4. BENTO ROW 3: LIFE AT A GLANCE, FOCUS AUDIO, LIFE AUDIT        */}
      {/* ================================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* CARD 1: YOUR LIFE AT A GLANCE (5 COLS) */}
        <section className="lg:col-span-5 p-6 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center gap-2 pb-1">
            <Compass size={14} className="text-[#E56A38]" />
            <h2 className="text-xs font-sans font-bold text-white tracking-wide">
              Your Life at a Glance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Hexagonal Radar/Spider Chart */}
            <div className="flex items-center justify-center">
              <svg className="w-36 h-36" viewBox="0 0 140 140">
                {/* Background Web Polygons */}
                <polygon
                  points="70,15 118,42 118,98 70,125 22,98 22,42"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
                <polygon
                  points="70,35 98,51 98,89 70,105 42,89 42,51"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
                {/* Active Alignment Area (Amber Glow) */}
                <polygon
                  points="70,22 110,46 104,92 70,115 30,92 34,48"
                  fill="rgba(229, 106, 56, 0.25)"
                  stroke="#E56A38"
                  strokeWidth="1.5"
                />
                {/* Labels */}
                <text x="70" y="10" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">
                  Career 9.0
                </text>
                <text x="126" y="42" textAnchor="start" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">
                  Health 8.5
                </text>
                <text x="126" y="98" textAnchor="start" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">
                  Relationships 8.0
                </text>
                <text x="70" y="136" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">
                  Finance 7.5
                </text>
                <text x="14" y="98" textAnchor="end" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">
                  Mind 7.5
                </text>
                <text x="14" y="42" textAnchor="end" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">
                  Environment 8.5
                </text>
              </svg>
            </div>

            {/* Solitary Mountain Alignment Card */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] text-center space-y-2">
              <p className="text-xs font-serif text-zinc-200 leading-snug">
                You&apos;re <span className="text-[#E56A38] font-bold">82% aligned</span> with your ideal self.
              </p>
              <p className="text-[11px] font-sans text-zinc-500 italic">
                Keep going.
              </p>
              <div className="w-8 h-0.5 bg-[#E56A38]/60 mx-auto rounded-full" />
            </div>
          </div>
        </section>

        {/* CARD 2: FOCUS AUDIO PLAYER (4 COLS) */}
        <section className="lg:col-span-4 p-6 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <Headphones size={14} className="text-[#E56A38]" />
              <h2 className="text-xs font-sans font-bold text-white tracking-wide">
                Focus Audio
              </h2>
            </div>
            <button
              onClick={() => setIsMusicDrawerOpen(true)}
              className="text-[11px] text-zinc-400 hover:text-white transition-colors"
            >
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
            {/* Track Album Card & Playback Controls */}
            <div className="space-y-2.5">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/[0.1] bg-black">
                {/* Cosmic Galaxy Graphic */}
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 50% 50%, rgba(229,106,56,0.4), rgba(7,8,13,0.9) 70%), url("https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=400&auto=format&fit=crop")',
                  }}
                />
              </div>

              <div>
                <p className="text-xs font-sans font-bold text-white truncate">
                  {AUDIO_TRACKS[activeTrackIndex].name}
                </p>
                <p className="text-[10px] text-zinc-500 font-mono">
                  Focus • {AUDIO_TRACKS[activeTrackIndex].duration}
                </p>
              </div>

              {/* Scrubber & Controls */}
              <div className="space-y-1.5">
                <div className="w-full h-1 bg-white/[0.08] rounded-full overflow-hidden">
                  <div className="w-2/5 h-full bg-[#E56A38] rounded-full shadow-[0_0_8px_rgba(229,106,56,0.6)]" />
                </div>
                <div className="flex items-center justify-center gap-3 pt-0.5 text-zinc-400">
                  <button
                    type="button"
                    onClick={() => setActiveTrackIndex((prev) => (prev > 0 ? prev - 1 : AUDIO_TRACKS.length - 1))}
                    className="hover:text-white transition-colors"
                  >
                    <SkipBack size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      sound.tick();
                      setIsPlayingAudio(!isPlayingAudio);
                    }}
                    className="w-7 h-7 rounded-full bg-[#E56A38] hover:bg-[#D9531E] text-white flex items-center justify-center transition-all shadow-md"
                  >
                    {isPlayingAudio ? <Pause size={12} /> : <Play size={12} fill="currentColor" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTrackIndex((prev) => (prev < AUDIO_TRACKS.length - 1 ? prev + 1 : 0))}
                    className="hover:text-white transition-colors"
                  >
                    <SkipForward size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Radio Track Selector */}
            <div className="space-y-1.5 text-xs font-sans">
              {AUDIO_TRACKS.map((t, idx) => {
                const isActive = activeTrackIndex === idx;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelectTrack(idx)}
                    className={`w-full text-left flex items-center gap-2 py-1 px-1.5 rounded-lg transition-colors ${
                      isActive
                        ? 'text-[#E56A38] font-bold bg-[#E56A38]/10'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? 'bg-[#E56A38] shadow-[0_0_6px_rgba(229,106,56,0.8)]' : 'border border-zinc-600'
                      }`}
                    />
                    <span className="truncate">{t.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* CARD 3: LIFE AUDIT PROGRESS (3 COLS) */}
        <section className="lg:col-span-3 p-6 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center gap-2 pb-1">
            <CalendarIcon size={14} className="text-[#E56A38]" />
            <h2 className="text-xs font-sans font-bold text-white tracking-wide">
              Life Audit Progress
            </h2>
          </div>

          {/* Donut Progress Meter */}
          <div className="flex flex-col items-center justify-center py-2">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle cx="48" cy="48" r="38" stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="none" />
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
                  style={{ filter: 'drop-shadow(0 0 6px rgba(229, 106, 56, 0.45))' }}
                />
              </svg>
              <div className="text-center absolute">
                <span className="text-2xl font-mono font-bold text-white">76%</span>
              </div>
            </div>
            <span className="text-[10px] font-sans text-zinc-500 mt-2">
              Next Review: End of Month
            </span>
          </div>
        </section>
      </div>

      {/* ================================================================ */}
      {/* 5. FOOTER BANNER                                                 */}
      {/* ================================================================ */}
      <footer className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-serif text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="text-[#E56A38]">✦</span>
          <span>&ldquo;A disciplined mind builds a free life.&rdquo;</span>
        </div>
        <div className="text-[11px] font-sans text-zinc-600 tracking-wider">
          Plan &nbsp;•&nbsp; Execute &nbsp;•&nbsp; Reflect &nbsp;•&nbsp; Improve
        </div>
      </footer>
    </div>
  );
};
