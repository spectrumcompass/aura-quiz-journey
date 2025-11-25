import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className="bg-muted/50 border-t border-border py-8 mt-8">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido por <span className="font-medium text-foreground">William Wendling Veiga e Carlos Fernando Collares</span>
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Link 
              to="/test-info" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre o Espectro
            </Link>
            <span className="text-muted-foreground/30">•</span>
            <Link 
              to="/privacy" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidade
            </Link>
            <span className="text-muted-foreground/30">•</span>
            <Link 
              to="/auth" 
              className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              Acesso Pesquisador
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;