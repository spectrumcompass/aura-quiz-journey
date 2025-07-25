import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import AdSenseSlot from "@/components/AdSenseSlot";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Language Selector Header */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      <HeroSection />
      <div className="my-8">
        <AdSenseSlot 
          slot="9204133609" 
          className="max-w-4xl mx-auto"
          style={{ display: "block" }}
        />
      </div>
      <AboutSection />
      <div className="my-8">
        <AdSenseSlot 
          slot="9204133609" 
          className="max-w-4xl mx-auto"
          style={{ display: "block" }}
        />
      </div>
      <HowItWorksSection />
      <CTASection />
    </div>
  );
};

export default Index;
