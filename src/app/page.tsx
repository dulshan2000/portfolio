import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectGrid />
        <ClientLogos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
