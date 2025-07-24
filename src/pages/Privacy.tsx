import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao início
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg mb-6">
            Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Informações que Coletamos</h2>
          <p>
            Não coletamos informações pessoais identificáveis. Nosso questionário é completamente anônimo e confidencial.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies e Tecnologias Similares</h2>
          <p>
            Utilizamos cookies para melhorar sua experiência e para fins de publicidade através do Google AdSense.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Publicidade</h2>
          <p>
            Este site utiliza o Google AdSense para exibir anúncios. O Google pode usar cookies para servir anúncios baseados em suas visitas anteriores a este e outros sites.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Seus Direitos</h2>
          <p>
            Você pode optar por não receber anúncios personalizados visitando as Configurações de Anúncios do Google.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contato</h2>
          <p>
            Para questões sobre esta política de privacidade, entre em contato conosco.
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;