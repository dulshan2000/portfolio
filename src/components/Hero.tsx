"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-background to-background z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,168,83,0.05)_0%,transparent_50%)] z-0" />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            VFX Artist · Motion Designer · Director
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance"
        >
          Dulshan Bandara
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-12"
        >
          Crafting cinematic visual effects and dynamic motion graphics for the broadcast advertising industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#projects"
            className="px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary-hover transition-colors"
          >
            View My Work
          </Link>
          <a
            href="/files/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
