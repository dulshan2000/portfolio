export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 text-center text-sm text-gray-600">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4">
        <p>© {new Date().getFullYear()} Dulshan Bandara. All rights reserved.</p>
      </div>
    </footer>
  );
}
