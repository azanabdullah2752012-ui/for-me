import React, { useEffect, useRef } from 'react';
import { soundEngine } from '../../services/soundEngine';

interface SoundVisualizerProps {
  isPlaying: boolean;
  color?: string;
  className?: string;
  barCount?: number;
}

export const SoundVisualizer: React.FC<SoundVisualizerProps> = ({
  isPlaying,
  color = '#a855f7',
  className = 'w-16 h-5',
  barCount = 10,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const analyser = soundEngine.getAnalyser();
    const dataArray = analyser ? new Uint8Array(analyser.frequencyBinCount) : null;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isPlaying && analyser && dataArray) {
        analyser.getByteFrequencyData(dataArray);

        const w = canvas.width;
        const h = canvas.height;
        const gap = 2;
        const totalGap = gap * (barCount - 1);
        const barW = Math.max(2, (w - totalGap) / barCount);

        for (let i = 0; i < barCount; i++) {
          const binIndex = Math.min(dataArray.length - 1, Math.floor(i * (dataArray.length / barCount) * 0.7));
          const val = dataArray[binIndex] / 255;
          const barH = Math.max(3, val * (h - 2));

          const x = i * (barW + gap);
          const y = h - barH;

          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.roundRect(x, y, barW, barH, 1.5);
          ctx.fill();
        }
      } else {
        // Resting baseline pulses gently
        const w = canvas.width;
        const h = canvas.height;
        const gap = 2;
        const totalGap = gap * (barCount - 1);
        const barW = Math.max(2, (w - totalGap) / barCount);

        for (let i = 0; i < barCount; i++) {
          const x = i * (barW + gap);
          const y = h - 2.5;

          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.beginPath();
          ctx.roundRect(x, y, barW, 2.5, 1);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isPlaying, color, barCount]);

  return (
    <canvas
      ref={canvasRef}
      width={64}
      height={20}
      className={className}
      aria-hidden="true"
    />
  );
};
