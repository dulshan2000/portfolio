export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 text-center text-sm text-gray-600">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Dulshan Bandara. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed for a cinematic experience. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
