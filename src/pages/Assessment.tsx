import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const questions = [
  "Tenho dificuldade em entender expressões faciais e linguagem corporal",
  "Prefiro rotinas previsíveis e me sinto desconfortável com mudanças",
  "Tenho interesses muito específicos e intensos",
  "Sinto-me sobrecarregado(a) em ambientes com muito ruído ou estímulos",
  "Tenho dificuldade em manter contato visual durante conversas",
  "Prefiro atividades solitárias a atividades em grupo",
  "Tenho dificuldade em entender sarcasmo ou piadas",
  "Sou muito sensível a texturas, sabores ou cheiros",
  "Tenho movimentos repetitivos (balançar, bater palmas, etc.)",
  "Tenho dificuldade em fazer amizades",
  "Prefiro falar sobre meus interesses específicos",
  "Tenho dificuldade em entender regras sociais não ditas",
  "Sou muito organizado(a) e gosto que as coisas estejam em ordem",
  "Tenho dificuldade em lidar com críticas",
  "Prefiro comunicação direta e literal",
  "Tenho dificuldade em trabalhar em equipe",
  "Sou muito sensível a luzes brilhantes",
  "Tenho dificuldade em expressar minhas emoções",
  "Prefiro atividades que posso fazer sozinho(a)",
  "Tenho dificuldade em entender o que os outros estão pensando",
  "Sou muito detalhista e percebo pequenas mudanças",
  "Tenho dificuldade em iniciar conversas",
  "Prefiro ter poucos amigos próximos do que muitos conhecidos",
  "Tenho dificuldade em lidar com interrupções em minha rotina",
  "Sou muito honesto(a), mesmo quando pode magoar alguém",
  "Tenho dificuldade em entender convenções sociais",
  "Prefiro aprender através de leitura do que através de explicações verbais",
  "Tenho dificuldade em lidar com ambiguidade",
  "Sou muito focado(a) quando estou interessado(a) em algo",
  "Tenho dificuldade em adaptar-me a novas situações sociais"
];

const responseOptions = [
  { value: "4", label: "Me identifico muito" },
  { value: "3", label: "Me identifico" },
  { value: "2", label: "Me identifico pouco" },
  { value: "1", label: "Não me identifico" }
];

type FormData = {
  [key: string]: string;
};

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<any>(null);
  const navigate = useNavigate();
  
  const { register, handleSubmit, watch, reset } = useForm<FormData>();
  
  const answers = watch();
  const progress = (Object.keys(answers).length / questions.length) * 100;
  
  const analyzeResults = (data: FormData) => {
    const scores = Object.values(data).map(Number);
    const total = scores.reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 4; // 30 perguntas x 4 pontos máximos
    const percentage = (total / maxScore) * 100;
    
    // Contagem de respostas por categoria
    const responses = {
      naoIdentifica: scores.filter(score => score === 1).length,
      identificaPouco: scores.filter(score => score === 2).length,
      identifica: scores.filter(score => score === 3).length,
      identificaMuito: scores.filter(score => score === 4).length
    };
    
    // Análise mais detalhada baseada na pontuação e distribuição
    let level = "";
    let characteristics = [];
    let recommendation = "";
    let interpretation = "";
    
    if (percentage >= 80) {
      level = "Muito alta identificação com características do espectro autista";
      interpretation = "Suas respostas indicam uma forte presença de características compatíveis com o espectro autista";
      characteristics = [
        "Presença significativa de características autistas",
        "Dificuldades importantes na comunicação e interação social",
        "Padrões repetitivos de comportamento e interesses restritos",
        "Alta sensibilidade sensorial em múltiplas áreas",
        "Necessidade forte de previsibilidade e rotinas"
      ];
      recommendation = "É altamente recomendável buscar uma avaliação com um especialista em autismo para uma análise profissional";
    } else if (percentage >= 65) {
      level = "Alta identificação com características do espectro autista";
      interpretation = "Suas respostas sugerem uma considerável presença de características do espectro autista";
      characteristics = [
        "Várias características comuns ao espectro autista",
        "Dificuldades notáveis em situações sociais",
        "Preferências específicas e comportamentos repetitivos",
        "Sensibilidade sensorial em várias áreas",
        "Necessidade de estrutura e previsibilidade"
      ];
      recommendation = "Considere buscar uma avaliação profissional com um especialista em autismo";
    } else if (percentage >= 50) {
      level = "Moderada identificação com características do espectro autista";
      interpretation = "Suas respostas indicam algumas características que podem estar relacionadas ao espectro autista";
      characteristics = [
        "Algumas características do espectro autista presentes",
        "Certas dificuldades em interação social",
        "Preferência por rotinas e previsibilidade",
        "Alguma sensibilidade sensorial",
        "Interesses específicos ou intensos"
      ];
      recommendation = "Pode ser útil conversar com um profissional para melhor compreensão de suas características";
    } else if (percentage >= 35) {
      level = "Baixa a moderada identificação com características do espectro autista";
      interpretation = "Suas respostas mostram algumas características, mas em menor intensidade";
      characteristics = [
        "Poucas características do espectro autista identificadas",
        "Algumas preferências individuais específicas",
        "Funcionamento social geralmente típico",
        "Sensibilidade ocasional a estímulos",
        "Boa adaptação a mudanças na maioria das situações"
      ];
      recommendation = "Suas características parecem estar dentro da variação neurotípica, mas pode conversar com um profissional se tiver dúvidas";
    } else {
      level = "Baixa identificação com características do espectro autista";
      interpretation = "Suas respostas sugerem funcionamento predominantemente neurotípico";
      characteristics = [
        "Funcionamento neurotípico predominante",
        "Boa adaptação social e comunicação",
        "Flexibilidade para mudanças e novas situações",
        "Sensibilidade sensorial dentro dos padrões típicos",
        "Facilidade em interações sociais variadas"
      ];
      recommendation = "Suas respostas sugerem funcionamento neurotípico";
    }
    
    return {
      score: total,
      maxScore: maxScore,
      percentage: percentage.toFixed(1),
      level,
      interpretation,
      characteristics,
      recommendation,
      responses
    };
  };
  
  const onSubmit = (data: FormData) => {
    const analysisResult = analyzeResults(data);
    setResult(analysisResult);
    setShowResult(true);
  };
  
  const restartTest = () => {
    reset();
    setCurrentQuestion(0);
    setShowResult(false);
    setResult(null);
  };
  
  if (showResult && result) {
    return (
      <div className="min-h-screen bg-gradient-hero py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="shadow-strong">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary mb-4">
                Resultado da Avaliação
              </CardTitle>
              <CardDescription className="text-lg">
                Análise baseada em suas respostas
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-center space-y-3">
                <Badge variant="secondary" className="text-lg p-3">
                  Pontuação: {result.score}/{result.maxScore} ({result.percentage}%)
                </Badge>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-md mx-auto">
                  <div className="text-center p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{result.responses.naoIdentifica}</div>
                    <div className="text-xs text-red-600">Não me identifico</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{result.responses.identificaPouco}</div>
                    <div className="text-xs text-orange-600">Me identifico pouco</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">{result.responses.identifica}</div>
                    <div className="text-xs text-yellow-600">Me identifico</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{result.responses.identificaMuito}</div>
                    <div className="text-xs text-green-600">Me identifico muito</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {result.level}
                </h3>
                
                <p className="text-muted-foreground mb-4 italic">
                  {result.interpretation}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Características identificadas:</h4>
                  <ul className="space-y-2">
                    {result.characteristics.map((char: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="font-medium text-amber-800 dark:text-amber-200">
                    <strong>Recomendação:</strong> {result.recommendation}
                  </p>
                </div>
              </div>
              
              <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Importante:</strong> Este teste é apenas para entretenimento e autoconhecimento. 
                  Não substitui uma avaliação profissional. Para um diagnóstico adequado, procure um 
                  profissional especializado em autismo.
                </p>
              </div>
              
              <div className="flex gap-4 justify-center pt-6">
                <Button 
                  onClick={restartTest}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Refazer Teste
                </Button>
                
                <Button 
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao Início
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-hero py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Card className="shadow-strong">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/")}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
              
              <span className="text-sm text-muted-foreground">
                Questão {Math.min(Object.keys(answers).length, questions.length)} de {questions.length}
              </span>
            </div>
            
            <Progress value={progress} className="mb-4" />
            
            <CardTitle className="text-2xl text-primary">
              Avaliação de Características do Espectro Autista
            </CardTitle>
            <CardDescription>
              Responda as questões de acordo com como você se identifica com cada afirmação.
              Lembre-se: este teste é apenas para autoconhecimento e entretenimento.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {questions.map((question, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-medium">
                    {index + 1}. {question}
                  </h3>
                  
                  <RadioGroup 
                    {...register(`question_${index}`, { required: true })}
                    className="space-y-3"
                  >
                    {responseOptions.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={option.value} 
                          id={`q${index}_${option.value}`}
                          {...register(`question_${index}`, { required: true })}
                        />
                        <Label htmlFor={`q${index}_${option.value}`} className="cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
              
              <div className="flex justify-center pt-8">
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={Object.keys(answers).length < questions.length}
                  className="flex items-center gap-2"
                >
                  Ver Resultado
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assessment;