import React, { useState } from 'react';
import {
  Settings,
  Download,
  Upload,
  Volume2,
  VolumeX,
  Palette,
  HardDrive,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  Sun,
  Moon,
  User,
  Sliders,
  Check,
  Type,
} from 'lucide-react';
import { AccentColor, ThemeMode, FontFamilyOption } from '../types';
import { useData } from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

export const SettingsView: React.FC = () => {
  const {
    settings,
    updateSettings,
    exportDataJSON,
    importDataJSON,
    clearAllDataToBlank,
    habits,
    promises,
    studySessions,
    dailyLogs,
  } = useData();

  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [clearBlankConfirmOpen, setClearBlankConfirmOpen] = useState(false);

  // Personalization form
  const [ownerName, setOwnerName] = useState(settings.journalOwnerName || 'Me');
  const [personalReminder, setPersonalReminder] = useState(
    settings.personalReminder || 'Remember, you are here for you.'
  );
  const [personalQuote, setPersonalQuote] = useState(
    settings.personalQuote || 'Every act of discipline is an act of self-respect.'
  );
  const [savedPersonal, setSavedPersonal] = useState(false);

  const accentOptions: { id: AccentColor; label: string; colorHex: string; desc: string }[] = [
    { id: 'forest', label: 'Deep Forest Green', colorHex: '#244234', desc: 'Primary editorial accent: growth & quiet discipline' },
    { id: 'olive', label: 'Muted Olive', colorHex: '#3F4E3C', desc: 'Stoic earthy green: calm reflection' },
    { id: 'amber', label: 'Restrained Amber', colorHex: '#92400E', desc: 'Warm brass & historical gold highlights' },
    { id: 'ink', label: 'Dark Charcoal Ink', colorHex: '#1F1D1A', desc: 'Monochrome minimalist book ink' },
    { id: 'terracotta', label: 'Muted Terracotta', colorHex: '#8A3A2B', desc: 'Warm oxidized clay & high urgency' },
  ];

  const handleExport = () => {
    sound.success();
    const dataStr = exportDataJSON();
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FOR-ME-journal-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importDataJSON(content);
      if (success) {
        setImportStatus('Journal backup restored successfully!');
      } else {
        setImportStatus('Invalid JSON backup structure.');
      }
      setTimeout(() => setImportStatus(null), 3500);
    };
    reader.readAsText(file);
  };

  const handleSavePersonalization = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      journalOwnerName: ownerName.trim() || 'Me',
      personalReminder: personalReminder.trim(),
      personalQuote: personalQuote.trim(),
    });
    sound.complete();
    setSavedPersonal(true);
    setTimeout(() => setSavedPersonal(false), 2500);
  };

  const handleClearBlank = () => {
    clearAllDataToBlank();
    setClearBlankConfirmOpen(false);
  };

  const loggedDaysCount = Object.keys(dailyLogs).length;

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16">
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Journal Settings &amp; Personalization"
        subtitle="Customize your journal space, theme aesthetics, acoustic feedback, and sovereign local backups."
        kicker="SETTINGS • SOVEREIGN DATA"
        badgeLines={['LOCAL SOVEREIGNTY.', 'ZERO CLOUD LEAK.', 'COMPLETE OWNERSHIP.']}
      />

      {/* 2. RESTRAINED METRICS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
              Storage Architecture
            </span>
            <p className="text-xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              100% Client-Side
            </p>
          </div>
          <div className="pt-3 border-t border-paper-border mt-3 text-[11px] font-sans text-paper-muted">
            Browser LocalStorage
          </div>
        </div>

        <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
              Journal Entries
            </span>
            <p className="text-xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {loggedDaysCount} <span className="text-sm font-sans text-paper-muted font-normal">days logged</span>
            </p>
          </div>
          <div className="pt-3 border-t border-paper-border mt-3 text-[11px] font-sans text-paper-muted">
            {habits.length + promises.length} active trackers
          </div>
        </div>

        <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
              Theme Mode
            </span>
            <p className="text-xl font-heading font-bold tracking-tight text-paper-ink mt-1 capitalize">
              {settings.themeMode === 'parchment' ? 'Warm Parchment' : 'Cosmic Sanctuary'}
            </p>
          </div>
          <div className="pt-3 border-t border-paper-border mt-3 text-[11px] font-sans text-paper-muted">
            {settings.themeMode === 'parchment' ? 'Warm paper journal aesthetic' : 'Midnight space & starlight'}
          </div>
        </div>

        <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
              Acoustic Chimes
            </span>
            <p className="text-xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {settings.soundEffects ? 'Active' : 'Muted'}
            </p>
          </div>
          <div className="pt-3 border-t border-paper-border mt-3 text-[11px] font-sans text-paper-muted">
            Synthesized Web Audio haptics
          </div>
        </div>
      </div>

      {/* 3. PERSONALIZATION & IDENTITY FORM */}
      <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-paper-border">
          <div className="flex items-center gap-2">
            <User size={16} className="text-accent" />
            <h3 className="text-base font-heading font-semibold text-paper-ink">
              Journal Personalization &amp; Identity
            </h3>
          </div>
          {savedPersonal && (
            <span className="text-xs font-sans text-accent flex items-center gap-1">
              <Check size={13} />
              Personalization saved
            </span>
          )}
        </div>

        <form onSubmit={handleSavePersonalization} className="space-y-4 text-xs font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-sans uppercase tracking-wider text-paper-muted mb-1">
                Your Name / Monogram
              </label>
              <input
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                placeholder="e.g. Azan"
                className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
              />
              <span className="text-[10px] text-paper-muted mt-1 block">
                Displayed in your daily greeting and journal header.
              </span>
            </div>

            <div>
              <label className="block text-[11px] font-sans uppercase tracking-wider text-paper-muted mb-1">
                Personal Philosophy Reminder
              </label>
              <input
                type="text"
                value={personalReminder}
                onChange={(e) => setPersonalReminder(e.target.value)}
                placeholder="e.g. Remember, you are here for you."
                className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
              />
              <span className="text-[10px] text-paper-muted mt-1 block">
                Shown prominently at the top of your journal dashboard.
              </span>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-sans uppercase tracking-wider text-paper-muted mb-1">
              Guiding Quote
            </label>
            <input
              type="text"
              value={personalQuote}
              onChange={(e) => setPersonalQuote(e.target.value)}
              placeholder="e.g. Every act of discipline is an act of self-respect."
              className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          <div className="flex justify-end pt-1">
            <Button variant="primary" size="sm" type="submit" className="text-xs font-sans">
              Save Personalization
            </Button>
          </div>
        </form>
      </div>

      {/* 4. TYPOGRAPHY & FONT SYSTEM */}
      <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-paper-border">
          <div className="flex items-center gap-2">
            <Type size={16} className="text-accent" />
            <h3 className="text-base font-heading font-semibold text-paper-ink">
              Typography &amp; Typeface Pairing
            </h3>
          </div>
          <Badge variant="neutral">
            {settings.fontFamily || 'plus-jakarta'}
          </Badge>
        </div>

        <p className="text-xs text-paper-muted font-sans leading-relaxed">
          Select your preferred typography. The default <strong>Plus Jakarta Sans</strong> and <strong>Inter</strong> provide razor-sharp modern clarity with zero distracting flourishes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'plus-jakarta' as FontFamilyOption,
              label: 'Plus Jakarta Sans',
              badge: 'Recommended',
              sample: 'Aa Bb Gg 123',
              desc: 'Crisp geometric modern sans. Matches sleek, executive life tracking.',
            },
            {
              id: 'inter' as FontFamilyOption,
              label: 'Inter Precision',
              badge: 'Tech Minimal',
              sample: 'Aa Bb Gg 123',
              desc: 'Razor-sharp neo-grotesque sans. Standard for modern high-performance tools.',
            },
            {
              id: 'outfit' as FontFamilyOption,
              label: 'Outfit Geometric',
              badge: 'Architectural',
              sample: 'Aa Bb Gg 123',
              desc: 'Contemporary geometric display typography with bold proportions.',
            },
            {
              id: 'instrument-serif' as FontFamilyOption,
              label: 'Instrument Serif & Sans',
              badge: 'Modern Editorial',
              sample: 'Aa Bb Gg 123',
              desc: 'Sharp contemporary display serif for headlines with crisp sans body text.',
            },
            {
              id: 'newsreader' as FontFamilyOption,
              label: 'Newsreader Classic',
              badge: 'Traditional Book',
              sample: 'Aa Bb Gg 123',
              desc: 'Old-style literary serif with classic bookish elegance.',
            },
          ].map((opt) => {
            const isSelected = (settings.fontFamily || 'plus-jakarta') === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  sound.tick();
                  updateSettings({ fontFamily: opt.id });
                }}
                className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                  isSelected
                    ? 'bg-paper-elevated border-accent shadow-journal'
                    : 'bg-paper-surface border-paper-border hover:border-paper-muted/50 hover:bg-paper-hover/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-heading font-semibold text-xs text-paper-ink">
                      {opt.label}
                    </span>
                    <Badge variant={isSelected ? 'accent' : 'neutral'}>
                      {opt.badge}
                    </Badge>
                  </div>
                  <div className="py-2 text-lg text-paper-ink font-semibold tracking-tight border-y border-paper-border/50 my-2">
                    {opt.sample}
                  </div>
                  <p className="text-[11px] font-sans text-paper-muted leading-relaxed">
                    {opt.desc}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-end">
                  {isSelected ? (
                    <span className="text-xs text-accent font-medium flex items-center gap-1 font-sans">
                      <Check size={13} />
                      Active
                    </span>
                  ) : (
                    <span className="text-[11px] text-paper-muted hover:text-paper-ink font-sans">
                      Click to activate →
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. THEME & PALETTE SETTINGS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Theme Mode & Sound */}
        <div className="space-y-6">
          {/* Surface Theme Selection */}
          <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-paper-border">
              <h3 className="text-base font-heading font-semibold text-paper-ink">
                Journal Paper Surface
              </h3>
              <Badge variant="neutral">
                {settings.themeMode === 'dark' ? 'Dark Nocturne' : 'Warm Parchment'}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-sans">
              <button
                type="button"
                onClick={() => {
                  sound.tick();
                  updateSettings({ themeMode: 'dark' });
                }}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  settings.themeMode !== 'parchment'
                    ? 'bg-paper-elevated border-accent text-paper-ink shadow-journal'
                    : 'bg-paper-surface border-paper-border text-paper-muted hover:text-paper-ink'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Moon size={15} className="text-accent" />
                  <span className="font-semibold text-paper-ink">Cosmic Sanctuary</span>
                </div>
                <p className="text-[11px] text-paper-muted leading-relaxed">
                  Deep midnight space, starlight lavender, and living ambient stardust.
                </p>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.tick();
                  updateSettings({ themeMode: 'parchment' });
                }}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  settings.themeMode === 'parchment'
                    ? 'bg-paper-elevated border-accent text-paper-ink shadow-journal'
                    : 'bg-paper-surface border-paper-border text-paper-muted hover:text-paper-ink'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sun size={15} className="text-accent" />
                  <span className="font-semibold text-paper-ink">Warm Parchment</span>
                </div>
                <p className="text-[11px] text-paper-muted leading-relaxed">
                  Warm ivory and soft linen paper aesthetic. Calming and book-like.
                </p>
              </button>
            </div>
          </div>

          {/* Sound & Haptics */}
          <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-paper-border">
              <div className="flex items-center gap-2">
                {settings.soundEffects ? (
                  <Volume2 size={16} className="text-accent" />
                ) : (
                  <VolumeX size={16} className="text-paper-muted" />
                )}
                <h3 className="text-base font-heading font-semibold text-paper-ink">
                  Acoustic Feedback
                </h3>
              </div>
              <Badge variant={settings.soundEffects ? 'success' : 'neutral'}>
                {settings.soundEffects ? 'ENABLED' : 'MUTED'}
              </Badge>
            </div>

            <p className="text-xs text-paper-muted font-sans leading-relaxed">
              Synthesized Web Audio chimes upon ratifying promises and completing habits. Zero external audio downloads.
            </p>

            <div className="flex items-center justify-between pt-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => sound.complete()}
                disabled={!settings.soundEffects}
                className="text-xs font-sans"
              >
                Test Chime Sound
              </Button>

              <button
                type="button"
                onClick={() => {
                  const next = !settings.soundEffects;
                  updateSettings({ soundEffects: next });
                  if (next) sound.complete();
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium border transition-colors ${
                  settings.soundEffects
                    ? 'bg-accent text-white font-semibold'
                    : 'bg-paper-elevated text-paper-muted border-paper-border hover:text-paper-ink'
                }`}
              >
                {settings.soundEffects ? 'Disable Sound' : 'Enable Sound'}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Accent Color Palette */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-paper-border">
              <div className="flex items-center gap-2">
                <Palette size={16} className="text-accent" />
                <h3 className="text-base font-heading font-semibold text-paper-ink">
                  Accent Color
                </h3>
              </div>
              <Badge variant="accent">{settings.accentColor}</Badge>
            </div>

            <div className="space-y-2 text-xs font-sans">
              {accentOptions.map((opt) => {
                const isActive = settings.accentColor === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      sound.tick();
                      updateSettings({ accentColor: opt.id });
                    }}
                    className={`w-full p-3 rounded-lg border flex items-center justify-between transition-colors text-left ${
                      isActive
                        ? 'bg-paper-elevated border-accent text-paper-ink font-semibold shadow-journal'
                        : 'bg-paper-surface border-paper-border text-paper-muted hover:text-paper-ink hover:bg-paper-hover/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: opt.colorHex }}
                      />
                      <div>
                        <span className="font-semibold text-paper-ink block">{opt.label}</span>
                        <span className="text-[11px] text-paper-muted font-sans font-normal">{opt.desc}</span>
                      </div>
                    </div>

                    {isActive && <Check size={14} className="text-accent shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 5. BACKUP & SOVEREIGN DATA SECTION */}
      <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-paper-border">
          <div className="flex items-center gap-2">
            <HardDrive size={16} className="text-accent" />
            <h3 className="text-base font-heading font-semibold text-paper-ink">
              Backup &amp; Sovereign Data Portability
            </h3>
          </div>
          <Badge variant="neutral">Offline-First</Badge>
        </div>

        <p className="text-xs text-paper-muted font-sans leading-relaxed">
          Your life records, promises, and journal entries are stored strictly in your browser. Zero third-party telemetry, tracking scripts, or cloud exposure. Export an unencrypted JSON backup regularly.
        </p>

        {importStatus && (
          <div className="p-3 rounded-lg bg-paper-elevated border border-accent/40 text-xs font-sans text-accent">
            {importStatus}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            variant="primary"
            onClick={handleExport}
            className="flex items-center justify-center gap-2 text-xs font-sans"
          >
            <Download size={13} />
            <span>Export JSON Backup</span>
          </Button>

          <label className="cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-sans font-medium bg-paper-elevated hover:bg-paper-hover text-paper-ink border border-paper-border transition-colors">
            <Upload size={13} className="mr-2" />
            <span>Restore JSON Backup</span>
            <input
              type="file"
              accept=".json"
              onChange={handleImportFile}
              className="hidden"
            />
          </label>
        </div>

        {/* Database Wipe */}
        <div className="pt-4 border-t border-paper-border flex items-center justify-between">
          <div>
            <span className="text-xs font-sans font-medium text-paper-ink block">
              Clear Database to Clean Slate
            </span>
            <span className="text-[11px] text-paper-muted">
              Wipe all entries, habits, promises, and reviews for a fresh start
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setClearBlankConfirmOpen(true)}
            className="text-xs font-sans text-rose-700 dark:text-rose-400 hover:border-rose-500/40"
          >
            Wipe Database
          </Button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {clearBlankConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm"
            onClick={() => setClearBlankConfirmOpen(false)}
          />
          <div className="relative bg-paper-surface border border-rose-500/30 rounded-xl p-6 max-w-md w-full z-10 shadow-modal space-y-4">
            <div className="flex items-center gap-3 text-rose-700 dark:text-rose-400">
              <AlertTriangle size={22} />
              <h3 className="text-base font-heading font-semibold text-paper-ink">
                Wipe Database to Clean Slate
              </h3>
            </div>
            <p className="text-xs text-paper-secondary leading-relaxed font-sans">
              This will permanently delete all logged days, habit records, promises, and reflections. Your system will reset to a pristine blank slate. Export a JSON backup first if needed.
            </p>
            <div className="flex justify-end gap-2 pt-3 border-t border-paper-border">
              <Button variant="ghost" size="sm" onClick={() => setClearBlankConfirmOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" size="sm" onClick={handleClearBlank}>
                Yes, Wipe Database
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};