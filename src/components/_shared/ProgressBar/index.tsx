import React from 'react';

interface ProgressBarProps {
  current: number;
  max: number;
  color?: string;
}

export default function ProgressBar({
  current,
  max,
  color = 'from-indigo-500 to-emerald-500',
}: ProgressBarProps) {
  const percentage = Math.min((current / (max || 1)) * 100, 100);

  return (
    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
