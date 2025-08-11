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
import { useAuth } from "@/contexts/AuthContext";
import { calculateCDMProfile, CDMResult } from "@/lib/cdm-model";
import { CDMResultsView } from "@/components/CDMResultsView";
import { supabase } from "@/integrations/supabase/client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

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
  const { user } = useAuth();
  
  const { register, handleSubmit, watch, reset, setValue } = useForm<FormData>();
  
  // Consentimento de pesquisa
  const [showConsentDialog, setShowConsentDialog] = useState(true);
  const [researchConsent, setResearchConsent] = useState<boolean>(false);

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
  
  const saveResult = async (data: FormData, result: CDMResult, consent: boolean) => {
    if (!user) return; // Só salva se o usuário estiver logado
    
    try {
      const { error } = await supabase
        .from('assessment_results')
        .insert({
          user_id: user.id,
          title: `Assessment - ${new Date().toLocaleDateString('pt-BR')}`,
          responses: data as any,
          cdm_result: result as any,
          attribute_probabilities: result.attributeProbabilities as any,
          identified_patterns: result.identifiedPatterns as any,
          overall_profile: result.overallProfile as any,
          average_probability: result.overallProfile.averageProbability,
          dominant_attributes: result.overallProfile.dominantAttributes,
          research_consent: consent,
          consent_at: consent ? new Date().toISOString() : null,
         });

      if (error) {
        console.error('Error saving result:', error);
        toast({
          variant: "destructive",
          title: "Erro ao salvar resultado",
          description: "Não foi possível salvar o resultado no seu histórico.",
        });
      } else if (user) {
        toast({
          title: "Resultado salvo!",
          description: "O resultado foi salvo no seu dashboard.",
        });
      }
    } catch (err) {
      console.error('Error saving result:', err);
    }
  };

  const onSubmit = async (data: FormData) => {
    // Calcular resultado CDM
    const result = calculateCDMProfile(data);
    setCdmResult(result);
    setShowResult(true);
    
    // Salvar resultado se usuário estiver logado
    if (user) {
      await saveResult(data, result, researchConsent);
    }
    
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

        <AlertDialog open={showConsentDialog} onOpenChange={setShowConsentDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Permitir uso anônimo dos seus dados?</AlertDialogTitle>
              <AlertDialogDescription>
                Suas respostas e resultados poderão ser utilizados apenas para pesquisa e aprimoramento do produto.
                Os dados são anônimos, confidenciais e armazenados com segurança. Nenhuma informação pessoal é compartilhada.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={() => {
                  setResearchConsent(false);
                  setShowConsentDialog(false);
                  toast({
                    title: "Sem problemas",
                    description: "Você pode continuar normalmente. Seus dados não serão usados em pesquisas.",
                  });
                }}
              >
                Não permitir
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  setResearchConsent(true);
                  setShowConsentDialog(false);
                  toast({
                    title: "Obrigado!",
                    description: "Seu consentimento foi registrado. O uso será sempre anônimo, sigiloso e seguro.",
                  });
                }}
              >
                Permitir uso anônimo
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-8">
          <div className="flex gap-6 items-start justify-center w-full">
            {/* AdSense Left */}
{/* Side ads removed */}
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
            
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[100svh] h-[100svh] bg-gradient-secondary overflow-auto">
      {/* Language Selector */}
      <div className="fixed top-2 sm:top-4 right-2 sm:right-4 z-50">
        <LanguageSelector />
      </div>

      <AlertDialog open={showConsentDialog} onOpenChange={setShowConsentDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Permitir uso anônimo dos seus dados?</AlertDialogTitle>
            <AlertDialogDescription>
              Suas respostas e resultados poderão ser utilizados apenas para pesquisa e aprimoramento do produto.
              Os dados são anônimos, confidenciais e armazenados com segurança. Nenhuma informação pessoal é compartilhada.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setResearchConsent(false);
                setShowConsentDialog(false);
                toast({
                  title: "Sem problemas",
                  description: "Você pode continuar normalmente. Seus dados não serão usados em pesquisas.",
                });
              }}
            >
              Não permitir
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setResearchConsent(true);
                setShowConsentDialog(false);
                toast({
                  title: "Obrigado!",
                  description: "Seu consentimento foi registrado. O uso será sempre anônimo, sigiloso e seguro.",
                });
              }}
            >
              Permitir uso anônimo
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl relative z-10 h-full flex items-center justify-center py-4 sm:py-8">
        <div className="flex gap-2 sm:gap-4 lg:gap-6 items-center justify-center w-full max-w-6xl">

          {/* Main Content */}
          <div className="flex-1 max-w-3xl h-full flex flex-col justify-center items-center">
            <Card className="shadow-strong max-h-[85vh] sm:max-h-[80vh] flex flex-col overflow-hidden bg-background/95 backdrop-blur-sm w-full max-w-3xl mx-2 sm:mx-0">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-sm sm:text-base"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">{t('assessment.back')}</span>
                  </Button>
                  
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {t('assessment.question')} {currentQuestion + 1} {t('assessment.of')} {questions.length}
                  </span>
                </div>
                
                <Progress value={progress} className="mb-3 sm:mb-4" />
                
                <CardTitle className="text-lg sm:text-xl lg:text-2xl text-primary">
                  {t('assessment.title')}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {t('assessment.subtitle')}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 overflow-y-auto px-4 sm:px-6">
                <div className="space-y-6 sm:space-y-8">
                  {/* Current Question */}
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
                      {t(questions[currentQuestion])}
                    </h3>
                    
                    <RadioGroup
                      value={answers[`question_${currentQuestion}`] || ""}
                      onValueChange={(value) => setValue(`question_${currentQuestion}` as any, value)}
                      className="space-y-3 sm:space-y-4"
                    >
                      <div className="flex items-start space-x-3 p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="1" id="trait-option" className="mt-1" />
                        <Label htmlFor="trait-option" className="text-sm sm:text-base cursor-pointer flex-1 leading-relaxed">
                          {t(`${questions[currentQuestion]}.traitAnswer`)}
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3 p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="0" id="neurotypical-option" className="mt-1" />
                        <Label htmlFor="neurotypical-option" className="text-sm sm:text-base cursor-pointer flex-1 leading-relaxed">
                          {t(`${questions[currentQuestion]}.neurotypicalAnswer`)}
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
              
              <div className="p-4 sm:p-6 border-t bg-background/50">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={previousQuestion}
                    disabled={currentQuestion === 0}
                    className="w-full sm:w-auto order-2 sm:order-1"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('assessment.previous')}
                  </Button>
                  
                  <Button
                    type="button"
                    onClick={currentQuestion === questions.length - 1 ? handleSubmit(onSubmit) : nextQuestion}
                    disabled={!answers[`question_${currentQuestion}`]}
                    className="w-full sm:w-auto order-1 sm:order-2"
                  >
                    {currentQuestion === questions.length - 1 ? t('assessment.finish') : t('assessment.next')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Assessment;