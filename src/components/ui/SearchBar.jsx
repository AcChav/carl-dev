import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full group">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400 transition-colors" size={18} />
      <input
        type="text"
        placeholder="Filter by tech (e.g. React, PostgreSQL) or keyword..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-slate-900/90 border border-slate-700/80 rounded-2xl py-3 pl-11 pr-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-inner"
      />
    </div>
  );
}