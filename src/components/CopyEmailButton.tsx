import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type CopyEmailButtonProps = {
  className?: string;
  showEmail?: boolean;
};

/** Copia o e-mail e mostra a confirmação no próprio botão. */
const CopyEmailButton = ({ className, showEmail = true }: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "group inline-flex min-w-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-foreground transition-smooth hover:border-primary/50 hover:bg-primary/10",
        className,
      )}
      aria-live="polite"
    >
      {copied ? (
        <Check size={16} className="shrink-0 text-emerald-400" />
      ) : (
        <Copy size={16} className="shrink-0 text-primary transition-smooth group-hover:scale-110" />
      )}
      <span className="truncate">{copied ? "E-mail copiado!" : showEmail ? profile.email : "Copiar e-mail"}</span>
    </button>
  );
};

export default CopyEmailButton;
