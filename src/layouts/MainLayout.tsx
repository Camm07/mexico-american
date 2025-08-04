import { type ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // <-- Agrega esta línea

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra de navegación principal */}
      <Navbar />

      {/* Contenido dinámico */}
      <main className="flex-1">{children}</main>

      {/* Footer al final */}
      <Footer />   {/* <-- Aquí va tu pie de página */}
    </div>
  );
}
