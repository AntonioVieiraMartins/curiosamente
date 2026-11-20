import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula O átomo
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é um átomo?', verso: 'O menor pedaço de um elemento que ainda é aquele elemento. Tem prótons, nêutrons e elétrons.' },
  { tipo: 'definição', frente: 'Quais as três partículas do átomo e suas cargas?', verso: 'Próton (+1), nêutron (0) e elétron (−1).' },
  { tipo: 'regra', frente: 'Onde ficam prótons, nêutrons e elétrons?', verso: 'Prótons e nêutrons no núcleo. Elétrons na eletrosfera, em volta.' },
  { tipo: 'definição', frente: 'O que é o número atômico (Z)?', verso: 'A quantidade de prótons. Define o elemento.' },
  { tipo: 'conta', frente: 'Como calcular o número de massa A?', verso: 'A = Z + N (prótons mais nêutrons).' },
  { tipo: 'conta', frente: 'Como achar os nêutrons?', verso: 'N = A − Z.' },
  { tipo: 'regra', frente: 'Quantos elétrons tem um átomo neutro?', verso: 'Tantos quanto prótons, para a carga total ser zero.' },
  { tipo: 'definição', frente: 'O que é um íon?', verso: 'Átomo (ou grupo de átomos) com carga, por ter ganhado ou perdido elétrons.' },
  { tipo: 'definição', frente: 'O que é cátion e o que é ânion?', verso: 'Cátion: perdeu elétrons (carga +). Ânion: ganhou elétrons (carga −).' },
  { tipo: 'definição', frente: 'O que são isótopos?', verso: 'Átomos do mesmo elemento (mesmo Z) com números diferentes de nêutrons.' },
  { tipo: 'problema', frente: 'Quantos nêutrons tem o carbono-14?', verso: '14 − 6 = 8 nêutrons.' },
  { tipo: 'por quê', frente: 'Por que a massa atômica na tabela é um número quebrado?', verso: 'Porque é a média das massas dos isótopos, ponderada pela abundância na natureza.' },
  { tipo: 'regra', frente: 'Quão pequeno é o núcleo comparado ao átomo?', verso: 'Cerca de 100 mil vezes menor. O átomo é quase todo espaço vazio.' },
  { tipo: 'história', frente: 'Quem propôs a ideia de átomo e quem a trouxe de volta?', verso: 'Demócrito (c. 400 a.C.) imaginou o átomo. Dalton (1808) criou a teoria atômica com medidas.' },
  { tipo: 'história', frente: 'Que fenômeno convenceu os cientistas de que átomos existem?', verso: 'O movimento browniano, explicado por Einstein em 1905 e confirmado por Perrin.' },
]

export default cartoes
