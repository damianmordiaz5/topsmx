import { useState } from "react";
import { Send } from "lucide-react";
import { CONTACT, waLink } from "@/lib/site";

const SERVICE_OPTIONS = [
  "Rines",
  "Llantas",
  "Accesorios y audio",
  "Tuning y modificaciones",
  "Detailing",
  "Servicio e instalación",
  "Otro",
];

const EMPTY = { nombre: "", telefono: "", vehiculo: "", servicio: SERVICE_OPTIONS[0], mensaje: "" };

export default function QuoteForm() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = [
      "Hola TOPS, quiero cotizar:",
      "",
      `Nombre: ${form.nombre}`,
      `Teléfono: ${form.telefono}`,
      `Vehículo: ${form.vehiculo}`,
      `Servicio: ${form.servicio}`,
      `Detalles: ${form.mensaje}`,
    ].join("\n");
    window.open(waLink(CONTACT.whatsapp, text), "_blank", "noopener");
    setSent(true);
  };

  const inputClass =
    "w-full rounded-[2px] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none";

  return (
    <div className="border border-border bg-card p-6 sm:p-8">
      <p className="mono-label text-primary">Cotiza tu proyecto</p>
      <h3 className="mt-4 font-heading text-2xl uppercase leading-tight tracking-[-0.02em] text-foreground">
        Cuéntanos qué necesitas
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Llena el formulario y enviaremos tu solicitud directo a WhatsApp para darte precio y disponibilidad.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mono-label text-muted-foreground" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              required
              value={form.nombre}
              onChange={update("nombre")}
              placeholder="Tu nombre"
              className={`mt-2 ${inputClass}`}
            />
          </div>
          <div>
            <label className="mono-label text-muted-foreground" htmlFor="telefono">
              Teléfono
            </label>
            <input
              id="telefono"
              required
              value={form.telefono}
              onChange={update("telefono")}
              placeholder="443 000 0000"
              className={`mt-2 ${inputClass}`}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mono-label text-muted-foreground" htmlFor="vehiculo">
              Vehículo
            </label>
            <input
              id="vehiculo"
              value={form.vehiculo}
              onChange={update("vehiculo")}
              placeholder="Marca, modelo y año"
              className={`mt-2 ${inputClass}`}
            />
          </div>
          <div>
            <label className="mono-label text-muted-foreground" htmlFor="servicio">
              Servicio
            </label>
            <select id="servicio" value={form.servicio} onChange={update("servicio")} className={`mt-2 ${inputClass}`}>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="mono-label text-muted-foreground" htmlFor="mensaje">
            Detalles
          </label>
          <textarea
            id="mensaje"
            rows={3}
            value={form.mensaje}
            onChange={update("mensaje")}
            placeholder="Medida de rin o llanta, equipo que buscas, dudas..."
            className={`mt-2 resize-none ${inputClass}`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[2px] bg-primary px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
        >
          <Send className="h-4 w-4" />
          Enviar por WhatsApp
        </button>

        {sent && (
          <p className="border border-primary/40 bg-primary/5 px-4 py-3 text-xs leading-relaxed text-foreground">
            Listo, abrimos WhatsApp con tu solicitud. Solo presiona enviar para que te atendamos. Si no se abrió,{" "}
            <a
              className="text-primary underline"
              href={waLink(CONTACT.whatsapp, "Hola TOPS, quiero cotizar un servicio.")}
              target="_blank"
              rel="noreferrer"
            >
              toca aquí
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}