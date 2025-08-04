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
        <div className="bg-white/95 rounded-2xl shadow-xl p-10 border-l-4 border-accent">
          <h2 className="text-3xl font-title font-extrabold mb-4 text-primary tracking-tight drop-shadow">
            Nuestros servicios
          </h2>
          <p className="text-lg text-secondary leading-relaxed font-sans">
            Ofrecemos servicios de <span className="font-title text-accent font-bold">arrastre transfronterizo</span> y <span className="font-title text-primary font-bold">transporte federal</span> al interior de la república en caja seca, contenedores y plataforma, con monitoreo mediante GPS y comunicación por radio.
          </p>
        </div>
        {/* Columna derecha: imagen + lista de servicios */}
        <div className="relative flex justify-center">
          {/* Imagen */}
          <img
            src="/about-us-trucks.jpg"
            alt="Camiones Mexico American Transportation"
            className="rounded-2xl shadow-2xl object-cover w-full h-[350px] md:w-[370px] md:h-[370px] border-4 border-white"
          />
          {/* Lista vertical de servicios sobre la imagen */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
            {SERVICES.map(({ icon, label }, i) => (
              <div
                key={label}
                className="flex flex-col items-center bg-background/90 shadow-md rounded-lg px-6 py-3 w-[240px] font-title text-primary text-base text-center backdrop-blur border border-accent/20 font-bold tracking-tight"
                style={{
                  marginTop: i === 0 ? 0 : undefined,
                }}
              >
                {icon}
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
