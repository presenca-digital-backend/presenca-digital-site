export interface PromptData {
  id: number;
  title: string;
  category: string;
  prompt: string;
  description: string;
  image: string;
}

export const categories = [
  'Todos',
  'Masculino',
  'Feminino',
  'Ensaio Fotográfico',
  'Crianças Heróis',
  'Lanches',
  'Anúncios',
] as const;

export const prompts: PromptData[] = [
  // ===== MASCULINO (1-5) =====
  {
    id: 1,
    title: 'Retrato Noturno Elegante',
    category: 'Masculino',
    prompt: 'Crie um retrato profissional deste homem no estilo fotografia editorial lifestyle masculino noturno de alto padrão, com estética sofisticada, urbana e elegante, ideal para branding pessoal premium. Utilize câmera full-frame profissional (ex.: Sony A7R V, Canon EOS R5 ou Nikon Z8) com lente 50mm ou 85mm f/1.8, garantindo nitidez precisa no rosto, excelente separação do fundo e bokeh suave. Iluminação: iluminação mista de ambiente interno noturno com luz quente e acolhedora, combinada a uma luz principal suave e difusa direcionada ao rosto. Contraste equilibrado, sombras leves e atmosfera intimista, valorizando volumes faciais sem dramaticidade excessiva. Pose: o homem está em pé, levemente apoiado em uma estrutura de vidro ou porta, postura relaxada e confiante. Pernas cruzadas de forma elegante, uma mão no bolso da calça e a outra relaxada ao longo do corpo. Ombros alinhados, corpo levemente inclinado, transmitindo naturalidade, segurança e sofisticação. Olhar direcionado à câmera com expressão serena e firme. Cenário: ambiente interno sofisticado com integração entre área externa e interna, decoração contemporânea, móveis em madeira, iluminação quente e elementos naturais ao fundo. Fundo levemente desfocado, criando sensação de exclusividade, conforto e lifestyle premium. Aparência: camisa social de tecido nobre em tom escuro, mangas longas, usada sem gravata e com botões superiores abertos, reforçando elegância contemporânea. Calça de alfaiataria slim com caimento impecável. Sapatos sociais de couro com acabamento premium. Relógio elegante no pulso como acessório discreto. Composição vertical, proporção 4:5, retrato de branding pessoal de alto padrão, estética minimalista, moderna, elegante e atemporal. Aparência ultra realista, textura de pele suave, sem exageros ou artificialidade.',
    description: 'Retrato editorial noturno premium com iluminação quente para branding pessoal',
    image: 'https://cdn.abacus.ai/images/ac0f5d70-0dd4-4356-bdd6-c2d4e4b0eb63.png',
  },
  {
    id: 2,
    title: 'Casual Urbano Sofisticado',
    category: 'Masculino',
    prompt: 'Crie um retrato profissional deste homem no estilo fotografia editorial lifestyle masculino premium com estética urbana moderna, transmitindo sofisticação casual, confiança e posicionamento contemporâneo para branding pessoal. Utilize câmera full-frame profissional (ex.: Sony A7R V, Canon EOS R5 ou Nikon Z8) com lente 50mm ou 85mm f/1.8, garantindo nitidez precisa no rosto, perspectiva natural e fundo suavemente desfocado. Iluminação: luz natural externa suave e difusa, preferencialmente luz de fim de tarde, criando contraste equilibrado e sombras delicadas. Iluminação limpa e moderna, sem excesso de dramaticidade, valorizando volumes de forma natural. Pose: o homem está sentado de maneira relaxada sobre um banco ou estrutura urbana, tronco levemente inclinado para frente, cotovelos apoiados nas pernas e mãos entrelaçadas de forma casual. Postura confiante e descontraída, com expressão amigável e espontânea. Olhar direcionado lateralmente, fora do eixo da câmera, transmitindo leveza, autenticidade e lifestyle moderno. Cenário: ambiente urbano contemporâneo, com arquitetura moderna ao fundo, linhas retas, superfícies neutras e estética minimalista. Fundo organizado e suavemente desfocado, reforçando elegância, modernidade e sofisticação. Aparência: blazer de alfaiataria com corte moderno e estruturado, usado de forma casual sobre camiseta ou camisa básica de tecido nobre. Calça slim de alfaiataria. Tênis de design clean e premium. Óculos de sol com design minimalista, relógio elegante no pulso. Composição vertical, proporção 4:5, ultra realista, textura de pele suave.',
    description: 'Lifestyle urbano casual com estética moderna para branding pessoal',
    image: 'https://cdn.abacus.ai/images/a02fb7fc-561c-4e99-bd34-75920c547a37.png',
  },
  {
    id: 3,
    title: 'Executivo Contemplativo',
    category: 'Masculino',
    prompt: 'Retrato profissional ultra-realista de um executivo. Use EXCLUSIVAMENTE as fotos enviadas para definir o rosto exato, estrutura craniana, tom de pele, idade, densidade capilar, padrão de barba, proporções corporais e todos os detalhes anatômicos. NÃO altere a identidade. Enquadramento: composição vertical, retrato médio (parte superior das coxas até a cabeça). Sujeito sentado em uma poltrona moderna. Câmera posicionada ligeiramente abaixo do nível dos olhos, capturando uma presença sutil de autoridade. Visual de lente 85mm com compressão natural e profundidade de campo rasa. Orientação da cabeça: cabeça virada aproximadamente 45 graus para o lado. Ângulo dominante de perfil (vista três quartos). Olhos olhando para fora da câmera em direção a uma fonte de luz suave. Expressão contemplativa, calma, confiante. Lábios suavemente fechados. Músculos faciais relaxados. Postura: sentado ereto com coluna reta. Ombros relaxados mas estruturados. Torso levemente angulado na mesma direção da cabeça. Peito aberto. Linguagem corporal executiva confiante. Mãos: ambas as mãos visíveis no nível do tronco, levemente entrelaçadas. Vestuário: suéter gola alta bege claro ou taupe suave com textura matte. Calça de alfaiataria neutra em tom ligeiramente mais escuro. Relógio minimalista metálico. Iluminação: iluminação cinematográfica quente interior. Luz principal vindo do lado para o qual o sujeito olha, suave mas direcional. Fundo: ambiente refinado com painéis verticais de madeira e estantes escuras com livros. Paleta de cores: neutros quentes combinados com tons profundos.',
    description: 'Retrato executivo contemplativo com iluminação cinematográfica quente',
    image: 'https://cdn.abacus.ai/images/3bd36ba5-0ad2-42a2-94ad-7282fbd41b6b.png',
  },
  {
    id: 4,
    title: 'Terno Clássico Cinematográfico',
    category: 'Masculino',
    prompt: 'Um retrato dramático em preto e branco de um homem confiante vestindo um terno escuro sob medida, camisa social e gravata. Ele ajusta a jaqueta do terno com ambas as mãos, assumindo uma pose poderosa e elegante. Usa óculos redondos refletivos que capturam a silhueta sutil de um skyline urbano nas lentes. Cabelo curto e barba bem aparados, conferindo um visual sofisticado e moderno. O fundo é minimalista e escuro, enfatizando o sujeito com iluminação cinematográfica e contraste forte. Hiper-realista, alta resolução, elegante, estilo fotografia cinematográfica. O rosto visível deve corresponder exatamente à imagem de referência fornecida. Câmera profissional full-frame com lente 85mm f/1.4, ISO 100, foco preciso nos olhos. Pele com textura natural preservada, sem suavização artificial. Composição vertical 4:5, qualidade de pôster de cinema.',
    description: 'Retrato P&B cinematográfico em terno sob medida com óculos refletivos',
    image: 'https://cdn.abacus.ai/images/72361a74-9531-42ed-8829-7b0286f78e82.png',
  },
  {
    id: 5,
    title: 'Editorial Estúdio Intenso',
    category: 'Masculino',
    prompt: 'Fotografia de retrato profissional em estúdio ultra-realista. Use APENAS as fotos de identidade enviadas do usuário para definir rosto, estrutura corporal, tom de pele, idade, linha do cabelo, padrão de barba facial e todas as características físicas — não altere identidade, proporções ou anatomia de nenhuma forma. Expressão do sujeito: calma, confiante, séria mas acessível, boca neutra com sutileza de lábios fechados. Olhos: foco nítido, contato visual direto ligeiramente abaixo do eixo da câmera, olhar intenso mas composto. Posição da cabeça: leve inclinação para frente, queixo marginalmente abaixado para reforçar autoridade. Postura corporal: parte superior do corpo inclinada para frente, ombros relaxados mas alinhados. Mãos: ambas as mãos visíveis, suavemente entrelaçadas no nível do queixo, dedos relaxados. Enquadramento: retrato busto apertado (do meio do peito para cima). Câmera: equivalente a lente retrato 85mm, profundidade de campo rasa, forte separação do sujeito. Iluminação: iluminação de estúdio suave dramática. Luz principal: softbox grande posicionada frontal-esquerda a aproximadamente 45°. Rim light suave da traseira-direita. Fundo: gradiente preto matte profundo a cinza carvão, sem distrações. Vestuário: camisa minimalista de mangas longas abotoada, tom neutro claro, fit estruturado mas relaxado, mangas casualmente enroladas até o meio do antebraço. Paleta de cores: neutra, desaturada, tons cinematográficos. Textura de pele visível, detalhes de barba realistas. Pós-processamento mínimo, acabamento editorial profissional.',
    description: 'Retrato editorial em estúdio com iluminação dramática e expressão intensa',
    image: 'https://cdn.abacus.ai/images/44a13c6d-cb6b-442e-b33d-77816fc9b9b7.png',
  },

  // ===== FEMININO (6-10) =====
  {
    id: 6,
    title: 'Vestido Dourado Luxuoso',
    category: 'Feminino',
    prompt: 'Crie uma fotografia de ensaio editorial feminino de alta qualidade, estilo luxury fashion. Uma mulher elegante vestindo um vestido dourado metálico fluido, posando graciosamente em um interior luxuoso com detalhes em mármore e lustres de cristal. Iluminação ambiente quente criando um brilho sofisticado, estilo high-fashion editorial com maquiagem e cabelo profissionais. Luzes bokeh suaves cintilando ao fundo, atmosfera refinada e prestigiosa. Câmera profissional full-frame com lente 85mm f/1.4. Textura de pele ultra-realista, sem suavização excessiva. Composição vertical 4:5. O vestido deve ter caimento natural, textura realista de tecido metálico com reflexos de luz suaves. Pose elegante e natural, uma mão levemente tocando o vestido, outra relaxada ao lado do corpo. Expressão serena e confiante. Fundo desfocado com elementos de arquitetura clássica, criando profundidade e luxo. Paleta de cores: dourado, champagne, tons quentes com acentos de luz âmbar. Qualidade de campanha publicitária de luxo, fotorrealista.',
    description: 'Ensaio editorial feminino luxuoso em vestido dourado com interior premium',
    image: 'https://cdn.abacus.ai/images/63b8ac68-2c93-475b-9083-5e6e054dcf41.png',
  },
  {
    id: 7,
    title: 'Vermelho Dramático na Escadaria',
    category: 'Feminino',
    prompt: 'Fotografia editorial de moda de alto padrão de uma mulher deslumbrante em um vestido de gala vermelho longo e fluido, posando em uma escadaria de mármore grandiosa. O vestido cascateia pelos degraus criando linhas dramáticas e elegantes. Arquitetura luxuosa com detalhes ornamentais ao fundo. Iluminação cinematográfica dramática vindo de cima, criando sombras suaves e realçando a textura do tecido. Câmera full-frame profissional com lente 50mm f/1.4. Pose elegante e poderosa, uma mão no corrimão, corpo levemente virado em três quartos. Expressão confiante e sofisticada. Cabelo e maquiagem profissionais, estilo red carpet. Profundidade de campo rasa com foco nítido no rosto e corpo, fundo suavemente desfocado. Paleta de cores: vermelho rico, mármore branco, tons dourados quentes da iluminação. Textura de pele ultra-realista, detalhes do tecido visíveis. Composição vertical 4:5, qualidade de editorial de moda international.',
    description: 'Ensaio feminino dramático em vestido vermelho na escadaria de mármore',
    image: 'https://cdn.abacus.ai/images/8298de1a-0b0c-433a-b209-369a604aee56.png',
  },
  {
    id: 8,
    title: 'Sombras Artísticas na Janela',
    category: 'Feminino',
    prompt: 'Retrato artístico minimalista de uma mulher bonita com linhas de sombra dramáticas de persianas de janela caindo sobre o rosto e corpo. Iluminação atmosférica criando padrões geométricos naturais. Composição limpa e minimalista. Textura de pele ultra-realista. Estilo fotografia editorial de beleza. Alto contraste com tons desaturados tendendo ao preto e branco. Câmera profissional com lente 85mm f/1.8. Expressão serena e contemplativa, olhos semi-fechados ou olhando para baixo. Cabelo natural fluindo sobre os ombros. Maquiagem sutil e natural. O sujeito está posicionado próximo a uma janela com persianas, luz natural forte entrando criando as linhas de sombra. Fundo neutro e clean. Profundidade de campo rasa, foco preciso nos olhos e contornos faciais. A textura das sombras deve ser nítida e bem definida, criando ritmo visual. Composição vertical 4:5, qualidade de galeria de arte fotográfica.',
    description: 'Retrato artístico feminino com jogo de sombras geométricas e luz natural',
    image: 'https://cdn.abacus.ai/images/2d31cabe-bb2d-481e-b5cb-38abe6f56beb.png',
  },
  {
    id: 9,
    title: 'Lifestyle Café Elegante',
    category: 'Feminino',
    prompt: 'Fotografia lifestyle premium de uma mulher estilosa sentada em um café moderno e trendy com design minimalista em concreto e madeira. Luz dourada do golden hour entrando por grandes janelas industriais, criando iluminação natural cinematográfica. Uma xícara de café com latte art perfeita sobre a mesa de madeira, tons terrosos neutros, estética Instagram lifestyle casual-premium. Composição editorial com profundidade de campo, foco nítido no sujeito, ambiente aconchegante mas sofisticado. Câmera profissional full-frame com lente 50mm f/1.4. A mulher veste roupas elegantes em tons neutros — suéter de cashmere ou blazer leve. Cabelo bem arrumado, maquiagem natural e luminosa. Pose relaxada e natural, uma mão segurando a xícara ou próxima ao rosto. Expressão sorridente e genuína, transmitindo conforto e lifestyle aspiracional. Decoração do café com plantas, iluminação pendente de design, mobiliário moderno. Paleta de cores: tons quentes de madeira, bege, cream, dourado da luz. Ultra-realista, textura de pele natural. Composição vertical 4:5.',
    description: 'Lifestyle feminino em café premium com iluminação golden hour',
    image: 'https://cdn.abacus.ai/images/7348a504-aa62-4c6a-a97b-b21e587492f3.png',
  },
  {
    id: 10,
    title: 'Street Fashion Vibrante',
    category: 'Feminino',
    prompt: 'Fotografia de moda urbana streetwear editorial, uma mulher trendy vestindo outfit street fashion ousado com hoodie oversized e tênis statement, posando com confiança contra um muro vibrante de graffiti com arte urbana em azul elétrico, rosa quente e amarelo. Fotografia urbana vibrante com cores saturadas e ousadas, estilo editorial de moda street com foco nítido no sujeito e texturas detalhadas das roupas. Atmosfera jovem e energética, qualidade de editorial de revista streetwear. Câmera profissional com lente 35mm f/1.8 para capturar tanto o sujeito quanto o contexto urbano. Iluminação natural difusa com fill de cores do graffiti refletindo na pele e roupas. Pose dinâmica e confiante — uma mão no bolso, perna cruzada, expressão determinada e cool. Acessórios: corrente no pescoço, bracelete, óculos de sol posicionados no topo da cabeça. A textura do graffiti deve ser visível mas ligeiramente desfocada, criando separação do sujeito. Composição vertical 4:5, fotorrealista, qualidade de campanha streetwear.',
    description: 'Ensaio street fashion urbano vibrante contra grafite colorido',
    image: 'https://cdn.abacus.ai/images/bfb56caa-a05c-4b37-9115-e65bac8d2ae6.png',
  },

  // ===== ENSAIO FOTOGRÁFICO (11-15) =====
  {
    id: 11,
    title: 'Campo Dourado ao Entardecer',
    category: 'Ensaio Fotográfico',
    prompt: 'Fotografia editorial lifestyle atmosférica de uma pessoa caminhando por um campo de trigo dourado ao pôr do sol. Iluminação golden hour com backlight quente criando brilho atmosférico. Raios de sol filtrando entre as hastes de trigo. Paleta de cores quentes com tons dourados e âmbar dominantes. Profundidade de campo rasa com foco no sujeito e trigo ao redor suavemente desfocado. Composição cinematográfica. Câmera profissional full-frame com lente 85mm f/1.4, ISO 100. A pessoa veste roupas leves e fluidas em tons naturais (linho, algodão) que se movem com a brisa suave. Expressão contemplativa e pacífica, olhar direcionado ao horizonte. Cabelo levemente ao vento, iluminado por trás pelo sol. Partículas douradas flutuando no ar (poeira do trigo iluminada). Sensação de liberdade, paz interior e conexão com a natureza. O horizonte deve ser visível ao fundo com o sol baixo. Composição vertical 4:5, estilo editorial de revista de lifestyle, ultra-realista.',
    description: 'Ensaio no campo de trigo dourado com luz golden hour cinematográfica',
    image: 'https://cdn.abacus.ai/images/0432874a-fac8-4a5a-a6f7-241485629853.png',
  },
  {
    id: 12,
    title: 'Elegância na Escadaria Clássica',
    category: 'Ensaio Fotográfico',
    prompt: 'Fotografia editorial de moda de alto padrão de um modelo elegante em blazer escuro posando em uma escadaria de mármore grandiosa com arquitetura clássica. Pose sofisticada destacando o corte sob medida do blazer. Arquitetura elegante com corrimãos ornamentais e detalhes em pedra. Luz natural vindo de cima através de claraboia ou janelas altas, criando iluminação suave e difusa. Estética de ensaio fotográfico editorial profissional. Câmera full-frame com lente 50mm f/1.4. Texturas ultra-realistas do tecido do blazer, da pedra e da pele. O modelo está posicionado em um terço da escadaria, criando linhas diagonais dinâmicas na composição. Uma mão no bolso, outra tocando levemente o corrimão. Expressão confiante e elegante. Sapatos de couro refinados visíveis. Fundo suavemente desfocado mostrando a grandiosidade da arquitetura sem distrair. Paleta de cores: tons neutros de pedra, escuros do blazer, luz quente natural. Composição vertical 4:5, qualidade de editorial de moda.',
    description: 'Ensaio de moda editorial em escadaria clássica com luz natural',
    image: 'https://cdn.abacus.ai/images/7e2459a2-c2a5-428d-8a48-6d2bd496474c.png',
  },
  {
    id: 13,
    title: 'Close-Up Dramático Intenso',
    category: 'Ensaio Fotográfico',
    prompt: 'Crie um retrato close-up profissional ultra-realista em estúdio. O sistema receberá fotos reais do usuário; use essas fotos EXCLUSIVAMENTE para determinar a identidade real da pessoa. O enquadramento é um retrato tight de perfil lateral (cabeça e ombros superiores visíveis). O corpo e cabeça do sujeito estão rotacionados em perfil em relação à câmera. Apenas um lado do rosto é visível. O olhar é direcionado para frente. Expressão facial: calma, séria, composta, confiança neutra. Lábios fechados, músculos faciais relaxados. Vestuário: blazer escuro sob medida minimalista sobre camisa ou top preto. Alfaiataria elegante e moderna com tecido matte. Setup de iluminação: iluminação low-key dramática em estúdio. Uma única luz key suave mas direcional posicionada ligeiramente à frente do sujeito e acima do nível dos olhos no lado do rosto visível. A luz ilumina suavemente testa, ponte do nariz, maçã do rosto e lábios enquanto o resto da cabeça gradualmente desaparece nas sombras. Fundo: completamente preto seamless sem textura. Paleta de cores: pretos profundos, tons de pele neutros. Camera setup: câmera full-frame profissional, lente 85mm retrato, f/2, ISO 100. Qualidade hiper-realista, resolução extremamente alta, textura natural de pele preservada.',
    description: 'Retrato close-up dramático com iluminação low-key de estúdio',
    image: 'https://cdn.abacus.ai/images/e6b92a9f-84de-415f-a568-7b6f5ff7883f.png',
  },
  {
    id: 14,
    title: 'Skyline Urbano ao Pôr do Sol',
    category: 'Ensaio Fotográfico',
    prompt: 'Retrato cinematográfico urbano de uma pessoa em um rooftop de cidade durante o golden hour com skyline espetacular ao fundo. Vestindo outfit smart-casual elegante. Backlight do pôr do sol criando rim lighting quente e dourado ao redor do sujeito. Arranha-céus modernos visíveis atrás, refletindo os tons quentes do sol. Paleta de cores quentes douradas e alaranjadas. Profundidade de campo rasa focando no sujeito com skyline suavemente desfocado. Câmera profissional full-frame com lente 85mm f/1.4. Fotografia lifestyle editorial profissional. Estética urbana atmosférica. Pose confiante e relaxada, com o sujeito apoiado em um parapeito ou grade do rooftop. Expressão contemplativa olhando para o horizonte. Vento leve nos cabelos. Céu com gradiente de cores do pôr do sol (dourado, laranja, rosa). Partículas de luz no ar. O sujeito deve ser o ponto focal claro da imagem, com o skyline servindo como backdrop cinematográfico. Composição vertical 4:5, ultra-realista.',
    description: 'Retrato em rooftop urbano com skyline e luz golden hour',
    image: 'https://cdn.abacus.ai/images/1a973f5e-67b4-4cf2-a479-bbcf708db027.png',
  },
  {
    id: 15,
    title: 'Névoa e Mistério Artístico',
    category: 'Ensaio Fotográfico',
    prompt: 'Fotografia de retrato profissional em estúdio ultra-realista com atmosfera de névoa e mistério. Use APENAS as fotos de identidade enviadas para definir rosto, estrutura corporal, tom de pele, idade e todas as características físicas. Expressão: séria, focada, introspectiva. Olhos: foco nítido, olhar intenso direcionado ligeiramente fora do eixo da câmera, expressão calma mas determinada. Posição da cabeça: leve giro de três quartos, queixo neutro. Postura: ereta e composta, ombros relaxados mas firmes. Mãos: ambas visíveis, suavemente entrelaçadas próximo ao queixo. Enquadramento: retrato tight busto a ombros. Iluminação: dramática, low-key cinematográfica em estúdio. Luz principal suave mas direcional da esquerda da câmera a aproximadamente 45°. Rim light sutil fria da traseira-direita. Fumaça e névoa envolvendo o sujeito, criando camadas atmosféricas e profundidade visual. Backlight dramático iluminando as partículas de fumaça. Fundo: escuro com gradiente de preto a cinza carvão, seamless. Vestuário: top gola alta escuro, tecido matte. Paleta de cores: fria, cinematográfica, tons restringidos com precisão natural de cor de pele. Textura de pele totalmente realista. Composição vertical 4:5, estilo retrato editorial cinematográfico.',
    description: 'Retrato artístico atmosférico com névoa e iluminação cinematográfica',
    image: 'https://cdn.abacus.ai/images/65919cd3-b450-4537-b52f-803198fa2d76.png',
  },

  // ===== CRIANÇAS HERÓIS (16-22) - PREMIUM =====
  {
    id: 16,
    title: 'Pequeno Capitão Estelar',
    category: 'Crianças Heróis',
    prompt: 'Retrato hiper-realista de uma criança (rosto autocompletado) vestindo uma fantasia detalhada do Capitão América. A criança tem uma expressão confiante. Segura um escudo redondo vermelho, branco e azul com uma estrela no centro. A fantasia apresenta tecido realista com tons de azul profundo e costuras construídas. No fundo, uma bandeira americana desfocada tremula, iluminação cinematográfica dramática e partículas atmosféricas sutis. Tom heroico e vibrante, estilo pintura-filme, alta definição, fotografia profissional, foco nítido no rosto, preservando as feições da criança. Câmera profissional com lente 50mm f/1.8, ISO 100. Composição vertical 4:5.',
    description: 'Criança vestida de super-herói patriótico com escudo e pose heroica',
    image: 'https://cdn.abacus.ai/images/eb058ffa-443a-46fc-8891-497e46c56bdc.png',
  },
  {
    id: 17,
    title: 'Mini Cavaleiro de Ferro',
    category: 'Crianças Heróis',
    prompt: 'Uma criança veste uma armadura inspirada no Homem de Ferro (rosto autocompletado) com um capacete aberto. A criança tem olhos suaves e uma expressão gentil, transmitindo inocência e força. A armadura é metálica em vermelho e dourado, com reflexos de luz realistas, texturas finas e detalhes mecânicos sutis, mas que se ajusta bem à criança. Cenário urbano de Nova York ao fundo, iluminação forte no rosto, pele fotorrealista, retrato hiper-realista e altamente detalhado, 8K, ultra-nítido, sensação cinematográfica. Câmera profissional, lente 50mm, profundidade de campo rasa. Composição vertical 4:5.',
    description: 'Criança em armadura tecnológica vermelha e dourada estilo herói',
    image: 'https://lumenor.ai/cdn-cgi/imagedelivery/F5KOmplEz0rStV2qDKhYag/4d3be512-62ba-42f0-47e3-1713b47fb900/tn',
  },
  {
    id: 18,
    title: 'Jovem Aracnídeo Aventureiro',
    category: 'Crianças Heróis',
    prompt: 'Imagem hiper-realista de uma criança (rosto autocompletado) vestindo uma fantasia do Homem-Aranha. A criança posa com ousadia e sorri levemente. A fantasia tem textura de tecido realista com padrão de teia e cores vibrantes de vermelho e azul. O cenário interno lembra um quarto infantil ou sala de jogos, com pôsteres temáticos e brinquedos ao fundo. Iluminação suave e natural, profundidade de campo rasa, estilo fotografia profissional, alta definição e visual acolhedor e alegre. Câmera com lente 50mm f/1.4. Composição vertical 4:5.',
    description: 'Criança em fantasia de herói aracnídeo em cenário divertido',
    image: 'https://image.cdn2.seaart.me/2023-11-10/22326275505965061/2457e8b87a96c88da7b8e80f1d64922c54081fd7_high.webp',
  },
  {
    id: 19,
    title: 'Pequeno Deus do Trovão',
    category: 'Crianças Heróis',
    prompt: 'Retrato cinematográfico ultra-realista de uma criança (rosto autocompletado) vestida com armadura específica do Thor com texturas metálicas e uma capa vermelha fluindo, segurando um martelo pesado, em pé com confiança no topo de um prédio urbano durante o golden hour, luz solar quente projetando destaques dramáticos e sombras longas, bokeh suave no fundo, cores vibrantes, lente 50mm, atmosfera energética com sensação de aventura e heroísmo lúdico, composição profissional para ensaio fotográfico externo. Composição vertical 4:5.',
    description: 'Criança como deus nórdico do trovão com martelo e capa épica',
    image: 'https://petcanvas.art/wp-content/uploads/2023/11/xishanchangyu_The_portrait_shows_a_child_version_of_a_man_in_th_8c35e74c-add7-4d8e-8980-7a9928ecb36a.jpg',
  },
  {
    id: 20,
    title: 'Pequeno Guerreiro Aquático',
    category: 'Crianças Heróis',
    prompt: 'Retrato hiper-realista cinematográfico de uma criança (rosto autocompletado) vestida como um herói inspirado no Aquaman, em pé em águas agitadas do oceano. A criança segura um tridente dourado detalhado, com expressão séria e determinada. A fantasia apresenta textura metálica escamada em laranja e dourado, justa ao corpo com detalhes de armadura. Cabelo molhado e despenteado pela chuva. Ondas tempestuosas ao redor, nuvens escuras acima, relâmpagos dramáticos no fundo. Atmosfera épica e intensa, tom de fantasia poderoso, iluminação dramática, ultra-realista, qualidade de pôster de cinema. Composição vertical 4:5.',
    description: 'Criança como guerreiro aquático com tridente em cenário oceânico épico',
    image: 'https://i.pinimg.com/736x/a4/33/95/a43395eafa46d2198aff74d478ae3086.jpg',
  },
  {
    id: 21,
    title: 'Super Duo Heroico',
    category: 'Crianças Heróis',
    prompt: 'Uma cena cinematográfica dramática de uma criança super-herói (rosto autocompletado) em pé com confiança em frente a uma cidade futurista à noite. A criança veste uma fantasia muscular estilo Superman com capa vermelha e olhar determinado e sério. Ao lado dela, um herói alto e poderoso com armadura estilo Batman, olhos azuis e traje metálico escuro com detalhes marcantes. Ambos os personagens são iluminados pela lua cheia brilhante atrás deles. Faíscas e brasas flutuam no ar, criando sensação de intensidade épica. Iluminação ultra-realista, texturas hiper-detalhadas, composição dinâmica, 8K, atmosfera dramática, paleta escura, alto contraste, estilo cinematográfico, concept art épico. Composição vertical 4:5.',
    description: 'Duo de super-heróis infantis em cena noturna épica',
    image: 'https://media.easy-peasy.ai/a25ebaad-64f8-4542-aa1d-fbeae72fc832/8fb12cac-3be8-496c-8d5f-e10492881337.png',
  },
  {
    id: 22,
    title: 'Velocista Escarlate',
    category: 'Crianças Heróis',
    prompt: 'Imagem cinematográfica ultra-realista de uma criança (rosto autocompletado) em uma fantasia vibrante de super-herói vermelho do Flash com raios dourados, emblema de relâmpago iluminado no peito, correndo em super velocidade pelas ruas noturnas da cidade, fundo urbano dinâmico com arranha-céus e janelas brilhantes, reflexos de neon e luzes de carros borradas criando rastros de movimento, iluminação dramática com acentos laranja, trilhas de energia intensa, lente 24mm, atmosfera de alta octanagem com composição focada em ação. Composição vertical 4:5.',
    description: 'Criança como velocista super-herói correndo pela cidade noturna',
    image: 'https://m.media-amazon.com/images/I/61s-7Jg+-RL._AC_UF894,1000_QL80_.jpg',
  },

  // ===== LANCHES (23-25) - PREMIUM =====
  {
    id: 23,
    title: 'Hambúrguer Gourmet Explosivo',
    category: 'Lanches',
    prompt: 'Crie uma imagem hiper-realista em alta resolução de um hambúrguer gourmet com todos os ingredientes suspensos no ar em uma explosão desafiando a gravidade. A cena deve capturar cada elemento em detalhes nítidos como se congelado no tempo: um pão artesanal tostado, alface romana verde, fatias de tomate suculentas, cebolas crocantes, queijo cheddar derretendo, um patty de carne frito crocante e molhos escorrendo. O fundo é escuro e cinematográfico, permitindo que cada ingrediente se destaque com cores vívidas e texturas. Adicione sementes de gergelim e cristais de sal voando ao redor, com partículas de luz e efeito sutil de spotlight para aumentar o realismo. Foque na composição dinâmica — elementos devem parecer como se tivessem sido arremessados ou puxados por uma força invisível. Use iluminação de estúdio com rim light sutil e profundidade de campo rasa. --ar 4:5 --v 6 --style photographic --q 2 --camera Canon EOS R5, 100mm macro lens, f/5.6',
    description: 'Hambúrguer gourmet com ingredientes explodindo em gravidade zero',
    image: 'https://cdn.abacus.ai/images/161828b9-426a-4ed1-bd9f-88ed4a7af264.png',
  },
  {
    id: 24,
    title: 'Pizza Apocalíptica com Meteoros',
    category: 'Lanches',
    prompt: 'Crie uma imagem hiper-realista e dramática de uma pizza enorme, totalmente carregada, como foco central, colocada no meio de uma rua urbana deserta em um cenário de cidade destruída. A pizza está explodindo com coberturas — queijo derretido puxando, pepperoni curvando, vapor subindo e ervas voando — criando uma explosão visual de sabor. Acima da cena, meteoros flamejantes e rochas derretidas caem do céu, espalhando destroços em chamas e brasas incandescentes ao redor da pizza. Os prédios ao fundo são escuros, desgastados e inclinados, adicionando uma sensação de caos e fim do mundo. A pizza deve ser posicionada como uma heroína — massa grossa, queijo borbulhando, molho escorrendo e texturas detalhadas nas coberturas. Um spotlight cinematográfico de cima ilumina a pizza como uma salvadora divina no meio da destruição. Use contraste duro, color grading dramática e partículas explosivas para máxima intensidade. --ar 4:5 --v 6 --style photographic --q 2 --lighting cinematic firelight --camera Canon EOS R5, 35mm lens, f/4',
    description: 'Pizza épica em cenário apocalíptico com meteoros e destruição cinematográfica',
    image: 'https://cdn.abacus.ai/images/c6f403b5-819e-4098-9b67-9314d7204f94.png',
  },
  {
    id: 25,
    title: 'Cheeseburger Saindo do Outdoor',
    category: 'Lanches',
    prompt: 'Crie uma imagem hiper-realista e surreal de um cheeseburger gigante exibido em um painel publicitário de ponto de ônibus. O burger é massivo, empilhado com patties suculentos, alface, tomate, pickles e uma quantidade absurda de queijo derretido transbordando. O truque visual chave: o queijo não está apenas dentro do anúncio — está derretendo e escorrendo PARA FORA do outdoor, pingando pelo vidro e ESPALHANDO na calçada em frente ao painel, como se os ingredientes estivessem vazando para o mundo real. O queijo derretido deve ser amarelo-laranja vibrante, espesso, brilhante e exagerado em quantidade — quase excessivamente cartunesco, mas renderizado com alto realismo. Adicione respingos de queijo, fios e gotejamentos interagindo com as bordas do poster e formando poças no chão de concreto. O cenário é urbano, com rua ou calçada ao fundo. Acima do burger, um letreiro vermelho diz "EXTRA CHEESE" em fonte branca bold. --ar 4:5 --v 6 --style photographic --q 2',
    description: 'Cheeseburger surreal transbordando queijo de um outdoor publicitário',
    image: 'https://thumbs.dreamstime.com/b/burger-rain-giant-burgers-fly-over-cheering-crowd-vibrant-surreal-scene-350757160.jpg',
  },

  // ===== ANÚNCIOS (26-30) - PREMIUM =====
  {
    id: 26,
    title: 'Lâmpada Criativa Escalando',
    category: 'Anúncios',
    prompt: 'Um pôster publicitário criativo em estilo surreal e lúdico. Uma figura humanoide com uma lâmpada brilhante como cabeça escala uma parede vertical usando fios e plugues, simbolizando determinação e criatividade. Iluminação cinematográfica quente destaca a lâmpada brilhante, criando uma sensação de inspiração e inovação. Tipografia: letras modernas e bold no lado direito do pôster, em português, dizendo: "Transforme suas ideias em realidade." Fundo: tons quentes (laranjas, marrons, amarelos) com sombras suaves, mantendo o foco no personagem da lâmpada brilhante. Estilo: pôster publicitário, motivacional, ultra-detalhado, alta resolução, composição vertical.',
    description: 'Pôster criativo surreal com lâmpada humanóide escalando parede',
    image: 'https://cdn.abacus.ai/images/0d836634-76a3-4d3d-8e45-934e91a7680c.png',
  },
  {
    id: 27,
    title: 'Burger UFO Sabor Espacial',
    category: 'Anúncios',
    prompt: 'Um pôster publicitário futurista e divertido de fast-food. No centro, um grande cheeseburger suculento com queijo derretido, alface, tomate, cebolas e patties duplos está flutuando no ar, brilhando como se estivesse sendo abduzido por um UFO acima. O UFO emite um feixe de luz brilhante que destaca o burger dramaticamente. Fundo: gradiente vibrante em tons quentes de laranja e amarelo, com textura sutil para um visual retrô de pôster publicitário. Tipografia: letras bold, retro-futuristas no lado esquerdo, grandes e chamativas, dizendo: "SABOR DE OUTRO MUNDO". Na parte inferior, espaço para logo e placeholder de endereço. Estilo: detalhes de burger ultra-realistas misturados com tema sci-fi divertido, iluminação cinematográfica, alta resolução, composição vertical de pôster.',
    description: 'Pôster futurista de fast-food com UFO abduzindo um hambúrguer',
    image: 'https://media.printler.com/media/photo/101217.jpg?rmode=crop&width=638&height=900',
  },
  {
    id: 28,
    title: 'Borracha Abrindo Caminho no Mar',
    category: 'Anúncios',
    prompt: 'Uma obra de arte surreal e inspiradora para pôster. Uma borracha de lápis gigante está esculpindo um caminho através do meio do oceano, criando uma nova estrada onde não existia nenhuma antes. Um homem caminha descalço ao longo do caminho recém-criado em direção ao horizonte, simbolizando determinação e criatividade. O céu é cinematográfico com cores quentes de pôr do sol, refletindo na água. Tipografia: letras bold, modernas sans-serif colocadas na estrada em perspectiva, grandes e impactantes. O texto diz: "Grandes conquistas nascem de novas rotas." Estilo: pôster motivacional, ultra-detalhado, iluminação cinematográfica, alta resolução, composição vertical, render 8K.',
    description: 'Pôster motivacional surreal com borracha abrindo caminho no oceano',
    image: 'https://www.shutterstock.com/image-photo/giant-pencil-eraser-erasing-sea-260nw-2556770247.jpg',
  },
  {
    id: 29,
    title: 'Fitness Futurista Premium',
    category: 'Anúncios',
    prompt: 'Crie uma imagem de um homem e uma mulher fitness e atléticos na faixa dos 20 anos, ambos em movimento durante uma sessão intensa de academia. Eles vestem roupas fitness elegantes e modernas com acentos neon verde limão e azul elétrico — suor visível, expressões focadas e determinadas. O homem está no meio de uma rosca bíceps, veias aparentes, enquanto a mulher está fazendo afundo com uma banda de resistência, postura forte e definida. A cena se passa em um centro fitness futurista de alto padrão com iluminação LED dramática, pisos polidos escuros, paredes de vidro e displays de performance digital brilhando ao fundo. Adicione motion blur sutil para sugerir movimento e energia. Estilo visual: hiper-realista, alto contraste, iluminação cinematográfica com sombras fortes e tons azuis frios. Textura 8k alta definição. Enquadramento: layout vertical (1080x1920) otimizado para Instagram Stories. Deixe os 25% superiores livres para texto de headline e 20% inferiores para CTA.',
    description: 'Anúncio fitness futurista para Instagram Stories com casal atlético',
    image: 'https://cdn.abacus.ai/images/46d690fb-b40f-40bb-8ef0-0657fac92c7f.png',
  },
  {
    id: 30,
    title: 'Pôster Sci-Fi Assistentes IA',
    category: 'Anúncios',
    prompt: 'Uma ilustração de pôster escuro e cinematográfico no estilo concept art de horror/sci-fi. Em vez de zumbis, um grupo de quatro robôs humanóides caminha para frente em uníssono, iluminados por uma luz de fundo verde-eerie. Seus designs são futuristas mas intimidadores, com olhos brilhantes, exoesqueletos metálicos e armadura industrial desgastada. Eles seguram telas holográficas ou dispositivos futuristas, simbolizando inteligência artificial. Na parte superior da imagem, letras distressed bold brilham em verde neon estilo graffiti. O texto diz: "100 Assistentes de IA". A atmosfera é ominosa e poderosa, com sombras dramáticas, fumaça e efeitos digitais brilhantes se mesclando ao fundo. Ultra-detalhado, cinematográfico, composição estilo pôster, formato vertical, resolução 8K.',
    description: 'Pôster sci-fi cinematográfico com robôs de IA em cena dramática',
    image: 'https://thumbs.dreamstime.com/b/abandoned-town-robots-two-walking-streets-futuristic-city-rainy-day-digital-art-style-illustration-painting-269331392.jpg',
  },
];
