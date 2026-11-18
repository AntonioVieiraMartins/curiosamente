import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Múltiplos e divisores (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Qual é a diferença entre múltiplo e divisor?', verso: 'Múltiplos são os números das tabuadas (saltos de n em n). Divisores repartem sem deixar resto. 12 é múltiplo de 3 e 3 é divisor de 12.' },
  { tipo: 'conta', frente: 'Quais são os divisores de 18?', verso: '1, 2, 3, 6, 9 e 18. Todo número tem o 1 e ele mesmo; quem só tem esses dois é primo.' },
  { tipo: 'pegadinha', frente: 'O zero é múltiplo de algum número? E o 1 e o próprio número entram nos divisores?', verso: 'Zero é múltiplo de todo número. E 1 e o próprio número sempre entram na lista de divisores (erro comum esquecê-los).' },
  { tipo: 'regra', frente: 'Quais são os critérios de divisibilidade por 2, 5 e 10?', verso: 'Por 2: termina em 0, 2, 4, 6 ou 8. Por 5: termina em 0 ou 5. Por 10: termina em 0.' },
  { tipo: 'regra', frente: 'Quais são os critérios por 3, 9, 4 e 6?', verso: '3 e 9: a soma dos algarismos é divisível por 3 ou por 9. 4: os dois últimos algarismos formam número divisível por 4. 6: divisível por 2 e por 3.' },
  { tipo: 'conta', frente: '1.296 é divisível por 3, 9 e 4?', verso: 'Sim aos três. 1 + 2 + 9 + 6 = 18 (divide por 3 e por 9) e 96 ÷ 4 = 24.' },
  { tipo: 'definição', frente: 'O que é o MMC e quando se usa?', verso: 'O menor múltiplo comum: o primeiro encontro das listas de múltiplos. Usa-se para "quando de novo?" e para somar frações.' },
  { tipo: 'conta', frente: 'Qual é o MMC de 6 e 8?', verso: '24. Múltiplos de 6: 6, 12, 18, 24; de 8: 8, 16, 24. O primeiro em comum é 24.' },
  { tipo: 'definição', frente: 'O que é o MDC e quando se usa?', verso: 'O maior divisor comum. Usa-se para "pedaços iguais, os maiores possíveis" (maior ladrilho sem cortes) e para simplificar frações.' },
  { tipo: 'conta', frente: 'Qual é o MDC de 12 e 18?', verso: '6. Divisores comuns: 1, 2, 3 e 6; o maior é 6.' },
  { tipo: 'conta', frente: 'Decomponha 60 em fatores primos.', verso: '2² × 3 × 5. Divida por 2 duas vezes (30, 15), depois por 3 e fica 5.' },
  { tipo: 'regra', frente: 'Como achar MDC e MMC pelos fatores primos?', verso: 'MDC: fatores comuns com o menor expoente. MMC: todos os fatores com o maior expoente. E MDC × MMC = a × b.' },
  { tipo: 'conta', frente: 'MDC e MMC de 150 e 210.', verso: '150 = 2 × 3 × 5² e 210 = 2 × 3 × 5 × 7. MDC = 2 × 3 × 5 = 30 e MMC = 2 × 3 × 5² × 7 = 1.050.' },
  { tipo: 'regra', frente: 'Como funciona o algoritmo de Euclides?', verso: 'Divida, olhe o resto e repita com o divisor e o resto, até o resto ser zero. O último divisor é o MDC.' },
  { tipo: 'conta', frente: 'MDC de 48 e 18 por Euclides.', verso: '48 ÷ 18 = 2, resto 12; 18 ÷ 12 = 1, resto 6; 12 ÷ 6 = 2, resto 0. MDC = 6.' },
  { tipo: 'pegadinha', frente: 'Duas luzes piscam a cada 6 e 8 segundos. Elas coincidem no 14?', verso: 'Não: MMC não é somar. Coincidem no MMC(6, 8) = 24.' },
  { tipo: 'história', frente: 'O que Euclides descreveu por volta de 300 a.C.?', verso: 'Nos Elementos, o método para achar o MDC (cobrindo um terreno com quadrados cada vez menores). É um dos algoritmos mais antigos ainda em uso, hoje dentro de computadores.' },
]

export default cartoes
