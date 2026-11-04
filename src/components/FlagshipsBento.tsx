"use client";

import { useState } from "react";
import { Deliverable, deliverables } from "@/data/deliverables";
import HoverVideoPreview from "./HoverVideoPreview";

interface FlagshipsBentoProps {
  onSelectDeliverable?: (item: Deliverable) => void;
}

export default function FlagshipsBento({ onSelectDeliverable }: FlagshipsBentoProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const peoplesBank = deliverables.find((d) => d.id === "pb-remit-3d");
  const uswatte = deliverables.find((d) => d.id === "uswatte-doc");
  const singer = deliverables.find((d) => d.id === "singer-simple-pay");
  const littleLion = deliverables.find((d) => d.id === "little-lion-tvc");

  const handleCardKeyDown = (e: React.KeyboardEvent, item?: Deliverable) => {
    if ((e.key === "Enter" || e.key === " ") && item && onSelectDeliverable) {
      e.preventDefault();
      onSelectDeliverable(item);
    }
  };

  return (
    <section
      id="flagships"
      className="relative w-full px-space-md lg:px-margin-desktop py-space-xl flex flex-col gap-space-lg"
    >
      {/* Section Title & Telemetry Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span className="font-telemetry-sm uppercase tracking-widest text-chroma-cyan">
            [02 // VFX &amp; 3D COMPOSITING] FLAGSHIP BREAKDOWNS
          </span>
          <h2 className="font-headline-lg text-text-primary uppercase tracking-tight">
            NODE-BASED COMPOSITING &amp; MATCH-MOVING
          </h2>
          <p className="font-body-md text-text-muted">
            Deconstructing multi-pass 3D renders, physical simulation solvers, and seamless live-action plate integration engineered for national television broadcasts. Tap or hover over any viewport to preview.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-space-sm font-telemetry-sm uppercase text-text-muted">
          <span className="px-space-sm py-1 bg-surface-elevated text-anamorphic-amber border border-border-hairline">
            PIPELINE: BLENDER • AFTER EFFECTS • PREMIERE PRO • DAVINCI RESOLVE
          </span>
        </div>
      </div>

      {/* Bento Grid (4 Unique Asymmetric Cards on Desktop, True 16:9 Uncropped Cards on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
        {/* CARD 1: Large 2x2 Feature - People's Bank */}
        <div
          role="button"
          tabIndex={0}
          onMouseEnter={() => setHoveredCard("pb-remit-3d")}
          onMouseLeave={() => setHoveredCard(null)}
          onFocus={() => setHoveredCard("pb-remit-3d")}
          onBlur={() => setHoveredCard(null)}
          onClick={() => peoplesBank && onSelectDeliverable?.(peoplesBank)}
          onKeyDown={(e) => handleCardKeyDown(e, peoplesBank)}
          className="md:col-span-2 relative bg-surface-elevated group overflow-hidden flex flex-col justify-between p-0 md:p-space-md lg:p-space-lg md:min-h-[460px] border border-border-hairline hover:border-chroma-cyan/60 transition-colors cursor-pointer"
        >
          {/* Card Top Bar HUD (Desktop Overlay) */}
          <div className="hidden md:flex relative z-10 items-center justify-between font-telemetry-sm uppercase">
            <span className="px-space-sm py-0.5 bg-chroma-cyan/10 text-chroma-cyan font-semibold border border-chroma-cyan/30">
              [01. BROADCAST TVC FLAGSHIP]
            </span>
            <span className="flex items-center gap-1.5 px-space-sm py-0.5 bg-surface-elevated/85 border border-border-hairline text-[10px]">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  hoveredCard === "pb-remit-3d"
                    ? "bg-rec-crimson rec-live"
                    : "bg-text-muted"
                }`}
              />
              <span
                className={
                  hoveredCard === "pb-remit-3d"
                    ? "text-anamorphic-amber font-bold"
                    : "text-text-muted"
                }
              >
                {hoveredCard === "pb-remit-3d"
                  ? "PREVIEWING CLIP"
                  : "HOVER TO PREVIEW"}
              </span>
            </span>
          </div>

          {/* Video Viewport: True 16:9 Uncropped on Mobile, Full-Bleed on Desktop */}
          <div className="relative aspect-video w-full md:aspect-auto md:absolute md:inset-0 z-0 overflow-hidden bg-black">
            <HoverVideoPreview
              src="https://g6bd6f1e2xl7y65g.public.blob.vercel-storage.com/Peoples%20Remittance%20TV%20Commercial.mp4"
              poster="/images/posters/pb-remit-poster.jpg"
              isHovered={hoveredCard === "pb-remit-3d"}
              previewStart={2.0}
              previewDuration={7.0}
              className="w-full h-full object-contain md:object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="md:hidden absolute top-2 left-2 px-2 py-0.5 bg-surface-container-lowest/85 text-chroma-cyan font-telemetry-sm text-[10px] uppercase font-semibold border border-border-hairline">
              [01. BROADCAST TVC FLAGSHIP]
            </span>
          </div>
          <div className="hidden md:block absolute inset-0 z-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent pointer-events-none" />

          {/* Card Bottom Content */}
          <div className="relative z-10 flex flex-col gap-space-sm p-4 md:p-0 md:mt-32">
            <div className="flex flex-wrap gap-1.5 font-telemetry-sm text-[10px] uppercase">
              <span className="px-2 py-0.5 bg-surface-panel text-chroma-cyan border border-border-hairline">
                Blender 3D Office &amp; ATM
              </span>
              <span className="px-2 py-0.5 bg-surface-panel text-text-primary border border-border-hairline">
                After Effects Chroma Key
              </span>
              <span className="px-2 py-0.5 bg-surface-panel text-anamorphic-amber border border-border-hairline">
                3D Tracking
              </span>
              <span className="px-2 py-0.5 bg-surface-panel text-text-primary border border-border-hairline">
                Screen Replacement
              </span>
            </div>

            <h3 className="font-headline-md text-lg sm:text-xl text-text-primary uppercase group-hover:text-chroma-cyan transition-colors">
              People&apos;s Bank: People&apos;s Remittance TVC
            </h3>

            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant max-w-xl leading-relaxed">
              Modeled a complete 3D office environment and 3D Self-Banking ATM stall from scratch in Blender with multi-pass rendering. Handled green screen chroma keying, rotoscoping, and 3D screen replacements in After Effects.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-space-xs">
              <div className="flex flex-wrap items-center gap-2 font-telemetry-sm text-[10px] text-text-muted uppercase">
                <span className="text-anamorphic-amber font-semibold">
                  SKY FILMS INTERNATIONAL
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="text-text-primary hidden sm:inline">
                  VFX COMPOSITOR &amp; 3D ARTIST
                </span>
              </div>

              <span className="inline-flex items-center gap-space-xs font-telemetry-sm text-[11px] uppercase px-3 py-1.5 bg-surface-panel group-hover:bg-chroma-cyan group-hover:text-surface-container-lowest text-text-primary transition-colors border border-border-hairline">
                <span>Watch &amp; Inspect</span>
                <span className="material-symbols-outlined text-[15px]">
                  arrow_outward
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* CARD 2: Uswatte Chirpy Chips */}
        <div
          role="button"
          tabIndex={0}
          onMouseEnter={() => setHoveredCard("uswatte-doc")}
          onMouseLeave={() => setHoveredCard(null)}
          onFocus={() => setHoveredCard("uswatte-doc")}
          onBlur={() => setHoveredCard(null)}
          onClick={() => uswatte && onSelectDeliverable?.(uswatte)}
          onKeyDown={(e) => handleCardKeyDown(e, uswatte)}
          className="relative bg-surface-elevated group overflow-hidden flex flex-col justify-between p-0 md:p-space-md md:min-h-[460px] border border-border-hairline hover:border-chroma-cyan/60 transition-colors cursor-pointer"
        >
          <div className="hidden md:flex relative z-10 items-center justify-between font-telemetry-sm uppercase">
            <span className="px-space-sm py-0.5 bg-rec-crimson/20 text-rec-crimson font-semibold border border-rec-crimson/30">
              [02. FLUID &amp; PARTICLE SIM]
            </span>
            <span className="flex items-center gap-1 px-space-xs py-0.5 bg-surface-elevated/85 border border-border-hairline text-[10px]">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  hoveredCard === "uswatte-doc"
                    ? "bg-rec-crimson rec-live"
                    : "bg-text-muted"
                }`}
              />
              <span
                className={
                  hoveredCard === "uswatte-doc"
                    ? "text-anamorphic-amber font-bold"
                    : "text-text-muted"
                }
              >
                {hoveredCard === "uswatte-doc" ? "PREVIEWING" : "HOVER"}
              </span>
            </span>
          </div>

          <div className="relative aspect-video w-full md:aspect-auto md:absolute md:inset-0 z-0 overflow-hidden bg-black">
            <HoverVideoPreview
              src="https://g6bd6f1e2xl7y65g.public.blob.vercel-storage.com/Uswatte%20Chirpy%20Chips%20Documentary.mp4"
              poster="/images/posters/uswatte-poster.jpg"
              isHovered={hoveredCard === "uswatte-doc"}
              previewStart={2.0}
              previewDuration={7.0}
              className="w-full h-full object-contain md:object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="md:hidden absolute top-2 left-2 px-2 py-0.5 bg-surface-container-lowest/85 text-rec-crimson font-telemetry-sm text-[10px] uppercase font-semibold border border-border-hairline">
              [02. FLUID &amp; PARTICLE SIM]
            </span>
          </div>
          <div className="hidden md:block absolute inset-0 z-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-space-xs p-4 md:p-0 md:mt-32">
            <div className="flex flex-wrap gap-1.5 font-telemetry-sm text-[10px] uppercase">
              <span className="px-2 py-0.5 bg-surface-panel text-text-primary border border-border-hairline">
                Blender 3D Modeling
              </span>
              <span className="px-2 py-0.5 bg-surface-panel text-anamorphic-amber border border-border-hairline">
                3D Meteor &amp; Physics Sim
              </span>
              <span className="px-2 py-0.5 bg-surface-panel text-chroma-cyan border border-border-hairline">
                AE Compositing
              </span>
            </div>

            <h3 className="font-headline-md text-lg text-text-primary uppercase group-hover:text-chroma-cyan transition-colors">
              Uswatte: Chirpy Chips
            </h3>

            <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              Modeled broadcast-quality 3D product packaging and animated a 3D potato meteor atmospheric entry with fire/smoke simulations, dynamic potato slicing, spice particles, and final pack-shot compositing.
            </p>

            <div className="flex items-center justify-between pt-space-xs">
              <span className="font-telemetry-sm text-[10px] text-chroma-cyan uppercase font-semibold">
                BLENDER &amp; AE // 100% CG SIM
              </span>
              <span className="px-2.5 py-1 bg-surface-panel group-hover:bg-chroma-cyan group-hover:text-black text-text-primary text-[10px] uppercase font-telemetry-sm transition-colors border border-border-hairline">
                Inspect
              </span>
            </div>
          </div>
        </div>

        {/* CARD 3: Wide Horizontal Card - SINGER Simple Pay */}
        <div
          role="button"
          tabIndex={0}
          onMouseEnter={() => setHoveredCard("singer-simple-pay")}
          onMouseLeave={() => setHoveredCard(null)}
          onFocus={() => setHoveredCard("singer-simple-pay")}
          onBlur={() => setHoveredCard(null)}
          onClick={() => singer && onSelectDeliverable?.(singer)}
          onKeyDown={(e) => handleCardKeyDown(e, singer)}
          className="md:col-span-2 relative bg-surface-elevated group overflow-hidden flex flex-col justify-between p-0 md:p-space-md lg:p-space-lg md:min-h-[340px] border border-border-hairline hover:border-anamorphic-amber/60 transition-colors cursor-pointer"
        >
          <div className="hidden md:flex relative z-10 items-center justify-between font-telemetry-sm uppercase">
            <span className="px-space-sm py-0.5 bg-anamorphic-amber/20 text-anamorphic-amber font-semibold border border-anamorphic-amber/30">
              [03. DYNAMIC POINT-CLOUD VORTEX]
            </span>
            <span className="flex items-center gap-1.5 px-space-sm py-0.5 bg-surface-elevated/85 border border-border-hairline text-[10px]">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  hoveredCard === "singer-simple-pay"
                    ? "bg-rec-crimson rec-live"
                    : "bg-text-muted"
                }`}
              />
              <span
                className={
                  hoveredCard === "singer-simple-pay"
                    ? "text-anamorphic-amber font-bold"
                    : "text-text-muted"
                }
              >
                {hoveredCard === "singer-simple-pay"
                  ? "PREVIEWING CLIP"
                  : "HOVER TO PREVIEW"}
              </span>
            </span>
          </div>

          <div className="relative aspect-video w-full md:aspect-auto md:absolute md:inset-0 z-0 overflow-hidden bg-black">
            <HoverVideoPreview
              src="https://g6bd6f1e2xl7y65g.public.blob.vercel-storage.com/Singer%20Simple%20Pay%20TVC.mp4"
              poster="/images/posters/singer-poster.jpg"
              isHovered={hoveredCard === "singer-simple-pay"}
              previewStart={3.0}
              previewDuration={7.0}
              className="w-full h-full object-contain md:object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="md:hidden absolute top-2 left-2 px-2 py-0.5 bg-surface-container-lowest/85 text-anamorphic-amber font-telemetry-sm text-[10px] uppercase font-semibold border border-border-hairline">
              [03. DYNAMIC POINT-CLOUD VORTEX]
            </span>
          </div>
          <div className="hidden md:block absolute inset-0 z-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/75 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-space-xs p-4 md:p-0 md:mt-20">
            <div className="flex flex-wrap gap-1.5 font-telemetry-sm text-[10px] uppercase">
              <span className="px-2 py-0.5 bg-surface-panel text-chroma-cyan border border-border-hairline">
                Fluid Particle Simulations
              </span>
              <span className="px-2 py-0.5 bg-surface-panel text-text-primary border border-border-hairline">
                After Effects 3D Tracking
              </span>
              <span className="px-2 py-0.5 bg-surface-panel text-anamorphic-amber border border-border-hairline">
                Kinetic Typography
              </span>
            </div>

            <h3 className="font-headline-md text-lg sm:text-xl text-text-primary uppercase group-hover:text-anamorphic-amber transition-colors">
              SINGER: Simple Pay Commercial
            </h3>

            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant max-w-xl leading-relaxed">
              Designed multi-colored fluid particle simulations that organically materialize 3D living room furniture (TV, coffee table, sofa) tracked into the live-action room in After Effects.
            </p>

            <div className="flex items-center justify-between pt-space-xs">
              <span className="font-telemetry-sm text-[10px] text-text-muted uppercase">
                MAGIC MANGO // VFX ARTIST
              </span>
              <span className="px-2.5 py-1 bg-surface-panel group-hover:bg-anamorphic-amber group-hover:text-black text-text-primary text-[10px] uppercase font-telemetry-sm transition-colors border border-border-hairline">
                Inspect Breakdown
              </span>
            </div>
          </div>
        </div>

        {/* CARD 4: Standard Card - Little Lion TVC */}
        <div
          role="button"
          tabIndex={0}
          onMouseEnter={() => setHoveredCard("little-lion-tvc")}
          onMouseLeave={() => setHoveredCard(null)}
          onFocus={() => setHoveredCard("little-lion-tvc")}
          onBlur={() => setHoveredCard(null)}
          onClick={() => littleLion && onSelectDeliverable?.(littleLion)}
          onKeyDown={(e) => handleCardKeyDown(e, littleLion)}
          className="relative bg-surface-elevated group overflow-hidden flex flex-col justify-between p-0 md:p-space-md md:min-h-[340px] border border-border-hairline hover:border-chroma-cyan/60 transition-colors cursor-pointer"
        >
          <div className="hidden md:flex relative z-10 items-center justify-between font-telemetry-sm uppercase">
            <span className="px-space-sm py-0.5 bg-surface-panel text-text-primary font-semibold border border-border-hairline">
              [04. POST PACKAGING SWAP]
            </span>
            <span className="flex items-center gap-1 px-space-xs py-0.5 bg-surface-elevated/85 border border-border-hairline text-[10px]">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  hoveredCard === "little-lion-tvc"
                    ? "bg-rec-crimson rec-live"
                    : "bg-text-muted"
                }`}
              />
              <span
                className={
                  hoveredCard === "little-lion-tvc"
                    ? "text-anamorphic-amber font-bold"
                    : "text-text-muted"
                }
              >
                {hoveredCard === "little-lion-tvc" ? "PREVIEWING" : "HOVER"}
              </span>
            </span>
          </div>

          <div className="relative aspect-video w-full md:aspect-auto md:absolute md:inset-0 z-0 overflow-hidden bg-black">
            <HoverVideoPreview
              src="https://g6bd6f1e2xl7y65g.public.blob.vercel-storage.com/Little%20Lion%20TVC.mp4"
              poster="/images/posters/little-lion-poster.jpg"
              isHovered={hoveredCard === "little-lion-tvc"}
              previewStart={2.0}
              previewDuration={7.0}
              className="w-full h-full object-contain md:object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="md:hidden absolute top-2 left-2 px-2 py-0.5 bg-surface-container-lowest/85 text-text-primary font-telemetry-sm text-[10px] uppercase font-semibold border border-border-hairline">
              [04. POST PACKAGING SWAP]
            </span>
          </div>
          <div className="hidden md:block absolute inset-0 z-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-space-xs p-4 md:p-0 md:mt-20">
            <div className="flex flex-wrap gap-1.5 font-telemetry-sm text-[10px] uppercase">
              <span className="px-2 py-0.5 bg-surface-panel text-anamorphic-amber border border-border-hairline">
                Blender 3D Packaging
              </span>
              <span className="px-2 py-0.5 bg-surface-panel text-chroma-cyan border border-border-hairline">
                After Effects 3D Tracking
              </span>
              <span className="px-2 py-0.5 bg-surface-panel text-text-primary border border-border-hairline">
                3D/2D Product Window
              </span>
            </div>

            <h3 className="font-headline-md text-lg text-text-primary uppercase group-hover:text-chroma-cyan transition-colors">
              Little Lion TVC
            </h3>

            <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              Led digital product update by modeling new 3D packaging in Blender and using After Effects 3D tracking to replace old products in live-action footage without reshoots.
            </p>

            <div className="flex items-center justify-between pt-space-xs">
              <span className="font-telemetry-sm text-[10px] text-text-muted uppercase">
                PRODUCTION: SKY FILMS
              </span>
              <span className="px-2.5 py-1 bg-surface-panel group-hover:bg-chroma-cyan group-hover:text-black text-text-primary text-[10px] uppercase font-telemetry-sm transition-colors border border-border-hairline">
                Inspect
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
