"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      // Small timeout to prevent play/pause errors on fast hovering
      videoRef.current.play().catch(() => {
        // Ignore play interruption errors
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link 
        href={`/projects/${project.slug}`}
        className="group relative block aspect-video rounded-xl overflow-hidden bg-card border border-white/5 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* We use the first video as the preview. Fallback poster can be added later. */}
        {project.videos.length > 0 && (
          <video
            ref={videoRef}
            src={project.videos[0]}
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Base Gradient Overlay (always visible slightly to make text readable) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-10 transition-opacity duration-300 mix-blend-overlay" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium uppercase tracking-wider text-white">
                {project.category}
              </span>
              <span className="text-primary text-sm font-medium">
                {project.client}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 drop-shadow-lg">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-1">
              {project.role}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
