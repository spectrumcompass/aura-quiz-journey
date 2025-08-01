// Cognitive Diagnostic Modeling (CDM) Configuration
// 10 Cognitive Attributes for Neurodivergent Profile Assessment

export interface CognitiveAttribute {
  id: string;
  name: string;
  description: string;
  color: string;
}

export const COGNITIVE_ATTRIBUTES: CognitiveAttribute[] = [
  {
    id: 'social_communication',
    name: 'Social Communication',
    description: 'Verbal and non-verbal communication patterns in social contexts',
    color: '#8B5CF6'
  },
  {
    id: 'social_reciprocity', 
    name: 'Social Reciprocity',
    description: 'Back-and-forth social interactions and relationship patterns',
    color: '#06B6D4'
  },
  {
    id: 'sensory_processing',
    name: 'Sensory Processing',
    description: 'Response to sensory stimuli and environmental factors',
    color: '#10B981'
  },
  {
    id: 'executive_function',
    name: 'Executive Function',
    description: 'Planning, organization, and task management abilities',
    color: '#F59E0B'
  },
  {
    id: 'cognitive_flexibility',
    name: 'Cognitive Flexibility',
    description: 'Adaptability to change and shifting between tasks or concepts',
    color: '#EF4444'
  },
  {
    id: 'attention_focus',
    name: 'Attention & Focus',
    description: 'Concentration patterns and attention regulation',
    color: '#8B5CF6'
  },
  {
    id: 'literal_thinking',
    name: 'Literal Thinking',
    description: 'Information processing and interpretation style',
    color: '#EC4899'
  },
  {
    id: 'repetitive_behaviors',
    name: 'Repetitive Behaviors',
    description: 'Patterns of repetitive actions, interests, or routines',
    color: '#6366F1'
  },
  {
    id: 'emotional_regulation',
    name: 'Emotional Regulation',
    description: 'Management and expression of emotions',
    color: '#14B8A6'
  },
  {
    id: 'special_interests',
    name: 'Special Interests',
    description: 'Intensity and focus of personal interests',
    color: '#F97316'
  }
];

// Question-to-Attribute Mapping
// Each question maps to one or more cognitive attributes
export const QUESTION_ATTRIBUTE_MAP: Record<string, string[]> = {
  'question.1': ['social_communication', 'social_reciprocity'],
  'question.2': ['sensory_processing'],
  'question.3': ['executive_function'],
  'question.4': ['cognitive_flexibility'],
  'question.5': ['attention_focus'],
  'question.6': ['literal_thinking'],
  'question.7': ['repetitive_behaviors'],
  'question.8': ['emotional_regulation'],
  'question.9': ['special_interests'],
  'question.10': ['social_communication'],
  'question.11': ['sensory_processing', 'emotional_regulation'],
  'question.12': ['executive_function', 'attention_focus'],
  'question.13': ['cognitive_flexibility'],
  'question.14': ['social_reciprocity'],
  'question.15': ['literal_thinking'],
  'question.16': ['repetitive_behaviors'],
  'question.17': ['special_interests'],
  'question.18': ['sensory_processing'],
  'question.19': ['social_communication'],
  'question.20': ['executive_function'],
  'question.21': ['emotional_regulation'],
  'question.22': ['attention_focus'],
  'question.23': ['cognitive_flexibility'],
  'question.24': ['literal_thinking'],
  'question.25': ['social_reciprocity'],
  'question.26': ['repetitive_behaviors'],
  'question.27': ['special_interests'],
  'question.28': ['sensory_processing'],
  'question.29': ['social_communication'],
  'question.30': ['executive_function'],
  'question.31': ['emotional_regulation'],
  'question.32': ['attention_focus'],
  'question.33': ['cognitive_flexibility'],
  'question.34': ['literal_thinking'],
  'question.35': ['social_reciprocity'],
  'question.36': ['repetitive_behaviors'],
  'question.37': ['special_interests'],
  'question.38': ['sensory_processing'],
  'question.39': ['social_communication'],
  'question.40': ['executive_function'],
  'question.41': ['emotional_regulation'],
  'question.42': ['attention_focus'],
  'question.43': ['cognitive_flexibility'],
  'question.44': ['literal_thinking'],
  'question.45': ['social_reciprocity'],
  'question.46': ['repetitive_behaviors'],
  'question.47': ['special_interests'],
  'question.48': ['sensory_processing'],
  'question.49': ['social_communication'],
  'question.50': ['executive_function'],
  'question.51': ['emotional_regulation'],
  'question.52': ['attention_focus'],
  'question.53': ['cognitive_flexibility'],
  'question.54': ['literal_thinking'],
  'question.55': ['social_reciprocity'],
  'question.56': ['repetitive_behaviors'],
  'question.57': ['special_interests'],
  'question.58': ['sensory_processing'],
  'question.59': ['social_communication'],
  'question.60': ['executive_function'],
  'question.61': ['emotional_regulation'],
  'question.62': ['attention_focus'],
  'question.63': ['cognitive_flexibility'],
  'question.64': ['literal_thinking'],
  'question.65': ['social_reciprocity'],
  'question.66': ['repetitive_behaviors'],
  'question.67': ['special_interests'],
  'question.68': ['sensory_processing'],
  'question.69': ['social_communication'],
  'question.70': ['executive_function'],
  'question.71': ['emotional_regulation'],
  'question.72': ['attention_focus'],
  'question.73': ['cognitive_flexibility'],
  'question.74': ['literal_thinking'],
  'question.75': ['social_reciprocity'],
  'question.76': ['repetitive_behaviors'],
  'question.77': ['special_interests'],
  'question.78': ['sensory_processing'],
  'question.79': ['social_communication', 'emotional_regulation'],
  'question.80': ['special_interests', 'attention_focus']
};

// Predefined patterns based on common attribute combinations
export interface CognitivePattern {
  id: string;
  name: string;
  description: string;
  requiredAttributes: string[];
  minProbability: number;
}

export const COGNITIVE_PATTERNS: CognitivePattern[] = [
  {
    id: 'communication_social_cluster',
    name: 'Communication-Social Cluster',
    description: 'Strong indication of differences in social communication and reciprocity',
    requiredAttributes: ['social_communication', 'social_reciprocity'],
    minProbability: 0.7
  },
  {
    id: 'sensory_regulation_cluster',
    name: 'Sensory-Regulation Cluster',
    description: 'Heightened sensory processing differences and emotional regulation patterns',
    requiredAttributes: ['sensory_processing', 'emotional_regulation'],
    minProbability: 0.7
  },
  {
    id: 'executive_attention_cluster',
    name: 'Executive-Attention Cluster',
    description: 'Differences in executive functioning and attention patterns',
    requiredAttributes: ['executive_function', 'attention_focus'],
    minProbability: 0.7
  },
  {
    id: 'rigid_thinking_cluster',
    name: 'Rigid Thinking Cluster',
    description: 'Preference for literal thinking and reduced cognitive flexibility',
    requiredAttributes: ['literal_thinking', 'cognitive_flexibility'],
    minProbability: 0.7
  },
  {
    id: 'repetitive_interests_cluster',
    name: 'Repetitive-Interests Cluster',
    description: 'Strong patterns of repetitive behaviors and intense special interests',
    requiredAttributes: ['repetitive_behaviors', 'special_interests'],
    minProbability: 0.7
  },
  {
    id: 'comprehensive_profile',
    name: 'Comprehensive Neurodivergent Profile',
    description: 'Multiple domains showing neurodivergent characteristics',
    requiredAttributes: ['social_communication', 'sensory_processing', 'executive_function', 'cognitive_flexibility'],
    minProbability: 0.6
  }
];

export interface AttributeProbability {
  attributeId: string;
  probability: number;
  questionsAnswered: number;
  traitAlignedAnswers: number;
}

export interface CDMResult {
  attributeProbabilities: AttributeProbability[];
  identifiedPatterns: CognitivePattern[];
  overallProfile: {
    dominantAttributes: string[];
    averageProbability: number;
    consistency: number;
  };
}

// CDM Calculation Functions
export function calculateCDMProfile(responses: Record<string, string>): CDMResult {
  const attributeProbabilities = calculateAttributeProbabilities(responses);
  const identifiedPatterns = identifyPatterns(attributeProbabilities);
  const overallProfile = calculateOverallProfile(attributeProbabilities);
  
  return {
    attributeProbabilities,
    identifiedPatterns,
    overallProfile
  };
}

function calculateAttributeProbabilities(responses: Record<string, string>): AttributeProbability[] {
  const attributeStats: Record<string, { total: number; traitAligned: number }> = {};
  
  // Initialize attribute stats
  COGNITIVE_ATTRIBUTES.forEach(attr => {
    attributeStats[attr.id] = { total: 0, traitAligned: 0 };
  });
  
  // Process each response
  Object.entries(responses).forEach(([questionKey, response]) => {
    const questionId = questionKey.replace('question_', 'question.');
    const attributes = QUESTION_ATTRIBUTE_MAP[questionId];
    
    if (attributes) {
      const isTraitAligned = response === '1';
      
      attributes.forEach(attributeId => {
        attributeStats[attributeId].total += 1;
        if (isTraitAligned) {
          attributeStats[attributeId].traitAligned += 1;
        }
      });
    }
  });
  
  // Calculate probabilities using Bayesian approach
  return COGNITIVE_ATTRIBUTES.map(attr => {
    const stats = attributeStats[attr.id];
    const probability = stats.total > 0 ? stats.traitAligned / stats.total : 0;
    
    // Apply Bayesian smoothing (add small constant to avoid extreme values)
    const smoothedProbability = (stats.traitAligned + 0.5) / (stats.total + 1);
    
    return {
      attributeId: attr.id,
      probability: smoothedProbability,
      questionsAnswered: stats.total,
      traitAlignedAnswers: stats.traitAligned
    };
  });
}

function identifyPatterns(probabilities: AttributeProbability[]): CognitivePattern[] {
  const probabilityMap = probabilities.reduce((map, prob) => {
    map[prob.attributeId] = prob.probability;
    return map;
  }, {} as Record<string, number>);
  
  return COGNITIVE_PATTERNS.filter(pattern => {
    return pattern.requiredAttributes.every(attrId => 
      probabilityMap[attrId] >= pattern.minProbability
    );
  });
}

function calculateOverallProfile(probabilities: AttributeProbability[]) {
  const sortedProbs = [...probabilities].sort((a, b) => b.probability - a.probability);
  const dominantAttributes = sortedProbs
    .filter(p => p.probability > 0.6)
    .map(p => p.attributeId);
    
  const averageProbability = probabilities.reduce((sum, p) => sum + p.probability, 0) / probabilities.length;
  
  // Calculate consistency (standard deviation inverse)
  const variance = probabilities.reduce((sum, p) => 
    sum + Math.pow(p.probability - averageProbability, 2), 0) / probabilities.length;
  const consistency = 1 / (1 + Math.sqrt(variance));
  
  return {
    dominantAttributes,
    averageProbability,
    consistency
  };
}