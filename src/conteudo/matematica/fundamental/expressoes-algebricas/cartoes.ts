import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Letras na matemática (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma variável?', verso: 'Uma letra no lugar de um número que pode mudar. Permite escrever regras gerais, como P = 4l.' },
  { tipo: 'definição', frente: 'O que é uma expressão algébrica, um termo e um coeficiente?', verso: 'Expressão: conta com letras. Termo: cada pedaço separado por mais ou menos. Coeficiente: o número colado na letra (o 2 de 2n).' },
  { tipo: 'pegadinha', frente: 'Se n = 4, quanto vale 3n?', verso: '12, porque 3n é 3 × n. Não é 34: letra colada em número é multiplicação.' },
  { tipo: 'regra', frente: 'Como calcular o valor numérico de uma expressão?', verso: 'Troque a letra pelo número e calcule, com a multiplicação antes da soma.' },
  { tipo: 'conta', frente: 'Quanto vale 3n + 2 com n = 4?', verso: '3 × 4 + 2 = 12 + 2 = 14.' },
  { tipo: 'conta', frente: 'Traduza: o dobro de um número, mais 7.', verso: '2n + 7. Com n = 6, dá 19.' },
  { tipo: 'regra', frente: 'O que são termos semelhantes e como se juntam?', verso: 'Têm a mesma parte de letras. Soma-se o coeficiente: 3x + 4x = 7x.' },
  { tipo: 'conta', frente: 'Simplifique 5a + 2b + 3a − b.', verso: '8a + b. Junta os a e junta os b, mas a e b não se misturam.' },
  { tipo: 'regra', frente: 'O que diz a propriedade distributiva?', verso: 'O número de fora multiplica cada termo de dentro: 2(n + 3) = 2n + 6.' },
  { tipo: 'pegadinha', frente: 'Por que 2(n + 3) não é 2n + 3?', verso: 'O 2 precisa multiplicar também o 3. Teste n = 1: 2 × 4 = 8, mas 2 × 1 + 3 = 5.' },
  { tipo: 'definição', frente: 'Quando duas expressões são equivalentes?', verso: 'Quando dão o mesmo valor para qualquer valor da letra. Um valor que as separe prova que não são.' },
  { tipo: 'pegadinha', frente: 'n + n é igual a n × n?', verso: 'Não. n + n = 2n e n × n = n². Só coincidem em n = 2.' },
  { tipo: 'problema', frente: 'Quantos palitos formam uma fila de n quadrados?', verso: '3n + 1. Um quadrado usa 4, dois usam 7, três usam 10. Com n = 10, são 31 palitos.' },
  { tipo: 'regra', frente: 'Como achar um erro numa simplificação?', verso: 'Teste um número fácil nas duas expressões. Se derem valores diferentes, não são equivalentes.' },
  { tipo: 'história', frente: 'Quem passou a usar letras para valores conhecidos e desconhecidos, e quem fixou x, y, z?', verso: 'Viète (1591) usou letras para os dois. Descartes (1637) fixou x, y, z para o desconhecido e a, b, c para o conhecido.' },
]

export default cartoes
