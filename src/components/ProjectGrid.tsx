"use client";

import { useState } from "react";
import { Project, ProjectCategory, projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FolderArchive, Film } from "lucide-react";

const categories: ("All" | ProjectCategory)[] = ["All", "TVC", "Promo", "Documentary"];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="text-primary tracking-widest uppercase text-sm font-semibold mb-2">Selected Works</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Portfolio.
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category
                    ? "bg-primary text-black font-semibold"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full Commercial Archive Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-black p-8 md:p-12 group hover:border-white/20 transition-all duration-500 shadow-2xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-28 -right-28 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="tracking-wider uppercase text-[11px] text-zinc-400">Live Repository</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight flex items-center gap-3">
                <FolderArchive className="w-8 h-8 text-zinc-300 hidden sm:inline-block" />
                Full Commercial Archive
              </h3>

              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Looking for my most recent broadcast deliverables, raw high-res spots, and director&apos;s cuts? Browse the extended project repository on Google Drive.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-400 flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5 text-zinc-500" />
                  Recent TV Commercials
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-400">
                  Director&apos;s Cuts
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-400">
                  Full Resolution Masters
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
              <a
                href="https://drive.google.com/drive/folders/1QjmPmcbtumfi0bxWiI4cRIe-fToJtZPl?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group/btn shadow-[0_0_35px_-5px_rgba(255,255,255,0.25)] hover:shadow-[0_0_45px_-5px_rgba(255,255,255,0.4)]"
              >
                <span>Open Drive Archive</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
