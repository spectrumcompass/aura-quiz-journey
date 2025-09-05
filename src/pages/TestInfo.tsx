import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Brain, Search, AlertTriangle, UserCheck, GraduationCap, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import AuthButton from "@/components/AuthButton";

const TestInfo = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-2 sm:top-4 right-2 sm:right-4 z-50 flex gap-2">
        <AuthButton />
        <LanguageSelector />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('testInfo.backToHome')}
            </Link>
          </Button>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              {t('testInfo.pageTitle')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('testInfo.pageSubtitle')}
            </p>
          </div>

          {/* Test Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {t('testInfo.whatIsIt')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('testInfo.whatIsItDesc')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('testInfo.whatIsItDesc2')}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {t('testInfo.howWorksTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('testInfo.howWorksDesc')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('testInfo.howWorksDesc2')}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-3">
                  <Search className="w-6 h-6 text-success" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {t('testInfo.scientificBasis')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('testInfo.scientificBasisDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 border-warning/20">
              <CardHeader>
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-warning" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {t('testInfo.limitations')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('testInfo.limitationsDesc')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Doctor/Researcher Information */}
          <div className="bg-muted/50 rounded-lg p-6 sm:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                {t('testInfo.researcherTitle')}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t('testInfo.researcherSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {t('testInfo.doctorName')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('testInfo.doctorInfo')}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {t('testInfo.qualifications')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('testInfo.qualificationsDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-3">
                    <Building className="w-6 h-6 text-success" />
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {t('testInfo.researchPurpose')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('testInfo.researchPurposeDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Data Usage Information */}
            <div className="mt-8 p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {t('testInfo.dataUsageTitle')}
              </h3>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  • {t('testInfo.dataUsage1')}
                </p>
                <p className="text-muted-foreground">
                  • {t('testInfo.dataUsage2')}
                </p>
                <p className="text-muted-foreground">
                  • {t('testInfo.dataUsage3')}
                </p>
                <p className="text-muted-foreground">
                  • {t('testInfo.dataUsage4')}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/assessment">
                {t('testInfo.startAssessment')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestInfo;