"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 bg-card">
              <Image
                src="/images/photo.jpg"
                alt="Dulshan Bandara"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-card border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-md">
              <div className="text-4xl font-display font-bold text-primary mb-1">12+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Broadcast<br/>Projects</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-primary tracking-widest uppercase text-sm font-semibold mb-4">About Me</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-balance">
              Transforming concepts into <span className="text-gray-500">cinematic realities.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                I am a Visual Effects and Motion Graphics Artist based in Sri Lanka, specializing in broadcast advertising, promotional campaigns, and brand documentaries.
              </p>
              <p>
                Collaborating with leading agencies and production houses like SKY Films International, Litmus, and Holmes Pollard & Stott, I bridge the gap between live-action narratives and highly polished digital realities.
              </p>
              <p>
                From complex 3D product modeling and dynamic physics simulations to seamless green screen integration and stylized motion graphics, I execute end-to-end post-production pipelines that elevate brand storytelling.
              </p>
            </div>

            {/* Toolkit Grid */}
            <div className="mt-12">
              <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Core Toolkit</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2 hover:border-primary/50 transition-colors">
                  <span className="font-semibold text-white">Blender</span>
                  <span className="text-xs text-gray-500">3D Modeling & Anim</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2 hover:border-primary/50 transition-colors">
                  <span className="font-semibold text-white">After Effects</span>
                  <span className="text-xs text-gray-500">Compositing & VFX</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2 hover:border-primary/50 transition-colors">
                  <span className="font-semibold text-white">Premiere Pro</span>
                  <span className="text-xs text-gray-500">Editorial Finishing</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
