import { MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "./Reveal";
import QuoteForm from "./QuoteForm";
import { CONTACT, MAPS_EMBED, waLink } from "@/lib/site";

export default function ContactSection() {
  return (
    <section id="contacto" className="section-shell scroll-mt-20 bg-card">
      <div className="tops-container">
        <Reveal>
          <p className="mono-label text-primary">Contacto</p>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl font-bold uppercase leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            Visítanos en Morelia
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <address className="not-italic text-base leading-relaxed text-muted-foreground">
                  {CONTACT.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <span className="mono-label block text-muted-foreground">Teléfono</span>
                  <a
                    href={`tel:${CONTACT.telefonoRaw}`}
                    className="mt-1 block font-heading text-xl tracking-[-0.02em] text-foreground transition-colors hover:text-primary"
                  >
                    {CONTACT.telefonoDisplay}
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="mono-label text-muted-foreground">Contactos directos</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {CONTACT.stations.map((station) => (
                    <div key={station.name} className="flex flex-col border border-border bg-background p-5">
                      <span className="font-heading text-lg uppercase tracking-[-0.02em] text-foreground">
                        {station.name}
                      </span>
                      <span className="mt-2 text-xs leading-relaxed text-muted-foreground">{station.role}</span>
                      <a
                        href={`tel:+52${station.raw.slice(2)}`}
                        className="mt-4 font-mono text-xs tracking-[0.12em] text-primary transition-opacity hover:opacity-80"
                      >
                        {station.phone}
                      </a>
                      <div className="mt-5 flex items-center gap-2">
                        <a
                          href={`tel:+52${station.raw.slice(2)}`}
                          aria-label={`Llamar a ${station.name}`}
                          className="inline-flex h-11 flex-1 items-center justify-center gap-2 border border-border font-mono text-[10px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          Llamar
                        </a>
                        <a
                          href={waLink(station.raw, `Hola ${station.name}, quiero información de TOPS.`)}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`WhatsApp a ${station.name}`}
                          className="inline-flex h-11 w-11 items-center justify-center bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5"
                        >
                          <MessageCircle className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 border border-border">
            <iframe
              title="Ubicación de TOPS en Morelia, Michoacán"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full sm:h-[420px]"
              style={{ filter: "invert(0.9) hue-rotate(180deg) saturate(0.7) contrast(1.05)" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}