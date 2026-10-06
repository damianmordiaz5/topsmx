import { MessageCircle, Phone } from "lucide-react";
import { CONTACT, waLink } from "@/lib/site";

const SERVICE_LINKS = ["Rines", "Llantas", "Accesorios y audio", "Tuning y modificaciones", "Detailing"];
const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="tops-container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-3xl font-bold uppercase tracking-[-0.04em] text-foreground">TOPS</span>
              <span className="mono-label text-muted-foreground">Morelia</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              28 años en el ramo automotriz. Rines, llantas, accesorios, audio, alarmas, modificaciones y detailing
              para auto y camioneta.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={waLink(CONTACT.whatsapp, "Hola TOPS, quiero información sobre sus servicios.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-[2px] bg-primary px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <a
                href={`tel:${CONTACT.telefonoRaw}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-[2px] border border-border px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Phone className="h-3.5 w-3.5" />
                Llamar
              </a>
            </div>
          </div>

          <div>
            <p className="mono-label text-muted-foreground">Servicios</p>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <a href="#servicios" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mono-label mt-8 text-muted-foreground">Secciones</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label text-muted-foreground">Visítanos</p>
            <address className="mt-5 text-sm not-italic leading-relaxed text-foreground/80">
              {CONTACT.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mono-label mt-8 text-muted-foreground">Teléfono</p>
            <a
              href={`tel:${CONTACT.telefonoRaw}`}
              className="mt-3 block text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {CONTACT.telefonoDisplay}
            </a>
            <ul className="mt-6 space-y-2">
              {CONTACT.stations.map((station) => (
                <li key={station.name} className="text-sm text-foreground/80">
                  <span className="text-muted-foreground">{station.role}:</span> {station.name} · {station.phone}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            © {new Date().getFullYear()} TOPS Morelia. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://tops.mx"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              tops.mx
            </a>
            <a
              href="https://autops.vip"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              autops.vip
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}