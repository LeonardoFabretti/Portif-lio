import { useEffect, useRef } from "react";
import TechPillContent from "@/components/TechPillContent";
import { techItems, techPillClass, type TechItem } from "@/lib/tech";
import { cn } from "@/lib/utils";

const FLYING = ["JavaScript", "TypeScript", "React", "HTML", "CSS", "Python"];
const items = FLYING.map((name) => techItems.find((item) => item.name === name)).filter(
  (item): item is TechItem => Boolean(item),
);

/** Posição do elemento na página, sem contar transforms (offsetTop/Left ignoram translate/rotate). */
const pagePosition = (el: HTMLElement) => {
  let x = 0;
  let y = 0;
  for (let node: HTMLElement | null = el; node; node = node.offsetParent as HTMLElement | null) {
    x += node.offsetLeft;
    y += node.offsetTop;
  }
  return { x, y };
};

const clamp = (n: number) => Math.min(1, Math.max(0, n));
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Pílulas de linguagens embaixo do terminal. Ao rolar a página, cada uma desce girando até um lugar
 * na faixa de tecnologias ([data-tech-band]) e a faixa vai sendo preenchida. Depois de pousar, ficam na faixa.
 */
const FlyingTech = ({ className }: { className?: string }) => {
  const chipRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const band = document.querySelector<HTMLElement>("[data-tech-band]");
    const chips = chipRefs.current.filter((chip): chip is HTMLLIElement => Boolean(chip));
    if (!band || !chips.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let offsets: { dx: number; dy: number }[] = [];
    let start = 0;
    let end = 1;
    let finalScale = 0.88;
    let arcSize = 40;
    let finished = false;

    // Depois que as pílulas pousam, elas ficam na faixa de vez: só recarregando a página a animação volta
    const finish = () => {
      finished = true;
      stop();
      band.style.setProperty("--fill", "1");
      chips.forEach((chip) => {
        chip.style.transform = "";
        chip.style.opacity = "0";
      });
    };

    // Chamado direto no scroll: o navegador já dispara esse evento uma vez por quadro
    const update = () => {
      if (finished) return;
      if (reduceMotion.matches) {
        chips.forEach((chip) => {
          chip.style.transform = "";
          chip.style.opacity = "";
        });
        band.style.setProperty("--fill", "1");
        return;
      }

      const p = clamp((window.scrollY - start) / (end - start));
      if (p >= 1) {
        finish();
        return;
      }
      const eased = easeInOut(p);
      chips.forEach((chip, i) => {
        const offset = offsets[i];
        if (!offset) return;
        const dir = i % 2 ? 1 : -1;
        const arc = Math.sin(p * Math.PI) * arcSize * dir; // leve curva no caminho
        const scale = 1 - (1 - finalScale) * eased;
        chip.style.transform = `translate3d(${(offset.dx * eased + arc).toFixed(1)}px, ${(offset.dy * eased).toFixed(1)}px, 0) rotate(${(360 * eased * dir).toFixed(1)}deg) scale(${scale.toFixed(3)})`;
        // No fim do caminho a pílula some e a faixa (já preenchida) assume o lugar
        chip.style.opacity = String(clamp(1 - (p - 0.86) / 0.14));
      });
      // A faixa só começa a encher quando as pílulas estão chegando, para não embolar com elas no caminho
      band.style.setProperty("--fill", String(clamp((p - 0.7) / 0.3)));
    };

    const measure = () => {
      if (finished) return;
      const bandPos = pagePosition(band);
      const width = band.offsetWidth;
      const narrow = width < 640;
      const margin = width * (narrow ? 0.04 : 0.12); // fora das bordas esmaecidas da faixa
      const targetY = bandPos.y + band.offsetHeight / 2;
      // No celular as pílulas encolhem mais e fazem uma curva menor, para nada sair da tela
      finalScale = narrow ? 0.7 : 0.88;
      arcSize = narrow ? 14 : 40;

      offsets = chips.map((chip, i) => {
        const pos = pagePosition(chip);
        const half = (chip.offsetWidth * finalScale) / 2;
        const slot = bandPos.x + margin + ((width - margin * 2) * (i + 0.5)) / chips.length;
        const targetX = Math.min(Math.max(slot, bandPos.x + 8 + half), bandPos.x + width - 8 - half);
        return {
          dx: targetX - (pos.x + chip.offsetWidth / 2),
          dy: targetY - (pos.y + chip.offsetHeight / 2),
        };
      });

      // Começa quando as pílulas estão à vista e termina com a faixa a 60% da altura da tela
      const firstChipY = Math.min(...chips.map((chip) => pagePosition(chip).y));
      start = Math.max(0, firstChipY - window.innerHeight * 0.85);
      end = Math.max(start + 160, targetY - window.innerHeight * 0.6);
      update();
    };

    // Imagens e fontes mudam a altura da página depois do primeiro desenho
    const resizeObserver = new ResizeObserver(() => measure());
    function stop() {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
      reduceMotion.removeEventListener("change", update);
      resizeObserver.disconnect();
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    reduceMotion.addEventListener("change", update);
    resizeObserver.observe(document.body);
    document.fonts?.ready.then(measure).catch(() => undefined);
    measure();

    return () => {
      stop();
      band.style.removeProperty("--fill");
    };
  }, []);

  return (
    // Decorativa: as mesmas tecnologias estão listadas na seção Sobre
    <ul className={cn("flex flex-wrap items-center justify-center gap-2.5", className)} aria-hidden>
      {items.map((item, i) => (
        <li
          key={item.name}
          ref={(el) => {
            chipRefs.current[i] = el;
          }}
          className={cn(techPillClass, "bg-[#111] will-change-transform")}
        >
          <TechPillContent item={item} />
        </li>
      ))}
    </ul>
  );
};

export default FlyingTech;
