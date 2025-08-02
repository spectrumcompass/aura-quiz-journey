import { Button } from "@/components/ui/button";
import { ArrowRight, Play, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements - Simplified for mobile */}
      <div className="absolute inset-0">
        <div className="hidden sm:block absolute top-20 left-20 w-32 h-32 bg-primary-foreground/10 rounded-full blur-xl" />
        <div className="hidden sm:block absolute bottom-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-primary-foreground/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-primary-foreground px-2">
            {t('cta.title')}
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 sm:mb-12 leading-relaxed px-4">
            {t('cta.subtitle')}
          </p>

           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
             <Button 
               variant="secondary" 
               size="lg" 
               asChild
               className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-strong"
             >
               <Link to="/assessment">
                  <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  {t('cta.startButton')}
               </Link>
             </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <FileText className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              {t('cta.sampleReport')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-4">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                ∞
              </div>
              <div className="text-primary-foreground/80 text-sm sm:text-base">
                {t('cta.infiniteReflections')}
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                15min
              </div>
              <div className="text-primary-foreground/80 text-sm sm:text-base">
                {t('cta.averageTime')}
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                100%
              </div>
              <div className="text-primary-foreground/80 text-sm sm:text-base">
                {t('cta.entertainmentOnly')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;