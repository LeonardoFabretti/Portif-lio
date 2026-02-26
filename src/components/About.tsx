import { Code2, Palette, Zap } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";
import pythonIcon from "@/assets/python.png";
import htmlIcon from "@/assets/html-5.png";
import cssIcon from "@/assets/css-3.png";
import javascriptIcon from "@/assets/javascript.png";
import csharpIcon from "@/assets/csharp.png";
import cppIcon from "@/assets/cpp.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const skills = [
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Criação de sites e aplicações web com código limpo e eficiente",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Interfaces modernas e intuitivas com foco em experiência do usuário",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização e velocidade para melhor experiência digital",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background relative overflow-hidden">
      {/* Animated lights */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-primary-glow/10 rounded-full blur-[100px] animate-float-slow-delayed" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div ref={titleRef}>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary text-glow transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              Sobre mim
            </h2>
            
            <div className={`h-1 w-20 bg-primary mx-auto mb-12 shadow-glow-sm transition-all duration-700 delay-150 ${titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          </div>
          
          <div ref={profileRef} className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className={`relative group transition-all duration-700 ${profileVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-75 group-hover:opacity-100 blur transition-smooth" />
              <img
                src={profileImage}
                alt="Leonardo Fabretti"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-card shadow-glow transition-smooth group-hover:scale-105"
              />
            </div>
            
            <div className={`flex-1 text-center md:text-left transition-all duration-700 delay-200 ${profileVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <p className="text-lg text-muted-foreground mb-6">
                Sou um desenvolvedor apaixonado por tecnologia e inteligência artificial, especializado na criação de sites modernos e interfaces funcionais. Busco transformar ideias em experiências digitais únicas, combinando design elegante, código de qualidade e soluções inteligentes baseadas em IA.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                Tenho experiência com HTML, CSS, JavaScript e Python. Também exploro o uso de IAs para acelerar o desenvolvimento, como criação de layouts, automação de tarefas e geração de código otimizado.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {[
                  { name: "Python", icon: pythonIcon },
                  { name: "HTML", icon: htmlIcon },
                  { name: "CSS", icon: cssIcon },
                  { name: "C++", icon: cppIcon },
                  { name: "JavaScript", icon: javascriptIcon },
                  { name: "C#", icon: csharpIcon }
                ].map((lang) => (
                  <div
                    key={lang.name}
                    className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-primary font-medium hover:bg-primary/20 hover:border-primary/40 transition-smooth flex items-center gap-2"
                  >
                    <img src={lang.icon} alt={lang.name} className="w-5 h-5 object-contain" />
                    {lang.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`bg-gradient-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-700 hover:shadow-glow group ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <skill.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
