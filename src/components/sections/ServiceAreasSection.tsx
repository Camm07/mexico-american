// src/components/sections/ServiceAreasSection.tsx
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

export default function ServiceAreasSection() {
  return (
    <section className="bg-background py-14 px-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Mapa de Google */}
        <div className="w-full md:w-1/2">
          <iframe
            title="Ubicación Mexico American Transportation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.1258629605636!2d-110.97267102494408!3d31.189523363414203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d151175b7327a7%3A0x4994a0dafea1f456!2sMexico%20American%20Transportation!5e0!3m2!1ses!2smx!4v1753811786402!5m2!1ses!2smx"
            className="rounded-2xl shadow-2xl w-full h-72 md:h-80 border-4 border-white"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        {/* Info de servicio */}
        <div className="w-full md:w-1/2 bg-primary rounded-2xl p-8 text-white shadow-xl flex flex-col gap-3 border-t-4 border-accent">
          <h2 className="text-3xl font-title font-extrabold mb-3 text-accent text-center md:text-left drop-shadow">
            Zonas de servicio
          </h2>
          <p className="mb-2 text-lg font-sans text-background/95">
            Atendemos a nuestros clientes desde nuestra base ubicada en <b>Nogales, Sonora</b>, con cruces fronterizos hacia Estados Unidos.
          </p>
          <p className="mb-2 text-lg font-sans text-background/95">
            Operamos principalmente en el sur de <b>Arizona</b> y regiones cercanas, garantizando un servicio rápido, seguro y conforme a los lineamientos internacionales.
          </p>
          <div className="mb-2 mt-2 font-sans text-base">
            Nuestro equipo está disponible de lunes a viernes en el siguiente horario:
          </div>
          <ul className="space-y-3 text-base">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-accent text-xl" />
              <span>
                Carretera Internacional Km 17.6 Lote E,<br />Nogales, Sonora, México
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaClock className="mt-1 text-accent text-xl" />
              <span>
                Horario de atención: <br />
                <span className="font-bold">Lunes a Viernes — 7:00 AM a 4:00 PM</span>{" "}
                <span className="italic text-background/70 text-xs">(hora de Sonora)</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-accent text-xl" />
              <span>
                <span className="font-bold">Teléfono:</span> 631 104 8198
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
