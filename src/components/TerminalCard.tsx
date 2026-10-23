import { useEffect, useState } from "react";
import { profile, tools } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Line = { kind: "cmd"; text: string } | { kind: "out"; text: string; tone?: "strong" | "status" };

const PROMPT = "leo@portfolio:~$";
const STATUS = "disponível para novos projetos";

// Os 6 primeiros itens da stack (Power BI fica de fora)
const stack = tools
  .filter((tool) => tool.name !== "Power BI")
  .slice(0, 6)
  .map((tool) => tool.name);

const LINES: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: profile.name, tone: "strong" },
  { kind: "out", text: profile.tagline.toLowerCase() },
  { kind: "cmd", text: "cat stack.txt" },
  { kind: "out", text: stack.join(" · ") },
  { kind: "cmd", text: "status" },
  { kind: "out", text: STATUS, tone: "status" },
];

const ARIA_LABEL = `Terminal com uma apresentação: ${profile.name}, ${profile.tagline.toLowerCase()}. Stack: ${stack.join(", ")}. Status: ${STATUS}.`;

// Tempos da digitação (ms)
const TYPE_MS = 60;
const START_MS = 700;
const BEFORE_CMD_MS = 450;
const AFTER_CMD_MS = 280;
const LINE_MS = 170;

type Progress = { line: number; char: number };
const START: Progress = { line: 0, char: 0 };
const DONE: Progress = { line: LINES.length, char: 0 };

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const prefersReducedMotion = () => typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION).matches;

/** Janela de terminal que digita uma apresentação curta. Com movimento reduzido, já abre no estado final. */
const TerminalCard = ({ className }: { className?: string }) => {
  const [progress, setProgress] = useState<Progress>(() => (prefersReducedMotion() ? DONE : START));
  const done = progress.line >= LINES.length;

  // Se a pessoa ativar "reduzir movimento" no meio da animação, pula para o final
  useEffect(() => {
    const query = window.matchMedia(REDUCED_MOTION);
    const handleChange = (e: MediaQueryListEvent) => e.matches && setProgress(DONE);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  // Um passo por vez: cada letra do comando, depois cada linha de saída
  useEffect(() => {
    if (done) return;
    const { line, char } = progress;
    const current = LINES[line];
    let delay = LINE_MS;
    let next: Progress = { line: line + 1, char: 0 };

    if (current.kind === "cmd") {
      if (char < current.text.length) {
        delay = char > 0 ? TYPE_MS : line === 0 ? START_MS : BEFORE_CMD_MS;
        next = { line, char: char + 1 };
      } else {
        delay = AFTER_CMD_MS;
      }
    }

    const timer = window.setTimeout(() => setProgress(next), delay);
    return () => window.clearTimeout(timer);
  }, [progress, done]);

  return (
    <div
      role="img"
      aria-label={ARIA_LABEL}
      className={cn("w-full min-w-0 border-2 border-foreground bg-background shadow-brutal", className)}
    >
      <div aria-hidden="true">
        <div className="flex items-center gap-3 border-b-2 border-foreground px-3 py-2.5 sm:px-4">
          <span className="flex shrink-0 gap-1.5">
            <span className="h-2.5 w-2.5 bg-primary" />
            <span className="h-2.5 w-2.5 bg-foreground" />
            <span className="h-2.5 w-2.5 border border-foreground" />
          </span>
          <span className="min-w-0 flex-1 truncate text-center font-mono text-xs text-muted-foreground">
            leo@portfolio — zsh
          </span>
          {/* Espaço do mesmo tamanho dos quadradinhos, para o título ficar centralizado */}
          <span className="w-[42px] shrink-0" />
        </div>

        {/* Todas as linhas já ocupam espaço desde o início (invisíveis): a caixa não cresce durante a digitação */}
        <div className="px-4 py-5 font-mono text-[13px] leading-relaxed sm:px-6 sm:py-6 sm:text-sm">
          {LINES.map((line, i) => {
            const active = i === progress.line;
            const reached = i < progress.line || (active && line.kind === "cmd");

            if (line.kind === "cmd") {
              const typing = active && progress.char < line.text.length;
              return (
                <p key={i} className={cn("whitespace-pre-wrap break-words", i > 0 && "mt-4", !reached && "invisible")}>
                  <span className="text-primary">{PROMPT}</span>{" "}
                  <span className="text-foreground">{active ? line.text.slice(0, progress.char) : line.text}</span>
                  {/* Cursor fixo enquanto digita, piscando na pausa */}
                  {active && <span className={cn("cursor-block ml-0.5", typing && progress.char > 0 && "animate-none")} />}
                </p>
              );
            }

            return (
              <p
                key={i}
                className={cn(
                  "mt-1 whitespace-pre-wrap break-words",
                  line.tone ? "text-foreground" : "text-muted-foreground",
                  !reached && "invisible",
                )}
              >
                {line.tone === "status" && <span className="text-emerald-400">● </span>}
                {line.text}
              </p>
            );
          })}

          <p className={cn("mt-4 whitespace-pre-wrap break-words", !done && "invisible")}>
            <span className="text-primary">{PROMPT}</span> <span className="cursor-block" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerminalCard;
