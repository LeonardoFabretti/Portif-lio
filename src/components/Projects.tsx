import { ArrowUpRight, Check, Github } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TopoBackground from "@/components/TopoBackground";
import { projects, socialLinks, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const githubProfile = socialLinks.find((social) => social.label === "GitHub")!;

const displayUrl = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/** Print do projeto dentro de uma janela de navegador ou de um celular. */
const ProjectPreview = ({ project }: { project: Project }) => {
  if (project.frame === "mobile") {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-primary/15 via-card to-card px-6 py-10">
        <TopoBackground variant="right" className="opacity-70" />
        <div className="relative w-[190px] rounded-[2rem] border border-white/15 bg-black p-2 shadow-2xl transition-smooth duration-500 group-hover:-translate-y-2 group-hover:rotate-[-2deg] sm:w-[220px]">
          <div className="absolute left-1/2 top-3.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" aria-hidden />
          <img
            src={project.image}
            alt={`Tela do projeto ${project.title}`}
            className="aspect-[9/17] w-full rounded-[1.5rem] object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-card shadow-2xl">
      <div className="flex items-center gap-3 border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 text-center font-mono text-[11px] text-muted-foreground">
          {displayUrl(project.link)}
        </div>
      </div>
      <div className="relative overflow-hidden bg-background">
        <img
          src={project.image}
          alt={`Tela do projeto ${project.title}`}
          className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
            decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-smooth group-hover:opacity-100" />
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projetos" className="relative bg-gradient-hero py-24 sm:py-32">
    <div className="container max-w-6xl">
      <SectionHeading
        index="02"
        eyebrow="Projetos"
        title={
          <>
            Projetos em <span className="text-gradient">destaque</span>
          </>
        }
        description="Uma seleção de sistemas que desenvolvi do zero. Todos estão publicados e com o código aberto no GitHub."
      />

      <div className="space-y-20 sm:space-y-28">
        {projects.map((project, index) => {
          const reversed = index % 2 === 1;
          return (
            <article
              key={project.title}
              className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <Reveal className={cn("lg:col-span-7", reversed && "lg:order-2")}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block rounded-2xl"
                  aria-label={`Abrir ${project.title} em uma nova aba`}
                >
                  <div className="absolute -inset-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(closest-side,hsl(var(--primary)/0.18),transparent)]" aria-hidden />
                  <div className="relative">
                    <ProjectPreview project={project} />
                  </div>
                </a>
              </Reveal>

              <Reveal delay={120} className={cn("lg:col-span-5", reversed && "lg:order-1")}>
                <p className="mb-3 font-mono text-sm text-primary">
                  {String(index + 1).padStart(2, "0")} <span className="text-white/30">/ {String(projects.length).padStart(2, "0")}</span>
                </p>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>

                <ul className="mt-6 space-y-2.5">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-white/70">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-smooth hover:bg-primary-glow hover:shadow-glow"
                  >
                    Ver projeto
                    <ArrowUpRight size={16} className="transition-smooth group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-smooth hover:border-primary/60 hover:bg-primary/10"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </Reveal>
            </article>
          );
        })}
      </div>

      <Reveal className="mt-24">
        <a
          href={githubProfile.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-smooth hover:border-primary/40 hover:bg-primary/[0.05] sm:flex-row sm:items-center sm:p-8"
        >
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/[0.05] text-white ring-1 ring-white/10">
              <Github size={22} />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-white">Quer ver mais?</p>
              <p className="text-sm text-muted-foreground">Outros projetos e estudos estão no meu GitHub.</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            github.com/{githubProfile.handle}
            <ArrowUpRight size={16} className="transition-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </Reveal>
    </div>
  </section>
);

export default Projects;
