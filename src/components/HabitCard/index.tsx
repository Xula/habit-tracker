import React from "react";
import StatItem from "@/components/Streakcount";
import ProgressBar from "@/components/_shared/ProgressBar";
import StarIcon from "@/components/_shared/StarIcon";

interface HabitCardProps {
  name: string;
  currentStreak: number;
  maxStreak: number;
}

export default function HabitCard({
  name,
  currentStreak,
  maxStreak,
}: HabitCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/60 hover:shadow-2xl hover:shadow-indigo-500/10">
      {/* Accent Gradient Blur Effect */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/20" />

      <div className="relative flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
            {name}
          </h3>
          <div className="rounded-full bg-indigo-500/10 p-2 text-indigo-400">
            <StarIcon />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <StatItem
            label="Current Streak"
            value={currentStreak}
            colorClass="text-indigo-400"
          />
          <StatItem
            label="Max Streak"
            value={maxStreak}
            colorClass="text-emerald-400"
          />
        </div>
        <span className="text-sm font-semibold text-indigo-400">
          A caminho de um novo recorde.
        </span>
        <ProgressBar current={currentStreak} max={maxStreak} />
      </div>
    </div>
  );
}
