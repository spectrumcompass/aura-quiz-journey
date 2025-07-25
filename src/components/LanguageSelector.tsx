import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <Select value={language} onValueChange={(value: 'pt' | 'en' | 'es' | 'nl' | 'de') => setLanguage(value)}>
        <SelectTrigger className="w-[130px]">
          <SelectValue placeholder={t('language.selector')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pt">{t('language.portuguese')}</SelectItem>
          <SelectItem value="en">{t('language.english')}</SelectItem>
          <SelectItem value="es">{t('language.spanish')}</SelectItem>
          <SelectItem value="nl">{t('language.dutch')}</SelectItem>
          <SelectItem value="de">{t('language.german')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;