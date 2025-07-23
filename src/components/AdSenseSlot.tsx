import { useEffect } from "react";

interface AdSenseSlotProps {
  slot: string;
  style?: React.CSSProperties;
  format?: string;
  responsive?: boolean;
  className?: string;
}

const AdSenseSlot = ({ 
  slot, 
  style = { display: "block" }, 
  format = "auto", 
  responsive = true,
  className = ""
}: AdSenseSlotProps) => {
  useEffect(() => {
    try {
      // Verifica se o AdSense está disponível
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("AdSense error:", error);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-1622485543729555"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
};

export default AdSenseSlot;