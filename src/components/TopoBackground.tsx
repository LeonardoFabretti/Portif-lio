import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Point = [number, number];

/**
 * Um anel "topográfico": círculo deformado por algumas ondas, fechado com curvas suaves.
 * Tudo é calculado de forma fixa (sem aleatório), então o desenho é sempre o mesmo.
 */
const ring = (cx: number, cy: number, radius: number, seed: number) => {
  const count = 24;
  const points: Point[] = Array.from({ length: count }, (_, k) => {
    const angle = (k / count) * Math.PI * 2;
    const wobble =
      1 + 0.14 * Math.sin(3 * angle + seed) + 0.08 * Math.sin(5 * angle + seed * 1.7) + 0.05 * Math.sin(2 * angle - seed * 0.6);
    return [cx + Math.cos(angle) * radius * wobble, cy + Math.sin(angle) * radius * wobble * 0.82];
  });

  const f = (n: number) => Math.round(n);
  let d = `M${f(points[0][0])} ${f(points[0][1])}`;
  // Catmull-Rom convertido em curvas de Bézier, para o contorno ficar liso
  for (let i = 0; i < count; i++) {
    const p0 = points[(i - 1 + count) % count];
    const p1 = points[i];
    const p2 = points[(i + 1) % count];
    const p3 = points[(i + 2) % count];
    const c1: Point = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: Point = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return `${d}Z`;
};

// Cada "morro" é um conjunto de anéis em volta do mesmo centro; o seed muda um pouco a cada anel
const hill = (cx: number, cy: number, start: number, step: number, rings: number, seed: number) =>
  Array.from({ length: rings }, (_, i) => ring(cx, cy, start + i * step, seed + i * 0.32));

const topRight = hill(700, 120, 26, 30, 13, 0.4);
const bottomLeft = hill(100, 690, 22, 28, 12, 2.1);

type Size = { w: number; h: number };

type ContoursProps = {
  paths: string[];
  /** Canto onde o morro fica preso: "top-right" ou "bottom-left" (igual ao preserveAspectRatio do SVG) */
  corner: "top-right" | "bottom-left";
  size: Size;
  /** Atraso inicial dos impulsos, em segundos, para os morros não acenderem juntos */
  offset: number;
  /** Índices dos anéis que recebem impulsos de luz — poucos, para ficar leve e espontâneo */
  pulseRings: number[];
};

const Contours = ({ paths, corner, size, offset, pulseRings }: ContoursProps) => {
  const align = corner === "top-right" ? "xMaxYMin slice" : "xMinYMax slice";
  // Mesma escala e posição que o SVG usa com "slice", para os impulsos caírem em cima das linhas
  const scale = Math.max(size.w / 800, size.h / 800);
  const x = corner === "top-right" ? size.w - 800 * scale : 0;
  const y = corner === "top-right" ? 0 : size.h - 800 * scale;

  return (
  <div className="absolute inset-0 animate-topo-drift">
    <svg viewBox="0 0 800 800" preserveAspectRatio={align} className="absolute inset-0 h-full w-full" fill="none">
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="hsl(var(--primary))"
          strokeOpacity={i % 4 === 0 ? 0.3 : 0.14}
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>

    {/* Impulsos: um ponto de luz que desliza pelo contorno (offset-path), como um sinal entre neurônios.
        Só o ponto se move; o fundo não é redesenhado a cada quadro. */}
    {size.w > 0 && (
      <div
        className="absolute left-0 top-0 h-[800px] w-[800px] origin-top-left"
        style={{ transform: `translate(${x}px, ${y}px) scale(${scale})` }}
      >
        {pulseRings.filter((i) => paths[i]).map((i, n) => (
          <span
            key={i}
            className="topo-spark"
            style={{
              offsetPath: `path("${paths[i]}")`,
              // Lentos e espaçados: cada impulso leva ~10s para correr e depois descansa
              animationDuration: `${16 + n * 3}s`,
              animationDelay: `${offset + n * 7}s`,
              animationDirection: n % 2 ? "reverse" : "normal",
            }}
          />
        ))}
      </div>
    )}
  </div>
  );
};

type TopoBackgroundProps = {
  className?: string;
  /** "both": morros no canto superior direito e inferior esquerdo; "right": só no superior direito */
  variant?: "both" | "right";
};

/**
 * Fundo de linhas topográficas (curvas de nível) que se mexe bem devagar, com alguns impulsos de luz
 * correndo pelas linhas. Tudo pausa quando o fundo sai da tela, para não gastar processamento à toa.
 */
const TopoBackground = ({ className, variant = "both" }: TopoBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<Size>({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Mede já na montagem (o ResizeObserver só avisa depois do primeiro desenho) e acompanha mudanças
    setSize({ w: el.clientWidth, h: el.clientHeight });
    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize((prev) => (prev.w === width && prev.h === height ? prev : { w: width, h: height }));
    });
    resizeObserver.observe(el);
    const visibility = new IntersectionObserver(([entry]) => el.classList.toggle("topo-paused", !entry.isIntersecting));
    visibility.observe(el);
    return () => {
      resizeObserver.disconnect();
      visibility.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <Contours paths={topRight} corner="top-right" size={size} offset={1} pulseRings={variant === "both" ? [3, 9] : [5]} />
      {variant === "both" && <Contours paths={bottomLeft} corner="bottom-left" size={size} offset={5} pulseRings={[4, 10]} />}
    </div>
  );
};

export default TopoBackground;
