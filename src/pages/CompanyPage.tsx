// src/pages/CompanyPage.tsx
// src/pages/CompanyPage.tsx
import shield from '../assets/logo.png'; // Cambia por tu escudo si tienes otro
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaRegCheckCircle,
  FaChartLine,
  FaTools,
} from "react-icons/fa";

export default function CompanyPage() {
  return (
    <section className="bg-background min-h-screen py-20 px-4">
      {/* Presentación principal */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Columna Izquierda: Texto principal */}
        <motion.div
          className="md:w-2/3 w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] }}
        >
          <h1 className="text-4xl font-title font-extrabold text-primary mb-4 drop-shadow tracking-tight">
            ¡Bienvenido!
          </h1>
          <p className="text-lg text-secondary mb-6 font-sans text-justify">
            <span className="font-title text-accent font-bold">Mexico American Transportation</span> cuenta con el servicio de arrastres de cruce transfronterizo, así como arrastre al interior de la república. Consolidamos también servicios a Estados Unidos a través de nuestras compañías hermanas: <span className="font-title font-bold text-primary">MEXAM LLC</span>, y <span className="font-title font-bold text-primary">Quick Fix Truck and Trailer Repair</span> y <span className="font-title font-bold text-primary">Quick Fix Tires</span>; para ofrecer servicio en arrastres y mantenimiento de unidades tractomotoras.
          </p>
        </motion.div>
        {/* Columna Derecha: Escudo/Logo */}
        <motion.div
          className="md:w-1/3 w-full flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] }}
        >
          <img
            src={shield}
            alt="USA-Mexico Shield"
            className="w-44 h-44 md:w-56 md:h-56 object-contain rounded-2xl shadow-2xl border-4 border-white bg-white/80"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Primera fila de bloques */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Misión */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl border-t-4 border-accent p-8 flex flex-col gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h2 className="text-2xl font-title font-extrabold text-primary mb-2 flex items-center gap-2">
            <FaBullseye className="text-accent text-3xl" />
            Misión
          </h2>
          <p className="text-base text-secondary font-sans text-justify">
            Ser líderes en el servicio de logística nacional e internacional, así como en el mantenimiento de equipo de transporte, ofreciendo un servicio de calidad a nuestros clientes y una fuente de trabajo confiable para nuestros empleados, basado en la eficiencia y la seguridad.
          </p>
        </motion.div>

        {/* Visión */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl border-t-4 border-accent p-8 flex flex-col gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.23 }}
        >
          <h2 className="text-2xl font-title font-extrabold text-primary mb-2 flex items-center gap-2">
            <FaEye className="text-primary text-3xl" />
            Visión
          </h2>
          <p className="text-base text-secondary font-sans text-justify">
            Consolidarnos como una de las empresas más importantes de logística, comprometiéndonos con nuestros clientes para ofrecer un servicio de transporte seguro y de calidad en destinos nacionales e internacionales.
          </p>
        </motion.div>

        {/* Políticas de calidad */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl border-t-4 border-accent p-8 flex flex-col gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.31 }}
        >
          <h2 className="text-2xl font-title font-extrabold text-primary mb-2 flex items-center gap-2">
            <FaRegCheckCircle className="text-green-600 text-3xl" />
            Políticas de calidad
          </h2>
          <p className="text-base text-secondary font-sans text-justify">
            Nuestros servicios siempre serán eficientes y puntuales. El mantenimiento será siempre con la mejor calidad, responsabilidad y rapidez.
          </p>
        </motion.div>
      </div>

      {/* Segunda fila de bloques */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Rendimiento */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl border-t-4 border-accent p-8 flex flex-col gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          <h2 className="text-2xl font-title font-extrabold text-primary mb-2 flex items-center gap-2">
            <FaChartLine className="text-accent text-3xl" />
            Rendimiento
          </h2>
          <p className="text-base text-secondary font-sans text-justify">
            Nuestra sucursal cuenta con personal altamente capacitado para realizar el mantenimiento de nuestras unidades, ofreciendo la confianza a nuestros clientes sobre un servicio de alta calidad y en los tiempos acordados.
          </p>
        </motion.div>

        {/* Servicios a las unidades */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl border-t-4 border-accent p-8 flex flex-col gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.24 }}
        >
          <h2 className="text-2xl font-title font-extrabold text-primary mb-2 flex items-center gap-2">
            <FaTools className="text-primary text-3xl" />
            Servicios a las unidades
          </h2>
          <p className="text-base text-secondary font-sans text-justify">
            Contamos con un programa piloto de mantenimiento para nuestras unidades que trabajan en óptimas condiciones fisicomecánicas, certificadas y avaladas por el Departamento de Transporte en EE. UU. y la Secretaría de Comunicaciones y Transportes en México.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
