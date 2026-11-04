import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { 
  Sparkles, 
  Smile, 
  Shield, 
  BookMarked, 
  Plus, 
  Trash2,
  TrendingUp,
  Target,
  Award,
  Layers,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronRight,
  Filter,
  Flame,
  Brain,
  Dumbbell,
  Palette,
  Users,
  Compass
} from 'lucide-react';
import { 
  SkillItem, 
  SkillCategory, 
  ProficiencyLevel, 
  LearningItemType, 
  LearningStatus 
} from '../types';

export const PersonalGrowthView: React.FC = () => {
  const { 
    skills,
    addSkill,
    updateSkill,
    deleteSkill,
    addSkillPracticeLog,
    deleteSkillPracticeLog,
    personalProjects,
    addPersonalProject,
    updatePersonalProject,
    deletePersonalProject,
    toggleProjectMilestone,
    addProjectMilestone,
    deleteProjectMilestone,
    addProjectKeyLearning,
    learningItems,
    addLearningItem,
    updateLearningItem,
    deleteLearningItem,
    addLearningTakeaway,
    growthRatings, 
    logGrowthRating, 
    lessonsLearned, 
    addLessonLearned, 
    deleteLessonLearned,
    objectives,
    addObjective,
    updateObjective,
    deleteObjective
  } = useData();

  // Primary navigation sub-tabs
  const [activeTab, setActiveTab] = useState<'analytics' | 'skills' | 'projects' | 'learning' | 'reflections'>('analytics');

  // Filter states
  const [skillCategoryFilter, setSkillCategoryFilter] = useState<string>('all');
  const [projectStatusFilter, setProjectStatusFilter] = useState<string>('all');
  const [learningStatusFilter, setLearningStatusFilter] = useState<string>('all');

  // Practice Log Modal State
  const [activeSkillForLog, setActiveSkillForLog] = useState<SkillItem | null>(null);
  const [practiceMinutes, setPracticeMinutes] = useState('60');
  const [practiceDate, setPracticeDate] = useState(new Date().toISOString().slice(0, 10));
  const [practiceMilestone, setPracticeMilestone] = useState('');
  const [practiceNotes, setPracticeNotes] = useState('');

  // Add Skill Modal State
  const [showAddSkillModal, setShowAddSkillModal] = useState(false);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState<SkillCategory>('technical');
  const [newSkillCurrentLevel, setNewSkillCurrentLevel] = useState<ProficiencyLevel>('intermediate');
  const [newSkillTargetLevel, setNewSkillTargetLevel] = useState<ProficiencyLevel>('mastery');
  const [newSkillTargetHours, setNewSkillTargetHours] = useState('100');
  const [newSkillColor, setNewSkillColor] = useState('#8b5cf6');
  const [newSkillNotes, setNewSkillNotes] = useState('');

  // Add Project Modal State
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjCategory, setNewProjCategory] = useState('Software Engineering');
  const [newProjDescription, setNewProjDescription] = useState('');
  const [newProjTargetDate, setNewProjTargetDate] = useState('');
  const [newProjLinkedSkillIds, setNewProjLinkedSkillIds] = useState<string[]>([]);
  const [newProjOutcomeUrl, setNewProjOutcomeUrl] = useState('');
  const [initialMilestones, setInitialMilestones] = useState<string[]>(['Phase 1 Prototype Architecture']);

  // Add Learning Item Modal State
  const [showAddLearningModal, setShowAddLearningModal] = useState(false);
  const [newLearnTitle, setNewLearnTitle] = useState('');
  const [newLearnCreator, setNewLearnCreator] = useState('');
  const [newLearnType, setNewLearnType] = useState<LearningItemType>('book');
  const [newLearnStatus, setNewLearnStatus] = useState<LearningStatus>('in_progress');
  const [newLearnLinkedSkillIds, setNewLearnLinkedSkillIds] = useState<string[]>([]);
  const [newLearnTakeaway, setNewLearnTakeaway] = useState('');

  // Inline forms state
  const [newMilestoneText, setNewMilestoneText] = useState<Record<string, string>>({});
  const [newProjectLearningText, setNewProjectLearningText] = useState<Record<string, string>>({});
  const [newLearningTakeawayText, setNewLearningTakeawayText] = useState<Record<string, string>>({});
  const [expandedSkillHistory, setExpandedSkillHistory] = useState<Record<string, boolean>>({});

  // Legacy Reflection form state
  const [happyScore, setHappyScore] = useState(8);
  const [confidenceScore, setConfidenceScore] = useState(8);
  const [developmentScore, setDevelopmentScore] = useState(8);
  const [reflectionNote, setReflectionNote] = useState('');
  const [savedFeedback, setSavedFeedback] = useState(false);

  // Lesson & Objective modal state
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonText, setLessonText] = useState('');
  const [lessonCategory, setLessonCategory] = useState('Discipline');
  const [showLessonModal, setShowLessonModal] = useState(false);

  const [objTitle, setObjTitle] = useState('');
  const [objCategory, setObjCategory] = useState('Mindset');
  const [objTargetDate, setObjTargetDate] = useState('2026-11-30');
  const [showObjModal, setShowObjModal] = useState(false);

  // ─────────────────────────────────────────────────────────────
  // 1. EVIDENCE & ANALYTICS CALCULATIONS
  // ─────────────────────────────────────────────────────────────

  const totalPracticeMinutesAllSkills = useMemo(() => {
    return skills.reduce((acc, s) => acc + s.totalPracticeMinutes, 0);
  }, [skills]);

  const totalPracticeHours = (totalPracticeMinutesAllSkills / 60).toFixed(1);

  const totalCompletedProjects = useMemo(() => {
    return personalProjects.filter((p) => p.status === 'completed').length;
  }, [personalProjects]);

  const totalMilestonesCompleted = useMemo(() => {
    return personalProjects.reduce((acc, p) => acc + p.milestones.filter((m) => m.completed).length, 0);
  }, [personalProjects]);

  const totalMilestonesCount = useMemo(() => {
    return personalProjects.reduce((acc, p) => acc + p.milestones.length, 0);
  }, [personalProjects]);

  const completedLearningItems = useMemo(() => {
    return learningItems.filter((l) => l.status === 'completed' || l.status === 'applied');
  }, [learningItems]);

  // Category Distribution & Balance Matrix
  const categoryStats = useMemo(() => {
    const cats: SkillCategory[] = ['technical', 'cognitive', 'physical', 'creative', 'interpersonal', 'discipline'];
    return cats.map((cat) => {
      const catSkills = skills.filter((s) => s.category === cat);
      const catMinutes = catSkills.reduce((acc, s) => acc + s.totalPracticeMinutes, 0);
      const catHours = (catMinutes / 60).toFixed(1);
      const avgProgress = catSkills.length > 0 
        ? Math.round(catSkills.reduce((acc, s) => acc + s.progressPercent, 0) / catSkills.length)
        : 0;

      return {
        category: cat,
        skillCount: catSkills.length,
        hours: catHours,
        minutes: catMinutes,
        avgProgress,
      };
    });
  }, [skills]);

  // Filtered skills
  const filteredSkills = useMemo(() => {
    if (skillCategoryFilter === 'all') return skills;
    return skills.filter((s) => s.category === skillCategoryFilter);
  }, [skills, skillCategoryFilter]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (projectStatusFilter === 'all') return personalProjects;
    return personalProjects.filter((p) => p.status === projectStatusFilter);
  }, [personalProjects, projectStatusFilter]);

  // Filtered learning items
  const filteredLearningItems = useMemo(() => {
    if (learningStatusFilter === 'all') return learningItems;
    return learningItems.filter((l) => l.status === learningStatusFilter);
  }, [learningItems, learningStatusFilter]);

  // ─────────────────────────────────────────────────────────────
  // 2. HANDLERS
  // ─────────────────────────────────────────────────────────────

  const handleSavePracticeLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeSkillForLog) return;
    const mins = parseInt(practiceMinutes, 10);
    if (!mins || mins <= 0) return;

    addSkillPracticeLog(activeSkillForLog.id, {
      date: practiceDate,
      durationMinutes: mins,
      milestoneReached: practiceMilestone.trim() || undefined,
      notes: practiceNotes.trim() || undefined,
    });

    setActiveSkillForLog(null);
    setPracticeMilestone('');
    setPracticeNotes('');
  };

  const handleCreateSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;

    addSkill({
      name: newSkillName.trim(),
      category: newSkillCategory,
      currentLevel: newSkillCurrentLevel,
      targetLevel: newSkillTargetLevel,
      targetPracticeHours: parseInt(newSkillTargetHours, 10) || 100,
      color: newSkillColor,
      notes: newSkillNotes.trim() || undefined,
      progressPercent: newSkillCurrentLevel === 'beginner' ? 25 : newSkillCurrentLevel === 'intermediate' ? 50 : 75,
    });

    setNewSkillName('');
    setNewSkillNotes('');
    setShowAddSkillModal(false);
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjTitle.trim()) return;

    const milestones = initialMilestones
      .filter((m) => m.trim().length > 0)
      .map((m, idx) => ({
        id: `m_${Date.now()}_${idx}`,
        title: m.trim(),
        completed: false,
      }));

    addPersonalProject({
      title: newProjTitle.trim(),
      category: newProjCategory,
      description: newProjDescription.trim(),
      status: 'in_progress',
      startDate: new Date().toISOString().slice(0, 10),
      targetCompletionDate: newProjTargetDate || undefined,
      linkedSkillIds: newProjLinkedSkillIds,
      outcomeUrl: newProjOutcomeUrl.trim() || undefined,
      milestones,
      keyLearnings: [],
    });

    setNewProjTitle('');
    setNewProjDescription('');
    setNewProjOutcomeUrl('');
    setNewProjLinkedSkillIds([]);
    setShowAddProjectModal(false);
  };

  const handleCreateLearningItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLearnTitle.trim()) return;

    addLearningItem({
      title: newLearnTitle.trim(),
      creator: newLearnCreator.trim() || 'Author / Mentor',
      type: newLearnType,
      status: newLearnStatus,
      progressPercent: newLearnStatus === 'completed' || newLearnStatus === 'applied' ? 100 : 30,
      linkedSkillIds: newLearnLinkedSkillIds,
      linkedProjectIds: [],
      keyTakeaways: newLearnTakeaway.trim() ? [newLearnTakeaway.trim()] : [],
      actionableInsights: [],
    });

    setNewLearnTitle('');
    setNewLearnCreator('');
    setNewLearnTakeaway('');
    setNewLearnLinkedSkillIds([]);
    setShowAddLearningModal(false);
  };

  const handleLogRatings = (e: React.FormEvent) => {
    e.preventDefault();
    logGrowthRating({
      happinessRating: happyScore,
      confidenceRating: confidenceScore,
      developmentRating: developmentScore,
      note: reflectionNote.trim() || undefined,
    });
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2000);
  };

  const handleAddLesson = (e: React.FormEvent) => {
    e.preventDefault();
    if (lessonTitle.trim() && lessonText.trim()) {
      addLessonLearned({
        title: lessonTitle.trim(),
        reflection: lessonText.trim(),
        category: lessonCategory,
      });
      setLessonTitle('');
      setLessonText('');
      setShowLessonModal(false);
    }
  };

  const handleAddObjective = (e: React.FormEvent) => {
    e.preventDefault();
    if (objTitle.trim()) {
      addObjective({
        title: objTitle.trim(),
        category: objCategory,
        targetDate: objTargetDate,
        progressPercent: 50,
      });
      setObjTitle('');
      setShowObjModal(false);
    }
  };

  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case 'technical': return <Layers className="w-3.5 h-3.5 text-violet-400" />;
      case 'cognitive': return <Brain className="w-3.5 h-3.5 text-blue-400" />;
      case 'physical': return <Dumbbell className="w-3.5 h-3.5 text-emerald-400" />;
      case 'creative': return <Palette className="w-3.5 h-3.5 text-pink-400" />;
      case 'interpersonal': return <Users className="w-3.5 h-3.5 text-cyan-400" />;
      default: return <Compass className="w-3.5 h-3.5 text-amber-400" />;
    }
  };

  const getLevelBadgeClass = (level: ProficiencyLevel) => {
    switch (level) {
      case 'mastery': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'advanced': return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
      case 'intermediate': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default: return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20';
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* ── 1. HEADER & EVIDENCE TELEMETRY ── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Mastery & Real Personal Development</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Personal Growth & Evidence Engine
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-2xl">
            Tied to concrete evidence: deliberate practice, finished personal projects, and applied knowledge.
          </p>
        </div>

        {/* Global Growth Telemetry Chips */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="px-3.5 py-2 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs">
            <span className="text-[var(--text-muted)] block text-[10px] uppercase font-mono">Deliberate Practice</span>
            <span className="font-mono font-bold text-violet-400 text-sm">{totalPracticeHours}h</span>
            <span className="text-[10px] text-[var(--text-muted)] ml-1 font-mono">invested</span>
          </div>

          <div className="px-3.5 py-2 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs">
            <span className="text-[var(--text-muted)] block text-[10px] uppercase font-mono">Active Skills</span>
            <span className="font-semibold text-[var(--text-primary)]">{skills.length} in development</span>
          </div>

          <div className="px-3.5 py-2 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs">
            <span className="text-[var(--text-muted)] block text-[10px] uppercase font-mono">Execution Proof</span>
            <span className="font-mono font-bold text-emerald-400 text-sm">{totalCompletedProjects}</span>
            <span className="text-[10px] text-[var(--text-muted)] ml-1 font-mono">projects built</span>
          </div>
        </div>
      </div>

      {/* ── 2. SUB-NAVIGATION TABS ── */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] overflow-x-auto">
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'analytics'
              ? 'bg-[var(--surface-bg)] text-violet-400 font-semibold shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Mastery Analytics</span>
        </button>

        <button
          onClick={() => setActiveTab('skills')}
          className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'skills'
              ? 'bg-[var(--surface-bg)] text-violet-400 font-semibold shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Skills & Practice ({skills.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'projects'
              ? 'bg-[var(--surface-bg)] text-violet-400 font-semibold shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span>Personal Projects ({personalProjects.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('learning')}
          className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'learning'
              ? 'bg-[var(--surface-bg)] text-violet-400 font-semibold shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curated Knowledge ({learningItems.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('reflections')}
          className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'reflections'
              ? 'bg-[var(--surface-bg)] text-violet-400 font-semibold shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Mindset & Wisdom</span>
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SUB-TAB 1: MASTERY & GROWTH ANALYTICS
         ───────────────────────────────────────────────────────────── */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-3xl creamy-surface space-y-2">
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Verified Deliberate Practice</span>
              <div className="text-3xl font-mono font-bold text-violet-400">{totalPracticeHours}h</div>
              <p className="text-[11px] text-[var(--text-secondary)]">Calculated from actual logged practice sessions</p>
            </div>

            <div className="p-5 rounded-3xl creamy-surface space-y-2">
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Execution Milestones</span>
              <div className="text-3xl font-mono font-bold text-emerald-400">
                {totalMilestonesCompleted} / {totalMilestonesCount}
              </div>
              <p className="text-[11px] text-[var(--text-secondary)]">
                {totalMilestonesCount > 0 ? `${Math.round((totalMilestonesCompleted / totalMilestonesCount) * 100)}% project milestones verified` : 'No milestones set'}
              </p>
            </div>

            <div className="p-5 rounded-3xl creamy-surface space-y-2">
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Knowledge Consumed & Applied</span>
              <div className="text-3xl font-mono font-bold text-cyan-400">
                {completedLearningItems.length} / {learningItems.length}
              </div>
              <p className="text-[11px] text-[var(--text-secondary)]">Books, courses, and papers integrated into work</p>
            </div>

            <div className="p-5 rounded-3xl creamy-surface space-y-2">
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Distilled Principles</span>
              <div className="text-3xl font-mono font-bold text-amber-400">{lessonsLearned.length}</div>
              <p className="text-[11px] text-[var(--text-secondary)]">Lessons extracted to prevent repeating past mistakes</p>
            </div>
          </div>

          {/* Development Balance Matrix across Disciplines */}
          <div className="p-6 rounded-3xl creamy-surface space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Compass className="w-4 h-4 text-violet-400" />
                  Development Balance Across Life Dimensions
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Verifying balanced investment across technical, cognitive, physical, and creative capacities.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryStats.map((cat) => (
                <div key={cat.category} className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(cat.category)}
                      <span className="font-semibold text-xs text-[var(--text-primary)] capitalize">
                        {cat.category}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-violet-400">
                      {cat.hours}h logged
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)] font-mono">
                    <span>{cat.skillCount} active skills</span>
                    <span>{cat.avgProgress}% avg mastery</span>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-[var(--surface-bg)] overflow-hidden">
                    <div 
                      className="h-full bg-violet-500 rounded-full transition-all duration-300"
                      style={{ width: `${cat.avgProgress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Progression Ladder */}
          <div className="p-6 rounded-3xl creamy-surface space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Award className="w-4 h-4 text-violet-400" />
                  Skill Progression & Mastery Ladder
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Current proficiency versus targeted mastery thresholds
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {skills.map((s) => (
                <div key={s.id} className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color || '#8b5cf6' }} />
                      <span className="font-semibold text-xs text-[var(--text-primary)]">{s.name}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border uppercase font-bold ${getLevelBadgeClass(s.currentLevel)}`}>
                        {s.currentLevel}
                      </span>
                      <span className="text-[10px] text-[var(--text-muted)] font-mono">
                        → Target: {s.targetLevel}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[var(--text-secondary)]">
                        {(s.totalPracticeMinutes / 60).toFixed(1)}h / {s.targetPracticeHours || 100}h target
                      </span>
                      <span className="font-mono font-bold text-xs text-violet-400">
                        {s.progressPercent}%
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-[var(--surface-bg)] overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-300"
                      style={{ width: `${s.progressPercent}%`, backgroundColor: s.color || '#8b5cf6' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SUB-TAB 2: SKILLS & DELIBERATE PRACTICE
         ───────────────────────────────────────────────────────────── */}
      {activeTab === 'skills' && (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
            {/* Filter by Category */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs text-[var(--text-muted)] flex items-center gap-1 mr-1">
                <Filter className="w-3 h-3 text-[var(--text-muted)]" /> Category:
              </span>
              {['all', 'technical', 'cognitive', 'physical', 'creative', 'interpersonal'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSkillCategoryFilter(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-medium capitalize transition-all whitespace-nowrap cursor-pointer ${
                    skillCategoryFilter === cat
                      ? 'bg-violet-600 text-white font-semibold shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-bg)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowAddSkillModal(true)}
              className="px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Register Skill</span>
            </button>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredSkills.map((skill) => {
              const isHistoryExpanded = Boolean(expandedSkillHistory[skill.id]);

              return (
                <div key={skill.id} className="p-5 rounded-3xl creamy-surface border border-[var(--card-border)] space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: skill.color || '#8b5cf6' }} />
                          <h4 className="font-bold text-sm text-[var(--text-primary)]">{skill.name}</h4>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] text-[var(--text-muted)] uppercase font-mono flex items-center gap-1">
                            {getCategoryIcon(skill.category)} {skill.category}
                          </span>
                          <span className="text-[10px] text-[var(--text-muted)]">•</span>
                          <select
                            value={skill.currentLevel}
                            onChange={(e) => updateSkill(skill.id, { currentLevel: e.target.value as ProficiencyLevel })}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-md border uppercase font-bold cursor-pointer bg-[var(--surface-bg)] ${getLevelBadgeClass(skill.currentLevel)}`}
                          >
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="mastery">Mastery</option>
                          </select>
                          <span className="text-[10px] text-[var(--text-muted)] font-mono">
                            → {skill.targetLevel}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => deleteSkill(skill.id)}
                          className="text-[var(--text-muted)] hover:text-rose-400 p-1 transition-colors cursor-pointer"
                          title="Delete skill"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {skill.notes && (
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        {skill.notes}
                      </p>
                    )}

                    {/* Progress Bar & Quota */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[var(--text-muted)]">Practice Invested</span>
                        <span className="font-bold text-[var(--text-primary)]">
                          {(skill.totalPracticeMinutes / 60).toFixed(1)}h / {skill.targetPracticeHours || 100}h ({skill.progressPercent}%)
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[var(--pill-bg)] overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-300"
                          style={{ width: `${skill.progressPercent}%`, backgroundColor: skill.color || '#8b5cf6' }}
                        />
                      </div>
                    </div>

                    {/* Practice History Accordion */}
                    {skill.practiceLogs && skill.practiceLogs.length > 0 && (
                      <div className="pt-2">
                        <button
                          onClick={() => setExpandedSkillHistory((prev) => ({ ...prev, [skill.id]: !isHistoryExpanded }))}
                          className="text-xs text-violet-400 hover:text-violet-300 font-medium flex items-center gap-1 cursor-pointer"
                        >
                          <span>{isHistoryExpanded ? 'Hide' : 'View'} Practice History ({skill.practiceLogs.length} logs)</span>
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isHistoryExpanded ? 'rotate-90' : ''}`} />
                        </button>

                        {isHistoryExpanded && (
                          <div className="mt-2 space-y-2 max-h-48 overflow-y-auto pr-1">
                            {skill.practiceLogs.map((log) => (
                              <div key={log.id} className="p-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs flex items-center justify-between">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono font-bold text-violet-400">{log.durationMinutes}m</span>
                                    <span className="font-mono text-[10px] text-[var(--text-muted)]">{log.date}</span>
                                    {log.milestoneReached && (
                                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold">
                                        ✓ {log.milestoneReached}
                                      </span>
                                    )}
                                  </div>
                                  {log.notes && (
                                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 italic">
                                      &ldquo;{log.notes}&rdquo;
                                    </p>
                                  )}
                                </div>
                                <button
                                  onClick={() => deleteSkillPracticeLog(skill.id, log.id)}
                                  className="text-[var(--text-muted)] hover:text-rose-400 p-1"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="pt-3 border-t border-[var(--card-border)]">
                    <button
                      onClick={() => {
                        setActiveSkillForLog(skill);
                        setPracticeMinutes('60');
                        setPracticeDate(new Date().toISOString().slice(0, 10));
                        setPracticeMilestone('');
                        setPracticeNotes('');
                      }}
                      className="w-full py-2 rounded-xl bg-[var(--pill-bg)] hover:bg-[var(--card-border)] text-violet-400 hover:text-violet-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Log Deliberate Practice</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SUB-TAB 3: REAL PERSONAL PROJECTS (EXECUTION)
         ───────────────────────────────────────────────────────────── */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs text-[var(--text-muted)] flex items-center gap-1 mr-1">
                <Filter className="w-3 h-3 text-[var(--text-muted)]" /> Status:
              </span>
              {['all', 'in_progress', 'planning', 'completed'].map((st) => (
                <button
                  key={st}
                  onClick={() => setProjectStatusFilter(st)}
                  className={`px-3 py-1 rounded-xl text-xs font-medium capitalize transition-all whitespace-nowrap cursor-pointer ${
                    projectStatusFilter === st
                      ? 'bg-violet-600 text-white font-semibold shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-bg)]'
                  }`}
                >
                  {st.replace('_', ' ')}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowAddProjectModal(true)}
              className="px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create Project</span>
            </button>
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            {filteredProjects.map((project) => {
              const completedMilestones = project.milestones.filter((m) => m.completed).length;
              const totalM = project.milestones.length;
              const milestonePct = totalM > 0 ? Math.round((completedMilestones / totalM) * 100) : 0;

              return (
                <div key={project.id} className="p-6 rounded-3xl creamy-surface border border-[var(--card-border)] space-y-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-[var(--card-border)]">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-base font-bold text-[var(--text-primary)]">{project.title}</h3>
                        <select
                          value={project.status}
                          onChange={(e) => updatePersonalProject(project.id, { status: e.target.value as any })}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-md border uppercase font-bold cursor-pointer bg-[var(--surface-bg)] ${
                            project.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                            project.status === 'in_progress' ? 'bg-violet-500/10 text-violet-400 border-violet-500/20' :
                            'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
                          }`}
                        >
                          <option value="planning">Planning</option>
                          <option value="in_progress">In Progress</option>
                          <option value="completed">Completed</option>
                          <option value="on_hold">On Hold</option>
                        </select>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mt-1">{project.description}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.outcomeUrl && (
                        <a
                          href={project.outcomeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-[var(--pill-bg)] hover:bg-[var(--card-border)] text-violet-400 hover:text-violet-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>View Artifact</span>
                        </a>
                      )}
                      <button
                        onClick={() => deletePersonalProject(project.id)}
                        className="text-[var(--text-muted)] hover:text-rose-400 p-1.5 transition-colors cursor-pointer"
                        title="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Linked Skills Chips */}
                  {project.linkedSkillIds && project.linkedSkillIds.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] text-[var(--text-muted)] font-mono">Linked Skills:</span>
                      {project.linkedSkillIds.map((skId) => {
                        const matched = skills.find((s) => s.id === skId);
                        if (!matched) return null;
                        return (
                          <span key={skId} className="px-2 py-0.5 rounded-md bg-[var(--pill-bg)] text-xs font-medium border border-[var(--card-border)] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: matched.color || '#8b5cf6' }} />
                            <span>{matched.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  )}

                  {/* Milestones Checklist */}
                  <div className="space-y-3 p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Execution Milestones ({completedMilestones}/{totalM})
                      </span>
                      <span className="font-mono text-xs font-bold text-emerald-400">{milestonePct}% Complete</span>
                    </div>

                    <div className="space-y-2">
                      {project.milestones.map((m) => (
                        <div key={m.id} className="flex items-center justify-between p-2 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)] text-xs">
                          <label className="flex items-center gap-2.5 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={m.completed}
                              onChange={() => toggleProjectMilestone(project.id, m.id)}
                              className="rounded bg-[var(--pill-bg)] border-[var(--card-border)] text-emerald-500"
                            />
                            <span className={m.completed ? 'line-through text-[var(--text-muted)]' : 'text-[var(--text-primary)] font-medium'}>
                              {m.title}
                            </span>
                            {m.completedAt && (
                              <span className="text-[10px] font-mono text-emerald-400">
                                (Done {m.completedAt})
                              </span>
                            )}
                          </label>

                          <button
                            onClick={() => deleteProjectMilestone(project.id, m.id)}
                            className="text-[var(--text-muted)] hover:text-rose-400 p-1"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Add Milestone Inline */}
                    <div className="flex gap-2 pt-1">
                      <input
                        type="text"
                        value={newMilestoneText[project.id] || ''}
                        onChange={(e) => setNewMilestoneText((prev) => ({ ...prev, [project.id]: e.target.value }))}
                        placeholder="Add concrete next milestone..."
                        className="flex-1 px-3 py-1.5 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                      />
                      <button
                        onClick={() => {
                          const txt = (newMilestoneText[project.id] || '').trim();
                          if (!txt) return;
                          addProjectMilestone(project.id, txt);
                          setNewMilestoneText((prev) => ({ ...prev, [project.id]: '' }));
                        }}
                        className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold cursor-pointer"
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  {/* Key Learnings & Post-Mortem */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[var(--text-primary)] block">
                      Key Learnings & Architectural Takeaways
                    </span>
                    {project.keyLearnings && project.keyLearnings.length > 0 ? (
                      <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] list-disc pl-4">
                        {project.keyLearnings.map((l, idx) => (
                          <li key={idx} className="leading-relaxed">&ldquo;{l}&rdquo;</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[11px] text-[var(--text-muted)] italic">No learnings logged yet.</p>
                    )}
                    {/* Add Key Learning Inline */}
                    <div className="flex gap-2 pt-2 border-t border-[var(--card-border)]">
                      <input
                        type="text"
                        value={newProjectLearningText[project.id] || ''}
                        onChange={(e) => setNewProjectLearningText((prev) => ({ ...prev, [project.id]: e.target.value }))}
                        placeholder="Add key takeaway or architectural lesson..."
                        className="flex-1 px-3 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                      />
                      <button
                        onClick={() => {
                          const txt = (newProjectLearningText[project.id] || '').trim();
                          if (!txt) return;
                          addProjectKeyLearning(project.id, txt);
                          setNewProjectLearningText((prev) => ({ ...prev, [project.id]: '' }));
                        }}
                        className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold cursor-pointer"
                      >
                        Add Lesson
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SUB-TAB 4: CURATED KNOWLEDGE & LEARNING SOURCES
         ───────────────────────────────────────────────────────────── */}
      {activeTab === 'learning' && (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs text-[var(--text-muted)] flex items-center gap-1 mr-1">
                <Filter className="w-3 h-3 text-[var(--text-muted)]" /> Status:
              </span>
              {['all', 'in_progress', 'completed', 'applied', 'want_to_consume'].map((st) => (
                <button
                  key={st}
                  onClick={() => setLearningStatusFilter(st)}
                  className={`px-3 py-1 rounded-xl text-xs font-medium capitalize transition-all whitespace-nowrap cursor-pointer ${
                    learningStatusFilter === st
                      ? 'bg-violet-600 text-white font-semibold shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-bg)]'
                  }`}
                >
                  {st.replace(/_/g, ' ')}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowAddLearningModal(true)}
              className="px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Track Resource</span>
            </button>
          </div>

          {/* Learning Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredLearningItems.map((item) => (
              <div key={item.id} className="p-5 rounded-3xl creamy-surface border border-[var(--card-border)] space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-[var(--pill-bg)] text-[var(--text-secondary)] font-mono text-[10px] uppercase font-bold border border-[var(--card-border)]">
                          {item.type}
                        </span>
                        <h4 className="font-bold text-sm text-[var(--text-primary)]">{item.title}</h4>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">by {item.creator}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={item.status}
                        onChange={(e) => updateLearningItem(item.id, { 
                          status: e.target.value as LearningStatus,
                          progressPercent: e.target.value === 'completed' || e.target.value === 'applied' ? 100 : item.progressPercent
                        })}
                        className="px-2.5 py-1 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[10px] font-mono text-[var(--text-primary)] cursor-pointer"
                      >
                        <option value="want_to_consume">Want to Consume</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="applied">Applied in Work</option>
                      </select>

                      <button
                        onClick={() => deleteLearningItem(item.id)}
                        className="text-[var(--text-muted)] hover:text-rose-400 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Key Takeaways */}
                  {item.keyTakeaways && item.keyTakeaways.length > 0 && (
                    <div className="space-y-1.5 p-3 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
                      <span className="text-[11px] font-semibold text-[var(--text-primary)] block">Key Takeaways:</span>
                      <ul className="space-y-1 text-xs text-[var(--text-secondary)] list-disc pl-4">
                        {item.keyTakeaways.map((t, idx) => (
                          <li key={idx} className="leading-relaxed">&ldquo;{t}&rdquo;</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Actionable Insights */}
                  {item.actionableInsights && item.actionableInsights.length > 0 && (
                    <div className="space-y-1.5 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                      <span className="text-[11px] font-semibold text-emerald-400 block flex items-center gap-1">
                        <Flame className="w-3 h-3" /> Actionable Application:
                      </span>
                      <ul className="space-y-1 text-emerald-300 list-disc pl-4">
                        {item.actionableInsights.map((ins, idx) => (
                          <li key={idx}>{ins}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Add Takeaway Input */}
                <div className="flex gap-2 pt-2 border-t border-[var(--card-border)]">
                  <input
                    type="text"
                    value={newLearningTakeawayText[item.id] || ''}
                    onChange={(e) => setNewLearningTakeawayText((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    placeholder="Extract takeaway or insight..."
                    className="flex-1 px-3 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                  />
                  <button
                    onClick={() => {
                      const txt = (newLearningTakeawayText[item.id] || '').trim();
                      if (!txt) return;
                      addLearningTakeaway(item.id, txt, false);
                      setNewLearningTakeawayText((prev) => ({ ...prev, [item.id]: '' }));
                    }}
                    className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold cursor-pointer"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SUB-TAB 5: MINDSET & WISDOM LEDGER (PRESERVED REVIEWS)
         ───────────────────────────────────────────────────────────── */}
      {activeTab === 'reflections' && (
        <div className="space-y-6">
          {/* Today's State of Mind Reflection */}
          <div className="p-6 rounded-3xl creamy-surface space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--card-border)] pb-3">
              <div>
                <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                  State of Mind & Self-Perception
                </h3>
                <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                  Reflections to understand changes over time — NOT objective measurements of your worth.
                </p>
              </div>
              <span className="text-xs font-mono text-rose-400 font-bold">
                Happiness: {happyScore}/10 · Confidence: {confidenceScore}/10 · Development: {developmentScore}/10
              </span>
            </div>

            <form onSubmit={handleLogRatings} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Happiness */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-secondary)] flex items-center gap-1.5 font-medium">
                      <Smile className="w-4 h-4 text-amber-400" /> Subjective Well-being
                    </span>
                    <span className="font-mono font-bold text-[var(--text-primary)]">{happyScore}/10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={happyScore}
                    onChange={(e) => setHappyScore(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <span className="text-[10px] text-[var(--text-muted)] block">Calmness & contentedness</span>
                </div>

                {/* Confidence */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-secondary)] flex items-center gap-1.5 font-medium">
                      <Shield className="w-4 h-4 text-indigo-400" /> Self-Efficacy / Agency
                    </span>
                    <span className="font-mono font-bold text-[var(--text-primary)]">{confidenceScore}/10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={confidenceScore}
                    onChange={(e) => setConfidenceScore(Number(e.target.value))}
                    className="w-full accent-indigo-400 cursor-pointer"
                  />
                  <span className="text-[10px] text-[var(--text-muted)] block">Confidence to handle challenges</span>
                </div>

                {/* Development */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-secondary)] flex items-center gap-1.5 font-medium">
                      <TrendingUp className="w-4 h-4 text-emerald-400" /> Growth Trajectory
                    </span>
                    <span className="font-mono font-bold text-[var(--text-primary)]">{developmentScore}/10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={developmentScore}
                    onChange={(e) => setDevelopmentScore(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <span className="text-[10px] text-[var(--text-muted)] block">Perceived clarity of progress</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] text-[var(--text-muted)]">Reflection / Context Note:</label>
                <input
                  type="text"
                  value={reflectionNote}
                  onChange={(e) => setReflectionNote(e.target.value)}
                  placeholder="e.g. Cleared difficult engineering blocker, felt deep relief and momentum"
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-[var(--text-muted)]">
                  Last saved: {growthRatings[0]?.date || 'Today'}
                </span>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  Log Daily Reflection
                </button>
              </div>

              {savedFeedback && (
                <div className="text-center text-xs font-medium text-emerald-400 animate-fadeIn">
                  ✓ State of mind logged to growthRatings ledger.
                </div>
              )}
            </form>
          </div>

          {/* Personal Objectives & Self-Mastery */}
          <div className="p-6 rounded-3xl creamy-surface space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Target className="w-4 h-4 text-cyan-400" /> Personal Objectives & Self-Mastery
                </h3>
                <p className="text-xs text-[var(--text-muted)]">Non-academic, character and habit objectives</p>
              </div>
              <button
                onClick={() => setShowObjModal(true)}
                className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] hover:bg-[var(--card-border)] text-xs text-[var(--text-primary)] font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 text-cyan-400" />
                <span>New Objective</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {objectives.map((obj) => (
                <div key={obj.id} className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-semibold text-xs text-[var(--text-primary)] block">{obj.title}</span>
                      <span className="text-[10px] text-cyan-400 font-mono">{obj.category} • Target {obj.targetDate}</span>
                    </div>
                    <button
                      onClick={() => deleteObjective(obj.id)}
                      className="text-[var(--text-muted)] hover:text-rose-400 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)]">
                      <span>Progress</span>
                      <span>{obj.progressPercent}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[var(--surface-bg)] overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${obj.progressPercent}%` }} />
                    </div>
                  </div>

                  <div className="flex gap-1 pt-1">
                    {[25, 50, 75, 100].map((step) => (
                      <button
                        key={step}
                        onClick={() => updateObjective(obj.id, { progressPercent: step })}
                        className={`flex-1 py-1 text-[10px] rounded-lg font-mono transition-all ${
                          obj.progressPercent >= step ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-[var(--surface-bg)] text-[var(--text-muted)]'
                        }`}
                      >
                        {step}%
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lessons Learned Ledger */}
          <div className="p-6 rounded-3xl creamy-surface space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-violet-400" /> Wisdom & Lessons Learned
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Principles extracted from daily experience to avoid repeating past mistakes
                </p>
              </div>
              <button
                onClick={() => setShowLessonModal(true)}
                className="px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Record Principle</span>
              </button>
            </div>

            <div className="space-y-3">
              {lessonsLearned.map((lesson) => (
                <div 
                  key={lesson.id}
                  className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-1.5 hover:border-[var(--text-muted)]/30 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-xs text-[var(--text-primary)]">{lesson.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--surface-bg)] text-violet-400 border border-violet-500/20">
                        {lesson.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">{lesson.date}</span>
                      <button
                        onClick={() => deleteLessonLearned(lesson.id)}
                        className="text-[var(--text-muted)] hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        title="Delete lesson"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    &ldquo;{lesson.reflection}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          MODAL: LOG DELIBERATE PRACTICE
         ───────────────────────────────────────────────────────────── */}
      {activeSkillForLog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setActiveSkillForLog(null)} />
          <form onSubmit={handleSavePracticeLog} className="relative z-10 w-full max-w-md p-6 rounded-3xl creamy-surface shadow-2xl space-y-4">
            <h3 className="text-base font-semibold text-[var(--text-primary)] pb-2 border-b border-[var(--card-border)] flex items-center gap-2">
              <Clock className="w-4 h-4 text-violet-400" />
              Log Practice for {activeSkillForLog.name}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Duration (Minutes):</label>
                <input
                  type="number"
                  min="5"
                  max="600"
                  value={practiceMinutes}
                  onChange={(e) => setPracticeMinutes(e.target.value)}
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Date:</label>
                <input
                  type="date"
                  value={practiceDate}
                  onChange={(e) => setPracticeDate(e.target.value)}
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Milestone / Breakthrough (optional):</label>
              <input
                type="text"
                placeholder="e.g. Cleared 10 recursive tree problems without hints"
                value={practiceMilestone}
                onChange={(e) => setPracticeMilestone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Observations & Notes:</label>
              <textarea
                rows={2}
                placeholder="What felt smooth? Where was cognitive friction?"
                value={practiceNotes}
                onChange={(e) => setPracticeNotes(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="flex gap-2 pt-2 border-t border-[var(--card-border)]">
              <button
                type="button"
                onClick={() => setActiveSkillForLog(null)}
                className="flex-1 py-2.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] text-xs font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold cursor-pointer"
              >
                Save Practice Session
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          MODAL: ADD NEW SKILL
         ───────────────────────────────────────────────────────────── */}
      {showAddSkillModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAddSkillModal(false)} />
          <form onSubmit={handleCreateSkill} className="relative z-10 w-full max-w-md p-6 rounded-3xl creamy-surface shadow-2xl space-y-4">
            <h3 className="text-base font-semibold text-[var(--text-primary)] pb-2 border-b border-[var(--card-border)] flex items-center gap-2">
              <Award className="w-4 h-4 text-violet-400" />
              Register New Skill
            </h3>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Skill Name:</label>
              <input
                type="text"
                placeholder="e.g. Distributed Systems Architecture, Classical Piano"
                value={newSkillName}
                onChange={(e) => setNewSkillName(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Category:</label>
                <select
                  value={newSkillCategory}
                  onChange={(e) => setNewSkillCategory(e.target.value as SkillCategory)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] capitalize"
                >
                  <option value="technical">Technical</option>
                  <option value="cognitive">Cognitive</option>
                  <option value="physical">Physical</option>
                  <option value="creative">Creative</option>
                  <option value="interpersonal">Interpersonal</option>
                  <option value="discipline">Discipline</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Target Practice Hours:</label>
                <input
                  type="number"
                  min="10"
                  max="1000"
                  value={newSkillTargetHours}
                  onChange={(e) => setNewSkillTargetHours(e.target.value)}
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Current Level:</label>
                <select
                  value={newSkillCurrentLevel}
                  onChange={(e) => setNewSkillCurrentLevel(e.target.value as ProficiencyLevel)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] capitalize"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="mastery">Mastery</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Target Level:</label>
                <select
                  value={newSkillTargetLevel}
                  onChange={(e) => setNewSkillTargetLevel(e.target.value as ProficiencyLevel)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] capitalize"
                >
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="mastery">Mastery</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Color Tag:</label>
              <div className="flex gap-2">
                {['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981', '#ec4899', '#f59e0b'].map((c) => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => setNewSkillColor(c)}
                    className={`w-6 h-6 rounded-full border-2 transition-all ${newSkillColor === c ? 'scale-110 border-white' : 'border-transparent'}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Notes / Scope:</label>
              <input
                type="text"
                placeholder="Key concepts, practice methodology"
                value={newSkillNotes}
                onChange={(e) => setNewSkillNotes(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="flex gap-2 pt-2 border-t border-[var(--card-border)]">
              <button
                type="button"
                onClick={() => setShowAddSkillModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] text-xs font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold cursor-pointer"
              >
                Register Skill
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          MODAL: ADD PERSONAL PROJECT
         ───────────────────────────────────────────────────────────── */}
      {showAddProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAddProjectModal(false)} />
          <form onSubmit={handleCreateProject} className="relative z-10 w-full max-w-lg p-6 rounded-3xl creamy-surface shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-base font-semibold text-[var(--text-primary)] pb-2 border-b border-[var(--card-border)] flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-violet-400" />
              Define Personal Project
            </h3>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Project Title:</label>
              <input
                type="text"
                placeholder="e.g. Custom Markdown Parser, Sub-20 5K Training Plan"
                value={newProjTitle}
                onChange={(e) => setNewProjTitle(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Category:</label>
                <input
                  type="text"
                  placeholder="e.g. Software, Athletic, Repertoire"
                  value={newProjCategory}
                  onChange={(e) => setNewProjCategory(e.target.value)}
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Target Completion Date:</label>
                <input
                  type="date"
                  value={newProjTargetDate}
                  onChange={(e) => setNewProjTargetDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Description & Goals:</label>
              <textarea
                rows={2}
                placeholder="What is the deliverable, and what constitutes finished proof?"
                value={newProjDescription}
                onChange={(e) => setNewProjDescription(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Link to Developing Skills:</label>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => {
                  const isLinked = newProjLinkedSkillIds.includes(s.id);
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => {
                        setNewProjLinkedSkillIds((prev) => 
                          isLinked ? prev.filter((id) => id !== s.id) : [...prev, s.id]
                        );
                      }}
                      className={`px-2.5 py-1 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                        isLinked ? 'bg-violet-600 text-white border-violet-500 shadow-sm' : 'bg-[var(--pill-bg)] text-[var(--text-secondary)] border-[var(--card-border)]'
                      }`}
                    >
                      {s.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Initial Milestones (1 per line):</label>
              <textarea
                rows={3}
                value={initialMilestones.join('\n')}
                onChange={(e) => setInitialMilestones(e.target.value.split('\n'))}
                placeholder="Phase 1: Architecture&#10;Phase 2: Core Algorithm&#10;Phase 3: Final Delivery"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Outcome URL / Repo (optional):</label>
              <input
                type="url"
                placeholder="https://github.com/..."
                value={newProjOutcomeUrl}
                onChange={(e) => setNewProjOutcomeUrl(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
              />
            </div>

            <div className="flex gap-2 pt-2 border-t border-[var(--card-border)]">
              <button
                type="button"
                onClick={() => setShowAddProjectModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] text-xs font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold cursor-pointer"
              >
                Launch Project
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          MODAL: ADD LEARNING RESOURCE
         ───────────────────────────────────────────────────────────── */}
      {showAddLearningModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAddLearningModal(false)} />
          <form onSubmit={handleCreateLearningItem} className="relative z-10 w-full max-w-md p-6 rounded-3xl creamy-surface shadow-2xl space-y-4">
            <h3 className="text-base font-semibold text-[var(--text-primary)] pb-2 border-b border-[var(--card-border)] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-violet-400" />
              Track Learning Source
            </h3>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Title:</label>
              <input
                type="text"
                placeholder="e.g. Structure and Interpretation of Computer Programs"
                value={newLearnTitle}
                onChange={(e) => setNewLearnTitle(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Author / Mentor / Creator:</label>
                <input
                  type="text"
                  placeholder="e.g. Martin Kleppmann"
                  value={newLearnCreator}
                  onChange={(e) => setNewLearnCreator(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Resource Type:</label>
                <select
                  value={newLearnType}
                  onChange={(e) => setNewLearnType(e.target.value as LearningItemType)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] capitalize"
                >
                  <option value="book">Book</option>
                  <option value="course">Course</option>
                  <option value="paper">Research Paper</option>
                  <option value="video">Lecture / Video</option>
                  <option value="article">Technical Article</option>
                  <option value="mentor">Mentor Advice</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Status:</label>
              <select
                value={newLearnStatus}
                onChange={(e) => setNewLearnStatus(e.target.value as LearningStatus)}
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              >
                <option value="want_to_consume">Want to Consume</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="applied">Applied in Real Work</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Primary Takeaway (optional):</label>
              <input
                type="text"
                placeholder="What core concept is worth remembering?"
                value={newLearnTakeaway}
                onChange={(e) => setNewLearnTakeaway(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="flex gap-2 pt-2 border-t border-[var(--card-border)]">
              <button
                type="button"
                onClick={() => setShowAddLearningModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] text-xs font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold cursor-pointer"
              >
                Track Resource
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          MODALS: LESSONS & OBJECTIVES (PRESERVED)
         ───────────────────────────────────────────────────────────── */}
      {showLessonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowLessonModal(false)} />
          <form onSubmit={handleAddLesson} className="relative z-10 w-full max-w-lg p-6 rounded-3xl creamy-surface shadow-2xl space-y-4">
            <h3 className="text-base font-semibold text-[var(--text-primary)] pb-2 border-b border-[var(--card-border)]">
              Record Lesson / Principle
            </h3>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Principle / Title:</label>
              <input
                type="text"
                placeholder="e.g. Energy precedes momentum, Sleep is a multiplier"
                value={lessonTitle}
                onChange={(e) => setLessonTitle(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Category:</label>
              <select
                value={lessonCategory}
                onChange={(e) => setLessonCategory(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              >
                <option value="Discipline">Discipline</option>
                <option value="Systems">Systems</option>
                <option value="Mindset">Mindset</option>
                <option value="Health">Health</option>
                <option value="Relationships">Relationships</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Observation & Reflection:</label>
              <textarea
                rows={3}
                placeholder="What did you experience, what pattern did you notice, and what should you do going forward?"
                value={lessonText}
                onChange={(e) => setLessonText(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowLessonModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] text-xs font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold cursor-pointer"
              >
                Save Principle
              </button>
            </div>
          </form>
        </div>
      )}

      {showObjModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowObjModal(false)} />
          <form onSubmit={handleAddObjective} className="relative z-10 w-full max-w-md p-6 rounded-3xl creamy-surface shadow-2xl space-y-4">
            <h3 className="text-base font-semibold text-[var(--text-primary)] pb-2 border-b border-[var(--card-border)]">
              Create Personal Objective
            </h3>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Objective Title:</label>
              <input
                type="text"
                placeholder="e.g. Read 20 physical books this year"
                value={objTitle}
                onChange={(e) => setObjTitle(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Category:</label>
                <select
                  value={objCategory}
                  onChange={(e) => setObjCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                >
                  <option value="Mindset">Mindset</option>
                  <option value="Health">Health</option>
                  <option value="Discipline">Discipline</option>
                  <option value="Reading">Reading</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Target Date:</label>
                <input
                  type="date"
                  value={objTargetDate}
                  onChange={(e) => setObjTargetDate(e.target.value)}
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowObjModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] text-xs font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold cursor-pointer"
              >
                Save Objective
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
