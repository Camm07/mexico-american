// src/components/sections/CertificationsSection.tsx
import React from "react";

import oea from '../../assets/certifications/oea.png';
import fast from '../../assets/certifications/fast.png';
import ctpat from '../../assets/certifications/ctpat.png';
import dot from '../../assets/certifications/dot.png';

const LOGOS = [
  { src: oea, alt: "OEA" },
  { src: fast, alt: "FAST" },
  { src: ctpat, alt: "CTPAT" },
  { src: dot, alt: "DOT" },
];

export default function CertificationsSection() {
  return (
    <section className="bg-background py-16 px-4 md:px-10">
      {/* Fila horizontal de logos */}
      <div className="max-w-4xl mx-auto flex flex-row flex-wrap justify-center gap-6 md:gap-10 mb-10">
        {LOGOS.map(({ src, alt }) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            className="w-28 h-14 bg-white rounded-lg shadow-md border-2 border-accent/60 p-2 object-contain transition-transform duration-200 hover:scale-110 hover:shadow-xl"
            title={alt}
          />
        ))}
      </div>

      {/* Contenido principal: texto a la izquierda, imagen a la derecha */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-20">
        {/* Columna izquierda: Texto */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-title font-extrabold text-primary mb-5 tracking-tight drop-shadow">
            Certificaciones que respaldan nuestro compromiso
          </h2>
          <p className="mb-3 text-lg text-secondary font-sans">
            En <span className="font-title text-accent font-bold">Mexico American Transportation</span> trabajamos bajo estrictas normas de seguridad y cumplimiento internacional.
          </p>
          <p className="mb-3 text-lg text-secondary font-sans">
            Nuestras certificaciones como <span className="font-title font-bold text-primary">OEA, FAST, CTPAT</span> y cumplimiento con la <span className="font-title font-bold text-primary">DOT</span> nos permiten operar con confianza en cruces fronterizos y rutas federales.
          </p>
          <p className="text-lg text-secondary font-sans">
            Estas acreditaciones garantizan a nuestros clientes un servicio ágil, auditado y seguro en cada envío.
          </p>
        </div>
        {/* Columna derecha: Imagen con animación */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="/about-us-trucks.jpg"
            alt="Camiones certificados"
            className="rounded-2xl shadow-2xl object-cover w-full max-w-md h-[260px] border-4 border-white
              transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-accent"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
