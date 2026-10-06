import { Circle, Disc3, Gauge, Sparkles, Volume2, Wrench } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import { IMAGES } from "@/lib/site";

const SERVICES = [
  {
    title: "Rines",
    icon: Disc3,
    image: IMAGES.rines,
    text: "Rines para auto y camioneta, en medidas originales y deportivas, con asesoría de compatibilidad y offset.",
  },
  {
    title: "Llantas",
    icon: Circle,
    image: IMAGES.llantas,
    text: "Llantas para auto y camioneta de marcas de alto desempeño, con montaje y balanceo incluidos.",
  },
  {
    title: "Accesorios y Audio",
    icon: Volume2,
    image: IMAGES.audio,
    text: "Audio, video, alarmas, luces, volantes, emblemas y asientos, con instalación profesional.",
  },
  {
    title: "Tuning y Modificaciones",
    icon: Gauge,
    image: IMAGES.motor,
    text: "Modificaciones de todo tipo: desempeño, suspensión, escape y detalles estéticos a tu medida.",
  },
  {
    title: "Detailing",
    icon: Sparkles,
    image: IMAGES.detailing,
    text: "Lavado a detalle, pulido, corrección de pintura y protección para conservar tu auto como nuevo.",
  },
  {
    title: "Servicio e Instalación",
    icon: Wrench,
    image: IMAGES.taller,
    text: "Taller propio para montaje, alineación, balanceo, revisión técnica e instalación de todo lo que vendemos.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-shell scroll-mt-20 bg-background">
      <div className="tops-container">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mono-label text-primary">Servicios</p>
              <h2 className="mt-5 max-w-2xl font-heading text-4xl font-bold uppercase leading-[1.02] tracking-[-0.03em] sm:text-5xl">
                Todo para tu auto, en un solo lugar
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Venta, instalación y servicio con refacciones de marcas reconocidas y atención personalizada para cada
              vehículo.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="group flex h-full flex-col border border-border bg-card transition-colors duration-300 hover:border-primary/60">
                  <div className="relative aspect-[4/3] overflow-hidden bg-background">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      fittingType="fill"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center border border-border bg-background/80 backdrop-blur">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-semibold uppercase tracking-[-0.02em]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}