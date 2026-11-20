import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Lógica e proposições (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma proposição?', verso: 'Uma frase que pode ser julgada verdadeira ou falsa, mas só uma das duas. Perguntas, ordens e sentenças abertas (x + 1 = 5) não são.' },
  { tipo: 'regra', frente: 'Quando P ∧ Q (e) é verdadeira?', verso: 'Só quando P e Q são as duas verdadeiras (1 linha de 4).' },
  { tipo: 'regra', frente: 'Quando P ∨ Q (ou) é verdadeira?', verso: 'Quando pelo menos uma é verdadeira (3 linhas de 4). Só é falsa se as duas forem falsas.' },
  { tipo: 'regra', frente: 'O que faz a negação ¬P?', verso: 'Troca o valor: se P é V, ¬P é F, e vice-versa.' },
  { tipo: 'regra', frente: 'Quando P → Q (se... então) é falsa?', verso: 'Só quando P é verdadeira e Q é falsa: a promessa é quebrada.' },
  { tipo: 'pegadinha', frente: 'P é falsa. O que dá P → Q?', verso: 'Verdadeira, seja qual for Q. A promessa não foi testada, então não foi quebrada.' },
  { tipo: 'regra', frente: 'Quando P ↔ Q (se, e somente se) é verdadeira?', verso: 'Quando P e Q têm o mesmo valor (as duas V ou as duas F).' },
  { tipo: 'conta', frente: 'Quantas linhas tem a tabela-verdade de n proposições?', verso: '2ⁿ. Com 3 proposições, 8 linhas.' },
  { tipo: 'regra', frente: 'Qual é a contrapositiva de P → Q?', verso: '¬Q → ¬P. É equivalente à frase original: as duas sempre têm o mesmo valor.' },
  { tipo: 'pegadinha', frente: 'A recíproca (Q → P) é equivalente a P → Q?', verso: 'Não. "Se chove, a rua molha" não garante que "se a rua molha, choveu".' },
  { tipo: 'regra', frente: 'Como negar P → Q?', verso: 'P ∧ ¬Q: P acontece e Q não. Exemplo: "estudo e não passo".' },
  { tipo: 'regra', frente: 'Leis de De Morgan?', verso: '¬(P ∧ Q) = ¬P ∨ ¬Q  e  ¬(P ∨ Q) = ¬P ∧ ¬Q. Negar troca e por ou.' },
  { tipo: 'regra', frente: 'Como negar "Todo A é B"?', verso: '"Existe A que não é B". Basta um contraexemplo.' },
  { tipo: 'regra', frente: 'O que é tautologia e o que é contradição?', verso: 'Tautologia é sempre verdadeira (P ∨ ¬P). Contradição é sempre falsa (P ∧ ¬P).' },
  { tipo: 'pegadinha', frente: 'Se P → Q e Q são verdadeiras, dá para concluir P?', verso: 'Não. É a falácia de afirmar o consequente. A rua pode molhar sem chuva.' },
  { tipo: 'história', frente: 'Quem criou a álgebra de 0 e 1 da lógica, e quem a ligou aos circuitos?', verso: 'George Boole (1847 e 1854) criou a álgebra. Claude Shannon, em 1937, mostrou que ela descreve circuitos de chaves.' },
]

export default cartoes
