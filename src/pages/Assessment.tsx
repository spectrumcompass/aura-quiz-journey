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
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const questions = Array.from({ length: 80 }, (_, i) => `question.${i + 1}`);


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
  const { t } = useLanguage();
  
  const responseOptions = [
    { value: "1", label: t('response.traitAligned') },
    { value: "0", label: t('response.neurotypicalAligned') }
  ];
  
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
    const maxScore = questions.length; // 80 questions x 1 point maximum
    const percentage = (total / maxScore) * 100;
    
    // Count of responses by category
    const responses = {
      traitAligned: scores.filter(score => score === 1).length,
      neurotypicalAligned: scores.filter(score => score === 0).length
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
                    {t('results.title')}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {t('results.subtitle')}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6 flex-1 overflow-y-auto">
                  <div className="text-center space-y-3">
                    <Badge variant="secondary" className="text-lg p-3">
                      {t('results.score')}: {result.score}/{result.maxScore} ({result.percentage}%)
                    </Badge>
                    
                    <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                      <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{result.responses.traitAligned}</div>
                        <div className="text-xs text-blue-600">{t('response.traitAligned')}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-950/30 rounded-lg">
                        <div className="text-2xl font-bold text-gray-600">{result.responses.neurotypicalAligned}</div>
                        <div className="text-xs text-gray-600">{t('response.neurotypicalAligned')}</div>
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
                      <h4 className="font-medium">{t('results.characteristics')}</h4>
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
                        <strong>{t('results.recommendation')}</strong> {result.recommendation}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-sm text-red-800 dark:text-red-200">
                      <strong>{t('results.important')}</strong> {t('results.disclaimer')}
                    </p>
                  </div>
                  
                  <div className="flex gap-4 justify-center pt-6">
                      <Button 
                        onClick={generatePDF}
                        variant="default"
                        className="flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        {t('results.downloadPdf')}
                      </Button>
                    
                      <Button 
                        onClick={restartTest}
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <RotateCcw className="w-4 h-4" />
                        {t('results.retakeTest')}
                      </Button>
                    
                      <Button 
                        onClick={() => navigate("/")}
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        {t('assessment.backToHome')}
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
      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      
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
                    {t('assessment.back')}
                  </Button>
                  
                  <span className="text-sm text-muted-foreground">
                    {t('assessment.question')} {currentQuestion + 1} {t('assessment.of')} {questions.length}
                  </span>
                </div>
                
                <Progress value={progress} className="mb-4" />
                
                <CardTitle className="text-2xl text-primary">
                  {t('assessment.title')}
                </CardTitle>
                <CardDescription>
                  {t('assessment.subtitle')}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 overflow-y-auto">
                <div className="space-y-8">
                  {/* Pergunta atual */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-medium">
                      {t(questions[currentQuestion])}
                    </h3>
                    
                    <RadioGroup
                      value={answers[`question_${currentQuestion}`] || ""}
                      onValueChange={(value) => setValue(`question_${currentQuestion}` as any, value)}
                      className="space-y-4"
                    >
                      <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="1" id="trait-option" className="mt-1" />
                        <Label htmlFor="trait-option" className="text-base cursor-pointer flex-1">
                          {t(`${questions[currentQuestion]}.traitAnswer`)}
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="0" id="neurotypical-option" className="mt-1" />
                        <Label htmlFor="neurotypical-option" className="text-base cursor-pointer flex-1">
                          {t(`${questions[currentQuestion]}.neurotypicalAnswer`)}
                        </Label>
                      </div>
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
                        {t('assessment.previous')}
                      </Button>
                    
                    {currentQuestion === questions.length - 1 ? (
                        <Button 
                          onClick={handleSubmit(onSubmit)}
                          className="flex items-center gap-2"
                          disabled={!answers[`question_${currentQuestion}`]}
                        >
                          {t('assessment.finish')}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                    ) : (
                        <Button 
                          onClick={nextQuestion}
                          disabled={!answers[`question_${currentQuestion}`]}
                          className="flex items-center gap-2"
                        >
                          {t('assessment.next')}
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