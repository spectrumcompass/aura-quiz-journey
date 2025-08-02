import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
      <Select value={language} onValueChange={(value: 'pt' | 'en' | 'es' | 'nl' | 'de') => setLanguage(value)}>
        <SelectTrigger className="w-[100px] sm:w-[130px] text-xs sm:text-sm h-8 sm:h-10">
          <SelectValue placeholder={t('language.selector')} />
        </SelectTrigger>
        <SelectContent className="bg-background/95 backdrop-blur-sm z-[100]">
          <SelectItem value="pt" className="text-xs sm:text-sm">{t('language.portuguese')}</SelectItem>
          <SelectItem value="en" className="text-xs sm:text-sm">{t('language.english')}</SelectItem>
          <SelectItem value="es" className="text-xs sm:text-sm">{t('language.spanish')}</SelectItem>
          <SelectItem value="nl" className="text-xs sm:text-sm">{t('language.dutch')}</SelectItem>
          <SelectItem value="de" className="text-xs sm:text-sm">{t('language.german')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;