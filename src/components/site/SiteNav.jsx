import { useEffect, useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { CONTACT, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = waLink(CONTACT.whatsapp, "Hola TOPS, quiero información sobre rines, llantas y servicios.");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "border-b border-transparent"
      )}
    >
      <div className="tops-container flex h-16 items-center justify-between gap-6 sm:h-20">
        <a href="#inicio" className="flex items-baseline gap-2">
          <span className="font-heading text-2xl font-bold uppercase tracking-[-0.04em] text-foreground sm:text-[28px]">
            TOPS
          </span>
          <span className="mono-label text-muted-foreground">Morelia</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mono-label text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-[2px] bg-primary px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Cotizar
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="tops-container flex flex-col py-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${CONTACT.telefonoRaw}`}
              className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary"
            >
              <Phone className="h-3.5 w-3.5" />
              {CONTACT.telefonoDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}