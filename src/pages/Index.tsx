import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import DisclaimerAlert from "@/components/DisclaimerAlert";
import AdSenseSlot from "@/components/AdSenseSlot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <DisclaimerAlert />
      <HeroSection />
      <div className="my-8">
        <AdSenseSlot 
          slot="1234567890" 
          className="max-w-4xl mx-auto"
          style={{ minHeight: "250px" }}
        />
      </div>
      <AboutSection />
      <div className="my-8">
        <AdSenseSlot 
          slot="0987654321" 
          className="max-w-4xl mx-auto"
          style={{ minHeight: "250px" }}
        />
      </div>
      <HowItWorksSection />
      <CTASection />
    </div>
  );
};

export default Index;
