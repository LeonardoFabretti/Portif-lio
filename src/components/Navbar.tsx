import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks, socialLinks, whatsappLink } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.id);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setIsScrolled(window.scrollY > 24);
        setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fecha o menu com Esc e trava a rolagem da página enquanto ele está aberto
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMobileMenuOpen(false);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const closeOnDesktop = () => window.innerWidth >= 768 && setIsMobileMenuOpen(false);
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary-dark via-primary to-primary-glow"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <nav
          aria-label="Navegação principal"
          className={cn(
            "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border px-3 transition-all duration-500 sm:px-4",
            isScrolled || isMobileMenuOpen
              ? "border-white/10 bg-background/75 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <Logo />

          <ul className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] p-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={cn(
                    "relative block rounded-full px-4 py-1.5 text-sm transition-smooth",
                    active === link.id
                      ? "bg-primary/15 text-white"
                      : "text-muted-foreground hover:text-white",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow-sm transition-smooth hover:bg-primary-glow hover:shadow-glow md:inline-flex"
          >
            Vamos conversar
            <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-foreground transition-smooth hover:border-primary/50 hover:text-primary md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="menu-mobile"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Menu mobile */}
        <div
          id="menu-mobile"
          className={cn(
            "mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
            isMobileMenuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
          )}
        >
          <ul className="p-2">
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3.5 text-base transition-smooth",
                    active === link.id ? "bg-primary/10 text-white" : "text-muted-foreground hover:bg-white/[0.03] hover:text-white",
                  )}
                >
                  {link.label}
                  <span className="font-mono text-xs text-primary/70">0{index + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between gap-3 border-t border-white/10 p-4">
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-muted-foreground transition-smooth hover:border-primary/50 hover:text-primary"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)} aria-hidden />
      )}
    </>
  );
};

export default Navbar;
