import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Ângulos (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é um ângulo e em que se mede?', verso: 'A abertura entre dois lados que saem do mesmo vértice. Mede-se em graus.' },
  { tipo: 'regra', frente: 'Quantos graus tem uma volta, meia volta e um quarto de volta?', verso: '360°, 180° e 90°. Três quartos de volta são 270°.' },
  { tipo: 'regra', frente: 'Quais são os quatro tipos de ângulo?', verso: 'Agudo (menos de 90°), reto (exatamente 90°, desenhado com um quadradinho), obtuso (entre 90° e 180°) e raso (180°, os lados formam uma reta).' },
  { tipo: 'regra', frente: 'Como chutar bem um ângulo?', verso: 'Compare com o reto (90°): menor é agudo, maior é obtuso. Referências: 45° (metade do reto), 135° (um reto e meio) e 180° (uma reta).' },
  { tipo: 'definição', frente: 'O que são ângulos complementares e suplementares?', verso: 'Complementares somam 90°; suplementares somam 180°.' },
  { tipo: 'conta', frente: 'Qual o complemento de 35° e o suplemento de 110°?', verso: '90° − 35° = 55° e 180° − 110° = 70°.' },
  { tipo: 'regra', frente: 'O que são ângulos opostos pelo vértice (OPV)?', verso: 'Os que ficam em lados opostos de duas retas que se cruzam ("de costas" um para o outro). São iguais.' },
  { tipo: 'regra', frente: 'Retas paralelas cortadas por uma transversal: quais ângulos são iguais?', verso: 'Correspondentes (mesma posição, uma em cada reta) e alternos (lados opostos da transversal) são iguais. Colaterais (mesmo lado, entre as paralelas) somam 180°.' },
  { tipo: 'regra', frente: 'Quanto somam os ângulos de um triângulo e de um quadrilátero?', verso: 'Triângulo: 180°. Quadrilátero: 360°.' },
  { tipo: 'conta', frente: 'Dois ângulos de um triângulo medem 50° e 60°. Quanto mede o terceiro?', verso: '70° (180° − 110°).' },
  { tipo: 'conta', frente: 'Um ângulo é o dobro do seu complemento. Quanto mede?', verso: '60°. x = 2·(90 − x) → 3x = 180. O complemento é 30°, e 60 é o dobro.' },
  { tipo: 'regra', frente: 'Quantos graus o ponteiro percorre no relógio por hora e por minuto?', verso: 'Das horas: 30° por hora. Dos minutos: 6° por minuto.' },
  { tipo: 'conta', frente: 'Qual é o ângulo entre os ponteiros às 3h30?', verso: '75°. Minutos: 30 × 6 = 180°. Horas: 90° + 15° = 105° (o ponteiro das horas também anda). 180° − 105° = 75°.' },
  { tipo: 'pegadinha', frente: 'Quais são os erros comuns ao medir ângulos?', verso: 'Medir o comprimento dos lados, ler a escala errada do transferidor (estime antes), confundir complementar com suplementar e esquecer que o ponteiro das horas anda.' },
  { tipo: 'problema', frente: 'Onde ângulos aparecem no dia a dia?', verso: 'Bússola (90° à direita do Norte é o Leste), skate (360 e 180), cantos de 90° na carpintaria, inclinação de rampas e telhados, relógio e GPS.' },
  { tipo: 'história', frente: 'De onde vêm os 360° da volta e os minutos de arco?', verso: 'Ninguém sabe ao certo (há várias teorias, como calendários de 360 dias e o número ter muitos divisores). A mesopotâmia usava base 60: o grau tem 60 minutos de arco e cada minuto, 60 segundos.' },
]

export default cartoes
