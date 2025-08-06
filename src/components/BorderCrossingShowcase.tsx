// src/components/BorderCrossingShowcase.tsx
import { useEffect, useState } from "react";
import hero1 from '../assets/imgHomePage/img1.png';
import hero2 from '../assets/imgHomePage/img2.png';
import hero3 from '../assets/imgHomePage/img3.png';
import hero4 from '../assets/imgHomePage/img4.png';

const images = [hero1, hero2, hero3, hero4];

export default function BorderCrossingShowcase() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] min-h-[420px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Imagen del carrusel */}
      <img
        src={images[current]}
        alt="Fondo de transporte"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
        draggable={false}
      />

      {/* Overlay oscuro y contenido central */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white px-6 z-10">
        <h1 className="text-4xl sm:text-5xl font-title font-extrabold mb-4 drop-shadow-2xl tracking-tight">
          ¡Bienvenido a Mexico American Transportation!
        </h1>
        <h2 className="text-lg sm:text-2xl font-title tracking-wide uppercase text-accent mb-3 drop-shadow-lg">
          Servicio de Cruce Fronterizo México–Estados Unidos
        </h2>
        <p className="max-w-xl text-base sm:text-lg text-background/80 mb-7 font-sans">
          Somos especialistas en transporte transfronterizo y arrastre de carga federal.<br />
          Seguridad, puntualidad y eficiencia en cada recorrido.
        </p>
        <a
          href="tel:6311048198"
          className="bg-accent hover:bg-[#bc370b] text-white font-title font-bold py-3 px-8 rounded-xl text-lg shadow-xl transition-all duration-300 outline-none ring-2 ring-accent/10 focus:ring-accent/30"
        >
          📞 Cotiza ahora: 631 104 8198
        </a>

        {/* Indicadores/carrousel controls */}
        <div className="absolute bottom-8 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Imagen ${i + 1}`}
              className={`w-4 h-4 rounded-full border-2 border-white/60 transition-all
                ${i === current
                  ? "bg-accent shadow-md scale-110 border-accent"
                  : "bg-white/40 hover:bg-accent/70"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
