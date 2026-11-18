import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Multiplicação (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Em 3 × 4 = 12, como se chamam os números?', verso: '3 e 4 são os fatores; 12 é o produto. Pense em 3 caixas com 4 lápis cada: 4 + 4 + 4 = 12.' },
  { tipo: 'definição', frente: 'Quais são as duas ideias principais da multiplicação?', verso: 'Somar grupos iguais (soma repetida) e contar objetos num retângulo de fileiras e colunas (que também é a área do retângulo).' },
  { tipo: 'regra', frente: 'Por que a ordem dos fatores não altera o produto?', verso: 'Girar o retângulo (3 fileiras de 4 vira 4 fileiras de 3) só muda a arrumação, não o total. É a propriedade comutativa: 7 × 6 = 6 × 7 = 42.' },
  { tipo: 'regra', frente: 'O que acontece ao multiplicar por 1 e por 0?', verso: 'Por 1 o número não muda (elemento neutro). Por 0 dá zero (nenhum grupo, nada para contar).' },
  { tipo: 'por quê', frente: 'Por que a tabuada é simétrica e o que isso economiza?', verso: 'Como 3 × 4 = 4 × 3, a casa de cima à direita é igual à de baixo à esquerda. Só é preciso aprender cerca de metade dos fatos.' },
  { tipo: 'regra', frente: 'Como calcular × 4 e × 5 sem decorar?', verso: '× 4 é o dobro do dobro (7 × 4 = 14 × 2 = 28). × 5 é a metade do × 10 (7 × 5 = 70 ÷ 2 = 35).' },
  { tipo: 'regra', frente: 'Qual é o truque do 9 e o que ele confere?', verso: '× 9 é × 10 menos o número: 7 × 9 = 70 - 7 = 63. Os algarismos do resultado somam 9 (6 + 3).' },
  { tipo: 'conta', frente: 'Quanto é 8 × 9 sem decorar?', verso: '72. Faça 10 × 8 = 80 e tire um 8: 80 - 8 = 72 (7 + 2 = 9).' },
  { tipo: 'regra', frente: 'Quais são as propriedades da multiplicação?', verso: 'Comutativa (a ordem não importa), associativa (agrupa como quiser), distributiva em relação à soma, elemento neutro 1, e qualquer número vezes 0 dá 0.' },
  { tipo: 'conta', frente: 'Calcule 25 × 7 × 4 do jeito mais fácil.', verso: '700. Reorganize: 25 × 4 = 100 e 100 × 7 = 700 (associativa e comutativa).' },
  { tipo: 'regra', frente: 'O que acontece ao multiplicar por 10, 100 e 1.000? E 40 × 50?', verso: 'Cada algarismo anda casas para a esquerda: acrescentam-se um, dois ou três zeros. 40 × 50: faça 4 × 5 = 20 e junte os dois zeros: 2.000.' },
  { tipo: 'conta', frente: 'Calcule 7 × 13 de cabeça pela distributiva.', verso: '91. Quebre o 13 em 10 + 3: 7 × 10 = 70, 7 × 3 = 21 e 70 + 21 = 91.' },
  { tipo: 'conta', frente: 'Quanto é 347 × 6 na conta armada?', verso: '2.082. 7 × 6 = 42 (escreve 2, vai 4); 4 × 6 = 24 + 4 = 28 (escreve 8, vai 2); 3 × 6 = 18 + 2 = 20.' },
  { tipo: 'conta', frente: 'Quanto é 23 × 14 pela distributiva?', verso: '322. 23 × 4 = 92 e 23 × 10 = 230; 92 + 230 = 322. Estimativa: 20 × 15 = 300, perto.' },
  { tipo: 'problema', frente: '3 camisas e 4 calças diferentes: quantos conjuntos distintos?', verso: '12. Cada camisa combina com cada calça: 3 × 4 = 12.' },
  { tipo: 'pegadinha', frente: 'Multiplicar sempre aumenta o número?', verso: 'Com números naturais costuma aumentar, mas com frações e decimais pode diminuir: metade de 10 é 1/2 × 10 = 5. E por 0 dá 0.' },
  { tipo: 'história', frente: 'Como os egípcios multiplicavam e quando surgiu o sinal ×?', verso: 'Por dobros sucessivos e soma (papiro de Rhind): 13 × 5 = 5 + 20 + 40 = 65. O sinal × foi usado pela primeira vez por Edward Wright, em 1618.' },
]

export default cartoes
