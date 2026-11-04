"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface Chapter {
  label: string;
  timeSec: number;
  timeFormatted: string;
  pct: string;
  description: string;
}

const chapters: Chapter[] = [
  {
    label: "[00:00 — Uswatte 3D Chip & Spices]",
    timeSec: 0,
    timeFormatted: "00:00",
    pct: "0%",
    description: "Uswatte 3D Chip & Spices Particle Simulation",
  },
  {
    label: "[00:11 — 3D Meteor Atmospheric Entry]",
    timeSec: 11,
    timeFormatted: "00:11",
    pct: "11%",
    description: "Hyper-detailed 3D meteor atmospheric entry with searing plasma trail",
  },
  {
    label: "[00:17 — SINGER Particle Sofa Reveal]",
    timeSec: 17,
    timeFormatted: "00:17",
    pct: "18%",
    description: "SINGER commercial still. High-end living room furniture materializing",
  },
  {
    label: "[00:22 — Port City Wireframe Build]",
    timeSec: 22,
    timeFormatted: "00:22",
    pct: "24%",
    description: "Port City Colombo coastal development with glowing 3D wireframe mesh",
  },
  {
    label: "[00:32 — People's Bank 3D ATM Interior]",
    timeSec: 32,
    timeFormatted: "00:32",
    pct: "34%",
    description: "People's Bank interior commercial. 3D banking hall set extension",
  },
  {
    label: "[00:49 — Prime Marina & Brand Idents]",
    timeSec: 49,
    timeFormatted: "00:49",
    pct: "52%",
    description: "Prime Marina luxury yacht harbor illuminated at twilight",
  },
];

const clientList = [
  { name: "SINGER", logo: "/logos/singer-3-logo-svg-vector.png" },
  { name: "PickMe", logo: "/logos/PickMe-Logo_Two-tone_Transparent-300x129.png" },
  { name: "People's Bank", logo: "/logos/Peoplesbanklk.png" },
  { name: "Unilever", logo: "/logos/Unilever.png" },
  { name: "Keells Super", logo: "/logos/KeellsLogo.png" },
  { name: "Uswatte", logo: "/logos/USWATTE-NEW-LOGO.png" },
  { name: "Little Lion", logo: "/logos/little lion.png" },
  { name: "Rich Look", logo: "/logos/400-rich-look-16275774341599.png" },
  { name: "Eva", logo: "/logos/Eva-1.png" },
  { name: "Rhino Roofing", logo: "/logos/new-rhino-logo-60.png" },
  { name: "Ogilvy", logo: "/logos/Ogilvy_logo.svg.png" },
  { name: "Holmes Pollard & Stott", logo: "/logos/Holland polladrs.png" },
  { name: "ISSO", logo: null },
  { name: "Prime Lands", logo: null },
  { name: "Home Lands", logo: null },
  { name: "Sky Films", logo: null },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrubberTrackRef = useRef<HTMLDivElement>(null);

  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [cinemaMode, setCinemaMode] = useState(false);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [currentTimecode, setCurrentTimecode] = useState("00:00:00:00");
  const [progressPct, setProgressPct] = useState("0%");

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 93;
    const pct = Math.min(100, Math.max(0, (current / duration) * 100));
    setProgressPct(`${pct.toFixed(1)}%`);

    const totalFrames = Math.floor(current * 25);
    const frames = totalFrames % 25;
    const totalSeconds = Math.floor(current);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    const pad = (n: number) => String(n).padStart(2, "0");
    setCurrentTimecode(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`);

    for (let i = chapters.length - 1; i >= 0; i--) {
      if (current >= chapters[i].timeSec) {
        setActiveChapterIndex(i);
        break;
      }
    }
  };

  const seekToChapter = (index: number) => {
    const chapter = chapters[index];
    if (!chapter) return;
    setActiveChapterIndex(index);
    if (videoRef.current) {
      videoRef.current.currentTime = chapter.timeSec;
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const seekByClientX = (clientX: number) => {
    if (!scrubberTrackRef.current || !videoRef.current) return;
    const rect = scrubberTrackRef.current.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const duration = videoRef.current.duration || 93;
    videoRef.current.currentTime = ratio * duration;
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsScrubbing(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    seekByClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isScrubbing) return;
    seekByClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isScrubbing) return;
    setIsScrubbing(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleCinemaMode = () => {
    const nextMode = !cinemaMode;
    setCinemaMode(nextMode);
    if (videoRef.current) {
      if (nextMode) {
        videoRef.current.muted = false;
        setIsMuted(false);
        if (!isPlaying) {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }
    }
  };

  return (
    <section
      id="showreel"
      className="relative w-full px-space-md lg:px-margin-desktop py-space-xl flex flex-col gap-space-lg"
    >
      {/* ARRI HUD Outer Viewfinder Viewport */}
      <div className="relative w-full lg:min-h-[740px] overflow-hidden bg-surface-container-lowest flex flex-col justify-between p-0 sm:p-space-md lg:p-space-lg border border-border-hairline">
        {/* TOP HUD TELEMETRY BAR (Mobile: Above 16:9 Video | Desktop: Overlay) */}
        <div className="relative z-20 w-full flex items-center justify-between gap-2 font-telemetry-sm text-text-muted uppercase p-3 sm:p-0 sm:mb-4 bg-surface-elevated sm:bg-transparent border-b sm:border-b-0 border-border-hairline">
          <div className="flex items-center gap-1.5 sm:gap-space-sm bg-surface-panel sm:bg-surface-elevated/80 backdrop-blur-md px-2 sm:px-space-sm py-1 border border-border-hairline text-[10px] sm:text-telemetry-sm">
            <span className="w-2 h-2 rounded-full bg-rec-crimson rec-live"></span>
            <span className="text-text-primary font-bold tabular-nums">
              TC {currentTimecode}
            </span>
            <span className="text-text-muted/40 hidden sm:inline">/</span>
            <span className="text-text-muted tabular-nums hidden sm:inline">
              00:01:33:09
            </span>
            <span className="text-text-muted/40">/</span>
            <span className="text-chroma-cyan">25 FPS</span>
            <span className="text-text-muted/40 hidden xs:inline">/</span>
            <span className="text-anamorphic-amber hidden xs:inline">16:9 HD</span>
          </div>

          <div className="flex items-center gap-space-xs">
            <div className="hidden md:flex items-center gap-space-sm bg-surface-elevated/80 backdrop-blur-md px-space-sm py-1 border border-border-hairline">
              <span className="text-text-primary">BLENDER</span>
              <span className="text-text-muted/40">•</span>
              <span className="text-text-primary">AFTER EFFECTS</span>
              <span className="text-text-muted/40">•</span>
              <span className="text-anamorphic-amber">DAVINCI RESOLVE</span>
              <span className="text-text-muted/40">•</span>
              <span className="text-chroma-cyan">PREMIERE PRO</span>
            </div>

            <button
              onClick={toggleCinemaMode}
              className={`hidden sm:inline-flex items-center gap-1.5 px-space-sm py-1 font-telemetry-sm uppercase transition-colors border cursor-pointer ${
                cinemaMode
                  ? "bg-anamorphic-amber text-surface-container-lowest font-bold border-anamorphic-amber"
                  : "bg-surface-elevated/80 hover:bg-surface-panel text-chroma-cyan border-border-hairline"
              }`}
              title="Toggle unobstructed showreel view"
            >
              <span className="material-symbols-outlined text-[15px]">
                {cinemaMode ? "visibility" : "theaters"}
              </span>
              <span>{cinemaMode ? "Restore HUD" : "Cinema View"}</span>
            </button>
          </div>
        </div>

        {/* Live Video Container: Uncropped True 16:9 Frame on Mobile, Full-Bleed Viewfinder on Desktop */}
        <div
          onClick={() => cinemaMode && setCinemaMode(false)}
          className={`relative aspect-video w-full lg:aspect-auto lg:absolute lg:inset-0 z-0 overflow-hidden bg-black ${
            cinemaMode ? "cursor-pointer" : ""
          }`}
        >
          <video
            ref={videoRef}
            src="/videos/Showreel for hero section.mp4"
            poster="/images/posters/showreel-poster.jpg"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            className={`w-full h-full object-contain lg:object-cover object-center transition-opacity duration-500 ${
              cinemaMode ? "opacity-100" : "opacity-100 lg:opacity-80"
            }`}
          />

          {/* Mobile Quick Play/Pause & Audio Overlay Controls inside the 16:9 Video Corner */}
          <div className="flex lg:hidden absolute bottom-2.5 right-2.5 z-20 items-center gap-1.5">
            <button
              onClick={togglePlay}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-lowest/85 backdrop-blur-md text-text-primary font-telemetry-sm text-[10px] uppercase border border-border-hairline"
            >
              <span className="material-symbols-outlined text-chroma-cyan text-[14px]">
                {isPlaying ? "pause" : "play_arrow"}
              </span>
              <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
            </button>
            <button
              onClick={toggleMute}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-lowest/85 backdrop-blur-md text-text-primary font-telemetry-sm text-[10px] uppercase border border-border-hairline"
            >
              <span className="material-symbols-outlined text-anamorphic-amber text-[14px]">
                {isMuted ? "volume_off" : "volume_up"}
              </span>
              <span>{isMuted ? "MUTED" : "AUDIO"}</span>
            </button>
          </div>
        </div>

        {/* Anamorphic Vignette Scrim & Dynamic Overlays (Desktop Only so Mobile 16:9 Video stays 100% clear) */}
        <div
          className={`
            hidden lg:block absolute inset-0 z-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-surface-container-lowest/80 pointer-events-none transition-opacity duration-500
            ${cinemaMode ? "opacity-20" : "opacity-100"}
          `}
        />
        <div
          className={`
            hidden lg:block absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(14,14,16,0.85)_100%)] pointer-events-none transition-opacity duration-500
            ${cinemaMode ? "opacity-15" : "opacity-100"}
          `}
        />

        {/* ARRI Safe Action / Safe Title Box (Desktop Only) */}
        <div className="hidden lg:block absolute inset-14 pointer-events-none z-10">
          <span className="absolute top-0 left-0 w-3 h-0.5 bg-text-muted/40"></span>
          <span className="absolute top-0 left-0 w-0.5 h-3 bg-text-muted/40"></span>
          <span className="absolute top-0 right-0 w-3 h-0.5 bg-text-muted/40"></span>
          <span className="absolute top-0 right-0 w-0.5 h-3 bg-text-muted/40"></span>
          <span className="absolute bottom-0 left-0 w-3 h-0.5 bg-text-muted/40"></span>
          <span className="absolute bottom-0 left-0 w-0.5 h-3 bg-text-muted/40"></span>
          <span className="absolute bottom-0 right-0 w-3 h-0.5 bg-text-muted/40"></span>
          <span className="absolute bottom-0 right-0 w-0.5 h-3 bg-text-muted/40"></span>

          {!cinemaMode && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-30 pointer-events-none">
              <span className="w-8 h-px bg-text-primary"></span>
              <span className="h-8 w-px bg-text-primary absolute"></span>
            </div>
          )}
        </div>

        {/* CENTER EDITORIAL HERO DISPLAY (Below 16:9 video on Mobile, Overlay on Desktop) */}
        <div
          className={`relative z-20 flex flex-col max-w-4xl my-auto p-4 sm:p-0 sm:py-3 transition-all duration-500 ${
            cinemaMode
              ? "lg:opacity-0 lg:pointer-events-none lg:translate-y-2"
              : "opacity-100"
          }`}
        >
          {/* Eyebrow badge */}
          <div className="flex items-center gap-1.5 font-telemetry-sm text-[10px] sm:text-telemetry-sm uppercase tracking-wider sm:tracking-widest text-anamorphic-amber mb-2">
            <span className="material-symbols-outlined text-anamorphic-amber text-[14px] shrink-0">
              videocam
            </span>
            <span className="truncate sm:whitespace-normal">
              DULSHAN BANDARA // VFX · COMMERCIAL DOP · EDITOR &amp; COLORIST
            </span>
          </div>

          <h1 className="font-display text-[1.65rem] sm:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.08] tracking-tight font-extrabold uppercase drop-shadow-md break-normal">
            <span className="block text-text-primary">FULL-PIPELINE</span>
            <span className="block bg-gradient-to-r from-anamorphic-amber via-primary to-chroma-cyan bg-clip-text text-transparent">
              COMMERCIAL FILMMAKING
            </span>
            <span className="block text-text-primary">&amp; BROADCAST VFX</span>
          </h1>

          <p className="font-body-md text-xs sm:text-sm lg:text-base max-w-xl text-on-surface-variant leading-relaxed mt-2.5 mb-4 sm:mb-6">
            From on-set cinematography and DaVinci color grading to Blender 3D, precision compositing, and AI-driven commercial workflows.
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-2 sm:mb-6">
            <button
              onClick={toggleCinemaMode}
              className="hidden lg:inline-flex group items-center gap-space-xs px-space-lg py-3 bg-anamorphic-amber hover:bg-text-primary text-surface-container-lowest font-telemetry-lg uppercase transition-all duration-150 cursor-pointer"
            >
              <span
                className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_arrow
              </span>
              <span>Watch 93s Showreel [Unobstructed]</span>
            </button>

            <button
              onClick={togglePlay}
              className="hidden lg:inline-flex items-center gap-space-xs px-space-sm py-3 bg-surface-elevated/80 hover:bg-surface-panel backdrop-blur-md text-text-primary font-telemetry-sm uppercase transition-colors border border-border-hairline cursor-pointer"
              title={isPlaying ? "Pause background showreel" : "Play background showreel"}
            >
              <span className="material-symbols-outlined text-chroma-cyan text-[18px]">
                {isPlaying ? "pause" : "play_arrow"}
              </span>
              <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
            </button>

            <button
              onClick={toggleMute}
              className="hidden lg:inline-flex items-center gap-space-xs px-space-sm py-3 bg-surface-elevated/80 hover:bg-surface-panel backdrop-blur-md text-text-primary font-telemetry-sm uppercase transition-colors border border-border-hairline cursor-pointer"
              title={isMuted ? "Unmute audio" : "Mute audio"}
            >
              <span className="material-symbols-outlined text-anamorphic-amber text-[18px]">
                {isMuted ? "volume_off" : "volume_up"}
              </span>
              <span>{isMuted ? "MUTED" : "AUDIO ON"}</span>
            </button>

            <a
              href="#flagships"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-2.5 sm:py-3 bg-anamorphic-amber lg:bg-surface-elevated/80 hover:bg-surface-panel backdrop-blur-md text-surface-container-lowest lg:text-text-primary font-telemetry-lg uppercase transition-colors border border-anamorphic-amber lg:border-border-hairline font-bold"
            >
              <span className="material-symbols-outlined text-surface-container-lowest lg:text-chroma-cyan text-[18px]">
                account_tree
              </span>
              <span>Explore Case Studies</span>
            </a>
          </div>
        </div>

        {/* BOTTOM TIMELINE SCRUBBER & ACTIVE CHAPTER CONTROLS */}
        <div className="relative z-20 w-full flex flex-col gap-space-xs bg-surface-elevated/90 backdrop-blur-md p-3 sm:p-space-sm border-t sm:border border-border-hairline sm:mt-4">
          <div className="flex items-center justify-between font-telemetry-sm text-[10px] uppercase text-text-muted px-1">
            <span className="truncate">
              CHAPTER:{" "}
              <strong className="text-anamorphic-amber">
                {chapters[activeChapterIndex]?.description}
              </strong>
            </span>
            <span className="hidden sm:inline text-chroma-cyan shrink-0 ml-2">
              CLICK OR DRAG TIMELINE TO SCRUB
            </span>
          </div>

          {/* Interactive Progress Scrubber Bar with Expanded Hit Area */}
          <div
            ref={scrubberTrackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="relative w-full py-2 cursor-pointer group select-none touch-none"
            id="scrubberTrack"
            title="Click or drag to scrub showreel"
          >
            <div className="relative w-full h-2 bg-surface-container overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-anamorphic-amber to-chroma-cyan transition-[width] duration-75"
                style={{ width: progressPct }}
                id="scrubberFill"
              />
              {/* Time indicator markers at chapter timestamps */}
              <span className="absolute top-0 left-[11%] h-full w-0.5 bg-text-primary/40 pointer-events-none" />
              <span className="absolute top-0 left-[18%] h-full w-0.5 bg-text-primary/40 pointer-events-none" />
              <span className="absolute top-0 left-[24%] h-full w-0.5 bg-text-primary/40 pointer-events-none" />
              <span className="absolute top-0 left-[34%] h-full w-0.5 bg-text-primary/40 pointer-events-none" />
              <span className="absolute top-0 left-[52%] h-full w-0.5 bg-text-primary/40 pointer-events-none" />
            </div>
          </div>

          {/* 6 Interactive Chapter Pills */}
          <div
            className="w-full flex items-center justify-between gap-space-xs overflow-x-auto py-1 no-scrollbar"
            id="chapterPills"
          >
            {chapters.map((chapter, idx) => {
              const isActive = activeChapterIndex === idx;
              return (
                <button
                  key={chapter.timeFormatted}
                  onClick={() => seekToChapter(idx)}
                  className={`chapter-btn shrink-0 px-2 py-1 font-telemetry-sm text-[10px] uppercase transition-colors border cursor-pointer ${
                    isActive
                      ? "bg-surface-panel text-anamorphic-amber border-border-active"
                      : "text-text-muted hover:text-text-primary hover:bg-surface-panel border-transparent"
                  }`}
                >
                  {chapter.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CLIENT & AGENCY LOGO MATRIX */}
      <div className="w-full bg-surface-elevated py-space-md px-space-md overflow-hidden flex flex-col gap-space-xs border border-border-hairline">
        <div className="flex items-center justify-between font-telemetry-sm uppercase text-text-muted px-space-sm mb-1">
          <span className="text-chroma-cyan">
            {"// PREMIER COMMERCIAL CLIENTS & AGENCIES (16 VERIFIED CREDITS)"}
          </span>
          <span className="hidden sm:inline">
            BROADCAST NETWORKS &amp; NATIONAL RELEASES
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-space-xs pt-space-xs text-center font-telemetry-sm uppercase text-text-primary">
          {clientList.map((client) => (
            <div
              key={client.name}
              className="p-space-sm bg-surface-panel hover:bg-surface-bright transition-colors flex items-center justify-center font-bold tracking-widest text-text-primary h-14 border border-border-hairline/40 group"
              title={client.name}
            >
              {client.logo ? (
                <div className="relative h-7 w-24 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={96}
                    height={28}
                    className="max-h-7 w-auto object-contain brightness-125 filter grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
              ) : (
                <span className="text-[11px] group-hover:text-anamorphic-amber transition-colors">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
