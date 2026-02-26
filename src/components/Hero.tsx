import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Olá, eu sou{" "}
            <span className="text-primary text-glow">Leonardo Fabretti</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-2">
            Sou um desenvolvedor apaixonado por tecnologia, especializado em Inteligência Artificial, e criação de soluções inteligentes e front - end. Busco transformar ideias em experiências digitais únicas, unindo criatividade e precisão técnica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow transition-smooth group"
              onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver meus projetos
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-smooth" size={20} />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-smooth"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default Hero;
