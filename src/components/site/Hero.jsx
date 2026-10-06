import { ArrowRight, MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import { CONTACT, IMAGES, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const SPECS = [
  { label: "Experiencia", value: "28 años" },
  { label: "Especialidad", value: "Rines · Llantas · Tuning" },
  { label: "Ubicación", value: "Morelia, Michoacán" },
];

export default function Hero() {
  const wa = waLink(CONTACT.whatsapp, "Hola TOPS, quiero cotizar un proyecto para mi auto.");

  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden bg-background">
      <Image
        src={IMAGES.hero}
        alt="Auto modificado con rines deportivos en TOPS Morelia"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        fittingType="fill"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/40" />
      <div className="pointer-events-none absolute inset-0 hairline-grid opacity-30" />

      <div className="relative w-full">
        <div className="tops-container pb-12 pt-32 lg:pb-16">
          <p className="mono-label text-primary">TOPS Morelia · Ramo automotriz desde 1998</p>

          <h1 className="mt-6 max-w-4xl font-heading text-[38px] font-bold uppercase leading-[0.96] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[80px]">
            Rines, llantas y modificaciones para tu auto
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Venta e instalación de rines, llantas y accesorios, además de audio, alarmas, tuning y detailing. Todo en
            un solo taller en Morelia.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-[2px] bg-primary px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Cotizar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-[2px] border border-border px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-1 border-t border-border sm:grid-cols-3">
            {SPECS.map((spec, index) => (
              <div
                key={spec.label}
                className={cn("border-b border-border py-5 sm:border-b-0", index > 0 && "sm:border-l sm:pl-6")}
              >
                <dt className="mono-label text-muted-foreground">{spec.label}</dt>
                <dd className="mt-2 font-heading text-lg uppercase tracking-[-0.02em] text-foreground">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}