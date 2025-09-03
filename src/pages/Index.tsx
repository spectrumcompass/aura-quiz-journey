import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import AdSenseSlot from "@/components/AdSenseSlot";
import LanguageSelector from "@/components/LanguageSelector";
import AuthButton from "@/components/AuthButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header with Language Selector and Auth Button */}
      <div className="fixed top-2 sm:top-4 right-2 sm:right-4 z-50 flex gap-2">
        <AuthButton />
        <LanguageSelector />
      </div>
      <HeroSection />
      <div className="my-4 sm:my-8 px-4">
        <AdSenseSlot 
          slot="9204133609" 
          className="max-w-4xl mx-auto"
          style={{ display: "block" }}
        />
      </div>
      <AboutSection />
      <div className="my-4 sm:my-8 px-4">
        <AdSenseSlot 
          slot="9204133609" 
          className="max-w-4xl mx-auto"
          style={{ display: "block" }}
        />
      </div>
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
