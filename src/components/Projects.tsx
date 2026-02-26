import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import sistemaFinanceiroImg from "@/assets/sistema-financeiro.png";
import sistemaReservasImg from "@/assets/sistema-reservas.png";
import sistemaAgendamentoImg from "@/assets/sistema-agendamento.png";
import sistemaLoginImg from "@/assets/sistema-login.png";

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Sistema de Reservas",
      description: "Sistema web responsivo e interativo para gerenciamento de reservas de horários com dois contextos distintos: Hotel e Aeroporto.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: sistemaReservasImg,
      link: "https://leonardofabretti.github.io/sistema-reservas/",
      codeLink: "https://github.com/LeonardoFabretti/sistema-reservas",
    },
    {
      title: "💰 Sistema Financeiro",
      description: "É um aplicativo web moderno e completo para controle financeiro pessoal.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: sistemaFinanceiroImg,
      link: "https://leonardofabretti.github.io/Sistema-Financeiro/",
      codeLink: "https://github.com/LeonardoFabretti/Sistema-Financeiro",
    },
    {
      title: "Sistema de Agendamento",
      description: "Sistema web de agendamento com área de cliente e painel administrativo, desenvolvido para demonstrar lógica de negócio, organização de código e controle de status. O projeto simula um fluxo real de serviços, podendo ser adaptado para barbearias, clínicas ou outros prestadores de serviço.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: sistemaAgendamentoImg,
      link: "https://leonardofabretti.github.io/Sistema-de-Agendamento/",
      codeLink: "https://github.com/LeonardoFabretti/Sistema-de-Agendamento",
    },
    {
      title: "Sistema de Login",
      description: "Sistema de Autenticação Desenvolvido para mostrar funcionalidade de código Backend",
      tags: ["JavaScript", "HTML", "CSS", "PLpgSQL"],
      image: sistemaLoginImg,
      link: "https://leonardofabretti.github.io/Sistema-de-Login/",
      codeLink: "https://github.com/LeonardoFabretti/Sistema-de-Login",
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef}>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary text-glow transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            Projetos
          </h2>
          
          <div className={`h-1 w-20 bg-primary mx-auto mb-12 shadow-glow-sm transition-all duration-700 delay-150 ${titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          
          <p className={`text-center text-muted-foreground mb-16 max-w-2xl mx-auto transition-all duration-700 delay-300 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Confira alguns dos projetos que desenvolvi, demonstrando minhas habilidades em criar
            soluções digitais modernas e funcionais.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-700 group hover:shadow-glow ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 transition-smooth"
                    onClick={() => project.link && window.open(project.link, "_blank")}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver projeto
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 transition-smooth"
                    onClick={() => project.codeLink && window.open(project.codeLink, "_blank")}
                  >
                    <Github size={16} className="mr-2" />
                    Código
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
