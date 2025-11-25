import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, Users, Lightbulb, Heart, Sparkles, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import AuthButton from "@/components/AuthButton";
import LanguageSelector from "@/components/LanguageSelector";

const TestInfo = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-2 sm:top-4 right-2 sm:right-4 z-50 flex gap-2">
        <AuthButton />
        <LanguageSelector />
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-5xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 sm:mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Brain className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Entendendo o Espectro Autista
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma jornada para compreender a diversidade neurocognitiva e celebrar diferentes formas de processar o mundo
          </p>
        </div>

        {/* What is Autism */}
        <section className="mb-12 sm:mb-16">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                <Sparkles className="w-7 h-7 text-primary" />
                O Que É o Espectro Autista?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-base sm:text-lg">
                O Transtorno do Espectro Autista (TEA) é uma condição do neurodesenvolvimento que afeta a forma como uma pessoa percebe, processa e interage com o mundo ao seu redor. É chamado de "espectro" porque se manifesta de formas muito variadas em diferentes pessoas.
              </p>
              <p className="text-base sm:text-lg">
                Cada pessoa autista é única, com suas próprias forças, desafios, interesses e necessidades. Algumas podem precisar de apoio significativo no dia a dia, enquanto outras vivem de forma mais independente, mas todas compartilham diferenças na comunicação social e nos padrões de comportamento.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Main Characteristics Grid */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-foreground">
            Características Principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  Comunicação Social
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <p>• Dificuldade em entender sinais sociais não-verbais</p>
                <p>• Preferência por comunicação direta e literal</p>
                <p>• Desafios em manter conversas recíprocas</p>
                <p>• Diferentes formas de expressar emoções</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  Padrões de Comportamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <p>• Interesses intensos e específicos</p>
                <p>• Necessidade de rotinas e previsibilidade</p>
                <p>• Movimentos repetitivos (stimming)</p>
                <p>• Atenção detalhada a padrões e detalhes</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-3">
                  <Lightbulb className="w-6 h-6 text-success" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  Processamento Sensorial
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <p>• Sensibilidade aumentada ou reduzida a estímulos</p>
                <p>• Reações intensas a sons, luzes ou texturas</p>
                <p>• Preferências alimentares específicas</p>
                <p>• Necessidade de estímulos sensoriais específicos</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  Forças e Habilidades
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <p>• Atenção excepcional aos detalhes</p>
                <p>• Memória e concentração profundas</p>
                <p>• Pensamento lógico e sistemático</p>
                <p>• Criatividade e perspectivas únicas</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Understanding the Spectrum */}
        <section className="mb-12 sm:mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                <BookOpen className="w-7 h-7 text-primary" />
                Por Que "Espectro"?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-base sm:text-lg">
                O termo "espectro" reflete a enorme diversidade de como o autismo se manifesta. Não existe uma única forma de "ser autista" - cada pessoa está em um ponto único do espectro com suas próprias características.
              </p>
              <div className="bg-background/50 p-4 sm:p-6 rounded-lg space-y-3">
                <p className="font-semibold text-foreground">Níveis de Suporte:</p>
                <p><strong>Nível 1:</strong> Necessita de algum suporte em situações sociais específicas</p>
                <p><strong>Nível 2:</strong> Necessita de suporte substancial no dia a dia</p>
                <p><strong>Nível 3:</strong> Necessita de suporte muito substancial em várias áreas</p>
              </div>
              <p className="text-base sm:text-lg italic">
                É importante lembrar que o nível de suporte necessário não define o valor ou potencial de uma pessoa - apenas indica o tipo de apoio que pode ser benéfico.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Myths vs Facts */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-foreground">
            Mitos e Verdades
          </h2>
          <div className="space-y-4">
            <Card className="border-l-4 border-l-destructive/50">
              <CardContent className="pt-6">
                <p className="font-semibold text-destructive mb-2">❌ Mito: Pessoas autistas não sentem emoções</p>
                <p className="text-muted-foreground">✓ Verdade: Pessoas autistas sentem emoções profundamente, mas podem expressá-las de maneiras diferentes</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive/50">
              <CardContent className="pt-6">
                <p className="font-semibold text-destructive mb-2">❌ Mito: Todas as pessoas autistas têm habilidades extraordinárias</p>
                <p className="text-muted-foreground">✓ Verdade: Como todos, pessoas autistas têm diferentes talentos e habilidades - algumas podem ter habilidades excepcionais em áreas específicas, outras não</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive/50">
              <CardContent className="pt-6">
                <p className="font-semibold text-destructive mb-2">❌ Mito: O autismo pode ser "curado"</p>
                <p className="text-muted-foreground">✓ Verdade: O autismo é uma condição neurológica permanente. O foco deve estar em apoio, aceitação e desenvolvimento de habilidades</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive/50">
              <CardContent className="pt-6">
                <p className="font-semibold text-destructive mb-2">❌ Mito: Pessoas autistas preferem ficar sozinhas</p>
                <p className="text-muted-foreground">✓ Verdade: Muitas pessoas autistas desejam conexões sociais, mas podem precisar de abordagens diferentes de interação</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <CardContent className="pt-8 pb-8 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Quer Saber Mais Sobre Seu Perfil?
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Nossa avaliação baseada no modelo CDM pode ajudar você a entender melhor suas características e encontrar os recursos adequados.
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/assessment")}
                className="text-base sm:text-lg px-6 sm:px-8"
              >
                Iniciar Avaliação
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TestInfo;