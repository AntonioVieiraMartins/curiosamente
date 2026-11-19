import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Simetria e transformações (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é um eixo de simetria?', verso: 'Uma linha que divide a figura em duas metades que são reflexos uma da outra.' },
  { tipo: 'definição', frente: 'O que é simetria de rotação?', verso: 'A figura se encaixa em si mesma depois de girar em torno do centro por um ângulo menor que uma volta.' },
  { tipo: 'regra', frente: 'Quantos eixos e qual o menor giro de um polígono regular de n lados?', verso: 'n eixos de simetria, e o menor giro é 360° ÷ n.' },
  { tipo: 'conta', frente: 'Qual o menor giro de um hexágono regular?', verso: '360° ÷ 6 = 60°.' },
  { tipo: 'pegadinha', frente: 'As diagonais de um retângulo (que não é quadrado) são eixos de simetria?', verso: 'Não. O retângulo só tem 2 eixos, os que passam pelos meios dos lados.' },
  { tipo: 'regra', frente: 'Como é a imagem de um ponto no espelho?', verso: 'À mesma distância do eixo, do outro lado, na reta perpendicular ao eixo.' },
  { tipo: 'regra', frente: 'Reflexão no eixo y: o que acontece com (x, y)?', verso: 'Vira (−x, y): o x troca de sinal.' },
  { tipo: 'regra', frente: 'Reflexão no eixo x: o que acontece com (x, y)?', verso: 'Vira (x, −y): o y troca de sinal.' },
  { tipo: 'regra', frente: 'Translação por (a, b): o que acontece com (x, y)?', verso: 'Vira (x + a, y + b).' },
  { tipo: 'regra', frente: 'Giro de 180° em torno da origem: o que acontece com (x, y)?', verso: 'Vira (−x, −y).' },
  { tipo: 'regra', frente: 'Giro de 90° anti-horário em torno da origem: o que acontece com (x, y)?', verso: 'Vira (−y, x).' },
  { tipo: 'por quê', frente: 'O que reflexão, rotação e translação têm em comum?', verso: 'Não mudam o tamanho nem a forma da figura, só a posição ou a virada.' },
  { tipo: 'pegadinha', frente: 'A ordem das transformações importa?', verso: 'Sim. Espelhar e deslizar pode dar um resultado diferente de deslizar e espelhar.' },
  { tipo: 'conta', frente: 'Ponto (1, 2) espelhado na linha x = 3?', verso: 'Fica a 2 casas do outro lado: (5, 2). Fórmula: x novo = 2 × 3 − 1.' },
  { tipo: 'história', frente: 'Quem provou que existem exatamente 17 padrões de papel de parede?', verso: 'Evgraf Fedorov, em 1891.' },
  { tipo: 'história', frente: 'Que artista usou os padrões da Alhambra para criar desenhos que se encaixam?', verso: 'M. C. Escher, artista holandês.' },
]

export default cartoes
