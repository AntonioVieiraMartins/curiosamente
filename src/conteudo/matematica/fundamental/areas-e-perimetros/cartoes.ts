import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Áreas e perímetros (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é perímetro?', verso: 'O comprimento do contorno de uma figura: a soma dos lados. Unidades de comprimento (cm, m).' },
  { tipo: 'definição', frente: 'O que é área?', verso: 'O tamanho da superfície dentro da figura. Unidades ao quadrado (cm², m²).' },
  { tipo: 'regra', frente: 'Perímetro e área do retângulo?', verso: 'P = 2 × (b + h). A = b × h.' },
  { tipo: 'regra', frente: 'Perímetro e área do quadrado de lado l?', verso: 'P = 4 × l. A = l × l.' },
  { tipo: 'regra', frente: 'Área do paralelogramo?', verso: 'Base × altura. A altura é medida na vertical, e não pelo lado inclinado.' },
  { tipo: 'regra', frente: 'Área do triângulo?', verso: '(base × altura) ÷ 2. É metade de um retângulo de mesma base e altura.' },
  { tipo: 'regra', frente: 'Área do losango?', verso: '(diagonal maior × diagonal menor) ÷ 2.' },
  { tipo: 'regra', frente: 'Área do trapézio?', verso: '(B + b) × h ÷ 2: a média das bases vezes a altura.' },
  { tipo: 'conta', frente: 'Quantos cm² tem 1 m²?', verso: '10.000 (100 × 100).' },
  { tipo: 'conta', frente: 'Quantos m² tem 1 hectare?', verso: '10.000 m² (quadrado de 100 m por 100 m).' },
  { tipo: 'pegadinha', frente: 'Por que 1 m² não é 100 cm²?', verso: 'Porque a área mede quadradinhos: 100 cm × 100 cm = 10.000 cm².' },
  { tipo: 'por quê', frente: 'Se o lado de um quadrado dobra, o que acontece com a área?', verso: 'Fica 4 vezes maior (2 × 2). Triplicando o lado, 9 vezes.' },
  { tipo: 'regra', frente: 'Como calcular uma figura composta?', verso: 'Decompor em figuras simples e somar, ou completar uma figura maior e subtrair o que falta.' },
  { tipo: 'pegadinha', frente: 'Mesmo perímetro, mesma área?', verso: 'Não. Com 24 m de cerca, um quadrado 6 × 6 tem 36 m² e um retângulo 1 × 11 tem só 11 m².' },
  { tipo: 'história', frente: 'Quem fez a lenda da pele de boi e qual problema ela inspirou?', verso: 'A princesa Dido, fundadora de Cartago. Inspirou o problema isoperimétrico: com perímetro fixo, o círculo tem a maior área.' },
  { tipo: 'conta', frente: 'Triângulo de base 12 e altura 5: área?', verso: '12 × 5 ÷ 2 = 30.' },
]

export default cartoes
