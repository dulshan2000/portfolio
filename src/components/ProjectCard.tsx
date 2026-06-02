"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <CardContainer className="w-full h-full" containerClassName="w-full h-full py-0">
        <CardBody className="w-full h-full aspect-video rounded-xl relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/5 bg-card overflow-hidden">
          <Link 
            href={`/projects/${project.slug}`}
            className="group relative block w-full h-full cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CardItem translateZ="50" className="w-full h-full absolute inset-0">
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
            </CardItem>

            {/* Base Gradient Overlay */}
            <CardItem translateZ="60" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 pointer-events-none" />
            
            {/* Glowing Border effect on hover */}
            <div className="absolute inset-0 border border-white/10 group-hover/card:border-white/30 transition-colors duration-500 rounded-xl z-20 pointer-events-none" />

            {/* Content */}
            <CardItem translateZ="80" className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium uppercase tracking-wider text-white">
                    {project.category}
                  </span>
                  <span className="text-zinc-300 text-sm font-medium">
                    {project.client}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-1">
                  {project.role}
                </p>
              </div>
            </CardItem>
          </Link>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
