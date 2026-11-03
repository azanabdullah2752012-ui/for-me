import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Bell, 
  Moon, 
  Target, 
  Brain, 
  Zap, 
  Waves, 
  Palette, 
  BatteryCharging 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { MoodType } from '../../types';

export const HeaderHero: React.FC = () => {
  const { profile, currentMood, setCurrentMood } = useData();
  const [timeStr, setTimeStr] = useState<string>('07:24 AM');
  const [dateStr, setDateStr] = useState<string>('Sat, Nov 1, 2026');
  const [notificationCount] = useState<number>(2);
  const [showNotificationPopup, setShowNotificationPopup] = useState<boolean>(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Format time e.g., 07:24 AM
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      setTimeStr(`${formattedHours}:${formattedMinutes} ${ampm}`);

      // Format date e.g., Sat, Nov 1, 2026
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      setDateStr(`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const moods: { id: MoodType; label: string; icon: React.ElementType }[] = [
    { id: 'locked_in', label: 'Locked In', icon: Target },
    { id: 'deep_focus', label: 'Deep Focus', icon: Brain },
    { id: 'energized', label: 'Energized', icon: Zap },
    { id: 'calm_flow', label: 'Calm & Flow', icon: Waves },
    { id: 'creative', label: 'Creative', icon: Palette },
    { id: 'recharging', label: 'Recharging', icon: BatteryCharging },
  ];

  return (
    <header className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0b0c11] mb-6 shadow-2xl">
      {/* Cinematic Cosmic Backdrop matching the screenshot */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep starry space gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080c] via-[#0d0f17]/90 to-[#14101a]/70" />
        
        {/* Cosmic crescent planet and starry sky SVG illustration */}
        <svg
          className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-85 select-none"
          viewBox="0 0 800 350"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="planetGlow" cx="60%" cy="20%" r="65%" fx="60%" fy="20%">
              <stop offset="0%" stopColor="#ff7b47" stopOpacity="0.45" />
              <stop offset="45%" stopColor="#cf4b22" stopOpacity="0.2" />
              <stop offset="85%" stopColor="#0b0c11" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="nebulaAura" cx="80%" cy="60%" r="50%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.15" />
              <stop offset="70%" stopColor="#0b0c11" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="horizonGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ff6224" stopOpacity="0" />
              <stop offset="50%" stopColor="#ff7e47" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Distant stars */}
          <g opacity="0.7">
            <circle cx="150" cy="40" r="1" fill="#ffffff" />
            <circle cx="280" cy="90" r="1.5" fill="#fde68a" />
            <circle cx="340" cy="30" r="1" fill="#ffffff" />
            <circle cx="490" cy="70" r="1" fill="#ffffff" />
            <circle cx="560" cy="40" r="1.5" fill="#ffffff" />
            <circle cx="680" cy="95" r="1" fill="#fde68a" />
            <circle cx="720" cy="45" r="1" fill="#ffffff" />
            <circle cx="420" cy="120" r="0.8" fill="#ffffff" />
            <circle cx="610" cy="140" r="1.2" fill="#ffffff" />
            <circle cx="750" cy="180" r="1" fill="#ffffff" />
          </g>

          {/* Cosmic Nebula Glow */}
          <ellipse cx="640" cy="120" rx="260" ry="160" fill="url(#nebulaAura)" />
          
          {/* Giant Crescent Planet Rim */}
          <circle cx="620" cy="-40" r="230" fill="url(#planetGlow)" />
          <path
            d="M400,0 C490,140 680,180 850,110"
            stroke="#ff9466"
            strokeWidth="2.5"
            strokeOpacity="0.75"
            fill="none"
          />
          <path
            d="M395,-2 C485,142 682,183 852,112"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.9"
            fill="none"
          />

          {/* Mountains & Cliff Silhouette */}
          <path
            d="M100,350 L250,280 L390,320 L520,260 L620,290 L720,250 L800,280 L800,350 Z"
            fill="#08090d"
          />
          <path
            d="M320,350 L480,240 L530,225 L580,245 L670,350 Z"
            fill="#050608"
          />

          {/* Person silhouette sitting on cliff contemplating universe */}
          <g transform="translate(515, 200) scale(0.65)" fill="#020304">
            {/* Head */}
            <circle cx="20" cy="8" r="5" />
            {/* Torso & Cloak */}
            <path d="M12,14 C12,14 18,13 25,14 C27,18 29,26 31,34 L10,34 C11,28 12,20 12,14 Z" />
            {/* Knees up */}
            <path d="M28,26 L36,29 L38,36 L30,36 Z" />
          </g>

          {/* Horizon Warm Atmosphere Light */}
          <rect x="0" y="270" width="800" height="80" fill="url(#horizonGlow)" />
        </svg>

        {/* Ambient Dark Overlay to ensure WCAG typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-8 pt-7 pb-6">
        {/* Top Row: Greeting & Clock */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-white leading-tight">
              Good Morning,{' '}
              <span className="text-[#ff7438] font-serif italic tracking-wide font-medium">
                {profile.name}.
              </span>
            </h2>
            <p className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 font-serif tracking-wider mt-1.5 opacity-90">
              <span className="text-amber-500 font-bold">+</span>
              <span>{profile.motto}</span>
              <span className="text-zinc-500">—</span>
            </p>
          </div>

          {/* Date, Time & Top Actions */}
          <div className="flex items-center gap-6 self-start md:self-auto">
            <div className="text-right">
              <div className="text-xs text-zinc-400 font-sans tracking-wide">
                {dateStr}
              </div>
              <div className="text-2xl sm:text-3xl font-light font-sans tracking-tight text-white flex items-baseline justify-end gap-1.5">
                <span>{timeStr.split(' ')[0]}</span>
                <span className="text-xs font-semibold text-zinc-400 tracking-wider">
                  {timeStr.split(' ')[1]}
                </span>
              </div>
            </div>

            {/* Quick Action Icons */}
            <div className="flex items-center gap-2 pl-2 border-l border-white/[0.08]">
              <button 
                title="Atmosphere illumination"
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-amber-300 transition-colors"
              >
                <Sun className="w-4 h-4" />
              </button>

              <div className="relative">
                <button 
                  onClick={() => setShowNotificationPopup(!showNotificationPopup)}
                  title="Notifications"
                  className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-amber-300 transition-colors relative"
                >
                  <Bell className="w-4 h-4" />
                  {notificationCount > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-orange-500 ring-2 ring-[#0c0d12]" />
                  )}
                </button>

                {showNotificationPopup && (
                  <div className="absolute right-0 mt-2 w-64 p-3 bg-[#12141c] border border-white/[0.1] rounded-xl shadow-2xl z-30 text-xs">
                    <p className="font-semibold text-white mb-1.5">Daily Briefing</p>
                    <p className="text-zinc-300 mb-2">• 3 hours study promise target</p>
                    <p className="text-zinc-300">• Weekly audit scheduled for tomorrow</p>
                    <button 
                      onClick={() => setShowNotificationPopup(false)}
                      className="mt-2 w-full py-1 bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 rounded text-[11px]"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
              </div>

              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500/30 to-purple-500/20 border border-white/[0.12] flex items-center justify-center text-amber-200 shadow-inner">
                <Moon className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Mood Selector: "How do you feel today?" */}
        <div className="pt-2">
          <p className="text-xs font-sans text-zinc-400 mb-3 tracking-wide">
            How do you feel today?
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {moods.map((m) => {
              const Icon = m.icon;
              const isSelected = currentMood === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setCurrentMood(m.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                    isSelected
                      ? 'bg-gradient-to-r from-orange-500/20 to-amber-600/20 border-orange-500/70 text-amber-200 shadow-amber-glow'
                      : 'bg-black/40 hover:bg-white/[0.05] border-white/[0.08] text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-orange-400' : 'text-zinc-400'}`} />
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
