import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, RotateCcw, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";
import AdSenseSlot from "@/components/AdSenseSlot";
import heroImage from "@/assets/hero-autism-assessment.jpg";

const questions = [
  "At a work meeting, your colleague makes a joke that everyone laughs at, but you don't understand why it's funny.",
  "Someone says 'Can you give me a hand?' while carrying heavy boxes.",
  "A coworker mentions they had a 'rough morning' with a slight smile.",
  "During small talk, someone asks 'How was your weekend?'",
  "Your friend says 'I'm dying of embarrassment' after a mistake.",
  "You're feeling stressed after a long day at work/school.",
  "While concentrating on a task, you notice yourself tapping your fingers rhythmically.",
  "You need to organize your workspace.",
  "When walking through a tiled floor, you notice the pattern.",
  "You're waiting in a long line.",
  "You enter a busy restaurant with bright lights, loud music, and strong food smells.",
  "You need to buy new clothes, but the store only has items made from a fabric that feels rough.",
  "Someone wearing strong perfume sits next to you on public transport.",
  "The fire alarm goes off unexpectedly during a drill.",
  "You're offered food with multiple mixed textures.",
  "A friend excitedly tells you about their vacation plans.",
  "During a conversation, you notice the other person looking at their watch.",
  "Someone shares that they're feeling sad about their pet being sick.",
  "In a group conversation, others are discussing weekend plans.",
  "A colleague mentions they're struggling with a project.",
  "Your usual route to work is blocked due to construction.",
  "Plans for a weekend trip are suddenly cancelled.",
  "Your favorite coffee shop runs out of your usual order.",
  "A meeting is rescheduled at the last minute.",
  "Your usual seat at work/school is taken by someone else.",
  "You have free time on the weekend.",
  "Someone asks about your interests.",
  "You're choosing a book to read.",
  "Planning a vacation destination.",
  "Decorating your living space.",
  "During conversations, making eye contact feels:",
  "Someone waves at you from across the room.",
  "Reading facial expressions in others is:",
  "Using gestures while speaking:",
  "Someone's tone sounds different than their words.",
  "Starting a multi-step project:",
  "Managing multiple deadlines:",
  "Packing for a trip:",
  "Following multi-part instructions:",
  "Switching between different tasks:",
  "Someone says 'Break a leg!' before your presentation.",
  "Reading 'between the lines' in emails:",
  "Someone says 'That's just great' in a flat tone after bad news.",
  "Understanding metaphors in conversation:",
  "Someone says they're 'on cloud nine.'",
  "A friend cancels plans at the last minute.",
  "Someone disagrees with your opinion.",
  "Predicting how others will react:",
  "Someone doesn't share your enthusiasm for a topic.",
  "Understanding why someone might lie to spare feelings:",
  "At a party, someone you don't know well starts telling you about their problems.",
  "Your coworker seems upset but hasn't said anything directly.",
  "In a group, someone makes a joke about shared experiences you weren't part of.",
  "A friend hints they'd like to be invited to your event.",
  "Someone's body language suggests they're uncomfortable with a topic.",
  "Your special interest hobby time is interrupted by an unexpected visitor.",
  "You can't find your usual brand at the store, only alternatives.",
  "Your planned weekend of focusing on your interest is disrupted by a family obligation.",
  "A store reorganizes, moving your special interest items to a different section.",
  "Your usual routine for enjoying your interest is impossible due to circumstances.",
  "In a noisy, crowded space, you feel overwhelmed.",
  "Fluorescent lights in your workspace are bothering you.",
  "Uncomfortable clothing texture throughout the day.",
  "Multiple overlapping sounds in your environment.",
  "Strong smells trigger discomfort in a social setting.",
  "Asked to explain a complex project you're struggling to organize.",
  "Need to communicate multiple task delays to your team.",
  "Following a conversation while managing other thoughts.",
  "Planning and explaining a group activity.",
  "Responding to unexpected questions in a meeting.",
  "Your friend says 'I'm so hungry I could eat a horse' while looking tired.",
  "In a group discussion, someone makes a sarcastic comment about the weather.",
  "A colleague says 'Sure, pile more work on me' with a strained smile.",
  "Someone tells a white lie to avoid hurting another's feelings in front of you.",
  "A friend exaggerates a story for entertainment at a party.",
  "A museum about your special interest has bright lights and crowds.",
  "Your interest-related items have textures that bother you.",
  "A convention for your interest is in a sensory-challenging venue.",
  "Online content about your interest has autoplay sounds.",
  "Your interest requires visiting busy, noisy stores."
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
  const [formData, setFormData] = useState<FormData | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const { register, handleSubmit, watch, reset, setValue } = useForm<FormData>();
  
  const answers = watch();
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  // Verifica se a pergunta atual foi respondida
  const currentAnswered = !!answers[`question_${currentQuestion}`];
  
  // Função para navegar entre perguntas
  const goToQuestion = (questionIndex: number) => {
    // Só permite navegar para perguntas já respondidas ou a próxima
    const maxAllowedQuestion = Math.min(
      Object.keys(answers).length,
      questions.length - 1
    );
    
    if (questionIndex <= maxAllowedQuestion && questionIndex >= 0) {
      setCurrentQuestion(questionIndex);
    }
  };
  
  const nextQuestion = () => {
    if (currentAnswered && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const canShowResults = Object.keys(answers).length === questions.length;
  
  const analyzeResults = (data: FormData) => {
    const scores = Object.values(data).map(Number);
    const total = scores.reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 4; // 80 perguntas x 4 pontos máximos
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
    setFormData(data);
    setShowResult(true);
  };
  
  const restartTest = () => {
    reset();
    setCurrentQuestion(0);
    setShowResult(false);
    setResult(null);
    setFormData(null);
  };
  
  const handleQuestionAnswer = (value: string) => {
    setValue(`question_${currentQuestion}`, value);
  };
  
  const generatePDF = () => {
    if (!result || !formData) return;
    
    try {
      const doc = new jsPDF();
      let yPosition = 20;
      const pageWidth = doc.internal.pageSize.width;
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      
      // Título
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("Resultado da Avaliação - Características do Espectro Autista", margin, yPosition);
      yPosition += 15;
      
      // Data
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(`Data: ${new Date().toLocaleDateString("pt-BR")}`, margin, yPosition);
      yPosition += 15;
      
      // Pontuação
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`Pontuação: ${result.score}/${result.maxScore} (${result.percentage}%)`, margin, yPosition);
      yPosition += 10;
      
      doc.setFontSize(12);
      doc.text(`Nível: ${result.level}`, margin, yPosition);
      yPosition += 15;
      
      // Interpretação
      doc.setFont("helvetica", "normal");
      const interpretationLines = doc.splitTextToSize(result.interpretation, contentWidth);
      doc.text(interpretationLines, margin, yPosition);
      yPosition += interpretationLines.length * 5 + 10;
      
      // Características
      doc.setFont("helvetica", "bold");
      doc.text("Características identificadas:", margin, yPosition);
      yPosition += 8;
      
      doc.setFont("helvetica", "normal");
      result.characteristics.forEach((char: string) => {
        const charLines = doc.splitTextToSize(`• ${char}`, contentWidth - 10);
        doc.text(charLines, margin + 5, yPosition);
        yPosition += charLines.length * 5 + 2;
      });
      
      yPosition += 10;
      
      // Recomendação
      doc.setFont("helvetica", "bold");
      doc.text("Recomendação:", margin, yPosition);
      yPosition += 8;
      
      doc.setFont("helvetica", "normal");
      const recommendationLines = doc.splitTextToSize(result.recommendation, contentWidth);
      doc.text(recommendationLines, margin, yPosition);
      yPosition += recommendationLines.length * 5 + 15;
      
      // Nova página para as respostas
      doc.addPage();
      yPosition = 20;
      
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Respostas do Questionário", margin, yPosition);
      yPosition += 15;
      
      // Respostas
      doc.setFontSize(10);
      questions.forEach((question, index) => {
        // Verifica se precisa de nova página
        if (yPosition > 250) {
          doc.addPage();
          yPosition = 20;
        }
        
        doc.setFont("helvetica", "bold");
        const questionText = `${index + 1}. ${question}`;
        const questionLines = doc.splitTextToSize(questionText, contentWidth);
        doc.text(questionLines, margin, yPosition);
        yPosition += questionLines.length * 4 + 3;
        
        doc.setFont("helvetica", "normal");
        const answerValue = formData[`question_${index}`];
        const answerLabel = responseOptions.find(opt => opt.value === answerValue)?.label || "Não respondida";
        doc.text(`Resposta: ${answerLabel}`, margin + 5, yPosition);
        yPosition += 8;
      });
      
      // Disclaimer
      doc.addPage();
      yPosition = 20;
      
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("Importante", margin, yPosition);
      yPosition += 10;
      
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      const disclaimerText = "Este teste é apenas para entretenimento e autoconhecimento. Não substitui uma avaliação profissional. Para um diagnóstico adequado, procure um profissional especializado em autismo.";
      const disclaimerLines = doc.splitTextToSize(disclaimerText, contentWidth);
      doc.text(disclaimerLines, margin, yPosition);
      
      // Salvar PDF
      doc.save("resultado-avaliacao-autismo.pdf");
      
      toast({
        title: "PDF gerado com sucesso!",
        description: "O arquivo foi baixado para seu dispositivo.",
      });
    } catch (error) {
      toast({
        title: "Erro ao gerar PDF",
        description: "Ocorreu um erro ao gerar o arquivo. Tente novamente.",
        variant: "destructive",
      });
    }
  };
  
  if (showResult && result) {
    return (
      <div className="relative h-[100svh] bg-gradient-secondary overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float" />
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 h-full flex items-center justify-center">
          <div className="flex gap-6 items-center justify-center w-full max-w-6xl">
            {/* AdSense Left - 2 slots */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="h-full flex flex-col gap-4">
                <AdSenseSlot 
                  slot="1234567890"
                  style={{ 
                    display: "block", 
                    width: "250px", 
                    height: "calc(50vh - 2rem)" 
                  }}
                  format="rectangle"
                  responsive={false}
                  className="border border-border rounded-lg p-2 bg-background/50"
                />
                <AdSenseSlot 
                  slot="1234567891"
                  style={{ 
                    display: "block", 
                    width: "250px", 
                    height: "calc(50vh - 2rem)" 
                  }}
                  format="rectangle"
                  responsive={false}
                  className="border border-border rounded-lg p-2 bg-background/50"
                />
              </div>
            </div>

            {/* Main Content */}
          <div className="flex-1 max-w-3xl h-full flex flex-col justify-center items-center">
            <Card className="shadow-strong max-h-[80vh] flex flex-col overflow-hidden w-full max-w-3xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-primary mb-4">
                    Resultado da Avaliação
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Análise baseada em suas respostas
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6 flex-1 overflow-y-auto">
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
                      onClick={generatePDF}
                      variant="default"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Baixar PDF
                    </Button>
                    
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
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Voltar ao Início
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AdSense Right - 2 slots */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="h-full flex flex-col gap-4">
                <AdSenseSlot 
                  slot="0987654321"
                  style={{ 
                    display: "block", 
                    width: "250px", 
                    height: "calc(50vh - 2rem)" 
                  }}
                  format="rectangle"
                  responsive={false}
                  className="border border-border rounded-lg p-2 bg-background/50"
                />
                <AdSenseSlot 
                  slot="0987654322"
                  style={{ 
                    display: "block", 
                    width: "250px", 
                    height: "calc(50vh - 2rem)" 
                  }}
                  format="rectangle"
                  responsive={false}
                  className="border border-border rounded-lg p-2 bg-background/50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative min-h-[100svh] h-[100svh] bg-gradient-secondary overflow-auto">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-32 right-32 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="container mx-auto px-6 max-w-7xl relative z-10 h-full flex items-center justify-center py-8">
        <div className="flex gap-6 items-center justify-center w-full max-w-6xl">
          {/* AdSense Left - 2 slots */}
          <div className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-28 flex flex-col gap-4">
              <AdSenseSlot 
                slot="9204133607"
                style={{ 
                  display: "block", 
                  width: "250px", 
                  height: "calc(50vh - 100px)" 
                }}
                format="rectangle"
                responsive={false}
                className="border border-border rounded-lg p-2 bg-background/50 backdrop-blur-sm"
              />
              <AdSenseSlot 
                slot="9204133608"
                style={{ 
                  display: "block", 
                  width: "250px", 
                  height: "calc(50vh - 100px)" 
                }}
                format="rectangle"
                responsive={false}
                className="border border-border rounded-lg p-2 bg-background/50 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl h-full flex flex-col justify-center items-center">
            <Card className="shadow-strong max-h-[80vh] flex flex-col overflow-hidden bg-background/95 backdrop-blur-sm w-full max-w-3xl">
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
                    Questão {currentQuestion + 1} de {questions.length}
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
              
              <CardContent className="flex-1 overflow-y-auto">
                <div className="space-y-8">
                  {/* Pergunta atual */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-medium">
                      {questions[currentQuestion]}
                    </h3>
                    
                    <RadioGroup
                      value={answers[`question_${currentQuestion}`] || ""}
                      onValueChange={(value) => setValue(`question_${currentQuestion}` as any, value)}
                      className="space-y-4"
                    >
                      {responseOptions.map((option, index) => (
                        <div key={option.value} className="flex items-center space-x-3">
                          <RadioGroupItem value={option.value} id={`option-${index}`} />
                          <Label htmlFor={`option-${index}`} className="text-base">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  {/* Navegação */}
                  <div className="flex justify-between items-center pt-8">
                    <Button 
                      variant="outline" 
                      onClick={previousQuestion}
                      disabled={currentQuestion === 0}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Anterior
                    </Button>
                    
                    {currentQuestion === questions.length - 1 ? (
                      <Button 
                        onClick={handleSubmit(onSubmit)}
                        className="flex items-center gap-2"
                        disabled={!answers[`question_${currentQuestion}`]}
                      >
                        Finalizar Avaliação
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button 
                        onClick={nextQuestion}
                        disabled={!answers[`question_${currentQuestion}`]}
                        className="flex items-center gap-2"
                      >
                        Próxima
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* AdSense Right - 2 slots */}
          <div className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-28 flex flex-col gap-4">
              <AdSenseSlot 
                slot="9204133609"
                style={{ 
                  display: "block", 
                  width: "250px", 
                  height: "calc(50vh - 100px)" 
                }}
                format="rectangle"
                responsive={false}
                className="border border-border rounded-lg p-2 bg-background/50 backdrop-blur-sm"
              />
              <AdSenseSlot 
                slot="9204133610"
                style={{ 
                  display: "block", 
                  width: "250px", 
                  height: "calc(50vh - 100px)" 
                }}
                format="rectangle"
                responsive={false}
                className="border border-border rounded-lg p-2 bg-background/50 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;