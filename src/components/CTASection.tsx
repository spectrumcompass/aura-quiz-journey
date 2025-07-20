import { Button } from "@/components/ui/button";
import { ArrowRight, Play, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-foreground/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Pronto para começar sua jornada de autoconhecimento?
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            Explore suas características através de perguntas reflexivas. Lembre-se: esta é apenas uma 
            ferramenta de entretenimento e autoconhecimento, sem qualquer validade científica ou diagnóstica.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={() => navigate("/assessment")}
              className="text-lg px-8 py-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-strong"
            >
              <Play className="mr-2 w-5 h-5" />
              Iniciar Avaliação Agora
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <FileText className="mr-2 w-5 h-5" />
              Ver Exemplo de Relatório
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                ∞
              </div>
              <div className="text-primary-foreground/80">
                Reflexões Possíveis
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                15min
              </div>
              <div className="text-primary-foreground/80">
                Tempo Médio
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                100%
              </div>
              <div className="text-primary-foreground/80">
                Apenas Entretenimento
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;