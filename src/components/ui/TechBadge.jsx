import React from "react";

export default function TechBadge({ name }) {
  return (
    <span className="inline-flex items-center px-3 py-1 bg-slate-900/90 border border-slate-700/70 text-slate-300 rounded-lg text-xs font-medium tracking-wide shadow-sm hover:border-indigo-500/50 hover:text-indigo-300 transition-colors">
      {name}
    </span>
  );
}