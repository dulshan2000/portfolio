"use client";

import { useState } from "react";
import { Project, ProjectCategory, projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

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
      </div>
    </section>
  );
}
