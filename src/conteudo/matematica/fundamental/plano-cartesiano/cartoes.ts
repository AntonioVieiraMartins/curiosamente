import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Plano cartesiano (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que são os eixos e a origem do plano cartesiano?', verso: 'Dois eixos, x (horizontal) e y (vertical), que se cruzam na origem, o ponto (0, 0).' },
  { tipo: 'definição', frente: 'O que é um par ordenado (x, y)?', verso: 'Um endereço: primeiro o lado (x), depois o alto (y). A ordem importa: (3, 2) não é (2, 3).' },
  { tipo: 'regra', frente: 'O que significam os sinais das coordenadas?', verso: 'x positivo é direita, negativo é esquerda. y positivo é cima, negativo é baixo.' },
  { tipo: 'conta', frente: 'Como marcar o ponto (−3, 2)?', verso: 'Parta da origem: 3 casas à esquerda e 2 para cima. Cai na parte de cima e à esquerda (2º quadrante).' },
  { tipo: 'regra', frente: 'Quais são os sinais dos quatro quadrantes?', verso: '1º (+, +) cima e direita; 2º (−, +) cima e esquerda; 3º (−, −) baixo e esquerda; 4º (+, −) baixo e direita. Contam-se no sentido anti-horário.' },
  { tipo: 'pegadinha', frente: 'Um ponto sobre um eixo está em qual quadrante?', verso: 'Em nenhum: pontos nos eixos não estão em quadrante algum.' },
  { tipo: 'conta', frente: 'Qual é a distância entre (−3, 2) e (4, 2)?', verso: '7 casas. Mesmo y: 3 casas até o zero e mais 4 depois: a diferença dos x.' },
  { tipo: 'pegadinha', frente: 'De 1 a 6 são quantos passos?', verso: '5, não 6. Não conte o ponto de partida ao medir distância.' },
  { tipo: 'conta', frente: 'Três cantos de um quadrado são (1, 1), (1, 4) e (4, 4). Onde está o quarto?', verso: '(4, 1). Os lados têm 3 casas: o canto que falta fica embaixo do (4, 4) e ao lado do (1, 1).' },
  { tipo: 'regra', frente: 'O que acontece com (x, y) nas reflexões?', verso: 'No eixo x: (x, −y). No eixo y: (−x, y). Na origem: (−x, −y).' },
  { tipo: 'conta', frente: 'Espelhe (−3, 5) no eixo x.', verso: '(−3, −5). O espelho horizontal troca cima por baixo: o y muda de sinal.' },
  { tipo: 'regra', frente: 'Como achar o ponto médio entre dois pontos?', verso: 'A média dos x e a média dos y.' },
  { tipo: 'problema', frente: 'Corrida com bandeirada de R$ 5 e R$ 3 por km: preço de 7 km e ponto no gráfico?', verso: 'R$ 26 (5 + 7 × 3). É o ponto (7, 26) do gráfico.' },
  { tipo: 'problema', frente: 'Onde o plano cartesiano aparece no dia a dia?', verso: 'GPS (latitude e longitude), pixels da tela (com y crescendo para baixo), xadrez e batalha naval (letra e número) e gráficos de preços.' },
  { tipo: 'história', frente: 'Quem publicou a ideia do plano em 1637 e quem a descobriu sozinho?', verso: 'René Descartes publicou em 1637, quando morava nos Países Baixos. Fermat descobriu por conta própria (até em 3D), mas não publicou. Oresme já usava ideias parecidas antes.' },
  { tipo: 'história', frente: 'Como a ideia de dois eixos se espalhou?', verso: 'A obra de Descartes foi traduzida para o latim em 1649 por Frans van Schooten e seus alunos.' },
]

export default cartoes
