import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, Users, Lightbulb, Heart, Sparkles, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import AuthButton from "@/components/AuthButton";
import LanguageSelector from "@/components/LanguageSelector";

const TestInfo = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-2 sm:top-4 right-2 sm:right-4 z-50 flex gap-2">
        <AuthButton />
        <LanguageSelector />
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-5xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 sm:mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('spectrum.backButton')}
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Brain className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            {t('spectrum.pageTitle')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('spectrum.pageSubtitle')}
          </p>
        </div>

        {/* What is Autism */}
        <section className="mb-12 sm:mb-16">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                <Sparkles className="w-7 h-7 text-primary" />
                {t('spectrum.whatIsTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-base sm:text-lg">
                {t('spectrum.whatIsDesc1')}
              </p>
              <p className="text-base sm:text-lg">
                {t('spectrum.whatIsDesc2')}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Main Characteristics Grid */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-foreground">
            {t('spectrum.characteristicsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  {t('spectrum.socialCommunication')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <p>{t('spectrum.socialCommunication.item1')}</p>
                <p>{t('spectrum.socialCommunication.item2')}</p>
                <p>{t('spectrum.socialCommunication.item3')}</p>
                <p>{t('spectrum.socialCommunication.item4')}</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  {t('spectrum.behaviorPatterns')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <p>{t('spectrum.behaviorPatterns.item1')}</p>
                <p>{t('spectrum.behaviorPatterns.item2')}</p>
                <p>{t('spectrum.behaviorPatterns.item3')}</p>
                <p>{t('spectrum.behaviorPatterns.item4')}</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-3">
                  <Lightbulb className="w-6 h-6 text-success" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  {t('spectrum.sensoryProcessing')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <p>{t('spectrum.sensoryProcessing.item1')}</p>
                <p>{t('spectrum.sensoryProcessing.item2')}</p>
                <p>{t('spectrum.sensoryProcessing.item3')}</p>
                <p>{t('spectrum.sensoryProcessing.item4')}</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  {t('spectrum.strengthsAbilities')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <p>{t('spectrum.strengthsAbilities.item1')}</p>
                <p>{t('spectrum.strengthsAbilities.item2')}</p>
                <p>{t('spectrum.strengthsAbilities.item3')}</p>
                <p>{t('spectrum.strengthsAbilities.item4')}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Understanding the Spectrum */}
        <section className="mb-12 sm:mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                <BookOpen className="w-7 h-7 text-primary" />
                {t('spectrum.whySpectrumTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-base sm:text-lg">
                {t('spectrum.whySpectrumDesc1')}
              </p>
              <div className="bg-background/50 p-4 sm:p-6 rounded-lg space-y-3">
                <p className="font-semibold text-foreground">{t('spectrum.supportLevelsTitle')}</p>
                <p><strong>{ t('spectrum.supportLevel1')}</strong></p>
                <p><strong>{t('spectrum.supportLevel2')}</strong></p>
                <p><strong>{t('spectrum.supportLevel3')}</strong></p>
              </div>
              <p className="text-base sm:text-lg italic">
                {t('spectrum.supportLevelsNote')}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Myths vs Facts */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-foreground">
            {t('spectrum.mythsTitle')}
          </h2>
          <div className="space-y-4">
            <Card className="border-l-4 border-l-destructive/50">
              <CardContent className="pt-6">
                <p className="font-semibold text-destructive mb-2">{t('spectrum.myth1')}</p>
                <p className="text-muted-foreground">{t('spectrum.truth1')}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive/50">
              <CardContent className="pt-6">
                <p className="font-semibold text-destructive mb-2">{t('spectrum.myth2')}</p>
                <p className="text-muted-foreground">{t('spectrum.truth2')}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive/50">
              <CardContent className="pt-6">
                <p className="font-semibold text-destructive mb-2">{t('spectrum.myth3')}</p>
                <p className="text-muted-foreground">{t('spectrum.truth3')}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive/50">
              <CardContent className="pt-6">
                <p className="font-semibold text-destructive mb-2">{t('spectrum.myth4')}</p>
                <p className="text-muted-foreground">{t('spectrum.truth4')}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <CardContent className="pt-8 pb-8 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t('spectrum.ctaTitle')}
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                {t('spectrum.ctaDesc')}
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/assessment")}
                className="text-base sm:text-lg px-6 sm:px-8"
              >
                {t('spectrum.ctaButton')}
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TestInfo;