import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import AdSenseSlot from "@/components/AdSenseSlot";
import heroImage from "@/assets/hero-autism-assessment.jpg";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { calculateCDMProfile, CDMResult } from "@/lib/cdm-model";
import { CDMResultsView } from "@/components/CDMResultsView";

const questions = Array.from({ length: 80 }, (_, i) => `question.${i + 1}`);

type FormData = {
  [key: string]: string;
};

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [cdmResult, setCdmResult] = useState<CDMResult | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const { register, handleSubmit, watch, reset, setValue } = useForm<FormData>();
  
  const answers = watch();
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  // Verifica se a pergunta atual foi respondida
  const currentAnswered = !!answers[`question_${currentQuestion}`];
  
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
  
  const onSubmit = (data: FormData) => {
    // Calcular resultado CDM
    const result = calculateCDMProfile(data);
    setCdmResult(result);
    setShowResult(true);
    
    toast({
      title: t('assessment.finish'),
      description: t('cdm.profileDescription'),
    });
  };

  const restartTest = () => {
    reset();
    setCurrentQuestion(0);
    setShowResult(false);
    setCdmResult(null);
  };

  if (showResult && cdmResult) {
    return (
      <div className="relative min-h-[100svh] bg-gradient-secondary overflow-auto">
        {/* Language Selector */}
        <div className="absolute top-4 right-4 z-50">
          <LanguageSelector />
        </div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-8">
          <div className="flex gap-6 items-start justify-center w-full">
            {/* AdSense Left */}
            <div className="hidden xl:block w-64 flex-shrink-0">
              <div className="sticky top-8 flex flex-col gap-4">
                <AdSenseSlot 
                  slot="9204133607"
                  style={{ 
                    display: "block", 
                    width: "250px", 
                    height: "600px" 
                  }}
                  format="rectangle"
                  responsive={false}
                  className="border border-border rounded-lg p-2 bg-background/50 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              <div className="mb-6 flex items-center justify-between">
                <Button 
                  variant="ghost" 
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t('assessment.back')}
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={restartTest}
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  {t('results.retakeTest')}
                </Button>
              </div>

              <CDMResultsView result={cdmResult} />
            </div>
            
            {/* AdSense Right */}
            <div className="hidden xl:block w-64 flex-shrink-0">
              <div className="sticky top-8 flex flex-col gap-4">
                <AdSenseSlot 
                  slot="9204133609"
                  style={{ 
                    display: "block", 
                    width: "250px", 
                    height: "600px" 
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