export interface DaySpaItem {
  id: string
  title: string
  tagline: string
  description: string
  duration: string
  price?: string
  image: string
  highlights: string[]
  nuvemshopUrl: string
  whatsappMessage: string
  options?: string[]
}

export interface ServiceCategory {
  id: string
  title: string
  subtitle: string
  iconName: string
  description: string
  items: {
    name: string
    description: string
    duration: string
    indication: string
    priceEstimate?: string
  }[]
}

export interface ReviewItem {
  id: string
  author: string
  rating: number
  date: string
  comment: string
  service: string
  image?: string
}

export interface FAQItem {
  question: string
  answer: string
  category?: string
}

export const QUICK_CATEGORIES = [
  { id: 'massagens', name: 'Massagens', icon: 'Sparkles', anchor: '#experiencias', count: '7 Modalidades' },
  { id: 'dayspa', name: 'Day Spa', icon: 'Crown', anchor: '#dayspa', count: '6 Rituais Exclusivos' },
  { id: 'fisioterapia', name: 'Fisioterapia', icon: 'Stethoscope', anchor: '#fisioterapia', count: 'Reabilitação Clínica' },
  { id: 'orientais', name: 'Terapias Orientais', icon: 'Compass', anchor: '#orientais', count: 'Acupuntura & Shiatsu' },
]

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'massagens',
    title: 'Massagens',
    subtitle: 'Massagem em Icaraí e Niterói: alívio muscular, relaxamento profundo e restauração da vitalidade',
    iconName: 'Sparkles',
    description: 'Do toque suave para aliviar o estresse à descompressão profunda para atletas e dores crônicas com foco em massagem em Icaraí.',
    items: [
      {
        name: 'Massagem Relaxante',
        description: 'Referência em massagem relaxante em Niterói: movimentos fluidos e contínuos com óleos essenciais aquecidos para acalmar a mente e liberar tensões do dia a dia.',
        duration: '60 min / 90 min',
        indication: 'Estresse, insônia e cansaço físico generalizado.'
      },
      {
        name: 'Massagem Terapêutica',
        description: 'Técnica clínica focada na desativação de pontos-gatilho (trigger points) e alívio de contraturas musculares severas.',
        duration: '60 min',
        indication: 'Dores lombares, cervicalgias, torcicolos e tensão nos ombros.'
      },
      {
        name: 'Massagem Desportiva',
        description: 'Manobras profundas e vigorosas para pré ou pós-treino, melhorando a flexibilidade e acelerando a recuperação tecidual.',
        duration: '60 min',
        indication: 'Atletas e praticantes de atividades físicas com fadiga muscular.'
      },
      {
        name: 'Massagem Modeladora',
        description: 'Movimentos rítmicos, rápidos e precisos que ativam a circulação e auxiliam na redução de medidas e celulite.',
        duration: '50 min',
        indication: 'Contorno corporal, retenção hídrica localizada.'
      },
      {
        name: 'Massagem Ayurvédica',
        description: 'Terapia indiana milenar realizada com óleos vegetais medicados e manobras de tração para equilibrar os doshas.',
        duration: '75 min',
        indication: 'Equilíbrio psicossomático e desintoxicação energética.'
      },
      {
        name: 'Massagem com Pedras Quentes',
        description: 'Termoterapia com pedras vulcânicas de basalto que difundem calor nos centros energéticos e musculatura profunda.',
        duration: '75 min / 90 min',
        indication: 'Dores crônicas, ansiedade e sensação de frio interior.'
      },
      {
        name: 'Quick Massage',
        description: 'Atendimento ergonômico express em cadeira especializada, com foco em pescoço, ombros, costas e braços.',
        duration: '20 min / 30 min',
        indication: 'Pausa rápida para quem tem rotina acelerada em Icaraí.'
      }
    ]
  },
  {
    id: 'drenagem',
    title: 'Drenagem & Estética Corporal',
    subtitle: 'Drenagem linfática em Icaraí e Niterói: protocolos de desinchaço e pós-operatório com precisão médica',
    iconName: 'Droplets',
    description: 'Técnicas manuais rigorosas de drenagem linfática em Niterói para eliminar toxinas, reduzir edemas e restaurar a harmonia corporal.',
    items: [
      {
        name: 'Drenagem Linfática Corporal (Método Leduc & Vodder)',
        description: 'Drenagem linfática em Icaraí com estímulo suave dos gânglios linfáticos para drenar líquidos retidos e melhorar o sistema imunológico.',
        duration: '60 min',
        indication: 'Retenção hídrica, TPM, má circulação e cansaço nas pernas.'
      },
      {
        name: 'Drenagem Linfática Facial',
        description: 'Suaviza olheiras, bolsas nos olhos e tonifica a cútis com massagem facial descongestionante.',
        duration: '40 min',
        indication: 'Edemas faciais, rejuvenescimento e relaxamento da face.'
      },
      {
        name: 'Pós-Operatório Cirúrgico Especializado',
        description: 'Cuidado fisioterapêutico pós cirurgia plástica (lipoaspiração, abdominoplastia, mamoplastia) para evitar seroma e fibrose.',
        duration: '60 min',
        indication: 'Pacientes em recuperação pós-cirúrgica estética ou reparadora.'
      },
      {
        name: 'Protocolo Redutor Detox',
        description: 'Associação de esfoliação com sais marinhos, argiloterapia e massagem drenante modeladora.',
        duration: '80 min',
        indication: 'Desintoxicação cutânea e redução de inchaço visível.'
      }
    ]
  },
  {
    id: 'fisioterapia',
    title: 'Fisioterapia & Reabilitação',
    subtitle: 'Fisioterapia em Icaraí sob direção clínica de Ricardo Pimentel (8+ anos de tradição)',
    iconName: 'Stethoscope',
    description: 'Clínica de fisioterapia em Icaraí com diagnóstico cinesiológico funcional minucioso para restaurar a amplitude de movimento e eliminar a dor.',
    items: [
      {
        name: 'Fisioterapia Traumato-Ortopédica',
        description: 'Tratamento de tendinites, bursites, hérnias de disco, entorses e disfunções articulares com exercícios terapêuticos e terapia manual.',
        duration: '50 min',
        indication: 'Dores crônicas na coluna, joelhos, ombros e quadril.'
      },
      {
        name: 'Reabilitação Pós-Cirúrgica Ortopédica',
        description: 'Restauração progressiva do controle motor e fortalecimento muscular pós artroscopias e reconstruções ligamentares.',
        duration: '50 min',
        indication: 'Pós-operatório de joelho, ombro e tornozelo.'
      },
      {
        name: 'Fisioterapia Funcional & Postural',
        description: 'Alinhamento biomecânico e reeducação muscular para prevenção de lesões posturais e desvios.',
        duration: '50 min',
        indication: 'Má postura decorrente de trabalho home office e esforço repetitivo.'
      },
      {
        name: 'Fisioterapia Laboral & Ergonomia',
        description: 'Avaliação personalizada e condutas corretivas para prevenir DORT/LER em profissionais.',
        duration: 'Sob consulta',
        indication: 'Empresas e executivos de Niterói e região.'
      }
    ]
  },
  {
    id: 'orientais',
    title: 'Terapias Orientais & Holísticas',
    subtitle: 'Acupuntura em Niterói e terapias integrativas: sabedoria ancestral e equilíbrio bioenergético',
    iconName: 'Compass',
    description: 'Atendimento de acupuntura em Niterói para desbloqueio dos meridianos energéticos corporais promovendo homeostase e serenidade mental.',
    items: [
      {
        name: 'Acupuntura Tradicional Chinesa',
        description: 'Sessões de acupuntura em Niterói com aplicação de agulhas filiformes descartáveis em pontos específicos dos meridianos para regular energia vital (Qi).',
        duration: '50 min',
        indication: 'Ansiedade, enxaqueca, gastrite nervosa, fibromialgia e dores musculares.'
      },
      {
        name: 'Auriculoterapia Francesa e Chinesa',
        description: 'Estímulo reflexo em pontos do pavilhão auricular com microesferas de ouro, prata ou sementes de mostarda.',
        duration: '30 min',
        indication: 'Controle de compulsão, estresse, insônia e dores agudas.'
      },
      {
        name: 'Shiatsu Tradicional',
        description: 'Pressão ritmada dos polegares e palmas das mãos ao longo dos canais de energia para liberação miofascial.',
        duration: '60 min',
        indication: 'Rigidez muscular, fadiga mental e bloqueios energéticos.'
      },
      {
        name: 'Reflexologia Podal',
        description: 'Pressões terapêuticas nas zonas reflexas dos pés correspondentes a órgãos e sistemas do corpo humano.',
        duration: '45 min',
        indication: 'Alívio imediato da sobrecarga nos pés e relaxamento sistêmico.'
      },
      {
        name: 'Ventosaterapia Clínica',
        description: 'Aplicação de campânulas a vácuo para aumento da oxigenação tecidual e desmanche de nódulos rígidos.',
        duration: '40 min',
        indication: 'Tensão dorsal profunda e recuperação de esportistas.'
      }
    ]
  }
]

export const DAY_SPA_COLLECTION: DaySpaItem[] = [
  {
    id: 'meu-momento',
    title: 'Day Spa Meu Momento',
    tagline: 'Pausa. Cuidado. Você. Um tempo só seu para renovar corpo e mente.',
    description: 'Desenvolvido para quem busca liberdade de escolha e um momento de introspecção. Permita-se escolher o ritual que melhor atende à sua necessidade do dia.',
    duration: '2h00 de puro bem-estar',
    price: 'A partir de R$ 280,00',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    nuvemshopUrl: 'https://seulink-nuvemshop.com.br/dayspa-meu-momento',
    whatsappMessage: 'Olá! Gostaria de saber mais e agendar o Day Spa Meu Momento na Fisiomassagem Studio Icaraí.',
    highlights: [
      'Welcome Drink com Chá Gourmet & Frutas Secas',
      'Escalda-pés aromático com sais de lavanda e óleos florais',
      'Esfoliação e hidratação profunda das mãos e pés',
      'Massagem de 60min à sua escolha entre as 7 opções exclusivas',
      'Aromaterapia personalizada com óleos essenciais puros'
    ],
    options: [
      'Opção 1: Massagem Relaxante + Reflexologia Podal',
      'Opção 2: Drenagem Linfática + Lifting Facial',
      'Opção 3: Massagem Terapêutica Miofascial + Ventosaterapia',
      'Opção 4: Massagem Ayurvédica + Harmonização com Óleos Florais',
      'Opção 5: Pedras Quentes + Escalda-pés Revitalizante',
      'Opção 6: Shiatsu Oriental + Auriculoterapia',
      'Opção 7: Quick Massage revigorante + Protocolo Detox Corporal'
    ]
  },
  {
    id: 'renascer',
    title: 'Day Spa Renascer',
    tagline: 'Renove suas energias e floresça novamente. Mente mais leve, corpo em equilíbrio.',
    description: 'Um convite ao renascimento sensorial. Dissolve o cansaço acumulado nas últimas semanas com uma experiência regeneradora completa.',
    duration: '2h30 de renovação',
    price: 'R$ 360,00',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    nuvemshopUrl: 'https://seulink-nuvemshop.com.br/dayspa-renascer',
    whatsappMessage: 'Olá! Quero agendar a experiência Day Spa Renascer na Fisiomassagem Studio.',
    highlights: [
      'Ritual de Boas-Vindas com infusão fitoterápica e toalhas aquecidas',
      'Escalda-pés terapêutico com sais de Epsom e óleo de bergamota',
      'Esfoliação corporal detox com cristais de quartzo e mel',
      'Massagem relaxante ou descompressiva de corpo inteiro (70 min)',
      'Máscara facial calmante de argila branca e chá verde'
    ]
  },
  {
    id: 'aniversario',
    title: 'Day Spa Aniversário',
    tagline: 'Celebre seu novo ciclo com mimos exclusivos, cuidado profundo e acolhimento.',
    description: 'Um presente inesquecível para comemorar mais um ano de vida com carinho, saúde e celebração num ambiente privativo e acolhedor.',
    duration: '2h30 de celebração e carinho',
    price: 'R$ 390,00',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
    nuvemshopUrl: 'https://seulink-nuvemshop.com.br/dayspa-aniversario',
    whatsappMessage: 'Olá! Gostaria de agendar / presentear com o Day Spa Aniversário na Fisiomassagem Studio Icaraí.',
    highlights: [
      'Decoração comemorativa suave com velas e pétalas na sala privativa',
      'Taça de Espumante ou Suco Detox Celebration com trufas artesanais',
      'Escalda-pés com sais espumantes perfumados',
      'Massagem Relaxante Especial de 60min com óleo de amêndoas e baunilha',
      'Revitalização facial iluminadora com ácido hialurônico vegetal',
      'Cartão comemorativo e mimo especial de aniversário do Studio'
    ]
  },
  {
    id: 'casal',
    title: 'Day Spa Casal',
    tagline: 'Porque os melhores momentos ainda são mais especiais a dois.',
    description: 'Uma atmosfera envolvente e intimista para compartilhar com quem você ama. Sala privativa exclusiva para o casal, atendidos simultaneamente por dois terapeutas.',
    duration: '2h30 de conexão a dois',
    price: 'R$ 680,00 (Para o casal)',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80',
    nuvemshopUrl: 'https://seulink-nuvemshop.com.br/dayspa-casal',
    whatsappMessage: 'Olá! Gostaria de agendar o Day Spa Casal para uma data especial na Fisiomassagem Studio Icaraí.',
    highlights: [
      'Sala dupla ambientada à luz de velas aromáticas e trilha sonora relaxante',
      'Escalda-pés duplo com óleo de rosas e sais minerais efervescentes',
      'Dois terapeutas dedicados ao atendimento simultâneo e sincronizado',
      'Massagem relaxante ou com pedras quentes de 75 min para cada um',
      'Brinde com duas taças de espumante e seleção de chocolates finos'
    ]
  },
  {
    id: 'premium',
    title: 'Day Spa Premium',
    tagline: 'Ritual estendido para desacelerar, cuidar e desintoxicar corpo e mente.',
    description: 'A união perfeita de terapias clínicas e sensoriais. Indicado para quem busca um reset completo na mente e no corpo após períodos de estresse elevado.',
    duration: '3h00 de imersão revigorante',
    price: 'R$ 520,00',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    nuvemshopUrl: 'https://seulink-nuvemshop.com.br/dayspa-premium',
    whatsappMessage: 'Olá! Gostaria de agendar o Day Spa Premium na Fisiomassagem Studio Icaraí.',
    highlights: [
      'Anamnese física inicial com o fisioterapeuta',
      'Escalda-pés terapêutico com lavanda francesa e arnica',
      'Massagem de corpo inteiro combinando técnicas descompressivas e pedras vulcânicas',
      'Drenagem linfática ou reflexologia podal intensiva',
      'Higienização e nutrição facial com máscara de ouro e colágeno',
      'Lanche leve gourmet com chás nobres e castanhas'
    ]
  },
  {
    id: 'luxo',
    title: 'Day Spa Luxo',
    tagline: 'O ápice da experiência sensorial com óleos essenciais nobres, pedras quentes e imersão completa.',
    description: 'A mais refinada experiência de bem-estar de Niterói. Cuidados de excelência que reequilibram a energia vital, cuidam da derme e transportam você a um estado de paz absoluta.',
    duration: '3h30 de pura exclusividade',
    price: 'R$ 750,00',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    nuvemshopUrl: 'https://seulink-nuvemshop.com.br/dayspa-luxo',
    whatsappMessage: 'Olá! Quero vivenciar o Day Spa Luxo na Fisiomassagem Studio Icaraí.',
    highlights: [
      'Check-in VIP com atendimento personalizado privativo',
      'Escalda-pés nobre com flores naturais e sais dos Himalaias',
      'Esfoliação corporal completa com extrato de semente de uva e manteiga de karité',
      'Massagem Signature com Pedras Quentes e óleos nobres aquecidos (90 min)',
      'Acupuntura antiestresse ou Shiatsu bioenergético',
      'Spa facial completo de revitalização e hidratação profunda',
      'Degustação exclusiva de espumante e frutas frescas selecionadas'
    ]
  }
]

export const INTEGRATIVE_PROTOCOLS = [
  {
    id: 'estresse-ansiedade',
    title: 'Estresse & Ansiedade',
    icon: 'Brain',
    tag: 'Saúde Mental & Foco',
    description: 'Técnicas integrativas com acupuntura auricular e massagem craniofacial para desacelerar ondas cerebrais, diminuir o cortisol e resgatar o centramento.',
    benefits: ['Alívio de tensão nos ombros e mandíbula (bruxismo)', 'Redução palpável do ritmo cardíaco', 'Sensação imediata de paz mental']
  },
  {
    id: 'sono-qualidade',
    title: 'Relaxamento & Sono de Qualidade',
    icon: 'Moon',
    tag: 'Descanso Reparador',
    description: 'Protocolos com pedras aquecidas e óleos de camomila e lavanda francesa que preparam o sistema nervoso parassimpático para noites de sono profundo.',
    benefits: ['Estímulo da produção natural de melatonina', 'Relaxamento da musculatura paravertebral', 'Eliminação da insônia crônica']
  },
  {
    id: 'energia-equilibrio',
    title: 'Energia & Equilíbrio Corporal & Emocional',
    icon: 'Activity',
    tag: 'Harmonização Bioenergética',
    description: 'Desbloqueio de meridianos com ventosaterapia e Shiatsu, eliminando a estagnação energética (Qi) e recuperando o vigor para suas tarefas diárias.',
    benefits: ['Restauração da vitalidade física', 'Dissipação da sensação de peso nas pernas e costas', 'Mais disposição para a rotina']
  },
  {
    id: 'mais-leve-saude',
    title: 'Mais Leve, Mais Saúde, Mais Bela',
    icon: 'Sparkles',
    tag: 'Desinchaço & Autoestima',
    description: 'Combinação precisa de drenagem linfática médica e massagem modeladora para desinflamar tecidos, estimular o metabolismo e definir a silhueta com saúde.',
    benefits: ['Eliminação de toxinas e retenção de líquidos', 'Melhora visível da textura da pele', 'Contorno corporal delineado com conforto']
  }
]

export const TARGET_AUDIENCES = [
  {
    id: 'feminino',
    title: 'Cuidado Feminino',
    badge: 'Autocuidado & Beleza Integral',
    summary: 'Rituais pensados para os diferentes ciclos e demandas femininas: TPM, gestação, pós-parto, alívio de pernas cansadas e cuidados com a pele.',
    features: [
      'Drenagem linfática para alívio imediato do inchaço e pernas pesadas',
      'Massagens com óleos nutritivos que preservam o tônus cutâneo',
      'Protocolos faciais e corporais personalizados para rejuvenescimento',
      'Atendimento delicado e respeitoso para cada fase da mulher'
    ],
    recommended: 'Day Spa Meu Momento ou Drenagem Linfática Facial + Corporal'
  },
  {
    id: 'masculino',
    title: 'Saúde & Foco Masculino',
    badge: 'Performance, Descompressão & Foco',
    summary: 'Ambiente sóbrio, respeitoso e totalmente focado no alívio de dores posturais, sobrecarga de treino, contraturas nas costas e descompressão executiva.',
    features: [
      'Massagem desportiva para alívio de nós musculares após musculação ou corrida',
      'Liberação miofascial para dores lombares de quem passa horas sentado',
      'Zero burocracia ou constrangimento: atendimento clínico profissional e de alto nível',
      'Acupuntura e Shiatsu para enxaquecas e descompressão do estresse dos negócios'
    ],
    recommended: 'Massagem Terapêutica Desportiva ou Day Spa Renascer'
  },
  {
    id: 'casal',
    title: 'Experiência a Dois',
    badge: 'Conexão, Intimidade & Romance',
    summary: 'Uma celebração do amor e cumplicidade. Vocês são recebidos em sala privativa com iluminação à luz de velas e terapeutas dedicados.',
    features: [
      'Atendimento sincronizado por dois terapeutas certificados',
      'Brinde com espumante e trufas para celebrar datas e aniversários de namoro/casamento',
      'Escalda-pés e massagens simultâneas lado a lado',
      'Memórias afetivas e conexão genuína longe das telas do celular'
    ],
    recommended: 'Day Spa Casal Especial com Espumante'
  }
]

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: '1',
    author: 'Lumena M.',
    rating: 5,
    date: 'Há 2 semanas',
    comment: 'Experiência impecável! O Ricardo é um profissional fantástico, com um conhecimento técnico de fisioterapia absurdo aliado a um toque de massagem acolhedor. O studio em Icaraí é limpo, cheiroso e super silencioso. Saí flutuando!',
    service: 'Day Spa Renascer & Fisioterapia'
  },
  {
    id: '2',
    author: 'Gustavo Rodrigues',
    rating: 5,
    date: 'Há 1 mês',
    comment: 'Sou atleta de corrida e estava com uma dor lombar terrível travando meus treinos. Fiz a massagem desportiva e ventosaterapia com o Ricardo Pimentel e o resultado foi imediato. Recomendo de olhos fechados!',
    service: 'Massagem Desportiva & Ventosa'
  },
  {
    id: '3',
    author: 'Ana Beatriz Leal',
    rating: 5,
    date: 'Há 3 semanas',
    comment: 'Ganhei o Vale Presente de aniversário do meu marido e foi o melhor presente de todos. O Day Spa Meu Momento foi perfeito, o escalda-pés com ervas e a massagem nas pedras quentes me renovaram por completo.',
    service: 'Day Spa Meu Momento'
  },
  {
    id: '4',
    author: 'Breno Alencar',
    rating: 5,
    date: 'Há 1 mês',
    comment: 'Atendimento nota 1000. Ambiente de extremo bom gosto no coração de Icaraí. Para quem trabalha sob pressão o dia todo, uma sessão semanal aqui é investimento em saúde mental e física.',
    service: 'Massagem Terapêutica Miofascial'
  },
  {
    id: '5',
    author: 'Roberta de Carvalho',
    rating: 5,
    date: 'Há 2 meses',
    comment: 'Fiz a drenagem linfática pós-cirúrgica e a recuperação foi infinitamente mais rápida e sem dor. O Ricardo passa muita segurança e carinho com o paciente. Já indiquei para todas as minhas amigas de Niterói.',
    service: 'Drenagem Linfática Pós-Operatória'
  },
  {
    id: '6',
    author: 'Eduarda Vasconcellos',
    rating: 5,
    date: 'Há 1 mês',
    comment: 'Fizemos o Day Spa Casal para comemorar nossas bodas de casamento e foi inesquecível! A sala decorada com velas, os terapeutas maravilhosos e o espumante no final fecharam o dia com chave de ouro.',
    service: 'Day Spa Casal'
  },
  {
    id: '7',
    author: 'Priscila Dias',
    rating: 5,
    date: 'Há 2 semanas',
    comment: 'Melhor lugar de Niterói para relaxar. Você entra agitada com o trânsito da cidade e sai com a mente leve, sem dores e pronta pra outra. O atendimento no WhatsApp também é impecável e atencioso.',
    service: 'Massagem com Pedras Quentes'
  }
]

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Preciso agendar horário com antecedência?',
    answer: 'Sim! Para garantir um ambiente com total silêncio, privacidade e acolhimento exclusivo, todos os atendimentos na Fisiomassagem Studio são realizados com agendamento prévio. Você pode agendar de forma rápida e prática diretamente pelo nosso WhatsApp ou escolhendo sua experiência aqui pelo site.'
  },
  {
    question: 'Quanto tempo dura cada sessão de massagem ou Day Spa?',
    answer: 'A duração varia de acordo com o ritual escolhido. Sessões avulsas de massagens, fisioterapia ou drenagem duram em média de 50 a 90 minutos. Já as experiências completas de Day Spa variam de 2 horas a 3 horas e meia de imersão sensorial relaxante.'
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos Pix (com confirmação instantânea), dinheiro, cartões de débito e crédito de todas as bandeiras. Compras de Vouchers de Day Spa e Vale Presente realizadas pela nossa loja online Nuvemshop contam ainda com opção de parcelamento seguro em até 12x.'
  },
  {
    question: 'Vocês oferecem pacotes ou planos com desconto?',
    answer: 'Sim! Temos pacotes personalizados para tratamentos contínuos de Fisioterapia, Drenagem Linfática Corporal/Facial, Pós-Operatório e Massagens Terapêuticas semanais ou quinzenais, com condições especiais e acompanhamento de evolução física.'
  },
  {
    question: 'Posso presentear alguém com os serviços através de Vale Presente?',
    answer: 'Com certeza! Nosso Vale Presente é um dos mais elogiados de Niterói. Você pode presentear com qualquer modalidade de Day Spa ou Massagem avulsa. Emitimos o Voucher Digital instantâneo de alta resolução para envio por WhatsApp/E-mail ou um cartão físico premium em envelope lacrado para entrega pessoal.'
  },
  {
    question: 'Existe estacionamento ou facilidade de acesso no local?',
    answer: 'Nosso Studio está estrategicamente localizado em Icaraí, Niterói, em uma região nobre e de fácil acesso tanto a pé quanto por transporte. Há diversos estacionamentos rotativos particulares e vagas públicas conveniadas na mesma quadra e ruas adjacentes.'
  },
  {
    question: 'É necessário ter restrições ou há contraindicações para massagens?',
    answer: 'Antes de qualquer procedimento, é realizada uma breve anamnese clínica orientada pelo fisioterapeuta responsável. Casos como primeiro trimestre de gestação, infecções agudas com febre, trombose ativa ou cirurgias recentes sem liberação médica exigem protocolos adaptados específicos para total segurança.'
  },
  {
    question: 'Qual a diferença entre a massagem relaxante e a terapêutica?',
    answer: 'A Massagem Relaxante utiliza manobras rítmicas e suaves com óleos essenciais, com foco em desligar a mente, diminuir a ansiedade e suavizar o estresse do dia a dia. Já a Massagem Terapêutica foca no tratamento clínico da dor física, atuando profundamente em contraturas, nós de tensão (trigger points) e desvios biomecânicos.'
  }
]
