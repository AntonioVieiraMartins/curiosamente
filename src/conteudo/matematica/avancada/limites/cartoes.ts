import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Limites e continuidade (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é o limite de f(x) quando x tende a a?', verso: 'O valor para o qual f(x) se aproxima quando x chega perto de a. Só importam os valores ao redor de a, não f(a).' },
  { tipo: 'por quê', frente: 'Um limite pode existir onde a função não existe?', verso: 'Pode. O limite olha só para os valores ao redor do ponto. Em (x² − 1) ÷ (x − 1), f(1) não existe, mas o limite em 1 é 2.' },
  { tipo: 'regra', frente: 'Quando o limite em um ponto existe, em termos de limites laterais?', verso: 'Quando os limites pela esquerda e pela direita existem e são iguais. Se discordam, o limite não existe.' },
  { tipo: 'regra', frente: 'Quais são as três condições para f ser contínua em a?', verso: 'f(a) existe, o limite de f em a existe e os dois são iguais. Falhou uma, há descontinuidade.' },
  { tipo: 'conta', frente: 'Calcule o limite de x² + 3x quando x tende a 2.', verso: 'Polinômio: basta substituir. 2² + 3 · 2 = 10.' },
  { tipo: 'conta', frente: 'Calcule o limite de (x² − 9) ÷ (x − 3) quando x tende a 3.', verso: 'Substituir dá 0 ÷ 0. Fatore: (x − 3)(x + 3) ÷ (x − 3) = x + 3, que perto de 3 vale 6.' },
  { tipo: 'regra', frente: 'O que fazer quando a substituição dá 0 ÷ 0?', verso: 'É forma indeterminada. Em geral, fatora-se e cancela-se o fator que zera, lembrando que x² − a² = (x − a)(x + a).' },
  { tipo: 'conta', frente: 'Calcule o limite de (x² + x − 6) ÷ (x − 2) quando x tende a 2.', verso: 'x² + x − 6 = (x + 3)(x − 2). Cancelando x − 2, sobra x + 3, que perto de 2 vale 5.' },
  { tipo: 'conta', frente: 'Calcule o limite de (3x + 5) ÷ x quando x tende ao infinito.', verso: 'Separe: 3 + 5 ÷ x. O termo 5 ÷ x vai a 0, e o limite é 3.' },
  { tipo: 'definição', frente: 'Quais são os três tipos de descontinuidade?', verso: 'Buraco (removível): o limite existe, mas f(a) falta. Salto: limites laterais diferentes. Infinita: a função explode perto do ponto.' },
  { tipo: 'definição', frente: 'Como funciona a definição de épsilon e delta?', verso: 'Para toda tolerância ε maior que zero, existe um δ maior que zero: se x está a menos de δ de a (sem ser a), então f(x) está a menos de ε de L.' },
  { tipo: 'conta', frente: 'Em f(x) = 2x + 1 perto de 3, qual δ serve para ε = 0,2?', verso: 'O erro de f é o dobro do erro de x, então δ = ε ÷ 2 = 0,1.' },
  { tipo: 'regra', frente: 'O que diz o teorema do valor intermediário?', verso: 'Se f é contínua em [a, b] e k está entre f(a) e f(b), algum c entre a e b tem f(c) = k. Se f troca de sinal, há uma raiz no intervalo.' },
  { tipo: 'por quê', frente: 'Como os limites resolvem o paradoxo de Aquiles e a tartaruga?', verso: 'Infinitos passos cada vez menores podem somar um total finito: 100 + 10 + 1 + 0,1 + ... tem limite 111,11... metros, e Aquiles passa a tartaruga ali.' },
  { tipo: 'conta', frente: 'Quanto é 1/2 + 1/4 + 1/8 + 1/16 + ... sem parar?', verso: 'O limite da soma é 1: cada pedaço é a metade do que falta, e nunca passa de 1.' },
  { tipo: 'história', frente: 'Quem fez o quê na definição de limite?', verso: 'Bolzano usou épsilon e delta em 1817, Cauchy tratou de limites em 1821 (Cours d’analyse), Weierstrass fixou a forma moderna em 1861 e Hardy criou a notação com a seta em 1908.' },
]

export default cartoes
