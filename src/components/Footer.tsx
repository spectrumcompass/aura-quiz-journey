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
          <Link 
            to="/auth" 
            className="inline-block text-xs text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors mt-4"
            aria-label="Acesso pesquisador"
          >
            •
          </Link>
        </div>
      </div>
    </footer>;
};
export default Footer;