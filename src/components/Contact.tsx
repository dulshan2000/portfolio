"use client";

import { motion } from "framer-motion";
import { Mail, Video, Phone } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/5 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-primary tracking-widest uppercase text-sm font-semibold mb-4">Let's Connect</h3>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Got a project in mind?
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Whether it's a TV commercial, brand documentary, or high-end motion graphics, I'm always open to discussing new opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-6 mb-16">
            <a
              href="tel:+940763349851"
              className="px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary-hover transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              +94 076 334 9851
            </a>
            <a
              href="mailto:dulshanbandara@example.com" // Update with real email if available
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="/files/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center justify-center gap-8">
            <a href="https://www.instagram.com/dulshan_bandara" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors flex flex-col items-center gap-2">
              <FaInstagram className="w-6 h-6" />
              <span className="text-xs uppercase tracking-wider">Instagram</span>
            </a>
            <a href="https://web.facebook.com/dulshan.bandara.69" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors flex flex-col items-center gap-2">
              <FaFacebook className="w-6 h-6" />
              <span className="text-xs uppercase tracking-wider">Facebook</span>
            </a>
            <a href="https://www.tiktok.com/@dulshan.bandara" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors flex flex-col items-center gap-2">
              <FaTiktok className="w-6 h-6" />
              <span className="text-xs uppercase tracking-wider">TikTok</span>
            </a>
            <a href="https://www.linkedin.com/in/dulshan-bandara/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors flex flex-col items-center gap-2">
              <FaLinkedin className="w-6 h-6" />
              <span className="text-xs uppercase tracking-wider">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
