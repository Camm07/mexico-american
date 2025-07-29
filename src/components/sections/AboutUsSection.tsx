// src/components/sections/AboutUsSection.tsx
import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-stretch md:items-center bg-white py-10 md:py-0 px-4 md:px-0 overflow-hidden">
      {/* Imagen a la izquierda (desktop) */}
      <div className="md:w-1/2 w-full h-64 md:h-auto flex-shrink-0">
        <img
          src="/about-us-trucks.jpg" // En public
          alt="Camiones Mexico American Transportation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Contenido a la derecha */}
      <div className="md:w-1/2 w-full flex flex-col justify-center p-6 md:p-12 bg-white/95">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Acerca de Nosotros</h2>
        <p className="text-sm sm:text-base text-gray-700 mb-2">
          En Mexico American Transportation nos especializamos en el cruce fronterizo y arrastre de carga federal con más de 20 años de experiencia en el sector.
        </p>
        <p className="text-sm sm:text-base text-gray-700 mb-2">
          Contamos con un equipo altamente capacitado y comprometido con la seguridad, puntualidad y cumplimiento normativo.
        </p>
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Operamos con estándares internacionales gracias a nuestras certificaciones y alianzas estratégicas.
        </p>
        <div className="bg-yellow-200 text-sm font-semibold px-4 py-2 rounded-md inline-block text-gray-800 mt-2">
          2 Décadas De Experiencia
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
