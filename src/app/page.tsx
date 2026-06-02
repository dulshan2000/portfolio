import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutContactBento from "@/components/AboutContactBento";
import ProjectGrid from "@/components/ProjectGrid";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <ClientLogos />
        <AboutContactBento />
      </main>
      <Footer />
    </div>
  );
}
