import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Brain, Search, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestInfoSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
            {t('testInfo.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            {t('testInfo.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl text-foreground">
                {t('testInfo.whatIsIt')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t('testInfo.whatIsItDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg sm:text-xl text-foreground">
                {t('testInfo.howWorksTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t('testInfo.howWorksDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-3">
                <Search className="w-6 h-6 text-success" />
              </div>
              <CardTitle className="text-lg sm:text-xl text-foreground">
                {t('testInfo.scientificBasis')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t('testInfo.scientificBasisDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-300 border-warning/20">
            <CardHeader>
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mb-3">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <CardTitle className="text-lg sm:text-xl text-foreground">
                {t('testInfo.limitations')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t('testInfo.limitationsDesc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestInfoSection;