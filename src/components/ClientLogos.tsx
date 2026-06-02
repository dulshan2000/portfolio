"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Client = {
  name: string;
  image?: string;
  solidBg?: boolean;
};

const clients: Client[] = [
  { name: "SKY Films" },
  { name: "SINGER", image: "/logos/singer-3-logo-svg-vector.png" },
  { name: "PickMe", image: "/logos/PickMe-Logo_Two-tone_Transparent-300x129.png" },
  { name: "Keels", image: "/logos/KeellsLogo.png" },
  { name: "Unilever", image: "/logos/Unilever.png" },
  { name: "Eva", image: "/logos/Eva-1.png" },
  { name: "Uswatte", image: "/logos/USWATTE-NEW-LOGO.png", solidBg: true },
  { name: "Rich Look", image: "/logos/400-rich-look-16275774341599.png" },
  { name: "People's Bank", image: "/logos/Peoplesbanklk.png" },
  { name: "Rhino Roofing", image: "/logos/new-rhino-logo-60.png", solidBg: true },
  { name: "Little Lion", image: "/logos/little lion.png", solidBg: true },
  { name: "Holmes Pollard & Stott", image: "/logos/Holland polladrs.png" },
  { name: "Ogilvy", image: "/logos/Ogilvy_logo.svg.png" },
  { name: "Litmus" },
  { name: "Zuse" },
  { name: "Magic Mango" },
];

export default function ClientLogos() {
  return (
    <section className="py-20 border-y border-white/5 overflow-hidden bg-black/30">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h3 className="text-gray-500 uppercase tracking-[0.2em] text-sm">Trusted By & Collaborated With</h3>
      </div>
      
      {/* Infinite Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          className="flex whitespace-nowrap items-center py-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {/* Double the array for seamless looping */}
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              {client.image ? (
                <div className={`mx-8 md:mx-16 relative w-32 h-16 md:w-48 md:h-20 opacity-60 hover:opacity-100 transition-opacity ${client.solidBg ? 'grayscale invert contrast-200 mix-blend-screen' : 'brightness-0 invert'}`}>
                  <Image src={client.image} alt={client.name} fill className="object-contain" />
                </div>
              ) : (
                <div className="mx-8 md:mx-16 text-2xl md:text-4xl font-display font-bold text-white opacity-60 hover:opacity-100 transition-opacity cursor-default">
                  {client.name}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
