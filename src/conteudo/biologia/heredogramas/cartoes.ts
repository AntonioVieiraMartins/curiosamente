import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Heredogramas e probabilidade (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Como é o símbolo de homem, mulher e afetado num heredograma?', verso: 'Quadrado é homem, círculo é mulher, e preenchido indica quem tem a característica.' },
  { tipo: 'regra', frente: 'Pais sem a característica têm um filho com ela. O que isso indica?', verso: 'Herança recessiva: os pais são portadores (Aa).' },
  { tipo: 'regra', frente: 'Como reconhecer herança autossômica dominante?', verso: 'Todo afetado tem um genitor afetado. A característica não pula gerações.' },
  { tipo: 'regra', frente: 'Como reconhecer herança recessiva ligada ao X?', verso: 'Muito mais homens afetados. O pai afetado não passa para os filhos homens.' },
  { tipo: 'regra', frente: 'O que diz a regra do E em probabilidade?', verso: 'Eventos independentes que acontecem juntos: as chances se multiplicam.' },
  { tipo: 'regra', frente: 'O que diz a regra do OU em probabilidade?', verso: 'Eventos que não podem ocorrer juntos: as chances se somam.' },
  { tipo: 'pegadinha', frente: 'Dois filhos aa de um casal Aa x Aa. A chance do terceiro ser aa aumenta?', verso: 'Não. Cada filho é um sorteio novo, com 1 chance em 4.' },
  { tipo: 'conta', frente: 'Chance de um casal Aa x Aa ter um menino aa?', verso: '1/4 × 1/2 = 1/8, ou 12,5%.' },
  { tipo: 'conta', frente: 'Filho normal de Aa x Aa: qual a chance de ser portador?', verso: '2/3, porque sobram AA, Aa e aA (aa está excluído).' },
  { tipo: 'regra', frente: 'Quais os alelos do sistema ABO?', verso: 'IA, IB e i. IA e IB são codominantes, e i é recessivo.' },
  { tipo: 'regra', frente: 'Quais os genótipos de cada tipo sanguíneo?', verso: 'A: IAIA ou IAi. B: IBIB ou IBi. AB: IAIB. O: ii.' },
  { tipo: 'regra', frente: 'Por que o daltonismo é mais comum em homens?', verso: 'O gene está no X, e o homem tem só um X: uma cópia do alelo recessivo já basta.' },
  { tipo: 'regra', frente: 'Que cromossomo o pai passa para os filhos e para as filhas?', verso: 'O Y para os filhos, e o X para as filhas.' },
  { tipo: 'história', frente: 'Quem descobriu os grupos sanguíneos A, B e O?', verso: 'Karl Landsteiner, em 1901. Ganhou o Nobel em 1930.' },
  { tipo: 'história', frente: 'Que família real ficou famosa pela hemofilia?', verso: 'A da rainha Vitória, portadora do alelo, que o passou a famílias reais da Europa.' },
]

export default cartoes
