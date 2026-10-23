import { useRef } from "react";
import { ArrowDown, ArrowRight, MessageCircle } from "lucide-react";
import CopyEmailButton from "@/components/CopyEmailButton";
import FlyingTech from "@/components/FlyingTech";
import TerminalCard from "@/components/TerminalCard";
import TopoBackground from "@/components/TopoBackground";
import { profile, socialLinks, whatsappLink } from "@/data/portfolio";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Luz roxa que acompanha o cursor (só em telas com mouse)
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="group/hero relative flex min-h-[100svh] items-center bg-gradient-hero pb-16 pt-28 sm:pt-32"
    >
      {/* Só o fundo é cortado: as pílulas de linguagens precisam sair da abertura e descer até a faixa */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <TopoBackground />
        <div
          className="absolute inset-0 hidden opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100 md:block"
          style={{
            background:
              "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 40%), hsl(var(--primary) / 0.12), transparent 60%)",
          }}
        />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      </div>

      <div className="container relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5 text-xs font-medium text-emerald-300 sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Disponível para novos projetos
              </span>
            </div>

            <h1 className="mt-7 animate-fade-in [animation-delay:100ms]">
              <span className="block text-lg font-medium text-muted-foreground sm:text-xl">Olá, eu sou</span>
              <span className="mt-2 block text-[2.6rem] font-extrabold leading-[1.05] text-white min-[400px]:text-5xl sm:text-6xl lg:text-7xl">
                Leonardo <span className="text-gradient">Fabretti</span>
              </span>
            </h1>

            <p className="mt-5 animate-fade-in font-display text-lg font-medium text-white/85 [animation-delay:200ms] sm:text-xl">
              {profile.role}
            </p>

            <p className="mx-auto mt-5 max-w-xl animate-fade-in text-base leading-relaxed text-muted-foreground [animation-delay:300ms] sm:text-lg lg:mx-0">
              Crio sites, sistemas web e automações com IA que deixam o seu negócio mais profissional e tiram o
              trabalho repetitivo do caminho.
            </p>

            <div className="mt-9 flex animate-fade-in flex-col items-stretch gap-3 [animation-delay:400ms] sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a
                href="#projetos"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:-translate-y-0.5 hover:bg-primary-glow sm:text-base"
              >
                Ver meus projetos
                <ArrowRight size={18} className="transition-smooth group-hover:translate-x-1" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-smooth hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 sm:text-base"
              >
                <MessageCircle size={18} className="text-primary" />
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-8 flex animate-fade-in flex-wrap items-center justify-center gap-3 [animation-delay:500ms] lg:justify-start">
              {socialLinks
                .filter((social) => !social.href.startsWith("mailto:"))
                .map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-smooth hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              <CopyEmailButton className="max-w-full" />
            </div>
          </div>

          {/* No lugar da foto: terminal que digita uma apresentação curta */}
          <div className="relative mx-auto w-full max-w-[480px] animate-fade-in [animation-delay:250ms]">
            <TerminalCard />
            <FlyingTech className="mt-8" />
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground transition-smooth hover:text-primary [@media(min-width:768px)_and_(min-height:860px)]:flex"
        aria-label="Rolar para a seção Sobre"
      >
        <span className="font-mono uppercase tracking-[0.2em]">Role</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
