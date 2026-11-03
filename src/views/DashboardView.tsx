import React from 'react';
import { HeaderHero } from '../components/layout/HeaderHero';
import { BiometricsCard } from '../components/dashboard/BiometricsCard';
import { StudyFocusCard } from '../components/dashboard/StudyFocusCard';
import { StreakHeatmapCard } from '../components/dashboard/StreakHeatmapCard';
import { DailyPromiseCard } from '../components/dashboard/DailyPromiseCard';
import { TodayOverviewCard } from '../components/dashboard/TodayOverviewCard';
import { QuickJournalCard } from '../components/dashboard/QuickJournalCard';
import { UpcomingCard } from '../components/dashboard/UpcomingCard';
import { LifeRadarCard } from '../components/dashboard/LifeRadarCard';
import { FocusAudioCard } from '../components/dashboard/FocusAudioCard';
import { LifeAuditCard } from '../components/dashboard/LifeAuditCard';

export const DashboardView: React.FC = () => {
  return (
    <div className="space-y-6 pb-8">
      {/* Cinematic Hero Header */}
      <HeaderHero />

      {/* Row 1: 4-Column Core Telemetry */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <BiometricsCard />
        <StudyFocusCard />
        <StreakHeatmapCard />
        <DailyPromiseCard />
      </div>

      {/* Row 2: Today's Overview (Wide) + Quick Journal + Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5">
          <TodayOverviewCard />
        </div>
        <div className="lg:col-span-4">
          <QuickJournalCard />
        </div>
        <div className="lg:col-span-3">
          <UpcomingCard />
        </div>
      </div>

      {/* Row 3: Life at a Glance Radar + Focus Audio Player + Life Audit */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5">
          <LifeRadarCard />
        </div>
        <div className="lg:col-span-4">
          <FocusAudioCard />
        </div>
        <div className="lg:col-span-3">
          <LifeAuditCard />
        </div>
      </div>
    </div>
  );
};
