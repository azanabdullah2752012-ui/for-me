import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Check, 
  Trash2, 
  Plus, 
  Sparkles, 
  BookOpen, 
  Flame, 
  Scroll, 
  Music, 
  Settings as SettingsIcon,
  RotateCcw
} from 'lucide-react';

export const SubViews: React.FC = () => {
  const { 
    activeTab, 
    profile, 
    setProfile, 
    habits, 
    toggleHabit, 
    addHabit, 
    deleteHabit,
    journalEntries, 
    audioStations, 
    activeStationId, 
    setActiveStationId,
    customAudioUrl,
    setCustomAudioUrl,
    loadCustomAudioUrl,
    lifeDimensions,
    updateDimension
  } = useData();

  const [newHabit, setNewHabit] = useState('');
  const [tempName, setTempName] = useState(profile.name);
  const [tempMotto, setTempMotto] = useState(profile.motto);

  // 1. Habit Matrix / Daily Tracker View
  if (activeTab === 'tracker' || activeTab === 'habits') {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return (
      <div className="space-y-6 pb-8">
        <div className="border-b border-white/[0.08] pb-4">
          <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
            Tactile Habit Matrix
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Weekly physical habit ledger. Check off your daily non-negotiables.
          </p>
        </div>

        {/* Add Habit */}
        <div className="flex gap-2 max-w-md">
          <input
            type="text"
            placeholder="Add new discipline/habit..."
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            className="flex-1 bg-white/[0.04] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500"
          />
          <button
            onClick={() => {
              if (newHabit.trim()) {
                addHabit(newHabit);
                setNewHabit('');
              }
            }}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>

        {/* Matrix Table */}
        <div className="bg-[#0f1118] border border-white/[0.08] rounded-2xl overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/[0.06] text-zinc-400 font-serif">
                <th className="py-3 px-4 font-normal">Habit / Ritual</th>
                <th className="py-3 px-3 font-normal text-center">Streak</th>
                {days.map((d, i) => (
                  <th key={d} className={`py-3 px-3 font-normal text-center ${i === 5 ? 'text-amber-400' : ''}`}>
                    {d}
                  </th>
                ))}
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {habits.map((h) => (
                <tr key={h.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-sans text-zinc-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span>{h.name}</span>
                  </td>
                  <td className="py-3.5 px-3 text-center font-mono text-orange-400">
                    {h.streak}d 🔥
                  </td>
                  {days.map((_, dayIdx) => {
                    const isChecked = dayIdx === 5 ? h.completed : dayIdx < 5;
                    return (
                      <td key={dayIdx} className="py-3.5 px-3 text-center">
                        <button
                          onClick={() => dayIdx === 5 && toggleHabit(h.id)}
                          className={`w-6 h-6 rounded-lg border inline-flex items-center justify-center transition-all ${
                            isChecked
                              ? 'bg-orange-500/20 border-orange-500 text-orange-400'
                              : 'border-white/[0.1] bg-white/[0.02] hover:border-white/[0.3]'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </button>
                      </td>
                    );
                  })}
                  <td className="py-3.5 px-3 text-right">
                    <button
                      onClick={() => deleteHabit(h.id)}
                      className="text-zinc-600 hover:text-red-400 transition-colors p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 2. Studies View
  if (activeTab === 'studies') {
    return (
      <div className="space-y-6 pb-8">
        <div className="border-b border-white/[0.08] pb-4">
          <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
            Academic Mastery & Study Vault
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Deep work tracking, revision logs, and subject telemetry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/[0.08]">
            <BookOpen className="w-5 h-5 text-orange-400 mb-2" />
            <h3 className="text-sm font-semibold text-white">Mathematics</h3>
            <p className="text-xs text-zinc-400 mt-1">Calculus & Complex Numbers</p>
            <div className="mt-4 text-2xl font-serif font-bold text-orange-400">18.5 hrs</div>
            <p className="text-[10px] text-zinc-500">logged this week</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/[0.08]">
            <Sparkles className="w-5 h-5 text-sky-400 mb-2" />
            <h3 className="text-sm font-semibold text-white">Physics</h3>
            <p className="text-xs text-zinc-400 mt-1">Mechanics & Electromagnetism</p>
            <div className="mt-4 text-2xl font-serif font-bold text-sky-400">12.0 hrs</div>
            <p className="text-[10px] text-zinc-500">logged this week</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/[0.08]">
            <Flame className="w-5 h-5 text-emerald-400 mb-2" />
            <h3 className="text-sm font-semibold text-white">Computer Science</h3>
            <p className="text-xs text-zinc-400 mt-1">Algorithms & Web Engineering</p>
            <div className="mt-4 text-2xl font-serif font-bold text-emerald-400">15.2 hrs</div>
            <p className="text-[10px] text-zinc-500">logged this week</p>
          </div>
        </div>
      </div>
    );
  }

  // 3. Reflections / Journal Archive
  if (activeTab === 'reflections') {
    return (
      <div className="space-y-6 pb-8">
        <div className="border-b border-white/[0.08] pb-4">
          <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
            Reflections & Thought Sanctuary
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Recorded memories, breakthroughs, and philosophical notes.
          </p>
        </div>

        <div className="space-y-4">
          {journalEntries.map((entry) => (
            <div key={entry.id} className="p-5 rounded-2xl bg-[#0f1118] border border-white/[0.08]">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                <span className="font-mono">{entry.timestamp}</span>
                {entry.mood && (
                  <span className="px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 font-medium text-[10px]">
                    {entry.mood}
                  </span>
                )}
              </div>
              <p className="text-sm font-serif italic text-zinc-200 leading-relaxed">
                "{entry.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 4. Music Studio
  if (activeTab === 'music') {
    return (
      <div className="space-y-6 pb-8">
        <div className="border-b border-white/[0.08] pb-4">
          <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
            Background Audio Sanctuary
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            YouTube and Spotify focus streams playing in the background without interruptions.
          </p>
        </div>

        {/* Custom URL Input */}
        <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/[0.08] max-w-xl">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
            Load Custom YouTube or Spotify Link
          </h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. https://www.youtube.com/watch?v=... or Spotify link"
              value={customAudioUrl}
              onChange={(e) => setCustomAudioUrl(e.target.value)}
              className="flex-1 bg-white/[0.04] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500"
            />
            <button
              onClick={() => {
                if (customAudioUrl.trim()) loadCustomAudioUrl(customAudioUrl);
              }}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-semibold"
            >
              Play
            </button>
          </div>
        </div>

        {/* Station cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {audioStations.map((station) => (
            <div
              key={station.id}
              onClick={() => setActiveStationId(station.id)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                activeStationId === station.id
                  ? 'bg-orange-500/10 border-orange-500 shadow-amber-glow'
                  : 'bg-[#0f1118] border-white/[0.08] hover:border-white/[0.2]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">
                  {station.type.toUpperCase()}
                </span>
                <Music className="w-4 h-4 text-zinc-500" />
              </div>
              <h4 className="text-sm font-semibold text-white">{station.name}</h4>
              <p className="text-xs text-zinc-400 mt-1">{station.genre}</p>
              <p className="text-[10px] text-zinc-500 font-mono mt-2">{station.duration}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 5. Manifesto View
  if (activeTab === 'manifesto') {
    return (
      <div className="space-y-6 pb-8 max-w-2xl">
        <div className="border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2 text-orange-400 mb-1">
            <Scroll className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest font-semibold">Creed</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-white tracking-wide">
            The Personal Manifesto
          </h2>
        </div>

        <div className="space-y-6 text-zinc-300 font-serif text-sm leading-relaxed">
          <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/[0.08]">
            <h3 className="text-white font-serif text-lg font-bold mb-2">I. The Law of Relentless Focus</h3>
            <p>
              "Distraction is the thief of potential. When you sit before your craft, eliminate the noise. Give yourself completely to the hour."
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/[0.08]">
            <h3 className="text-white font-serif text-lg font-bold mb-2">II. Physical Sanctuary</h3>
            <p>
              "The mind cannot triumph while the vessel deteriorates. Drink pure water, protect your sleep, and move daily."
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/[0.08]">
            <h3 className="text-white font-serif text-lg font-bold mb-2">III. Radical Ownership</h3>
            <p>
              "Discipline today. Freedom tomorrow. No excuses, no self-pity, only execution."
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 6. Life Audit / Dimensions
  if (activeTab === 'life_audit') {
    const dims: (keyof typeof lifeDimensions)[] = [
      'career',
      'health',
      'relationships',
      'finance',
      'mind',
      'environment',
    ];
    return (
      <div className="space-y-6 pb-8 max-w-xl">
        <div className="border-b border-white/[0.08] pb-4">
          <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
            Comprehensive Life Audit
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Calibrate each of your 6 life dimensions (0 to 10 scale).
          </p>
        </div>

        <div className="space-y-4">
          {dims.map((d) => (
            <div key={d} className="p-4 rounded-xl bg-[#0f1118] border border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-sm font-semibold capitalize text-white">{d}</span>
                <span className="text-xs text-zinc-500 ml-2">Score: {lifeDimensions[d].toFixed(1)} / 10</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={lifeDimensions[d]}
                onChange={(e) => updateDimension(d, parseFloat(e.target.value))}
                className="w-36 accent-orange-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 7. Settings View
  return (
    <div className="space-y-6 pb-8 max-w-xl">
      <div className="border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-2 text-orange-400 mb-1">
          <SettingsIcon className="w-5 h-5" />
          <span className="text-xs uppercase tracking-widest font-semibold">Preferences</span>
        </div>
        <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
          Settings & Profile
        </h2>
      </div>

      <div className="space-y-4">
        <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/[0.08] space-y-4">
          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
              Your Display Name
            </label>
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
              Personal Motto / Subtitle
            </label>
            <input
              type="text"
              value={tempMotto}
              onChange={(e) => setTempMotto(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          <button
            onClick={() => {
              setProfile((prev) => ({
                ...prev,
                name: tempName.trim() || 'Kaiser',
                motto: tempMotto.trim() || 'Discipline today. Freedom tomorrow.',
              }));
              alert('Profile updated successfully!');
            }}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-semibold"
          >
            Save Changes
          </button>
        </div>

        <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/[0.08] flex items-center justify-between">
          <div>
            <h4 className="text-xs font-semibold text-white">Reset All Ledger Data</h4>
            <p className="text-[11px] text-zinc-400">Restore factory defaults and clean state</p>
          </div>
          <button
            onClick={() => {
              if (confirm('Are you sure you want to reset all data to default?')) {
                localStorage.removeItem('for_me_ledger_state_v2');
                window.location.reload();
              }
            }}
            className="px-3 py-1.5 border border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-xl text-xs flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>
      </div>
    </div>
  );
};
