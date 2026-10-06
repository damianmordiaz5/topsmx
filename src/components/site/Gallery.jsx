import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import { IMAGES } from "@/lib/site";

const PROJECTS = [
  {
    image: IMAGES.sedan,
    title: "Sedán deportivo",
    detail: "Suspensión, rines y ajuste de altura",
  },
  {
    image: IMAGES.suv,
    title: "Camioneta",
    detail: "Rines de gran diámetro y llantas todo terreno",
  },
  {
    image: IMAGES.carbono,
    title: "Detalles y acabados",
    detail: "Carbono, escape e iluminación",
  },
];

export default function Gallery() {
  return (
    <section id="proyectos" className="section-shell scroll-mt-20 bg-background">
      <div className="tops-container">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mono-label text-primary">Proyectos</p>
              <h2 className="mt-5 font-heading text-4xl font-bold uppercase leading-[1.02] tracking-[-0.03em] sm:text-5xl">
                Trabajos que salen de nuestro taller
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Autos y camionetas de clientes de Morelia y la región, con equipo instalado y ajustado por nuestro
              equipo.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <figure className="group">
                <div className="relative aspect-[3/2] overflow-hidden border border-border bg-card">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    fittingType="fill"
                  />
                </div>
                <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-t border-border pt-4">
                  <span className="font-heading text-base uppercase tracking-[-0.01em] text-foreground">
                    {project.title}
                  </span>
                  <span className="mono-label text-right text-muted-foreground">{project.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}