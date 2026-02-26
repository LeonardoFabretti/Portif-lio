const Footer = () => {
  return (
    <footer className="bg-secondary py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Leonardo Fabretti — Todos os direitos reservados.
          </p>
          
          <p className="text-sm text-muted-foreground/70 mt-2">
            Desenvolvido com{" "}
            <span className="text-primary">♥</span>{" "}
            e tecnologia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
