// MainLayout.tsx
import { type ReactNode } from 'react';
import Navbar from '../components/Navbar';

/**
 * Layout general que envuelve el contenido de todas las páginas.
 * Aquí se puede agregar el navbar, footer, y otros elementos persistentes.
 * 
 * @param children Elementos internos de cada página.
 */
export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra de navegación principal */}
      <Navbar />

      {/* Contenido dinámico */}
      <main className="flex-1">{children}</main>

      {/* Aquí podría ir un <Footer /> más adelante */}
    </div>
  );
}
