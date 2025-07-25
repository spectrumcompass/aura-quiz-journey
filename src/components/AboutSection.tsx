import { Card } from "@/components/ui/card";
import { Brain, Heart, Lightbulb, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-3 text-foreground">{t('about.socialCommunication')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('about.socialCommunicationDesc')}
            </p>
          </Card>

          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-semibold mb-3 text-foreground">{t('about.behaviors')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('about.behaviorsDesc')}
            </p>
          </Card>

          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Heart className="w-8 h-8 text-success" />
            </div>
            <h3 className="font-semibold mb-3 text-foreground">{t('about.sensitivities')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('about.sensitivitiesDesc')}
            </p>
          </Card>

          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Lightbulb className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="font-semibold mb-3 text-foreground">{t('about.selfAwarenessTitle')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('about.selfAwarenessDesc')}
            </p>
          </Card>
        </div>

        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 shadow-soft">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              {t('about.whyTakeTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold mb-3 text-foreground">{t('about.selfUnderstanding')}</h4>
                <p className="text-muted-foreground mb-4">
                  {t('about.selfUnderstandingDesc')}
                </p>
                
                <h4 className="font-semibold mb-3 text-foreground">{t('about.professionalGuidance')}</h4>
                <p className="text-muted-foreground">
                  {t('about.professionalGuidanceDesc')}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-foreground">{t('about.resourcesSupport')}</h4>
                <p className="text-muted-foreground mb-4">
                  {t('about.resourcesSupportDesc')}
                </p>
                
                <h4 className="font-semibold mb-3 text-foreground">{t('about.community')}</h4>
                <p className="text-muted-foreground">
                  {t('about.communityDesc')}
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