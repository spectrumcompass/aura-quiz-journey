import { Card } from "@/components/ui/card";
import { CheckCircle, MessageSquare, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: t('howItWorks.step1Title'),
      description: t('howItWorks.step1Desc'),
      time: t('howItWorks.step1Time')
    },
    {
      number: "02",
      icon: BarChart3,
      title: t('howItWorks.step2Title'),
      description: t('howItWorks.step2Desc'),
      time: t('howItWorks.step2Time')
    },
    {
      number: "03",
      icon: CheckCircle,
      title: t('howItWorks.step3Title'),
      description: t('howItWorks.step3Desc'),
      time: t('howItWorks.step3Time')
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent z-0" />
              )}
              
              <Card className="relative z-10 p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>

                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {step.time}
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              {t('howItWorks.important')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('howItWorks.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;