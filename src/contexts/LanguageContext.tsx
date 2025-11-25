import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es' | 'nl' | 'de';

interface TranslationKeys {
  // Home page
  'home.title': string;
  'home.subtitle': string;
  'home.description': string;
  'home.startButton': string;
  'home.disclaimer': string;
  'home.howItWorks': string;
  'home.about': string;
  'home.selfAwareness': string;
  'home.quickSimple': string;
  'home.entertainmentOnly': string;
  'home.personalReflection': string;
  'home.quickQuestionnaire': string;
  'home.personalTool': string;
  'home.duration': string;
  
  // About section
  'about.title': string;
  'about.description': string;
  'about.socialCommunication': string;
  'about.socialCommunicationDesc': string;
  'about.behaviors': string;
  'about.behaviorsDesc': string;
  'about.sensitivities': string;
  'about.sensitivitiesDesc': string;
  'about.selfAwarenessTitle': string;
  'about.selfAwarenessDesc': string;
  'about.whyTakeTitle': string;
  'about.selfUnderstanding': string;
  'about.selfUnderstandingDesc': string;
  'about.professionalGuidance': string;
  'about.professionalGuidanceDesc': string;
  'about.resourcesSupport': string;
  'about.resourcesSupportDesc': string;
  'about.community': string;
  'about.communityDesc': string;

  // Test Info section
  'testInfo.title': string;
  'testInfo.subtitle': string;
  'testInfo.pageTitle': string;
  'testInfo.pageSubtitle': string;
  'testInfo.backToHome': string;
  'testInfo.whatIsIt': string;
  'testInfo.whatIsItDesc': string;
  'testInfo.whatIsItDesc2': string;
  'testInfo.howWorksTitle': string;
  'testInfo.howWorksDesc': string;
  'testInfo.howWorksDesc2': string;
  'testInfo.scientificBasis': string;
  'testInfo.scientificBasisDesc': string;
  'testInfo.limitations': string;
  'testInfo.limitationsDesc': string;
  'testInfo.researcherTitle': string;
  'testInfo.researcherSubtitle': string;
  'testInfo.doctorName': string;
  'testInfo.doctorInfo': string;
  'testInfo.qualifications': string;
  'testInfo.qualificationsDesc': string;
  'testInfo.researchPurpose': string;
  'testInfo.researchPurposeDesc': string;
  'testInfo.dataUsageTitle': string;
  'testInfo.dataUsage1': string;
  'testInfo.dataUsage2': string;
  'testInfo.dataUsage3': string;
  'testInfo.dataUsage4': string;
  'testInfo.startAssessment': string;
  
  // Spectrum Info page
  'spectrum.pageTitle': string;
  'spectrum.pageSubtitle': string;
  'spectrum.backButton': string;
  'spectrum.whatIsTitle': string;
  'spectrum.whatIsDesc1': string;
  'spectrum.whatIsDesc2': string;
  'spectrum.characteristicsTitle': string;
  'spectrum.socialCommunication': string;
  'spectrum.socialCommunication.item1': string;
  'spectrum.socialCommunication.item2': string;
  'spectrum.socialCommunication.item3': string;
  'spectrum.socialCommunication.item4': string;
  'spectrum.behaviorPatterns': string;
  'spectrum.behaviorPatterns.item1': string;
  'spectrum.behaviorPatterns.item2': string;
  'spectrum.behaviorPatterns.item3': string;
  'spectrum.behaviorPatterns.item4': string;
  'spectrum.sensoryProcessing': string;
  'spectrum.sensoryProcessing.item1': string;
  'spectrum.sensoryProcessing.item2': string;
  'spectrum.sensoryProcessing.item3': string;
  'spectrum.sensoryProcessing.item4': string;
  'spectrum.strengthsAbilities': string;
  'spectrum.strengthsAbilities.item1': string;
  'spectrum.strengthsAbilities.item2': string;
  'spectrum.strengthsAbilities.item3': string;
  'spectrum.strengthsAbilities.item4': string;
  'spectrum.whySpectrumTitle': string;
  'spectrum.whySpectrumDesc1': string;
  'spectrum.supportLevelsTitle': string;
  'spectrum.supportLevel1': string;
  'spectrum.supportLevel2': string;
  'spectrum.supportLevel3': string;
  'spectrum.supportLevelsNote': string;
  'spectrum.mythsTitle': string;
  'spectrum.myth1': string;
  'spectrum.truth1': string;
  'spectrum.myth2': string;
  'spectrum.truth2': string;
  'spectrum.myth3': string;
  'spectrum.truth3': string;
  'spectrum.myth4': string;
  'spectrum.truth4': string;
  'spectrum.ctaTitle': string;
  'spectrum.ctaDesc': string;
  'spectrum.ctaButton': string;
  
  // Disclaimer Alert
  'disclaimer.important': string;
  'disclaimer.text': string;
  
  // How it works section
  'howItWorks.title': string;
  'howItWorks.subtitle': string;
  'howItWorks.step1Title': string;
  'howItWorks.step1Desc': string;
  'howItWorks.step1Time': string;
  'howItWorks.step2Title': string;
  'howItWorks.step2Desc': string;
  'howItWorks.step2Time': string;
  'howItWorks.step3Title': string;
  'howItWorks.step3Desc': string;
  'howItWorks.step3Time': string;
  'howItWorks.important': string;
  'howItWorks.disclaimer': string;
  
  // CTA section
  'cta.title': string;
  'cta.subtitle': string;
  'cta.startButton': string;
  'cta.sampleReport': string;
  'cta.infiniteReflections': string;
  'cta.averageTime': string;
  'cta.entertainmentOnly': string;
  
    // CDM Results
    'cdm.profileOverview': string;
    'cdm.profileDescription': string;
    'cdm.averageAlignment': string;
    'cdm.consistency': string;
    'cdm.patternsIdentified': string;
    'cdm.cognitiveProfile': string;
    'cdm.radarDescription': string;
    'cdm.identifiedPatterns': string;
    'cdm.patternsDescription': string;
    'cdm.attributeDetails': string;
    'cdm.attributeDetailsDescription': string;
    'cdm.traitAlignedOf': string;
    'cdm.questions': string;
    'cdm.disclaimerTitle': string;
    'cdm.disclaimerText': string;
    'cdm.generatePdf': string;

    // Cognitive Attributes
    'attr.social_communication': string;
    'attr.social_communication.desc': string;
    'attr.social_reciprocity': string;
    'attr.social_reciprocity.desc': string;
    'attr.sensory_processing': string;
    'attr.sensory_processing.desc': string;
    'attr.executive_function': string;
    'attr.executive_function.desc': string;
    'attr.cognitive_flexibility': string;
    'attr.cognitive_flexibility.desc': string;
    'attr.attention_focus': string;
    'attr.attention_focus.desc': string;
    'attr.literal_thinking': string;
    'attr.literal_thinking.desc': string;
    'attr.repetitive_behaviors': string;
    'attr.repetitive_behaviors.desc': string;
    'attr.emotional_regulation': string;
    'attr.emotional_regulation.desc': string;
    'attr.special_interests': string;
    'attr.special_interests.desc': string;

    // Cognitive Patterns
    'pattern.communication_social_cluster': string;
    'pattern.communication_social_cluster.desc': string;
    'pattern.sensory_regulation_cluster': string;
    'pattern.sensory_regulation_cluster.desc': string;
    'pattern.executive_attention_cluster': string;
    'pattern.executive_attention_cluster.desc': string;
    'pattern.rigid_thinking_cluster': string;
    'pattern.rigid_thinking_cluster.desc': string;
    'pattern.repetitive_interests_cluster': string;
    'pattern.repetitive_interests_cluster.desc': string;
    'pattern.comprehensive_profile': string;
    'pattern.comprehensive_profile.desc': string;

  // Assessment page
  'assessment.title': string;
  'assessment.subtitle': string;
  'assessment.question': string;
  'assessment.of': string;
  'assessment.back': string;
  'assessment.previous': string;
  'assessment.next': string;
  'assessment.finish': string;
  'assessment.backToHome': string;
  
  // Results
  'results.title': string;
  'results.subtitle': string;
  'results.score': string;
  'results.downloadPdf': string;
  'results.retakeTest': string;
  'results.characteristics': string;
  'results.recommendation': string;
  'results.important': string;
  'results.disclaimer': string;
  
  // Response options
  'response.traitAligned': string;
  'response.neurotypicalAligned': string;
  
  // Language selector
  'language.selector': string;
  'language.portuguese': string;
  'language.english': string;
  'language.spanish': string;
  'language.dutch': string;
  'language.german': string;
  
  // Questions
  [key: string]: string; // For dynamic question keys
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, TranslationKeys> = {
  pt: {
    // Home page
    'home.title': 'Avaliação de Características do Espectro Autista',
    'home.subtitle': 'Uma ferramenta de autoconhecimento baseada em características comuns do espectro autista',
    'home.description': 'Este questionário foi desenvolvido para ajudar na identificação de características que podem estar relacionadas ao espectro autista. É importante lembrar que este teste é apenas para fins educacionais e de autoconhecimento.',
    'home.startButton': 'Iniciar Avaliação',
    'home.disclaimer': 'Apenas Entretenimento',
    'home.howItWorks': 'Como Funciona',
    'home.about': 'Sobre o Teste',
    'home.selfAwareness': 'Autoconhecimento',
    'home.quickSimple': 'Rápido e Simples',
    'home.entertainmentOnly': 'Apenas Entretenimento',
    'home.personalReflection': 'Para reflexão e curiosidade pessoal',
    'home.quickQuestionnaire': 'Questionário rápido para reflexão pessoal',
    'home.personalTool': 'Ferramenta para reflexão pessoal, sem valor diagnóstico',
    'home.duration': '15-20 minutos',
    
    // About section
    'about.title': 'O que é esta Autoavaliação?',
    'about.description': 'Esta é uma ferramenta de autoavaliação criada apenas para fins de entretenimento e consciência pessoal.',
    'about.socialCommunication': 'Comunicação Social',
    'about.socialCommunicationDesc': 'Avalia padrões de interação social e comunicação',
    'about.behaviors': 'Comportamentos',
    'about.behaviorsDesc': 'Identifica padrões repetitivos e interesses específicos',
    'about.sensitivities': 'Sensibilidades',
    'about.sensitivitiesDesc': 'Avalia sensibilidades sensoriais e ambientais',
    'about.selfAwarenessTitle': 'Autoconhecimento',
    'about.selfAwarenessDesc': 'Promove maior compreensão sobre si mesmo',
    'about.whyTakeTitle': 'Por que fazer esta avaliação?',
    'about.selfUnderstanding': '✓ Autoconhecimento',
    'about.selfUnderstandingDesc': 'Entenda melhor suas características únicas e padrões comportamentais.',
    'about.professionalGuidance': '✓ Orientação Profissional',
    'about.professionalGuidanceDesc': 'Receba orientações sobre quando buscar avaliação clínica especializada.',
    'about.resourcesSupport': '✓ Recursos e Apoio',
    'about.resourcesSupportDesc': 'Acesse informações e recursos relevantes para seu perfil.',
    'about.community': '✓ Comunidade',
    'about.communityDesc': 'Conecte-se com outros que compartilham experiências similares.',

    // Test Info section
    'testInfo.title': 'Sobre o Teste de Características do Espectro Autista',
    'testInfo.subtitle': 'Entenda como funciona nossa ferramenta de autoavaliação',
    'testInfo.pageTitle': 'Informações Detalhadas do Teste',
    'testInfo.pageSubtitle': 'Conheça mais sobre nossa avaliação e os profissionais envolvidos na pesquisa',
    'testInfo.backToHome': 'Voltar ao Início',
    'testInfo.whatIsIt': 'O que é este teste?',
    'testInfo.whatIsItDesc': 'Esta é uma ferramenta de autoavaliação interativa que ajuda a identificar características comumente associadas ao espectro autista.',
    'testInfo.whatIsItDesc2': 'O teste utiliza uma abordagem baseada em evidências científicas para analisar padrões de comportamento, comunicação social e processamento sensorial de forma não invasiva.',
    'testInfo.howWorksTitle': 'Como funciona?',
    'testInfo.howWorksDesc': 'O teste apresenta situações cotidianas onde você escolhe a resposta que mais se alinha com seu comportamento natural.',
    'testInfo.howWorksDesc2': 'Utilizamos o Modelo de Diagnóstico Cognitivo (CDM) para analisar suas respostas e identificar padrões cognitivos específicos relacionados ao neurodesenvolvimento.',
    'testInfo.scientificBasis': 'Base Científica',
    'testInfo.scientificBasisDesc': 'Nosso questionário é baseado em critérios diagnósticos reconhecidos internacionalmente e pesquisas atuais sobre neurodiversidade. As perguntas abordam áreas-chave como comunicação social, sensibilidades sensoriais, padrões de comportamento e processamento cognitivo.',
    'testInfo.limitations': 'Limitações Importantes',
    'testInfo.limitationsDesc': 'Este teste é exclusivamente para fins educacionais e de autoconhecimento. Não substitui uma avaliação profissional e não deve ser usado para diagnóstico médico. Para uma avaliação completa, sempre consulte um profissional de saúde qualificado.',
    'testInfo.researcherTitle': 'Profissional Responsável pela Pesquisa',
    'testInfo.researcherSubtitle': 'Conheça o profissional que pode utilizar dados anônimos para pesquisa científica',
    'testInfo.doctorName': 'C.F. Collares',
    'testInfo.doctorInfo': 'Carlos Fernando Collares é um educador, médico, neurocientista e contador de histórias apaixonado. Com uma distinta carreira dedicada ao avanço da pesquisa educacional, contribuiu para métodos inovadores de avaliação e reformas curriculares no ensino da área da saúde.',
    'testInfo.qualifications': 'Qualificações',
    'testInfo.qualificationsDesc': 'Educador, médico e neurocientista com coração para inspirar estudantes e profissionais. Também é uma mente criativa que embarca na jornada como autor de livros para crianças, adolescentes e adultos, combinando ciência, filosofia, imaginação e mensagens significativas.',
    'testInfo.researchPurpose': 'Propósito da Pesquisa',
    'testInfo.researchPurposeDesc': 'Os dados coletados podem ser utilizados para pesquisas científicas sobre padrões cognitivos e desenvolvimento de melhores ferramentas de avaliação.',
    'testInfo.dataUsageTitle': 'Como seus dados podem ser utilizados:',
    'testInfo.dataUsage1': 'Todos os dados são completamente anônimos e não identificáveis',
    'testInfo.dataUsage2': 'Utilizados exclusivamente para pesquisa científica sobre neurodiversidade',
    'testInfo.dataUsage3': 'Podem contribuir para o desenvolvimento de melhores ferramentas de avaliação',
    'testInfo.dataUsage4': 'Nunca são compartilhados com terceiros para fins comerciais',
    'testInfo.startAssessment': 'Iniciar Avaliação',
    
    // Spectrum Info page
    'spectrum.pageTitle': 'Entendendo o Espectro Autista',
    'spectrum.pageSubtitle': 'Uma jornada para compreender a diversidade neurocognitiva e celebrar diferentes formas de processar o mundo',
    'spectrum.backButton': 'Voltar',
    'spectrum.whatIsTitle': 'O Que É o Espectro Autista?',
    'spectrum.whatIsDesc1': 'O Transtorno do Espectro Autista (TEA) é uma condição do neurodesenvolvimento que afeta a forma como uma pessoa percebe, processa e interage com o mundo ao seu redor. É chamado de "espectro" porque se manifesta de formas muito variadas em diferentes pessoas.',
    'spectrum.whatIsDesc2': 'Cada pessoa autista é única, com suas próprias forças, desafios, interesses e necessidades. Algumas podem precisar de apoio significativo no dia a dia, enquanto outras vivem de forma mais independente, mas todas compartilham diferenças na comunicação social e nos padrões de comportamento.',
    'spectrum.characteristicsTitle': 'Características Principais',
    'spectrum.socialCommunication': 'Comunicação Social',
    'spectrum.socialCommunication.item1': '• Dificuldade em entender sinais sociais não-verbais',
    'spectrum.socialCommunication.item2': '• Preferência por comunicação direta e literal',
    'spectrum.socialCommunication.item3': '• Desafios em manter conversas recíprocas',
    'spectrum.socialCommunication.item4': '• Diferentes formas de expressar emoções',
    'spectrum.behaviorPatterns': 'Padrões de Comportamento',
    'spectrum.behaviorPatterns.item1': '• Interesses intensos e específicos',
    'spectrum.behaviorPatterns.item2': '• Necessidade de rotinas e previsibilidade',
    'spectrum.behaviorPatterns.item3': '• Movimentos repetitivos (stimming)',
    'spectrum.behaviorPatterns.item4': '• Atenção detalhada a padrões e detalhes',
    'spectrum.sensoryProcessing': 'Processamento Sensorial',
    'spectrum.sensoryProcessing.item1': '• Sensibilidade aumentada ou reduzida a estímulos',
    'spectrum.sensoryProcessing.item2': '• Reações intensas a sons, luzes ou texturas',
    'spectrum.sensoryProcessing.item3': '• Preferências alimentares específicas',
    'spectrum.sensoryProcessing.item4': '• Necessidade de estímulos sensoriais específicos',
    'spectrum.strengthsAbilities': 'Forças e Habilidades',
    'spectrum.strengthsAbilities.item1': '• Atenção excepcional aos detalhes',
    'spectrum.strengthsAbilities.item2': '• Memória e concentração profundas',
    'spectrum.strengthsAbilities.item3': '• Pensamento lógico e sistemático',
    'spectrum.strengthsAbilities.item4': '• Criatividade e perspectivas únicas',
    'spectrum.whySpectrumTitle': 'Por Que "Espectro"?',
    'spectrum.whySpectrumDesc1': 'O termo "espectro" reflete a enorme diversidade de como o autismo se manifesta. Não existe uma única forma de "ser autista" - cada pessoa está em um ponto único do espectro com suas próprias características.',
    'spectrum.supportLevelsTitle': 'Níveis de Suporte:',
    'spectrum.supportLevel1': 'Nível 1: Necessita de algum suporte em situações sociais específicas',
    'spectrum.supportLevel2': 'Nível 2: Necessita de suporte substancial no dia a dia',
    'spectrum.supportLevel3': 'Nível 3: Necessita de suporte muito substancial em várias áreas',
    'spectrum.supportLevelsNote': 'É importante lembrar que o nível de suporte necessário não define o valor ou potencial de uma pessoa - apenas indica o tipo de apoio que pode ser benéfico.',
    'spectrum.mythsTitle': 'Mitos e Verdades',
    'spectrum.myth1': '❌ Mito: Pessoas autistas não sentem emoções',
    'spectrum.truth1': '✓ Verdade: Pessoas autistas sentem emoções profundamente, mas podem expressá-las de maneiras diferentes',
    'spectrum.myth2': '❌ Mito: Todas as pessoas autistas têm habilidades extraordinárias',
    'spectrum.truth2': '✓ Verdade: Como todos, pessoas autistas têm diferentes talentos e habilidades - algumas podem ter habilidades excepcionais em áreas específicas, outras não',
    'spectrum.myth3': '❌ Mito: O autismo pode ser "curado"',
    'spectrum.truth3': '✓ Verdade: O autismo é uma condição neurológica permanente. O foco deve estar em apoio, aceitação e desenvolvimento de habilidades',
    'spectrum.myth4': '❌ Mito: Pessoas autistas preferem ficar sozinhas',
    'spectrum.truth4': '✓ Verdade: Muitas pessoas autistas desejam conexões sociais, mas podem precisar de abordagens diferentes de interação',
    'spectrum.ctaTitle': 'Quer Saber Mais Sobre Seu Perfil?',
    'spectrum.ctaDesc': 'Nossa avaliação baseada no modelo CDM pode ajudar você a entender melhor suas características e encontrar os recursos adequados.',
    'spectrum.ctaButton': 'Iniciar Avaliação',
    
    // Disclaimer Alert
    'disclaimer.important': 'IMPORTANTE:',
    'disclaimer.text': 'Esta ferramenta é destinada apenas para entretenimento e reflexão pessoal. Não possui validade científica, diagnóstica ou clínica. Os resultados não devem ser interpretados como um diagnóstico médico. Se você suspeita ter características do espectro autista, procure um profissional qualificado (psicólogo ou psiquiatra especializado em autismo) para uma avaliação adequada.',
    
    // How it works section
    'howItWorks.title': 'Como Funciona',
    'howItWorks.subtitle': 'Um processo simples e científico em 3 etapas para sua autoavaliação',
    'howItWorks.step1Title': 'Responda as Perguntas',
    'howItWorks.step1Desc': 'Complete um questionário cuidadosamente elaborado com perguntas sobre comportamentos, comunicação e sensibilidades.',
    'howItWorks.step1Time': '15-20 min',
    'howItWorks.step2Title': 'Análise dos Resultados',
    'howItWorks.step2Desc': 'Nosso sistema analisa suas respostas baseado em critérios científicos reconhecidos internacionalmente.',
    'howItWorks.step2Time': 'Instantâneo',
    'howItWorks.step3Title': 'Receba seu Relatório',
    'howItWorks.step3Desc': 'Obtenha um relatório detalhado com insights, orientações e recursos personalizados para seu perfil.',
    'howItWorks.step3Time': 'Imediato',
    'howItWorks.important': 'Importante: Esta não é uma ferramenta de diagnóstico',
    'howItWorks.disclaimer': 'Esta avaliação é uma ferramenta de autoconhecimento baseada em critérios científicos.',
    
    // CTA section
    'cta.title': 'Pronto para começar sua jornada de autoconhecimento?',
    'cta.subtitle': 'Explore suas características através de perguntas reflexivas.',
    'cta.startButton': 'Iniciar Avaliação Agora',
    'cta.sampleReport': 'Ver Exemplo de Relatório',
    'cta.infiniteReflections': 'Reflexões Possíveis',
    'cta.averageTime': 'Tempo Médio',
    'cta.entertainmentOnly': 'Apenas Entretenimento',
    
    // Assessment page
    'assessment.title': 'Avaliação de Características do Espectro Autista',
    'assessment.subtitle': 'Responda as questões de acordo com como você se identifica com cada afirmação.',
    'assessment.question': 'Questão',
    'assessment.of': 'de',
    'assessment.back': 'Voltar',
    'assessment.previous': 'Anterior',
    'assessment.next': 'Próxima',
    'assessment.finish': 'Finalizar Avaliação',
    'assessment.backToHome': 'Voltar ao Início',
    
    // Results
    'results.title': 'Resultado da Avaliação',
    'results.subtitle': 'Análise baseada em suas respostas',
    'results.score': 'Pontuação',
    'results.downloadPdf': 'Baixar PDF',
    'results.retakeTest': 'Refazer Teste',
    'results.characteristics': 'Características identificadas:',
    'results.recommendation': 'Recomendação:',
    'results.important': 'Importante:',
    'results.disclaimer': 'Este teste é apenas para entretenimento e autoconhecimento.',
    
    // Response options
    'response.traitAligned': 'Opção A',
    'response.neurotypicalAligned': 'Opção B',
    
    // CDM Results
    'cdm.profileOverview': 'Visão Geral do Perfil',
    'cdm.profileDescription': 'Perfil cognitivo baseado no Modelo de Diagnóstico Cognitivo',
    'cdm.averageAlignment': 'Alinhamento Médio',
    'cdm.consistency': 'Consistência',
    'cdm.patternsIdentified': 'Padrões Identificados',
    'cdm.cognitiveProfile': 'Perfil Cognitivo',
    'cdm.radarDescription': 'Gráfico radar mostrando probabilidades de alinhamento para cada atributo cognitivo',
    'cdm.identifiedPatterns': 'Padrões Identificados',
    'cdm.patternsDescription': 'Combinações de atributos que indicam características neurodivergentes',
    'cdm.attributeDetails': 'Detalhes dos Atributos',
    'cdm.attributeDetailsDescription': 'Análise detalhada de cada atributo cognitivo',
    'cdm.traitAlignedOf': 'respostas alinhadas de',
    'cdm.questions': 'questões',
    'cdm.disclaimerTitle': 'Ferramenta de Autoconhecimento',
    'cdm.disclaimerText': 'Este é um instrumento de autoavaliação para reflexão pessoal. Não constitui diagnóstico médico ou psicológico. Para avaliação profissional, consulte um especialista qualificado.',
    'cdm.generatePdf': 'Gerar PDF',

    // Cognitive Attributes
    'attr.social_communication': 'Comunicação Social',
    'attr.social_communication.desc': 'Padrões de comunicação verbal e não-verbal em contextos sociais',
    'attr.social_reciprocity': 'Reciprocidade Social',
    'attr.social_reciprocity.desc': 'Interações sociais de ida e volta e padrões de relacionamento',
    'attr.sensory_processing': 'Processamento Sensorial',
    'attr.sensory_processing.desc': 'Resposta a estímulos sensoriais e fatores ambientais',
    'attr.executive_function': 'Função Executiva',
    'attr.executive_function.desc': 'Habilidades de planejamento, organização e gerenciamento de tarefas',
    'attr.cognitive_flexibility': 'Flexibilidade Cognitiva',
    'attr.cognitive_flexibility.desc': 'Adaptabilidade à mudança e transição entre tarefas ou conceitos',
    'attr.attention_focus': 'Atenção e Foco',
    'attr.attention_focus.desc': 'Padrões de concentração e regulação da atenção',
    'attr.literal_thinking': 'Pensamento Literal',
    'attr.literal_thinking.desc': 'Estilo de processamento e interpretação de informações',
    'attr.repetitive_behaviors': 'Comportamentos Repetitivos',
    'attr.repetitive_behaviors.desc': 'Padrões de ações, interesses ou rotinas repetitivas',
    'attr.emotional_regulation': 'Regulação Emocional',
    'attr.emotional_regulation.desc': 'Gerenciamento e expressão de emoções',
    'attr.special_interests': 'Interesses Especiais',
    'attr.special_interests.desc': 'Intensidade e foco de interesses pessoais',

    // Cognitive Patterns
    'pattern.communication_social_cluster': 'Cluster Comunicação-Social',
    'pattern.communication_social_cluster.desc': 'Forte indicação de diferenças na comunicação social e reciprocidade',
    'pattern.sensory_regulation_cluster': 'Cluster Sensorial-Regulação',
    'pattern.sensory_regulation_cluster.desc': 'Diferenças intensificadas no processamento sensorial e padrões de regulação emocional',
    'pattern.executive_attention_cluster': 'Cluster Executivo-Atenção',
    'pattern.executive_attention_cluster.desc': 'Diferenças no funcionamento executivo e padrões de atenção',
    'pattern.rigid_thinking_cluster': 'Cluster Pensamento Rígido',
    'pattern.rigid_thinking_cluster.desc': 'Preferência por pensamento literal e flexibilidade cognitiva reduzida',
    'pattern.repetitive_interests_cluster': 'Cluster Repetitivo-Interesses',
    'pattern.repetitive_interests_cluster.desc': 'Padrões fortes de comportamentos repetitivos e interesses especiais intensos',
    'pattern.comprehensive_profile': 'Perfil Neurodivergente Abrangente',
    'pattern.comprehensive_profile.desc': 'Múltiplos domínios mostrando características neurodivergentes',

    // Language selector
    'language.selector': 'Idioma',
    'language.portuguese': 'Português (BR)',
    'language.english': 'English',
    'language.spanish': 'Español',
    'language.dutch': 'Nederlands',
    'language.german': 'Deutsch',
    
    // Questions with new answer structure
    'question.1': 'Em uma reunião de trabalho, seu colega faz uma piada que todos acham engraçada, mas você não entende por que é engraçado.',
    'question.1.traitAnswer': 'Continue focando no conteúdo da reunião',
    'question.1.neurotypicalAnswer': 'Rir junto com todos os outros',
    'question.2': 'Alguém diz "Você pode me dar uma mão?" enquanto carrega caixas pesadas.',
    'question.2.traitAnswer': 'Ajudá-los a carregar as caixas',
    'question.2.neurotypicalAnswer': 'Fisicamente oferecer sua mão para eles',
    'question.3': 'Um colega de trabalho menciona que teve uma "manhã difícil" com um leve sorriso.',
    'question.3.traitAnswer': 'Oferecer simpatia breve e mudar de assunto',
    'question.3.neurotypicalAnswer': 'Perguntar detalhes específicos sobre o que deu errado',
    'question.4': 'Durante uma conversa casual, alguém pergunta "Como foi seu fim de semana?"',
    'question.4.traitAnswer': 'Compartilhar um destaque brevemente',
    'question.4.neurotypicalAnswer': 'Dar um relato cronológico detalhado',
    'question.5': 'Seu amigo diz "Estou morrendo de vergonha" depois de um erro.',
    'question.5.traitAnswer': 'Reconhecer que eles se sentem muito envergonhados',
    'question.5.neurotypicalAnswer': 'Expressar preocupação sobre sua saúde',
    'question.6': 'Você está se sentindo estressado após um longo dia de trabalho/escola.',
    'question.6.traitAnswer': 'Assistir um filme favorito que você já viu muitas vezes',
    'question.6.neurotypicalAnswer': 'Tentar uma nova atividade que você nunca fez antes',
    'question.7': 'Enquanto se concentra em uma tarefa, você se percebe batendo os dedos ritmicamente.',
    'question.7.traitAnswer': 'Continuar batendo porque ajuda você a se concentrar',
    'question.7.neurotypicalAnswer': 'Parar de bater imediatamente',
    'question.8': 'Você precisa organizar seu espaço de trabalho.',
    'question.8.traitAnswer': 'Organizar os itens no mesmo padrão exato de sempre',
    'question.8.neurotypicalAnswer': 'Tentar um novo sistema organizacional',
    'question.9': 'Ao caminhar por um piso ladrilhado, você nota o padrão.',
    'question.9.traitAnswer': 'Sentir-se compelido a pisar em um padrão específico',
    'question.9.neurotypicalAnswer': 'Caminhar normalmente sem pensar nisso',
    'question.10': 'Você está esperando em uma fila longa.',
    'question.10.traitAnswer': 'Balançar levemente ou mexer com um objeto',
    'question.10.neurotypicalAnswer': 'Ficar parado e olhar ao redor',
    'question.11': 'Você entra em um restaurante movimentado com luzes brilhantes, música alta e cheiros fortes de comida.',
    'question.11.traitAnswer': 'Achar avassalador e considerar sair',
    'question.11.neurotypicalAnswer': 'Aproveitar a atmosfera animada',
    'question.12': 'Você precisa comprar roupas novas, mas a loja só tem itens feitos de um tecido que parece áspero.',
    'question.12.traitAnswer': 'Sair sem comprar nada',
    'question.12.neurotypicalAnswer': 'Comprar as roupas mesmo assim',
    'question.13': 'Alguém usando perfume forte se senta ao seu lado no transporte público.',
    'question.13.traitAnswer': 'Sentir náusea e precisar se afastar',
    'question.13.neurotypicalAnswer': 'Notar mas permanecer no seu lugar',
    'question.14': 'O alarme de incêndio dispara inesperadamente durante um simulacro.',
    'question.14.traitAnswer': 'Cobrir seus ouvidos e se sentir angustiado',
    'question.14.neurotypicalAnswer': 'Seguir calmamente os procedimentos de evacuação',
    'question.15': 'Oferecem-lhe comida com múltiplas texturas misturadas.',
    'question.15.traitAnswer': 'Recusar ou comer apenas texturas similares',
    'question.15.neurotypicalAnswer': 'Comer sem preocupação',
    'question.16': 'Um amigo conta animadamente sobre seus planos de férias.',
    'question.16.traitAnswer': 'Esperar eles terminarem e então falar sobre seus interesses',
    'question.16.neurotypicalAnswer': 'Fazer perguntas de acompanhamento sobre a viagem deles',
    'question.17': 'Durante uma conversa, você nota a outra pessoa olhando para o relógio.',
    'question.17.traitAnswer': 'Continuar explicando seu ponto em detalhes',
    'question.17.neurotypicalAnswer': 'Resumir rapidamente o que você está dizendo',
    'question.18': 'Alguém compartilha que está se sentindo triste porque seu animal de estimação está doente.',
    'question.18.traitAnswer': 'Compartilhar fatos sobre condições de saúde animal',
    'question.18.neurotypicalAnswer': 'Expressar simpatia e perguntar como eles estão lidando',
    'question.19': 'Em uma conversa em grupo, outros estão discutindo planos de fim de semana.',
    'question.19.traitAnswer': 'Esperar silenciosamente até alguém perguntar diretamente',
    'question.19.neurotypicalAnswer': 'Oferecer seus próprios planos quando apropriado',
    'question.20': 'Um colega menciona que está tendo dificuldades com um projeto.',
    'question.20.traitAnswer': 'Continuar com seu próprio trabalho a menos que seja perguntado',
    'question.20.neurotypicalAnswer': 'Oferecer ajuda ou compartilhar conselhos',
    'question.21': 'Sua rota usual para o trabalho está bloqueada devido à construção.',
    'question.21.traitAnswer': 'Sentir-se muito angustiado e ter dificuldade para funcionar',
    'question.21.neurotypicalAnswer': 'Facilmente pegar uma rota alternativa',
    'question.22': 'Os planos para uma viagem de fim de semana são cancelados repentinamente.',
    'question.22.traitAnswer': 'Precisar de tempo significativo para se ajustar à mudança',
    'question.22.neurotypicalAnswer': 'Rapidamente fazer planos alternativos',
    'question.23': 'Sua cafeteria favorita fica sem seu pedido usual.',
    'question.23.traitAnswer': 'Sair sem pedir nada',
    'question.23.neurotypicalAnswer': 'Tentar algo diferente',
    'question.24': 'Uma reunião é reagendada no último minuto.',
    'question.24.traitAnswer': 'Sentir-se ansioso e perturbado o dia todo',
    'question.24.neurotypicalAnswer': 'Ajustar sua agenda de acordo',
    'question.25': 'Seu assento usual no trabalho/escola é ocupado por outra pessoa.',
    'question.25.traitAnswer': 'Sentir-se inquieto e incapaz de se concentrar',
    'question.25.neurotypicalAnswer': 'Sentar em outro lugar sem problema',
    'question.26': 'Você tem tempo livre no fim de semana.',
    'question.26.traitAnswer': 'Passar horas no seu tópico/hobby favorito',
    'question.26.neurotypicalAnswer': 'Fazer várias atividades diferentes',
    'question.27': 'Alguém pergunta sobre seus interesses.',
    'question.27.traitAnswer': 'Falar extensivamente sobre um tópico específico',
    'question.27.neurotypicalAnswer': 'Mencionar vários interesses diferentes brevemente',
    'question.28': 'Você está escolhendo um livro para ler.',
    'question.28.traitAnswer': 'Escolher um sobre sua área de interesse especial',
    'question.28.neurotypicalAnswer': 'Tentar um gênero completamente novo',
    'question.29': 'Planejando um destino de férias.',
    'question.29.traitAnswer': 'Escolher baseado no seu interesse específico',
    'question.29.neurotypicalAnswer': 'Escolher um lugar para relaxamento geral',
    'question.30': 'Decorando seu espaço de vida.',
    'question.30.traitAnswer': 'Exibir coleções extensas relacionadas a um tema',
    'question.30.neurotypicalAnswer': 'Misturar vários estilos decorativos',
    'question.31': 'Durante conversas, fazer contato visual parece:',
    'question.31.traitAnswer': 'Desconfortável ou distrativo',
    'question.31.neurotypicalAnswer': 'Natural e fácil',
    'question.32': 'Alguém acena para você do outro lado da sala.',
    'question.32.traitAnswer': 'Incerto se eles querem dizer você ou como responder',
    'question.32.neurotypicalAnswer': 'Acenar de volta imediatamente',
    'question.33': 'Ler expressões faciais em outros é:',
    'question.33.traitAnswer': 'Difícil e requer esforço consciente',
    'question.33.neurotypicalAnswer': 'Automático e intuitivo',
    'question.34': 'Usar gestos ao falar:',
    'question.34.traitAnswer': 'Parece não natural ou esquecível',
    'question.34.neurotypicalAnswer': 'Acontece naturalmente sem pensar',
    'question.35': 'O tom de alguém soa diferente de suas palavras.',
    'question.35.traitAnswer': 'Focar apenas nas palavras literais',
    'question.35.neurotypicalAnswer': 'Captar o subtexto emocional',
    'question.36': 'Iniciar um projeto de várias etapas:',
    'question.36.traitAnswer': 'Sentir-se sobrecarregado e não saber por onde começar',
    'question.36.neurotypicalAnswer': 'Dividir e começar sistematicamente',
    'question.37': 'Gerenciar múltiplos prazos:',
    'question.37.traitAnswer': 'Ter dificuldade para priorizar e frequentemente perder alguns',
    'question.37.neurotypicalAnswer': 'Acompanhar e completar todos no prazo',
    'question.38': 'Fazer as malas para uma viagem:',
    'question.38.traitAnswer': 'Esquecer itens essenciais apesar de tentar',
    'question.38.neurotypicalAnswer': 'Lembrar de tudo que é necessário',
    'question.39': 'Seguir instruções de várias partes:',
    'question.39.traitAnswer': 'Precisar que sejam repetidas ou escritas',
    'question.39.neurotypicalAnswer': 'Lembrar e seguir facilmente',
    'question.40': 'Alternar entre diferentes tarefas:',
    'question.40.traitAnswer': 'Achar muito difícil e desgastante',
    'question.40.neurotypicalAnswer': 'Mover entre tarefas suavemente',
    'question.41': 'Alguém diz "Quebre uma perna!" antes de sua apresentação.',
    'question.41.traitAnswer': 'Sentir-se confuso sobre por que eles desejariam dano',
    'question.41.neurotypicalAnswer': 'Reconhecer como um desejo de boa sorte',
    'question.42': 'Ler "nas entrelinhas" em e-mails:',
    'question.42.traitAnswer': 'Apenas entender o que está explicitamente declarado',
    'question.42.neurotypicalAnswer': 'Captar significados implícitos',
    'question.43': 'Alguém diz "Isso é ótimo" em um tom monótono após más notícias.',
    'question.43.traitAnswer': 'Reconhecer que eles estão sendo sarcásticos',
    'question.43.neurotypicalAnswer': 'Pensar que eles genuinamente acham ótimo',
    'question.44': 'Entender metáforas na conversa:',
    'question.44.traitAnswer': 'Tomá-las literalmente no início',
    'question.44.neurotypicalAnswer': 'Imediatamente compreender o significado figurativo',
    'question.45': 'Alguém diz que está "nas nuvens".',
    'question.45.traitAnswer': 'Saber que eles estão muito felizes',
    'question.45.neurotypicalAnswer': 'Se perguntar sobre a referência às nuvens',
    'question.46': 'Um amigo cancela planos no último minuto.',
    'question.46.traitAnswer': 'Focar em como isso perturba sua agenda',
    'question.46.neurotypicalAnswer': 'Se perguntar o que pode estar errado com eles',
    'question.47': 'Alguém discorda da sua opinião.',
    'question.47.traitAnswer': 'Tentar ver o ponto de vista deles',
    'question.47.neurotypicalAnswer': 'Não conseguir entender como eles veem diferente',
    'question.48': 'Prever como os outros vão reagir:',
    'question.48.traitAnswer': 'Geralmente preciso nas previsões',
    'question.48.neurotypicalAnswer': 'Frequentemente surpreso pelas respostas deles',
    'question.49': 'Alguém não compartilha seu entusiasmo por um tópico.',
    'question.49.traitAnswer': 'Aceitar que eles têm interesses diferentes',
    'question.49.neurotypicalAnswer': 'Continuar explicando para mudar sua opinião',
    'question.50': 'Entender por que alguém pode mentir para poupar sentimentos:',
    'question.50.traitAnswer': 'Entender o raciocínio social',
    'question.50.neurotypicalAnswer': 'Acreditar que honestidade é sempre necessária',
    'question.51': 'Em uma festa, alguém que você não conhece bem começa a contar sobre seus problemas.',
    'question.51.traitAnswer': 'Escutar brevemente e então falar sobre um tópico de seu interesse',
    'question.51.neurotypicalAnswer': 'Mostrar preocupação e oferecer comentários de apoio',
    'question.52': 'Seu colega de trabalho parece chateado, mas não disse nada diretamente.',
    'question.52.traitAnswer': 'Gentilmente perguntar se eles estão bem',
    'question.52.neurotypicalAnswer': 'Continuar trabalhando a menos que eles peçam ajuda especificamente',
    'question.53': 'Em um grupo, alguém faz uma piada sobre experiências compartilhadas das quais você não participou.',
    'question.53.traitAnswer': 'Sorrir e deixar a conversa continuar',
    'question.53.neurotypicalAnswer': 'Pedir explicação detalhada da referência',
    'question.54': 'Um amigo insinua que gostaria de ser convidado para seu evento.',
    'question.54.traitAnswer': 'Estender um convite',
    'question.54.neurotypicalAnswer': 'Não responder a menos que eles peçam diretamente',
    'question.55': 'A linguagem corporal de alguém sugere que eles estão desconfortáveis com um tópico.',
    'question.55.traitAnswer': 'Mudar de assunto',
    'question.55.neurotypicalAnswer': 'Continuar a discussão como planejado',
    'question.56': 'Seu tempo de hobby de interesse especial é interrompido por um visitante inesperado.',
    'question.56.traitAnswer': 'Sentir-se extremamente ansioso e incapaz de se envolver com o visitante',
    'question.56.neurotypicalAnswer': 'Pausar seu hobby e cumprimentar o visitante',
    'question.57': 'Você não consegue encontrar sua marca usual na loja, apenas alternativas.',
    'question.57.traitAnswer': 'Sair sem comprar nada, sentindo-se muito inquieto',
    'question.57.neurotypicalAnswer': 'Tentar uma marca diferente',
    'question.58': 'Seu fim de semana planejado de foco no seu interesse é interrompido por uma obrigação familiar.',
    'question.58.traitAnswer': 'Sentir-se sobrecarregado e incapaz de aproveitar o tempo em família',
    'question.58.neurotypicalAnswer': 'Se adaptar e se envolver com a família',
    'question.59': 'Uma loja se reorganiza, movendo seus itens de interesse especial para uma seção diferente.',
    'question.59.traitAnswer': 'Sentir-se angustiado e considerar não comprar mais lá',
    'question.59.neurotypicalAnswer': 'Simplesmente ir para a nova localização',
    'question.60': 'Sua rotina usual para desfrutar de seu interesse é impossível devido às circunstâncias.',
    'question.60.traitAnswer': 'Incapaz de aproveitar de qualquer outra forma',
    'question.60.neurotypicalAnswer': 'Encontrar uma abordagem alternativa',
    'question.61': 'Em um espaço barulhento e lotado, você se sente sobrecarregado.',
    'question.61.traitAnswer': 'Começar a balançar ou bater as mãos para se acalmar',
    'question.61.neurotypicalAnswer': 'Respirar fundo e ficar parado',
    'question.62': 'As luzes fluorescentes em seu espaço de trabalho estão te incomodando.',
    'question.62.traitAnswer': 'Desenvolver um padrão repetitivo de apertar os olhos ou movimento de cabeça',
    'question.62.neurotypicalAnswer': 'Pedir para mudar a iluminação',
    'question.63': 'Textura de roupa desconfortável durante todo o dia.',
    'question.63.traitAnswer': 'Constantemente ajustar e mexer com a roupa',
    'question.63.neurotypicalAnswer': 'Ignorar o desconforto',
    'question.64': 'Múltiplos sons sobrepostos em seu ambiente.',
    'question.64.traitAnswer': 'Criar movimentos ou sons rítmicos para lidar',
    'question.64.neurotypicalAnswer': 'Usar tampões de ouvido ou fones de ouvido',
    'question.65': 'Cheiros fortes causam desconforto em um ambiente social.',
    'question.65.traitAnswer': 'Envolver-se em comportamentos repetitivos para gerenciar angústia',
    'question.65.neurotypicalAnswer': 'Se desculpar brevemente',
    'question.66': 'Pedido para explicar um projeto complexo que você está lutando para organizar.',
    'question.66.traitAnswer': 'Dar detalhes dispersos sem estrutura clara',
    'question.66.neurotypicalAnswer': 'Fornecer um resumo coerente',
    'question.67': 'Precisa comunicar múltiplos atrasos de tarefas para sua equipe.',
    'question.67.traitAnswer': 'Ter dificuldade para priorizar o que dizer e quando',
    'question.67.neurotypicalAnswer': 'Enviar atualizações claras e oportunas',
    'question.68': 'Seguir uma conversa enquanto gerencia outros pensamentos.',
    'question.68.traitAnswer': 'Perder o foco e perder sinais sociais',
    'question.68.neurotypicalAnswer': 'Permanecer envolvido durante toda',
    'question.69': 'Planejar e explicar uma atividade em grupo.',
    'question.69.traitAnswer': 'Plano claro que todos entendem',
    'question.69.neurotypicalAnswer': 'Ideias confusas, outros parecem confusos',
    'question.70': 'Responder a perguntas inesperadas em uma reunião.',
    'question.70.traitAnswer': 'Precisar de tempo para processar, dar respostas pouco claras',
    'question.70.neurotypicalAnswer': 'Responder claramente e prontamente',
    'question.71': 'Seu amigo diz "Estou com tanta fome que poderia comer um cavalo" enquanto parece cansado.',
    'question.71.traitAnswer': 'Sugerir restaurantes e se perguntar por que eles mencionaram cavalos',
    'question.71.neurotypicalAnswer': 'Reconhecer que eles estão com muita fome e provavelmente cansados também',
    'question.72': 'Em uma discussão em grupo, alguém faz um comentário sarcástico sobre o tempo.',
    'question.72.traitAnswer': 'Entender que eles estão fazendo uma piada social',
    'question.72.neurotypicalAnswer': 'Corrigir sua declaração com fatos reais sobre o tempo',
    'question.73': 'Um colega diz "Claro, empilhe mais trabalho em mim" com um sorriso forçado.',
    'question.73.traitAnswer': 'Perceber que eles estão sobrecarregados',
    'question.73.neurotypicalAnswer': 'Pensar que eles querem mais tarefas e oferecer algumas',
    'question.74': 'Alguém conta uma mentira branca para evitar magoar os sentimentos de outro na sua frente.',
    'question.74.traitAnswer': 'Entender a bondade social',
    'question.74.neurotypicalAnswer': 'Apontar a verdade para todos',
    'question.75': 'Um amigo exagera uma história para entretenimento em uma festa.',
    'question.75.traitAnswer': 'Aproveitar a versão divertida',
    'question.75.neurotypicalAnswer': 'Corrigir as imprecisões publicamente',
    'question.76': 'Um museu sobre seu interesse especial tem luzes brilhantes e multidões.',
    'question.76.traitAnswer': 'Sair apesar de querer ver as exposições',
    'question.76.neurotypicalAnswer': 'Superar o desconforto',
    'question.77': 'Seus itens relacionados ao interesse têm texturas que te incomodam.',
    'question.77.traitAnswer': 'Limitar o envolvimento apesar de amar o tópico',
    'question.77.neurotypicalAnswer': 'Manuseá-los mesmo assim',
    'question.78': 'Uma convenção para seu interesse está em um local desafiador sensorialmente.',
    'question.78.traitAnswer': 'Pular apesar de realmente querer ir',
    'question.78.neurotypicalAnswer': 'Participar com preparações',
    'question.79': 'Conteúdo online sobre seu interesse tem sons de reprodução automática.',
    'question.79.traitAnswer': 'Evitar o recurso inteiramente',
    'question.79.neurotypicalAnswer': 'Silenciar e continuar',
    'question.80': 'Seu interesse requer visitar lojas movimentadas e barulhentas.',
    'question.80.traitAnswer': 'Gradualmente restringir o interesse',
    'question.80.neurotypicalAnswer': 'Fazer compras durante horários silenciosos'
  },

  en: {
    // Home page
    'home.title': 'Autism Spectrum Characteristics Assessment',
    'home.subtitle': 'A self-awareness tool based on common autism spectrum characteristics',
    'home.description': 'This questionnaire was developed to help identify characteristics that may be related to the autism spectrum.',
    'home.startButton': 'Start Assessment',
    'home.disclaimer': 'Entertainment Only',
    'home.howItWorks': 'How It Works',
    'home.about': 'About the Test',
    'home.selfAwareness': 'Self-awareness',
    'home.quickSimple': 'Quick and Simple',
    'home.entertainmentOnly': 'Entertainment Only',
    'home.personalReflection': 'For reflection and personal curiosity',
    'home.quickQuestionnaire': 'Quick questionnaire for personal reflection',
    'home.personalTool': 'Tool for personal reflection, without diagnostic value',
    'home.duration': '15-20 minutes',
    
    // About section
    'about.title': 'What is this Self-Assessment?',
    'about.description': 'This is a self-assessment tool created solely for entertainment and personal awareness purposes.',
    'about.socialCommunication': 'Social Communication',
    'about.socialCommunicationDesc': 'Evaluates social interaction and communication patterns',
    'about.behaviors': 'Behaviors',
    'about.behaviorsDesc': 'Identifies repetitive patterns and specific interests',
    'about.sensitivities': 'Sensitivities',
    'about.sensitivitiesDesc': 'Evaluates sensory and environmental sensitivities',
    'about.selfAwarenessTitle': 'Self-awareness',
    'about.selfAwarenessDesc': 'Promotes greater self-understanding',
    'about.whyTakeTitle': 'Why take this assessment?',
    'about.selfUnderstanding': '✓ Self-awareness',
    'about.selfUnderstandingDesc': 'Better understand your unique characteristics and behavioral patterns.',
    'about.professionalGuidance': '✓ Professional Guidance',
    'about.professionalGuidanceDesc': 'Receive guidance on when to seek specialized clinical evaluation.',
    'about.resourcesSupport': '✓ Resources and Support',
    'about.resourcesSupportDesc': 'Access information and resources relevant to your profile.',
    'about.community': '✓ Community',
    'about.communityDesc': 'Connect with others who share similar experiences.',
    
    // Test Info section
    'testInfo.title': 'About the Autism Spectrum Characteristics Test',
    'testInfo.subtitle': 'Understand how our self-assessment tool works',
    'testInfo.pageTitle': 'Detailed Test Information',
    'testInfo.pageSubtitle': 'Learn more about our assessment and the professionals involved in research',
    'testInfo.backToHome': 'Back to Home',
    'testInfo.whatIsIt': 'What is this test?',
    'testInfo.whatIsItDesc': 'This is an interactive self-assessment tool that helps identify characteristics commonly associated with the autism spectrum.',
    'testInfo.whatIsItDesc2': 'The test uses an evidence-based approach to analyze patterns of behavior, social communication, and sensory processing in a non-invasive manner.',
    'testInfo.howWorksTitle': 'How does it work?',
    'testInfo.howWorksDesc': 'The test presents everyday situations where you choose the response that most aligns with your natural behavior.',
    'testInfo.howWorksDesc2': 'We use the Cognitive Diagnostic Model (CDM) to analyze your responses and identify specific cognitive patterns related to neurodevelopment.',
    'testInfo.scientificBasis': 'Scientific Basis',
    'testInfo.scientificBasisDesc': 'Our questionnaire is based on internationally recognized diagnostic criteria and current research on neurodiversity. The questions address key areas such as social communication, sensory sensitivities, behavioral patterns, and cognitive processing.',
    'testInfo.limitations': 'Important Limitations',
    'testInfo.limitationsDesc': 'This test is exclusively for educational and self-awareness purposes. It does not replace a professional assessment and should not be used for medical diagnosis. For a complete evaluation, always consult a qualified healthcare professional.',
    'testInfo.researcherTitle': 'Research Professional',
    'testInfo.researcherSubtitle': 'Meet the professional who may use anonymous data for scientific research',
    'testInfo.doctorName': 'C.F. Collares',
    'testInfo.doctorInfo': 'Carlos Fernando Collares is a passionate educator, physician, neuroscientist, and storyteller. With a distinguished career dedicated to advancing educational research, he has contributed to innovative assessment methods and curricular reforms in health education.',
    'testInfo.qualifications': 'Qualifications',
    'testInfo.qualificationsDesc': 'Educator, physician, and neuroscientist with a heart for inspiring students and professionals. Also a creative mind embarking on a journey as an author of books for children, adolescents, and adults, combining science, philosophy, imagination, and meaningful messages.',
    'testInfo.researchPurpose': 'Research Purpose',
    'testInfo.researchPurposeDesc': 'Collected data may be used for scientific research on cognitive patterns and development of better assessment tools.',
    'testInfo.dataUsageTitle': 'How your data may be used:',
    'testInfo.dataUsage1': 'All data is completely anonymous and non-identifiable',
    'testInfo.dataUsage2': 'Used exclusively for scientific research on neurodiversity',
    'testInfo.dataUsage3': 'May contribute to the development of better assessment tools',
    'testInfo.dataUsage4': 'Never shared with third parties for commercial purposes',
    'testInfo.startAssessment': 'Start Assessment',
    
    // Spectrum Info page
    'spectrum.pageTitle': 'Understanding the Autism Spectrum',
    'spectrum.pageSubtitle': 'A journey to understand neurocognitive diversity and celebrate different ways of processing the world',
    'spectrum.backButton': 'Back',
    'spectrum.whatIsTitle': 'What is the Autism Spectrum?',
    'spectrum.whatIsDesc1': 'Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that affects how a person perceives, processes and interacts with the world around them. It is called a "spectrum" because it manifests in very varied ways in different people.',
    'spectrum.whatIsDesc2': 'Each autistic person is unique, with their own strengths, challenges, interests and needs. Some may need significant support in daily life, while others live more independently, but all share differences in social communication and behavior patterns.',
    'spectrum.characteristicsTitle': 'Main Characteristics',
    'spectrum.socialCommunication': 'Social Communication',
    'spectrum.socialCommunication.item1': '• Difficulty understanding non-verbal social cues',
    'spectrum.socialCommunication.item2': '• Preference for direct and literal communication',
    'spectrum.socialCommunication.item3': '• Challenges maintaining reciprocal conversations',
    'spectrum.socialCommunication.item4': '• Different ways of expressing emotions',
    'spectrum.behaviorPatterns': 'Behavior Patterns',
    'spectrum.behaviorPatterns.item1': '• Intense and specific interests',
    'spectrum.behaviorPatterns.item2': '• Need for routines and predictability',
    'spectrum.behaviorPatterns.item3': '• Repetitive movements (stimming)',
    'spectrum.behaviorPatterns.item4': '• Detailed attention to patterns and details',
    'spectrum.sensoryProcessing': 'Sensory Processing',
    'spectrum.sensoryProcessing.item1': '• Increased or reduced sensitivity to stimuli',
    'spectrum.sensoryProcessing.item2': '• Intense reactions to sounds, lights or textures',
    'spectrum.sensoryProcessing.item3': '• Specific food preferences',
    'spectrum.sensoryProcessing.item4': '• Need for specific sensory stimuli',
    'spectrum.strengthsAbilities': 'Strengths and Abilities',
    'spectrum.strengthsAbilities.item1': '• Exceptional attention to detail',
    'spectrum.strengthsAbilities.item2': '• Deep memory and concentration',
    'spectrum.strengthsAbilities.item3': '• Logical and systematic thinking',
    'spectrum.strengthsAbilities.item4': '• Creativity and unique perspectives',
    'spectrum.whySpectrumTitle': 'Why "Spectrum"?',
    'spectrum.whySpectrumDesc1': 'The term "spectrum" reflects the enormous diversity of how autism manifests. There is no single way to "be autistic" - each person is at a unique point on the spectrum with their own characteristics.',
    'spectrum.supportLevelsTitle': 'Support Levels:',
    'spectrum.supportLevel1': 'Level 1: Requires some support in specific social situations',
    'spectrum.supportLevel2': 'Level 2: Requires substantial support in daily life',
    'spectrum.supportLevel3': 'Level 3: Requires very substantial support in multiple areas',
    'spectrum.supportLevelsNote': 'It is important to remember that the level of support needed does not define a person\'s worth or potential - it only indicates the type of support that may be beneficial.',
    'spectrum.mythsTitle': 'Myths and Facts',
    'spectrum.myth1': '❌ Myth: Autistic people don\'t feel emotions',
    'spectrum.truth1': '✓ Truth: Autistic people feel emotions deeply, but may express them in different ways',
    'spectrum.myth2': '❌ Myth: All autistic people have extraordinary abilities',
    'spectrum.truth2': '✓ Truth: Like everyone, autistic people have different talents and abilities - some may have exceptional skills in specific areas, others do not',
    'spectrum.myth3': '❌ Myth: Autism can be "cured"',
    'spectrum.truth3': '✓ Truth: Autism is a permanent neurological condition. The focus should be on support, acceptance and skills development',
    'spectrum.myth4': '❌ Myth: Autistic people prefer to be alone',
    'spectrum.truth4': '✓ Truth: Many autistic people desire social connections, but may need different approaches to interaction',
    'spectrum.ctaTitle': 'Want to Know More About Your Profile?',
    'spectrum.ctaDesc': 'Our CDM model-based assessment can help you better understand your characteristics and find appropriate resources.',
    'spectrum.ctaButton': 'Start Assessment',
    
    // Disclaimer Alert
    'disclaimer.important': 'IMPORTANT:',
    'disclaimer.text': 'This tool is intended for entertainment and personal reflection only. It has no scientific, diagnostic or clinical validity. Results should not be interpreted as a medical diagnosis. If you suspect you have autism spectrum characteristics, seek a qualified professional (psychologist or psychiatrist specialized in autism) for a proper evaluation.',
    
    // How it works section
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'A simple and scientific 3-step process for your self-assessment',
    'howItWorks.step1Title': 'Answer the Questions',
    'howItWorks.step1Desc': 'Complete a carefully crafted questionnaire with questions about behaviors, communication, and sensitivities.',
    'howItWorks.step1Time': '15-20 min',
    'howItWorks.step2Title': 'Results Analysis',
    'howItWorks.step2Desc': 'Our system analyzes your responses based on internationally recognized scientific criteria.',
    'howItWorks.step2Time': 'Instant',
    'howItWorks.step3Title': 'Receive your Report',
    'howItWorks.step3Desc': 'Get a detailed report with insights, guidance, and resources personalized to your profile.',
    'howItWorks.step3Time': 'Immediate',
    'howItWorks.important': 'Important: This is not a diagnostic tool',
    'howItWorks.disclaimer': 'This assessment is a self-awareness tool based on scientific criteria.',
    
    // CTA section
    'cta.title': 'Ready to start your self-discovery journey?',
    'cta.subtitle': 'Explore your characteristics through reflective questions.',
    'cta.startButton': 'Start Assessment Now',
    'cta.sampleReport': 'View Sample Report',
    'cta.infiniteReflections': 'Possible Reflections',
    'cta.averageTime': 'Average Time',
    'cta.entertainmentOnly': 'Entertainment Only',
    
    // Assessment page
    'assessment.title': 'Autism Spectrum Characteristics Assessment',
    'assessment.subtitle': 'Answer the questions according to how much you identify with each statement.',
    'assessment.question': 'Question',
    'assessment.of': 'of',
    'assessment.back': 'Back',
    'assessment.previous': 'Previous',
    'assessment.next': 'Next',
    'assessment.finish': 'Finish Assessment',
    'assessment.backToHome': 'Back to Home',
    
    // Results
    'results.title': 'Assessment Results',
    'results.subtitle': 'Analysis based on your responses',
    'results.score': 'Score',
    'results.downloadPdf': 'Download PDF',
    'results.retakeTest': 'Retake Test',
    'results.characteristics': 'Identified characteristics:',
    'results.recommendation': 'Recommendation:',
    'results.important': 'Important:',
    'results.disclaimer': 'This test is for entertainment and self-awareness only.',
    
    // Response options
    'response.traitAligned': 'Option A',
    'response.neurotypicalAligned': 'Option B',
    
    // CDM Results
    'cdm.profileOverview': 'Profile Overview',
    'cdm.profileDescription': 'Cognitive profile based on Cognitive Diagnostic Modeling',
    'cdm.averageAlignment': 'Average Alignment',
    'cdm.consistency': 'Consistency',
    'cdm.patternsIdentified': 'Patterns Identified',
    'cdm.cognitiveProfile': 'Cognitive Profile',
    'cdm.radarDescription': 'Radar chart showing alignment probabilities for each cognitive attribute',
    'cdm.identifiedPatterns': 'Identified Patterns',
    'cdm.patternsDescription': 'Attribute combinations indicating neurodivergent characteristics',
    'cdm.attributeDetails': 'Attribute Details',
    'cdm.attributeDetailsDescription': 'Detailed analysis of each cognitive attribute',
    'cdm.traitAlignedOf': 'trait-aligned responses out of',
    'cdm.questions': 'questions',
    'cdm.disclaimerTitle': 'Self-Assessment Tool',
    'cdm.disclaimerText': 'This is a self-assessment instrument for personal reflection. It does not constitute medical or psychological diagnosis. For professional evaluation, consult a qualified specialist.',
    'cdm.generatePdf': 'Generate PDF',

    // Cognitive Attributes
    'attr.social_communication': 'Social Communication',
    'attr.social_communication.desc': 'Verbal and non-verbal communication patterns in social contexts',
    'attr.social_reciprocity': 'Social Reciprocity',
    'attr.social_reciprocity.desc': 'Back-and-forth social interactions and relationship patterns',
    'attr.sensory_processing': 'Sensory Processing',
    'attr.sensory_processing.desc': 'Response to sensory stimuli and environmental factors',
    'attr.executive_function': 'Executive Function',
    'attr.executive_function.desc': 'Planning, organization, and task management abilities',
    'attr.cognitive_flexibility': 'Cognitive Flexibility',
    'attr.cognitive_flexibility.desc': 'Adaptability to change and shifting between tasks or concepts',
    'attr.attention_focus': 'Attention & Focus',
    'attr.attention_focus.desc': 'Concentration patterns and attention regulation',
    'attr.literal_thinking': 'Literal Thinking',
    'attr.literal_thinking.desc': 'Information processing and interpretation style',
    'attr.repetitive_behaviors': 'Repetitive Behaviors',
    'attr.repetitive_behaviors.desc': 'Patterns of repetitive actions, interests, or routines',
    'attr.emotional_regulation': 'Emotional Regulation',
    'attr.emotional_regulation.desc': 'Management and expression of emotions',
    'attr.special_interests': 'Special Interests',
    'attr.special_interests.desc': 'Intensity and focus of personal interests',

    // Cognitive Patterns
    'pattern.communication_social_cluster': 'Communication-Social Cluster',
    'pattern.communication_social_cluster.desc': 'Strong indication of differences in social communication and reciprocity',
    'pattern.sensory_regulation_cluster': 'Sensory-Regulation Cluster',
    'pattern.sensory_regulation_cluster.desc': 'Heightened sensory processing differences and emotional regulation patterns',
    'pattern.executive_attention_cluster': 'Executive-Attention Cluster',
    'pattern.executive_attention_cluster.desc': 'Differences in executive functioning and attention patterns',
    'pattern.rigid_thinking_cluster': 'Rigid Thinking Cluster',
    'pattern.rigid_thinking_cluster.desc': 'Preference for literal thinking and reduced cognitive flexibility',
    'pattern.repetitive_interests_cluster': 'Repetitive-Interests Cluster',
    'pattern.repetitive_interests_cluster.desc': 'Strong patterns of repetitive behaviors and intense special interests',
    'pattern.comprehensive_profile': 'Comprehensive Neurodivergent Profile',
    'pattern.comprehensive_profile.desc': 'Multiple domains showing neurodivergent characteristics',

    // Language selector
    'language.selector': 'Language',
    'language.portuguese': 'Português (BR)',
    'language.english': 'English',
    'language.spanish': 'Español',
    'language.dutch': 'Nederlands',
    'language.german': 'Deutsch',
    
    // Questions with new answer structure
    'question.1': "At a work meeting, your colleague makes a joke that everyone laughs at, but you don't understand why it's funny.",
    'question.1.traitAnswer': 'Continue focusing on the meeting content',
    'question.1.neurotypicalAnswer': 'Laugh along with everyone else',
    'question.2': 'Someone says "Can you give me a hand?" while carrying heavy boxes.',
    'question.2.traitAnswer': 'Help them carry the boxes',
    'question.2.neurotypicalAnswer': 'Physically offer your hand to them',
    'question.3': 'A coworker mentions they had a "rough morning" with a slight smile.',
    'question.3.traitAnswer': 'Offer brief sympathy and change the subject',
    'question.3.neurotypicalAnswer': 'Ask for specific details about what went wrong',
    'question.4': 'During small talk, someone asks "How was your weekend?"',
    'question.4.traitAnswer': 'Share one highlight briefly',
    'question.4.neurotypicalAnswer': 'Give a detailed chronological account',
    'question.5': "Your friend says \"I'm dying of embarrassment\" after a mistake.",
    'question.5.traitAnswer': 'Recognize they feel very embarrassed',
    'question.5.neurotypicalAnswer': 'Express concern about their health',
    'question.6': "You're feeling stressed after a long day at work/school.",
    'question.6.traitAnswer': "Watch a favorite movie you've seen many times",
    'question.6.neurotypicalAnswer': "Try a new activity you've never done before",
    'question.7': 'While concentrating on a task, you notice yourself tapping your fingers rhythmically.',
    'question.7.traitAnswer': 'Continue the tapping as it helps you focus',
    'question.7.neurotypicalAnswer': 'Stop the tapping immediately',
    'question.8': 'You need to organize your workspace.',
    'question.8.traitAnswer': 'Arrange items in the exact same pattern as always',
    'question.8.neurotypicalAnswer': 'Try a new organizational system',
    'question.9': 'When walking through a tiled floor, you notice the pattern.',
    'question.9.traitAnswer': 'Feel compelled to step in a specific pattern',
    'question.9.neurotypicalAnswer': 'Walk normally without thinking about it',
    'question.10': "You're waiting in a long line.",
    'question.10.traitAnswer': 'Rock slightly or fidget with an object',
    'question.10.neurotypicalAnswer': 'Stand still and look around',
    'question.11': 'You enter a busy restaurant with bright lights, loud music, and strong food smells.',
    'question.11.traitAnswer': 'Find it overwhelming and consider leaving',
    'question.11.neurotypicalAnswer': 'Enjoy the lively atmosphere',
    'question.12': 'You need to buy new clothes, but the store only has items made from a fabric that feels rough.',
    'question.12.traitAnswer': 'Leave without buying anything',
    'question.12.neurotypicalAnswer': 'Buy the clothes anyway',
    'question.13': 'Someone wearing strong perfume sits next to you on public transport.',
    'question.13.traitAnswer': 'Feel nauseated and need to move away',
    'question.13.neurotypicalAnswer': 'Notice it but stay in your seat',
    'question.14': 'The fire alarm goes off unexpectedly during a drill.',
    'question.14.traitAnswer': 'Cover your ears and feel distressed',
    'question.14.neurotypicalAnswer': 'Calmly follow evacuation procedures',
    'question.15': "You're offered food with multiple mixed textures.",
    'question.15.traitAnswer': 'Decline or eat only similar textures',
    'question.15.neurotypicalAnswer': 'Eat it without concern',
    'question.16': 'A friend excitedly tells you about their vacation plans.',
    'question.16.traitAnswer': 'Wait for them to finish then talk about your interests',
    'question.16.neurotypicalAnswer': 'Ask follow-up questions about their trip',
    'question.17': 'During a conversation, you notice the other person looking at their watch.',
    'question.17.traitAnswer': 'Continue explaining your point in detail',
    'question.17.neurotypicalAnswer': "Wrap up what you're saying quickly",
    'question.18': "Someone shares that they're feeling sad about their pet being sick.",
    'question.18.traitAnswer': 'Share facts about animal health conditions',
    'question.18.neurotypicalAnswer': "Express sympathy and ask how they're coping",
    'question.19': 'In a group conversation, others are discussing weekend plans.',
    'question.19.traitAnswer': 'Wait silently until someone asks you directly',
    'question.19.neurotypicalAnswer': 'Volunteer your own plans when appropriate',
    'question.20': "A colleague mentions they're struggling with a project.",
    'question.20.traitAnswer': 'Continue with your own work unless asked',
    'question.20.neurotypicalAnswer': 'Offer to help or share advice',
    'question.21': 'Your usual route to work is blocked due to construction.',
    'question.21.traitAnswer': 'Feel very distressed and struggle to function',
    'question.21.neurotypicalAnswer': 'Easily take an alternative route',
    'question.22': 'Plans for a weekend trip are suddenly cancelled.',
    'question.22.traitAnswer': 'Need significant time to adjust to the change',
    'question.22.neurotypicalAnswer': 'Quickly make alternative plans',
    'question.23': 'Your favorite coffee shop runs out of your usual order.',
    'question.23.traitAnswer': 'Leave without ordering anything',
    'question.23.neurotypicalAnswer': 'Try something different',
    'question.24': 'A meeting is rescheduled at the last minute.',
    'question.24.traitAnswer': 'Feel anxious and disrupted all day',
    'question.24.neurotypicalAnswer': 'Adjust your schedule accordingly',
    'question.25': 'Your usual seat at work/school is taken by someone else.',
    'question.25.traitAnswer': 'Feel unsettled and unable to concentrate',
    'question.25.neurotypicalAnswer': 'Sit somewhere else without issue',
    'question.26': 'You have free time on the weekend.',
    'question.26.traitAnswer': 'Spend hours on your favorite topic/hobby',
    'question.26.neurotypicalAnswer': 'Do various different activities',
    'question.27': 'Someone asks about your interests.',
    'question.27.traitAnswer': 'Talk extensively about one specific topic',
    'question.27.neurotypicalAnswer': 'Mention several different interests briefly',
    'question.28': "You're choosing a book to read.",
    'question.28.traitAnswer': 'Pick one about your special interest area',
    'question.28.neurotypicalAnswer': 'Try a completely new genre',
    'question.29': 'Planning a vacation destination.',
    'question.29.traitAnswer': 'Choose based on your specific interest',
    'question.29.neurotypicalAnswer': 'Pick somewhere for general relaxation',
    'question.30': 'Decorating your living space.',
    'question.30.traitAnswer': 'Display extensive collections related to one theme',
    'question.30.neurotypicalAnswer': 'Mix various decorative styles',
    'question.31': 'During conversations, making eye contact feels:',
    'question.31.traitAnswer': 'Uncomfortable or distracting',
    'question.31.neurotypicalAnswer': 'Natural and easy',
    'question.32': 'Someone waves at you from across the room.',
    'question.32.traitAnswer': 'Unsure if they mean you or how to respond',
    'question.32.neurotypicalAnswer': 'Wave back immediately',
    'question.33': 'Reading facial expressions in others is:',
    'question.33.traitAnswer': 'Difficult and requires conscious effort',
    'question.33.neurotypicalAnswer': 'Automatic and intuitive',
    'question.34': 'Using gestures while speaking:',
    'question.34.traitAnswer': 'Feels unnatural or forgettable',
    'question.34.neurotypicalAnswer': 'Happens naturally without thinking',
    'question.35': "Someone's tone sounds different than their words.",
    'question.35.traitAnswer': 'Focus only on the literal words',
    'question.35.neurotypicalAnswer': 'Pick up on the emotional subtext',
    'question.36': 'Starting a multi-step project:',
    'question.36.traitAnswer': "Feel overwhelmed and don't know where to begin",
    'question.36.neurotypicalAnswer': 'Break it down and start systematically',
    'question.37': 'Managing multiple deadlines:',
    'question.37.traitAnswer': 'Struggle to prioritize and often miss some',
    'question.37.neurotypicalAnswer': 'Keep track and complete all on time',
    'question.38': 'Packing for a trip:',
    'question.38.traitAnswer': 'Forget essential items despite trying',
    'question.38.neurotypicalAnswer': 'Remember everything needed',
    'question.39': 'Following multi-part instructions:',
    'question.39.traitAnswer': 'Need them repeated or written down',
    'question.39.neurotypicalAnswer': 'Remember and follow easily',
    'question.40': 'Switching between different tasks:',
    'question.40.traitAnswer': 'Find it very difficult and draining',
    'question.40.neurotypicalAnswer': 'Move between tasks smoothly',
    'question.41': 'Someone says "Break a leg!" before your presentation.',
    'question.41.traitAnswer': "Feel confused about why they'd wish harm",
    'question.41.neurotypicalAnswer': 'Recognize it as a good luck wish',
    'question.42': 'Reading "between the lines" in emails:',
    'question.42.traitAnswer': "Only understand what's explicitly stated",
    'question.42.neurotypicalAnswer': 'Pick up on implied meanings',
    'question.43': 'Someone says "That\'s just great" in a flat tone after bad news.',
    'question.43.traitAnswer': "Recognize they're being sarcastic",
    'question.43.neurotypicalAnswer': 'Think they genuinely find it great',
    'question.44': 'Understanding metaphors in conversation:',
    'question.44.traitAnswer': 'Take them literally at first',
    'question.44.neurotypicalAnswer': 'Immediately grasp figurative meaning',
    'question.45': 'Someone says they\'re "on cloud nine."',
    'question.45.traitAnswer': "Know they're very happy",
    'question.45.neurotypicalAnswer': 'Wonder about the cloud reference',
    'question.46': 'A friend cancels plans at the last minute.',
    'question.46.traitAnswer': 'Focus on how it disrupts your schedule',
    'question.46.neurotypicalAnswer': 'Wonder what might be wrong with them',
    'question.47': 'Someone disagrees with your opinion.',
    'question.47.traitAnswer': 'Try to see their viewpoint',
    'question.47.neurotypicalAnswer': "Can't understand how they see it differently",
    'question.48': 'Predicting how others will react:',
    'question.48.traitAnswer': 'Usually accurate in predictions',
    'question.48.neurotypicalAnswer': 'Often surprised by their responses',
    'question.49': "Someone doesn't share your enthusiasm for a topic.",
    'question.49.traitAnswer': 'Accept they have different interests',
    'question.49.neurotypicalAnswer': 'Keep explaining to change their mind',
    'question.50': 'Understanding why someone might lie to spare feelings:',
    'question.50.traitAnswer': 'Understand the social reasoning',
    'question.50.neurotypicalAnswer': 'Believe honesty is always required',
    'question.51': "At a party, someone you don't know well starts telling you about their problems.",
    'question.51.traitAnswer': "Listen briefly then talk about a topic you're interested in",
    'question.51.neurotypicalAnswer': 'Show concern and offer supportive comments',
    'question.52': "Your coworker seems upset but hasn't said anything directly.",
    'question.52.traitAnswer': "Gently ask if they're okay",
    'question.52.neurotypicalAnswer': 'Continue working unless they specifically ask for help',
    'question.53': "In a group, someone makes a joke about shared experiences you weren't part of.",
    'question.53.traitAnswer': 'Smile and let the conversation continue',
    'question.53.neurotypicalAnswer': 'Ask for detailed explanation of the reference',
    'question.54': "A friend hints they'd like to be invited to your event.",
    'question.54.traitAnswer': 'Extend an invitation',
    'question.54.neurotypicalAnswer': "Don't respond unless they ask directly",
    'question.55': "Someone's body language suggests they're uncomfortable with a topic.",
    'question.55.traitAnswer': 'Change the subject',
    'question.55.neurotypicalAnswer': 'Continue the discussion as planned',
    'question.56': 'Your special interest hobby time is interrupted by an unexpected visitor.',
    'question.56.traitAnswer': 'Feel extremely anxious and unable to engage with the visitor',
    'question.56.neurotypicalAnswer': 'Pause your hobby and greet the visitor',
    'question.57': "You can't find your usual brand at the store, only alternatives.",
    'question.57.traitAnswer': 'Leave without buying anything, feeling very unsettled',
    'question.57.neurotypicalAnswer': 'Try a different brand',
    'question.58': 'Your planned weekend of focusing on your interest is disrupted by a family obligation.',
    'question.58.traitAnswer': 'Feel overwhelmed and unable to enjoy the family time',
    'question.58.neurotypicalAnswer': 'Adapt and engage with family',
    'question.59': 'A store reorganizes, moving your special interest items to a different section.',
    'question.59.traitAnswer': 'Feel distressed and consider not shopping there',
    'question.59.neurotypicalAnswer': 'Simply go to the new location',
    'question.60': 'Your usual routine for enjoying your interest is impossible due to circumstances.',
    'question.60.traitAnswer': "Unable to enjoy it any other way",
    'question.60.neurotypicalAnswer': 'Find an alternative approach',
    'question.61': 'In a noisy, crowded space, you feel overwhelmed.',
    'question.61.traitAnswer': 'Start rocking or hand-flapping to self-soothe',
    'question.61.neurotypicalAnswer': 'Take deep breaths and stay still',
    'question.62': 'Fluorescent lights in your workspace are bothering you.',
    'question.62.traitAnswer': 'Develop a repetitive squinting or head movement pattern',
    'question.62.neurotypicalAnswer': 'Ask to change the lighting',
    'question.63': 'Uncomfortable clothing texture throughout the day.',
    'question.63.traitAnswer': 'Constantly adjust and fidget with the clothing',
    'question.63.neurotypicalAnswer': 'Ignore the discomfort',
    'question.64': 'Multiple overlapping sounds in your environment.',
    'question.64.traitAnswer': 'Create rhythmic movements or sounds to cope',
    'question.64.neurotypicalAnswer': 'Use earplugs or headphones',
    'question.65': 'Strong smells trigger discomfort in a social setting.',
    'question.65.traitAnswer': 'Engage in repetitive behaviors to manage distress',
    'question.65.neurotypicalAnswer': 'Excuse yourself briefly',
    'question.66': "Asked to explain a complex project you're struggling to organize.",
    'question.66.traitAnswer': 'Give scattered details without clear structure',
    'question.66.neurotypicalAnswer': 'Provide a coherent summary',
    'question.67': 'Need to communicate multiple task delays to your team.',
    'question.67.traitAnswer': 'Struggle to prioritize what to say and when',
    'question.67.neurotypicalAnswer': 'Send clear, timely updates',
    'question.68': 'Following a conversation while managing other thoughts.',
    'question.68.traitAnswer': 'Lose track and miss social cues',
    'question.68.neurotypicalAnswer': 'Stay engaged throughout',
    'question.69': 'Planning and explaining a group activity.',
    'question.69.traitAnswer': 'Clear plan everyone understands',
    'question.69.neurotypicalAnswer': 'Ideas jumbled, others seem confused',
    'question.70': 'Responding to unexpected questions in a meeting.',
    'question.70.traitAnswer': 'Need time to process, give unclear answers',
    'question.70.neurotypicalAnswer': 'Respond clearly and promptly',
    'question.71': 'Your friend says "I\'m so hungry I could eat a horse" while looking tired.',
    'question.71.traitAnswer': 'Suggest restaurants and wonder why they mentioned horses',
    'question.71.neurotypicalAnswer': "Recognize they're very hungry and probably tired too",
    'question.72': 'In a group discussion, someone makes a sarcastic comment about the weather.',
    'question.72.traitAnswer': "Understand they're making a social joke",
    'question.72.neurotypicalAnswer': 'Correct their statement with actual weather facts',
    'question.73': 'A colleague says "Sure, pile more work on me" with a strained smile.',
    'question.73.traitAnswer': "Realize they're overwhelmed",
    'question.73.neurotypicalAnswer': 'Think they want more tasks and offer some',
    'question.74': "Someone tells a white lie to avoid hurting another's feelings in front of you.",
    'question.74.traitAnswer': 'Understand the social kindness',
    'question.74.neurotypicalAnswer': 'Point out the truth to everyone',
    'question.75': 'A friend exaggerates a story for entertainment at a party.',
    'question.75.traitAnswer': 'Enjoy the entertaining version',
    'question.75.neurotypicalAnswer': 'Correct the inaccuracies publicly',
    'question.76': 'A museum about your special interest has bright lights and crowds.',
    'question.76.traitAnswer': 'Leave despite wanting to see exhibits',
    'question.76.neurotypicalAnswer': 'Push through the discomfort',
    'question.77': 'Your interest-related items have textures that bother you.',
    'question.77.traitAnswer': 'Limit engagement despite loving the topic',
    'question.77.neurotypicalAnswer': 'Handle them anyway',
    'question.78': 'A convention for your interest is in a sensory-challenging venue.',
    'question.78.traitAnswer': 'Skip it despite really wanting to go',
    'question.78.neurotypicalAnswer': 'Attend with preparations',
    'question.79': 'Online content about your interest has autoplay sounds.',
    'question.79.traitAnswer': 'Avoid the resource entirely',
    'question.79.neurotypicalAnswer': 'Mute and continue',
    'question.80': 'Your interest requires visiting busy, noisy stores.',
    'question.80.traitAnswer': 'Gradually restrict the interest',
    'question.80.neurotypicalAnswer': 'Shop during quiet hours'
  },

  es: {
    // Home page
    'home.title': 'Evaluación de Características del Espectro Autista',
    'home.subtitle': 'Una herramienta de autoconocimiento basada en características comunes del espectro autista',
    'home.description': 'Este cuestionario fue desarrollado para ayudar en la identificación de características que pueden estar relacionadas con el espectro autista.',
    'home.startButton': 'Iniciar Evaluación',
    'home.disclaimer': 'Solo Entretenimiento',
    'home.howItWorks': 'Cómo Funciona',
    'home.about': 'Sobre la Prueba',
    'home.selfAwareness': 'Autoconocimiento',
    'home.quickSimple': 'Rápido y Sencillo',
    'home.entertainmentOnly': 'Solo Entretenimiento',
    'home.personalReflection': 'Para reflexión y curiosidad personal',
    'home.quickQuestionnaire': 'Cuestionario rápido para reflexión personal',
    'home.personalTool': 'Herramienta para reflexión personal, sin valor diagnóstico',
    'home.duration': '15-20 minutos',
    
    // About section
    'about.title': '¿Qué es esta Autoevaluación?',
    'about.description': 'Esta es una herramienta de autoevaluación creada únicamente para fines de entretenimiento y conciencia personal.',
    'about.socialCommunication': 'Comunicación Social',
    'about.socialCommunicationDesc': 'Evalúa patrones de interacción social y comunicación',
    'about.behaviors': 'Comportamientos',
    'about.behaviorsDesc': 'Identifica patrones repetitivos e intereses específicos',
    'about.sensitivities': 'Sensibilidades',
    'about.sensitivitiesDesc': 'Evalúa sensibilidades sensoriales y ambientales',
    'about.selfAwarenessTitle': 'Autoconocimiento',
    'about.selfAwarenessDesc': 'Promueve mayor comprensión sobre uno mismo',
    'about.whyTakeTitle': '¿Por qué hacer esta evaluación?',
    'about.selfUnderstanding': '✓ Autoconocimiento',
    'about.selfUnderstandingDesc': 'Comprende mejor tus características únicas y patrones de comportamiento.',
    'about.professionalGuidance': '✓ Orientación Profesional',
    'about.professionalGuidanceDesc': 'Recibe orientación sobre cuándo buscar evaluación clínica especializada.',
    'about.resourcesSupport': '✓ Recursos y Apoyo',
    'about.resourcesSupportDesc': 'Accede a información y recursos relevantes para tu perfil.',
    'about.community': '✓ Comunidad',
    'about.communityDesc': 'Conéctate con otros que comparten experiencias similares.',
    
    // Test Info section
    'testInfo.title': 'Sobre la Prueba de Características del Espectro Autista',
    'testInfo.subtitle': 'Entiende cómo funciona nuestra herramienta de autoevaluación',
    'testInfo.pageTitle': 'Información Detallada de la Prueba',
    'testInfo.pageSubtitle': 'Conoce más sobre nuestra evaluación y los profesionales involucrados en la investigación',
    'testInfo.backToHome': 'Volver al Inicio',
    'testInfo.whatIsIt': '¿Qué es esta prueba?',
    'testInfo.whatIsItDesc': 'Esta es una herramienta de autoevaluación interactiva que ayuda a identificar características comúnmente asociadas con el espectro autista.',
    'testInfo.whatIsItDesc2': 'La prueba utiliza un enfoque basado en evidencia para analizar patrones de comportamiento, comunicación social y procesamiento sensorial de manera no invasiva.',
    'testInfo.howWorksTitle': '¿Cómo funciona?',
    'testInfo.howWorksDesc': 'La prueba presenta situaciones cotidianas donde eliges la respuesta que más se alinea con tu comportamiento natural.',
    'testInfo.howWorksDesc2': 'Utilizamos el Modelo de Diagnóstico Cognitivo (CDM) para analizar tus respuestas e identificar patrones cognitivos específicos relacionados con el neurodesarrollo.',
    'testInfo.scientificBasis': 'Base Científica',
    'testInfo.scientificBasisDesc': 'Nuestro cuestionario se basa en criterios diagnósticos reconocidos internacionalmente e investigación actual sobre neurodiversidad. Las preguntas abordan áreas clave como comunicación social, sensibilidades sensoriales, patrones de comportamiento y procesamiento cognitivo.',
    'testInfo.limitations': 'Limitaciones Importantes',
    'testInfo.limitationsDesc': 'Esta prueba es exclusivamente para fines educativos y de autoconciencia. No reemplaza una evaluación profesional y no debe usarse para diagnóstico médico. Para una evaluación completa, siempre consulta a un profesional de salud calificado.',
    'testInfo.researcherTitle': 'Profesional Responsable de la Investigación',
    'testInfo.researcherSubtitle': 'Conoce al profesional que puede utilizar datos anónimos para investigación científica',
    'testInfo.doctorName': 'C.F. Collares',
    'testInfo.doctorInfo': 'Carlos Fernando Collares es un educador, médico, neurocientífico y narrador apasionado. Con una distinguida carrera dedicada al avance de la investigación educativa, ha contribuido a métodos innovadores de evaluación y reformas curriculares en la educación de la salud.',
    'testInfo.qualifications': 'Calificaciones',
    'testInfo.qualificationsDesc': 'Educador, médico y neurocientífico con corazón para inspirar a estudiantes y profesionales. También es una mente creativa que se embarca en un viaje como autor de libros para niños, adolescentes y adultos, combinando ciencia, filosofía, imaginación y mensajes significativos.',
    'testInfo.researchPurpose': 'Propósito de la Investigación',
    'testInfo.researchPurposeDesc': 'Los datos recolectados pueden ser utilizados para investigación científica sobre patrones cognitivos y desarrollo de mejores herramientas de evaluación.',
    'testInfo.dataUsageTitle': 'Cómo pueden ser utilizados tus datos:',
    'testInfo.dataUsage1': 'Todos los datos son completamente anónimos y no identificables',
    'testInfo.dataUsage2': 'Utilizados exclusivamente para investigación científica sobre neurodiversidad',
    'testInfo.dataUsage3': 'Pueden contribuir al desarrollo de mejores herramientas de evaluación',
    'testInfo.dataUsage4': 'Nunca son compartidos con terceros para fines comerciales',
    'testInfo.startAssessment': 'Iniciar Evaluación',
    
    // Spectrum Info page
    'spectrum.pageTitle': 'Entendiendo el Espectro Autista',
    'spectrum.pageSubtitle': 'Un viaje para comprender la diversidad neurocognitiva y celebrar diferentes formas de procesar el mundo',
    'spectrum.backButton': 'Volver',
    'spectrum.whatIsTitle': '¿Qué es el Espectro Autista?',
    'spectrum.whatIsDesc1': 'El Trastorno del Espectro Autista (TEA) es una condición del neurodesarrollo que afecta la forma en que una persona percibe, procesa e interactúa con el mundo que la rodea. Se llama "espectro" porque se manifiesta de formas muy variadas en diferentes personas.',
    'spectrum.whatIsDesc2': 'Cada persona autista es única, con sus propias fortalezas, desafíos, intereses y necesidades. Algunas pueden necesitar apoyo significativo en la vida diaria, mientras que otras viven de forma más independiente, pero todas comparten diferencias en la comunicación social y los patrones de comportamiento.',
    'spectrum.characteristicsTitle': 'Características Principales',
    'spectrum.socialCommunication': 'Comunicación Social',
    'spectrum.socialCommunication.item1': '• Dificultad para entender señales sociales no verbales',
    'spectrum.socialCommunication.item2': '• Preferencia por comunicación directa y literal',
    'spectrum.socialCommunication.item3': '• Desafíos para mantener conversaciones recíprocas',
    'spectrum.socialCommunication.item4': '• Diferentes formas de expresar emociones',
    'spectrum.behaviorPatterns': 'Patrones de Comportamiento',
    'spectrum.behaviorPatterns.item1': '• Intereses intensos y específicos',
    'spectrum.behaviorPatterns.item2': '• Necesidad de rutinas y previsibilidad',
    'spectrum.behaviorPatterns.item3': '• Movimientos repetitivos (stimming)',
    'spectrum.behaviorPatterns.item4': '• Atención detallada a patrones y detalles',
    'spectrum.sensoryProcessing': 'Procesamiento Sensorial',
    'spectrum.sensoryProcessing.item1': '• Sensibilidad aumentada o reducida a estímulos',
    'spectrum.sensoryProcessing.item2': '• Reacciones intensas a sonidos, luces o texturas',
    'spectrum.sensoryProcessing.item3': '• Preferencias alimentarias específicas',
    'spectrum.sensoryProcessing.item4': '• Necesidad de estímulos sensoriales específicos',
    'spectrum.strengthsAbilities': 'Fortalezas y Habilidades',
    'spectrum.strengthsAbilities.item1': '• Atención excepcional a los detalles',
    'spectrum.strengthsAbilities.item2': '• Memoria y concentración profundas',
    'spectrum.strengthsAbilities.item3': '• Pensamiento lógico y sistemático',
    'spectrum.strengthsAbilities.item4': '• Creatividad y perspectivas únicas',
    'spectrum.whySpectrumTitle': '¿Por Qué "Espectro"?',
    'spectrum.whySpectrumDesc1': 'El término "espectro" refleja la enorme diversidad de cómo se manifiesta el autismo. No existe una única forma de "ser autista" - cada persona está en un punto único del espectro con sus propias características.',
    'spectrum.supportLevelsTitle': 'Niveles de Apoyo:',
    'spectrum.supportLevel1': 'Nivel 1: Necesita algo de apoyo en situaciones sociales específicas',
    'spectrum.supportLevel2': 'Nivel 2: Necesita apoyo sustancial en la vida diaria',
    'spectrum.supportLevel3': 'Nivel 3: Necesita apoyo muy sustancial en múltiples áreas',
    'spectrum.supportLevelsNote': 'Es importante recordar que el nivel de apoyo necesario no define el valor o potencial de una persona - solo indica el tipo de apoyo que puede ser beneficioso.',
    'spectrum.mythsTitle': 'Mitos y Verdades',
    'spectrum.myth1': '❌ Mito: Las personas autistas no sienten emociones',
    'spectrum.truth1': '✓ Verdad: Las personas autistas sienten emociones profundamente, pero pueden expresarlas de maneras diferentes',
    'spectrum.myth2': '❌ Mito: Todas las personas autistas tienen habilidades extraordinarias',
    'spectrum.truth2': '✓ Verdad: Como todos, las personas autistas tienen diferentes talentos y habilidades - algunas pueden tener habilidades excepcionales en áreas específicas, otras no',
    'spectrum.myth3': '❌ Mito: El autismo puede ser "curado"',
    'spectrum.truth3': '✓ Verdad: El autismo es una condición neurológica permanente. El enfoque debe estar en apoyo, aceptación y desarrollo de habilidades',
    'spectrum.myth4': '❌ Mito: Las personas autistas prefieren estar solas',
    'spectrum.truth4': '✓ Verdad: Muchas personas autistas desean conexiones sociales, pero pueden necesitar diferentes enfoques de interacción',
    'spectrum.ctaTitle': '¿Quieres Saber Más Sobre Tu Perfil?',
    'spectrum.ctaDesc': 'Nuestra evaluación basada en el modelo CDM puede ayudarte a entender mejor tus características y encontrar los recursos adecuados.',
    'spectrum.ctaButton': 'Iniciar Evaluación',
    
    // Disclaimer Alert
    'disclaimer.important': 'IMPORTANTE:',
    'disclaimer.text': 'Esta herramienta está destinada solo para entretenimiento y reflexión personal. No tiene validez científica, diagnóstica o clínica. Los resultados no deben interpretarse como un diagnóstico médico. Si sospechas que tienes características del espectro autista, busca un profesional calificado (psicólogo o psiquiatra especializado en autismo) para una evaluación adecuada.',
    
    // How it works section
    'howItWorks.title': 'Cómo Funciona',
    'howItWorks.subtitle': 'Un proceso simple y científico de 3 pasos para tu autoevaluación',
    'howItWorks.step1Title': 'Responde las Preguntas',
    'howItWorks.step1Desc': 'Completa un cuestionario cuidadosamente elaborado con preguntas sobre comportamientos, comunicación y sensibilidades.',
    'howItWorks.step1Time': '15-20 min',
    'howItWorks.step2Title': 'Análisis de Resultados',
    'howItWorks.step2Desc': 'Nuestro sistema analiza tus respuestas basándose en criterios científicos reconocidos internacionalmente.',
    'howItWorks.step2Time': 'Instantáneo',
    'howItWorks.step3Title': 'Recibe tu Informe',
    'howItWorks.step3Desc': 'Obtén un informe detallado con insights, orientación y recursos personalizados para tu perfil.',
    'howItWorks.step3Time': 'Inmediato',
    'howItWorks.important': 'Importante: Esta no es una herramienta de diagnóstico',
    'howItWorks.disclaimer': 'Esta evaluación es una herramienta de autoconocimiento basada en criterios científicos.',
    
    // CTA section
    'cta.title': '¿Listo para comenzar tu viaje de autodescubrimiento?',
    'cta.subtitle': 'Explora tus características a través de preguntas reflexivas.',
    'cta.startButton': 'Comenzar Evaluación Ahora',
    'cta.sampleReport': 'Ver Informe de Muestra',
    'cta.infiniteReflections': 'Reflexiones Posibles',
    'cta.averageTime': 'Tiempo Promedio',
    'cta.entertainmentOnly': 'Solo Entretenimiento',
    
    // Assessment page
    'assessment.title': 'Evaluación de Características del Espectro Autista',
    'assessment.subtitle': 'Responde las preguntas según cuánto te identifiques con cada afirmación.',
    'assessment.question': 'Pregunta',
    'assessment.of': 'de',
    'assessment.back': 'Atrás',
    'assessment.previous': 'Anterior',
    'assessment.next': 'Siguiente',
    'assessment.finish': 'Finalizar Evaluación',
    'assessment.backToHome': 'Volver al Inicio',
    
    // Results
    'results.title': 'Resultados de la Evaluación',
    'results.subtitle': 'Análisis basado en tus respuestas',
    'results.score': 'Puntuación',
    'results.downloadPdf': 'Descargar PDF',
    'results.retakeTest': 'Repetir Prueba',
    'results.characteristics': 'Características identificadas:',
    'results.recommendation': 'Recomendación:',
    'results.important': 'Importante:',
    'results.disclaimer': 'Esta prueba es solo para entretenimiento y autoconocimiento.',
    
    // Response options
    'response.traitAligned': 'Opción A',
    'response.neurotypicalAligned': 'Opción B',
    
    // Language selector
    'language.selector': 'Idioma',
    'language.portuguese': 'Português (BR)',
    'language.english': 'English',
    'language.spanish': 'Español',
    'language.dutch': 'Nederlands',
    'language.german': 'Deutsch',
    
    // CDM Results
    'cdm.profileOverview': 'Resumen del Perfil',
    'cdm.profileDescription': 'Perfil cognitivo basado en Modelado de Diagnóstico Cognitivo',
    'cdm.averageAlignment': 'Alineación Promedio',
    'cdm.consistency': 'Consistencia',
    'cdm.patternsIdentified': 'Patrones Identificados',
    'cdm.cognitiveProfile': 'Perfil Cognitivo',
    'cdm.radarDescription': 'Gráfico radar mostrando probabilidades de alineación para cada atributo cognitivo',
    'cdm.identifiedPatterns': 'Patrones Identificados',
    'cdm.patternsDescription': 'Combinaciones de atributos que indican características neurodivergentes',
    'cdm.attributeDetails': 'Detalles de Atributos',
    'cdm.attributeDetailsDescription': 'Análisis detallado de cada atributo cognitivo',
    'cdm.traitAlignedOf': 'respuestas alineadas de',
    'cdm.questions': 'preguntas',
    'cdm.disclaimerTitle': 'Herramienta de Autoconocimiento',
    'cdm.disclaimerText': 'Este es un instrumento de autoevaluación para reflexión personal. No constituye diagnóstico médico o psicológico. Para evaluación profesional, consulte a un especialista cualificado.',
    'cdm.generatePdf': 'Generar PDF',

    // Cognitive Attributes
    'attr.social_communication': 'Comunicación Social',
    'attr.social_communication.desc': 'Patrones de comunicación verbal y no verbal en contextos sociales',
    'attr.social_reciprocity': 'Reciprocidad Social',
    'attr.social_reciprocity.desc': 'Interacciones sociales de ida y vuelta y patrones de relación',
    'attr.sensory_processing': 'Procesamiento Sensorial',
    'attr.sensory_processing.desc': 'Respuesta a estímulos sensoriales y factores ambientales',
    'attr.executive_function': 'Función Ejecutiva',
    'attr.executive_function.desc': 'Habilidades de planificación, organización y gestión de tareas',
    'attr.cognitive_flexibility': 'Flexibilidad Cognitiva',
    'attr.cognitive_flexibility.desc': 'Adaptabilidad al cambio y transición entre tareas o conceptos',
    'attr.attention_focus': 'Atención y Enfoque',
    'attr.attention_focus.desc': 'Patrones de concentración y regulación de la atención',
    'attr.literal_thinking': 'Pensamiento Literal',
    'attr.literal_thinking.desc': 'Estilo de procesamiento e interpretación de información',
    'attr.repetitive_behaviors': 'Comportamientos Repetitivos',
    'attr.repetitive_behaviors.desc': 'Patrones de acciones, intereses o rutinas repetitivas',
    'attr.emotional_regulation': 'Regulación Emocional',
    'attr.emotional_regulation.desc': 'Manejo y expresión de emociones',
    'attr.special_interests': 'Intereses Especiales',
    'attr.special_interests.desc': 'Intensidad y enfoque de intereses personales',

    // Cognitive Patterns
    'pattern.communication_social_cluster': 'Grupo Comunicación-Social',
    'pattern.communication_social_cluster.desc': 'Fuerte indicación de diferencias en la comunicación social y reciprocidad',
    'pattern.sensory_regulation_cluster': 'Grupo Sensorial-Regulación',
    'pattern.sensory_regulation_cluster.desc': 'Diferencias intensificadas en procesamiento sensorial y patrones de regulación emocional',
    'pattern.executive_attention_cluster': 'Grupo Ejecutivo-Atención',
    'pattern.executive_attention_cluster.desc': 'Diferencias en funcionamiento ejecutivo y patrones de atención',
    'pattern.rigid_thinking_cluster': 'Grupo Pensamiento Rígido',
    'pattern.rigid_thinking_cluster.desc': 'Preferencia por pensamiento literal y flexibilidad cognitiva reducida',
    'pattern.repetitive_interests_cluster': 'Grupo Repetitivo-Intereses',
    'pattern.repetitive_interests_cluster.desc': 'Patrones fuertes de comportamientos repetitivos e intereses especiales intensos',
    'pattern.comprehensive_profile': 'Perfil Neurodivergente Integral',
    'pattern.comprehensive_profile.desc': 'Múltiples dominios mostrando características neurodivergentes',

    // Questions with new answer structure
    'question.1': 'En una reunión de trabajo, tu colega hace una broma de la que todos se ríen, pero no entiendes por qué es gracioso.',
    'question.1.traitAnswer': 'Continuar enfocándose en el contenido de la reunión',
    'question.1.neurotypicalAnswer': 'Reírse junto con todos los demás',
    // ... (continue similarly for all questions 2 to 80 in Spanish)
  },

  nl: {
    // Spectrum Info page
    'spectrum.pageTitle': 'Het Autismespectrum Begrijpen',
    'spectrum.pageSubtitle': 'Een reis om neurocognitieve diversiteit te begrijpen en verschillende manieren van de wereld verwerken te vieren',
    'spectrum.backButton': 'Terug',
    'spectrum.whatIsTitle': 'Wat is het Autismespectrum?',
    'spectrum.whatIsDesc1': 'Autismespectrumstoornis (ASS) is een neurologische ontwikkelingsstoornis die invloed heeft op hoe een persoon de wereld om zich heen waarneemt, verwerkt en ermee omgaat. Het wordt een "spectrum" genoemd omdat het zich op zeer verschillende manieren manifesteert bij verschillende mensen.',
    'spectrum.whatIsDesc2': 'Elke autistische persoon is uniek, met hun eigen sterke punten, uitdagingen, interesses en behoeften. Sommigen hebben aanzienlijke ondersteuning nodig in het dagelijks leven, terwijl anderen meer onafhankelijk leven, maar allen delen verschillen in sociale communicatie en gedragspatronen.',
    'spectrum.characteristicsTitle': 'Belangrijkste Kenmerken',
    'spectrum.socialCommunication': 'Sociale Communicatie',
    'spectrum.socialCommunication.item1': '• Moeite met het begrijpen van non-verbale sociale signalen',
    'spectrum.socialCommunication.item2': '• Voorkeur voor directe en letterlijke communicatie',
    'spectrum.socialCommunication.item3': '• Uitdagingen bij het onderhouden van wederzijdse gesprekken',
    'spectrum.socialCommunication.item4': '• Verschillende manieren om emoties uit te drukken',
    'spectrum.behaviorPatterns': 'Gedragspatronen',
    'spectrum.behaviorPatterns.item1': '• Intense en specifieke interesses',
    'spectrum.behaviorPatterns.item2': '• Behoefte aan routines en voorspelbaarheid',
    'spectrum.behaviorPatterns.item3': '• Repetitieve bewegingen (stimming)',
    'spectrum.behaviorPatterns.item4': '• Gedetailleerde aandacht voor patronen en details',
    'spectrum.sensoryProcessing': 'Zintuiglijke Verwerking',
    'spectrum.sensoryProcessing.item1': '• Verhoogde of verminderde gevoeligheid voor prikkels',
    'spectrum.sensoryProcessing.item2': '• Intense reacties op geluiden, lichten of texturen',
    'spectrum.sensoryProcessing.item3': '• Specifieke voedselvoorkeuren',
    'spectrum.sensoryProcessing.item4': '• Behoefte aan specifieke zintuiglijke prikkels',
    'spectrum.strengthsAbilities': 'Sterke Punten en Vaardigheden',
    'spectrum.strengthsAbilities.item1': '• Uitzonderlijke aandacht voor details',
    'spectrum.strengthsAbilities.item2': '• Diep geheugen en concentratie',
    'spectrum.strengthsAbilities.item3': '• Logisch en systematisch denken',
    'spectrum.strengthsAbilities.item4': '• Creativiteit en unieke perspectieven',
    'spectrum.whySpectrumTitle': 'Waarom "Spectrum"?',
    'spectrum.whySpectrumDesc1': 'De term "spectrum" weerspiegelt de enorme diversiteit van hoe autisme zich manifesteert. Er is geen enkele manier om "autistisch te zijn" - elke persoon bevindt zich op een uniek punt op het spectrum met hun eigen kenmerken.',
    'spectrum.supportLevelsTitle': 'Ondersteuningsniveaus:',
    'spectrum.supportLevel1': 'Niveau 1: Heeft enige ondersteuning nodig in specifieke sociale situaties',
    'spectrum.supportLevel2': 'Niveau 2: Heeft substantiële ondersteuning nodig in het dagelijks leven',
    'spectrum.supportLevel3': 'Niveau 3: Heeft zeer substantiële ondersteuning nodig in meerdere gebieden',
    'spectrum.supportLevelsNote': 'Het is belangrijk om te onthouden dat het benodigde ondersteuningsniveau niet de waarde of het potentieel van een persoon definieert - het geeft alleen aan welk type ondersteuning nuttig kan zijn.',
    'spectrum.mythsTitle': 'Mythes en Feiten',
    'spectrum.myth1': '❌ Mythe: Autistische mensen voelen geen emoties',
    'spectrum.truth1': '✓ Feit: Autistische mensen voelen emoties diep, maar kunnen ze op verschillende manieren uiten',
    'spectrum.myth2': '❌ Mythe: Alle autistische mensen hebben buitengewone vaardigheden',
    'spectrum.truth2': '✓ Feit: Zoals iedereen hebben autistische mensen verschillende talenten en vaardigheden - sommigen hebben uitzonderlijke vaardigheden op specifieke gebieden, anderen niet',
    'spectrum.myth3': '❌ Mythe: Autisme kan worden "genezen"',
    'spectrum.truth3': '✓ Feit: Autisme is een permanente neurologische aandoening. De focus moet liggen op ondersteuning, acceptatie en ontwikkeling van vaardigheden',
    'spectrum.myth4': '❌ Mythe: Autistische mensen willen liever alleen zijn',
    'spectrum.truth4': '✓ Feit: Veel autistische mensen verlangen naar sociale verbindingen, maar hebben mogelijk verschillende benaderingen van interactie nodig',
    'spectrum.ctaTitle': 'Wil je Meer Weten Over Je Profiel?',
    'spectrum.ctaDesc': 'Onze CDM-model gebaseerde beoordeling kan je helpen je kenmerken beter te begrijpen en passende bronnen te vinden.',
    'spectrum.ctaButton': 'Start Beoordeling',
    
    // Disclaimer Alert
    'disclaimer.important': 'BELANGRIJK:',
    'disclaimer.text': 'Deze tool is alleen bedoeld voor entertainment en persoonlijke reflectie. Het heeft geen wetenschappelijke, diagnostische of klinische geldigheid. Resultaten mogen niet worden geïnterpreteerd als medische diagnose. Als je vermoedt dat je kenmerken van het autismespectrum hebt, zoek dan een gekwalificeerde professional (psycholoog of psychiater gespecialiseerd in autisme) voor een goede evaluatie.',
    
    // CDM Results
    'cdm.profileOverview': 'Profieloverzicht',
    'cdm.profileDescription': 'Cognitief profiel gebaseerd op Cognitieve Diagnostische Modellering',
    'cdm.averageAlignment': 'Gemiddelde Uitlijning',
    'cdm.consistency': 'Consistentie',
    'cdm.patternsIdentified': 'Geïdentificeerde Patronen',
    'cdm.cognitiveProfile': 'Cognitief Profiel',
    'cdm.radarDescription': 'Radargrafiek die uitlijningskansen toont voor elk cognitief attribuut',
    'cdm.identifiedPatterns': 'Geïdentificeerde Patronen',
    'cdm.patternsDescription': 'Attribuutcombinaties die neurodivergente kenmerken aangeven',
    'cdm.attributeDetails': 'Attribuutdetails',
    'cdm.attributeDetailsDescription': 'Gedetailleerde analyse van elk cognitief attribuut',
    'cdm.traitAlignedOf': 'eigenschap-uitgelijnde antwoorden van',
    'cdm.questions': 'vragen',
    'cdm.disclaimerTitle': 'Zelfbeoordelingsinstrument',
    'cdm.disclaimerText': 'Dit is een zelfbeoordelingsinstrument voor persoonlijke reflectie. Het vormt geen medische of psychologische diagnose. Voor professionele evaluatie, raadpleeg een gekwalificeerde specialist.',
    'cdm.generatePdf': 'PDF Genereren',

    // Cognitive Attributes
    'attr.social_communication': 'Sociale Communicatie',
    'attr.social_communication.desc': 'Verbale en non-verbale communicatiepatronen in sociale contexten',
    'attr.social_reciprocity': 'Sociale Wederkerigheid',
    'attr.social_reciprocity.desc': 'Heen-en-weer sociale interacties en relatiepatronen',
    'attr.sensory_processing': 'Sensorische Verwerking',
    'attr.sensory_processing.desc': 'Reactie op sensorische prikkels en omgevingsfactoren',
    'attr.executive_function': 'Executieve Functie',
    'attr.executive_function.desc': 'Planning, organisatie en taakmanagementvaardigheden',
    'attr.cognitive_flexibility': 'Cognitieve Flexibiliteit',
    'attr.cognitive_flexibility.desc': 'Aanpassingsvermogen aan verandering en schakelen tussen taken of concepten',
    'attr.attention_focus': 'Aandacht & Focus',
    'attr.attention_focus.desc': 'Concentratiepatronen en aandachtsregulatie',
    'attr.literal_thinking': 'Letterlijk Denken',
    'attr.literal_thinking.desc': 'Informatieverwerking en interpretatiestijl',
    'attr.repetitive_behaviors': 'Repetitief Gedrag',
    'attr.repetitive_behaviors.desc': 'Patronen van herhalende acties, interesses of routines',
    'attr.emotional_regulation': 'Emotionele Regulatie',
    'attr.emotional_regulation.desc': 'Beheersing en uiting van emoties',
    'attr.special_interests': 'Speciale Interesses',
    'attr.special_interests.desc': 'Intensiteit en focus van persoonlijke interesses',

    // Cognitive Patterns
    'pattern.communication_social_cluster': 'Communicatie-Sociale Cluster',
    'pattern.communication_social_cluster.desc': 'Sterke indicatie van verschillen in sociale communicatie en wederkerigheid',
    'pattern.sensory_regulation_cluster': 'Sensorische-Regulatie Cluster',
    'pattern.sensory_regulation_cluster.desc': 'Verhoogde sensorische verwerkingsverschillen en emotionele regulatiepatronen',
    'pattern.executive_attention_cluster': 'Executieve-Aandacht Cluster',
    'pattern.executive_attention_cluster.desc': 'Verschillen in executief functioneren en aandachtspatronen',
    'pattern.rigid_thinking_cluster': 'Rigide Denken Cluster',
    'pattern.rigid_thinking_cluster.desc': 'Voorkeur voor letterlijk denken en verminderde cognitieve flexibiliteit',
    'pattern.repetitive_interests_cluster': 'Repetitieve-Interesses Cluster',
    'pattern.repetitive_interests_cluster.desc': 'Sterke patronen van repetitief gedrag en intense speciale interesses',
    'pattern.comprehensive_profile': 'Uitgebreid Neurodivergent Profiel',
    'pattern.comprehensive_profile.desc': 'Meerdere domeinen die neurodivergente kenmerken tonen',

    // Home page
    'home.title': 'Autisme Spectrum Kenmerken Beoordeling',
    'home.subtitle': 'Een zelfbewustzijnstool gebaseerd op veelvoorkomende autisme spectrum kenmerken',
    'home.description': 'Deze vragenlijst is ontwikkeld om kenmerken te helpen identificeren die gerelateerd kunnen zijn aan het autisme spectrum.',
    'home.startButton': 'Start Beoordeling',
    'home.disclaimer': 'Alleen Entertainment',
    'home.howItWorks': 'Hoe Het Werkt',
    'home.about': 'Over de Test',
    'home.selfAwareness': 'Zelfbewustzijn',
    'home.quickSimple': 'Snel en Eenvoudig',
    'home.entertainmentOnly': 'Alleen Entertainment',
    'home.personalReflection': 'Voor reflectie en persoonlijke nieuwsgierigheid',
    'home.quickQuestionnaire': 'Snelle vragenlijst voor persoonlijke reflectie',
    'home.personalTool': 'Tool voor persoonlijke reflectie, zonder diagnostische waarde',
    'home.duration': '15-20 minuten',
    
    // About section
    'about.title': 'Wat is deze Zelfbeoordeling?',
    'about.description': 'Dit is een zelfbeoordelingtool gemaakt uitsluitend voor entertainment- en persoonlijke bewustzijnsdoeleinden.',
    'about.socialCommunication': 'Sociale Communicatie',
    'about.socialCommunicationDesc': 'Evalueert sociale interactie en communicatiepatronen',
    'about.behaviors': 'Gedragingen',
    'about.behaviorsDesc': 'Identificeert repetitieve patronen en specifieke interesses',
    'about.sensitivities': 'Gevoeligheden',
    'about.sensitivitiesDesc': 'Evalueert sensorische en omgevingsgevoeligheden',
    'about.selfAwarenessTitle': 'Zelfbewustzijn',
    'about.selfAwarenessDesc': 'Bevordert groter zelfbegrip',
    'about.whyTakeTitle': 'Waarom deze beoordeling doen?',
    'about.selfUnderstanding': '✓ Zelfbewustzijn',
    'about.selfUnderstandingDesc': 'Begrijp je unieke kenmerken en gedragspatronen beter.',
    'about.professionalGuidance': '✓ Professionele Begeleiding',
    'about.professionalGuidanceDesc': 'Ontvang begeleiding over wanneer je gespecialiseerde klinische evaluatie moet zoeken.',
    'about.resourcesSupport': '✓ Middelen en Ondersteuning',
    'about.resourcesSupportDesc': 'Toegang tot informatie en middelen relevant voor je profiel.',
    'about.community': '✓ Gemeenschap',
    'about.communityDesc': 'Verbind met anderen die vergelijkbare ervaringen delen.',
    
    // Test Info section
    'testInfo.title': 'Over de Autisme Spectrum Kenmerken Test',
    'testInfo.subtitle': 'Begrijp hoe ons zelfbeoordelingsinstrument werkt',
    'testInfo.pageTitle': 'Gedetailleerde Testinformatie',
    'testInfo.pageSubtitle': 'Leer meer over onze beoordeling en de professionals betrokken bij onderzoek',
    'testInfo.backToHome': 'Terug naar Home',
    'testInfo.whatIsIt': 'Wat is deze test?',
    'testInfo.whatIsItDesc': 'Dit is een interactief zelfbeoordelingsinstrument dat helpt bij het identificeren van kenmerken die gewoonlijk geassocieerd worden met het autisme spectrum.',
    'testInfo.whatIsItDesc2': 'De test gebruikt een evidence-based benadering om patronen van gedrag, sociale communicatie en sensorische verwerking op een niet-invasieve manier te analyseren.',
    'testInfo.howWorksTitle': 'Hoe werkt het?',
    'testInfo.howWorksDesc': 'De test presenteert alledaagse situaties waar je het antwoord kiest dat het meest overeenkomt met je natuurlijke gedrag.',
    'testInfo.howWorksDesc2': 'We gebruiken het Cognitieve Diagnostische Model (CDM) om je antwoorden te analyseren en specifieke cognitieve patronen gerelateerd aan neuroontwikkeling te identificeren.',
    'testInfo.scientificBasis': 'Wetenschappelijke Basis',
    'testInfo.scientificBasisDesc': 'Onze vragenlijst is gebaseerd op internationaal erkende diagnostische criteria en huidige onderzoek naar neurodiversiteit. De vragen behandelen belangrijke gebieden zoals sociale communicatie, sensorische gevoeligheden, gedragspatronen en cognitieve verwerking.',
    'testInfo.limitations': 'Belangrijke Beperkingen',
    'testInfo.limitationsDesc': 'Deze test is uitsluitend voor educatieve en zelfbewustzijnsdoeleinden. Het vervangt geen professionele beoordeling en moet niet gebruikt worden voor medische diagnose. Voor een complete evaluatie, raadpleeg altijd een gekwalificeerde zorgverlener.',
    'testInfo.researcherTitle': 'Verantwoordelijke Onderzoeksprofessional',
    'testInfo.researcherSubtitle': 'Ontmoet de professional die anonieme gegevens voor wetenschappelijk onderzoek kan gebruiken',
    'testInfo.doctorName': 'C.F. Collares',
    'testInfo.doctorInfo': 'Carlos Fernando Collares is een gepassioneerde educator, arts, neurowetenschapper en verhalenverteller. Met een onderscheidende carrière gewijd aan het bevorderen van educatief onderzoek, heeft hij bijgedragen aan innovatieve beoordelingsmethoden en curriculaire hervormingen in gezondheidseducatie.',
    'testInfo.qualifications': 'Kwalificaties',
    'testInfo.qualificationsDesc': 'Educator, arts en neurowetenschapper met een hart voor het inspireren van studenten en professionals. Ook een creatieve geest die een reis begint als auteur van boeken voor kinderen, adolescenten en volwassenen, waarbij wetenschap, filosofie, verbeelding en betekenisvolle boodschappen worden gecombineerd.',
    'testInfo.researchPurpose': 'Onderzoeksdoel',
    'testInfo.researchPurposeDesc': 'Verzamelde gegevens kunnen worden gebruikt voor wetenschappelijk onderzoek naar cognitieve patronen en ontwikkeling van betere beoordelingsinstrumenten.',
    'testInfo.dataUsageTitle': 'Hoe je gegevens kunnen worden gebruikt:',
    'testInfo.dataUsage1': 'Alle gegevens zijn volledig anoniem en niet-identificeerbaar',
    'testInfo.dataUsage2': 'Uitsluitend gebruikt voor wetenschappelijk onderzoek naar neurodiversiteit',
    'testInfo.dataUsage3': 'Kunnen bijdragen aan de ontwikkeling van betere beoordelingsinstrumenten',
    'testInfo.dataUsage4': 'Nooit gedeeld met derden voor commerciële doeleinden',
    'testInfo.startAssessment': 'Start Beoordeling',
    
    // How it works section
    'howItWorks.title': 'Hoe Het Werkt',
    'howItWorks.subtitle': 'Een eenvoudig en wetenschappelijk 3-stappen proces voor je zelfbeoordeling',
    'howItWorks.step1Title': 'Beantwoord de Vragen',
    'howItWorks.step1Desc': 'Voltooi een zorgvuldig samengestelde vragenlijst met vragen over gedragingen, communicatie en gevoeligheden.',
    'howItWorks.step1Time': '15-20 min',
    'howItWorks.step2Title': 'Resultatenanalyse',
    'howItWorks.step2Desc': 'Ons systeem analyseert je antwoorden op basis van internationaal erkende wetenschappelijke criteria.',
    'howItWorks.step2Time': 'Direct',
    'howItWorks.step3Title': 'Ontvang je Rapport',
    'howItWorks.step3Desc': 'Krijg een gedetailleerd rapport met inzichten, begeleiding en middelen gepersonaliseerd voor je profiel.',
    'howItWorks.step3Time': 'Onmiddellijk',
    'howItWorks.important': 'Belangrijk: Dit is geen diagnostisch hulpmiddel',
    'howItWorks.disclaimer': 'Deze beoordeling is een zelfbewustzijnstool gebaseerd op wetenschappelijke criteria.',
    
    // CTA section
    'cta.title': 'Klaar om je zelfontdekkingsreis te beginnen?',
    'cta.subtitle': 'Verken je kenmerken door reflectieve vragen.',
    'cta.startButton': 'Start Beoordeling Nu',
    'cta.sampleReport': 'Bekijk Voorbeeldrapport',
    'cta.infiniteReflections': 'Mogelijke Reflecties',
    'cta.averageTime': 'Gemiddelde Tijd',
    'cta.entertainmentOnly': 'Alleen Entertainment',
    
    // Assessment page
    'assessment.title': 'Autisme Spectrum Kenmerken Beoordeling',
    'assessment.subtitle': 'Beantwoord de vragen volgens hoeveel je je identificeert met elke bewering.',
    'assessment.question': 'Vraag',
    'assessment.of': 'van',
    'assessment.back': 'Terug',
    'assessment.previous': 'Vorige',
    'assessment.next': 'Volgende',
    'assessment.finish': 'Beoordeling Voltooien',
    'assessment.backToHome': 'Terug naar Home',
    
    // Results
    'results.title': 'Beoordelingsresultaten',
    'results.subtitle': 'Analyse gebaseerd op je antwoorden',
    'results.score': 'Score',
    'results.downloadPdf': 'Download PDF',
    'results.retakeTest': 'Test Opnieuw Doen',
    'results.characteristics': 'Geïdentificeerde kenmerken:',
    'results.recommendation': 'Aanbeveling:',
    'results.important': 'Belangrijk:',
    'results.disclaimer': 'Deze test is alleen voor entertainment en zelfbewustzijn.',
    
    // Response options
    'response.traitAligned': 'Optie A',
    'response.neurotypicalAligned': 'Optie B',
    
    // Language selector
    'language.selector': 'Taal',
    'language.portuguese': 'Português (BR)',
    'language.english': 'English',
    'language.spanish': 'Español',
    'language.dutch': 'Nederlands',
    'language.german': 'Deutsch',
    
    // Questions with new answer structure (all 80 questions in Dutch)
    'question.1': 'Op een werkvergadering maakt je collega een grap waar iedereen om lacht, maar je begrijpt niet waarom het grappig is.',
    'question.1.traitAnswer': 'Blijf je richten op de inhoud van de vergadering',
    'question.1.neurotypicalAnswer': 'Meelachen met iedereen',
    'question.2': 'Iemand zegt "Kun je me een handje helpen?" terwijl ze zware dozen dragen.',
    'question.2.traitAnswer': 'Ze helpen de dozen dragen',
    'question.2.neurotypicalAnswer': 'Letterlijk je hand aanbieden',
    'question.3': 'Een collega vermeldt dat ze een "moeilijke ochtend" hadden met een lichte glimlach.',
    'question.3.traitAnswer': 'Korte sympathie bieden en van onderwerp veranderen',
    'question.3.neurotypicalAnswer': 'Vragen naar specifieke details over wat er mis ging',
    'question.4': 'Tijdens een informeel gesprek vraagt iemand "Hoe was je weekend?"',
    'question.4.traitAnswer': 'Kort één hoogtepunt delen',
    'question.4.neurotypicalAnswer': 'Een gedetailleerd chronologisch verslag geven',
    'question.5': 'Je vriend zegt "Ik sterf van schaamte" na een fout.',
    'question.5.traitAnswer': 'Erkennen dat ze zich erg beschaamd voelen',
    'question.5.neurotypicalAnswer': 'Bezorgdheid uiten over hun gezondheid',
    'question.6': 'Je voelt je gestrest na een lange dag op werk/school.',
    'question.6.traitAnswer': 'Een favoriete film kijken die je al vaak gezien hebt',
    'question.6.neurotypicalAnswer': 'Een nieuwe activiteit proberen die je nog nooit gedaan hebt',
    'question.7': 'Terwijl je je concentreert op een taak, merk je dat je ritmisch met je vingers tikt.',
    'question.7.traitAnswer': 'Blijven tikken omdat het je helpt concentreren',
    'question.7.neurotypicalAnswer': 'Onmiddellijk stoppen met tikken',
    'question.8': 'Je moet je werkruimte organiseren.',
    'question.8.traitAnswer': 'Items in precies hetzelfde patroon als altijd ordenen',
    'question.8.neurotypicalAnswer': 'Een nieuw organisatiesysteem proberen',
    'question.9': 'Bij het lopen over een betegelde vloer, merk je het patroon op.',
    'question.9.traitAnswer': 'Je gedwongen voelen om in een specifiek patroon te stappen',
    'question.9.neurotypicalAnswer': 'Normaal lopen zonder erover na te denken',
    'question.10': 'Je staat in een lange rij te wachten.',
    'question.10.traitAnswer': 'Licht wiegen of met een object spelen',
    'question.10.neurotypicalAnswer': 'Stil staan en rondkijken',
    'question.11': 'Je komt een druk restaurant binnen met felle lichten, luide muziek en sterke etensgeuren.',
    'question.11.traitAnswer': 'Het overweldigend vinden en overwegen te vertrekken',
    'question.11.neurotypicalAnswer': 'Genieten van de levendige sfeer',
    'question.12': 'Je moet nieuwe kleren kopen, maar de winkel heeft alleen items van een stof die ruw aanvoelt.',
    'question.12.traitAnswer': 'Weggaan zonder iets te kopen',
    'question.12.neurotypicalAnswer': 'De kleren toch kopen',
    'question.13': 'Iemand met sterke parfum gaat naast je zitten in het openbaar vervoer.',
    'question.13.traitAnswer': 'Je misselijk voelen en weg moeten gaan',
    'question.13.neurotypicalAnswer': 'Het opmerken maar op je plaats blijven',
    'question.14': 'Het brandalarm gaat onverwacht af tijdens een oefening.',
    'question.14.traitAnswer': 'Je oren bedekken en je gestrest voelen',
    'question.14.neurotypicalAnswer': 'Rustig de evacuatieprocedures volgen',
    'question.15': 'Je krijgt eten aangeboden met meerdere gemengde texturen.',
    'question.15.traitAnswer': 'Weigeren of alleen vergelijkbare texturen eten',
    'question.15.neurotypicalAnswer': 'Zonder zorgen eten',
    'question.16': 'Een vriend vertelt enthousiast over hun vakantieplannen.',
    'question.16.traitAnswer': 'Wachten tot ze klaar zijn en dan over je interesses praten',
    'question.16.neurotypicalAnswer': 'Vervolgvragen stellen over hun reis',
    'question.17': 'Tijdens een gesprek merk je dat de andere persoon naar hun horloge kijkt.',
    'question.17.traitAnswer': 'Doorgaan met het gedetailleerd uitleggen van je punt',
    'question.17.neurotypicalAnswer': 'Snel samenvatten wat je aan het zeggen bent',
    'question.18': 'Iemand deelt dat ze zich verdrietig voelen omdat hun huisdier ziek is.',
    'question.18.traitAnswer': 'Feiten over dierengezondheid delen',
    'question.18.neurotypicalAnswer': 'Sympathie uitdrukken en vragen hoe ze ermee omgaan',
    'question.19': 'In een groepsgesprek bespreken anderen hun weekendplannen.',
    'question.19.traitAnswer': 'Stil wachten tot iemand het je direct vraagt',
    'question.19.neurotypicalAnswer': 'Je eigen plannen aanbieden wanneer gepast',
    'question.20': 'Een collega vermeldt dat ze moeite hebben met een project.',
    'question.20.traitAnswer': 'Doorgaan met je eigen werk tenzij gevraagd',
    'question.20.neurotypicalAnswer': 'Hulp aanbieden of advies delen',
    'question.21': 'Je gebruikelijke route naar het werk is geblokkeerd vanwege constructie.',
    'question.21.traitAnswer': 'Je zeer gestrest voelen en moeite hebben met functioneren',
    'question.21.neurotypicalAnswer': 'Makkelijk een alternatieve route nemen',
    'question.22': 'Plannen voor een weekendtrip worden plotseling geannuleerd.',
    'question.22.traitAnswer': 'Aanzienlijke tijd nodig hebben om aan de verandering te wennen',
    'question.22.neurotypicalAnswer': 'Snel alternatieve plannen maken',
    'question.23': 'Je favoriete café heeft je gebruikelijke bestelling niet meer.',
    'question.23.traitAnswer': 'Weggaan zonder iets te bestellen',
    'question.23.neurotypicalAnswer': 'Iets anders proberen',
    'question.24': 'Een vergadering wordt op het laatste moment verplaatst.',
    'question.24.traitAnswer': 'Je angstig en verstoord voelen de hele dag',
    'question.24.neurotypicalAnswer': 'Je agenda dienovereenkomstig aanpassen',
    'question.25': 'Je gebruikelijke zitplaats op werk/school wordt ingenomen door iemand anders.',
    'question.25.traitAnswer': 'Je onrustig voelen en niet kunnen concentreren',
    'question.25.neurotypicalAnswer': 'Ergens anders gaan zitten zonder probleem',
    'question.26': 'Je hebt vrije tijd in het weekend.',
    'question.26.traitAnswer': 'Uren besteden aan je favoriete onderwerp/hobby',
    'question.26.neurotypicalAnswer': 'Verschillende activiteiten doen',
    'question.27': 'Iemand vraagt naar je interesses.',
    'question.27.traitAnswer': 'Uitgebreid praten over één specifiek onderwerp',
    'question.27.neurotypicalAnswer': 'Kort verschillende interesses noemen',
    'question.28': 'Je kiest een boek om te lezen.',
    'question.28.traitAnswer': 'Een boek over je speciale interessegebied kiezen',
    'question.28.neurotypicalAnswer': 'Een compleet nieuw genre proberen',
    'question.29': 'Een vakantiebestemming plannen.',
    'question.29.traitAnswer': 'Kiezen gebaseerd op je specifieke interesse',
    'question.29.neurotypicalAnswer': 'Een plek kiezen voor algemene ontspanning',
    'question.30': 'Je leefruimte decoreren.',
    'question.30.traitAnswer': 'Uitgebreide collecties tonen gerelateerd aan één thema',
    'question.30.neurotypicalAnswer': 'Verschillende decoratiestijlen mengen',
    'question.31': 'Tijdens gesprekken voelt oogcontact maken:',
    'question.31.traitAnswer': 'Oncomfortabel of afleidend',
    'question.31.neurotypicalAnswer': 'Natuurlijk en makkelijk',
    'question.32': 'Iemand zwaait naar je vanaf de andere kant van de kamer.',
    'question.32.traitAnswer': 'Onzeker of ze jou bedoelen of hoe te reageren',
    'question.32.neurotypicalAnswer': 'Meteen terugzwaaien',
    'question.33': 'Gezichtsuitdrukkingen bij anderen lezen is:',
    'question.33.traitAnswer': 'Moeilijk en vereist bewuste inspanning',
    'question.33.neurotypicalAnswer': 'Automatisch en intuïtief',
    'question.34': 'Gebaren gebruiken tijdens het praten:',
    'question.34.traitAnswer': 'Voelt onnatuurlijk of vergeetbaar',
    'question.34.neurotypicalAnswer': 'Gebeurt natuurlijk zonder nadenken',
    'question.35': 'Iemands toon klinkt anders dan hun woorden.',
    'question.35.traitAnswer': 'Alleen focussen op de letterlijke woorden',
    'question.35.neurotypicalAnswer': 'De emotionele ondertoon oppikken',
    'question.36': 'Een project met meerdere stappen starten:',
    'question.36.traitAnswer': 'Je overweldigd voelen en niet weten waar te beginnen',
    'question.36.neurotypicalAnswer': 'Opdelen en systematisch beginnen',
    'question.37': 'Meerdere deadlines beheren:',
    'question.37.traitAnswer': 'Moeite hebben met prioriteren en vaak enkele missen',
    'question.37.neurotypicalAnswer': 'Alles bijhouden en op tijd voltooien',
    'question.38': 'Inpakken voor een reis:',
    'question.38.traitAnswer': 'Essentiële items vergeten ondanks proberen',
    'question.38.neurotypicalAnswer': 'Alles wat nodig is onthouden',
    'question.39': 'Meerdelige instructies volgen:',
    'question.39.traitAnswer': 'Ze herhaald of opgeschreven moeten hebben',
    'question.39.neurotypicalAnswer': 'Makkelijk onthouden en volgen',
    'question.40': 'Schakelen tussen verschillende taken:',
    'question.40.traitAnswer': 'Zeer moeilijk en uitputtend vinden',
    'question.40.neurotypicalAnswer': 'Soepel tussen taken bewegen'
  },

  de: {
    // CDM Results
    'cdm.profileOverview': 'Profilübersicht',
    'cdm.profileDescription': 'Kognitives Profil basierend auf Kognitiver Diagnostischer Modellierung',
    'cdm.averageAlignment': 'Durchschnittliche Ausrichtung',
    'cdm.consistency': 'Konsistenz',
    'cdm.patternsIdentified': 'Identifizierte Muster',
    'cdm.cognitiveProfile': 'Kognitives Profil',
    'cdm.radarDescription': 'Radardiagramm zeigt Ausrichtungswahrscheinlichkeiten für jedes kognitive Attribut',
    'cdm.identifiedPatterns': 'Identifizierte Muster',
    'cdm.patternsDescription': 'Attributkombinationen, die neurodivergente Eigenschaften anzeigen',
    'cdm.attributeDetails': 'Attributdetails',
    'cdm.attributeDetailsDescription': 'Detaillierte Analyse jedes kognitiven Attributs',
    'cdm.traitAlignedOf': 'eigenschaftsausgerichtete Antworten von',
    'cdm.questions': 'Fragen',
    'cdm.disclaimerTitle': 'Selbstbewertungsinstrument',
    'cdm.disclaimerText': 'Dies ist ein Selbstbewertungsinstrument für persönliche Reflexion. Es stellt keine medizinische oder psychologische Diagnose dar. Für professionelle Bewertung konsultieren Sie einen qualifizierten Spezialisten.',
    'cdm.generatePdf': 'PDF Erstellen',

    // Cognitive Attributes
    'attr.social_communication': 'Soziale Kommunikation',
    'attr.social_communication.desc': 'Verbale und nonverbale Kommunikationsmuster in sozialen Kontexten',
    'attr.social_reciprocity': 'Soziale Reziprozität',
    'attr.social_reciprocity.desc': 'Hin- und her-soziale Interaktionen und Beziehungsmuster',
    'attr.sensory_processing': 'Sensorische Verarbeitung',
    'attr.sensory_processing.desc': 'Reaktion auf sensorische Reize und Umweltfaktoren',
    'attr.executive_function': 'Exekutive Funktion',
    'attr.executive_function.desc': 'Planungs-, Organisations- und Aufgabenmanagementfähigkeiten',
    'attr.cognitive_flexibility': 'Kognitive Flexibilität',
    'attr.cognitive_flexibility.desc': 'Anpassungsfähigkeit an Veränderungen und Wechsel zwischen Aufgaben oder Konzepten',
    'attr.attention_focus': 'Aufmerksamkeit & Fokus',
    'attr.attention_focus.desc': 'Konzentrationsmuster und Aufmerksamkeitsregulation',
    'attr.literal_thinking': 'Wörtliches Denken',
    'attr.literal_thinking.desc': 'Informationsverarbeitung und Interpretationsstil',
    'attr.repetitive_behaviors': 'Repetitive Verhaltensweisen',
    'attr.repetitive_behaviors.desc': 'Muster von wiederholenden Handlungen, Interessen oder Routinen',
    'attr.emotional_regulation': 'Emotionsregulation',
    'attr.emotional_regulation.desc': 'Management und Ausdruck von Emotionen',
    'attr.special_interests': 'Spezielle Interessen',
    'attr.special_interests.desc': 'Intensität und Fokus persönlicher Interessen',

    // Cognitive Patterns
    'pattern.communication_social_cluster': 'Kommunikations-Soziales Cluster',
    'pattern.communication_social_cluster.desc': 'Starke Hinweise auf Unterschiede in sozialer Kommunikation und Gegenseitigkeit',
    'pattern.sensory_regulation_cluster': 'Sensorisch-Regulations Cluster',
    'pattern.sensory_regulation_cluster.desc': 'Verstärkte sensorische Verarbeitungsunterschiede und emotionale Regulationsmuster',
    'pattern.executive_attention_cluster': 'Exekutiv-Aufmerksamkeits Cluster',
    'pattern.executive_attention_cluster.desc': 'Unterschiede in exekutivem Funktionieren und Aufmerksamkeitsmustern',
    'pattern.rigid_thinking_cluster': 'Rigides Denken Cluster',
    'pattern.rigid_thinking_cluster.desc': 'Präferenz für wörtliches Denken und reduzierte kognitive Flexibilität',
    'pattern.repetitive_interests_cluster': 'Repetitive-Interessen Cluster',
    'pattern.repetitive_interests_cluster.desc': 'Starke Muster von repetitivem Verhalten und intensiven speziellen Interessen',
    'pattern.comprehensive_profile': 'Umfassendes Neurodivergentes Profil',
    'pattern.comprehensive_profile.desc': 'Mehrere Bereiche zeigen neurodivergente Eigenschaften',

    // Home page
    'home.title': 'Autismus-Spektrum Charakteristiken Bewertung',
    'home.subtitle': 'Ein Selbstbewusstseinswerkzeug basierend auf häufigen Autismus-Spektrum Charakteristiken',
    'home.description': 'Dieser Fragebogen wurde entwickelt, um Charakteristiken zu identifizieren, die mit dem Autismus-Spektrum in Verbindung stehen können.',
    'home.startButton': 'Bewertung Starten',
    'home.disclaimer': 'Nur Unterhaltung',
    'home.howItWorks': 'Wie Es Funktioniert',
    'home.about': 'Über den Test',
    'home.selfAwareness': 'Selbstbewusstsein',
    'home.quickSimple': 'Schnell und Einfach',
    'home.entertainmentOnly': 'Nur Unterhaltung',
    'home.personalReflection': 'Für Reflexion und persönliche Neugier',
    'home.quickQuestionnaire': 'Schneller Fragebogen für persönliche Reflexion',
    'home.personalTool': 'Werkzeug für persönliche Reflexion, ohne diagnostischen Wert',
    'home.duration': '15-20 Minuten',
    
    // About section
    'about.title': 'Was ist diese Selbstbewertung?',
    'about.description': 'Dies ist ein Selbstbewertungswerkzeug, das ausschließlich für Unterhaltungs- und persönliche Bewusstseinszwecke erstellt wurde.',
    'about.socialCommunication': 'Soziale Kommunikation',
    'about.socialCommunicationDesc': 'Bewertet soziale Interaktion und Kommunikationsmuster',
    'about.behaviors': 'Verhalten',
    'about.behaviorsDesc': 'Identifiziert repetitive Muster und spezifische Interessen',
    'about.sensitivities': 'Empfindlichkeiten',
    'about.sensitivitiesDesc': 'Bewertet sensorische und umweltbedingte Empfindlichkeiten',
    'about.selfAwarenessTitle': 'Selbstbewusstsein',
    'about.selfAwarenessDesc': 'Fördert größeres Selbstverständnis',
    'about.whyTakeTitle': 'Warum diese Bewertung machen?',
    'about.selfUnderstanding': '✓ Selbstbewusstsein',
    'about.selfUnderstandingDesc': 'Verstehe deine einzigartigen Charakteristiken und Verhaltensmuster besser.',
    'about.professionalGuidance': '✓ Professionelle Anleitung',
    'about.professionalGuidanceDesc': 'Erhalte Anleitung darüber, wann du spezialisierte klinische Bewertung suchst.',
    'about.resourcesSupport': '✓ Ressourcen und Unterstützung',
    'about.resourcesSupportDesc': 'Zugang zu Informationen und Ressourcen, die für dein Profil relevant sind.',
    'about.community': '✓ Gemeinschaft',
    'about.communityDesc': 'Verbinde dich mit anderen, die ähnliche Erfahrungen teilen.',
    
    // Test Info section
    'testInfo.title': 'Über den Autismus-Spektrum Charakteristiken Test',
    'testInfo.subtitle': 'Verstehe, wie unser Selbstbewertungsinstrument funktioniert',
    'testInfo.pageTitle': 'Detaillierte Testinformationen',
    'testInfo.pageSubtitle': 'Erfahre mehr über unsere Bewertung und die an der Forschung beteiligten Fachkräfte',
    'testInfo.backToHome': 'Zurück zur Startseite',
    'testInfo.whatIsIt': 'Was ist dieser Test?',
    'testInfo.whatIsItDesc': 'Dies ist ein interaktives Selbstbewertungsinstrument, das hilft, Charakteristiken zu identifizieren, die häufig mit dem Autismus-Spektrum assoziiert sind.',
    'testInfo.whatIsItDesc2': 'Der Test verwendet einen evidenzbasierten Ansatz zur Analyse von Verhaltensmustern, sozialer Kommunikation und sensorischer Verarbeitung auf nicht-invasive Weise.',
    'testInfo.howWorksTitle': 'Wie funktioniert es?',
    'testInfo.howWorksDesc': 'Der Test präsentiert alltägliche Situationen, in denen du die Antwort wählst, die am besten zu deinem natürlichen Verhalten passt.',
    'testInfo.howWorksDesc2': 'Wir verwenden das Kognitive Diagnostische Modell (CDM), um deine Antworten zu analysieren und spezifische kognitive Muster bezüglich der Neuroenwicklung zu identifizieren.',
    'testInfo.scientificBasis': 'Wissenschaftliche Grundlage',
    'testInfo.scientificBasisDesc': 'Unser Fragebogen basiert auf international anerkannten diagnostischen Kriterien und aktueller Forschung zur Neurodiversität. Die Fragen behandeln Schlüsselbereiche wie soziale Kommunikation, sensorische Empfindlichkeiten, Verhaltensmuster und kognitive Verarbeitung.',
    'testInfo.limitations': 'Wichtige Einschränkungen',
    'testInfo.limitationsDesc': 'Dieser Test ist ausschließlich für Bildungs- und Selbstbewusstseinszwecke. Er ersetzt keine professionelle Bewertung und sollte nicht für medizinische Diagnosen verwendet werden. Für eine vollständige Bewertung konsultiere immer einen qualifizierten Gesundheitsfachmann.',
    'testInfo.researcherTitle': 'Verantwortlicher Forschungsprofi',
    'testInfo.researcherSubtitle': 'Lerne den Fachmann kennen, der anonyme Daten für wissenschaftliche Forschung verwenden kann',
    'testInfo.doctorName': 'C.F. Collares',
    'testInfo.doctorInfo': 'Carlos Fernando Collares ist ein leidenschaftlicher Pädagoge, Arzt, Neurowissenschaftler und Geschichtenerzähler. Mit einer ausgezeichneten Karriere, die dem Fortschritt der Bildungsforschung gewidmet ist, hat er zu innovativen Bewertungsmethoden und Lehrplanreformen in der Gesundheitsbildung beigetragen.',
    'testInfo.qualifications': 'Qualifikationen',
    'testInfo.qualificationsDesc': 'Pädagoge, Arzt und Neurowissenschaftler mit einem Herz dafür, Studenten und Fachkräfte zu inspirieren. Auch ein kreativer Geist, der eine Reise als Autor von Büchern für Kinder, Jugendliche und Erwachsene antritt und Wissenschaft, Philosophie, Vorstellungskraft und bedeutsame Botschaften kombiniert.',
    'testInfo.researchPurpose': 'Forschungszweck',
    'testInfo.researchPurposeDesc': 'Gesammelte Daten können für wissenschaftliche Forschung über kognitive Muster und Entwicklung besserer Bewertungsinstrumente verwendet werden.',
    'testInfo.dataUsageTitle': 'Wie deine Daten verwendet werden können:',
    'testInfo.dataUsage1': 'Alle Daten sind vollständig anonym und nicht identifizierbar',
    'testInfo.dataUsage2': 'Ausschließlich für wissenschaftliche Forschung zur Neurodiversität verwendet',
    'testInfo.dataUsage3': 'Können zur Entwicklung besserer Bewertungsinstrumente beitragen',
    'testInfo.dataUsage4': 'Niemals mit Dritten für kommerzielle Zwecke geteilt',
    'testInfo.startAssessment': 'Bewertung starten',
    
    // Spectrum Info page
    'spectrum.pageTitle': 'Das Autismus-Spektrum Verstehen',
    'spectrum.pageSubtitle': 'Eine Reise, um neurokognitive Vielfalt zu verstehen und verschiedene Arten der Weltverarbeitung zu feiern',
    'spectrum.backButton': 'Zurück',
    'spectrum.whatIsTitle': 'Was ist das Autismus-Spektrum?',
    'spectrum.whatIsDesc1': 'Die Autismus-Spektrum-Störung (ASS) ist eine neurologische Entwicklungsstörung, die beeinflusst, wie eine Person die Welt um sich herum wahrnimmt, verarbeitet und mit ihr interagiert. Sie wird "Spektrum" genannt, weil sie sich bei verschiedenen Menschen sehr unterschiedlich manifestiert.',
    'spectrum.whatIsDesc2': 'Jeder autistische Mensch ist einzigartig mit eigenen Stärken, Herausforderungen, Interessen und Bedürfnissen. Einige benötigen erhebliche Unterstützung im täglichen Leben, während andere unabhängiger leben, aber alle teilen Unterschiede in sozialer Kommunikation und Verhaltensmustern.',
    'spectrum.characteristicsTitle': 'Hauptmerkmale',
    'spectrum.socialCommunication': 'Soziale Kommunikation',
    'spectrum.socialCommunication.item1': '• Schwierigkeiten beim Verstehen nonverbaler sozialer Signale',
    'spectrum.socialCommunication.item2': '• Präferenz für direkte und wörtliche Kommunikation',
    'spectrum.socialCommunication.item3': '• Herausforderungen bei der Aufrechterhaltung wechselseitiger Gespräche',
    'spectrum.socialCommunication.item4': '• Verschiedene Arten, Emotionen auszudrücken',
    'spectrum.behaviorPatterns': 'Verhaltensmuster',
    'spectrum.behaviorPatterns.item1': '• Intensive und spezifische Interessen',
    'spectrum.behaviorPatterns.item2': '• Bedürfnis nach Routinen und Vorhersehbarkeit',
    'spectrum.behaviorPatterns.item3': '• Repetitive Bewegungen (Stimming)',
    'spectrum.behaviorPatterns.item4': '• Detaillierte Aufmerksamkeit für Muster und Details',
    'spectrum.sensoryProcessing': 'Sensorische Verarbeitung',
    'spectrum.sensoryProcessing.item1': '• Erhöhte oder verminderte Empfindlichkeit gegenüber Reizen',
    'spectrum.sensoryProcessing.item2': '• Intensive Reaktionen auf Geräusche, Lichter oder Texturen',
    'spectrum.sensoryProcessing.item3': '• Spezifische Nahrungsmittelpräferenzen',
    'spectrum.sensoryProcessing.item4': '• Bedürfnis nach spezifischen sensorischen Reizen',
    'spectrum.strengthsAbilities': 'Stärken und Fähigkeiten',
    'spectrum.strengthsAbilities.item1': '• Außergewöhnliche Aufmerksamkeit für Details',
    'spectrum.strengthsAbilities.item2': '• Tiefes Gedächtnis und Konzentration',
    'spectrum.strengthsAbilities.item3': '• Logisches und systematisches Denken',
    'spectrum.strengthsAbilities.item4': '• Kreativität und einzigartige Perspektiven',
    'spectrum.whySpectrumTitle': 'Warum "Spektrum"?',
    'spectrum.whySpectrumDesc1': 'Der Begriff "Spektrum" spiegelt die enorme Vielfalt wider, wie sich Autismus manifestiert. Es gibt keine einzige Art, "autistisch zu sein" - jede Person befindet sich an einem einzigartigen Punkt im Spektrum mit eigenen Merkmalen.',
    'spectrum.supportLevelsTitle': 'Unterstützungsstufen:',
    'spectrum.supportLevel1': 'Stufe 1: Benötigt etwas Unterstützung in spezifischen sozialen Situationen',
    'spectrum.supportLevel2': 'Stufe 2: Benötigt erhebliche Unterstützung im täglichen Leben',
    'spectrum.supportLevel3': 'Stufe 3: Benötigt sehr erhebliche Unterstützung in mehreren Bereichen',
    'spectrum.supportLevelsNote': 'Es ist wichtig sich zu erinnern, dass die benötigte Unterstützungsstufe nicht den Wert oder das Potenzial einer Person definiert - sie zeigt nur die Art der Unterstützung an, die nützlich sein kann.',
    'spectrum.mythsTitle': 'Mythen und Fakten',
    'spectrum.myth1': '❌ Mythos: Autistische Menschen fühlen keine Emotionen',
    'spectrum.truth1': '✓ Fakt: Autistische Menschen fühlen Emotionen tief, können sie aber auf unterschiedliche Weise ausdrücken',
    'spectrum.myth2': '❌ Mythos: Alle autistischen Menschen haben außergewöhnliche Fähigkeiten',
    'spectrum.truth2': '✓ Fakt: Wie jeder haben autistische Menschen unterschiedliche Talente und Fähigkeiten - einige haben außergewöhnliche Fähigkeiten in bestimmten Bereichen, andere nicht',
    'spectrum.myth3': '❌ Mythos: Autismus kann "geheilt" werden',
    'spectrum.truth3': '✓ Fakt: Autismus ist eine dauerhafte neurologische Erkrankung. Der Fokus sollte auf Unterstützung, Akzeptanz und Fähigkeitenentwicklung liegen',
    'spectrum.myth4': '❌ Mythos: Autistische Menschen ziehen es vor, allein zu sein',
    'spectrum.truth4': '✓ Fakt: Viele autistische Menschen wünschen sich soziale Verbindungen, benötigen aber möglicherweise unterschiedliche Interaktionsansätze',
    'spectrum.ctaTitle': 'Möchten Sie Mehr Über Ihr Profil Erfahren?',
    'spectrum.ctaDesc': 'Unsere CDM-Modell-basierte Bewertung kann Ihnen helfen, Ihre Merkmale besser zu verstehen und geeignete Ressourcen zu finden.',
    'spectrum.ctaButton': 'Bewertung Starten',
    
    // Disclaimer Alert
    'disclaimer.important': 'WICHTIG:',
    'disclaimer.text': 'Dieses Tool ist nur für Unterhaltung und persönliche Reflexion gedacht. Es hat keine wissenschaftliche, diagnostische oder klinische Gültigkeit. Ergebnisse sollten nicht als medizinische Diagnose interpretiert werden. Wenn Sie vermuten, dass Sie Merkmale des Autismus-Spektrums haben, suchen Sie einen qualifizierten Fachmann (Psychologen oder Psychiater spezialisiert auf Autismus) für eine angemessene Bewertung auf.',
    
    // How it works section
    'howItWorks.title': 'Wie Es Funktioniert',
    'howItWorks.subtitle': 'Ein einfacher und wissenschaftlicher 3-Schritte-Prozess für deine Selbstbewertung',
    'howItWorks.step1Title': 'Beantworte die Fragen',
    'howItWorks.step1Desc': 'Vervollständige einen sorgfältig erstellten Fragebogen mit Fragen über Verhalten, Kommunikation und Empfindlichkeiten.',
    'howItWorks.step1Time': '15-20 Min',
    'howItWorks.step2Title': 'Ergebnisanalyse',
    'howItWorks.step2Desc': 'Unser System analysiert deine Antworten basierend auf international anerkannten wissenschaftlichen Kriterien.',
    'howItWorks.step2Time': 'Sofort',
    'howItWorks.step3Title': 'Erhalte deinen Bericht',
    'howItWorks.step3Desc': 'Erhalte einen detaillierten Bericht mit Einblicken, Anleitung und Ressourcen, die auf dein Profil zugeschnitten sind.',
    'howItWorks.step3Time': 'Sofortig',
    'howItWorks.important': 'Wichtig: Dies ist kein diagnostisches Werkzeug',
    'howItWorks.disclaimer': 'Diese Bewertung ist ein Selbstbewusstseinswerkzeug basierend auf wissenschaftlichen Kriterien.',
    
    // CTA section
    'cta.title': 'Bereit, deine Selbstentdeckungsreise zu beginnen?',
    'cta.subtitle': 'Erkunde deine Charakteristiken durch reflektierende Fragen.',
    'cta.startButton': 'Bewertung Jetzt Starten',
    'cta.sampleReport': 'Beispielbericht Ansehen',
    'cta.infiniteReflections': 'Mögliche Reflexionen',
    'cta.averageTime': 'Durchschnittliche Zeit',
    'cta.entertainmentOnly': 'Nur Unterhaltung',
    
    // Assessment page
    'assessment.title': 'Autismus-Spektrum Charakteristiken Bewertung',
    'assessment.subtitle': 'Beantworte die Fragen entsprechend dem, wie sehr du dich mit jeder Aussage identifizierst.',
    'assessment.question': 'Frage',
    'assessment.of': 'von',
    'assessment.back': 'Zurück',
    'assessment.previous': 'Vorherige',
    'assessment.next': 'Nächste',
    'assessment.finish': 'Bewertung Beenden',
    'assessment.backToHome': 'Zurück zur Startseite',
    
    // Results
    'results.title': 'Bewertungsergebnisse',
    'results.subtitle': 'Analyse basierend auf deinen Antworten',
    'results.score': 'Punktzahl',
    'results.downloadPdf': 'PDF Herunterladen',
    'results.retakeTest': 'Test Wiederholen',
    'results.characteristics': 'Identifizierte Charakteristiken:',
    'results.recommendation': 'Empfehlung:',
    'results.important': 'Wichtig:',
    'results.disclaimer': 'Dieser Test ist nur für Unterhaltung und Selbstbewusstsein.',
    
    // Response options
    'response.traitAligned': 'Option A',
    'response.neurotypicalAligned': 'Option B',
    
    // Language selector
    'language.selector': 'Sprache',
    'language.portuguese': 'Português (BR)',
    'language.english': 'English',
    'language.spanish': 'Español',
    'language.dutch': 'Nederlands',
    'language.german': 'Deutsch',
    
    // Questions with new answer structure (all 80 questions in German)
    'question.1': 'In einem Arbeitsmeeting macht dein Kollege einen Witz, über den alle lachen, aber du verstehst nicht, warum es lustig ist.',
    'question.1.traitAnswer': 'Weiter auf den Meetinginhalt fokussieren',
    'question.1.neurotypicalAnswer': 'Mit allen anderen mitlachen',
    'question.2': 'Jemand sagt "Kannst du mir eine Hand geben?" während er schwere Kisten trägt.',
    'question.2.traitAnswer': 'Ihnen beim Tragen der Kisten helfen',
    'question.2.neurotypicalAnswer': 'Buchstäblich deine Hand anbieten',
    'question.3': 'Ein Kollege erwähnt, dass er einen "schweren Morgen" hatte mit einem leichten Lächeln.',
    'question.3.traitAnswer': 'Kurzes Mitgefühl zeigen und das Thema wechseln',
    'question.3.neurotypicalAnswer': 'Nach spezifischen Details fragen, was schief ging',
    'question.4': 'Während Small Talk fragt jemand "Wie war dein Wochenende?"',
    'question.4.traitAnswer': 'Kurz einen Höhepunkt teilen',
    'question.4.neurotypicalAnswer': 'Einen detaillierten chronologischen Bericht geben',
    'question.5': 'Dein Freund sagt "Ich sterbe vor Scham" nach einem Fehler.',
    'question.5.traitAnswer': 'Erkennen, dass sie sich sehr schämen',
    'question.5.neurotypicalAnswer': 'Sorge um ihre Gesundheit ausdrücken',
    'question.6': 'Du fühlst dich gestresst nach einem langen Tag bei der Arbeit/Schule.',
    'question.6.traitAnswer': 'Einen Lieblingsfilm schauen, den du schon oft gesehen hast',
    'question.6.neurotypicalAnswer': 'Eine neue Aktivität ausprobieren, die du noch nie gemacht hast',
    'question.7': 'Während du dich auf eine Aufgabe konzentrierst, bemerkst du, dass du rhythmisch mit den Fingern klopfst.',
    'question.7.traitAnswer': 'Mit dem Klopfen weitermachen, da es dir beim Fokussieren hilft',
    'question.7.neurotypicalAnswer': 'Sofort mit dem Klopfen aufhören',
    'question.8': 'Du musst deinen Arbeitsplatz organisieren.',
    'question.8.traitAnswer': 'Gegenstände im exakt gleichen Muster wie immer anordnen',
    'question.8.neurotypicalAnswer': 'Ein neues Organisationssystem ausprobieren',
    'question.9': 'Beim Gehen über einen gefliesten Boden bemerkst du das Muster.',
    'question.9.traitAnswer': 'Dich gedrängt fühlen, in einem spezifischen Muster zu gehen',
    'question.9.neurotypicalAnswer': 'Normal gehen ohne darüber nachzudenken',
    'question.10': 'Du wartest in einer langen Schlange.',
    'question.10.traitAnswer': 'Leicht wippen oder mit einem Gegenstand spielen',
    'question.10.neurotypicalAnswer': 'Still stehen und umherblicken',
    'question.11': 'Du betrittst ein belebtes Restaurant mit hellen Lichtern, lauter Musik und starken Essensgerüchen.',
    'question.11.traitAnswer': 'Es überwältigend finden und erwägen zu gehen',
    'question.11.neurotypicalAnswer': 'Die lebhafte Atmosphäre genießen',
    'question.12': 'Du musst neue Kleidung kaufen, aber der Laden hat nur Artikel aus einem Stoff, der sich rau anfühlt.',
    'question.12.traitAnswer': 'Gehen ohne etwas zu kaufen',
    'question.12.neurotypicalAnswer': 'Die Kleidung trotzdem kaufen',
    'question.13': 'Jemand mit starkem Parfüm setzt sich neben dich in öffentlichen Verkehrsmitteln.',
    'question.13.traitAnswer': 'Übelkeit verspüren und sich wegbewegen müssen',
    'question.13.neurotypicalAnswer': 'Es bemerken aber auf deinem Platz bleiben',
    'question.14': 'Der Feueralarm geht unerwartet während einer Übung los.',
    'question.14.traitAnswer': 'Deine Ohren bedecken und dich bedrückt fühlen',
    'question.14.neurotypicalAnswer': 'Ruhig den Evakuierungsverfahren folgen',
    'question.15': 'Dir wird Essen mit mehreren gemischten Texturen angeboten.',
    'question.15.traitAnswer': 'Ablehnen oder nur ähnliche Texturen essen',
    'question.15.neurotypicalAnswer': 'Es ohne Bedenken essen',
    'question.16': 'Ein Freund erzählt begeistert über seine Urlaubspläne.',
    'question.16.traitAnswer': 'Warten bis sie fertig sind und dann über deine Interessen sprechen',
    'question.16.neurotypicalAnswer': 'Nachfragen über ihre Reise stellen',
    'question.17': 'Während eines Gesprächs bemerkst du, dass die andere Person auf ihre Uhr schaut.',
    'question.17.traitAnswer': 'Weiter deinen Punkt detailliert erklären',
    'question.17.neurotypicalAnswer': 'Schnell zusammenfassen was du sagst',
    'question.18': 'Jemand teilt mit, dass er traurig ist, weil sein Haustier krank ist.',
    'question.18.traitAnswer': 'Fakten über Tiergesundheit teilen',
    'question.18.neurotypicalAnswer': 'Mitgefühl ausdrücken und fragen wie sie damit umgehen',
    'question.19': 'In einem Gruppengespräch besprechen andere ihre Wochendpläne.',
    'question.19.traitAnswer': 'Still warten bis jemand direkt fragt',
    'question.19.neurotypicalAnswer': 'Deine eigenen Pläne anbieten wenn angemessen',
    'question.20': 'Ein Kollege erwähnt, dass er Schwierigkeiten mit einem Projekt hat.',
    'question.20.traitAnswer': 'Mit deiner eigenen Arbeit weitermachen es sei denn gefragt',
    'question.20.neurotypicalAnswer': 'Hilfe anbieten oder Rat teilen',
    'question.21': 'Deine übliche Route zur Arbeit ist wegen Bauarbeiten blockiert.',
    'question.21.traitAnswer': 'Dich sehr bedrückt fühlen und Schwierigkeiten beim Funktionieren haben',
    'question.21.neurotypicalAnswer': 'Einfach eine alternative Route nehmen',
    'question.22': 'Pläne für einen Wochenendausflug werden plötzlich abgesagt.',
    'question.22.traitAnswer': 'Erhebliche Zeit brauchen um sich an die Änderung anzupassen',
    'question.22.neurotypicalAnswer': 'Schnell alternative Pläne machen',
    'question.23': 'Dein Lieblingscafé hat deine übliche Bestellung nicht mehr.',
    'question.23.traitAnswer': 'Gehen ohne etwas zu bestellen',
    'question.23.neurotypicalAnswer': 'Etwas anderes probieren',
    'question.24': 'Ein Meeting wird in letzter Minute verschoben.',
    'question.24.traitAnswer': 'Dich ängstlich und gestört fühlen den ganzen Tag',
    'question.24.neurotypicalAnswer': 'Deinen Zeitplan entsprechend anpassen',
    'question.25': 'Dein üblicher Sitzplatz bei der Arbeit/Schule ist von jemand anderem besetzt.',
    'question.25.traitAnswer': 'Dich unruhig fühlen und unfähig zu konzentrieren',
    'question.25.neurotypicalAnswer': 'Woanders sitzen ohne Problem',
    'question.26': 'Du hast freie Zeit am Wochenende.',
    'question.26.traitAnswer': 'Stunden mit deinem Lieblingsthema/Hobby verbringen',
    'question.26.neurotypicalAnswer': 'Verschiedene Aktivitäten machen',
    'question.27': 'Jemand fragt nach deinen Interessen.',
    'question.27.traitAnswer': 'Ausführlich über ein spezifisches Thema sprechen',
    'question.27.neurotypicalAnswer': 'Kurz verschiedene Interessen erwähnen',
    'question.28': 'Du wählst ein Buch zum Lesen.',
    'question.28.traitAnswer': 'Eins über dein spezielles Interessengebiet wählen',
    'question.28.neurotypicalAnswer': 'Ein völlig neues Genre ausprobieren',
    'question.29': 'Ein Urlaubsziel planen.',
    'question.29.traitAnswer': 'Basierend auf deinem spezifischen Interesse wählen',
    'question.29.neurotypicalAnswer': 'Einen Ort für allgemeine Entspannung wählen',
    'question.30': 'Deinen Wohnraum dekorieren.',
    'question.30.traitAnswer': 'Umfangreiche Sammlungen zu einem Thema zeigen',
    'question.30.neurotypicalAnswer': 'Verschiedene Dekorationsstile mischen',
    'question.31': 'Während Gesprächen fühlt sich Augenkontakt an:',
    'question.31.traitAnswer': 'Unkomfortabel oder ablenkend',
    'question.31.neurotypicalAnswer': 'Natürlich und einfach',
    'question.32': 'Jemand winkt dir von der anderen Seite des Raumes zu.',
    'question.32.traitAnswer': 'Unsicher ob sie dich meinen oder wie zu reagieren',
    'question.32.neurotypicalAnswer': 'Sofort zurückwinken',
    'question.33': 'Gesichtsausdrücke bei anderen zu lesen ist:',
    'question.33.traitAnswer': 'Schwierig und erfordert bewusste Anstrengung',
    'question.33.neurotypicalAnswer': 'Automatisch und intuitiv',
    'question.34': 'Gesten beim Sprechen zu verwenden:',
    'question.34.traitAnswer': 'Fühlt sich unnatürlich an oder ist vergesslich',
    'question.34.neurotypicalAnswer': 'Passiert natürlich ohne nachzudenken',
    'question.35': 'Jemandes Tonfall klingt anders als ihre Worte.',
    'question.35.traitAnswer': 'Nur auf die wörtlichen Worte fokussieren',
    'question.35.neurotypicalAnswer': 'Den emotionalen Unterton erfassen',
    'question.36': 'Ein mehrstufiges Projekt starten:',
    'question.36.traitAnswer': 'Dich überwältigt fühlen und nicht wissen wo anfangen',
    'question.36.neurotypicalAnswer': 'Aufteilen und systematisch beginnen',
    'question.37': 'Mehrere Fristen verwalten:',
    'question.37.traitAnswer': 'Schwierigkeiten beim Priorisieren haben und oft einige verpassen',
    'question.37.neurotypicalAnswer': 'Alles im Blick behalten und rechtzeitig abschließen',
    'question.38': 'Für eine Reise packen:',
    'question.38.traitAnswer': 'Wesentliche Gegenstände vergessen trotz Versuchen',
    'question.38.neurotypicalAnswer': 'Alles Notwendige erinnern',
    'question.39': 'Mehrteilige Anweisungen befolgen:',
    'question.39.traitAnswer': 'Sie wiederholt oder aufgeschrieben brauchen',
    'question.39.neurotypicalAnswer': 'Leicht erinnern und befolgen',
    'question.40': 'Zwischen verschiedenen Aufgaben wechseln:',
    'question.40.traitAnswer': 'Sehr schwierig und anstrengend finden',
    'question.40.neurotypicalAnswer': 'Geschmeidig zwischen Aufgaben wechseln'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt';
  });

  const setLanguageState = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const currentTranslations = translations[language];
    if (!currentTranslations) {
      console.warn(`No translations found for language: ${language}`);
      return key;
    }
    
    const translation = currentTranslations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key;
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageState, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
