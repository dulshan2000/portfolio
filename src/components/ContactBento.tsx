"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from "react-icons/fa6";

export default function ContactBento() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Contact CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 group hover:border-white/30 transition-all"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                Got a project in mind?
              </h2>
              <p className="text-zinc-400 max-w-md">
                Let's discuss how we can elevate your brand's visual storytelling.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full sm:w-auto shrink-0">
               <a
                href="mailto:dulshanbandara@example.com"
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)]"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="tel:+940763349851"
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +94 076 334 9851
              </a>
            </div>
          </motion.div>

          {/* Socials Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-zinc-900/50 border border-white/5 p-8 flex items-center justify-center gap-6 group hover:border-white/20 transition-colors"
          >
            <a href="https://www.instagram.com/dulshan_bandara" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <FaInstagram className="w-8 h-8" />
            </a>
            <a href="https://web.facebook.com/dulshan.bandara.69" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <FaFacebook className="w-8 h-8" />
            </a>
            <a href="https://www.tiktok.com/@dulshan.bandara" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <FaTiktok className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/dulshan-bandara/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <FaLinkedin className="w-8 h-8" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
