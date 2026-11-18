import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Formas geométricas (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Qual é a diferença entre figura plana e sólido geométrico?', verso: 'Figuras planas têm 2 dimensões (quadrado, círculo, triângulo). Sólidos têm 3 (cubo, esfera, cone, cilindro): ocupam espaço.' },
  { tipo: 'definição', frente: 'O que é um polígono?', verso: 'Uma figura plana formada por segmentos de reta ligados que fecham um contorno. Tem tantos lados quanto vértices e ângulos.' },
  { tipo: 'pegadinha', frente: 'Um círculo é um polígono? Quantos lados tem?', verso: 'Não: é curvo, e polígonos só têm lados retos. Não tem lados. Um polígono com muitos lados só se parece com um círculo.' },
  { tipo: 'regra', frente: 'Como se chamam os polígonos de 3 a 8 lados?', verso: '3 triângulo, 4 quadrilátero, 5 pentágono, 6 hexágono, 7 heptágono, 8 octógono (prefixos gregos + gono).' },
  { tipo: 'definição', frente: 'O que é um polígono regular?', verso: 'Todos os lados iguais e todos os ângulos iguais (como o quadrado e o triângulo equilátero).' },
  { tipo: 'conta', frente: 'Perímetro de um hexágono regular de lado 7 cm e de um triângulo equilátero de lado 9 cm?', verso: '6 × 7 = 42 cm e 3 × 9 = 27 cm.' },
  { tipo: 'regra', frente: 'Qual é a soma dos ângulos internos de um polígono de n lados?', verso: '(n − 2) × 180°, porque se divide em n − 2 triângulos. Triângulo 180°, quadrilátero 360°, pentágono 540°.' },
  { tipo: 'definição', frente: 'O que diferencia polígono convexo e côncavo?', verso: 'Convexo: todos os ângulos internos menores que 180° (uma reta o corta em dois pontos). Côncavo: pelo menos um ângulo maior que 180° (tem uma dobra para dentro).' },
  { tipo: 'regra', frente: 'Como se classificam os triângulos pelos lados?', verso: 'Equilátero (3 lados iguais), isósceles (2 iguais) e escaleno (3 diferentes).' },
  { tipo: 'regra', frente: 'Quando três segmentos fecham um triângulo?', verso: 'Quando o maior é menor que a soma dos outros dois. 3, 4, 5 forma (5 < 7); 2, 3, 9 não forma (9 > 5).' },
  { tipo: 'regra', frente: 'Quais são as três pistas para nomear um quadrilátero?', verso: 'Quantos pares de lados paralelos, se os 4 lados são iguais e se os 4 ângulos são retos.' },
  { tipo: 'regra', frente: 'Como são quadrado, retângulo, losango, paralelogramo e trapézio?', verso: 'Quadrado: 2 pares paralelos, 4 lados iguais, 4 retos. Retângulo: 2 pares e 4 retos. Losango: 2 pares e 4 lados iguais. Paralelogramo: 2 pares. Trapézio: só 1 par.' },
  { tipo: 'pegadinha', frente: 'Todo quadrado é retângulo? E todo retângulo é quadrado?', verso: 'Todo quadrado é retângulo (e losango). Nem todo retângulo é quadrado: lados vizinhos podem ser diferentes.' },
  { tipo: 'definição', frente: 'O que são centro, raio e diâmetro?', verso: 'Centro: ponto à mesma distância de todos os pontos da circunferência. Raio: essa distância. Diâmetro: segmento pelo centro ligando dois pontos: diâmetro = 2 × raio.' },
  { tipo: 'conta', frente: 'Raio de 8 cm: qual o diâmetro? Diâmetro de 10 cm: qual o raio?', verso: '16 cm (2 × 8) e 5 cm (10 ÷ 2).' },
  { tipo: 'regra', frente: 'O que é um eixo de simetria e quantos têm quadrado, triângulo equilátero, retângulo e círculo?', verso: 'Linha que divide a figura em duas metades que se encaixam ao dobrar. Quadrado 4, triângulo equilátero 3, retângulo 2, círculo infinitos.' },
  { tipo: 'conta', frente: 'Quantas faces, arestas e vértices tem um cubo? E confira Euler.', verso: '6 faces, 12 arestas, 8 vértices. V − A + F = 8 − 12 + 6 = 2.' },
  { tipo: 'regra', frente: 'O que é um poliedro e quais sólidos não são?', verso: 'Sólido só com faces planas (cubo, pirâmide, prisma). Cilindro, cone e esfera têm superfície curva e não são poliedros. Nos poliedros V − A + F = 2.' },
  { tipo: 'conta', frente: 'Quantas faces tem uma pirâmide de base quadrada? E um cilindro tem quantas faces planas?', verso: 'Pirâmide: 5 (1 base e 4 triângulos). Cilindro: 2 faces planas (as bases) e 1 superfície curva.' },
  { tipo: 'história', frente: 'De onde vem a palavra geometria e quem organizou a geometria grega?', verso: 'Do grego, "medir a terra". Euclides a organizou nos Elementos, por volta de 300 a.C.' },
  { tipo: 'história', frente: 'O que se sabe sobre o pentagrama e os polígonos não convexos na história?', verso: 'Um pentagrama aparece num vaso grego (krater) do século 7 a.C. O primeiro estudo sistemático de polígonos não convexos é do século 14, de Thomas Bradwardine.' },
]

export default cartoes
