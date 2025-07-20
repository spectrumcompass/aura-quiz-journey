import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const DisclaimerAlert = () => {
  return (
    <div className="bg-destructive/10 border-b border-destructive/20 py-4">
      <div className="container mx-auto px-6">
        <Alert className="border-destructive/30 bg-destructive/5">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-destructive font-medium">
            <strong>IMPORTANTE:</strong> Esta ferramenta é destinada apenas para entretenimento e reflexão pessoal. 
            Não possui validade científica, diagnóstica ou clínica. Os resultados não devem ser interpretados como 
            um diagnóstico médico. Se você suspeita ter características do espectro autista, procure um profissional 
            qualificado (psicólogo ou psiquiatra especializado em autismo) para uma avaliação adequada.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default DisclaimerAlert;