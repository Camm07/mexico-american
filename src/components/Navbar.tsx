import { useState } from 'react';

/**
 * Componente de navegación principal.
 * Con paleta y tipografía corporativa.
 */
export default function Navbar() {
  // Estado para el menú móvil
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="bg-primary shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo e Identidad */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-md shadow-lg bg-white/80 p-1" />
          <span className="font-title text-2xl font-black tracking-tight text-background drop-shadow-md">
            Mexico American <span className="text-accent">Transportation</span>
          </span>
        </div>

        {/* Menú de navegación desktop */}
        <nav className="hidden sm:flex gap-6 font-title text-base">
          <a
            href="#inicio"
            className="px-2 py-1 rounded-lg hover:bg-accent/90 hover:text-white transition-all duration-200"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="px-2 py-1 rounded-lg hover:bg-accent/90 hover:text-white transition-all duration-200"
          >
            Servicios
          </a>
          <a
            href="#contacto"
            className="px-2 py-1 rounded-lg hover:bg-accent/90 hover:text-white transition-all duration-200"
          >
            Contacto
          </a>
        </nav>

        {/* Botón hamburguesa para móvil */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="sm:hidden text-3xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* Menú móvil colapsable */}
      {menuAbierto && (
        <nav className="sm:hidden px-4 pb-4 flex flex-col gap-2 font-title text-base bg-primary">
          <a
            href="#inicio"
            className="py-2 px-3 rounded-lg hover:bg-accent/90 hover:text-white transition"
            onClick={() => setMenuAbierto(false)}
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="py-2 px-3 rounded-lg hover:bg-accent/90 hover:text-white transition"
            onClick={() => setMenuAbierto(false)}
          >
            Servicios
          </a>
          <a
            href="#contacto"
            className="py-2 px-3 rounded-lg hover:bg-accent/90 hover:text-white transition"
            onClick={() => setMenuAbierto(false)}
          >
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
}
