import React from 'react';

interface StatItemProps {
  label: string;
  value: number;
  unit?: string;
  colorClass?: string;
}

export default function StatItem({
  label,
  value,
  unit = 'days',
  colorClass = 'text-indigo-400',
}: StatItemProps) {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-white/5 ps-4 pe-4 pt-3 pb-3 transition-colors hover:bg-white/10">
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
        {label}
      </span>
      <div className="flex items-baseline gap-1.5">
        <span className={`text-2xl font-black ${colorClass}`}>
          {value}
        </span>
        <span className="text-xs font-semibold text-slate-500/80">
          {unit}
        </span>
      </div>
    </div>
  );
}
