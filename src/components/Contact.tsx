import { ArrowUpRight, MessageCircle } from "lucide-react";
import CopyEmailButton from "@/components/CopyEmailButton";
import Reveal from "@/components/Reveal";
import { socialLinks, whatsappLink } from "@/data/portfolio";

const Contact = () => (
  <section id="contato" className="relative py-24 sm:py-32">
    <div className="container max-w-6xl">
      <Reveal>
        <div className="border-gradient relative overflow-hidden rounded-3xl bg-gradient-card px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />
          <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[30rem] w-[56rem] max-w-[200%] -translate-x-1/2 bg-[radial-gradient(closest-side,hsl(var(--primary)/0.35),transparent)]" aria-hidden />

          <div className="relative">
            <p className="mb-4 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary sm:text-sm">
              <span>04</span>
              <span className="h-px w-8 bg-primary/60" aria-hidden />
              <span>Contato</span>
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl">
              Vamos construir <span className="text-gradient">algo juntos</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tem um projeto ou uma ideia em mente? Me chame no WhatsApp ou por e-mail e vamos conversar sobre como tirar
              isso do papel.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-smooth hover:-translate-y-0.5 hover:bg-primary-glow"
              >
                <MessageCircle size={20} className="transition-smooth group-hover:scale-110" />
                Conversar no WhatsApp
              </a>
              <CopyEmailButton className="justify-center rounded-xl px-6 py-4 text-base" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* 3 redes: uma linha de 3 no desktop; no tablet, 2 em cima e o e-mail ocupando a linha de baixo inteira */}
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 [&>li:last-child]:sm:col-span-2 [&>li:last-child]:lg:col-span-1">
        {socialLinks.map((social, index) => (
          <Reveal as="li" key={social.label} delay={index * 80}>
            <a
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex h-full items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-smooth hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/[0.05]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-smooth group-hover:bg-primary group-hover:text-white">
                <social.icon size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-white">{social.label}</span>
                <span className="block truncate text-sm text-muted-foreground">{social.handle}</span>
              </span>
              <ArrowUpRight size={18} className="shrink-0 text-muted-foreground transition-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default Contact;
