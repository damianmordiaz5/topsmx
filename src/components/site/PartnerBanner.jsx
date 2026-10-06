import { ArrowUpRight, Car } from "lucide-react";
import Reveal from "./Reveal";

const PARTNER_URL = "https://autops.vip";

export default function PartnerBanner() {
  return (
    <section className="section-shell bg-background">
      <div className="tops-container">
        <Reveal>
          <div className="relative overflow-hidden border border-border bg-card">
            <div className="pointer-events-none absolute inset-0 hairline-grid opacity-40" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-primary" />

            <div className="relative flex flex-col gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mono-label text-primary">Autos premium seminuevos</p>
                <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold uppercase leading-[1.05] tracking-[-0.03em] text-foreground sm:text-4xl">
                  ¿Buscas un auto premium usado? Visita autops.vip
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Consulta el inventario de autos premium seminuevos disponibles en nuestro sitio, con opciones para
                  todos los gustos.
                </p>
              </div>

              <a
                href={PARTNER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-[48px] shrink-0 items-center gap-3 rounded-[2px] bg-primary px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Car className="h-4 w-4" />
                Ir a autops.vip
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}