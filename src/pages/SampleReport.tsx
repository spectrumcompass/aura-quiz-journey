import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import { CDMRadarChart } from '@/components/CDMRadarChart';
import Footer from '@/components/Footer';

const SampleReport = () => {
  // Dados de exemplo para o relatório no formato correto
  const sampleAttributeProbabilities = [
    { attributeId: 'social_communication', probability: 0.58, questionsAnswered: 5, traitAlignedAnswers: 3 },
    { attributeId: 'social_reciprocity', probability: 0.62, questionsAnswered: 5, traitAlignedAnswers: 3 },
    { attributeId: 'sensory_processing', probability: 0.75, questionsAnswered: 5, traitAlignedAnswers: 4 },
    { attributeId: 'restricted_interests', probability: 0.82, questionsAnswered: 5, traitAlignedAnswers: 4 },
    { attributeId: 'repetitive_behaviors', probability: 0.65, questionsAnswered: 5, traitAlignedAnswers: 3 },
    { attributeId: 'executive_functioning', probability: 0.70, questionsAnswered: 5, traitAlignedAnswers: 4 },
    { attributeId: 'emotional_regulation', probability: 0.63, questionsAnswered: 5, traitAlignedAnswers: 3 },
    { attributeId: 'cognitive_flexibility', probability: 0.68, questionsAnswered: 5, traitAlignedAnswers: 3 },
  ];

  const averageProbability = 0.69;
  const dominantAttributesCount = 3;

  const insights = [
    {
      title: 'Interesses Específicos',
      score: 82,
      description: 'Apresenta forte tendência a desenvolver interesses profundos e específicos em determinados assuntos.',
      recommendations: [
        'Explore seus interesses através de cursos especializados',
        'Compartilhe seu conhecimento em comunidades online',
        'Use seus interesses como motivação para desenvolvimento pessoal',
      ],
    },
    {
      title: 'Sensibilidade Sensorial',
      score: 75,
      description: 'Demonstra alta sensibilidade a estímulos sensoriais do ambiente.',
      recommendations: [
        'Crie ambientes com iluminação e sons controlados',
        'Use fones com cancelamento de ruído quando necessário',
        'Identifique e evite gatilhos sensoriais desconfortáveis',
      ],
    },
    {
      title: 'Processamento Cognitivo',
      score: 70,
      description: 'Possui padrões únicos de processamento de informações e resolução de problemas.',
      recommendations: [
        'Utilize mapas mentais e diagramas para organizar ideias',
        'Reserve tempo para processar informações complexas',
        'Aproveite seu estilo de pensamento sistemático',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <div className="bg-gradient-hero border-b border-border/20">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4 text-primary-foreground hover:text-primary-foreground/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-primary-foreground" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
              Exemplo de Relatório
            </h1>
          </div>
          <p className="text-primary-foreground/80 text-sm sm:text-base mt-2">
            Este é um exemplo ilustrativo de como seu relatório personalizado será apresentado
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge de exemplo */}
          <div className="flex justify-center">
            <Badge variant="outline" className="text-sm px-4 py-2">
              Relatório de Exemplo - Dados Ilustrativos
            </Badge>
          </div>

          {/* Resumo Geral */}
          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Resumo Geral</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {Math.round(averageProbability * 100)}%
                  </div>
                  <div className="text-sm text-muted-foreground">Pontuação Média</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {dominantAttributesCount}
                  </div>
                  <div className="text-sm text-muted-foreground">Características Dominantes</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {sampleAttributeProbabilities.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Dimensões Avaliadas</div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-muted-foreground leading-relaxed">
                  Este relatório apresenta uma análise detalhada das suas características através de múltiplas dimensões. 
                  Os resultados são baseados em suas respostas e oferecem insights personalizados para autoconhecimento.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Gráfico Radar */}
          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Perfil Multidimensional</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[400px] sm:h-[500px]">
                <CDMRadarChart attributeProbabilities={sampleAttributeProbabilities} />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Visualização das probabilidades em cada dimensão avaliada
              </p>
            </CardContent>
          </Card>

          {/* Insights Detalhados */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Insights Detalhados</h2>
            
            {insights.map((insight, index) => (
              <Card key={index} className="shadow-strong">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-lg sm:text-xl">{insight.title}</CardTitle>
                    <Badge variant="secondary" className="text-base font-bold">
                      {insight.score}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {insight.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Recomendações:</h4>
                    <ul className="space-y-2">
                      {insight.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Final */}
          <Card className="shadow-strong bg-gradient-hero text-primary-foreground border-0">
            <CardContent className="p-6 sm:p-8 text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">
                Pronto para gerar seu próprio relatório?
              </h3>
              <p className="text-primary-foreground/90">
                Responda às questões e receba um relatório personalizado com insights sobre suas características únicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Link to="/assessment">
                    Iniciar Avaliação
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/">
                    Voltar ao Início
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SampleReport;
