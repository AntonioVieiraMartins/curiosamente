import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Teorema de Pitágoras (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que são catetos e hipotenusa?', verso: 'Em um triângulo retângulo (com um ângulo de 90°), os catetos são os dois lados que formam o ângulo reto e a hipotenusa é o lado oposto a ele, sempre o maior.' },
  { tipo: 'regra', frente: 'Qual é o enunciado do teorema de Pitágoras?', verso: 'a² + b² = c²: a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa. Vale só em triângulos retângulos.' },
  { tipo: 'conta', frente: 'Confirme o teorema no triângulo 3-4-5.', verso: '3² = 9 e 4² = 16; 9 + 16 = 25 = 5². As áreas dos quadrados dos catetos somam a do quadrado da hipotenusa.' },
  { tipo: 'regra', frente: 'Como achar a hipotenusa e como achar um cateto?', verso: 'Hipotenusa: c = √(a² + b²). Cateto: subtraia, a² = c² − b².' },
  { tipo: 'conta', frente: 'Qual é a diagonal de um retângulo de 9 cm por 12 cm?', verso: '15 cm. c² = 81 + 144 = 225 e √225 = 15.' },
  { tipo: 'problema', frente: 'Uma escada de 5 m tem o pé a 3 m da parede. Que altura ela alcança?', verso: '4 m. h² = 5² − 3² = 25 − 9 = 16, então h = 4.' },
  { tipo: 'conta', frente: 'Estime √20.', verso: 'Entre 4 e 5, porque 4² = 16 e 5² = 25. Um pouco mais perto de 16: cerca de 4,5 (o real é ≈ 4,47).' },
  { tipo: 'regra', frente: 'Como saber se um triângulo é retângulo pelos lados?', verso: 'O inverso vale: se a² + b² = c² (com c o maior lado), é retângulo. 7, 24, 25: 49 + 576 = 625 = 25².' },
  { tipo: 'definição', frente: 'O que são ternos pitagóricos? Dê quatro.', verso: 'Trios de números inteiros que cumprem a² + b² = c²: 3-4-5, 5-12-13, 8-15-17 e 7-24-25.' },
  { tipo: 'problema', frente: 'Qual a polegada de uma tela de 40 cm por 30 cm?', verso: 'A diagonal é √(1.600 + 900) = 50 cm, ou 50 ÷ 2,54 ≈ 19,7 polegadas: "uma tela de 20 polegadas".' },
  { tipo: 'conta', frente: 'Qual é a distância entre (1, 2) e (4, 6)?', verso: '5. Diferenças 3 e 4: d² = 9 + 16 = 25. É o triângulo 3-4-5 de novo.' },
  { tipo: 'pegadinha', frente: 'Quais são os erros comuns com o teorema?', verso: 'Somar os lados em vez dos quadrados (a + b = c está errado), esquecer a raiz no final, usá-lo em triângulo que não é retângulo e trocar a hipotenusa por um cateto.' },
  { tipo: 'pegadinha', frente: 'Triângulo com lados 5, 13 e 12: quem é a hipotenusa?', verso: '13, o maior lado. Confere: 5² + 12² = 25 + 144 = 169 = 13².' },
  { tipo: 'história', frente: 'Quem já conhecia o teorema antes de Pitágoras?', verso: 'Os babilônios (tábua Plimpton 322, c. 1800 a.C.), os egípcios (Papiro de Berlim) e, na Índia, o Sulba Sutra. Na China ele se chama Gougu.' },
  { tipo: 'história', frente: 'Quem deu a mais antiga prova axiomática e o que se sabe de Pitágoras?', verso: 'Euclides, nos Elementos (Livro I, Proposição 47), por volta de 300 a.C. Pitágoras nasceu c. 570 a.C., mas nenhum texto grego dos cinco séculos seguintes lhe atribui explicitamente o teorema.' },
]

export default cartoes
