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
            className="md:col-span-2 row-span-2 rounded-3xl bg-zinc-900/50 border border-white/5 p-8 relative overflow-hidden group hover:border-white/20 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-zinc-500 tracking-widest uppercase text-xs font-semibold mb-6">About Me</h3>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-balance text-white leading-tight">
              Transforming concepts into <span className="text-zinc-500">cinematic realities.</span>
            </h2>
            <div className="space-y-4 text-zinc-400 text-base md:text-lg max-w-xl">
              <p>
                I am a Visual Effects and Motion Graphics Artist based in Sri Lanka, specializing in broadcast advertising, promotional campaigns, and brand documentaries.
              </p>
              <p>
                Collaborating with leading agencies and production houses, I bridge the gap between live-action narratives and highly polished digital realities.
              </p>
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
               <div className="text-4xl font-display font-bold text-white mb-1">12+</div>
               <div className="text-xs text-zinc-400 uppercase tracking-wider">Broadcast Projects</div>
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
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">Blender</span>
                <span className="text-xs text-zinc-500">3D</span>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">After Effects</span>
                <span className="text-xs text-zinc-500">VFX</span>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">Premiere Pro</span>
                <span className="text-xs text-zinc-500">Edit</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
