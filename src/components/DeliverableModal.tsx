"use client";

import { useEffect, useState } from "react";
import {
  Deliverable,
  deliverables,
  getDriveFilePreviewUrl,
  getDriveFileViewUrl,
  googleDriveVaultUrl,
} from "@/data/deliverables";

interface DeliverableModalProps {
  deliverable: Deliverable | null;
  onClose: () => void;
  onSelectDeliverable?: (item: Deliverable) => void;
}

export default function DeliverableModal({
  deliverable,
  onClose,
  onSelectDeliverable,
}: DeliverableModalProps) {
  const [selectedClipState, setSelectedClipState] = useState<{
    deliverableId?: string;
    index: number;
  }>({ index: 0 });

  const selectedClipIndex =
    selectedClipState.deliverableId === deliverable?.id
      ? selectedClipState.index
      : 0;

  const currentIndex = deliverable
    ? deliverables.findIndex((d) => d.id === deliverable.id)
    : -1;

  const prevDeliverable =
    currentIndex > 0
      ? deliverables[currentIndex - 1]
      : deliverables[deliverables.length - 1];

  const nextDeliverable =
    currentIndex >= 0 && currentIndex < deliverables.length - 1
      ? deliverables[currentIndex + 1]
      : deliverables[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (
        e.key === "ArrowLeft" &&
        prevDeliverable &&
        onSelectDeliverable
      ) {
        onSelectDeliverable(prevDeliverable);
      } else if (
        e.key === "ArrowRight" &&
        nextDeliverable &&
        onSelectDeliverable
      ) {
        onSelectDeliverable(nextDeliverable);
      }
    };
    if (deliverable) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [
    deliverable,
    onClose,
    onSelectDeliverable,
    prevDeliverable,
    nextDeliverable,
  ]);

  if (!deliverable) return null;

  const clips = deliverable.driveClips;
  const activeFileId =
    clips && clips.length > 0
      ? clips[selectedClipIndex]?.fileId || deliverable.driveFileId
      : deliverable.driveFileId;

  const activeFileViewUrl = activeFileId
    ? getDriveFileViewUrl(activeFileId)
    : deliverable.driveUrl || googleDriveVaultUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-deliverable-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
    >
      <div
        className="relative w-full max-w-4xl bg-surface-elevated border border-border-active shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar HUD */}
        <div className="flex items-center justify-between p-space-sm bg-surface-panel border-b border-border-hairline font-telemetry-sm uppercase">
          <div className="flex items-center gap-space-sm">
            <span className="text-anamorphic-amber font-bold">
              {deliverable.tc}
            </span>
            <span className="text-text-muted">/</span>
            <span className="text-chroma-cyan font-semibold">
              {deliverable.format}
            </span>
            <span className="text-text-muted">/</span>
            <span className="text-text-primary uppercase">
              {deliverable.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {onSelectDeliverable && (
              <>
                <button
                  onClick={() => onSelectDeliverable(prevDeliverable)}
                  className="px-2 py-1 bg-surface-elevated hover:bg-surface-bright text-text-muted hover:text-text-primary border border-border-hairline text-[10px] transition-colors cursor-pointer"
                  title={`Previous: ${prevDeliverable.title}`}
                >
                  ← PREV
                </button>
                <button
                  onClick={() => onSelectDeliverable(nextDeliverable)}
                  className="px-2 py-1 bg-surface-elevated hover:bg-surface-bright text-text-muted hover:text-text-primary border border-border-hairline text-[10px] transition-colors cursor-pointer"
                  title={`Next: ${nextDeliverable.title}`}
                >
                  NEXT →
                </button>
              </>
            )}

            <button
              onClick={onClose}
              className="p-1 text-text-muted hover:text-text-primary transition-colors hover:bg-surface-elevated cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[18px]">
                close
              </span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-space-md lg:p-space-lg flex flex-col gap-space-md">
          {/* Multi-Clip Selector Strip (if deliverable has multiple Drive videos) */}
          {clips && clips.length > 1 && (
            <div className="flex flex-wrap items-center gap-1.5 bg-surface-panel p-2 border border-border-hairline font-telemetry-sm text-[10px] uppercase">
              <span className="text-text-muted px-1.5 font-semibold">
                SELECT CLIP ({clips.length}):
              </span>
              {clips.map((clip, idx) => {
                const isSelected = selectedClipIndex === idx;
                return (
                  <button
                    key={clip.fileId}
                    onClick={() =>
                      setSelectedClipState({
                        deliverableId: deliverable.id,
                        index: idx,
                      })
                    }
                    className={`px-2.5 py-1 transition-colors border cursor-pointer ${
                      isSelected
                        ? "bg-anamorphic-amber text-surface-container-lowest font-bold border-anamorphic-amber"
                        : "bg-surface-elevated text-text-muted hover:text-text-primary border-border-hairline"
                    }`}
                  >
                    [{idx + 1}. {clip.label}]
                  </button>
                );
              })}
            </div>
          )}

          {/* Embedded Google Drive Direct Video Preview Player */}
          {activeFileId ? (
            <div className="relative w-full bg-black border border-border-hairline overflow-hidden flex flex-col">
              <div className="relative w-full aspect-video max-h-[420px] bg-black">
                <iframe
                  key={activeFileId}
                  src={getDriveFilePreviewUrl(activeFileId)}
                  title={deliverable.title}
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Player Telemetry Status Bar */}
              <div className="w-full bg-surface-panel/95 border-t border-border-hairline px-space-sm py-1.5 flex flex-wrap items-center justify-between gap-2 font-telemetry-sm text-[10px] uppercase">
                <span className="flex items-center gap-1.5 text-chroma-cyan font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-rec-crimson rec-live" />
                  STREAMING DIRECT PREVIEW FROM GOOGLE DRIVE VAULT
                </span>
                <a
                  href={activeFileViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-anamorphic-amber hover:underline flex items-center gap-1 font-bold"
                >
                  <span>OPEN DIRECT VIDEO IN GOOGLE DRIVE</span>
                  <span className="material-symbols-outlined text-[13px]">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          ) : (
            <div className="relative w-full bg-surface-panel border border-border-hairline p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[200px]">
              <span className="material-symbols-outlined text-4xl text-anamorphic-amber">
                folder_open
              </span>
              <div className="font-telemetry-sm uppercase text-text-primary font-bold text-sm">
                Full Broadcast Master In Google Drive Vault
              </div>
              <p className="font-body-sm text-xs text-text-muted max-w-md">
                High-bitrate ProRes 422 HQ / 4444 XQ master cut and full-length commercial deliverables are hosted in the Google Drive repository.
              </p>
              <a
                href={googleDriveVaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-anamorphic-amber hover:bg-white text-surface-container-lowest font-telemetry-sm uppercase font-bold text-xs transition-colors"
              >
                <span>Open Google Drive Folder</span>
                <span className="material-symbols-outlined text-[14px]">
                  arrow_outward
                </span>
              </a>
            </div>
          )}

          {/* Title & Metadata */}
          <div className="flex flex-col gap-1">
            <span className="font-telemetry-sm text-xs text-chroma-cyan uppercase font-semibold">
              {deliverable.client}{" "}
              {deliverable.agency ? `// Agency: ${deliverable.agency}` : ""}
            </span>
            <h3
              id="modal-deliverable-title"
              className="font-headline-md text-2xl text-text-primary uppercase tracking-tight"
            >
              {deliverable.title}
            </h3>
            <p className="font-telemetry-sm text-xs text-anamorphic-amber uppercase">
              SPEC: {deliverable.spec}
            </p>
          </div>

          {/* Role & Toolkit Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm p-space-sm bg-surface-panel border border-border-hairline font-telemetry-sm text-xs uppercase">
            <div>
              <span className="text-text-muted block text-[10px]">ROLE:</span>
              <span className="text-text-primary font-semibold">
                {deliverable.role}
              </span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">TOOLKIT:</span>
              <span className="text-chroma-cyan font-semibold">
                {deliverable.tools.join(" • ")}
              </span>
            </div>
          </div>

          {/* Overview */}
          <div className="flex flex-col gap-1">
            <h4 className="font-telemetry-sm text-xs text-text-muted uppercase font-bold">
              {"// PRODUCTION OVERVIEW"}
            </h4>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              {deliverable.overview}
            </p>
          </div>

          {/* Key Execution Highlights */}
          {deliverable.highlights && deliverable.highlights.length > 0 && (
            <div className="flex flex-col gap-2">
              <h4 className="font-telemetry-sm text-xs text-text-muted uppercase font-bold">
                {"// TECHNICAL EXECUTION BREAKDOWN"}
              </h4>
              <ul className="flex flex-col gap-2">
                {deliverable.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 font-body-sm text-xs text-text-primary bg-surface-panel/40 p-2 border-l-2 border-anamorphic-amber"
                  >
                    <span className="text-anamorphic-amber font-mono font-bold">
                      0{idx + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Modal Bottom Actions */}
          <div className="pt-space-sm border-t border-border-hairline flex flex-wrap items-center justify-between gap-space-sm font-telemetry-sm text-xs uppercase">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={`mailto:dulshanhareendra@gmail.com?subject=Inquiry%20Regarding%20${encodeURIComponent(
                  deliverable.title
                )}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface-panel hover:bg-surface-bright text-text-primary border border-border-hairline transition-colors"
              >
                <span className="material-symbols-outlined text-[15px]">
                  mail
                </span>
                <span>Inquire About Project</span>
              </a>

              <a
                href={googleDriveVaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-surface-elevated hover:bg-surface-panel text-text-muted hover:text-text-primary border border-border-hairline transition-colors"
              >
                <span className="material-symbols-outlined text-[15px]">
                  folder_open
                </span>
                <span>Full Archive Folder</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={activeFileViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-anamorphic-amber hover:bg-white text-surface-container-lowest font-bold transition-colors"
              >
                <span>Open File In Google Drive</span>
                <span className="material-symbols-outlined text-[15px]">
                  open_in_new
                </span>
              </a>

              <button
                onClick={onClose}
                className="px-4 py-2 bg-surface-container hover:bg-surface-bright text-text-primary border border-border-hairline transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
