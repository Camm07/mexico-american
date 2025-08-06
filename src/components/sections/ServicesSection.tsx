import { FaRoad, FaTruckMoving, FaKey, FaShieldAlt } from "react-icons/fa";

// Servicios y sus iconos, usando la paleta de la marca
const SERVICES = [
  {
    icon: <FaRoad className="text-accent text-3xl mb-1 drop-shadow" />,
    label: "Cruces Fronterizos",
  },
  {
    icon: <FaTruckMoving className="text-primary text-3xl mb-1 drop-shadow" />,
    label: "Arrastres Nacionales",
  },
  {
    icon: <FaKey className="text-secondary text-3xl mb-1 drop-shadow" />,
    label: "Renta de equipo",
  },
  {
    icon: <FaShieldAlt className="text-green-600 text-3xl mb-1 drop-shadow" />,
    label: "Análisis de requerimientos de seguridad.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-background py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Columna izquierda: texto */}
        <div className="bg-white/95 rounded-2xl shadow-xl p-10 border-l-4 border-accent flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl font-title font-extrabold mb-4 text-primary tracking-tight drop-shadow">
              Nuestros servicios
            </h2>
            <p className="text-lg text-secondary leading-relaxed font-sans mb-6">
              Ofrecemos servicios de <span className="font-title text-accent font-bold">arrastre transfronterizo</span> y <span className="font-title text-primary font-bold">transporte federal</span> al interior de la república en caja seca, contenedores y plataforma, con monitoreo mediante GPS y comunicación por radio.
            </p>
          </div>
          {/* Botón debajo del texto */}
          <div className="flex justify-center w-full mt-3">
            <a
              href="/servicios" // Cambia por tu ruta real
              className="bg-accent hover:bg-[#bc370b] text-white font-title font-bold py-3 px-8 rounded-xl shadow-md text-base transition-all duration-200 border-b-4 border-accent/60 text-center w-full"
            >
              Ver todos los servicios
            </a>
          </div>
        </div>
        {/* Columna derecha: lista vertical de servicios con iconos */}
        <div className="flex flex-col gap-5 items-center justify-center">
          {SERVICES.map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 bg-white/90 shadow-md rounded-xl px-6 py-4 w-full max-w-xs border-l-4 border-accent"
            >
              <span>{icon}</span>
              <span className="font-title font-bold text-primary text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
