import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5511985347632";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const socialLinks = [
    { icon: Github, href: "https://github.com/LeonardoFabretti", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/leonardo-fabretti-b87968369/?trk=opento_sprofile_goalscard", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/lelebs_5/", label: "Instagram" },
    { icon: Mail, href: "mailto:leonardofabretti3@gmail.com", label: "Email" },
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary text-glow">
            Contato
          </h2>
          
          <div className="h-1 w-20 bg-primary mx-auto mb-12 shadow-glow-sm" />
          
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tem um projeto em mente ou quer desenvolver algo? Entre em contato!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
              <div className="w-full max-w-md">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Entre em contato pelo WhatsApp
                </h3>
                <p className="text-muted-foreground mb-8">
                  Clique no botão abaixo e fale comigo diretamente pelo WhatsApp. Estou pronto para conversar sobre projetos, ideias e oportunidades!
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow transition-smooth group"
                  size="lg"
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={20} className="mr-2 group-hover:scale-110 transition-smooth" />
                    Abrir WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Conecte-se comigo
              </h3>
              
              <p className="text-muted-foreground mb-8 text-center md:text-left">
                Acompanhe meu trabalho e fique por dentro das novidades nas redes sociais.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gradient-card border border-border rounded-lg hover:border-primary transition-smooth hover:shadow-glow-sm group"
                  >
                    <social.icon className="text-primary group-hover:text-primary-glow transition-smooth" size={24} />
                    <span className="text-foreground group-hover:text-primary transition-smooth">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
