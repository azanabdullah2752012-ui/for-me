import React, { useState } from 'react';
import {
  Target,
  Plus,
  CheckCircle2,
  Circle,
  Trash2,
  ListTodo,
  Wrench,
  Lightbulb,
  Check,
} from 'lucide-react';
import { Goal, GoalMilestone, PracticalSkill, PersonalPriority } from '../types';
import { useData } from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

export const GoalsView: React.FC = () => {
  const {
    goals,
    addGoal,
    deleteGoal,
    toggleMilestone,
    goalMistakes,
    addGoalMistake,
    deleteGoalMistake,
    practicalSkills,
    addPracticalSkill,
    updatePracticalSkill,
    deletePracticalSkill,
    personalPriorities,
    addPersonalPriority,
    togglePersonalPriority,
    deletePersonalPriority,
  } = useData();

  // Primary View Mode
  const [activeViewSection, setActiveViewSection] = useState<'goals' | 'priorities' | 'skills' | 'mistakes'>('goals');
  const [timeframeFilter, setTimeframeFilter] = useState<'all' | 'quarterly' | '1year' | '5year'>('all');

  // New Goal Modal
  const [isAddGoalModalOpen, setIsAddGoalModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<Goal['category']>('craft');
  const [newTimeframe, setNewTimeframe] = useState<Goal['timeframe']>('quarterly');
  const [newTargetDate, setNewTargetDate] = useState('2026-12-31');
  const [milestonesInput, setMilestonesInput] = useState('');

  // New Mistake Form
  const [showAddMistake, setShowAddMistake] = useState(false);
  const [mistakeGoalTitle, setMistakeGoalTitle] = useState('');
  const [mistakeText, setMistakeText] = useState('');
  const [rootCauseText, setRootCauseText] = useState('');
  const [lessonText, setLessonText] = useState('');

  // New Practical Skill Form
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [skillTitle, setSkillTitle] = useState('');
  const [skillCategory, setSkillCategory] = useState<PracticalSkill['category']>('domestic');
  const [skillTargetDate, setSkillTargetDate] = useState('2026-12-31');
  const [skillNotes, setSkillNotes] = useState('');

  // New Priority Form
  const [showAddPriority, setShowAddPriority] = useState(false);
  const [priorityAction, setPriorityAction] = useState('');
  const [priorityGoal, setPriorityGoal] = useState('');
  const [priorityTier, setPriorityTier] = useState<PersonalPriority['priorityTier']>('critical');
  const [priorityDueDate, setPriorityDueDate] = useState('2026-11-05');

  // Filtered Goals
  const filteredGoals = goals.filter((g) => {
    if (timeframeFilter === 'all') return true;
    return g.timeframe === timeframeFilter;
  });

  // Long-Term Progress Metrics
  const totalGoalsCount = goals.length;
  const allMilestones = goals.flatMap((g) => g.milestones);
  const completedMilestonesCount = allMilestones.filter((m) => m.done).length;
  const overallMilestoneRate = allMilestones.length > 0 ? Math.round((completedMilestonesCount / allMilestones.length) * 100) : 0;
  const avgGoalProgress = totalGoalsCount > 0 ? Math.round(goals.reduce((acc, g) => acc + g.progress, 0) / totalGoalsCount) : 0;

  const handleCreateGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    sound.complete();
    const milestones: GoalMilestone[] = milestonesInput
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((text, idx) => ({
        id: `m-${Date.now()}-${idx}`,
        text,
        done: false,
      }));

    addGoal({
      title: newTitle.trim(),
      category: newCategory,
      timeframe: newTimeframe,
      targetDate: newTargetDate,
      progress: 0,
      status: 'on-track',
      milestones,
    });

    setNewTitle('');
    setMilestonesInput('');
    setIsAddGoalModalOpen(false);
  };

  const handleCreateMistake = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mistakeGoalTitle.trim() || !mistakeText.trim() || !lessonText.trim()) return;

    sound.complete();
    addGoalMistake({
      goalTitle: mistakeGoalTitle.trim(),
      mistake: mistakeText.trim(),
      rootCause: rootCauseText.trim() || 'Cognitive friction or poor assumption.',
      lessonLearned: lessonText.trim(),
    });

    setMistakeGoalTitle('');
    setMistakeText('');
    setRootCauseText('');
    setLessonText('');
    setShowAddMistake(false);
  };

  const handleCreateSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!skillTitle.trim()) return;

    sound.complete();
    addPracticalSkill({
      title: skillTitle.trim(),
      category: skillCategory,
      proficiency: 'to-learn',
      targetDate: skillTargetDate,
      notes: skillNotes.trim(),
    });

    setSkillTitle('');
    setSkillNotes('');
    setShowAddSkill(false);
  };

  const handleCreatePriority = (e: React.FormEvent) => {
    e.preventDefault();
    if (!priorityAction.trim()) return;

    sound.complete();
    addPersonalPriority({
      action: priorityAction.trim(),
      goalTitle: priorityGoal.trim() || undefined,
      priorityTier,
      dueDate: priorityDueDate,
    });

    setPriorityAction('');
    setPriorityGoal('');
    setShowAddPriority(false);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16">
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Goals, Practical Skills & Next Actions"
        subtitle="Long-term horizons with concrete milestones, clinical autopsies on past mistakes, and prioritized next steps."
        kicker="MY PROGRESS • GOALS & MASTERY"
        badgeLines={['VISIONARY HORIZONS.', 'PRACTICAL MASTERY.', 'LEARN FROM ERRORS.']}
        actions={
          <div>
            {activeViewSection === 'goals' && (
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsAddGoalModalOpen(true)}
                className="flex items-center gap-1.5 text-xs font-sans"
              >
                <Plus size={13} />
                <span>New Horizon Goal</span>
              </Button>
            )}

            {activeViewSection === 'priorities' && (
              <Button
                variant="primary"
                size="sm"
                onClick={() => setShowAddPriority(!showAddPriority)}
                className="flex items-center gap-1.5 text-xs font-sans"
              >
                <Plus size={13} />
                <span>{showAddPriority ? 'Cancel' : 'Add Next Action'}</span>
              </Button>
            )}

            {activeViewSection === 'skills' && (
              <Button
                variant="primary"
                size="sm"
                onClick={() => setShowAddSkill(!showAddSkill)}
                className="flex items-center gap-1.5 text-xs font-sans"
              >
                <Plus size={13} />
                <span>{showAddSkill ? 'Cancel' : 'Add Life Skill'}</span>
              </Button>
            )}

            {activeViewSection === 'mistakes' && (
              <Button
                variant="primary"
                size="sm"
                onClick={() => setShowAddMistake(!showAddMistake)}
                className="flex items-center gap-1.5 text-xs font-sans"
              >
                <Plus size={13} />
                <span>{showAddMistake ? 'Cancel' : 'Record Mistake Lesson'}</span>
              </Button>
            )}
          </div>
        }
      />

      {/* 2. RESTRAINED METRICS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Active Objectives */}
        <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
              Active Objectives
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {totalGoalsCount} <span className="text-sm font-sans text-paper-muted font-normal">goals</span>
            </p>
          </div>
          <div className="pt-3 border-t border-paper-border mt-3">
            <span className="text-[11px] font-sans text-paper-secondary">
              Long-term horizons
            </span>
          </div>
        </div>

        {/* Metric 2: Milestone Execution */}
        <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
              Milestone Execution
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {overallMilestoneRate}%
            </p>
          </div>
          <div className="pt-3 border-t border-paper-border mt-3">
            <span className="text-[11px] font-sans text-paper-secondary">
              {completedMilestonesCount} of {allMilestones.length} milestones complete
            </span>
          </div>
        </div>

        {/* Metric 3: Average Velocity */}
        <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
              Average Progress
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {avgGoalProgress}%
            </p>
          </div>
          <div className="pt-3 border-t border-paper-border mt-3">
            <span className="text-[11px] font-sans text-paper-secondary">
              Paced milestone advancement
            </span>
          </div>
        </div>

        {/* Metric 4: Practical Skills */}
        <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
              Skills in Training
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {practicalSkills.length} <span className="text-sm font-sans text-paper-muted font-normal">masteries</span>
            </p>
          </div>
          <div className="pt-3 border-t border-paper-border mt-3">
            <span className="text-[11px] font-sans text-paper-secondary">
              Practical life capabilities
            </span>
          </div>
        </div>
      </div>

      {/* 3. TABS: OBJECTIVES, PRIORITIES, SKILLS, MISTAKES */}
      <div className="flex items-center gap-2 border-b border-paper-border pb-2 overflow-x-auto text-xs font-sans">
        <button
          onClick={() => {
            sound.tick();
            setActiveViewSection('goals');
          }}
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 ${
            activeViewSection === 'goals'
              ? 'bg-paper-surface text-paper-ink font-semibold shadow-journal border border-paper-border'
              : 'text-paper-secondary hover:text-paper-ink hover:bg-paper-elevated'
          }`}
        >
          <Target size={13} className="text-accent" />
          <span>Objectives &amp; Milestones ({goals.length})</span>
        </button>

        <button
          onClick={() => {
            sound.tick();
            setActiveViewSection('priorities');
          }}
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 ${
            activeViewSection === 'priorities'
              ? 'bg-paper-surface text-paper-ink font-semibold shadow-journal border border-paper-border'
              : 'text-paper-secondary hover:text-paper-ink hover:bg-paper-elevated'
          }`}
        >
          <ListTodo size={13} className="text-accent" />
          <span>Priorities &amp; Next Actions ({personalPriorities.length})</span>
        </button>

        <button
          onClick={() => {
            sound.tick();
            setActiveViewSection('skills');
          }}
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 ${
            activeViewSection === 'skills'
              ? 'bg-paper-surface text-paper-ink font-semibold shadow-journal border border-paper-border'
              : 'text-paper-secondary hover:text-paper-ink hover:bg-paper-elevated'
          }`}
        >
          <Wrench size={13} className="text-accent" />
          <span>Practical Life Skills ({practicalSkills.length})</span>
        </button>

        <button
          onClick={() => {
            sound.tick();
            setActiveViewSection('mistakes');
          }}
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 ${
            activeViewSection === 'mistakes'
              ? 'bg-paper-surface text-paper-ink font-semibold shadow-journal border border-paper-border'
              : 'text-paper-secondary hover:text-paper-ink hover:bg-paper-elevated'
          }`}
        >
          <Lightbulb size={13} className="text-accent" />
          <span>Mistakes &amp; Lessons ({goalMistakes.length})</span>
        </button>
      </div>

      {/* 4. SECTION 1: GOALS */}
      {activeViewSection === 'goals' && (
        <div className="space-y-4">
          {/* Timeframe Filter */}
          <div className="flex items-center gap-1.5 text-xs font-sans">
            {(['all', 'quarterly', '1year', '5year'] as const).map((tf) => (
              <button
                key={tf}
                type="button"
                onClick={() => setTimeframeFilter(tf)}
                className={`px-2.5 py-1 rounded-md capitalize transition-colors ${
                  timeframeFilter === tf
                    ? 'bg-paper-surface text-paper-ink font-semibold shadow-journal border border-paper-border'
                    : 'text-paper-muted hover:text-paper-ink hover:bg-paper-elevated'
                }`}
              >
                {tf === 'all' ? 'All Horizons' : tf}
              </button>
            ))}
          </div>

          {filteredGoals.length === 0 ? (
            <div className="bg-paper-surface border border-dashed border-paper-border rounded-xl p-10 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-paper-elevated border border-paper-border flex items-center justify-center text-paper-muted mx-auto">
                <Target size={20} />
              </div>
              <div className="space-y-1 max-w-md mx-auto">
                <h3 className="text-base font-heading font-semibold text-paper-ink">
                  No Goals in This Timeframe
                </h3>
                <p className="text-xs text-paper-muted font-sans leading-relaxed">
                  Anchor your discipline in a clear milestone with a finish date.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAddGoalModalOpen(true)}
                className="text-xs font-sans"
              >
                <Plus size={13} className="mr-1" />
                <span>Define New Goal</span>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredGoals.map((g) => {
                const totalM = g.milestones.length;
                const doneM = g.milestones.filter((m) => m.done).length;
                const calcProgress = totalM > 0 ? Math.round((doneM / totalM) * 100) : g.progress;

                return (
                  <div
                    key={g.id}
                    className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="neutral">{g.timeframe}</Badge>
                          <span className="text-[11px] font-sans text-paper-muted capitalize">
                            {g.category}
                          </span>
                        </div>
                        <button
                          onClick={() => deleteGoal(g.id)}
                          className="text-paper-muted hover:text-rose-600 p-1 rounded transition-colors"
                          title="Delete Goal"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <h3 className="text-base font-heading font-semibold text-paper-ink leading-snug">
                        {g.title}
                      </h3>

                      <p className="text-xs font-sans text-paper-muted">
                        Target Date: {g.targetDate || 'Long-term standard'}
                      </p>

                      {/* Progress Bar */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-sans text-paper-muted">
                          <span>Milestone progress</span>
                          <span className="font-medium text-paper-ink">{calcProgress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-paper-elevated rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full transition-all"
                            style={{ width: `${calcProgress}%` }}
                          />
                        </div>
                      </div>

                      {/* Milestones Checklist */}
                      {g.milestones.length > 0 && (
                        <div className="pt-2 space-y-1.5 border-t border-paper-border">
                          <span className="text-[10px] font-sans uppercase tracking-wider text-paper-muted block">
                            Milestones ({doneM}/{totalM}):
                          </span>
                          <div className="space-y-1">
                            {g.milestones.map((m) => (
                              <div
                                key={m.id}
                                onClick={() => toggleMilestone(g.id, m.id)}
                                className="flex items-center gap-2 p-1 rounded hover:bg-paper-elevated cursor-pointer text-xs font-sans transition-colors"
                              >
                                <div
                                  className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${
                                    m.done
                                      ? 'bg-forest border-forest text-white'
                                      : 'border-paper-border'
                                  }`}
                                >
                                  {m.done && <Check size={10} strokeWidth={3} />}
                                </div>
                                <span className={m.done ? 'line-through text-paper-muted' : 'text-paper-secondary'}>
                                  {m.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* 5. SECTION 2: PRIORITIES & NEXT ACTIONS */}
      {activeViewSection === 'priorities' && (
        <div className="space-y-4">
          {showAddPriority && (
            <form onSubmit={handleCreatePriority} className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-3">
              <span className="text-xs font-sans uppercase tracking-wider text-accent font-semibold block">
                Add Next Personal Priority
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-sans text-paper-muted mb-1">
                    Next Action <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={priorityAction}
                    onChange={(e) => setPriorityAction(e.target.value)}
                    placeholder="e.g. Draft initial outline for thesis chapter"
                    className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-1.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans text-paper-muted mb-1">
                    Linked Goal / Project
                  </label>
                  <input
                    type="text"
                    value={priorityGoal}
                    onChange={(e) => setPriorityGoal(e.target.value)}
                    placeholder="e.g. Academic Excellence 2026"
                    className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-1.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button variant="ghost" size="sm" type="button" onClick={() => setShowAddPriority(false)}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" type="submit">
                  Save Action
                </Button>
              </div>
            </form>
          )}

          {personalPriorities.length === 0 ? (
            <div className="bg-paper-surface border border-dashed border-paper-border rounded-xl p-8 text-center space-y-2">
              <p className="text-xs text-paper-muted font-sans">
                No next actions recorded yet.
              </p>
              <Button variant="outline" size="sm" onClick={() => setShowAddPriority(true)} className="text-xs font-sans">
                Add First Action
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              {personalPriorities.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-paper-surface border border-paper-border shadow-journal flex items-center justify-between gap-3 text-xs font-sans"
                >
                  <div
                    onClick={() => togglePersonalPriority(item.id)}
                    className="flex items-center gap-3 cursor-pointer flex-1"
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        item.completed ? 'bg-forest border-forest text-white' : 'border-paper-border'
                      }`}
                    >
                      {item.completed && <Check size={11} strokeWidth={3} />}
                    </div>
                    <div>
                      <span className={item.completed ? 'line-through text-paper-muted' : 'text-paper-ink font-medium'}>
                        {item.action}
                      </span>
                      {item.goalTitle && (
                        <span className="text-[11px] text-paper-muted block">
                          Project: {item.goalTitle}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => deletePersonalPriority(item.id)}
                    className="text-paper-muted hover:text-rose-600 p-1"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 6. SECTION 3: PRACTICAL LIFE SKILLS */}
      {activeViewSection === 'skills' && (
        <div className="space-y-4">
          {showAddSkill && (
            <form onSubmit={handleCreateSkill} className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-3">
              <span className="text-xs font-sans uppercase tracking-wider text-accent font-semibold block">
                Add Practical Life Skill
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-sans text-paper-muted mb-1">
                    Skill Title <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={skillTitle}
                    onChange={(e) => setSkillTitle(e.target.value)}
                    placeholder="e.g. Basic Vehicle Maintenance, Double-Entry Bookkeeping"
                    className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-1.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans text-paper-muted mb-1">
                    Category
                  </label>
                  <select
                    value={skillCategory}
                    onChange={(e) => setSkillCategory(e.target.value as any)}
                    className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-1.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
                  >
                    <option value="domestic">Domestic &amp; Order</option>
                    <option value="financial">Financial Sovereignty</option>
                    <option value="technical">Technical Mastery</option>
                    <option value="interpersonal">Interpersonal &amp; Poise</option>
                    <option value="emergency">Emergency &amp; First Aid</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-sans text-paper-muted mb-1">
                  Learning Notes / Desired Standard
                </label>
                <input
                  type="text"
                  value={skillNotes}
                  onChange={(e) => setSkillNotes(e.target.value)}
                  placeholder="Criteria to consider this skill mastered..."
                  className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-1.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button variant="ghost" size="sm" type="button" onClick={() => setShowAddSkill(false)}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" type="submit">
                  Save Skill
                </Button>
              </div>
            </form>
          )}

          {practicalSkills.length === 0 ? (
            <div className="bg-paper-surface border border-dashed border-paper-border rounded-xl p-8 text-center space-y-2">
              <p className="text-xs text-paper-muted font-sans">
                No practical life skills logged yet.
              </p>
              <Button variant="outline" size="sm" onClick={() => setShowAddSkill(true)} className="text-xs font-sans">
                Add Practical Skill
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {practicalSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-2 text-xs font-sans"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant="neutral">{skill.category}</Badge>
                    <button
                      onClick={() => deletePracticalSkill(skill.id)}
                      className="text-paper-muted hover:text-rose-600 p-1"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                  <h4 className="text-sm font-heading font-semibold text-paper-ink">
                    {skill.title}
                  </h4>
                  {skill.notes && (
                    <p className="text-paper-secondary font-sans">
                      &ldquo;{skill.notes}&rdquo;
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 7. SECTION 4: MISTAKES & LESSONS */}
      {activeViewSection === 'mistakes' && (
        <div className="space-y-4">
          {showAddMistake && (
            <form onSubmit={handleCreateMistake} className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-3">
              <span className="text-xs font-sans uppercase tracking-wider text-accent font-semibold block">
                Record Clinical Mistake Autopsy
              </span>

              <div>
                <label className="block text-[11px] font-sans text-paper-muted mb-1">
                  Context / Objective <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={mistakeGoalTitle}
                  onChange={(e) => setMistakeGoalTitle(e.target.value)}
                  placeholder="e.g. Study block procrastination"
                  className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-1.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans text-paper-muted mb-1">
                  What Went Off-Course? <span className="text-accent">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  value={mistakeText}
                  onChange={(e) => setMistakeText(e.target.value)}
                  placeholder="Objective description without self-shaming..."
                  className="w-full bg-paper-elevated border border-paper-border rounded-lg p-2.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans text-paper-muted mb-1">
                  Actionable Lesson Learned <span className="text-accent">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  value={lessonText}
                  onChange={(e) => setLessonText(e.target.value)}
                  placeholder="One concrete operational rule to prevent this from repeating..."
                  className="w-full bg-paper-elevated border border-paper-border rounded-lg p-2.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button variant="ghost" size="sm" type="button" onClick={() => setShowAddMistake(false)}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" type="submit">
                  Record Lesson
                </Button>
              </div>
            </form>
          )}

          {goalMistakes.length === 0 ? (
            <div className="bg-paper-surface border border-dashed border-paper-border rounded-xl p-8 text-center space-y-2">
              <p className="text-xs text-paper-muted font-sans">
                No mistakes or post-mortems logged yet.
              </p>
              <Button variant="outline" size="sm" onClick={() => setShowAddMistake(true)} className="text-xs font-sans">
                Record First Post-Mortem
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {goalMistakes.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-3 text-xs"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-paper-border">
                    <span className="font-heading font-semibold text-sm text-paper-ink">
                      {item.goalTitle}
                    </span>
                    <button
                      onClick={() => deleteGoalMistake(item.id)}
                      className="text-paper-muted hover:text-rose-600 p-1"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-paper-elevated border border-paper-border space-y-1">
                      <span className="text-[10px] font-sans uppercase tracking-wider text-amber-800 dark:text-amber-300 font-semibold block">
                        What Went Off-Course:
                      </span>
                      <p className="text-paper-secondary font-sans">
                        {item.mistake}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-forest/5 border border-forest/20 space-y-1">
                      <span className="text-[10px] font-sans uppercase tracking-wider text-forest font-semibold block">
                        Permanent Lesson:
                      </span>
                      <p className="text-paper-ink font-sans">
                        &ldquo;{item.lessonLearned}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* CREATE GOAL MODAL */}
      <Modal
        isOpen={isAddGoalModalOpen}
        onClose={() => setIsAddGoalModalOpen(false)}
        title="Define Long-Term Horizon Goal"
      >
        <form onSubmit={handleCreateGoal} className="space-y-4">
          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-paper-muted mb-1">
              Goal Title <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. Master Classical Microeconomics & Econometrics"
              className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-sans uppercase tracking-wider text-paper-muted mb-1">
                Timeframe
              </label>
              <select
                value={newTimeframe}
                onChange={(e) => setNewTimeframe(e.target.value as any)}
                className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
              >
                <option value="quarterly">Quarterly (90 Days)</option>
                <option value="1year">One Year Horizon</option>
                <option value="5year">Five Year Long-Range</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-sans uppercase tracking-wider text-paper-muted mb-1">
                Category
              </label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value as any)}
                className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
              >
                <option value="intellect">Intellect &amp; Studies</option>
                <option value="craft">Craft &amp; Mastery</option>
                <option value="vitality">Vitality &amp; Body</option>
                <option value="wealth">Financial Sovereignty</option>
                <option value="character">Character &amp; Poise</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-paper-muted mb-1">
              Target Finish Date
            </label>
            <input
              type="date"
              value={newTargetDate}
              onChange={(e) => setNewTargetDate(e.target.value)}
              className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-paper-muted mb-1">
              Milestones (One per line)
            </label>
            <textarea
              rows={4}
              value={milestonesInput}
              onChange={(e) => setMilestonesInput(e.target.value)}
              placeholder="Finish core textbook chapters&#10;Complete 50 practice problems&#10;Draft synthesis essay"
              className="w-full bg-paper-elevated border border-paper-border rounded-lg p-2.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-paper-border">
            <Button variant="ghost" size="sm" type="button" onClick={() => setIsAddGoalModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit">
              Define Goal
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};