import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { languages, services, tools } from "@/data/portfolio";

const About = () => (
  <section id="sobre" className="relative overflow-hidden py-24 sm:py-32">
    <div className="pointer-events-none absolute -left-40 top-20 h-[40rem] w-[40rem] -translate-y-40 bg-[radial-gradient(closest-side,hsl(var(--primary)/0.12),transparent)]" aria-hidden />

    <div className="container relative max-w-6xl">
      <SectionHeading
        index="01"
        eyebrow="Sobre mim"
        title={
          <>
            Tecnologia que resolve <span className="text-gradient">problemas reais</span>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Sou desenvolvedor apaixonado por tecnologia. Hoje crio{" "}
            <strong className="font-medium text-white">sites, sistemas web e automações com IA</strong> para negócios que
            querem uma presença digital profissional e menos trabalho manual no dia a dia.
          </p>
          <p>
            No desenvolvimento, tiro ideias do papel com{" "}
            <strong className="font-medium text-white">sites e sistemas web sob medida</strong>, do visual ao banco de dados,
            pensados para serem rápidos, responsivos e fáceis de usar.
          </p>
          <p>
            Também automatizo processos com <strong className="font-medium text-white">n8n e inteligência artificial</strong>:
            relatórios que chegam sozinhos no WhatsApp, agentes que respondem perguntas e integrações entre sistemas.
          </p>
        </Reveal>

        <Reveal delay={150} className="space-y-8">
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/60">Linguagens</h3>
            <ul className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-3 text-sm font-medium text-white/90 transition-smooth hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/[0.06]"
                >
                  <img src={lang.icon} alt="" className="h-6 w-6 object-contain" loading="lazy" />
                  {lang.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/60">Ferramentas</h3>
            <ul className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-3.5 py-1.5 text-sm text-primary-glow transition-smooth hover:border-primary/50 hover:bg-primary/15"
                >
                  <tool.icon size={14} className="shrink-0 text-primary" aria-hidden />
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal
            key={service.title}
            delay={index * 100}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-card p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(closest-side,hsl(var(--primary)/0.3),transparent)]" aria-hidden />
            <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-smooth group-hover:bg-primary group-hover:text-white">
              <service.icon size={20} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;
