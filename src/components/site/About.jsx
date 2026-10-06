import { Check } from "lucide-react";
import Reveal from "./Reveal";

const POINTS = [
  "Asesoría personalizada según tu vehículo y el uso que le das",
  "Refacciones y equipo de marcas reconocidas",
  "Taller propio para instalación, montaje y servicio",
  "Atención directa con especialistas en el ramo automotriz",
];

const NUMBERS = [
  { value: "28", label: "Años de experiencia" },
  { value: "6", label: "Líneas de servicio" },
  { value: "3", label: "Asesores directos" },
];

export default function About() {
  return (
    <section id="nosotros" className="section-shell scroll-mt-20 bg-background">
      <div className="tops-container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="mono-label text-primary">Nosotros</p>
            <h2 className="mt-5 font-heading text-4xl font-bold uppercase leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              28 años modificando autos en Morelia
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Somos una empresa con 28 años de experiencia en el ramo automotriz. Nos dedicamos a hacer modificaciones
              de todo tipo e instalaciones de audio, video y alarmas, además de la venta de rines, llantas y accesorios,
              con servicio de detailing para dejar tu auto impecable.
            </p>
            <ul className="mt-9 space-y-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center border border-primary/60">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between border border-border bg-card p-8">
              <div>
                <p className="mono-label text-muted-foreground">TOPS Morelia</p>
                <p className="mt-4 font-heading text-2xl uppercase leading-tight tracking-[-0.02em] text-foreground">
                  Un taller, todas las especialidades
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Desde un cambio de llantas hasta un proyecto completo de tuning: lo cotizamos, lo instalamos y lo
                  probamos contigo.
                </p>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                {NUMBERS.map((item) => (
                  <div key={item.label}>
                    <dt className="font-heading text-3xl font-bold tracking-[-0.04em] text-primary">{item.value}</dt>
                    <dd className="mono-label mt-2 text-muted-foreground">{item.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}