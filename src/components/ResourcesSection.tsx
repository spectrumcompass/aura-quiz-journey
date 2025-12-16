import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Phone, Lightbulb, ExternalLink } from "lucide-react";

const ResourcesSection = () => {
  const { t } = useLanguage();

  const resources = [
    {
      icon: BookOpen,
      title: t('resources.education'),
      description: t('resources.educationDesc'),
      items: [
        t('resources.educationItem1'),
        t('resources.educationItem2'),
        t('resources.educationItem3'),
      ],
    },
    {
      icon: Users,
      title: t('resources.community'),
      description: t('resources.communityDesc'),
      items: [
        t('resources.communityItem1'),
        t('resources.communityItem2'),
        t('resources.communityItem3'),
      ],
    },
    {
      icon: Phone,
      title: t('resources.professional'),
      description: t('resources.professionalDesc'),
      items: [
        t('resources.professionalItem1'),
        t('resources.professionalItem2'),
        t('resources.professionalItem3'),
      ],
    },
    {
      icon: Lightbulb,
      title: t('resources.strategies'),
      description: t('resources.strategiesDesc'),
      items: [
        t('resources.strategiesItem1'),
        t('resources.strategiesItem2'),
        t('resources.strategiesItem3'),
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('resources.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-all duration-300 border-border"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <resource.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <ul className="space-y-2">
                      {resource.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
