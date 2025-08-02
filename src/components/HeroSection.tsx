import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-autism-assessment.jpg";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-secondary overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating Elements - Hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="hidden sm:block absolute bottom-32 right-32 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="hidden sm:block absolute top-1/3 right-20 w-12 h-12 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8 animate-fade-in">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-xs sm:text-sm">{t('home.disclaimer')}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-xs sm:text-sm">{t('home.selfAwareness')}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-xs sm:text-sm">{t('home.duration')}</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-slide-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight px-2">
              {t('home.title')}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              {t('home.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" asChild>
                <Link to="/assessment">
                  {t('home.startButton')}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              
              <Button variant="soft" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                {t('home.about')}
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 px-4">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-soft border border-border/50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">{t('home.entertainmentOnly')}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{t('home.personalTool')}</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-soft border border-border/50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">{t('home.selfAwareness')}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{t('home.personalReflection')}</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-soft border border-border/50 sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">{t('home.quickSimple')}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{t('home.quickQuestionnaire')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;