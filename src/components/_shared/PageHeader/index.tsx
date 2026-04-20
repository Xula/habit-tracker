import React from 'react';

interface PageHeaderProps {
  title: string | React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h1 className="text-5xl font-black tracking-tighter text-white">
          {title}
        </h1>
        {description && (
          <p className="text-slate-400 mt-3 text-lg max-w-md leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <div className="flex items-center gap-3">
        {children}
      </div>
    </header>
  );
}
