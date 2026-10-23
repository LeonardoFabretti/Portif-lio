import { useState, type ElementType, type ReactNode, type TransitionEvent } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

/** Faz o conteúdo surgir suavemente quando entra na tela. */
const Reveal = ({ children, className, delay = 0, as: Tag = "div" }: RevealProps) => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  // O atraso escalonado só vale para a entrada; depois sai, para o hover não ficar lento
  const [revealed, setRevealed] = useState(false);

  const handleTransitionEnd = (e: TransitionEvent) => {
    if (isVisible && e.target === e.currentTarget && e.propertyName === "opacity") setRevealed(true);
  };

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={revealed || !delay ? undefined : { transitionDelay: `${delay}ms` }}
      onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
