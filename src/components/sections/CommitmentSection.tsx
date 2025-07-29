import { FaMapMarkedAlt, FaCheckCircle, FaHardHat } from "react-icons/fa";

/**
 * Sección de "Estamos contigo en cada paso del camino"
 * Muestra los principales valores y servicios de la empresa.
 */
const COMMITMENTS = [
  {
    icon: <FaMapMarkedAlt className="text-2xl text-gray-700 mb-2" />,
    title: "Planeación estratégica",
    description:
      "Evaluamos a detalle cada aspecto del traslado antes de salir a carretera, minimizando riesgos y garantizando máxima eficiencia y resultados óptimos.",
    bg: "bg-gradient-to-tr from-yellow-100/70 via-yellow-50/70 to-white/80",
  },
  {
    icon: <FaCheckCircle className="text-2xl text-gray-700 mb-2" />,
    title: "Certificación OEA",
    description:
      "Contamos con certificación OEA (Operador Económico Autorizado), garantizando seguridad, confianza y calidad excepcional en todos nuestros procesos.",
    bg: "bg-gradient-to-tr from-red-100/60 via-pink-50/60 to-white/80",
  },
  {
    icon: <FaHardHat className="text-2xl text-gray-700 mb-2" />,
    title: "Capacitación DOT",
    description:
      "Capacitamos constantemente a nuestros operadores y mecánicos para asegurar inspecciones rigurosas, manteniendo altos estándares en cada servicio.",
    bg: "bg-gradient-to-tr from-yellow-100/70 via-yellow-50/60 to-white/80",
  },
];

export default function CommitmentSection() {
  return (
    <section className="bg-white py-12 px-3 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
          Estamos contigo en cada paso del camino
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl">
          En Mexico American Transportation, nuestro compromiso es brindarte soporte, asesoría y confianza desde el principio hasta el final de cada operación.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMMITMENTS.map(({ icon, title, description, bg }, idx) => (
            <div
              key={title}
              className={`rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-start ${bg} transition hover:scale-[1.03] hover:shadow-lg`}
            >
              {icon}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
