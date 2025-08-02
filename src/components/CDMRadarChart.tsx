import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { COGNITIVE_ATTRIBUTES, AttributeProbability } from '@/lib/cdm-model';

interface CDMRadarChartProps {
  attributeProbabilities: AttributeProbability[];
  className?: string;
}

export const CDMRadarChart = ({ attributeProbabilities, className }: CDMRadarChartProps) => {
  const data = attributeProbabilities.map(prob => {
    const attribute = COGNITIVE_ATTRIBUTES.find(attr => attr.id === prob.attributeId);
    return {
      attribute: attribute?.name || prob.attributeId,
      probability: Math.round(prob.probability * 100),
      fullMark: 100
    };
  });

  return (
    <div className={`w-full h-64 sm:h-80 md:h-96 ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} margin={{ top: 10, right: 40, bottom: 10, left: 40 }}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis 
            dataKey="attribute" 
            tick={{ fontSize: 10 }}
            className="text-xs fill-current"
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]} 
            tick={{ fontSize: 8 }}
            tickFormatter={(value) => `${value}%`}
            className="text-xs"
          />
          <Radar
            name="Trait Alignment"
            dataKey="probability"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.2}
            strokeWidth={2}
            dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 3 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};