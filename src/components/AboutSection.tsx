import { Card } from "@/components/ui/card";
import { Brain, Heart, Lightbulb, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <Card className="p-4 sm:p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">{t('about.socialCommunication')}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t('about.socialCommunicationDesc')}
            </p>
          </Card>

          <Card className="p-4 sm:p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">{t('about.behaviors')}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t('about.behaviorsDesc')}
            </p>
          </Card>

          <Card className="p-4 sm:p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-success/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-success" />
            </div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">{t('about.sensitivities')}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t('about.sensitivitiesDesc')}
            </p>
          </Card>

          <Card className="p-4 sm:p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/30 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-secondary-foreground" />
            </div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">{t('about.selfAwarenessTitle')}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t('about.selfAwarenessDesc')}
            </p>
          </Card>
        </div>

        <div className="bg-gradient-secondary rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-soft mx-2 sm:mx-0">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-foreground">
              {t('about.whyTakeTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
              <div>
                <h4 className="font-semibold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">{t('about.selfUnderstanding')}</h4>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  {t('about.selfUnderstandingDesc')}
                </p>
                
                <h4 className="font-semibold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">{t('about.professionalGuidance')}</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {t('about.professionalGuidanceDesc')}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">{t('about.resourcesSupport')}</h4>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  {t('about.resourcesSupportDesc')}
                </p>
                
                <h4 className="font-semibold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">{t('about.community')}</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
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