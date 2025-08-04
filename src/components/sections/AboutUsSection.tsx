// src/components/sections/AboutUsSection.tsx
import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center bg-background py-14 md:py-0 px-4 md:px-0 overflow-hidden">
      {/* Imagen a la izquierda (desktop) */}
      <div className="md:w-1/2 w-full min-h-[320px] h-full flex-shrink-0 flex items-center justify-center">
        <img
          src="/about-us-trucks.jpg"
          alt="Camiones Mexico American Transportation"
          className="w-full h-full object-cover shadow-2xl rounded-2xl md:rounded-r-none"
          loading="lazy"
        />
      </div>
      {/* Contenido a la derecha */}
      <div className="md:w-1/2 w-full flex flex-col justify-center p-8 md:p-14 bg-white/95 rounded-b-2xl md:rounded-b-none md:rounded-l-2xl shadow-xl border-t-4 border-accent min-h-[320px]">
        <h2 className="text-3xl sm:text-4xl font-title font-extrabold text-primary mb-4 tracking-tight drop-shadow">
          Acerca de Nosotros
        </h2>
        <p className="text-base sm:text-lg text-secondary mb-2 font-sans text-justify">
          En <span className="font-title text-accent font-bold">Mexico American Transportation</span> nos especializamos en el cruce fronterizo y arrastre de carga federal con más de 20 años de experiencia en el sector.
        </p>
        <p className="text-base sm:text-lg text-secondary mb-2 font-sans text-justify">
          Contamos con un equipo altamente capacitado y comprometido con la seguridad, puntualidad y cumplimiento normativo.
        </p>
        <p className="text-base sm:text-lg text-secondary mb-5 font-sans text-justify">
          Operamos con estándares internacionales gracias a nuestras certificaciones y alianzas estratégicas.
        </p>
        <div className="bg-accent/10 text-accent font-title text-base px-6 py-2 rounded-lg inline-block shadow font-bold tracking-wide border border-accent/20">
          🚚 2 Décadas De Experiencia
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
