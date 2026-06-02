import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutContactBento from "@/components/AboutContactBento";
import ProjectGrid from "@/components/ProjectGrid";
import ClientLogos from "@/components/ClientLogos";
import ContactBento from "@/components/ContactBento";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutContactBento />
        <ProjectGrid />
        <ClientLogos />
        <ContactBento />
      </main>
      <Footer />
    </div>
  );
}
