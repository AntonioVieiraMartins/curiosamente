import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Triângulos e polígonos (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é um polígono?', verso: 'Figura plana fechada formada só por segmentos de reta (lados) que se encontram nos vértices.' },
  { tipo: 'definição', frente: 'Quando um polígono é regular?', verso: 'Quando tem todos os lados iguais e todos os ângulos iguais.' },
  { tipo: 'regra', frente: 'Qual a condição para três lados formarem um triângulo?', verso: 'Cada lado precisa ser menor que a soma dos outros dois (desigualdade triangular).' },
  { tipo: 'pegadinha', frente: 'Existe triângulo de lados 4, 5 e 9?', verso: 'Não. 4 + 5 = 9, que não é maior que 9: os lados só encostam, sem fechar.' },
  { tipo: 'definição', frente: 'Como classificar triângulos pelos lados?', verso: 'Equilátero (3 iguais), isósceles (2 iguais), escaleno (3 diferentes).' },
  { tipo: 'definição', frente: 'Como classificar triângulos pelos ângulos?', verso: 'Acutângulo (todos agudos), retângulo (um reto), obtusângulo (um obtuso).' },
  { tipo: 'regra', frente: 'Quanto somam os ângulos internos de um triângulo?', verso: '180°.' },
  { tipo: 'por quê', frente: 'Por que o triângulo é usado em pontes e telhados?', verso: 'É rígido: com 3 barras presas, a forma não deforma.' },
  { tipo: 'regra', frente: 'Quanto somam os ângulos de um quadrilátero?', verso: '360° (dois triângulos).' },
  { tipo: 'definição', frente: 'O que é um quadrado, em relação ao retângulo e ao losango?', verso: 'É retângulo (4 ângulos retos) e losango (4 lados iguais) ao mesmo tempo.' },
  { tipo: 'regra', frente: 'Qual a fórmula da soma dos ângulos internos de um polígono de n lados?', verso: '(n − 2) × 180°.' },
  { tipo: 'regra', frente: 'Qual a fórmula do número de diagonais?', verso: 'n × (n − 3) ÷ 2.' },
  { tipo: 'conta', frente: 'Quantas diagonais tem um octógono?', verso: '8 × 5 ÷ 2 = 20.' },
  { tipo: 'conta', frente: 'Quanto mede o ângulo interno de um pentágono regular?', verso: '(5 − 2) × 180° ÷ 5 = 108°.' },
  { tipo: 'regra', frente: 'Qual o ângulo externo de um polígono regular de n lados?', verso: '360° ÷ n. Interno + externo = 180°.' },
  { tipo: 'por quê', frente: 'Por que só triângulo, quadrado e hexágono regulares ladrilham o plano?', verso: 'Porque o ângulo interno de cada um divide 360° exatamente (60°, 90° e 120°).' },
  { tipo: 'história', frente: 'Quem provou em 1999 que o hexágono é a divisão mais econômica?', verso: 'Thomas Hales, resolvendo a conjectura do favo de mel que vinha desde Papo de Alexandria.' },
]

export default cartoes
