import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Números primos (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é um número primo e o que é composto?', verso: 'Primo tem exatamente dois divisores (1 e ele mesmo). Composto tem mais de dois. O 1 não é nem um nem outro.' },
  { tipo: 'pegadinha', frente: 'O 1 é primo? E o 2?', verso: 'O 1 não é primo (tem um só divisor). O 2 é primo e é o único primo par.' },
  { tipo: 'pegadinha', frente: 'Todo número ímpar é primo?', verso: 'Falso: 9, 15, 21, 25 e 27 são ímpares e compostos.' },
  { tipo: 'regra', frente: 'Como funciona a peneira de Eratóstenes?', verso: 'Risque os múltiplos de cada primo (2, 3, 5...); o que sobra é primo.' },
  { tipo: 'regra', frente: 'Até onde basta testar para saber se um número é primo?', verso: 'Dividir pelos primos até a raiz do número. Não precisa chegar à metade.' },
  { tipo: 'conta', frente: '97 é primo? Mostre o teste.', verso: 'Sim. A raiz fica entre 9 e 10, testa-se até 9: não é par, a soma dos algarismos (16) não dá 3, não termina em 0 ou 5, e 97 ÷ 7 deixa resto 6.' },
  { tipo: 'regra', frente: 'O que diz o teorema fundamental da aritmética?', verso: 'Todo número (maior que 1) é um produto de primos, de um único jeito. Os primos são os átomos dos números.' },
  { tipo: 'conta', frente: 'Decomponha 84 em fatores primos.', verso: '2² × 3 × 7 (84 ÷ 2 = 42, ÷ 2 = 21, ÷ 3 = 7).' },
  { tipo: 'conta', frente: 'Quantos divisores tem 60?', verso: '12. 60 = 2² × 3 × 5; somando 1 aos expoentes: 3 × 2 × 2 = 12.' },
  { tipo: 'conta', frente: 'Simplifique 36/60 usando primos.', verso: '3/5. 36 = 2 × 2 × 3 × 3 e 60 = 2 × 2 × 3 × 5; corte os dois 2 e um 3.' },
  { tipo: 'por quê', frente: 'Como Euclides mostrou que os primos nunca acabam?', verso: 'Multiplique todos os primos da lista e some 1: o resultado traz sempre um fator primo fora da lista. Ex.: 30.031 = 59 × 509, e 59 e 509 não estavam na lista.' },
  { tipo: 'pegadinha', frente: '2 × 3 × 5 × 7 × 11 × 13 + 1 = 30.031 é primo?', verso: 'Não: é 59 × 509. Mas esses fatores não estavam na lista, então a lista estava incompleta.' },
  { tipo: 'por quê', frente: 'Para que servem primos na segurança?', verso: 'Multiplicar primos é fácil e desfazer a multiplicação é difícil. É a base do RSA (anos 1970).' },
  { tipo: 'regra', frente: 'Como os primos ajudam com frações e MMC/MDC?', verso: 'Simplificar é cortar os primos que se repetem em cima e embaixo. MDC e MMC saem das decomposições.' },
  { tipo: 'história', frente: 'Quem inventou a peneira e quem a registrou primeiro?', verso: 'Eratóstenes, no século III a.C. Nicômaco de Gerasa a registrou no início do século II (a referência mais antiga que se conhece).' },
  { tipo: 'história', frente: 'O que mudou em 1951 na caça a primos?', verso: 'Desde então, todos os maiores primos conhecidos foram achados com computadores.' },
]

export default cartoes
