import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Função afim (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Qual é a forma geral da função afim e o que significam a e b?', verso: 'f(x) = a x + b. O b é onde a reta cruza o eixo y (o ponto de partida). O a é a inclinação: a cada passo de 1 para a direita, a reta sobe a.' },
  { tipo: 'regra', frente: 'Como o sinal de a muda a reta?', verso: 'Com a positivo, a reta sobe da esquerda para a direita. Com a negativo, ela desce.' },
  { tipo: 'conta', frente: 'Leia f(x) = 2x + 1: onde ela cruza o eixo y e quais são os pontos seguintes?', verso: 'Cruza em (0, 1). A cada passo para a direita sobe 2: (1, 3), (2, 5), (3, 7).' },
  { tipo: 'problema', frente: 'p(x) = 6 + 2,5x é o preço de uma corrida. O que são 6 e 2,5? Quanto custam 8 e 10 km?', verso: '6 é a bandeirada (p(0)) e 2,5 é o preço por km (o ritmo constante). p(8) = 26 e p(10) = 31: 2 km a mais custam 5 reais.' },
  { tipo: 'regra', frente: 'Como achar a inclinação a por dois pontos?', verso: 'a = variação vertical ÷ variação horizontal. Para (1, 3) e (4, 9): (9 - 3)/(4 - 1) = 6/3 = 2.' },
  { tipo: 'conta', frente: 'Ache a função cuja reta passa por (1, 3) e (4, 9).', verso: 'a = 2 e b = 3 - 2 · 1 = 1, logo f(x) = 2x + 1. Confira: f(4) = 9.' },
  { tipo: 'definição', frente: 'O que é a raiz de uma função afim e como achá-la?', verso: 'É o x em que f(x) = 0 (onde a reta cruza o eixo x): x = -b/a. Em 2x - 4 = 0, x = 2.' },
  { tipo: 'regra', frente: 'Como estudar o sinal de f(x) = 2x - 4?', verso: 'Raiz em x = 2. Como a = 2 > 0, f é negativa para x < 2 (f(0) = -4) e positiva para x > 2 (f(5) = 6).' },
  { tipo: 'conta', frente: 'Duas corridas: A cobra 6 + 2,5x e B cobra 3,5x. Quando empatam e qual compensa?', verso: 'Em 6 km (6 + 2,5x = 3,5x → x = 6, ambas dão 21). Abaixo de 6 km, B compensa (3 km: 10,50 contra 13,50). Acima, A compensa (10 km: 31 contra 35).' },
  { tipo: 'por quê', frente: 'O cruzamento de duas retas é o quê, matematicamente?', verso: 'A solução de um sistema de duas equações: o ponto em que as duas funções dão o mesmo valor.' },
  { tipo: 'regra', frente: 'Que fórmula combina com a reta que cruza o eixo y em 3, desce e passa por (3, 0)?', verso: 'b = 3, a é negativo e 0 = a · 3 + 3 dá a = -1: f(x) = -x + 3.' },
  { tipo: 'pegadinha', frente: 'f(x) = 3x é proporcional e g(x) = 3x + 2 não é. Por quê?', verso: 'Em f, dobrar x dobra y (f(2) = 6, f(4) = 12). Em g, g(1) = 5 e g(2) = 8, e não 10: o b ≠ 0 atrapalha a proporção.' },
  { tipo: 'regra', frente: 'O que é um ritmo constante?', verso: 'Variar a mesma quantidade em y para cada passo igual em x. É o a da função afim: p sobe 2,5 a cada km.' },
  { tipo: 'história', frente: 'Quem publicou a ideia de localizar pontos por pares de números e quando?', verso: 'René Descartes, em 1637. Fermat a descobriu de modo independente, mas não publicou. Nicole Oresme, no século 14, já usava construções parecidas.' },
  { tipo: 'história', frente: 'Quando a letra m apareceu para a inclinação?', verso: 'Em 1844, em inglês, na forma y = mx + b, num livro de O\'Brien.' },
]

export default cartoes
