import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

const SectionHeading = ({ index, eyebrow, title, description, align = "left" }: SectionHeadingProps) => (
  <Reveal className={cn("mb-12 md:mb-16", align === "center" && "mx-auto max-w-2xl text-center")}>
    <p
      className={cn(
        "mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary sm:text-sm",
        align === "center" && "justify-center",
      )}
    >
      <span>{index}</span>
      <span className="h-px w-8 bg-primary/60" aria-hidden />
      <span>{eyebrow}</span>
    </p>
    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
    {description && (
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
    )}
  </Reveal>
);

export default SectionHeading;
