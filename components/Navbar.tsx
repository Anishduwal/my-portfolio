export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur border-b border-gray-800 z-50 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl text-white">Anish Duwal</h1>

        <div className="space-x-6 text-sm">
          <a
            href="#about"
            className="text-white hover:text-blue-400 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
