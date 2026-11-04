"use client";

import { useState } from "react";
import { Deliverable, deliverables } from "@/data/deliverables";
import HoverVideoPreview from "./HoverVideoPreview";

interface SoloDirectionTriptychProps {
  onSelectDeliverable?: (item: Deliverable) => void;
}

export default function SoloDirectionTriptych({
  onSelectDeliverable,
}: SoloDirectionTriptychProps) {
  const [activeReelHover, setActiveReelHover] = useState<string | null>(null);

  const reel1 = deliverables.find((d) => d.id === "isso-pittu-crab");
  const reel2 = deliverables.find((d) => d.id === "isso-wok-burger");
  const reel3 = deliverables.find((d) => d.id === "isso-prawn-kottu");
  const castingCall = deliverables.find((d) => d.id === "sky-films-casting");

  const handleCardKeyDown = (e: React.KeyboardEvent, item?: Deliverable) => {
    if ((e.key === "Enter" || e.key === " ") && item && onSelectDeliverable) {
      e.preventDefault();
      onSelectDeliverable(item);
    }
  };

  return (
    <section
      id="dop-and-color"
      className="relative w-full px-space-md lg:px-margin-desktop py-space-xl flex flex-col gap-space-lg"
    >
      {/* Section Title & Telemetry Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span className="font-telemetry-sm uppercase tracking-widest text-anamorphic-amber">
            [03 // COMMERCIAL DIRECTION &amp; COLOR] THE 9:16 MOBILE &amp; BROADCAST TRIPTYCH
          </span>
          <h2 className="font-headline-lg text-text-primary uppercase tracking-tight">
            ISSO — COLOMBO CITY CENTRE CAMPAIGN
          </h2>
          <p className="font-body-md text-text-muted">
            Complete solo end-to-end execution: On-location tabletop cinematography (DOP), rhythmic &amp; split-screen editing, appetizing culinary color grading in DaVinci Resolve, rotoscoped depth typography in After Effects, and AI-generated video end-cards. Hover any reel to preview.
          </p>
        </div>

        <div className="flex items-center gap-space-sm font-telemetry-sm uppercase text-text-muted">
          <span className="px-space-sm py-1 bg-surface-elevated text-chroma-cyan border border-border-hairline">
            ASPECT: 9:16 NATIVE DCI // HOVER PREVIEW
          </span>
        </div>
      </div>

      {/* Layout: Left 65% Triptych Reels, Right 35% Skills & Director Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        {/* LEFT 65% (Cols 1-8): The 3 Smartphone 9:16 Vertical Frames */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-space-md items-center">
          {/* Reel 1: Pittu with Jaffna Crab Curry */}
          <div
            role="button"
            tabIndex={0}
            onMouseEnter={() => setActiveReelHover("reel1")}
            onMouseLeave={() => setActiveReelHover(null)}
            onFocus={() => setActiveReelHover("reel1")}
            onBlur={() => setActiveReelHover(null)}
            onClick={() => reel1 && onSelectDeliverable?.(reel1)}
            onKeyDown={(e) => handleCardKeyDown(e, reel1)}
            className={`relative aspect-[9/16] bg-surface-elevated overflow-hidden group flex flex-col justify-between p-space-sm border border-border-hairline hover:border-anamorphic-amber/60 transition-all duration-300 cursor-pointer ${
              activeReelHover && activeReelHover !== "reel1" ? "opacity-65" : "opacity-100"
            }`}
          >
            {/* Hover Preview Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <HoverVideoPreview
                src="/videos/Pittu Reel v8.mp4"
                poster="/images/posters/isso-pittu-poster.jpg"
                isHovered={activeReelHover === "reel1"}
                previewStart={0}
                previewDuration={6.8}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent pointer-events-none" />

            {/* Reel Top HUD */}
            <div className="relative z-10 flex items-center justify-between font-telemetry-sm uppercase">
              <span className="px-space-xs py-0.5 bg-surface-panel text-anamorphic-amber border border-border-hairline">
                REEL 01
              </span>
              <span className="px-1.5 py-0.5 bg-surface-elevated/85 border border-border-hairline text-[10px] flex items-center gap-1">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    activeReelHover === "reel1"
                      ? "bg-rec-crimson rec-live"
                      : "bg-text-muted"
                  }`}
                />
                <span
                  className={
                    activeReelHover === "reel1"
                      ? "text-anamorphic-amber font-bold"
                      : "text-text-muted"
                  }
                >
                  {activeReelHover === "reel1" ? "PREVIEWING" : "HOVER"}
                </span>
              </span>
            </div>

            {/* Reel Bottom Info */}
            <div className="relative z-10 flex flex-col gap-space-xs">
              <div className="flex flex-wrap gap-1 font-telemetry-sm text-[10px] uppercase">
                <span className="px-1 py-0.5 bg-surface-panel text-chroma-cyan border border-border-hairline">
                  DOP
                </span>
                <span className="px-1 py-0.5 bg-surface-panel text-text-primary border border-border-hairline">
                  Edit &amp; Color
                </span>
                <span className="px-1 py-0.5 bg-surface-panel text-anamorphic-amber border border-border-hairline">
                  Roto Depth Title
                </span>
                <span className="px-1 py-0.5 bg-surface-panel text-text-muted border border-border-hairline">
                  AI End-Card
                </span>
              </div>

              <h4 className="font-headline-md text-[18px] text-text-primary uppercase leading-tight">
                Pittu &amp; Jaffna Crab Curry
              </h4>

              <p className="font-body-sm text-[11px] text-on-surface-variant line-clamp-2">
                Video-in-logo prawn track matte opener, steaming pittu cinematography, depth-rotoscoped title tucked behind the foreground crab claw, and AI-assisted brand outro.
              </p>

              <span className="mt-1 w-full py-1.5 bg-surface-panel/90 group-hover:bg-anamorphic-amber group-hover:text-black text-text-primary font-telemetry-sm text-[10px] uppercase transition-colors border border-border-hairline flex items-center justify-center gap-1">
                <span>Inspect Reel 01</span>
                <span className="material-symbols-outlined text-[13px]">
                  play_arrow
                </span>
              </span>
            </div>
          </div>

          {/* Reel 2: Center Elevated & Highlighted with Amber Rim Glow */}
          <div
            role="button"
            tabIndex={0}
            onMouseEnter={() => setActiveReelHover("reel2")}
            onMouseLeave={() => setActiveReelHover(null)}
            onFocus={() => setActiveReelHover("reel2")}
            onBlur={() => setActiveReelHover(null)}
            onClick={() => reel2 && onSelectDeliverable?.(reel2)}
            onKeyDown={(e) => handleCardKeyDown(e, reel2)}
            className={`relative aspect-[9/16] bg-surface-elevated overflow-hidden group flex flex-col justify-between p-space-sm sm:-translate-y-3 shadow-xl shadow-anamorphic-amber/10 border-2 border-anamorphic-amber/60 transition-all duration-300 cursor-pointer ${
              activeReelHover && activeReelHover !== "reel2" ? "opacity-65" : "opacity-100"
            }`}
          >
            {/* Anamorphic Amber Rim Indicator */}
            <div className="absolute top-0 left-0 w-full h-1 bg-anamorphic-amber z-20" />

            <div className="absolute inset-0 z-0 overflow-hidden">
              <HoverVideoPreview
                src="/videos/ISSO BOGO 1.mp4"
                poster="/images/posters/isso-bogo-poster.jpg"
                isHovered={activeReelHover === "reel2"}
                previewStart={0}
                previewDuration={6.8}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent pointer-events-none" />

            {/* Reel Top HUD */}
            <div className="relative z-10 flex items-center justify-between font-telemetry-sm uppercase">
              <span className="px-space-xs py-0.5 bg-anamorphic-amber text-surface-container-lowest font-bold">
                HERO REEL 02
              </span>
              <span className="text-rec-crimson flex items-center gap-1 font-semibold text-[11px] bg-surface-elevated/85 px-1.5 py-0.5 border border-border-hairline">
                <span className="w-2 h-2 rounded-full bg-rec-crimson rec-live"></span>{" "}
                {activeReelHover === "reel2" ? "PREVIEWING" : "4K REC"}
              </span>
            </div>

            {/* Reel Bottom Info */}
            <div className="relative z-10 flex flex-col gap-space-xs">
              <div className="flex flex-wrap gap-1 font-telemetry-sm text-[10px] uppercase">
                <span className="px-1 py-0.5 bg-surface-panel text-anamorphic-amber font-semibold border border-anamorphic-amber/40">
                  Tabletop DOP
                </span>
                <span className="px-1 py-0.5 bg-surface-panel text-chroma-cyan border border-border-hairline">
                  Split-Screen Edit
                </span>
                <span className="px-1 py-0.5 bg-surface-panel text-text-primary border border-border-hairline">
                  DaVinci Color Grade
                </span>
                <span className="px-1 py-0.5 bg-surface-panel text-text-muted border border-border-hairline">
                  AI End-Card
                </span>
              </div>

              <h4 className="font-headline-md text-[18px] text-text-primary uppercase leading-tight">
                Wok Fire &amp; Split-Screen Burger
              </h4>

              <p className="font-body-sm text-[11px] text-on-surface-variant line-clamp-2">
                Slow-motion wok flame cinematography, synchronized dual split-screen burger assembly, rich culinary color grading in DaVinci Resolve, and smooth orbital camera movement.
              </p>

              <span className="mt-1 w-full py-1.5 bg-anamorphic-amber group-hover:bg-white text-surface-container-lowest font-telemetry-sm text-[10px] font-bold uppercase transition-colors flex items-center justify-center gap-1">
                <span>Inspect Hero Reel 02</span>
                <span className="material-symbols-outlined text-[13px]">
                  play_arrow
                </span>
              </span>
            </div>
          </div>

          {/* Reel 3: Prawn Kottu (2095/=) */}
          <div
            role="button"
            tabIndex={0}
            onMouseEnter={() => setActiveReelHover("reel3")}
            onMouseLeave={() => setActiveReelHover(null)}
            onFocus={() => setActiveReelHover("reel3")}
            onBlur={() => setActiveReelHover(null)}
            onClick={() => reel3 && onSelectDeliverable?.(reel3)}
            onKeyDown={(e) => handleCardKeyDown(e, reel3)}
            className={`relative aspect-[9/16] bg-surface-elevated overflow-hidden group flex flex-col justify-between p-space-sm border border-border-hairline hover:border-chroma-cyan/60 transition-all duration-300 cursor-pointer ${
              activeReelHover && activeReelHover !== "reel3" ? "opacity-65" : "opacity-100"
            }`}
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <HoverVideoPreview
                src="/videos/Pittu Kottu Reel v4.mp4"
                poster="/images/posters/isso-kottu-poster.jpg"
                isHovered={activeReelHover === "reel3"}
                previewStart={0}
                previewDuration={6.8}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent pointer-events-none" />

            {/* Reel Top HUD */}
            <div className="relative z-10 flex items-center justify-between font-telemetry-sm uppercase">
              <span className="px-space-xs py-0.5 bg-surface-panel text-chroma-cyan border border-border-hairline">
                REEL 03
              </span>
              <span className="px-1.5 py-0.5 bg-surface-elevated/85 border border-border-hairline text-[10px] flex items-center gap-1">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    activeReelHover === "reel3"
                      ? "bg-rec-crimson rec-live"
                      : "bg-text-muted"
                  }`}
                />
                <span
                  className={
                    activeReelHover === "reel3"
                      ? "text-chroma-cyan font-bold"
                      : "text-text-muted"
                  }
                >
                  {activeReelHover === "reel3" ? "PREVIEWING" : "HOVER"}
                </span>
              </span>
            </div>

            {/* Reel Bottom Info */}
            <div className="relative z-10 flex flex-col gap-space-xs">
              <div className="flex flex-wrap gap-1 font-telemetry-sm text-[10px] uppercase">
                <span className="px-1 py-0.5 bg-surface-panel text-text-primary border border-border-hairline">
                  DOP &amp; Slow-Mo
                </span>
                <span className="px-1 py-0.5 bg-surface-panel text-anamorphic-amber border border-border-hairline">
                  DaVinci Color Grade
                </span>
                <span className="px-1 py-0.5 bg-surface-panel text-chroma-cyan border border-border-hairline">
                  Roto Typography
                </span>
                <span className="px-1 py-0.5 bg-surface-panel text-text-muted border border-border-hairline">
                  AI End-Card
                </span>
              </div>

              <h4 className="font-headline-md text-[18px] text-text-primary uppercase leading-tight">
                Prawn Kottu (2095/= Launch)
              </h4>

              <p className="font-body-sm text-[11px] text-on-surface-variant line-clamp-2">
                High-speed wok toss capturing airborne kottu and prawns, foreground plate rotoscoping with 3D Z-space &apos;PRAWN KOTTU 2095/=&apos; typography, and AI-generated end-card.
              </p>

              <span className="mt-1 w-full py-1.5 bg-surface-panel/90 group-hover:bg-chroma-cyan group-hover:text-black text-text-primary font-telemetry-sm text-[10px] uppercase transition-colors border border-border-hairline flex items-center justify-center gap-1">
                <span>Inspect Reel 03</span>
                <span className="material-symbols-outlined text-[13px]">
                  play_arrow
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT 35% (Cols 9-12): Director Spotlight & 6-Pillar Skill Matrix */}
        <div className="lg:col-span-4 flex flex-col gap-space-md justify-between">
          {/* Sky Films Spotlight Card */}
          <div className="bg-surface-elevated p-space-md flex flex-col gap-space-sm border border-border-hairline">
            <div className="flex items-center justify-between font-telemetry-sm uppercase">
              <span className="text-anamorphic-amber font-semibold">
                [DIRECTOR SPOTLIGHT]
              </span>
              <span className="text-text-muted">SKY FILMS 2.0</span>
            </div>

            <h3 className="font-headline-md text-text-primary uppercase">
              Casting Call Commercial
            </h3>

            <p className="font-body-sm text-on-surface-variant">
              Led on-set studio spotlighting, framing, rhythmic glitch/RGB editing, and kinetic typography VFX.
            </p>

            <div className="grid grid-cols-2 gap-space-xs pt-space-xs font-telemetry-sm uppercase">
              <div className="bg-surface-panel p-space-xs flex flex-col border border-border-hairline">
                <span className="text-text-muted text-[10px]">ROLE</span>
                <span className="text-text-primary font-semibold text-xs">
                  Director, DOP, Editor &amp; VFX Artist
                </span>
              </div>
              <div className="bg-surface-panel p-space-xs flex flex-col border border-border-hairline">
                <span className="text-text-muted text-[10px]">DELIVERY</span>
                <span className="text-chroma-cyan font-semibold text-xs">
                  Broadcast &amp; 9:16 Master
                </span>
              </div>
            </div>

            {castingCall && (
              <button
                onClick={() => onSelectDeliverable?.(castingCall)}
                className="w-full mt-2 py-2 bg-surface-panel hover:bg-anamorphic-amber hover:text-black text-text-primary font-telemetry-sm uppercase transition-colors border border-border-hairline flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  folder_open
                </span>
                <span>Inspect Casting Call Breakdown</span>
              </button>
            )}
          </div>

          {/* 6-Pillar Technical Skill Matrix with Calibrated Progress Gauges */}
          <div className="bg-surface-elevated p-space-md flex flex-col gap-space-sm border border-border-hairline">
            <div className="flex items-center justify-between font-telemetry-sm uppercase">
              <span className="text-text-primary font-bold">
                {"// 6-PILLAR TECHNICAL MATRIX"}
              </span>
              <span className="text-chroma-cyan">CALIBRATED</span>
            </div>

            <div className="flex flex-col gap-space-sm pt-space-xs">
              {/* Pillar 1 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-telemetry-sm uppercase text-[11px]">
                  <span className="text-text-primary">
                    1. Cinematography &amp; Lighting (DOP)
                  </span>
                  <span className="text-anamorphic-amber">
                    Tabletop &amp; Studio Framing
                  </span>
                </div>
                <div className="w-full h-1.5 bg-surface-container overflow-hidden">
                  <div className="w-[96%] h-full bg-anamorphic-amber"></div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-telemetry-sm uppercase text-[11px]">
                  <span className="text-text-primary">
                    2. Video Editing &amp; Color Grading
                  </span>
                  <span className="text-chroma-cyan">
                    DaVinci Resolve • Premiere Pro
                  </span>
                </div>
                <div className="w-full h-1.5 bg-surface-container overflow-hidden">
                  <div className="w-[94%] h-full bg-chroma-cyan"></div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-telemetry-sm uppercase text-[11px]">
                  <span className="text-text-primary">
                    3. VFX &amp; Compositing
                  </span>
                  <span className="text-text-primary">
                    After Effects • Blender (3D Track, Roto)
                  </span>
                </div>
                <div className="w-full h-1.5 bg-surface-container overflow-hidden">
                  <div className="w-[92%] h-full bg-text-primary"></div>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-telemetry-sm uppercase text-[11px]">
                  <span className="text-text-primary">
                    4. 3D Modeling &amp; Animation
                  </span>
                  <span className="text-chroma-cyan">
                    Blender (Environments, Packaging)
                  </span>
                </div>
                <div className="w-full h-1.5 bg-surface-container overflow-hidden">
                  <div className="w-[90%] h-full bg-chroma-cyan"></div>
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-telemetry-sm uppercase text-[11px]">
                  <span className="text-text-primary">
                    5. Motion Graphics &amp; End Cards
                  </span>
                  <span className="text-text-muted">
                    After Effects (Product Windows, Roto)
                  </span>
                </div>
                <div className="w-full h-1.5 bg-surface-container overflow-hidden">
                  <div className="w-[88%] h-full bg-text-primary"></div>
                </div>
              </div>

              {/* Pillar 6 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-telemetry-sm uppercase text-[11px]">
                  <span className="text-text-primary">
                    6. AI Video &amp; VFX Workflows
                  </span>
                  <span className="text-anamorphic-amber">
                    Higgsfield • InVideo • Beeble • Weave
                  </span>
                </div>
                <div className="w-full h-1.5 bg-surface-container overflow-hidden">
                  <div className="w-[85%] h-full bg-anamorphic-amber"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
