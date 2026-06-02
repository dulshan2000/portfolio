import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium uppercase tracking-wider text-white">
                {project.category}
              </span>
              <span className="text-primary font-medium">
                {project.client}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
              <div>
                <div className="text-gray-500 uppercase tracking-widest mb-1">Role</div>
                <div className="font-medium">{project.role}</div>
              </div>
              {project.agency && (
                <div>
                  <div className="text-gray-500 uppercase tracking-widest mb-1">Agency</div>
                  <div className="font-medium">{project.agency}</div>
                </div>
              )}
              {project.productionHouse && (
                <div>
                  <div className="text-gray-500 uppercase tracking-widest mb-1">Production</div>
                  <div className="font-medium">{project.productionHouse}</div>
                </div>
              )}
            </div>
          </div>

          {/* Videos */}
          <div className="space-y-8 mb-16">
            {project.videos.map((video, idx) => (
              <div key={idx} className="aspect-video w-full rounded-2xl overflow-hidden bg-card border border-white/5 shadow-2xl">
                <video
                  src={video}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h3 className="text-xl font-display font-bold mb-4 text-primary">The Overview</h3>
              <p className="text-gray-400 leading-relaxed">
                {project.overview}
              </p>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-xl font-display font-bold mb-6 text-primary">The Execution</h3>
              <div className="space-y-6">
                {project.execution.map((item, idx) => {
                  const [title, description] = item.split(": ");
                  return (
                    <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                      <h4 className="font-bold text-white mb-2">{title}</h4>
                      <p className="text-gray-400 leading-relaxed">{description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
