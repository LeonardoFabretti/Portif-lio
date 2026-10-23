import { ArrowUp } from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks, socialLinks } from "@/data/portfolio";

const Footer = () => (
  <footer className="border-t border-white/[0.07] bg-black/40">
    <div className="container max-w-6xl py-12">
      {/* No celular e tablet fica tudo centralizado; no desktop, logo, links e redes numa linha */}
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
        <Logo />

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap items-center justify-center gap-y-2 text-sm sm:gap-x-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block rounded-full px-2.5 py-1.5 text-muted-foreground transition-smooth hover:bg-white/[0.04] hover:text-white sm:px-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-muted-foreground transition-smooth hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col-reverse items-center justify-between gap-6 border-t border-white/[0.07] pt-8 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} Leonardo Fabretti. Todos os direitos reservados.
        </p>
        <a
          href="#inicio"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition-smooth hover:border-primary/50 hover:text-white"
        >
          Voltar ao topo
          <ArrowUp size={15} className="transition-smooth group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
