import React, { useState } from "react";
import TechBadge from "../ui/TechBadge";
import SearchBar from "../ui/SearchBar";
import ProjectCard from "../projects/ProjectCard";
import ProjectPagination from "../projects/ProjectPagination";
import { profileConfig } from "../../config/profileConfig";
import { projectsData } from "../../data/projectsData";
import { useProjectFilter } from "../../hooks/useProjectFilter";

const TECH_LIMIT = 7;

export default function MainContent() {
  const {
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedProjects,
  } = useProjectFilter(projectsData, 3);
  const [showAllTech, setShowAllTech] = useState(false);

  const visibleTech = showAllTech
    ? profileConfig.techStack
    : profileConfig.techStack.slice(0, TECH_LIMIT);

  const hasExtraTech = profileConfig.techStack.length > TECH_LIMIT;
  const remainingCount = profileConfig.techStack.length - TECH_LIMIT;

  return (
    <main className="lg:col-span-8 bg-slate-800/80 border border-slate-700/60 rounded-3xl p-6 flex flex-col justify-between shadow-xl backdrop-blur-sm gap-6">
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {profileConfig.name}
          </h1>

          {/* Tech Badges with Toggle */}
          {/* Fixed-height wrapper for header tech badges */}
          <div className="min-h-[2.5rem] flex flex-wrap items-center content-start gap-1 mt-3">
            {visibleTech.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} />
            ))}

            {hasExtraTech && (
              <button
                type="button"
                onClick={() => setShowAllTech((prev) => !prev)}
                className="inline-flex items-center px-2.5 py-1 bg-slate-900/60 border border-slate-700/70 hover:border-indigo-500/50 text-indigo-400 hover:text-indigo-300 rounded-lg text-xs font-semibold transition cursor-pointer"
              >
                {showAllTech ? "Show Less" : `+${remainingCount} more`}
              </button>
            )}
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {profileConfig.tagline}
        </p>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedProjects.length > 0 ? (
          paginatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-sm text-slate-500">
            No projects found matching your query.
          </div>
        )}
      </div>

      <ProjectPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
