import { languages, tools } from "@/data/portfolio";

export type TechItem = { name: string; image?: string; Icon?: (typeof tools)[number]["icon"] };

/** Tecnologias da faixa, na ordem em que aparecem. */
export const techItems: TechItem[] = [
  ...tools.slice(0, 5).map((tool) => ({ name: tool.name, Icon: tool.icon })),
  ...languages.map((lang) => ({ name: lang.name, image: lang.icon })),
  ...tools.slice(5).map((tool) => ({ name: tool.name, Icon: tool.icon })),
];

// Visual da pílula, compartilhado entre a faixa e as pílulas que "voam" da abertura até ela
export const techPillClass =
  "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/75";
