import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Globe, TrendingUp, Heart } from "lucide-react";

const StatisticsSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: "1:36",
      label: t('stats.prevalence'),
      description: t('stats.prevalenceDesc'),
    },
    {
      icon: Globe,
      value: "78M+",
      label: t('stats.worldwide'),
      description: t('stats.worldwideDesc'),
    },
    {
      icon: TrendingUp,
      value: "4x",
      label: t('stats.diagnosis'),
      description: t('stats.diagnosisDesc'),
    },
    {
      icon: Heart,
      value: "85%",
      label: t('stats.support'),
      description: t('stats.supportDesc'),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-soft">
          <p className="text-center text-sm text-muted-foreground">
            {t('stats.source')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
