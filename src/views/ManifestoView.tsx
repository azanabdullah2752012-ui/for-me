import React, { useState } from 'react';
import {
  ScrollText,
  Shield,
  Sparkles,
  Save,
  CheckCircle2,
  AlertTriangle,
  Plus,
  Trash2,
  Flame,
  CheckSquare,
  Check,
} from 'lucide-react';
import { RealityCheckConfrontation } from '../types';
import { useData } from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

export const ManifestoView: React.FC = () => {
  const { manifesto, updateManifesto } = useData();

  const [activeTab, setActiveTab] = useState<'creed' | 'reality' | 'vision' | 'reminder'>('creed');

  // Creed & Rules state
  const [identityText, setIdentityText] = useState(manifesto.identityStatement);
  const [creedList, setCreedList] = useState(manifesto.coreCreed.join('\n'));
  const [operatingRules, setOperatingRules] = useState(manifesto.operatingRules);

  // Reality Check state
  const [realityCheckItems, setRealityCheckItems] = useState<RealityCheckConfrontation[]>(
    manifesto.realityCheck || []
  );
  const [newHabit, setNewHabit] = useState('');
  const [newExcuse, setNewExcuse] = useState('');
  const [newHardTruth, setNewHardTruth] = useState('');
  const [newActionable, setNewActionable] = useState('');
  const [showAddReality, setShowAddReality] = useState(false);

  // Future Vision state
  const [vision, setVision] = useState(manifesto.futureVision);

  // Core Reminder state
  const [reminder, setReminder] = useState(
    manifesto.coreReminder || 'Remember, you are here for you.'
  );

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveAll = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    updateManifesto({
      identityStatement: identityText.trim(),
      coreCreed: creedList
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
      operatingRules,
      realityCheck: realityCheckItems,
      futureVision: vision,
      coreReminder: reminder.trim(),
      updatedAt: new Date().toISOString().slice(0, 10),
    });
    sound.complete();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleAddRealityConfrontation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHabit.trim() || !newHardTruth.trim()) return;

    const newItem: RealityCheckConfrontation = {
      id: `rc-${Date.now()}`,
      habitOrChoice: newHabit.trim(),
      excuseUsed: newExcuse.trim() || 'Unexamined convenience or fatigue.',
      hardTruth: newHardTruth.trim(),
      actionableCorrection: newActionable.trim() || 'Enforce non-negotiable protocol immediately.',
    };

    setRealityCheckItems([...realityCheckItems, newItem]);
    setNewHabit('');
    setNewExcuse('');
    setNewHardTruth('');
    setNewActionable('');
    setShowAddReality(false);
    sound.complete();
  };

  const handleRemoveRealityItem = (id: string) => {
    sound.strike?.();
    setRealityCheckItems(realityCheckItems.filter((item) => item.id !== id));
  };

  const handleAddRule = () => {
    setOperatingRules([
      ...operatingRules,
      {
        rule: 'State new inviolable operating law',
        rationale: 'Why this law is necessary to guard cognitive sovereignty',
      },
    ]);
    sound.tick();
  };

  const handleUpdateRule = (index: number, rule: string, rationale: string) => {
    const updated = [...operatingRules];
    updated[index] = { rule, rationale };
    setOperatingRules(updated);
  };

  const handleRemoveRule = (index: number) => {
    sound.strike?.();
    setOperatingRules(operatingRules.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16">
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Opening Manifesto &amp; Sovereign Creed"
        subtitle="Direct, disciplined, and unsentimental. Challenge excuses and broken choices without treating yourself as worthless or incapable."
        kicker="FOUNDATIONAL CREED • PHILOSOPHY"
        badgeLines={['UNCOMPROMISING DUTY.', 'CONFRONT THE TRUTH.', 'FORGED IN ACTION.']}
        actions={
          <div className="flex items-center gap-3">
            {savedSuccess && (
              <span className="text-xs font-sans text-accent flex items-center gap-1.5">
                <Check size={14} />
                Manifesto Saved
              </span>
            )}
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleSaveAll()}
              className="flex items-center gap-1.5 text-xs font-sans"
            >
              <Save size={13} />
              <span>Save Changes</span>
            </Button>
          </div>
        }
      />

      {/* 2. RESTRAINED METRICS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
              Identity Statement
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              Declared
            </p>
          </div>
          <div className="pt-3 border-t border-paper-border mt-3 text-[11px] font-sans text-paper-muted">
            {manifesto.coreCreed.length} operating maxims
          </div>
        </div>

        <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
              Reality Checks
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {realityCheckItems.length} <span className="text-sm font-sans text-paper-muted font-normal">traps unmasked</span>
            </p>
          </div>
          <div className="pt-3 border-t border-paper-border mt-3 text-[11px] font-sans text-paper-muted">
            Direct confrontation of excuses
          </div>
        </div>

        <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
              Operating Laws
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {operatingRules.length} <span className="text-sm font-sans text-paper-muted font-normal">laws</span>
            </p>
          </div>
          <div className="pt-3 border-t border-paper-border mt-3 text-[11px] font-sans text-paper-muted">
            Zero-debate rules under fatigue
          </div>
        </div>

        <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
              Core Anchor
            </span>
            <p className="text-lg font-heading font-semibold text-accent mt-1 leading-snug">
              &ldquo;For You.&rdquo;
            </p>
          </div>
          <div className="pt-3 border-t border-paper-border mt-3 text-[11px] font-sans text-paper-muted">
            Zero external applause needed
          </div>
        </div>
      </div>

      {/* 3. NAVIGATION TABS */}
      <div className="flex items-center gap-2 border-b border-paper-border pb-2 overflow-x-auto text-xs font-sans">
        <button
          onClick={() => {
            sound.tick();
            setActiveTab('creed');
          }}
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 ${
            activeTab === 'creed'
              ? 'bg-paper-surface text-paper-ink font-semibold shadow-journal border border-paper-border'
              : 'text-paper-secondary hover:text-paper-ink hover:bg-paper-elevated'
          }`}
        >
          <Shield size={13} className="text-accent" />
          <span>Personal Creed &amp; Operating Laws</span>
        </button>

        <button
          onClick={() => {
            sound.tick();
            setActiveTab('reality');
          }}
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 ${
            activeTab === 'reality'
              ? 'bg-paper-surface text-paper-ink font-semibold shadow-journal border border-paper-border'
              : 'text-paper-secondary hover:text-paper-ink hover:bg-paper-elevated'
          }`}
        >
          <AlertTriangle size={13} className="text-accent" />
          <span>Reality Check: Confrontations ({realityCheckItems.length})</span>
        </button>

        <button
          onClick={() => {
            sound.tick();
            setActiveTab('vision');
          }}
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 ${
            activeTab === 'vision'
              ? 'bg-paper-surface text-paper-ink font-semibold shadow-journal border border-paper-border'
              : 'text-paper-secondary hover:text-paper-ink hover:bg-paper-elevated'
          }`}
        >
          <Sparkles size={13} className="text-accent" />
          <span>Future Vision</span>
        </button>

        <button
          onClick={() => {
            sound.tick();
            setActiveTab('reminder');
          }}
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 ${
            activeTab === 'reminder'
              ? 'bg-paper-surface text-paper-ink font-semibold shadow-journal border border-paper-border'
              : 'text-paper-secondary hover:text-paper-ink hover:bg-paper-elevated'
          }`}
        >
          <Flame size={13} className="text-accent" />
          <span>Core Philosophical Anchor</span>
        </button>
      </div>

      {/* 4. TAB 1: CREED & LAWS */}
      {activeTab === 'creed' && (
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-5">
            <div className="space-y-1.5">
              <span className="text-xs font-sans uppercase tracking-wider text-paper-muted font-semibold block">
                Sovereign Identity Statement
              </span>
              <p className="text-xs text-paper-muted font-sans">
                The non-negotiable declaration of who you choose to be regardless of fluctuating emotions or external circumstances.
              </p>
              <textarea
                rows={3}
                value={identityText}
                onChange={(e) => setIdentityText(e.target.value)}
                className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-sm font-sans text-paper-ink focus:outline-none focus:border-accent leading-relaxed"
              />
            </div>

            <div className="space-y-1.5 pt-3 border-t border-paper-border">
              <span className="text-xs font-sans uppercase tracking-wider text-paper-muted font-semibold block">
                Core Creed &amp; Inviolable Principles (One per line)
              </span>
              <p className="text-xs text-paper-muted font-sans">
                Eternal operating maxims. Review these before making decisions under fatigue.
              </p>
              <textarea
                rows={7}
                value={creedList}
                onChange={(e) => setCreedList(e.target.value)}
                className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent leading-relaxed"
              />
            </div>
          </div>

          {/* Operating Laws */}
          <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-paper-border">
              <div>
                <h3 className="text-base font-heading font-semibold text-paper-ink">
                  Inviolable Operating Laws
                </h3>
                <p className="text-xs text-paper-muted font-sans">
                  Clear laws eliminate debate in the heat of temptation.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAddRule}
                className="flex items-center gap-1.5 text-xs font-sans"
              >
                <Plus size={13} />
                <span>Add Law</span>
              </Button>
            </div>

            <div className="space-y-3">
              {operatingRules.map((rule, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-paper-elevated border border-paper-border space-y-2 text-xs font-sans"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[11px] uppercase tracking-wider text-accent font-semibold">
                      LAW #{idx + 1}
                    </span>
                    <button
                      onClick={() => handleRemoveRule(idx)}
                      className="text-paper-muted hover:text-rose-600 p-1"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>

                  <input
                    type="text"
                    value={rule.rule}
                    onChange={(e) => handleUpdateRule(idx, e.target.value, rule.rationale)}
                    placeholder="Rule statement"
                    className="w-full bg-paper-surface border border-paper-border rounded-lg px-3 py-1.5 text-xs font-heading font-semibold text-paper-ink focus:outline-none focus:border-accent"
                  />

                  <textarea
                    rows={2}
                    value={rule.rationale}
                    onChange={(e) => handleUpdateRule(idx, rule.rule, e.target.value)}
                    placeholder="Underlying rationale and reason"
                    className="w-full bg-paper-surface border border-paper-border rounded-lg p-2 text-xs font-sans text-paper-secondary focus:outline-none focus:border-accent resize-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. TAB 2: REALITY CHECK — CONFRONTING HABITS & CHOICES */}
      {activeTab === 'reality' && (
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-paper-border gap-2">
              <div>
                <h3 className="text-base font-heading font-semibold text-paper-ink">
                  Reality Check: Habits &amp; Choices to Confront
                </h3>
                <p className="text-xs text-paper-muted font-sans mt-0.5">
                  Direct, unsentimental confrontation of recurring avoidance, rationalizations, and comfort traps.
                </p>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAddReality(!showAddReality)}
                className="flex items-center gap-1.5 text-xs font-sans"
              >
                <Plus size={13} />
                <span>{showAddReality ? 'Cancel' : 'Confront New Habit'}</span>
              </Button>
            </div>

            <div className="p-4 rounded-xl bg-paper-elevated border border-paper-border text-xs text-paper-secondary space-y-1">
              <span className="text-[11px] font-sans uppercase tracking-wider text-amber-800 dark:text-amber-300 font-semibold block">
                Rule of Honest Self-Examination:
              </span>
              <p className="font-sans leading-relaxed">
                &ldquo;Do not treat yourself as worthless or broken. Broken choices are systemic friction, not proof of inability. Unmask the comfortable excuse, acknowledge the real damage, and establish an immediate mechanical constraint.&rdquo;
              </p>
            </div>

            {showAddReality && (
              <form
                onSubmit={handleAddRealityConfrontation}
                className="p-5 rounded-xl bg-paper-elevated border border-paper-border space-y-3 text-xs font-sans"
              >
                <span className="text-xs uppercase tracking-wider text-accent font-semibold block">
                  Add New Self-Confrontation
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-paper-muted mb-1">
                      Habit / Choice to Confront <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Late-night phone browsing past 23:00"
                      value={newHabit}
                      onChange={(e) => setNewHabit(e.target.value)}
                      className="w-full bg-paper-surface border border-paper-border rounded-lg px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-paper-muted mb-1">
                      Excuse / Narrative I Tell Myself
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. I worked hard today and deserve recreation"
                      value={newExcuse}
                      onChange={(e) => setNewExcuse(e.target.value)}
                      className="w-full bg-paper-surface border border-paper-border rounded-lg px-3 py-2 text-xs font-sans text-paper-secondary focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-paper-muted mb-1">
                    The Hard, Unvarnished Truth <span className="text-accent">*</span>
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="What is this actually doing to your energy, self-respect, and execution?"
                    value={newHardTruth}
                    onChange={(e) => setNewHardTruth(e.target.value)}
                    className="w-full bg-paper-surface border border-paper-border rounded-lg p-2.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-paper-muted mb-1">
                    Actionable Mechanical Correction
                  </label>
                  <input
                    type="text"
                    placeholder="Specific physical or environment change to eliminate the failure point"
                    value={newActionable}
                    onChange={(e) => setNewActionable(e.target.value)}
                    className="w-full bg-paper-surface border border-paper-border rounded-lg px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <Button type="submit" variant="primary" size="sm" className="text-xs font-sans">
                    Save Confrontation
                  </Button>
                </div>
              </form>
            )}

            {/* List */}
            {realityCheckItems.length === 0 ? (
              <div className="py-8 text-center text-paper-muted font-sans text-xs space-y-1">
                <p>No habits or choices recorded under Reality Check.</p>
                <p className="text-paper-faint">
                  Click &ldquo;Confront New Habit&rdquo; above to unmask comfortable excuses.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {realityCheckItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-3 text-xs"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-paper-border">
                      <div className="flex items-center gap-2">
                        <Badge variant="neutral">Confrontation #{idx + 1}</Badge>
                        <span className="font-heading font-semibold text-paper-ink text-sm">
                          {item.habitOrChoice}
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemoveRealityItem(item.id)}
                        className="text-paper-muted hover:text-rose-600 p-1"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-sans">
                      <div className="p-3 rounded-lg bg-paper-elevated border border-paper-border space-y-1">
                        <span className="text-[10px] uppercase tracking-wider text-amber-800 dark:text-amber-300 font-semibold block">
                          The Excuse Used:
                        </span>
                        <p className="text-paper-secondary font-sans">
                          &ldquo;{item.excuseUsed}&rdquo;
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-paper-elevated border border-paper-border space-y-1">
                        <span className="text-[10px] uppercase tracking-wider text-rose-800 dark:text-rose-300 font-semibold block">
                          The Hard Truth:
                        </span>
                        <p className="text-paper-ink font-sans leading-relaxed">
                          {item.hardTruth}
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-forest/5 border border-forest/20 space-y-1">
                        <span className="text-[10px] uppercase tracking-wider text-forest font-semibold block">
                          Mechanical Correction:
                        </span>
                        <p className="text-paper-ink font-sans leading-relaxed">
                          {item.actionableCorrection}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 6. TAB 3: FUTURE VISION */}
      {activeTab === 'vision' && (
        <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-5">
          <div className="pb-3 border-b border-paper-border">
            <h3 className="text-base font-heading font-semibold text-paper-ink">
              Future Vision: The Person I Am Becoming
            </h3>
            <p className="text-xs text-paper-muted font-sans mt-0.5">
              Anchor daily micro-decisions in a clear, vivid image of the individual you are deliberately constructing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs font-sans">
            <div>
              <label className="block uppercase tracking-wider text-paper-muted mb-1 font-medium">
                1. Character, Poise &amp; Integrity Standard
              </label>
              <textarea
                rows={4}
                value={vision.characterIdentity}
                onChange={(e) => setVision({ ...vision, characterIdentity: e.target.value })}
                className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent leading-relaxed"
              />
            </div>

            <div>
              <label className="block uppercase tracking-wider text-paper-muted mb-1 font-medium">
                2. Craft, Mastery &amp; Technical Sovereignty
              </label>
              <textarea
                rows={4}
                value={vision.craftAndMastery}
                onChange={(e) => setVision({ ...vision, craftAndMastery: e.target.value })}
                className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent leading-relaxed"
              />
            </div>

            <div>
              <label className="block uppercase tracking-wider text-paper-muted mb-1 font-medium">
                3. Physical Durability &amp; Vitality
              </label>
              <textarea
                rows={4}
                value={vision.physicalStandard}
                onChange={(e) => setVision({ ...vision, physicalStandard: e.target.value })}
                className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent leading-relaxed"
              />
            </div>

            <div>
              <label className="block uppercase tracking-wider text-paper-muted mb-1 font-medium">
                4. Environment, Order &amp; Sanctuary
              </label>
              <textarea
                rows={4}
                value={vision.lifestyleEnvironment}
                onChange={(e) => setVision({ ...vision, lifestyleEnvironment: e.target.value })}
                className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent leading-relaxed"
              />
            </div>
          </div>

          <div className="pt-2 text-xs font-sans">
            <label className="block uppercase tracking-wider text-paper-muted mb-1 font-medium">
              5. Daily Cognitive State &amp; Inner Clarity
            </label>
            <textarea
              rows={3}
              value={vision.dailyStateOfMind}
              onChange={(e) => setVision({ ...vision, dailyStateOfMind: e.target.value })}
              className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* 7. TAB 4: CORE PHILOSOPHICAL ANCHOR */}
      {activeTab === 'reminder' && (
        <div className="p-8 md:p-12 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-6 text-center">
          <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center mx-auto text-accent">
            <Flame size={22} />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-accent font-semibold block">
              Core Philosophical Anchor
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-paper-ink tracking-tight">
              &ldquo;REMEMBER, YOU ARE HERE FOR YOU.&rdquo;
            </h2>
            <p className="text-xs text-paper-muted font-sans leading-relaxed">
              No audience is watching. No external applause is coming. Every promise kept, every deep work block executed, every temptation resisted is an act of sovereign self-respect.
            </p>
          </div>

          <div className="max-w-xl mx-auto text-left space-y-2">
            <label className="block text-xs font-sans uppercase tracking-wider text-paper-muted">
              Personal Reflection on This Truth:
            </label>
            <textarea
              rows={4}
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent leading-relaxed"
            />
          </div>

          <div className="pt-4 border-t border-paper-border max-w-xl mx-auto flex items-center justify-between text-xs font-sans">
            <span className="text-paper-muted">
              Uphold standards without bargain.
            </span>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleSaveAll()}
              className="text-xs font-sans"
            >
              Save All Manifesto Data
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};