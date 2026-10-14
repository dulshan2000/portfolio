"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from "react-icons/fa6";

export default function AboutContactBento() {
  return (
    <section id="about-contact" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Main About Block - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 row-span-2 rounded-3xl bg-zinc-900/50 border border-white/5 p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-colors flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-zinc-500 tracking-widest uppercase text-xs font-semibold">About Me</h3>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 font-medium">
                  VFX & Composite Artist @ KML Productions
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-balance text-white leading-tight">
                Transforming concepts into <span className="text-zinc-500">cinematic realities.</span>
              </h2>
              
              <div className="space-y-4 text-zinc-400 text-base md:text-lg max-w-xl">
                <p>
                  I am a Visual Effects and Composite Artist and Interactive Media undergraduate at SLIIT, specializing in broadcast advertising, commercial campaigns, and AI-assisted video production.
                </p>
                <p>
                  With hands-on experience spanning KML Productions and SKY Films International, I execute end-to-end post-production pipelines—combining 3D modeling, precision match-moving, rotoscoping, chroma keying, and color grading for leading brands including Prime Lands, Home Lands, Uswatte, SINGER, PickMe, and People&apos;s Bank.
                </p>
              </div>
            </div>

            {/* Quick Experience Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-white/5">
              <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-zinc-300">
                SLIIT Interactive Media (2022–2026)
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-zinc-300">
                Cinematography & Lighting Foundation
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-zinc-300">
                AI Video & VFX Workflows
              </span>
            </div>
          </motion.div>

          {/* Photo Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/5 relative overflow-hidden aspect-square group"
          >
            <Image
              src="/images/photo.jpg"
              alt="Dulshan Bandara"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
               <div className="text-4xl font-display font-bold text-white mb-1">15+</div>
               <div className="text-xs text-zinc-400 uppercase tracking-wider">Broadcast Deliverables</div>
            </div>
          </motion.div>

          {/* Toolkit Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-zinc-900/50 border border-white/5 p-8 flex flex-col justify-center group hover:border-white/20 transition-colors"
          >
            <h3 className="text-zinc-500 tracking-widest uppercase text-xs font-semibold mb-6">Core Toolkit</h3>
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">After Effects</span>
                <span className="text-xs text-zinc-400">VFX & Compositing</span>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">Blender</span>
                <span className="text-xs text-zinc-400">3D & Tracking</span>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">Premiere & DaVinci</span>
                <span className="text-xs text-zinc-400">Edit & Color Grade</span>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">AI Video & VFX</span>
                <span className="text-xs text-zinc-400">Higgsfield & Beeble</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
