// Navbar.tsx
import { useState } from 'react';

/**
 * Componente de navegación principal.
 * Personaliza el color o los enlaces aquí.
 */
export default function Navbar() {
  // Estado para gestionar el menú responsive (en móviles)
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="bg-[#801818] text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo e Identidad */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">Mexico American Transportation</span>
        </div>

        {/* Menú de navegación */}
        <nav className="space-x-4 hidden sm:block">
          <a href="#inicio" className="hover:underline">Inicio</a>
          <a href="#servicios" className="hover:underline">Servicios</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
        </nav>

        {/* Menú hamburguesa para móviles */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="sm:hidden text-xl"
        >
          ☰
        </button>
      </div>

      {/* Menú colapsable solo en móvil */}
      {menuAbierto && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          <a href="#inicio" className="block">Inicio</a>
          <a href="#servicios" className="block">Servicios</a>
          <a href="#contacto" className="block">Contacto</a>
        </div>
      )}
    </header>
  );
}
