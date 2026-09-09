import { MapPin, Menu, Sprout, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
            <Sprout size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">SmartProcure</h1>
            <p className="text-xs text-slate-500">Smarter crop procurement</p>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-slate-700 hover:text-green-600"
          >
            Home
          </a>

          <a
            href="#centres"
            className="text-sm font-medium text-slate-700 hover:text-green-600"
          >
            Find Centre
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-700 hover:text-green-600"
          >
            How It Works
          </a>

          <button className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <MapPin size={16} />
            Location
          </button>

          <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700">
            Login
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a
              href="#home"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Home
            </a>

            <a
              href="#centres"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Find Centre
            </a>

            <a
              href="#how-it-works"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              How It Works
            </a>

            <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white">
              Login
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
