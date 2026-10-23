// Todo o conteúdo do portfólio fica aqui: textos, links e projetos.
// Para atualizar o site, normalmente basta editar este arquivo.
import {
  Atom,
  BarChart3,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Layers,
  LayoutDashboard,
  Linkedin,
  Mail,
  MonitorSmartphone,
  Sparkles,
  Triangle,
  Wind,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import pythonIcon from "@/assets/python.png";
import htmlIcon from "@/assets/html-5.png";
import cssIcon from "@/assets/css-3.png";
import javascriptIcon from "@/assets/javascript.png";

import sistemaFinanceiroImg from "@/assets/sistema-financeiro.png";
import sistemaReservasImg from "@/assets/sistema-reservas.png";
import sistemaAgendamentoImg from "@/assets/sistema-agendamento.png";
import cardapioImg from "@/assets/cardapio.png";

export const profile = {
  name: "Leonardo Fabretti",
  role: "Desenvolvedor Web & Automação",
  tagline: "Sites · Sistemas · Automação",
  email: "leonardofabretti3@gmail.com",
  whatsappNumber: "5511985347632",
};

export const whatsappLink = `https://wa.me/${profile.whatsappNumber}`;

export type SocialLink = {
  icon: LucideIcon;
  label: string;
  handle: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    handle: "LeonardoFabretti",
    href: "https://github.com/LeonardoFabretti",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "in/leonardo-fabretti",
    href: "https://www.linkedin.com/in/leonardo-fabretti-b87968369/?trk=opento_sprofile_goalscard",
  },
  {
    icon: Mail,
    label: "E-mail",
    handle: profile.email,
    href: `mailto:${profile.email}`,
  },
];

export const navLinks = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "processo", label: "Processo" },
  { id: "contato", label: "Contato" },
];

export const languages = [
  { name: "JavaScript", icon: javascriptIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "Python", icon: pythonIcon },
];

export type Tool = { name: string; icon: LucideIcon };

// A ordem importa: web e automação primeiro; Power BI fica no fim, só como menção.
export const tools: Tool[] = [
  { name: "Next.js", icon: Triangle },
  { name: "React", icon: Atom },
  { name: "TypeScript", icon: FileCode2 },
  { name: "Tailwind CSS", icon: Wind },
  { name: "n8n", icon: Workflow },
  { name: "IA generativa", icon: Sparkles },
  { name: "PostgreSQL", icon: Database },
  { name: "Prisma", icon: Layers },
  { name: "SQL", icon: Database },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "Power BI", icon: BarChart3 },
];

/** O que eu faço hoje (cartões da seção Sobre) */
export const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MonitorSmartphone,
    title: "Sites profissionais",
    description: "Sites e landing pages modernos, rápidos e responsivos, que passam confiança para quem visita.",
  },
  {
    icon: LayoutDashboard,
    title: "Sistemas web",
    description: "Sistemas sob medida, como agendamentos, reservas e painéis administrativos, do visual ao banco de dados.",
  },
  {
    icon: Workflow,
    title: "Automações",
    description: "Fluxos no n8n que integram sistemas, enviam relatórios sozinhos e eliminam tarefas repetitivas.",
  },
  {
    icon: Sparkles,
    title: "IA aplicada",
    description: "Agentes com IA que respondem perguntas e executam tarefas, até direto pelo WhatsApp.",
  },
];

export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  tags: string[];
  image: string;
  link: string;
  codeLink: string;
  /** "mobile" mostra o print dentro de um celular, "desktop" dentro de uma janela de navegador */
  frame: "desktop" | "mobile";
};

export const projects: Project[] = [
  {
    title: "Sistema Financeiro",
    summary:
      "Aplicativo web completo para controle financeiro pessoal: renda, gastos, metas de economia e a evolução mês a mês, tudo em um painel claro.",
    highlights: [
      "Resumo com total recebido, gasto e economizado",
      "Caixinhas, gráficos por categoria e histórico",
      "Comparação com o mês anterior e tema claro/escuro",
      "Exportar e importar os dados com um clique",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: sistemaFinanceiroImg,
    link: "https://leonardofabretti.github.io/Sistema-Financeiro/",
    codeLink: "https://github.com/LeonardoFabretti/Sistema-Financeiro",
    frame: "desktop",
  },
  {
    title: "Sistema de Agendamento",
    summary:
      "Agendamento de serviços com área do cliente e painel administrativo. Simula um fluxo real e pode ser adaptado para barbearias, clínicas e outros prestadores.",
    highlights: [
      "Cliente escolhe serviço, data e horário",
      "Painel admin com lista e status de cada agendamento",
      "Confirmação e cancelamento direto no dashboard",
      "Regras de negócio e código organizados por página",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: sistemaAgendamentoImg,
    link: "https://leonardofabretti.github.io/Sistema-de-Agendamento/",
    codeLink: "https://github.com/LeonardoFabretti/Sistema-de-Agendamento",
    frame: "desktop",
  },
  {
    title: "Sistema de Reservas",
    summary:
      "Sistema responsivo de reservas com dois contextos: hotel e aeroporto. Calcula valores e datas automaticamente e organiza tudo em um só lugar.",
    highlights: [
      "Reserva de quarto com hóspedes, noites e total em R$",
      "Check-out calculado automaticamente",
      "Painel de voos com companhia, portão e status",
      "Gestão e cancelamento das reservas feitas",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: sistemaReservasImg,
    link: "https://leonardofabretti.github.io/sistema-reservas/",
    codeLink: "https://github.com/LeonardoFabretti/sistema-reservas",
    frame: "desktop",
  },
  {
    title: "Cardápio Digital",
    summary:
      "Cardápio digital para restaurantes, pensado primeiro para o celular: o cliente acessa pelo QR Code da mesa e encontra tudo em poucos toques.",
    highlights: [
      "Navegação por categorias, de entradas a sobremesas",
      "Foto, descrição, porção e preço de cada prato",
      "Destaque para os pratos do dia",
      "Layout mobile-first e identidade visual elegante",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: cardapioImg,
    link: "https://leonardofabretti.github.io/cardapio/",
    codeLink: "https://github.com/LeonardoFabretti/cardapio",
    frame: "mobile",
  },
];

export const process = [
  {
    title: "Entendimento",
    description: "Conversa para entender o objetivo, o público e o que o projeto precisa entregar de verdade.",
  },
  {
    title: "Design",
    description: "Estrutura e visual pensados para serem bonitos, claros e fáceis de usar em qualquer tela.",
  },
  {
    title: "Desenvolvimento",
    description: "Código limpo e otimizado, com atenção a cada detalhe da experiência.",
  },
  {
    title: "Entrega",
    description: "Publicação, testes finais e ajustes, com o projeto no ar e pronto para crescer.",
  },
];
