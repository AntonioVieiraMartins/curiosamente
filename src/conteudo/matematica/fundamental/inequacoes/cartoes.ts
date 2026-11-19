import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Inequações (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma inequação?', verso: 'Uma comparação com incógnita usando <, >, ≤ ou ≥. Em geral tem muitas soluções, uma região da reta.' },
  { tipo: 'regra', frente: 'O que significam ≤ e ≥?', verso: '≤ é menor ou igual a; ≥ é maior ou igual a. O número da borda também serve.' },
  { tipo: 'regra', frente: 'Como desenhar a borda na reta?', verso: 'Bolinha cheia quando a borda entra (≤, ≥). Bolinha vazia quando não entra (<, >).' },
  { tipo: 'conta', frente: 'Resolva x + 3 < 8.', verso: 'Tire 3 dos dois lados: x < 5. Somar ou subtrair não muda o sinal.' },
  { tipo: 'regra', frente: 'Quando o sinal da desigualdade vira?', verso: 'Ao multiplicar ou dividir os dois lados por um número negativo. Com positivo, fica igual.' },
  { tipo: 'conta', frente: 'Resolva −2x < 6.', verso: 'Divida por −2 e vire o sinal: x > −3.' },
  { tipo: 'por quê', frente: 'Por que o sinal vira com negativo?', verso: 'Multiplicar por negativo é como um espelho no zero: inverte a ordem. 3 < 7, mas −3 > −7.' },
  { tipo: 'conta', frente: 'Resolva 2x + 1 < 9.', verso: '2x < 8, então x < 4. O maior inteiro que serve é 3.' },
  { tipo: 'conta', frente: 'Resolva 5x − 3 > 2x + 9.', verso: '3x > 12, então x > 4.' },
  { tipo: 'regra', frente: 'Como traduzir "no máximo" e "pelo menos"?', verso: 'No máximo é ≤. Pelo menos é ≥. "Menos que" é <, "mais que" é >.' },
  { tipo: 'problema', frente: 'Pizza de R$ 28, R$ 100 no bolso: quantas, no máximo?', verso: '28p ≤ 100, p ≤ 3,57. Pizza é inteira: 3.' },
  { tipo: 'conta', frente: 'Quantos inteiros satisfazem 2 < x ≤ 5?', verso: '3, 4 e 5: são 3 números.' },
  { tipo: 'pegadinha', frente: 'Quantas soluções tem x + 1 < x?', verso: 'Nenhuma: sobra 1 < 0, falso. Já x + 1 > x vale para todo número.' },
  { tipo: 'regra', frente: 'Como conferir uma inequação?', verso: 'Teste um número da região da resposta na inequação original. Se ficar falso, há um erro.' },
  { tipo: 'história', frente: 'Quem criou os símbolos < e > e quem criou ≤ e ≥?', verso: 'Thomas Harriot (< e >, livro publicado em 1631) e Pierre Bouguer (a linha de ≤ e ≥, em 1734).' },
]

export default cartoes
