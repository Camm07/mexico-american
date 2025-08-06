import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const linkClass = `
    px-2 py-1 rounded-lg relative font-title font-semibold text-background
    transition-all duration-200
    before:content-[''] before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2.5px] before:bg-accent before:transition-all before:duration-300
    hover:before:w-full hover:text-accent hover:bg-transparent
    focus-visible:text-accent
  `;

  return (
    <header className="bg-primary shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo e Identidad */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 md:h-16 md:w-16 rounded-md shadow-lg bg-white/80 p-1"
          />
          <span className="font-title text-2xl font-black tracking-tight text-background drop-shadow-md">
            Mexico American <span className="text-accent">Transportation</span>
          </span>
        </div>

        {/* Menú de navegación desktop */}
        <nav className="hidden sm:flex gap-6 font-title text-base">
          <Link to="/" className={linkClass}>
            Inicio
          </Link>
          <Link to="/empresa" className={linkClass}>
            Empresa
          </Link>
          <a href="#servicios" className={linkClass}>
            Servicios
          </a>
          <a href="#contacto" className={linkClass}>
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
          <Link
            to="/"
            className="py-2 px-3 rounded-lg hover:bg-accent/90 hover:text-white transition"
            onClick={() => setMenuAbierto(false)}
          >
            Inicio
          </Link>
          <Link
            to="/empresa"
            className="py-2 px-3 rounded-lg hover:bg-accent/90 hover:text-white transition"
            onClick={() => setMenuAbierto(false)}
          >
            Empresa
          </Link>
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
