import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Monograma "LF": o L sobe e vira o F numa linha só, com um cursor piscando no canto.
 * Os arquivos da logo para usar fora do site ficam em public/brand.
 */
export const LogoMark = ({ className }: { className?: string }) => {
  const id = useId();

  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("h-9 w-9", className)} aria-hidden>
      <defs>
        <linearGradient id={`${id}-bg`} x1="6" y1="2" x2="58" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A78BFA" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#5322C3" />
        </linearGradient>
        <linearGradient id={`${id}-shine`} x1="32" y1="0" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.22" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill={`url(#${id}-bg)`} />
      <rect width="64" height="64" rx="18" fill={`url(#${id}-shine)`} />
      <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="17.25" stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="1.5" />
      <path d="M17 17V47H31V17H47M31 31H42" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="39" y="41" width="8" height="6" rx="1.5" fill="#DDD6FE" className="animate-blink" />
    </svg>
  );
};

const Logo = ({ className }: { className?: string }) => (
  <a href="#inicio" className={cn("group flex items-center gap-2.5", className)} aria-label="Leonardo Fabretti, voltar ao início">
    <LogoMark className="shrink-0 drop-shadow-[0_0_12px_hsl(var(--primary)/0.35)] transition-smooth group-hover:drop-shadow-[0_0_18px_hsl(var(--primary)/0.6)]" />
    <span className="font-display text-[15px] font-semibold leading-none tracking-tight text-white">
      Leonardo <span className="text-white/60">Fabretti</span>
    </span>
  </a>
);

export default Logo;
