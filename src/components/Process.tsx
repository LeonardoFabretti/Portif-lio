import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { process } from "@/data/portfolio";

const Process = () => (
  <section id="processo" className="relative py-24 sm:py-32">
    <div className="container max-w-6xl">
      <SectionHeading
        index="03"
        eyebrow="Como eu trabalho"
        title={
          <>
            Do primeiro contato <span className="text-gradient">ao projeto no ar</span>
          </>
        }
        description="Um processo simples e transparente, para você saber exatamente o que acontece em cada etapa."
      />

      <div className="relative">
        <div
          className="pointer-events-none absolute left-0 right-0 top-[2.9rem] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
          aria-hidden
        />
        <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 120} className="relative">
              <div className="h-full rounded-2xl border border-white/[0.07] bg-background p-6 transition-smooth hover:border-primary/40">
                <span className="relative z-10 mb-6 grid h-11 w-11 place-items-center rounded-full border border-primary/40 bg-background font-mono text-sm font-medium text-primary shadow-glow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Process;
