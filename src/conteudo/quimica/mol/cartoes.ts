import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Mol e quantidade de matéria (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é 1 mol?', verso: 'Um grupo de 6,02 × 10²³ partículas (constante de Avogadro), como uma "dúzia gigante".' },
  { tipo: 'definição', frente: 'O que é massa molar?', verso: 'A massa de 1 mol, em g/mol. Átomo: número da massa atômica. Molécula: soma dos átomos da fórmula.' },
  { tipo: 'conta', frente: 'Massa molar da água e do CO₂?', verso: 'H₂O: 2 × 1 + 16 = 18 g/mol. CO₂: 12 + 2 × 16 = 44 g/mol.' },
  { tipo: 'conta', frente: 'Massa molar do NaCl e da glicose?', verso: 'NaCl: 23 + 35,5 = 58,5 g/mol. C₆H₁₂O₆: 72 + 12 + 96 = 180 g/mol.' },
  { tipo: 'regra', frente: 'Como achar o número de mols a partir da massa?', verso: 'n = m ÷ M (massa dividida pela massa molar).' },
  { tipo: 'regra', frente: 'Como achar o número de partículas a partir dos mols?', verso: 'Partículas = mol × 6,02 × 10²³.' },
  { tipo: 'conta', frente: 'Quantos mols há em 36 g de água?', verso: '36 ÷ 18 = 2 mol.' },
  { tipo: 'conta', frente: 'Qual a massa de 3 mol de CO₂?', verso: '3 × 44 = 132 g.' },
  { tipo: 'regra', frente: 'Qual o volume molar de um gás nas CNTP?', verso: 'Cerca de 22,4 L por mol (0 °C e 1 atm). A 25 °C, cerca de 24,5 L.' },
  { tipo: 'regra', frente: 'O que diz a hipótese de Avogadro?', verso: 'Volumes iguais de gases, na mesma temperatura e pressão, têm o mesmo número de moléculas.' },
  { tipo: 'pegadinha', frente: '1 mol de ferro e 1 mol de água têm o mesmo número de partículas?', verso: 'Sim: 6,02 × 10²³. Só a massa muda (56 g contra 18 g).' },
  { tipo: 'conta', frente: 'Quantos mols de H há em 3 mol de H₂O?', verso: '3 × 2 = 6 mol de H.' },
  { tipo: 'por quê', frente: 'Por que pesamos em vez de contar átomos?', verso: 'Contar 1 mol a 1 bilhão por segundo levaria milhões de anos. A massa molar liga peso e número de partículas.' },
  { tipo: 'história', frente: 'Quem fez a hipótese de Avogadro vingar e quando?', verso: 'Cannizzaro, no congresso de Karlsruhe, em 1860, 49 anos depois de Avogadro (1811).' },
  { tipo: 'história', frente: 'Quem batizou e mediu o número de Avogadro?', verso: 'Jean Perrin, em 1909 (Nobel de 1926). Em 2019, o valor foi fixado em 6,02214076 × 10²³.' },
]

export default cartoes
