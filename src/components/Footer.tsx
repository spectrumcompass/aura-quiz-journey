const Footer = () => {
  return <footer className="bg-muted/50 border-t border-border py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
          <p className="text-sm text-muted-foreground">
            Feito por <span className="font-medium text-foreground">William Wendling Veiga e Carlos Fernando Collares</span>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;