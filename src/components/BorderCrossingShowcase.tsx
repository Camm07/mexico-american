// src/components/BorderCrossingShowcase.tsx
import { useEffect, useState } from "react";

const images = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
];

export default function BorderCrossingShowcase() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] min-h-[420px] flex items-center justify-center overflow-hidden">
      {/* Imagen actual del carrusel */}
      <img
        src={images[current]}
        alt="Fondo de transporte"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
        draggable={false}
      />

      {/* Capa oscura y contenido */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6 z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
          ¡Bienvenido a Mexico American Transportation!
        </h1>
        <h2 className="text-lg sm:text-xl mb-4 tracking-wide uppercase">
          Servicio de cruce fronterizo México–Estados Unidos
        </h2>
        <p className="max-w-xl text-base sm:text-lg mb-6">
          Somos especialistas en transporte transfronterizo y arrastre de carga federal.
          Seguridad, puntualidad y eficiencia en cada recorrido.
        </p>
        <a
          href="tel:6311048198"
          className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-md transition duration-300 shadow-lg"
        >
          📞 Cotiza ahora: 631 104 8198
        </a>
        {/* Controles manuales del carrusel */}
        <div className="absolute bottom-6 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Imagen ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-colors border border-white/30 ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}