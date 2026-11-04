"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const pipelineNodes = [
  {
    num: "NODE 01",
    indicatorColor: "bg-text-primary",
    title: "Cinematography & Lighting",
    desc: "On-location & studio camera work, lighting setups, and raw log capture",
    badge: "CAMERA & DOP",
    badgeColor: "text-chroma-cyan",
  },
  {
    num: "NODE 02",
    indicatorColor: "bg-chroma-cyan",
    title: "Editing & Assembly",
    desc: "Rhythmic cutting, split-screens, and subtitle pipelines in Premiere Pro & DaVinci Resolve",
    badge: "PREMIERE & DAVINCI",
    badgeColor: "text-anamorphic-amber",
  },
  {
    num: "NODE 03",
    indicatorColor: "bg-anamorphic-amber",
    title: "3D Modeling & Sim",
    desc: "Building 3D environments, packaging, and physics simulations in Blender",
    badge: "BLENDER 3D",
    badgeColor: "text-text-primary",
  },
  {
    num: "NODE 04",
    indicatorColor: "bg-chroma-cyan",
    title: "VFX & Compositing",
    desc: "3D camera tracking, rotoscoping, chroma keying, and screen/BG replacements in After Effects",
    badge: "AFTER EFFECTS",
    badgeColor: "text-chroma-cyan",
  },
  {
    num: "NODE 05",
    indicatorColor: "bg-anamorphic-amber",
    title: "AI Video & Motion",
    desc: "Generating AI video content (Higgsfield, InVideo, Beeble, Figma Weave) & animated end cards",
    badge: "NEURAL & MOGRAPH",
    badgeColor: "text-anamorphic-amber",
  },
  {
    num: "NODE 06",
    indicatorColor: "bg-rec-crimson rec-live",
    title: "Color & Master",
    desc: "DaVinci Resolve color grading and broadcast/social master delivery",
    badge: "FINAL BROADCAST QC",
    badgeColor: "text-rec-crimson",
  },
];

const cvCredentials = [
  {
    role: "Commercial DOP, Editor, Colorist & VFX Artist",
    company: "Direct Commercial & Agency Productions",
    period: "2024 – Present",
    status: "CURRENT",
    desc: "Executing solo end-to-end commercial campaigns, tabletop cinematography, DaVinci Resolve color grading, 3D visualizers, and AI-assisted video workflows for premier Sri Lankan brands.",
  },
  {
    role: "VFX Artist",
    company: "Sky Films International · Nugegoda",
    period: "Jun 2024 – Mar 2025",
    status: "BROADCAST STUDIO",
    desc: "Delivered 3D modeling, chroma keying, 3D tracking, motion graphics, and national TV commercial VFX for SINGER, PickMe, People's Bank, Uswatte, Rich Look, and Unilever.",
  },
  {
    role: "BSc (Hons) in IT — Specialising in Interactive Media",
    company: "SLIIT (Sri Lanka Institute of Information Technology)",
    period: "2022 – 2026",
    status: "HONOURS DEGREE",
    desc: "Specialized academic training across computer graphics, interactive media technology, cinematography, video post-production, and digital synthesis.",
  },
];

export default function PipelineTerminal() {
  const [colomboClock, setColomboClock] = useState("00:00:00 UTC+5:30");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const colomboTime = new Date(utc + 3600000 * 5.5);
      const hours = String(colomboTime.getHours()).padStart(2, "0");
      const minutes = String(colomboTime.getMinutes()).padStart(2, "0");
      const seconds = String(colomboTime.getSeconds()).padStart(2, "0");
      setColomboClock(`${hours}:${minutes}:${seconds} UTC+5:30`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="pipeline"
      className="relative w-full px-space-md lg:px-margin-desktop py-space-xl flex flex-col gap-space-lg"
    >
      {/* Section Title & Telemetry Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span className="font-telemetry-sm uppercase tracking-widest text-anamorphic-amber">
            [05 // STUDIO PIPELINE &amp; WORKSTATION] PRODUCTION ENGINE
          </span>
          <h2 className="font-headline-lg text-text-primary uppercase tracking-tight">
            NODE PIPELINE &amp; CONTACT TERMINAL
          </h2>
          <p className="font-body-md text-text-muted">
            Linear color managed pipeline connecting optical production with advanced computational synthesis and AI video generation.
          </p>
        </div>

        {/* Live Colombo Studio Clock */}
        <div className="flex items-center gap-space-sm font-telemetry-sm uppercase bg-surface-elevated px-space-md py-2 border border-border-hairline">
          <span className="w-2 h-2 rounded-full bg-chroma-cyan rec-live"></span>
          <span className="text-text-primary font-bold">
            COLOMBO, LK
          </span>
          <span className="text-border-hairline">|</span>
          <span className="text-anamorphic-amber font-mono tabular-nums">
            {colomboClock}
          </span>
        </div>
      </div>

      {/* Node Flow Architectural Visualization */}
      <div className="w-full bg-surface-elevated p-space-md lg:p-space-lg flex flex-col gap-space-md border border-border-hairline">
        <div className="flex items-center justify-between font-telemetry-sm uppercase text-text-muted">
          <span>{"// FULL-STACK COMMERCIAL PRODUCTION FLOW"}</span>
          <span className="text-anamorphic-amber font-semibold">
            ENGINE // BLENDER • AFTER EFFECTS • RESOLVE • PREMIERE
          </span>
        </div>

        {/* 6-Stage Node Pipeline Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-space-xs relative">
          {pipelineNodes.map((node, index) => (
            <div
              key={node.num}
              className="relative bg-surface-panel p-2.5 sm:p-space-sm flex flex-col justify-between min-h-[130px] sm:min-h-[155px] border border-border-hairline hover:border-border-active transition-colors"
            >
              <div className="flex items-center justify-between font-telemetry-sm uppercase">
                <span className="text-text-muted">{node.num}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${node.indicatorColor}`}
                ></span>
              </div>

              <div className="flex flex-col gap-1 my-2">
                <span className="font-headline-md text-[16px] text-text-primary uppercase leading-snug">
                  {node.title}
                </span>
                <span className="font-telemetry-sm text-[10px] text-text-muted leading-relaxed">
                  {node.desc}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`font-telemetry-sm text-[10px] uppercase font-semibold ${node.badgeColor}`}
                >
                  {node.badge}
                </span>
                {index < pipelineNodes.length - 1 && (
                  <span className="hidden lg:inline font-telemetry-sm text-text-muted/50 text-xs">
                    →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OFFICIAL CV CREDENTIALS STRIP */}
      <div className="w-full bg-surface-elevated p-space-md lg:p-space-lg flex flex-col gap-space-md border border-border-hairline">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-telemetry-sm uppercase">
          <div className="flex items-center gap-space-xs text-chroma-cyan font-bold tracking-wider">
            <span className="material-symbols-outlined text-[16px]">
              verified
            </span>
            <span>{"// OFFICIAL CREDENTIALS STRIP & CAREER TIMELINE"}</span>
          </div>
          <span className="text-text-muted text-xs">
            PROFESSIONAL ROLES &amp; SLIIT ACADEMIC RECORD
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
          {cvCredentials.map((cred) => (
            <div
              key={cred.company}
              className="bg-surface-panel p-space-md flex flex-col justify-between border border-border-hairline hover:border-chroma-cyan transition-colors"
            >
              <div>
                <div className="flex items-center justify-between font-telemetry-sm uppercase mb-2">
                  <span className="text-anamorphic-amber font-semibold text-xs">
                    {cred.period}
                  </span>
                  <span className="px-1.5 py-0.5 bg-surface-elevated text-text-muted text-[10px] border border-border-hairline">
                    {cred.status}
                  </span>
                </div>

                <h4 className="font-headline-md text-base text-text-primary uppercase mb-1">
                  {cred.role}
                </h4>

                <div className="font-telemetry-sm text-xs text-chroma-cyan uppercase font-semibold mb-3">
                  {cred.company}
                </div>

                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  {cred.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-border-hairline/40 flex items-center justify-between font-telemetry-sm text-[10px] text-text-muted uppercase">
                <span>Verified Deliverables</span>
                <span className="text-text-primary">100% On-Time QC</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Toolkit Strip */}
        <div className="bg-surface-panel/60 p-space-sm border border-border-hairline flex flex-wrap items-center justify-between gap-space-sm font-telemetry-sm text-xs uppercase">
          <span className="text-text-muted font-bold">{"// VERIFIED TOOLKIT:"}</span>
          <div className="flex flex-wrap items-center gap-space-xs text-text-primary">
            <span className="px-2 py-0.5 bg-surface-elevated border border-border-hairline text-anamorphic-amber">
              Blender
            </span>
            <span className="px-2 py-0.5 bg-surface-elevated border border-border-hairline text-chroma-cyan">
              After Effects
            </span>
            <span className="px-2 py-0.5 bg-surface-elevated border border-border-hairline text-anamorphic-amber">
              DaVinci Resolve
            </span>
            <span className="px-2 py-0.5 bg-surface-elevated border border-border-hairline text-text-primary">
              Premiere Pro
            </span>
            <span className="px-2 py-0.5 bg-surface-elevated border border-border-hairline text-text-muted">
              Photoshop
            </span>
            <span className="px-2 py-0.5 bg-surface-elevated border border-border-hairline text-chroma-cyan">
              Higgsfield
            </span>
            <span className="px-2 py-0.5 bg-surface-elevated border border-border-hairline text-text-primary">
              InVideo
            </span>
            <span className="px-2 py-0.5 bg-surface-elevated border border-border-hairline text-anamorphic-amber">
              Beeble
            </span>
            <span className="px-2 py-0.5 bg-surface-elevated border border-border-hairline text-text-muted">
              Figma Weave
            </span>
          </div>
        </div>
      </div>

      {/* Booking & Terminal Contact Panel with Operator Profile */}
      <div className="w-full bg-surface-elevated border border-border-hairline flex flex-col lg:flex-row items-stretch justify-between overflow-hidden">
        <div className="flex flex-col sm:flex-row items-stretch flex-1">
          {/* Operator Portrait Frame — Full Card Height */}
          <div className="relative w-full sm:w-48 md:w-52 min-h-[240px] sm:min-h-full shrink-0 bg-surface-panel border-b sm:border-b-0 sm:border-r border-border-hairline overflow-hidden group">
            <Image
              src="/images/photo.jpg"
              alt="Dulshan Bandara"
              fill
              sizes="(max-width: 640px) 100vw, 208px"
              className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between font-telemetry-sm text-[9px] uppercase text-text-primary bg-surface-container-lowest/85 px-2 py-1 border border-border-hairline">
              <span className="text-anamorphic-amber font-bold">DOP · VFX</span>
              <span className="text-chroma-cyan">D. BANDARA</span>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-space-xs p-space-md lg:p-space-lg">
            <div className="flex items-center gap-space-xs font-telemetry-sm uppercase text-chroma-cyan">
              <span className="w-2 h-2 rounded-full bg-rec-crimson rec-live"></span>
              <span>
                AVAILABLE FOR DIRECT COMMERCIAL CONTRACTS &amp; VFX SUPERVISION
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl xl:text-[42px] font-extrabold text-text-primary uppercase tracking-tight leading-none my-1">
              INITIATE PRODUCTION
            </h3>

            <p className="font-body-md text-on-surface-variant max-w-xl">
              Booking for commercial shoots, tabletop food campaigns, high-end 3D visual effects supervision, and DaVinci color grading suites in Sri Lanka &amp; Worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-space-md font-telemetry-sm text-xs text-text-muted uppercase pt-1">
              <span>LOCATION: COLOMBO, SRI LANKA</span>
              <span>•</span>
              <span className="text-anamorphic-amber">DIRECT BOOKINGS OPEN</span>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center justify-center gap-space-sm p-space-md lg:p-space-lg shrink-0 border-t lg:border-t-0 lg:border-l border-border-hairline bg-surface-panel/30">
          <a
            className="inline-flex items-center justify-center gap-space-xs px-4 sm:px-space-lg py-3 sm:py-3.5 bg-anamorphic-amber hover:bg-text-primary text-surface-container-lowest font-telemetry-lg text-xs sm:text-sm uppercase transition-all duration-150 border border-anamorphic-amber"
            href="https://wa.me/94763349851"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px] shrink-0">chat</span>
            <span className="truncate">WhatsApp [+94 76 33 49 851]</span>
          </a>

          <a
            className="inline-flex items-center justify-center gap-space-xs px-4 sm:px-space-lg py-3 sm:py-3.5 bg-surface-panel hover:bg-chroma-cyan hover:text-surface-container-lowest text-text-primary font-telemetry-lg text-xs sm:text-sm uppercase transition-colors border border-border-hairline"
            href="mailto:dulshanhareendra@gmail.com"
          >
            <span className="material-symbols-outlined text-[18px] shrink-0">mail</span>
            <span className="truncate">dulshanhareendra@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
