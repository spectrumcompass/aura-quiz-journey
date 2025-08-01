import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CDMRadarChart } from "./CDMRadarChart";
import { CDMResult, COGNITIVE_ATTRIBUTES } from "@/lib/cdm-model";
import { useLanguage } from "@/contexts/LanguageContext";

interface CDMResultsViewProps {
  result: CDMResult;
}

export const CDMResultsView = ({ result }: CDMResultsViewProps) => {
  const { t } = useLanguage();

  const getAttributeName = (attributeId: string) => {
    const attr = COGNITIVE_ATTRIBUTES.find(a => a.id === attributeId);
    return attr?.name || attributeId;
  };

  const getAttributeDescription = (attributeId: string) => {
    const attr = COGNITIVE_ATTRIBUTES.find(a => a.id === attributeId);
    return attr?.description || '';
  };

  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-primary">
            {t('cdm.profileOverview')}
          </CardTitle>
          <CardDescription>
            {t('cdm.profileDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">
                {Math.round(result.overallProfile.averageProbability * 100)}%
              </div>
              <div className="text-sm text-muted-foreground">
                {t('cdm.averageAlignment')}
              </div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">
                {Math.round(result.overallProfile.consistency * 100)}%
              </div>
              <div className="text-sm text-muted-foreground">
                {t('cdm.consistency')}
              </div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">
                {result.identifiedPatterns.length}
              </div>
              <div className="text-sm text-muted-foreground">
                {t('cdm.patternsIdentified')}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Radar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>{t('cdm.cognitiveProfile')}</CardTitle>
          <CardDescription>
            {t('cdm.radarDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CDMRadarChart 
            attributeProbabilities={result.attributeProbabilities}
            className="mx-auto"
          />
        </CardContent>
      </Card>

      {/* Identified Patterns */}
      {result.identifiedPatterns.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>{t('cdm.identifiedPatterns')}</CardTitle>
            <CardDescription>
              {t('cdm.patternsDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {result.identifiedPatterns.map((pattern) => (
                <div key={pattern.id} className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{pattern.name}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {pattern.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {pattern.requiredAttributes.map((attrId) => (
                      <Badge key={attrId} variant="outline" className="text-xs">
                        {getAttributeName(attrId)}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Attribute Details */}
      <Card>
        <CardHeader>
          <CardTitle>{t('cdm.attributeDetails')}</CardTitle>
          <CardDescription>
            {t('cdm.attributeDetailsDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {result.attributeProbabilities
              .sort((a, b) => b.probability - a.probability)
              .map((attr) => (
                <div key={attr.attributeId} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{getAttributeName(attr.attributeId)}</h4>
                      <p className="text-sm text-muted-foreground">
                        {getAttributeDescription(attr.attributeId)}
                      </p>
                    </div>
                    <Badge 
                      variant={attr.probability > 0.7 ? "default" : attr.probability > 0.5 ? "secondary" : "outline"}
                      className="ml-2"
                    >
                      {Math.round(attr.probability * 100)}%
                    </Badge>
                  </div>
                  <Progress value={attr.probability * 100} className="h-2" />
                  <div className="text-xs text-muted-foreground">
                    {attr.traitAlignedAnswers} {t('cdm.traitAlignedOf')} {attr.questionsAnswered} {t('cdm.questions')}
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">
              !
            </div>
            <div>
              <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                {t('cdm.disclaimerTitle')}
              </h4>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                {t('cdm.disclaimerText')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};