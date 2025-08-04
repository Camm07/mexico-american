import { FaMapMarkedAlt, FaCheckCircle, FaHardHat } from "react-icons/fa";

/**
 * Sección de "Estamos contigo en cada paso del camino"
 * Muestra los principales valores y servicios de la empresa.
 */
const COMMITMENTS = [
  {
    icon: <FaMapMarkedAlt className="text-3xl text-accent mb-3 drop-shadow" />,
    title: "Planeación estratégica",
    description:
      "Evaluamos a detalle cada aspecto del traslado antes de salir a carretera, minimizando riesgos y garantizando máxima eficiencia y resultados óptimos.",
    bg: "bg-gradient-to-tr from-yellow-50/60 via-background to-white/80",
  },
  {
    icon: <FaCheckCircle className="text-3xl text-accent mb-3 drop-shadow" />,
    title: "Certificación OEA",
    description:
      "Contamos con certificación OEA (Operador Económico Autorizado), garantizando seguridad, confianza y calidad excepcional en todos nuestros procesos.",
    bg: "bg-gradient-to-tr from-accent/10 via-background to-white/80",
  },
  {
    icon: <FaHardHat className="text-3xl text-accent mb-3 drop-shadow" />,
    title: "Capacitación DOT",
    description:
      "Capacitamos constantemente a nuestros operadores y mecánicos para asegurar inspecciones rigurosas, manteniendo altos estándares en cada servicio.",
    bg: "bg-gradient-to-tr from-yellow-50/60 via-background to-white/80",
  },
];

export default function CommitmentSection() {
  return (
    <section className="bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-title font-extrabold text-primary mb-3 tracking-tight drop-shadow-sm">
          Estamos contigo en cada paso del camino
        </h2>
        <p className="text-lg text-secondary mb-10 max-w-2xl font-sans">
          En <span className="font-title text-accent font-bold">Mexico American Transportation</span>, nuestro compromiso es brindarte soporte, asesoría y confianza desde el principio hasta el final de cada operación.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {COMMITMENTS.map(({ icon, title, description, bg }, idx) => (
            <div
              key={title}
              className={`rounded-2xl border border-primary/10 shadow-lg p-8 flex flex-col items-start gap-2
                ${bg}
                transition-all duration-300 hover:scale-[1.045] hover:shadow-2xl hover:border-accent`}
            >
              <div className="mb-2">{icon}</div>
              <h3 className="text-xl font-title font-black text-primary mb-1">{title}</h3>
              <p className="text-base text-secondary">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
