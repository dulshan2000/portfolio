"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlagshipsBento from "@/components/FlagshipsBento";
import SoloDirectionTriptych from "@/components/SoloDirectionTriptych";
import BroadcastVault from "@/components/BroadcastVault";
import PipelineTerminal from "@/components/PipelineTerminal";
import Footer from "@/components/Footer";
import DeliverableModal from "@/components/DeliverableModal";
import { Deliverable } from "@/data/deliverables";

export default function Home() {
  const [selectedDeliverable, setSelectedDeliverable] = useState<Deliverable | null>(null);

  return (
    <div className="min-h-screen bg-surface-container-lowest font-body-md text-on-surface selection:bg-anamorphic-amber selection:text-surface-container-lowest">
      <Navbar />

      <main className="w-full pt-16 bg-surface-container-lowest min-h-screen">
        <div className="flex flex-col w-full">
          {/* SECTION 01: 21:9 Cinema Viewfinder Hero & Interactive Showreel Scrubber */}
          <Hero />

          {/* SECTION 02: Flagship VFX & 3D Case Studies Bento Grid */}
          <FlagshipsBento
            onSelectDeliverable={(item) => setSelectedDeliverable(item)}
          />

          {/* SECTION 03: Solo Commercial Direction, DOP & Color (9:16 Triptych Stage) */}
          <SoloDirectionTriptych
            onSelectDeliverable={(item) => setSelectedDeliverable(item)}
          />

          {/* SECTION 04: The Broadcast Vault (22 Master Deliverables Interactive Archive) */}
          <BroadcastVault
            onSelectDeliverable={(item) => setSelectedDeliverable(item)}
          />

          {/* SECTION 05: Pipeline Node Graph, Credentials Strip & Contact Terminal */}
          <PipelineTerminal />
        </div>
      </main>

      <Footer />

      {/* Global Deliverable & Case Study Breakdown Modal */}
      <DeliverableModal
        deliverable={selectedDeliverable}
        onClose={() => setSelectedDeliverable(null)}
        onSelectDeliverable={(item) => setSelectedDeliverable(item)}
      />
    </div>
  );
}
