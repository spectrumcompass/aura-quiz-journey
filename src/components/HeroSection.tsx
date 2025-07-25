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
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-32 right-32 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-6 mb-8 animate-fade-in">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">{t('home.disclaimer')}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm">{t('home.selfAwareness')}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-sm">{t('home.duration')}</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
              {t('home.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('home.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/assessment">
                  {t('home.startButton')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button variant="soft" size="lg" className="text-lg px-8 py-4">
                {t('home.about')}
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t('home.entertainmentOnly')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.personalTool')}</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/50">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{t('home.selfAwareness')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.personalReflection')}</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/50">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">{t('home.quickSimple')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.quickQuestionnaire')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;