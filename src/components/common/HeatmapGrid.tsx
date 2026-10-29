import React from 'react';
import { formatDateKey } from '../../context/DataContext';

interface HeatmapGridProps {
  completions: Record<string, boolean>;
  days?: number;
  onDayClick?: (dateKey: string) => void;
  selectedDate?: string;
  size?: 'sm' | 'md';
}

export const HeatmapGrid: React.FC<HeatmapGridProps> = ({
  completions,
  days = 28,
  onDayClick,
  selectedDate,
  size = 'md'
}) => {
  const dates = React.useMemo(() => {
    const list: { key: string; dayNum: number; isCompleted: boolean; isToday: boolean }[] = [];
    const today = new Date();
    const todayKey = formatDateKey(today);

    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = formatDateKey(d);
      list.push({
        key,
        dayNum: d.getDate(),
        isCompleted: !!completions[key],
        isToday: key === todayKey
      });
    }
    return list;
  }, [completions, days]);

  const boxSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {dates.map((item) => {
        const isSelected = selectedDate === item.key;
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onDayClick?.(item.key)}
            title={`${item.key}: ${item.isCompleted ? 'Completed' : 'Incomplete'}`}
            className={`
              ${boxSize} rounded-sm transition-all duration-150 focus:outline-none
              ${item.isCompleted 
                ? 'bg-accent/80 hover:bg-accent border border-accent/40 shadow-[0_0_8px_rgba(229,169,60,0.2)]' 
                : 'bg-dark-800 hover:bg-dark-700 border border-surface-border'
              }
              ${item.isToday ? 'ring-1 ring-white/60' : ''}
              ${isSelected ? 'ring-2 ring-accent' : ''}
            `}
          />
        );
      })}
    </div>
  );
};
