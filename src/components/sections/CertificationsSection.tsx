// src/components/sections/CertificationsSection.tsx
import React from "react";

const LOGOS = [
  { src: "/certifications/oea.png", alt: "OEA" },
  { src: "/certifications/fast.png", alt: "FAST" },
  { src: "/certifications/ctpat.png", alt: "CTPAT" },
  { src: "/certifications/dot.png", alt: "DOT" },
];

export default function CertificationsSection() {
  return (
    <section className="bg-white py-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Imagen de camiones y logos a la izquierda */}
        <div className="w-full md:w-[50%] flex flex-col items-center">
          <div className="relative w-full">
            <img
              src="/about-us-trucks.jpg"
              alt="Camiones certificados"
              className="rounded-lg shadow-md object-cover w-full max-h-[240px]"
            />
            {/* Logos sobrepuestos, uno bajo otro */}
            <div className="absolute top-3 left-3 flex flex-col gap-3">
              {LOGOS.map(({ src, alt }) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  className="w-28 h-14 bg-white rounded shadow border border-yellow-400 p-1 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
        {/* Texto a la derecha */}
        <div className="w-full md:w-[50%]">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Certificaciones que respaldan nuestro compromiso
          </h2>
          <p className="mb-2 text-gray-800">
            En Mexico American Transportation trabajamos bajo estrictas normas de seguridad y cumplimiento internacional.
          </p>
          <p className="mb-2 text-gray-800">
            Nuestras certificaciones como <span className="font-semibold">OEA, FAST, CTPAT</span> y cumplimiento con la DOT nos permiten operar con confianza en cruces fronterizos y rutas federales.
          </p>
          <p className="text-gray-800">
            Estas acreditaciones garantizan a nuestros clientes un servicio ágil, auditado y seguro en cada envío.
          </p>
        </div>
      </div>
    </section>
  );
}
