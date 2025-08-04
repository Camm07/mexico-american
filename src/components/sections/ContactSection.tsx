import { FaPhone, FaEnvelope } from "react-icons/fa";

const CONTACT_PHONE = "+52 631 104 8198";
const CONTACT_EMAIL = "mexicoamericantransportation@gmail.com";

export default function ContactSection() {
  return (
    <section className="bg-background py-16 px-2">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Columna izquierda: Info de contacto */}
        <div className="bg-white/95 rounded-2xl shadow-xl p-10 flex flex-col justify-between border-t-4 border-accent">
          <div>
            <h2 className="text-3xl font-title font-extrabold mb-3 text-primary tracking-tight drop-shadow">
              Estamos para ayudarte
            </h2>
            <p className="text-lg text-secondary mb-7 font-sans">
              Envíanos un mensaje y con gusto te responderemos lo antes posible.<br />
              También puedes contactarnos directamente por teléfono o correo electrónico.
            </p>
            <div className="space-y-4 mb-7">
              <div className="flex items-center gap-3 px-5 py-4 rounded-lg bg-background text-primary font-title text-lg font-bold shadow border border-accent/10">
                <span className="bg-accent rounded-full p-3 flex items-center justify-center shadow-md">
                  <FaPhone className="text-white text-2xl" />
                </span>
                {CONTACT_PHONE}
              </div>
              <div className="flex items-center gap-3 px-5 py-4 rounded-lg bg-background text-primary font-title text-lg font-bold shadow border border-accent/10">
                <span className="bg-accent rounded-full p-3 flex items-center justify-center shadow-md">
                  <FaEnvelope className="text-white text-2xl" />
                </span>
                <span className="break-words">{CONTACT_EMAIL}</span>
              </div>
            </div>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="bg-accent hover:bg-[#bc370b] text-white py-3 px-8 rounded-xl text-lg font-title font-extrabold shadow-lg text-center transition"
          >
            Contactar ahora
          </a>
        </div>

        {/* Columna derecha: Formulario */}
        <form
          className="bg-white/80 rounded-2xl shadow-xl border-t-4 border-primary p-10 grid grid-cols-1 sm:grid-cols-2 gap-5 items-start"
          onSubmit={e => {
            e.preventDefault();
            alert('Este formulario es solo de ejemplo. Aquí puedes integrar tu backend o servicio de emails.');
          }}
        >
          <input
            className="col-span-1 bg-background border border-accent/20 rounded-lg px-5 py-3 outline-accent font-sans"
            type="text"
            placeholder="Nombre(s)"
            required
          />
          <input
            className="col-span-1 bg-background border border-accent/20 rounded-lg px-5 py-3 outline-accent font-sans"
            type="text"
            placeholder="Apellidos"
            required
          />
          <input
            className="col-span-1 bg-background border border-accent/20 rounded-lg px-5 py-3 outline-accent font-sans"
            type="tel"
            placeholder="Teléfono"
            required
          />
          <input
            className="col-span-1 bg-background border border-accent/20 rounded-lg px-5 py-3 outline-accent font-sans"
            type="email"
            placeholder="Correo electrónico"
            required
          />
          <textarea
            className="col-span-2 bg-background border border-accent/20 rounded-lg px-5 py-3 outline-accent font-sans resize-none min-h-[90px]"
            placeholder="Mensaje"
            required
          ></textarea>
          <button
            className="col-span-2 bg-primary hover:bg-accent text-white font-title font-extrabold py-3 rounded-xl shadow-lg text-lg transition"
            type="submit"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
