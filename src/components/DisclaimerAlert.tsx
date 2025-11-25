import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DisclaimerAlert = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-destructive/10 border-b border-destructive/20 py-4">
      <div className="container mx-auto px-6">
        <Alert className="border-destructive/30 bg-destructive/5">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-destructive font-medium">
            <strong>{t('disclaimer.important')}</strong> {t('disclaimer.text')}
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default DisclaimerAlert;