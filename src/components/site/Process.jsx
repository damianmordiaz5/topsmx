import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Revisamos tu vehículo, el uso que le das y tus objetivos para definir el proyecto ideal.",
  },
  {
    number: "02",
    title: "Selección de equipo",
    text: "Elegimos rines, llantas, refacciones y accesorios compatibles con tu auto y tu presupuesto.",
  },
  {
    number: "03",
    title: "Instalación",
    text: "Montaje, alineación, balanceo e integración de audio, luces y alarmas en nuestro taller.",
  },
  {
    number: "04",
    title: "Prueba y entrega",
    text: "Verificamos el resultado y te entregamos el auto listo, con recomendaciones de mantenimiento.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="section-shell scroll-mt-20 bg-card">
      <div className="tops-container">
        <Reveal>
          <p className="mono-label text-primary">Proceso</p>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl font-bold uppercase leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            Así trabajamos tu proyecto
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-border">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.05}>
              <div className="grid grid-cols-1 gap-4 border-b border-border py-8 sm:grid-cols-[80px_1fr_1.2fr] sm:gap-8 sm:py-10">
                <span className="font-mono text-sm tracking-[0.2em] text-primary">{step.number}</span>
                <h3 className="font-heading text-xl font-semibold uppercase tracking-[-0.02em] text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}