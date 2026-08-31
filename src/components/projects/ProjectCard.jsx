import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const CARD_TECH_LIMIT = 2; // Show top 2 tags by default

export default function ProjectCard({ project }) {
  const [showAllTags, setShowAllTags] = useState(false);

  const displayedTech = showAllTags
    ? project.tech
    : project.tech.slice(0, CARD_TECH_LIMIT);

  const hasExtra = project.tech.length > CARD_TECH_LIMIT;
  const extraCount = project.tech.length - CARD_TECH_LIMIT;

  return (
    <article className="group bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-200">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-slate-100 text-base group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <span className="text-[11px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-700/40 px-2.5 py-0.5 rounded-full whitespace-nowrap">
            {project.category}
          </span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        {/* Tech tags list with toggle button */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {displayedTech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-medium bg-slate-800/90 border border-slate-700/60 px-2 py-0.5 rounded-md text-slate-300"
            >
              {t}
            </span>
          ))}

          {hasExtra && (
            <button
              type="button"
              onClick={() => setShowAllTags((prev) => !prev)}
              className="text-[10px] font-semibold text-indigo-400 hover:text-indigo-300 bg-slate-800/60 border border-indigo-900/40 px-1.5 py-0.5 rounded-md transition cursor-pointer"
            >
              {showAllTags ? "Less" : `+${extraCount}`}
            </button>
          )}
        </div>

        {/* Repository and Live Links */}
        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              className="p-1.5 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-lg transition"
            >
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Live Demo"
              className="p-1.5 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-lg transition"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
