import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, ChevronDown } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'pt', label: t('language.portuguese'), flag: '🇧🇷' },
    { code: 'en', label: t('language.english'), flag: '🇺🇸' },
    { code: 'es', label: t('language.spanish'), flag: '🇪🇸' },
    { code: 'nl', label: t('language.dutch'), flag: '🇳🇱' },
    { code: 'de', label: t('language.german'), flag: '🇩🇪' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <Select value={language} onValueChange={(value: 'pt' | 'en' | 'es' | 'nl' | 'de') => setLanguage(value)}>
        <SelectTrigger className="min-w-[140px] sm:min-w-[160px] h-10 sm:h-11 bg-background/95 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-200 shadow-soft hover:shadow-medium rounded-xl">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              <span className="text-lg">{currentLanguage?.flag}</span>
            </div>
            <SelectValue className="text-xs sm:text-sm font-medium" />
          </div>
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground ml-auto" />
        </SelectTrigger>
        <SelectContent className="bg-background/98 backdrop-blur-md border-border/50 shadow-strong rounded-xl min-w-[160px] z-[100]">
          {languages.map((lang) => (
            <SelectItem 
              key={lang.code} 
              value={lang.code} 
              className="hover:bg-primary/10 focus:bg-primary/10 rounded-lg mx-1 my-0.5 cursor-pointer transition-all duration-150"
            >
              <div className="flex items-center gap-3 py-1">
                <span className="text-sm font-medium">{lang.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;