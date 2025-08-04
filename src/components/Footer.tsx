import { FaFacebookF, FaInstagram, FaYoutube, FaYelp } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

/**
 * Footer de la página principal
 */
export default function Footer() {
  return (
    <footer className="bg-primary text-background pt-14 pb-6 px-4 mt-0 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Columna 1: Nombre y misión */}
        <div>
          <span className="bg-accent/90 text-white px-3 py-1 rounded-lg font-title font-black text-xl inline-block mb-3 shadow-lg tracking-tight">
            Mexico American Transportation
          </span>
          <h4 className="font-title font-bold mb-1 text-base text-accent">
            Tu aliado en logística y transporte transfronterizo
          </h4>
          <p className="text-xs mb-5 leading-relaxed text-background/80">
            En cada entrega, reafirmamos nuestro compromiso con la puntualidad, la seguridad y el cumplimiento normativo.
          </p>
          <div className="flex gap-4 text-2xl">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaYoutube />
            </a>
            <a href="https://yelp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaYelp />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* Columna 2: Términos y avisos */}
        <div>
          <h4 className="font-title font-bold mb-2 text-base text-accent">Términos</h4>
          <ul className="text-xs space-y-2 text-background/80">
            <li>
              <a href="#" className="hover:text-accent transition font-semibold">Aviso de Privacidad</a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition font-semibold">Términos y Condiciones</a>
            </li>
          </ul>
        </div>
        {/* Columna 3: Información de contacto */}
        <div>
          <h4 className="font-title font-bold mb-2 text-base text-accent">Información de Contacto</h4>
          <ul className="text-xs space-y-2 text-background/80">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-accent mt-[2px]" />
              <span>
                <strong>Ubicación:</strong>
                <br />
                Carretera Internacional Km 17.6 Lote E,<br />
                Nogales, Sonora, México.
              </span>
            </li>
            <li className="flex items-center gap-2 mt-1">
              <FaPhoneAlt className="text-accent" />
              <span>
                <strong>Teléfono:</strong> +52 631 104 8198
              </span>
            </li>
            <li className="flex items-center gap-2 mt-1">
              <FaEnvelope className="text-accent" />
              <span>
                <strong>Email:</strong> mexicoamericantransportation@gmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Línea separadora */}
      <hr className="my-8 border-background/20 max-w-6xl mx-auto" />
      {/* Derechos reservados */}
      <div className="text-xs text-center text-background/60 font-sans">
        Mexico American Transportation © {new Date().getFullYear()} | All Rights Reserved.
      </div>
    </footer>
  );
}
