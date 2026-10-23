import TechPillContent from "@/components/TechPillContent";
import { techItems, techPillClass } from "@/lib/tech";

// Cada cópia da lista tem no mínimo a largura da tela; as duas andam juntas e,
// quando a primeira sai inteira pela esquerda, a segunda está exatamente no lugar dela.
// A pausa no hover vale só para mouse: no celular o toque deixaria o :hover "grudado" e a faixa parada.
const ItemList = () => (
  <ul className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-3 pr-3 will-change-transform [backface-visibility:hidden] [@media(hover:hover)]:group-hover:[animation-play-state:paused]">
    {techItems.map((item) => (
      <li key={item.name} className={techPillClass}>
        <TechPillContent item={item} />
      </li>
    ))}
  </ul>
);

/**
 * Faixa com as tecnologias rolando sem parar. Ela é "preenchida" da esquerda para a direita conforme
 * a variável --fill (0 a 1), que as pílulas da abertura atualizam ao rolar a página. Sem JS, fica cheia.
 */
const TechMarquee = () => (
  // Decorativa: as mesmas tecnologias estão listadas na seção Sobre, então o leitor de tela pula a faixa
  <div data-tech-band className="group relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-5" aria-hidden>
    <div className="flex" style={{ clipPath: "inset(0 calc((1 - var(--fill, 1)) * 100%) 0 0)" }}>
      <ItemList />
      <ItemList />
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
  </div>
);

export default TechMarquee;
