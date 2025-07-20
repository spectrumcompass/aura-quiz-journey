import { Card } from "@/components/ui/card";
import { Brain, Heart, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            O que é a Avaliação do Espectro Autista?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nossa avaliação é baseada em critérios científicos reconhecidos internacionalmente. 
            Ela não substitui um diagnóstico profissional, mas pode ajudar você a entender melhor 
            suas características e decidir se deve buscar uma avaliação clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-3 text-foreground">Comunicação Social</h3>
            <p className="text-sm text-muted-foreground">
              Avalia padrões de interação social e comunicação
            </p>
          </Card>

          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-semibold mb-3 text-foreground">Comportamentos</h3>
            <p className="text-sm text-muted-foreground">
              Identifica padrões repetitivos e interesses específicos
            </p>
          </Card>

          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Heart className="w-8 h-8 text-success" />
            </div>
            <h3 className="font-semibold mb-3 text-foreground">Sensibilidades</h3>
            <p className="text-sm text-muted-foreground">
              Avalia sensibilidades sensoriais e ambientais
            </p>
          </Card>

          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Lightbulb className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="font-semibold mb-3 text-foreground">Autoconhecimento</h3>
            <p className="text-sm text-muted-foreground">
              Promove maior compreensão sobre si mesmo
            </p>
          </Card>
        </div>

        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 shadow-soft">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Por que fazer esta avaliação?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold mb-3 text-foreground">✓ Autoconhecimento</h4>
                <p className="text-muted-foreground mb-4">
                  Entenda melhor suas características únicas e padrões comportamentais.
                </p>
                
                <h4 className="font-semibold mb-3 text-foreground">✓ Orientação Profissional</h4>
                <p className="text-muted-foreground">
                  Receba orientações sobre quando buscar avaliação clínica especializada.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-foreground">✓ Recursos e Apoio</h4>
                <p className="text-muted-foreground mb-4">
                  Acesse informações e recursos relevantes para seu perfil.
                </p>
                
                <h4 className="font-semibold mb-3 text-foreground">✓ Comunidade</h4>
                <p className="text-muted-foreground">
                  Conecte-se com outros que compartilham experiências similares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;