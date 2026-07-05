"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Cpu, Layers, CheckCircle2 } from "lucide-react";
import { projectsData } from "@/data/projects";

function ProjectsGridContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const filteredProjects = categoryFilter 
    ? projectsData.filter((p) => p.category === categoryFilter)
    : projectsData;

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-20 text-foreground/50">
        No projects found for this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredProjects.map((project) => (
        <div 
          key={project.id} 
          className="group relative p-[1px] rounded-3xl bg-white/5 hover:bg-gradient-to-br hover:from-primary hover:to-accent transition-colors duration-500 overflow-hidden"
        >
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-background/90 backdrop-blur-xl border border-white/5 group-hover:border-transparent transition-colors z-10">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 text-foreground hover:bg-white/10 hover:text-white transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              
              {/* System Architecture */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Cpu className="w-4 h-4" />
                  <span>Architecture</span>
                </div>
                <p className="text-sm font-medium text-slate-300 bg-white/5 px-3 py-2 rounded-lg border border-white/5 group-hover:border-primary/20 transition-colors">
                  {project.systemArchitecture}
                </p>
              </div>

              {/* Outcomes */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  <Layers className="w-4 h-4" />
                  <span>Key Outcomes</span>
                </div>
                <ul className="space-y-1">
                  {project.projectOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent/70" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
              {project.techTags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-slate-300 border border-white/5 group-hover:border-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectsGrid() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-foreground/50 animate-pulse">Loading projects...</div>}>
      <ProjectsGridContent />
    </Suspense>
  );
}
