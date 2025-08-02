import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CDMRadarChart } from "./CDMRadarChart";
import { CDMResult, COGNITIVE_ATTRIBUTES } from "@/lib/cdm-model";
import { useLanguage } from "@/contexts/LanguageContext";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

interface CDMResultsViewProps {
  result: CDMResult;
}

export const CDMResultsView = ({ result }: CDMResultsViewProps) => {
  const { t } = useLanguage();
  const radarChartRef = useRef<HTMLDivElement>(null);

  const getAttributeName = (attributeId: string) => {
    return t(`attr.${attributeId}`) || attributeId;
  };

  const getAttributeDescription = (attributeId: string) => {
    return t(`attr.${attributeId}.desc`) || '';
  };

  const getPatternName = (patternId: string) => {
    return t(`pattern.${patternId}`) || patternId;
  };

  const getPatternDescription = (patternId: string) => {
    return t(`pattern.${patternId}.desc`) || '';
  };

  const generateProgressBar = (value: number, width: number = 40) => {
    const filled = Math.round((value / 100) * width);
    const empty = width - filled;
    return '█'.repeat(filled) + '░'.repeat(empty);
  };

  const generatePDF = async () => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = 30;

    // Title
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text(t('cdm.profileOverview'), margin, yPosition);
    yPosition += 20;

    // Overview metrics
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    
    // Create a nice overview section
    pdf.setDrawColor(200, 200, 200);
    pdf.rect(margin, yPosition, pageWidth - 2 * margin, 30);
    yPosition += 10;
    
    pdf.text(`${t('cdm.averageAlignment')}: ${Math.round(result.overallProfile.averageProbability * 100)}%`, margin + 5, yPosition);
    yPosition += 8;
    pdf.text(`${t('cdm.consistency')}: ${Math.round(result.overallProfile.consistency * 100)}%`, margin + 5, yPosition);
    yPosition += 8;
    pdf.text(`${t('cdm.patternsIdentified')}: ${result.identifiedPatterns.length}`, margin + 5, yPosition);
    yPosition += 25;

    // Identified Patterns
    if (result.identifiedPatterns.length > 0) {
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text(t('cdm.identifiedPatterns'), margin, yPosition);
      yPosition += 15;

      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      result.identifiedPatterns.forEach((pattern) => {
        pdf.text(`• ${getPatternName(pattern.id)}`, margin, yPosition);
        yPosition += 6;
        
        const lines = pdf.splitTextToSize(getPatternDescription(pattern.id), pageWidth - 2 * margin - 10);
        lines.forEach((line: string) => {
          pdf.text(line, margin + 10, yPosition);
          yPosition += 4;
        });
        yPosition += 5;
      });
      yPosition += 10;
    }

    // Cognitive Profile Chart
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text(t('cdm.cognitiveProfile'), margin, yPosition);
    yPosition += 15;

    // Capture the radar chart
    if (radarChartRef.current) {
      try {
        const canvas = await html2canvas(radarChartRef.current, {
          backgroundColor: '#ffffff',
          scale: 2,
          logging: false,
        });
        
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 120;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        // Add the chart image to PDF
        pdf.addImage(imgData, 'PNG', margin + 30, yPosition, imgWidth, imgHeight);
        yPosition += imgHeight + 20;
      } catch (error) {
        console.log('Error capturing chart:', error);
        yPosition += 20;
      }
    }

    if (yPosition > 200) {
      pdf.addPage();
      yPosition = 30;
    }

    // Attribute Details (similar to the image)
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text(t('cdm.attributeDetails'), margin, yPosition);
    yPosition += 15;

    pdf.setFontSize(10);
    pdf.text(t('cdm.attributeDetailsDescription'), margin, yPosition);
    yPosition += 15;

    result.attributeProbabilities
      .sort((a, b) => b.probability - a.probability)
      .forEach((attr) => {
        if (yPosition > 250) {
          pdf.addPage();
          yPosition = 30;
        }

        const percentage = Math.round(attr.probability * 100);
        const progressBar = generateProgressBar(percentage, 30);

        // Attribute name and percentage
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.text(getAttributeName(attr.attributeId), margin, yPosition);
        pdf.text(`${percentage}%`, pageWidth - margin - 20, yPosition);
        yPosition += 6;

        // Description
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(100, 100, 100);
        const descLines = pdf.splitTextToSize(getAttributeDescription(attr.attributeId), pageWidth - 2 * margin);
        descLines.forEach((line: string) => {
          pdf.text(line, margin, yPosition);
          yPosition += 4;
        });
        yPosition += 2;

        // Progress bar (visual representation)
        pdf.setTextColor(0, 0, 0);
        pdf.setFont('courier', 'normal');
        pdf.setFontSize(8);
        pdf.text(progressBar, margin, yPosition);
        yPosition += 6;

        // Statistics
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        pdf.setTextColor(100, 100, 100);
        pdf.text(`${attr.traitAlignedAnswers} ${t('cdm.traitAlignedOf')} ${attr.questionsAnswered} ${t('cdm.questions')}`, margin, yPosition);
        yPosition += 15;

        pdf.setTextColor(0, 0, 0);
      });

    // Disclaimer
    if (yPosition > 220) {
      pdf.addPage();
      yPosition = 30;
    }
    
    yPosition += 20;
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(t('cdm.disclaimerTitle'), margin, yPosition);
    yPosition += 10;
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    const disclaimerLines = pdf.splitTextToSize(t('cdm.disclaimerText'), pageWidth - 2 * margin);
    disclaimerLines.forEach((line: string) => {
      pdf.text(line, margin, yPosition);
      yPosition += 4;
    });

    // Save the PDF
    pdf.save(`avaliacao-cognitiva-${new Date().getTime()}.pdf`);
  };

  return (
    <div className="space-y-6">
      {/* PDF Generation Button */}
      <div className="flex justify-end">
        <Button onClick={generatePDF} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          {t('cdm.generatePdf')}
        </Button>
      </div>

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
          <div ref={radarChartRef}>
            <CDMRadarChart 
              attributeProbabilities={result.attributeProbabilities}
              className="mx-auto"
            />
          </div>
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
                    <Badge variant="secondary">{getPatternName(pattern.id)}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {getPatternDescription(pattern.id)}
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