import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-elevated border-t border-border-hairline py-space-xl">
      <div className="w-full px-space-md lg:px-margin-desktop flex flex-col gap-space-lg">
        {/* Telemetry Status Grid (6 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-space-md py-space-md bg-surface-container-lowest border border-border-hairline px-space-md font-telemetry-sm text-telemetry-sm uppercase">
          <div className="flex flex-col gap-0.5">
            <span className="text-text-muted">LOCATION</span>
            <span className="text-chroma-cyan font-semibold">COLOMBO, LK</span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-text-muted">PIPELINE</span>
            <span className="text-text-primary font-semibold">
              BLENDER • AFTER EFFECTS • RESOLVE
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-text-muted">VIEWPORT RATIO</span>
            <span className="text-anamorphic-amber font-semibold">
              2.39:1 &amp; 9:16 NATIVE
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-text-muted">STATUS</span>
            <span className="text-rec-crimson font-semibold">AVAILABLE</span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-text-muted">CODEC PIPELINE</span>
            <span className="text-text-primary font-semibold">PRORES / H.264 / H.265</span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-text-muted">COLOR SUITE</span>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-2.5 h-2.5 bg-[#FF0055] inline-block"></span>
              <span className="w-2.5 h-2.5 bg-[#FF9900] inline-block"></span>
              <span className="w-2.5 h-2.5 bg-[#00FF66] inline-block"></span>
              <span className="w-2.5 h-2.5 bg-[#00CCFF] inline-block"></span>
              <span className="w-2.5 h-2.5 bg-[#7700FF] inline-block"></span>
              <span className="text-text-muted ml-1 text-[10px]">DaVinci (Rec.709)</span>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Social Links */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md pt-space-sm font-telemetry-sm text-telemetry-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-sm text-text-muted">
            <span>© 2026 DULSHAN BANDARA. ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline text-border-hairline">/</span>
            <a
              className="text-anamorphic-amber hover:underline"
              href="mailto:dulshanhareendra@gmail.com"
            >
              dulshanhareendra@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-space-md uppercase font-telemetry-sm text-telemetry-sm tracking-widest">
            <a
              className="text-text-muted hover:text-chroma-cyan transition-colors"
              href="https://www.linkedin.com/in/dulshan-bandara"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="text-border-hairline">/</span>
            <a
              className="text-text-muted hover:text-chroma-cyan transition-colors"
              href="https://www.behance.net/dulshanhareend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </a>
            <span className="text-border-hairline">/</span>
            <a
              className="text-text-muted hover:text-chroma-cyan transition-colors"
              href="https://www.instagram.com/dulshan_bandara"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
