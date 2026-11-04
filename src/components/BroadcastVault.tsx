"use client";

import { useState } from "react";
import {
  Deliverable,
  DeliverableCategory,
  deliverables,
  googleDriveVaultUrl,
} from "@/data/deliverables";

interface BroadcastVaultProps {
  onSelectDeliverable?: (item: Deliverable) => void;
}

interface FilterTab {
  id: "all" | DeliverableCategory;
  label: string;
}

const filterTabs: FilterTab[] = [
  { id: "all", label: "[All Deliverables (22)]" },
  { id: "tvc", label: "[National TVCs (8)]" },
  { id: "9-16", label: "[9:16 Commercials & Direction (6)]" },
  { id: "realestate", label: "[Real Estate & 3D End-Cards (5)]" },
  { id: "ident", label: "[Logo Idents (3)]" },
];

export default function BroadcastVault({ onSelectDeliverable }: BroadcastVaultProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | DeliverableCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDeliverables = deliverables.filter((item) => {
    const matchesCategory = activeFilter === "all" || item.category === activeFilter;
    if (!matchesCategory) return false;
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.client.toLowerCase().includes(query) ||
      item.tools.some((t) => t.toLowerCase().includes(query)) ||
      item.spec.toLowerCase().includes(query) ||
      item.role.toLowerCase().includes(query)
    );
  });

  const handleRowKeyDown = (e: React.KeyboardEvent, item: Deliverable) => {
    if ((e.key === "Enter" || e.key === " ") && onSelectDeliverable) {
      e.preventDefault();
      onSelectDeliverable(item);
    }
  };

  return (
    <section
      id="broadcast-vault"
      className="relative w-full px-space-md lg:px-margin-desktop py-space-xl flex flex-col gap-space-lg"
    >
      {/* Section Title & Telemetry Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span className="font-telemetry-sm uppercase tracking-widest text-chroma-cyan">
            [04 // COMMERCIAL ARCHIVE] COMPLETE CATALOGUE
          </span>
          <h2 className="font-headline-lg text-text-primary uppercase tracking-tight">
            THE BROADCAST VAULT (22 DELIVERABLES)
          </h2>
          <p className="font-body-md text-text-muted">
            Interactive master deliverables index. Click any row to stream the video preview directly on-site or open the original master file in the Google Drive Vault.
          </p>
        </div>

        {/* Quick Action Cluster */}
        <div className="flex flex-wrap items-center gap-space-xs shrink-0">
          <a
            href={googleDriveVaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-space-xs px-space-md py-2.5 bg-surface-panel hover:bg-surface-bright text-text-primary font-telemetry-sm uppercase transition-colors border border-border-hairline group"
          >
            <span className="material-symbols-outlined text-[16px] text-anamorphic-amber group-hover:scale-110 transition-transform">
              folder_open
            </span>
            <span>Google Drive Vault</span>
          </a>

          <a
            href="mailto:dulshanhareendra@gmail.com?subject=ProRes%20422%20HQ%20Master%20Request"
            className="inline-flex items-center gap-space-xs px-space-md py-2.5 bg-surface-elevated hover:bg-surface-panel text-chroma-cyan font-telemetry-sm uppercase transition-colors border border-border-hairline"
          >
            <span className="material-symbols-outlined text-[16px]">
              cloud_download
            </span>
            <span>Request Master ProRes 422 HQ</span>
          </a>
        </div>
      </div>

      {/* Filterable Timecode Tabs & Search Field */}
      <div className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-sm">
        {/* Tabs */}
        <div className="flex items-center gap-space-xs overflow-x-auto pb-1 font-telemetry-sm uppercase no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`vault-tab-btn shrink-0 px-space-md py-2 transition-colors border cursor-pointer ${
                  isActive
                    ? "bg-anamorphic-amber text-surface-container-lowest font-bold border-anamorphic-amber"
                    : "bg-surface-elevated text-text-muted hover:text-text-primary hover:bg-surface-panel border-border-hairline"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Telemetry Filter Search */}
        <div className="relative min-w-[260px]">
          <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-text-muted pointer-events-none">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="FILTER BY CLIENT / TOOL..."
            aria-label="Filter deliverables by client, title, role, or tool"
            className="w-full bg-surface-elevated border border-border-hairline pl-8 pr-8 py-2 font-telemetry-sm text-xs text-text-primary placeholder:text-text-muted focus:border-anamorphic-amber focus:outline-none uppercase"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary cursor-pointer"
              aria-label="Clear search query"
            >
              <span className="material-symbols-outlined text-[15px]">close</span>
            </button>
          )}
        </div>
      </div>

      {/* Telemetry Master Data Table */}
      <div className="w-full bg-surface-elevated border border-border-hairline">
        {filteredDeliverables.length === 0 ? (
          <div className="p-8 text-center text-text-muted uppercase font-telemetry-sm flex flex-col items-center gap-2">
            <span>
              No matching broadcast deliverables found for filter: &quot;{searchQuery}&quot;
            </span>
            <button
              onClick={() => {
                setActiveFilter("all");
                setSearchQuery("");
              }}
              className="px-3 py-1 bg-surface-panel text-anamorphic-amber border border-border-hairline text-xs uppercase cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            {/* DESKTOP 12-COLUMN TABLE (md and up) */}
            <div className="hidden md:flex flex-col font-telemetry-sm">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-space-sm p-space-md bg-surface-panel text-text-muted uppercase font-bold tracking-wider border-b border-border-hairline">
                <div className="col-span-1">#TC</div>
                <div className="col-span-4">PROJECT TITLE &amp; SPEC</div>
                <div className="col-span-2">CLIENT / AGENCY</div>
                <div className="col-span-3">ROLE &amp; TOOLS</div>
                <div className="col-span-1">FORMAT</div>
                <div className="col-span-1 text-right">ACTION</div>
              </div>

              {filteredDeliverables.map((item, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => onSelectDeliverable?.(item)}
                    onKeyDown={(e) => handleRowKeyDown(e, item)}
                    className={`vault-row group grid grid-cols-12 gap-space-sm p-space-md hover:bg-surface-panel transition-colors items-center border-b border-border-hairline/40 cursor-pointer ${
                      isEven ? "bg-surface-elevated/40" : "bg-surface-elevated"
                    }`}
                    data-category={item.category}
                  >
                    <div className="col-span-1 text-text-muted group-hover:text-anamorphic-amber font-semibold flex items-center gap-1.5">
                      <span>{item.tc}</span>
                      <span
                        className="material-symbols-outlined text-[13px] text-chroma-cyan"
                        title="Direct Drive Video Stream Available in Modal"
                      >
                        play_circle
                      </span>
                    </div>

                    <div className="col-span-4 flex flex-col pr-2">
                      <span className="text-text-primary group-hover:text-white font-bold uppercase truncate">
                        {item.title}
                      </span>
                      <span className="text-text-muted text-[10px] truncate">
                        {item.spec}
                      </span>
                    </div>

                    <div className="col-span-2 text-chroma-cyan font-medium uppercase truncate pr-2">
                      {item.client}
                    </div>

                    <div className="col-span-3 flex flex-col pr-2">
                      <span className="text-text-primary uppercase text-[11px] truncate">
                        {item.role}
                      </span>
                      <span className="text-text-muted text-[10px] uppercase truncate">
                        {item.tools.join(" • ")}
                      </span>
                    </div>

                    <div className="col-span-1 text-anamorphic-amber font-semibold truncate">
                      {item.format}
                    </div>

                    <div className="col-span-1 text-right">
                      <span className="inline-block px-space-xs py-1 bg-surface-container group-hover:bg-chroma-cyan group-hover:text-surface-container-lowest text-text-primary transition-colors text-[10px] uppercase border border-border-hairline font-bold">
                        Inspect
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MOBILE COMPACT TELEMETRY CARDS (< md) */}
            <div className="flex md:hidden flex-col divide-y divide-border-hairline/50 font-telemetry-sm">
              {filteredDeliverables.map((item) => (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => onSelectDeliverable?.(item)}
                  onKeyDown={(e) => handleRowKeyDown(e, item)}
                  className="p-space-md bg-surface-elevated active:bg-surface-panel flex flex-col gap-2 cursor-pointer"
                >
                  <div className="flex items-center justify-between text-[11px] uppercase">
                    <div className="flex items-center gap-2">
                      <span className="text-anamorphic-amber font-bold">
                        {item.tc}
                      </span>
                      <span className="text-chroma-cyan font-semibold">
                        {item.client}
                      </span>
                    </div>
                    <span className="px-1.5 py-0.5 bg-surface-panel text-anamorphic-amber border border-border-hairline text-[10px]">
                      {item.format}
                    </span>
                  </div>

                  <div className="text-text-primary font-bold uppercase text-xs leading-snug">
                    {item.title}
                  </div>

                  <div className="text-text-muted text-[10px] leading-relaxed">
                    {item.spec}
                  </div>

                  <div className="flex items-center justify-between pt-1 mt-1 border-t border-border-hairline/40 text-[10px] uppercase">
                    <span className="text-text-muted truncate pr-2">
                      {item.tools.join(" • ")}
                    </span>
                    <span className="shrink-0 px-2 py-1 bg-surface-panel text-chroma-cyan border border-border-hairline font-bold">
                      Inspect →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Table Footer Telemetry Strip */}
      <div className="flex flex-wrap items-center justify-between gap-space-sm text-text-muted font-telemetry-sm uppercase px-1">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-chroma-cyan"></span>
          Displaying {filteredDeliverables.length} of {deliverables.length} cataloged master deliverables
        </span>
        <span className="text-anamorphic-amber">
          ProRes 4444 XQ / 422 HQ / H.264 Multi-Format Delivery
        </span>
      </div>
    </section>
  );
}
