import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Clock, 
  GraduationCap, 
  Plus, 
  Trash2, 
  Award,
  BookOpen,
  CheckCircle2,
  FolderPlus,
  TrendingUp,
  BarChart3,
  Edit3,
  Sliders,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Calendar,
  RefreshCw,
  ShieldCheck,
  X
} from 'lucide-react';
import { AssessmentRecord, AssessmentType } from '../types';

export const StudiesView: React.FC = () => {
  const { 
    studySeconds, 
    isStudyActive, 
    studySubject, 
    setStudySubject, 
    toggleStudyTimer, 
    resetStudyTimer,
    saveStudySession,
    studySessions,
    addStudySession,
    deleteStudySession,
    subjects,
    addSubject,
    deleteSubject,
    addSubjectComponent,
    deleteSubjectComponent,
    academicYears,
    activeAcademicYearId,
    setActiveAcademicYearId,
    activeTermId,
    addAcademicYear,
    addAcademicTerm,
    assessmentRecords,
    addAssessmentRecord,
    updateAssessmentRecord,
    deleteAssessmentRecord,
    mergePortalAssessments,
  } = useData();

  // Primary navigation sub-tabs
  const [activeTab, setActiveTab] = useState<'dashboard' | 'markbook' | 'structure' | 'sessions'>('dashboard');

  // Filter state for Academic Dashboard & Markbook
  const [selectedTermFilter, setSelectedTermFilter] = useState<string>('all');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(subjects[0]?.id || 'sub_1');

  // Modal states
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  const [editingAssessmentId, setEditingAssessmentId] = useState<string | null>(null);
  const [showPortalModal, setShowPortalModal] = useState(false);
  const [portalJsonInput, setPortalJsonInput] = useState('');
  const [portalSyncFeedback, setPortalSyncFeedback] = useState<string | null>(null);

  // Assessment form state
  const [asmName, setAsmName] = useState('');
  const [asmSubjectId, setAsmSubjectId] = useState(subjects[0]?.id || 'sub_1');
  const [asmTermId, setAsmTermId] = useState(activeTermId || 'term_1');
  const [asmType, setAsmType] = useState<AssessmentType>('midterm');
  const [asmComponentId, setAsmComponentId] = useState<string>('');
  const [asmMarksObtained, setAsmMarksObtained] = useState<number>(85);
  const [asmMaximumMarks, setAsmMaximumMarks] = useState<number>(100);
  const [asmDate, setAsmDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [asmNotes, setAsmNotes] = useState('');
  const [asmIsIncluded, setAsmIsIncluded] = useState(true);

  // Subject structure & component forms
  const [newSubjName, setNewSubjName] = useState('');
  const [newSubjAbbr, setNewSubjAbbr] = useState('');
  const [newSubjTargetHours, setNewSubjTargetHours] = useState('8');
  const [newSubjTargetPct, setNewSubjTargetPct] = useState('90');
  const [newSubjColor, setNewSubjColor] = useState('#8b5cf6');

  // Component form state
  const [activeComponentSubjId, setActiveComponentSubjId] = useState<string | null>(null);
  const [newCompName, setNewCompName] = useState('');
  const [newCompMaxMarks, setNewCompMaxMarks] = useState('70');
  const [newCompWeight, setNewCompWeight] = useState('70');

  // Year & Term modal/form state
  const [newYearName, setNewYearName] = useState('');
  const [newTermName, setNewTermName] = useState('');
  const [selectedYearForTerm, setSelectedYearForTerm] = useState(activeAcademicYearId);

  // Session timer / manual session logging state
  const [sessionSavedMsg, setSessionSavedMsg] = useState(false);
  const [manualSubject, setManualSubject] = useState(subjects[0]?.name || 'Computer Science');
  const [manualDurationMinutes, setManualDurationMinutes] = useState('45');
  const [manualNotes, setManualNotes] = useState('');
  const [manualDate, setManualDate] = useState(new Date().toISOString().slice(0, 10));

  // ─────────────────────────────────────────────────────────────
  // 1. MATHEMATICAL ACADEMIC ENGINE CALCULATIONS
  // ─────────────────────────────────────────────────────────────

  // Active Year object & its terms
  const currentAcademicYear = academicYears.find((y) => y.id === activeAcademicYearId) || academicYears[0];
  const currentTerms = currentAcademicYear?.terms || [];

  // Filtered assessment records based on selected term filter
  const filteredAssessments = useMemo(() => {
    return assessmentRecords.filter((a) => {
      const matchesYear = a.academicYearId === activeAcademicYearId;
      const matchesTerm = selectedTermFilter === 'all' ? true : a.termId === selectedTermFilter;
      return matchesYear && matchesTerm;
    });
  }, [assessmentRecords, activeAcademicYearId, selectedTermFilter]);

  // Overall Weighted Calculations (Condition: NEVER simple average of percentages)
  // Weighted percentage = (sum(Marks Obtained) / sum(Maximum Marks)) * 100
  const overallCalculations = useMemo(() => {
    const included = filteredAssessments.filter((a) => a.isIncludedInFinal);
    const totalObtained = included.reduce((sum, a) => sum + a.marksObtained, 0);
    const totalMaximum = included.reduce((sum, a) => sum + a.maximumMarks, 0);
    const overallPercentage = totalMaximum > 0 
      ? Number(((totalObtained / totalMaximum) * 100).toFixed(1)) 
      : 0;

    return {
      totalObtained,
      totalMaximum,
      overallPercentage,
      totalCount: included.length,
    };
  }, [filteredAssessments]);

  // Subject-wise Performance Calculations & Ranking Ladder
  const subjectRankings = useMemo(() => {
    return subjects.map((subj) => {
      // Find assessments for this subject
      const subjAssessments = filteredAssessments.filter((a) => a.subjectId === subj.id && a.isIncludedInFinal);
      const totalObtained = subjAssessments.reduce((sum, a) => sum + a.marksObtained, 0);
      const totalMaximum = subjAssessments.reduce((sum, a) => sum + a.maximumMarks, 0);

      // Check if subject has components configured (e.g. Theory 70/80 + Practical 30/20)
      let calculatedPercentage = 0;
      const hasComponents = subj.components && subj.components.length > 0;

      if (hasComponents && subj.components) {
        // Calculate performance across defined components with weights
        let totalWeightedScore = 0;
        let totalAssignedWeight = 0;

        subj.components.forEach((comp) => {
          const compAssessments = subjAssessments.filter((a) => a.componentId === comp.id);
          const compObtained = compAssessments.reduce((sum, a) => sum + a.marksObtained, 0);
          const compMax = compAssessments.reduce((sum, a) => sum + a.maximumMarks, 0);

          if (compMax > 0) {
            const compPct = (compObtained / compMax) * 100;
            const weight = comp.weightPercent || comp.maximumMarks;
            totalWeightedScore += compPct * weight;
            totalAssignedWeight += weight;
          }
        });

        if (totalAssignedWeight > 0) {
          calculatedPercentage = Number((totalWeightedScore / totalAssignedWeight).toFixed(1));
        } else if (totalMaximum > 0) {
          calculatedPercentage = Number(((totalObtained / totalMaximum) * 100).toFixed(1));
        }
      } else {
        // Standard weighted percentage
        calculatedPercentage = totalMaximum > 0 
          ? Number(((totalObtained / totalMaximum) * 100).toFixed(1)) 
          : 0;
      }

      // Best and lowest assessment
      let bestAssessment: AssessmentRecord | null = null;
      let lowestAssessment: AssessmentRecord | null = null;
      let bestPct = -1;
      let lowestPct = 101;

      subjAssessments.forEach((a) => {
        const pct = (a.marksObtained / a.maximumMarks) * 100;
        if (pct > bestPct) {
          bestPct = pct;
          bestAssessment = a;
        }
        if (pct < lowestPct) {
          lowestPct = pct;
          lowestAssessment = a;
        }
      });

      const target = subj.targetPercentage || 90;
      const targetDelta = Number((calculatedPercentage - target).toFixed(1));

      return {
        subject: subj,
        totalObtained,
        totalMaximum,
        percentage: calculatedPercentage,
        target,
        targetDelta,
        assessmentCount: subjAssessments.length,
        bestAssessment: bestAssessment as AssessmentRecord | null,
        lowestAssessment: lowestAssessment as AssessmentRecord | null,
        hasComponents: Boolean(hasComponents),
      };
    }).sort((a, b) => b.percentage - a.percentage); // Descending rank
  }, [subjects, filteredAssessments]);

  // Strongest and Weakest subjects
  const rankedWithData = subjectRankings.filter((s) => s.assessmentCount > 0);
  const strongestSubject = rankedWithData.length > 0 ? rankedWithData[0] : null;
  const weakestSubject = rankedWithData.length > 1 ? rankedWithData[rankedWithData.length - 1] : null;

  // Term-wise Comparisons
  const termComparisons = useMemo(() => {
    return currentTerms.map((term) => {
      const termAssessments = assessmentRecords.filter(
        (a) => a.academicYearId === activeAcademicYearId && a.termId === term.id && a.isIncludedInFinal
      );
      const totalObtained = termAssessments.reduce((sum, a) => sum + a.marksObtained, 0);
      const totalMaximum = termAssessments.reduce((sum, a) => sum + a.maximumMarks, 0);
      const percentage = totalMaximum > 0 ? Number(((totalObtained / totalMaximum) * 100).toFixed(1)) : 0;

      return {
        term,
        totalObtained,
        totalMaximum,
        percentage,
        count: termAssessments.length,
      };
    });
  }, [activeAcademicYearId, assessmentRecords, currentTerms]);

  // Assessment Type Distribution
  const assessmentTypeStats = useMemo(() => {
    const types: AssessmentType[] = ['midterm', 'unit_test', 'practical', 'internal', 'assignment', 'final', 'quiz'];
    return types.map((t) => {
      const matching = filteredAssessments.filter((a) => a.type === t && a.isIncludedInFinal);
      const totalObtained = matching.reduce((sum, a) => sum + a.marksObtained, 0);
      const totalMaximum = matching.reduce((sum, a) => sum + a.maximumMarks, 0);
      const pct = totalMaximum > 0 ? Number(((totalObtained / totalMaximum) * 100).toFixed(1)) : 0;
      return {
        type: t,
        count: matching.length,
        percentage: pct,
        totalObtained,
        totalMaximum,
      };
    }).filter((t) => t.count > 0);
  }, [filteredAssessments]);

  // Currently Selected Subject for Markbook Tab
  const activeSubjectData = subjectRankings.find((s) => s.subject.id === selectedSubjectId) || subjectRankings[0];
  const activeSubjectAssessments = useMemo(() => {
    return filteredAssessments.filter((a) => a.subjectId === (activeSubjectData?.subject.id || 'sub_1'));
  }, [filteredAssessments, activeSubjectData]);

  // ─────────────────────────────────────────────────────────────
  // 2. FOCUS TIMER & VERIFIED SESSIONS (CONDITION 5)
  // ─────────────────────────────────────────────────────────────

  const formatTimer = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSaveTimerSession = () => {
    if (studySeconds < 30) {
      alert('Focus session must be at least 30 seconds to log.');
      return;
    }
    saveStudySession();
    setSessionSavedMsg(true);
    setTimeout(() => setSessionSavedMsg(false), 2500);
  };

  const handleSaveManualSession = (e: React.FormEvent) => {
    e.preventDefault();
    const mins = parseInt(manualDurationMinutes, 10);
    if (!mins || mins <= 0) return;
    addStudySession({
      subject: manualSubject,
      durationSeconds: mins * 60,
      timestamp: `${manualDate}T12:00:00Z`,
      notes: manualNotes.trim() || undefined,
      sessionType: 'manual',
    });
    setManualNotes('');
    setSessionSavedMsg(true);
    setTimeout(() => setSessionSavedMsg(false), 2500);
  };

  // Calculate verifiable total study minutes from actual recorded sessions (Condition 5)
  const totalVerifiedMinutes = studySessions.reduce((acc, s) => acc + Math.round(s.durationSeconds / 60), 0);
  const totalVerifiedHours = (totalVerifiedMinutes / 60).toFixed(1);

  // 7-day study totals
  const todayObj = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(todayObj.getDate() - 7);
  const past7DaysSessions = studySessions.filter((s) => new Date(s.timestamp) >= sevenDaysAgo);
  const past7DaysMinutes = past7DaysSessions.reduce((acc, s) => acc + Math.round(s.durationSeconds / 60), 0);
  const past7DaysHours = (past7DaysMinutes / 60).toFixed(1);

  // ─────────────────────────────────────────────────────────────
  // 3. ASSESSMENT CRUD HANDLERS
  // ─────────────────────────────────────────────────────────────

  const handleOpenAddAssessment = () => {
    setEditingAssessmentId(null);
    setAsmName('');
    setAsmSubjectId(selectedSubjectId);
    setAsmTermId(activeTermId || 'term_1');
    setAsmType('unit_test');
    setAsmComponentId('');
    setAsmMarksObtained(85);
    setAsmMaximumMarks(100);
    setAsmDate(new Date().toISOString().slice(0, 10));
    setAsmNotes('');
    setAsmIsIncluded(true);
    setShowAssessmentModal(true);
  };

  const handleOpenEditAssessment = (record: AssessmentRecord) => {
    setEditingAssessmentId(record.id);
    setAsmName(record.name);
    setAsmSubjectId(record.subjectId);
    setAsmTermId(record.termId);
    setAsmType(record.type);
    setAsmComponentId(record.componentId || '');
    setAsmMarksObtained(record.marksObtained);
    setAsmMaximumMarks(record.maximumMarks);
    setAsmDate(record.date);
    setAsmNotes(record.notes || '');
    setAsmIsIncluded(record.isIncludedInFinal);
    setShowAssessmentModal(true);
  };

  const handleSaveAssessment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!asmName.trim()) return;

    if (editingAssessmentId) {
      updateAssessmentRecord(editingAssessmentId, {
        name: asmName.trim(),
        subjectId: asmSubjectId,
        academicYearId: activeAcademicYearId,
        termId: asmTermId,
        type: asmType,
        componentId: asmComponentId || undefined,
        marksObtained: Number(asmMarksObtained),
        maximumMarks: Number(asmMaximumMarks),
        date: asmDate,
        notes: asmNotes.trim() || undefined,
        isIncludedInFinal: asmIsIncluded,
      });
    } else {
      addAssessmentRecord({
        name: asmName.trim(),
        subjectId: asmSubjectId,
        academicYearId: activeAcademicYearId,
        termId: asmTermId,
        type: asmType,
        componentId: asmComponentId || undefined,
        marksObtained: Number(asmMarksObtained),
        maximumMarks: Number(asmMaximumMarks),
        date: asmDate,
        notes: asmNotes.trim() || undefined,
        isIncludedInFinal: asmIsIncluded,
      });
    }

    setShowAssessmentModal(false);
  };

  // ─────────────────────────────────────────────────────────────
  // 4. SUBJECT & COMPONENT CRUD HANDLERS
  // ─────────────────────────────────────────────────────────────

  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubjName.trim()) return;
    addSubject({
      name: newSubjName.trim(),
      abbreviation: newSubjAbbr.trim().toUpperCase() || newSubjName.slice(0, 3).toUpperCase(),
      targetWeeklyHours: parseInt(newSubjTargetHours, 10) || 8,
      targetPercentage: parseInt(newSubjTargetPct, 10) || 90,
      color: newSubjColor,
      academicYearId: activeAcademicYearId,
      components: [],
    });
    setNewSubjName('');
    setNewSubjAbbr('');
  };

  const handleAddComponent = (subjectId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompName.trim()) return;
    addSubjectComponent(subjectId, {
      name: newCompName.trim(),
      maximumMarks: Number(newCompMaxMarks) || 70,
      weightPercent: Number(newCompWeight) || 70,
    });
    setNewCompName('');
    setActiveComponentSubjId(null);
  };

  const handleAddAcademicYear = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newYearName.trim()) return;
    addAcademicYear({
      name: newYearName.trim(),
      isCurrent: false,
      terms: [
        { id: `term_${Date.now()}_1`, name: 'Term 1' },
        { id: `term_${Date.now()}_2`, name: 'Term 2' },
        { id: `term_${Date.now()}_3`, name: 'Final Examination' },
      ],
    });
    setNewYearName('');
  };

  const handleAddTerm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTermName.trim()) return;
    addAcademicTerm(selectedYearForTerm, newTermName.trim());
    setNewTermName('');
  };

  const handleMergePortalPayload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!portalJsonInput.trim()) return;
    try {
      const parsed = JSON.parse(portalJsonInput);
      const incomingAsms = Array.isArray(parsed.assessments) ? parsed.assessments : (Array.isArray(parsed) ? parsed : []);
      if (incomingAsms.length === 0) {
        setPortalSyncFeedback('No valid assessment records found in payload.');
        return;
      }
      const res = mergePortalAssessments(incomingAsms);
      setPortalSyncFeedback(`✔ Ingested ${res.added} new assessments (${res.updated} updated, ${res.unchanged} unchanged). Markbook updated.`);
      setPortalJsonInput('');
    } catch (err: any) {
      setPortalSyncFeedback(`❌ Error parsing portal JSON: ${err.message}`);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* ── TOP HEADER & ACADEMIC COCKPIT BAR ── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
            <span>Academic Markbook & Performance Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Academic Ledger & Studies
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-2xl">
            Mathematical weighted scoring, assessment components, subject rankings, and verified session logs.
          </p>
        </div>

        {/* Global Academic Telemetry Chips */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setShowPortalModal(true)}
            className="px-3 py-2 rounded-2xl bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 border border-violet-500/30 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Portal Sync (5 PM IST)</span>
          </button>

          <div className="px-3.5 py-2 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs">
            <span className="text-[var(--text-muted)] block text-[10px] uppercase font-mono">Weighted Overall</span>
            <span className={`font-mono font-bold text-sm ${
              overallCalculations.overallPercentage >= 90 ? 'text-emerald-400' :
              overallCalculations.overallPercentage >= 80 ? 'text-violet-400' : 'text-amber-400'
            }`}>
              {overallCalculations.overallPercentage}%
            </span>
            <span className="text-[10px] text-[var(--text-muted)] ml-1 font-mono">
              ({overallCalculations.totalObtained}/{overallCalculations.totalMaximum})
            </span>
          </div>

          <div className="px-3.5 py-2 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs">
            <span className="text-[var(--text-muted)] block text-[10px] uppercase font-mono">Active Term</span>
            <span className="font-semibold text-[var(--text-primary)]">
              {currentTerms.find((t) => t.id === activeTermId)?.name || 'Term Cycle'}
            </span>
          </div>

          <div className="px-3.5 py-2 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs">
            <span className="text-[var(--text-muted)] block text-[10px] uppercase font-mono">Verified Study</span>
            <span className="font-mono font-bold text-violet-400 text-sm">{totalVerifiedHours}h</span>
            <span className="text-[10px] text-[var(--text-muted)] ml-1">total</span>
          </div>
        </div>
      </div>

      {/* ── ACADEMIC YEAR & FILTER BAR ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
        {/* Academic Year Selector */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-[var(--text-muted)] flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-violet-400" /> Academic Year:
          </span>
          <select
            value={activeAcademicYearId}
            onChange={(e) => {
              setActiveAcademicYearId(e.target.value);
              setSelectedYearForTerm(e.target.value);
            }}
            className="px-3 py-1.5 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)] text-xs font-semibold text-[var(--text-primary)] cursor-pointer"
          >
            {academicYears.map((ay) => (
              <option key={ay.id} value={ay.id}>
                {ay.name} {ay.isCurrent ? '• Active' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Term Scope Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
            <Filter className="w-3 h-3 text-[var(--text-muted)]" /> Scope:
          </span>
          <button
            onClick={() => setSelectedTermFilter('all')}
            className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
              selectedTermFilter === 'all'
                ? 'bg-violet-600 text-white font-semibold shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-bg)]'
            }`}
          >
            All Terms (Cumulative)
          </button>
          {currentTerms.map((term) => (
            <button
              key={term.id}
              onClick={() => setSelectedTermFilter(term.id)}
              className={`px-3 py-1 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                selectedTermFilter === term.id
                  ? 'bg-violet-600 text-white font-semibold shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-bg)]'
              }`}
            >
              {term.name}
            </button>
          ))}
        </div>
      </div>

      {/* ── NAVIGATION SUB-TABS ── */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all ${
            activeTab === 'dashboard'
              ? 'bg-[var(--surface-bg)] text-violet-400 font-semibold shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Academic Dashboard</span>
        </button>

        <button
          onClick={() => setActiveTab('markbook')}
          className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all ${
            activeTab === 'markbook'
              ? 'bg-[var(--surface-bg)] text-violet-400 font-semibold shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Subject Markbooks ({assessmentRecords.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('structure')}
          className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all ${
            activeTab === 'structure'
              ? 'bg-[var(--surface-bg)] text-violet-400 font-semibold shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Curriculum & Structure ({subjects.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('sessions')}
          className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all ${
            activeTab === 'sessions'
              ? 'bg-[var(--surface-bg)] text-violet-400 font-semibold shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Focus Stopwatch & Logs ({studySessions.length})</span>
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SUB-TAB 1: ACADEMIC DASHBOARD & RANKINGS
         ───────────────────────────────────────────────────────────── */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Overall Weighted Card */}
            <div className="p-5 rounded-3xl creamy-surface space-y-3">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span className="font-semibold uppercase tracking-wider text-[11px]">Cumulative Academic Standing</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[var(--pill-bg)]">Strict Weighted</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className={`text-4xl font-mono font-light tracking-tight ${
                  overallCalculations.overallPercentage >= 90 ? 'text-emerald-400' :
                  overallCalculations.overallPercentage >= 80 ? 'text-violet-400' : 'text-amber-400'
                }`}>
                  {overallCalculations.overallPercentage}%
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  {overallCalculations.totalObtained} / {overallCalculations.totalMaximum} marks
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                Calculated by exact marks obtained across {overallCalculations.totalCount} assessments divided by total possible marks.
              </p>
            </div>

            {/* Strongest Subject Card */}
            <div className="p-5 rounded-3xl creamy-surface space-y-3">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span className="font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1.5 text-emerald-400">
                  <ArrowUpRight className="w-3.5 h-3.5" /> Strongest Discipline
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Rank #1
                </span>
              </div>
              {strongestSubject ? (
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl font-bold text-[var(--text-primary)]">
                      {strongestSubject.subject.name}
                    </span>
                    <span className="text-2xl font-mono font-bold text-emerald-400">
                      {strongestSubject.percentage}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-[var(--text-muted)] font-mono">
                    <span>Target: {strongestSubject.target}%</span>
                    <span className={strongestSubject.targetDelta >= 0 ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                      ({strongestSubject.targetDelta >= 0 ? '+' : ''}{strongestSubject.targetDelta}% vs target)
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-[var(--text-muted)] py-3">No assessment records yet.</p>
              )}
            </div>

            {/* Focus / Weakest Subject Card */}
            <div className="p-5 rounded-3xl creamy-surface space-y-3">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span className="font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1.5 text-amber-400">
                  <ArrowDownRight className="w-3.5 h-3.5" /> Growth Priority
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Attention
                </span>
              </div>
              {weakestSubject ? (
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl font-bold text-[var(--text-primary)]">
                      {weakestSubject.subject.name}
                    </span>
                    <span className="text-2xl font-mono font-bold text-amber-400">
                      {weakestSubject.percentage}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-[var(--text-muted)] font-mono">
                    <span>Target: {weakestSubject.target}%</span>
                    <span className="text-amber-400 font-bold">
                      ({weakestSubject.targetDelta >= 0 ? '+' : ''}{weakestSubject.targetDelta}% gap)
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-[var(--text-muted)] py-3">All disciplines currently balanced.</p>
              )}
            </div>
          </div>

          {/* Subject Performance Ranking Ladder */}
          <div className="p-6 rounded-3xl creamy-surface space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[var(--card-border)]">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-violet-400" />
                  Subject Ranking Ladder (Performance Sorted)
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Weighted percentage across assessments, comparing actual achievement to target thresholds.
                </p>
              </div>

              <button
                onClick={handleOpenAddAssessment}
                className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Log Assessment</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[var(--card-border)] text-[var(--text-muted)] uppercase tracking-wider font-mono text-[10px]">
                    <th className="py-2.5 px-3">Rank</th>
                    <th className="py-2.5 px-3">Subject / Code</th>
                    <th className="py-2.5 px-3">Marks Ratio</th>
                    <th className="py-2.5 px-3">Score %</th>
                    <th className="py-2.5 px-3">Target %</th>
                    <th className="py-2.5 px-3">Distance</th>
                    <th className="py-2.5 px-3">Assessments</th>
                    <th className="py-2.5 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--card-border)]">
                  {subjectRankings.map((rank, idx) => {
                    const isTop = idx === 0 && rank.assessmentCount > 0;
                    return (
                      <tr key={rank.subject.id} className="hover:bg-[var(--pill-bg)] transition-colors">
                        <td className="py-3 px-3 font-mono font-bold text-[var(--text-muted)]">
                          {isTop ? (
                            <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px]">
                              #1 TOP
                            </span>
                          ) : (
                            `#${idx + 1}`
                          )}
                        </td>

                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: rank.subject.color || '#8b5cf6' }} />
                            <span className="font-semibold text-[var(--text-primary)]">{rank.subject.name}</span>
                            {rank.subject.abbreviation && (
                              <span className="px-1.5 py-0.5 rounded bg-[var(--surface-bg)] text-[var(--text-muted)] font-mono text-[10px]">
                                {rank.subject.abbreviation}
                              </span>
                            )}
                          </div>
                        </td>

                        <td className="py-3 px-3 font-mono text-[var(--text-secondary)]">
                          {rank.totalObtained} / {rank.totalMaximum}
                        </td>

                        <td className="py-3 px-3 font-mono font-bold text-sm">
                          <span className={
                            rank.percentage >= 90 ? 'text-emerald-400' :
                            rank.percentage >= 80 ? 'text-violet-400' : 'text-amber-400'
                          }>
                            {rank.percentage}%
                          </span>
                        </td>

                        <td className="py-3 px-3 font-mono text-[var(--text-muted)]">
                          {rank.target}%
                        </td>

                        <td className="py-3 px-3 font-mono">
                          <span className={`inline-flex items-center gap-0.5 ${
                            rank.targetDelta >= 0 ? 'text-emerald-400' : 'text-amber-400'
                          }`}>
                            {rank.targetDelta >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                            {rank.targetDelta >= 0 ? `+${rank.targetDelta}%` : `${rank.targetDelta}%`}
                          </span>
                        </td>

                        <td className="py-3 px-3 font-mono text-[var(--text-muted)]">
                          {rank.assessmentCount} recorded
                        </td>

                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => {
                              setSelectedSubjectId(rank.subject.id);
                              setActiveTab('markbook');
                            }}
                            className="px-2.5 py-1 rounded-lg bg-[var(--pill-bg)] hover:bg-[var(--card-border)] text-violet-400 hover:text-violet-300 transition-colors text-[11px] font-medium cursor-pointer"
                          >
                            Open Markbook →
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Academic Progression: Term-Wise Comparison & Assessment Type Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Term-by-Term Comparison */}
            <div className="p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-violet-400" />
                  Academic Term Comparison
                </h3>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Multi-Cycle Progression</span>
              </div>

              <div className="space-y-3">
                {termComparisons.map((tc, idx) => {
                  const prevTerm = idx > 0 ? termComparisons[idx - 1] : null;
                  const delta = prevTerm && prevTerm.percentage > 0 ? Number((tc.percentage - prevTerm.percentage).toFixed(1)) : null;

                  return (
                    <div key={tc.term.id} className="p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs text-[var(--text-primary)]">{tc.term.name}</span>
                          <span className="text-[10px] font-mono text-[var(--text-muted)]">
                            ({tc.count} assessments)
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-sm text-[var(--text-primary)]">
                            {tc.percentage}%
                          </span>
                          {delta !== null && (
                            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                              delta >= 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                            }`}>
                              {delta >= 0 ? `+${delta}%` : `${delta}%`} vs prev
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="w-full h-1.5 rounded-full bg-[var(--surface-bg)] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-violet-500 transition-all duration-300"
                          style={{ width: `${Math.min(100, tc.percentage)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Assessment Type Performance Matrix */}
            <div className="p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Award className="w-4 h-4 text-violet-400" />
                  Assessment Type Performance
                </h3>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Weight & Difficulty</span>
              </div>

              <div className="space-y-3">
                {assessmentTypeStats.map((stat) => (
                  <div key={stat.type} className="p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-[var(--surface-bg)] text-[var(--text-primary)] font-mono text-[10px] uppercase font-bold">
                          {stat.type.replace('_', ' ')}
                        </span>
                        <span className="text-[10px] text-[var(--text-muted)] font-mono">
                          {stat.totalObtained}/{stat.totalMaximum} marks
                        </span>
                      </div>

                      <span className="font-mono font-bold text-sm text-violet-400">
                        {stat.percentage}%
                      </span>
                    </div>

                    <div className="w-full h-1.5 rounded-full bg-[var(--surface-bg)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                        style={{ width: `${Math.min(100, stat.percentage)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SUB-TAB 2: INDIVIDUAL SUBJECT MARKBOOKS
         ───────────────────────────────────────────────────────────── */}
      {activeTab === 'markbook' && activeSubjectData && (
        <div className="space-y-6">
          {/* Subject Picker Row */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {subjects.map((s) => {
              const isSelected = s.id === selectedSubjectId;
              const subjCalc = subjectRankings.find((r) => r.subject.id === s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedSubjectId(s.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-semibold flex items-center gap-2.5 transition-all whitespace-nowrap border cursor-pointer ${
                    isSelected
                      ? 'bg-violet-600 text-white border-violet-500 shadow-md'
                      : 'bg-[var(--pill-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--card-border)]'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color || '#8b5cf6' }} />
                  <span>{s.name}</span>
                  {subjCalc && (
                    <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[var(--surface-bg)] text-[var(--text-muted)]'
                    }`}>
                      {subjCalc.percentage}%
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Selected Subject Cockpit Banner */}
          <div className="p-6 rounded-3xl creamy-surface space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--card-border)]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: activeSubjectData.subject.color || '#8b5cf6' }} />
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {activeSubjectData.subject.name}
                  </h3>
                  {activeSubjectData.subject.abbreviation && (
                    <span className="px-2 py-0.5 rounded-md bg-[var(--pill-bg)] text-violet-400 font-mono text-xs font-bold border border-[var(--card-border)]">
                      {activeSubjectData.subject.abbreviation}
                    </span>
                  )}
                </div>
                {activeSubjectData.subject.notes && (
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    {activeSubjectData.subject.notes}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleOpenAddAssessment}
                  className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Assessment</span>
                </button>
              </div>
            </div>

            {/* Subject Summary KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Overall Percentage</span>
                <span className="text-2xl font-mono font-bold text-violet-400">
                  {activeSubjectData.percentage}%
                </span>
                <span className="text-[10px] text-[var(--text-muted)] block mt-0.5 font-mono">
                  {activeSubjectData.totalObtained} / {activeSubjectData.totalMaximum} marks
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Academic Target</span>
                <span className="text-2xl font-mono font-bold text-[var(--text-primary)]">
                  {activeSubjectData.target}%
                </span>
                <span className={`text-[10px] font-mono block mt-0.5 ${
                  activeSubjectData.targetDelta >= 0 ? 'text-emerald-400' : 'text-amber-400'
                }`}>
                  {activeSubjectData.targetDelta >= 0 ? `+${activeSubjectData.targetDelta}% ahead` : `${activeSubjectData.targetDelta}% to go`}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Top Assessment</span>
                <span className="text-xs font-semibold text-emerald-400 truncate block mt-1">
                  {activeSubjectData.bestAssessment ? activeSubjectData.bestAssessment.name : 'N/A'}
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)] block mt-0.5">
                  {activeSubjectData.bestAssessment 
                    ? `${activeSubjectData.bestAssessment.marksObtained}/${activeSubjectData.bestAssessment.maximumMarks} (${Math.round((activeSubjectData.bestAssessment.marksObtained / activeSubjectData.bestAssessment.maximumMarks) * 100)}%)`
                    : 'No records'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Lowest Score</span>
                <span className="text-xs font-semibold text-amber-400 truncate block mt-1">
                  {activeSubjectData.lowestAssessment ? activeSubjectData.lowestAssessment.name : 'N/A'}
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)] block mt-0.5">
                  {activeSubjectData.lowestAssessment 
                    ? `${activeSubjectData.lowestAssessment.marksObtained}/${activeSubjectData.lowestAssessment.maximumMarks} (${Math.round((activeSubjectData.lowestAssessment.marksObtained / activeSubjectData.lowestAssessment.maximumMarks) * 100)}%)`
                    : 'No records'}
                </span>
              </div>
            </div>

            {/* Assessment Component Splits (e.g. 70 Theory + 30 Practical) */}
            {activeSubjectData.subject.components && activeSubjectData.subject.components.length > 0 && (
              <div className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-violet-400" />
                    Subject Marking Architecture (Examination vs Internal Splits)
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    Configured Components: {activeSubjectData.subject.components.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {activeSubjectData.subject.components.map((comp) => {
                    const compAsms = activeSubjectAssessments.filter((a) => a.componentId === comp.id);
                    const compObt = compAsms.reduce((s, a) => s + a.marksObtained, 0);
                    const compMax = compAsms.reduce((s, a) => s + a.maximumMarks, 0);
                    const compPct = compMax > 0 ? Math.round((compObt / compMax) * 100) : 0;

                    return (
                      <div key={comp.id} className="p-3 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)] space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[var(--text-primary)]">{comp.name}</span>
                          <span className="text-[10px] font-mono text-violet-400 font-bold">{compPct}%</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                          <span>Max: {comp.maximumMarks} marks</span>
                          <span>Weight: {comp.weightPercent || comp.maximumMarks}%</span>
                        </div>
                        <div className="w-full h-1 rounded-full bg-[var(--pill-bg)] overflow-hidden">
                          <div className="h-full bg-violet-500 rounded-full" style={{ width: `${compPct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Assessment Ledger Table for this Subject */}
          <div className="p-6 rounded-3xl creamy-surface space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <div>
                <h4 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Award className="w-4 h-4 text-violet-400" />
                  Historical Assessment Records
                </h4>
                <p className="text-xs text-[var(--text-muted)]">
                  {activeSubjectAssessments.length} assessment records logged for this discipline
                </p>
              </div>
            </div>

            {activeSubjectAssessments.length === 0 ? (
              <div className="py-12 text-center text-xs text-[var(--text-muted)] space-y-2">
                <p>No assessment records logged for this subject yet.</p>
                <button
                  onClick={handleOpenAddAssessment}
                  className="px-3.5 py-1.5 rounded-xl bg-violet-600 text-white text-xs font-semibold cursor-pointer"
                >
                  Record First Assessment
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[var(--card-border)] text-[var(--text-muted)] uppercase tracking-wider font-mono text-[10px]">
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Assessment Title</th>
                      <th className="py-2.5 px-3">Type</th>
                      <th className="py-2.5 px-3">Component</th>
                      <th className="py-2.5 px-3">Marks</th>
                      <th className="py-2.5 px-3">Score %</th>
                      <th className="py-2.5 px-3">Term</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--card-border)]">
                    {activeSubjectAssessments.map((record) => {
                      const pct = Math.round((record.marksObtained / record.maximumMarks) * 100);
                      const matchedComponent = activeSubjectData.subject.components?.find((c) => c.id === record.componentId);
                      const matchedTerm = currentTerms.find((t) => t.id === record.termId);

                      return (
                        <tr key={record.id} className="hover:bg-[var(--pill-bg)] transition-colors">
                          <td className="py-3 px-3 font-mono text-[var(--text-muted)]">
                            {record.date}
                          </td>

                          <td className="py-3 px-3">
                            <div className="font-semibold text-[var(--text-primary)]">{record.name}</div>
                            {record.notes && (
                              <div className="text-[10px] text-[var(--text-muted)] italic mt-0.5">
                                &ldquo;{record.notes}&rdquo;
                              </div>
                            )}
                          </td>

                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded-md bg-[var(--surface-bg)] text-[var(--text-secondary)] font-mono text-[10px] uppercase">
                              {record.type.replace('_', ' ')}
                            </span>
                          </td>

                          <td className="py-3 px-3 font-mono text-[10px] text-[var(--text-muted)]">
                            {matchedComponent ? matchedComponent.name : '—'}
                          </td>

                          <td className="py-3 px-3 font-mono font-semibold text-[var(--text-primary)]">
                            {record.marksObtained} / {record.maximumMarks}
                          </td>

                          <td className="py-3 px-3 font-mono font-bold">
                            <span className={pct >= 90 ? 'text-emerald-400' : pct >= 80 ? 'text-violet-400' : 'text-amber-400'}>
                              {pct}%
                            </span>
                          </td>

                          <td className="py-3 px-3 text-[var(--text-muted)]">
                            {matchedTerm ? matchedTerm.name : record.termId}
                          </td>

                          <td className="py-3 px-3 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => handleOpenEditAssessment(record)}
                                className="p-1 rounded-lg hover:bg-[var(--card-border)] text-[var(--text-muted)] hover:text-violet-400 transition-colors"
                                title="Edit assessment"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => deleteAssessmentRecord(record.id)}
                                className="p-1 rounded-lg hover:bg-[var(--card-border)] text-[var(--text-muted)] hover:text-rose-400 transition-colors"
                                title="Delete assessment"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SUB-TAB 3: CURRICULUM & STRUCTURE CONFIGURATION
         ───────────────────────────────────────────────────────────── */}
      {activeTab === 'structure' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Create New Subject */}
            <form onSubmit={handleAddSubject} className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <span className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <FolderPlus className="w-4 h-4 text-violet-400" /> Add Subject to Curriculum
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Year {currentAcademicYear?.name}</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Subject Name:</label>
                <input
                  type="text"
                  value={newSubjName}
                  onChange={(e) => setNewSubjName(e.target.value)}
                  placeholder="e.g. Organic Chemistry, Microeconomics"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] text-[var(--text-muted)]">Abbreviation Code:</label>
                  <input
                    type="text"
                    value={newSubjAbbr}
                    onChange={(e) => setNewSubjAbbr(e.target.value)}
                    placeholder="e.g. CHEM"
                    maxLength={6}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono uppercase text-[var(--text-primary)]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] text-[var(--text-muted)]">Target Grade %:</label>
                  <input
                    type="number"
                    value={newSubjTargetPct}
                    onChange={(e) => setNewSubjTargetPct(e.target.value)}
                    min="1"
                    max="100"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Weekly Study Hours Target:</label>
                <input
                  type="number"
                  value={newSubjTargetHours}
                  onChange={(e) => setNewSubjTargetHours(e.target.value)}
                  min="1"
                  max="40"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Color Tag:</label>
                <div className="flex gap-2">
                  {['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b', '#ec4899', '#6366f1'].map((c) => (
                    <button
                      type="button"
                      key={c}
                      onClick={() => setNewSubjColor(c)}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${newSubjColor === c ? 'scale-110 border-white' : 'border-transparent'}`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Register Subject
              </button>
            </form>

            {/* Configured Subjects & Assessment Components */}
            <div className="lg:col-span-2 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">Curriculum & Component Architecture</h3>
                  <p className="text-xs text-[var(--text-muted)]">Configure examination and internal assessment splits for each subject</p>
                </div>
              </div>

              <div className="space-y-4">
                {subjects.map((s) => (
                  <div key={s.id} className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color || '#8b5cf6' }} />
                        <span className="font-bold text-sm text-[var(--text-primary)]">{s.name}</span>
                        {s.abbreviation && (
                          <span className="px-2 py-0.5 rounded-md bg-[var(--surface-bg)] text-violet-400 font-mono text-xs font-bold">
                            {s.abbreviation}
                          </span>
                        )}
                        <span className="text-[11px] text-[var(--text-muted)] font-mono">
                          Target: {s.targetPercentage || 90}%
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveComponentSubjId(activeComponentSubjId === s.id ? null : s.id)}
                          className="px-2.5 py-1 rounded-lg bg-[var(--surface-bg)] text-violet-400 hover:text-violet-300 text-[11px] font-semibold flex items-center gap-1 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add Component</span>
                        </button>

                        <button
                          onClick={() => deleteSubject(s.id)}
                          className="text-[var(--text-muted)] hover:text-rose-400 transition-colors p-1"
                          title="Delete subject"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Components List */}
                    {s.components && s.components.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {s.components.map((c) => (
                          <div key={c.id} className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)] text-xs">
                            <div>
                              <div className="font-semibold text-[var(--text-primary)]">{c.name}</div>
                              <div className="text-[10px] text-[var(--text-muted)] font-mono mt-0.5">
                                Max: {c.maximumMarks} • Weight: {c.weightPercent || c.maximumMarks}%
                              </div>
                            </div>
                            <button
                              onClick={() => deleteSubjectComponent(s.id, c.id)}
                              className="text-[var(--text-muted)] hover:text-rose-400 p-1 transition-colors"
                              title="Delete component"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[11px] text-[var(--text-muted)] italic">
                        No distinct components configured. Standard weighted calculation active.
                      </p>
                    )}

                    {/* Inline Add Component Form */}
                    {activeComponentSubjId === s.id && (
                      <form onSubmit={(e) => handleAddComponent(s.id, e)} className="p-3 rounded-xl bg-[var(--surface-bg)] border border-violet-500/30 space-y-2 mt-2">
                        <span className="text-[11px] font-semibold text-violet-400 block">
                          Add Component to {s.name} (e.g. Theory Exam 80 + Internal 20)
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          <input
                            type="text"
                            value={newCompName}
                            onChange={(e) => setNewCompName(e.target.value)}
                            placeholder="Component Name (e.g. Theory)"
                            required
                            className="px-2.5 py-1.5 rounded-lg bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                          />
                          <input
                            type="number"
                            value={newCompMaxMarks}
                            onChange={(e) => setNewCompMaxMarks(e.target.value)}
                            placeholder="Max Marks (e.g. 70)"
                            required
                            className="px-2.5 py-1.5 rounded-lg bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                          />
                          <input
                            type="number"
                            value={newCompWeight}
                            onChange={(e) => setNewCompWeight(e.target.value)}
                            placeholder="Weight % (e.g. 70)"
                            required
                            className="px-2.5 py-1.5 rounded-lg bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                          />
                        </div>
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setActiveComponentSubjId(null)}
                            className="px-2.5 py-1 rounded-lg bg-[var(--pill-bg)] text-[var(--text-secondary)] text-[10px]"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-3 py-1 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-[10px] font-semibold"
                          >
                            Save Component
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Years & Terms Management */}
          <div className="p-6 rounded-3xl creamy-surface space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-violet-400" />
                  Academic Calendar & Term Management
                </h3>
                <p className="text-xs text-[var(--text-muted)]">Organize subjects and marks into cycles, midterms, and finals</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Add Academic Year */}
              <form onSubmit={handleAddAcademicYear} className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-3">
                <span className="text-xs font-semibold text-[var(--text-primary)] block">Create Academic Year</span>
                <input
                  type="text"
                  value={newYearName}
                  onChange={(e) => setNewYearName(e.target.value)}
                  placeholder="e.g. Academic Year 2027–2028"
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs"
                >
                  Add Academic Year
                </button>
              </form>

              {/* Add Term to Active Year */}
              <form onSubmit={handleAddTerm} className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-3">
                <span className="text-xs font-semibold text-[var(--text-primary)] block">Add Term to Selected Year</span>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={selectedYearForTerm}
                    onChange={(e) => setSelectedYearForTerm(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                  >
                    {academicYears.map((ay) => (
                      <option key={ay.id} value={ay.id}>{ay.name}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={newTermName}
                    onChange={(e) => setNewTermName(e.target.value)}
                    placeholder="e.g. Term 3 (Spring)"
                    required
                    className="px-3 py-2 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs"
                >
                  Add Term to Year
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SUB-TAB 4: FOCUS STOPWATCH & VERIFIED SESSIONS (CONDITION 5)
         ───────────────────────────────────────────────────────────── */}
      {activeTab === 'sessions' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Precision Stopwatch Console */}
            <div className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-violet-400" /> Focus Stopwatch
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Verified Ledger</span>
              </div>

              {/* Subject Selector */}
              <div className="space-y-2">
                <label className="text-xs text-[var(--text-muted)]">Active Discipline:</label>
                <select
                  value={studySubject}
                  onChange={(e) => setStudySubject(e.target.value)}
                  disabled={isStudyActive}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)] cursor-pointer"
                >
                  {subjects.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.targetWeeklyHours}h/wk target)
                    </option>
                  ))}
                </select>
              </div>

              {/* Big Timer Display */}
              <div className="py-4 text-center">
                <div className="text-5xl font-mono font-light text-[var(--text-primary)] tracking-tight">
                  {formatTimer(studySeconds)}
                </div>
                <div className="text-xs font-sans text-[var(--text-muted)] mt-2">
                  {isStudyActive ? 'Session in progress...' : 'Ready to start'}
                </div>
              </div>

              {/* Timer Controls */}
              <div className="space-y-3">
                <div className="flex gap-2">
                  <button
                    onClick={toggleStudyTimer}
                    className="flex-1 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-sans text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-violet-600/20 transition-all cursor-pointer"
                  >
                    {isStudyActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                    <span>{isStudyActive ? 'Pause Session' : 'Start Focus'}</span>
                  </button>

                  <button
                    onClick={resetStudyTimer}
                    disabled={studySeconds === 0}
                    className="px-4 py-3 rounded-2xl bg-[var(--pill-bg)] hover:bg-[var(--card-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer disabled:opacity-40"
                    title="Reset timer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleSaveTimerSession}
                  disabled={studySeconds < 30}
                  className="w-full py-2.5 rounded-2xl border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Save Session to Verified Ledger</span>
                </button>

                {sessionSavedMsg && (
                  <div className="text-center text-xs font-medium text-emerald-400 animate-fadeIn">
                    ✓ Session verified and written to studySessions!
                  </div>
                )}
              </div>
            </div>

            {/* Verified Session History (Condition 5) */}
            <div className="lg:col-span-2 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">Verified Study History</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    {studySessions.length} total verified sessions recorded • {totalVerifiedHours}h all-time ({past7DaysHours}h in past 7 days)
                  </p>
                </div>
              </div>

              {studySessions.length === 0 ? (
                <div className="py-12 text-center text-xs text-[var(--text-muted)]">
                  No recorded study sessions yet. Start the stopwatch or manually log a session to establish your verified ledger.
                </div>
              ) : (
                <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
                  {studySessions.map((session) => {
                    const mins = Math.round(session.durationSeconds / 60);
                    const hrs = (mins / 60).toFixed(1);
                    const timeFormatted = new Date(session.timestamp).toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

                    return (
                      <div 
                        key={session.id}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-mono font-bold">
                            📖
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-[var(--text-primary)]">{session.subject}</span>
                              <span className="px-2 py-0.5 rounded-md bg-violet-500/20 text-violet-300 font-mono text-[10px]">
                                {mins} mins ({hrs}h)
                              </span>
                            </div>
                            <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                              {timeFormatted}
                              {session.notes && <span className="italic text-[var(--text-secondary)]"> — &ldquo;{session.notes}&rdquo;</span>}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => deleteStudySession(session.id)}
                          className="text-[var(--text-muted)] hover:text-rose-400 p-1 transition-colors"
                          title="Delete session"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Manual Offline Session Entry */}
          <form onSubmit={handleSaveManualSession} className="max-w-xl p-6 rounded-3xl creamy-surface space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-violet-400" /> Log Offline Study Session
              </h3>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">Verified Manual Entry</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Subject:</label>
                <select
                  value={manualSubject}
                  onChange={(e) => setManualSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                >
                  {subjects.map((s) => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Duration (Minutes):</label>
                <input
                  type="number"
                  value={manualDurationMinutes}
                  onChange={(e) => setManualDurationMinutes(e.target.value)}
                  min="5"
                  max="600"
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Session Date:</label>
              <input
                type="date"
                value={manualDate}
                onChange={(e) => setManualDate(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Topic / Notes (optional):</label>
              <input
                type="text"
                value={manualNotes}
                onChange={(e) => setManualNotes(e.target.value)}
                placeholder="e.g. Dynamic programming problem sets, Chapter 4 proofs"
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Record Verified Study Session
            </button>
          </form>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          MODAL: ADD / EDIT ASSESSMENT RECORD
         ───────────────────────────────────────────────────────────── */}
      {showAssessmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAssessmentModal(false)} />
          <form onSubmit={handleSaveAssessment} className="relative z-10 w-full max-w-lg p-6 rounded-3xl creamy-surface shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-base font-semibold text-[var(--text-primary)] pb-2 border-b border-[var(--card-border)] flex items-center gap-2">
              <Award className="w-4 h-4 text-violet-400" />
              {editingAssessmentId ? 'Edit Assessment Record' : 'Record Academic Assessment'}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Subject:</label>
                <select
                  value={asmSubjectId}
                  onChange={(e) => {
                    setAsmSubjectId(e.target.value);
                    setAsmComponentId('');
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                >
                  {subjects.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Academic Term:</label>
                <select
                  value={asmTermId}
                  onChange={(e) => setAsmTermId(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                >
                  {currentTerms.map((t) => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Assessment Title:</label>
              <input
                type="text"
                value={asmName}
                onChange={(e) => setAsmName(e.target.value)}
                placeholder="e.g. Midterm Theory Paper, Practical Defense"
                required
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Assessment Type:</label>
                <select
                  value={asmType}
                  onChange={(e) => setAsmType(e.target.value as AssessmentType)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                >
                  <option value="unit_test">Unit Test</option>
                  <option value="midterm">Midterm Examination</option>
                  <option value="final">Final Examination</option>
                  <option value="practical">Practical / Lab Defense</option>
                  <option value="internal">Internal Assessment</option>
                  <option value="assignment">Assignment / Project</option>
                  <option value="quiz">Quiz</option>
                  <option value="custom">Custom Evaluation</option>
                </select>
              </div>

              {/* Assessment Component Dropdown (if subject has components) */}
              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Component Split:</label>
                {(() => {
                  const currentSubj = subjects.find((s) => s.id === asmSubjectId);
                  const components = currentSubj?.components || [];
                  return (
                    <select
                      value={asmComponentId}
                      onChange={(e) => setAsmComponentId(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                    >
                      <option value="">General / Direct</option>
                      {components.map((c) => (
                        <option key={c.id} value={c.id}>{c.name} (Max: {c.maximumMarks})</option>
                      ))}
                    </select>
                  );
                })()}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Marks Obtained:</label>
                <input
                  type="number"
                  value={asmMarksObtained}
                  onChange={(e) => setAsmMarksObtained(Number(e.target.value))}
                  min="0"
                  step="0.5"
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Maximum Marks:</label>
                <input
                  type="number"
                  value={asmMaximumMarks}
                  onChange={(e) => setAsmMaximumMarks(Number(e.target.value))}
                  min="1"
                  step="0.5"
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Calculated Score:</label>
                <div className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono font-bold text-violet-400">
                  {asmMaximumMarks > 0 ? `${((asmMarksObtained / asmMaximumMarks) * 100).toFixed(1)}%` : '0%'}
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Assessment Date:</label>
              <input
                type="date"
                value={asmDate}
                onChange={(e) => setAsmDate(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Observations & Notes (optional):</label>
              <input
                type="text"
                value={asmNotes}
                onChange={(e) => setAsmNotes(e.target.value)}
                placeholder="e.g. Scored full on proofs, review thermodynamics derivation"
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="isIncluded"
                checked={asmIsIncluded}
                onChange={(e) => setAsmIsIncluded(e.target.checked)}
                className="rounded bg-[var(--pill-bg)] border-[var(--card-border)] text-violet-600"
              />
              <label htmlFor="isIncluded" className="text-xs text-[var(--text-secondary)]">
                Include in final overall percentage calculations
              </label>
            </div>

            <div className="flex gap-2 pt-2 border-t border-[var(--card-border)]">
              <button
                type="button"
                onClick={() => setShowAssessmentModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] text-xs font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold cursor-pointer"
              >
                {editingAssessmentId ? 'Save Changes' : 'Record Assessment'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ── STUDENT PORTAL AUTOMATION MODAL ── */}
      {showPortalModal && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-xl p-6 rounded-3xl creamy-surface border border-violet-500/30 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-violet-400" />
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">Student Portal Automation Sync</h3>
              </div>
              <button
                onClick={() => setShowPortalModal(false)}
                className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Architecture Telemetry & Launchd Details */}
            <div className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-2 text-xs text-[var(--text-secondary)] leading-relaxed">
              <div className="flex items-center justify-between text-xs pb-1 border-b border-[var(--card-border)]">
                <span className="font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Scheduled macOS Daemon
                </span>
                <span className="font-mono text-violet-400 text-[11px] font-bold">5:00 PM IST Daily</span>
              </div>
              <p>
                Configured with macOS <code className="text-violet-400 font-mono">launchd</code> service (<code className="text-[var(--text-primary)] font-mono">com.forme.portal.sync.plist</code>).
                Includes automatic sleep catch-up, exponential backoff retries (2s, 4s, 8s), and session token expiry safeguards.
              </p>
            </div>

            {/* Ingestion Area */}
            <form onSubmit={handleMergePortalPayload} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs text-[var(--text-muted)] flex items-center justify-between">
                  <span>Paste Portal Sync Payload (<code className="text-violet-400 font-mono">portal_marks_sync.json</code>):</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">Idempotent Merge</span>
                </label>
                <textarea
                  value={portalJsonInput}
                  onChange={(e) => setPortalJsonInput(e.target.value)}
                  placeholder={`{\n  "portalMetadata": { "syncSchedule": "5:00 PM IST Daily" },\n  "assessments": [\n    { "id": "portal_cs_theory_term2", "name": "Pre-Finals Theory Exam", "marksObtained": 68, "maximumMarks": 70, "date": "2026-11-05" }\n  ]\n}`}
                  rows={5}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>

              {portalSyncFeedback && (
                <div className={`p-3 rounded-xl text-xs font-mono ${
                  portalSyncFeedback.startsWith('✔')
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                }`}>
                  {portalSyncFeedback}
                </div>
              )}

              <div className="flex gap-2 pt-2 border-t border-[var(--card-border)]">
                <button
                  type="button"
                  onClick={() => setShowPortalModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] text-xs font-medium cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold cursor-pointer"
                >
                  Safely Ingest into Markbook
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
