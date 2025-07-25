import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Home page
    'home.title': 'Avaliação de Características do Espectro Autista',
    'home.subtitle': 'Uma ferramenta de autoconhecimento baseada em características comuns do espectro autista',
    'home.description': 'Este questionário foi desenvolvido para ajudar na identificação de características que podem estar relacionadas ao espectro autista. É importante lembrar que este teste é apenas para fins educacionais e de autoconhecimento.',
    'home.startButton': 'Iniciar Avaliação',
    'home.disclaimer': 'Importante: Este teste é apenas para entretenimento e autoconhecimento. Não substitui uma avaliação profissional.',
    'home.howItWorks': 'Como Funciona',
    'home.about': 'Sobre o Teste',
    
    // Assessment page
    'assessment.title': 'Avaliação de Características do Espectro Autista',
    'assessment.subtitle': 'Responda as questões de acordo com como você se identifica com cada afirmação. Lembre-se: este teste é apenas para autoconhecimento e entretenimento.',
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
    'results.disclaimer': 'Este teste é apenas para entretenimento e autoconhecimento. Não substitui uma avaliação profissional. Para um diagnóstico adequado, procure um profissional especializado em autismo.',
    
    // Response options
    'response.stronglyIdentify': 'Me identifico muito',
    'response.identify': 'Me identifico',
    'response.slightlyIdentify': 'Me identifico pouco',
    'response.dontIdentify': 'Não me identifico',
    
    // Language selector
    'language.selector': 'Idioma',
    'language.portuguese': 'Português',
    'language.english': 'English',
    
    // Questions in Portuguese
    'question.1': 'Em uma reunião de trabalho, seu colega faz uma piada que todos acham engraçada, mas você não entende por que é engraçado.',
    'question.2': 'Alguém diz "Você pode me dar uma mão?" enquanto carrega caixas pesadas.',
    'question.3': 'Um colega de trabalho menciona que teve uma "manhã difícil" com um leve sorriso.',
    'question.4': 'Durante uma conversa casual, alguém pergunta "Como foi seu fim de semana?"',
    'question.5': 'Seu amigo diz "Estou morrendo de vergonha" depois de um erro.',
    'question.6': 'Você está se sentindo estressado após um longo dia de trabalho/escola.',
    'question.7': 'Enquanto se concentra em uma tarefa, você se percebe batendo os dedos ritmicamente.',
    'question.8': 'Você precisa organizar seu espaço de trabalho.',
    'question.9': 'Ao caminhar por um piso ladrilhado, você nota o padrão.',
    'question.10': 'Você está esperando em uma fila longa.',
    'question.11': 'Você entra em um restaurante movimentado com luzes brilhantes, música alta e cheiros fortes de comida.',
    'question.12': 'Você precisa comprar roupas novas, mas a loja só tem itens feitos de um tecido que parece áspero.',
    'question.13': 'Alguém usando perfume forte se senta ao seu lado no transporte público.',
    'question.14': 'O alarme de incêndio dispara inesperadamente durante um simulacro.',
    'question.15': 'Oferecem-lhe comida com múltiplas texturas misturadas.',
    'question.16': 'Um amigo conta animadamente sobre seus planos de férias.',
    'question.17': 'Durante uma conversa, você nota a outra pessoa olhando para o relógio.',
    'question.18': 'Alguém compartilha que está se sentindo triste porque seu animal de estimação está doente.',
    'question.19': 'Em uma conversa em grupo, outros estão discutindo planos de fim de semana.',
    'question.20': 'Um colega menciona que está tendo dificuldades com um projeto.',
    'question.21': 'Sua rota usual para o trabalho está bloqueada devido à construção.',
    'question.22': 'Os planos para uma viagem de fim de semana são cancelados repentinamente.',
    'question.23': 'Sua cafeteria favorita fica sem seu pedido usual.',
    'question.24': 'Uma reunião é reagendada no último minuto.',
    'question.25': 'Seu assento usual no trabalho/escola é ocupado por outra pessoa.',
    'question.26': 'Você tem tempo livre no fim de semana.',
    'question.27': 'Alguém pergunta sobre seus interesses.',
    'question.28': 'Você está escolhendo um livro para ler.',
    'question.29': 'Planejando um destino de férias.',
    'question.30': 'Decorando seu espaço de vida.',
    'question.31': 'Durante conversas, fazer contato visual parece:',
    'question.32': 'Alguém acena para você do outro lado da sala.',
    'question.33': 'Ler expressões faciais em outros é:',
    'question.34': 'Usar gestos ao falar:',
    'question.35': 'O tom de alguém soa diferente de suas palavras.',
    'question.36': 'Iniciar um projeto de várias etapas:',
    'question.37': 'Gerenciar múltiplos prazos:',
    'question.38': 'Fazer as malas para uma viagem:',
    'question.39': 'Seguir instruções de várias partes:',
    'question.40': 'Alternar entre diferentes tarefas:',
    'question.41': 'Alguém diz "Quebre uma perna!" antes de sua apresentação.',
    'question.42': 'Ler "nas entrelinhas" em e-mails:',
    'question.43': 'Alguém diz "Isso é ótimo" em um tom monótono após más notícias.',
    'question.44': 'Entender metáforas na conversa:',
    'question.45': 'Alguém diz que está "nas nuvens".',
    'question.46': 'Um amigo cancela planos no último minuto.',
    'question.47': 'Alguém discorda da sua opinião.',
    'question.48': 'Prever como os outros vão reagir:',
    'question.49': 'Alguém não compartilha seu entusiasmo por um tópico.',
    'question.50': 'Entender por que alguém pode mentir para poupar sentimentos:',
    'question.51': 'Em uma festa, alguém que você não conhece bem começa a contar sobre seus problemas.',
    'question.52': 'Seu colega de trabalho parece chateado, mas não disse nada diretamente.',
    'question.53': 'Em um grupo, alguém faz uma piada sobre experiências compartilhadas das quais você não participou.',
    'question.54': 'Um amigo insinua que gostaria de ser convidado para seu evento.',
    'question.55': 'A linguagem corporal de alguém sugere que eles estão desconfortáveis com um tópico.',
    'question.56': 'Seu tempo de hobby de interesse especial é interrompido por um visitante inesperado.',
    'question.57': 'Você não consegue encontrar sua marca usual na loja, apenas alternativas.',
    'question.58': 'Seu fim de semana planejado de foco no seu interesse é interrompido por uma obrigação familiar.',
    'question.59': 'Uma loja se reorganiza, movendo seus itens de interesse especial para uma seção diferente.',
    'question.60': 'Sua rotina usual para desfrutar de seu interesse é impossível devido às circunstâncias.',
    'question.61': 'Em um espaço barulhento e lotado, você se sente sobrecarregado.',
    'question.62': 'As luzes fluorescentes em seu espaço de trabalho estão te incomodando.',
    'question.63': 'Textura de roupa desconfortável durante todo o dia.',
    'question.64': 'Múltiplos sons sobrepostos em seu ambiente.',
    'question.65': 'Cheiros fortes causam desconforto em um ambiente social.',
    'question.66': 'Pedido para explicar um projeto complexo que você está lutando para organizar.',
    'question.67': 'Precisa comunicar múltiplos atrasos de tarefas para sua equipe.',
    'question.68': 'Seguir uma conversa enquanto gerencia outros pensamentos.',
    'question.69': 'Planejar e explicar uma atividade em grupo.',
    'question.70': 'Responder a perguntas inesperadas em uma reunião.',
    'question.71': 'Seu amigo diz "Estou com tanta fome que poderia comer um cavalo" enquanto parece cansado.',
    'question.72': 'Em uma discussão em grupo, alguém faz um comentário sarcástico sobre o tempo.',
    'question.73': 'Um colega diz "Claro, empilhe mais trabalho em mim" com um sorriso forçado.',
    'question.74': 'Alguém conta uma mentira branca para evitar magoar os sentimentos de outro na sua frente.',
    'question.75': 'Um amigo exagera uma história para entretenimento em uma festa.',
    'question.76': 'Um museu sobre seu interesse especial tem luzes brilhantes e multidões.',
    'question.77': 'Seus itens relacionados ao interesse têm texturas que te incomodam.',
    'question.78': 'Uma convenção para seu interesse está em um local desafiador sensorialmente.',
    'question.79': 'Conteúdo online sobre seu interesse tem sons de reprodução automática.',
    'question.80': 'Seu interesse requer visitar lojas movimentadas e barulhentas.'
  },
  en: {
    // Home page
    'home.title': 'Autism Spectrum Characteristics Assessment',
    'home.subtitle': 'A self-awareness tool based on common autism spectrum characteristics',
    'home.description': 'This questionnaire was developed to help identify characteristics that may be related to the autism spectrum. It is important to remember that this test is for educational and self-awareness purposes only.',
    'home.startButton': 'Start Assessment',
    'home.disclaimer': 'Important: This test is for entertainment and self-awareness purposes only. It does not replace a professional evaluation.',
    'home.howItWorks': 'How It Works',
    'home.about': 'About the Test',
    
    // Assessment page
    'assessment.title': 'Autism Spectrum Characteristics Assessment',
    'assessment.subtitle': 'Answer the questions according to how much you identify with each statement. Remember: this test is for self-awareness and entertainment only.',
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
    'results.disclaimer': 'This test is for entertainment and self-awareness purposes only. It does not replace a professional evaluation. For proper diagnosis, seek a specialist in autism.',
    
    // Response options
    'response.stronglyIdentify': 'Strongly identify',
    'response.identify': 'Identify',
    'response.slightlyIdentify': 'Slightly identify',
    'response.dontIdentify': 'Don\'t identify',
    
    // Language selector
    'language.selector': 'Language',
    'language.portuguese': 'Português',
    'language.english': 'English',
    
    // Questions in English
    'question.1': 'At a work meeting, your colleague makes a joke that everyone laughs at, but you don\'t understand why it\'s funny.',
    'question.2': 'Someone says \'Can you give me a hand?\' while carrying heavy boxes.',
    'question.3': 'A coworker mentions they had a \'rough morning\' with a slight smile.',
    'question.4': 'During small talk, someone asks \'How was your weekend?\'',
    'question.5': 'Your friend says \'I\'m dying of embarrassment\' after a mistake.',
    'question.6': 'You\'re feeling stressed after a long day at work/school.',
    'question.7': 'While concentrating on a task, you notice yourself tapping your fingers rhythmically.',
    'question.8': 'You need to organize your workspace.',
    'question.9': 'When walking through a tiled floor, you notice the pattern.',
    'question.10': 'You\'re waiting in a long line.',
    'question.11': 'You enter a busy restaurant with bright lights, loud music, and strong food smells.',
    'question.12': 'You need to buy new clothes, but the store only has items made from a fabric that feels rough.',
    'question.13': 'Someone wearing strong perfume sits next to you on public transport.',
    'question.14': 'The fire alarm goes off unexpectedly during a drill.',
    'question.15': 'You\'re offered food with multiple mixed textures.',
    'question.16': 'A friend excitedly tells you about their vacation plans.',
    'question.17': 'During a conversation, you notice the other person looking at their watch.',
    'question.18': 'Someone shares that they\'re feeling sad about their pet being sick.',
    'question.19': 'In a group conversation, others are discussing weekend plans.',
    'question.20': 'A colleague mentions they\'re struggling with a project.',
    'question.21': 'Your usual route to work is blocked due to construction.',
    'question.22': 'Plans for a weekend trip are suddenly cancelled.',
    'question.23': 'Your favorite coffee shop runs out of your usual order.',
    'question.24': 'A meeting is rescheduled at the last minute.',
    'question.25': 'Your usual seat at work/school is taken by someone else.',
    'question.26': 'You have free time on the weekend.',
    'question.27': 'Someone asks about your interests.',
    'question.28': 'You\'re choosing a book to read.',
    'question.29': 'Planning a vacation destination.',
    'question.30': 'Decorating your living space.',
    'question.31': 'During conversations, making eye contact feels:',
    'question.32': 'Someone waves at you from across the room.',
    'question.33': 'Reading facial expressions in others is:',
    'question.34': 'Using gestures while speaking:',
    'question.35': 'Someone\'s tone sounds different than their words.',
    'question.36': 'Starting a multi-step project:',
    'question.37': 'Managing multiple deadlines:',
    'question.38': 'Packing for a trip:',
    'question.39': 'Following multi-part instructions:',
    'question.40': 'Switching between different tasks:',
    'question.41': 'Someone says \'Break a leg!\' before your presentation.',
    'question.42': 'Reading \'between the lines\' in emails:',
    'question.43': 'Someone says \'That\'s just great\' in a flat tone after bad news.',
    'question.44': 'Understanding metaphors in conversation:',
    'question.45': 'Someone says they\'re \'on cloud nine.\'',
    'question.46': 'A friend cancels plans at the last minute.',
    'question.47': 'Someone disagrees with your opinion.',
    'question.48': 'Predicting how others will react:',
    'question.49': 'Someone doesn\'t share your enthusiasm for a topic.',
    'question.50': 'Understanding why someone might lie to spare feelings:',
    'question.51': 'At a party, someone you don\'t know well starts telling you about their problems.',
    'question.52': 'Your coworker seems upset but hasn\'t said anything directly.',
    'question.53': 'In a group, someone makes a joke about shared experiences you weren\'t part of.',
    'question.54': 'A friend hints they\'d like to be invited to your event.',
    'question.55': 'Someone\'s body language suggests they\'re uncomfortable with a topic.',
    'question.56': 'Your special interest hobby time is interrupted by an unexpected visitor.',
    'question.57': 'You can\'t find your usual brand at the store, only alternatives.',
    'question.58': 'Your planned weekend of focusing on your interest is disrupted by a family obligation.',
    'question.59': 'A store reorganizes, moving your special interest items to a different section.',
    'question.60': 'Your usual routine for enjoying your interest is impossible due to circumstances.',
    'question.61': 'In a noisy, crowded space, you feel overwhelmed.',
    'question.62': 'Fluorescent lights in your workspace are bothering you.',
    'question.63': 'Uncomfortable clothing texture throughout the day.',
    'question.64': 'Multiple overlapping sounds in your environment.',
    'question.65': 'Strong smells trigger discomfort in a social setting.',
    'question.66': 'Asked to explain a complex project you\'re struggling to organize.',
    'question.67': 'Need to communicate multiple task delays to your team.',
    'question.68': 'Following a conversation while managing other thoughts.',
    'question.69': 'Planning and explaining a group activity.',
    'question.70': 'Responding to unexpected questions in a meeting.',
    'question.71': 'Your friend says \'I\'m so hungry I could eat a horse\' while looking tired.',
    'question.72': 'In a group discussion, someone makes a sarcastic comment about the weather.',
    'question.73': 'A colleague says \'Sure, pile more work on me\' with a strained smile.',
    'question.74': 'Someone tells a white lie to avoid hurting another\'s feelings in front of you.',
    'question.75': 'A friend exaggerates a story for entertainment at a party.',
    'question.76': 'A museum about your special interest has bright lights and crowds.',
    'question.77': 'Your interest-related items have textures that bother you.',
    'question.78': 'A convention for your interest is in a sensory-challenging venue.',
    'question.79': 'Online content about your interest has autoplay sounds.',
    'question.80': 'Your interest requires visiting busy, noisy stores.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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