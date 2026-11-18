import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Medidas (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é medir e quais são as três grandezas básicas da cápsula?', verso: 'Comparar com uma unidade combinada. Comprimento (metro), massa (grama e quilograma) e capacidade (litro).' },
  { tipo: 'regra', frente: 'Quais são os prefixos do sistema métrico e o que valem?', verso: 'Quilo 1.000, hecto 100, deca 10, deci 0,1, centi 0,01 e mili 0,001. Valem para qualquer unidade.' },
  { tipo: 'regra', frente: 'Como converter entre unidades do sistema métrico?', verso: 'Andando com a vírgula, porque cada degrau vale 10 vezes o vizinho. Para uma unidade menor o número cresce; para uma maior, diminui.' },
  { tipo: 'conta', frente: 'Quantos metros são 2,5 km? E quantos metros são 450 cm?', verso: '2.500 m (× 1.000) e 4,5 m (÷ 100).' },
  { tipo: 'conta', frente: 'Quantos mL cabem num cubo de 10 cm de lado?', verso: '1.000 mL, ou 1 litro: 10 × 10 × 10 = 1.000 cm³ e 1 cm³ = 1 mL.' },
  { tipo: 'regra', frente: 'Qual é a relação entre litro, decímetro cúbico, mL e cm³?', verso: '1 L = 1 dm³ = 1.000 mL = 1.000 cm³. 1 mL = 1 cm³.' },
  { tipo: 'regra', frente: 'Quanto pesa 1 litro de água?', verso: 'Quase exatamente 1 quilo (o quilograma foi criado a partir de 1 litro de água). Vale para água, não para óleo ou mel.' },
  { tipo: 'regra', frente: 'Quais são as relações de massa: t, kg, g e mg?', verso: '1 t = 1.000 kg; 1 kg = 1.000 g; 1 g = 1.000 mg.' },
  { tipo: 'conta', frente: 'Uma garrafa de 2 L enche copos de 250 mL. Quantos copos?', verso: '8. Passe para mL (2.000) e divida por 250.' },
  { tipo: 'regra', frente: 'Posso somar 1,2 m com 35 cm direto?', verso: 'Não: converta para a mesma unidade. 120 cm + 35 cm = 155 cm.' },
  { tipo: 'regra', frente: 'Que referências ajudam a estimar medidas?', verso: 'Largura de um dedo ≈ 1 cm; passo de adulto ≈ 70 a 80 cm; porta ≈ 2 m. 10 passos de 0,7 m são 7 m.' },
  { tipo: 'definição', frente: 'O que é perímetro e qual a fórmula no retângulo e no quadrado?', verso: 'A volta da figura: a soma de todos os lados, em unidades de comprimento. Retângulo: 2 × (largura + altura). Quadrado: 4 × lado.' },
  { tipo: 'definição', frente: 'O que é área e como se calcula num retângulo?', verso: 'A superfície coberta, contada em quadradinhos de 1 unidade de lado (m²). Retângulo: largura × altura. Quadrado: lado × lado.' },
  { tipo: 'conta', frente: 'Retângulo de 12 m por 8 m: qual o perímetro e a área?', verso: 'Perímetro 2 × (12 + 8) = 40 m. Área 12 × 8 = 96 m².' },
  { tipo: 'pegadinha', frente: 'Um retângulo de 1 × 9 e um de 5 × 5 têm o mesmo perímetro. E a área?', verso: 'Perímetros iguais (20 m), mas áreas diferentes: 9 m² contra 25 m². Com a mesma cerca, o quadrado cobre mais chão.' },
  { tipo: 'problema', frente: 'Rodapé e piso de uma sala de 5 m por 4 m: quanto de cada?', verso: 'Rodapé é perímetro: 2 × (5 + 4) = 18 m. Piso é área: 5 × 4 = 20 m².' },
  { tipo: 'pegadinha', frente: 'Quantos cm² tem 1 m²? E volume, de m³ para L?', verso: '10.000 cm² (100 × 100): a área anda de 100 em 100. Volume anda de 1.000 em 1.000: 1 m³ = 1.000 L.' },
  { tipo: 'história', frente: 'Como o metro foi definido em 1791 e quem criou o sistema métrico?', verso: 'Um décimo de milionésimo da distância do Equador ao Polo Norte, passando por Paris. O sistema foi pensado por Antoine e Anne-Marie Lavoisier (anos 1780), proposto por Talleyrand em 1790 e entrou em vigor na França em 1799.' },
  { tipo: 'história', frente: 'Quando nasceu o litro e quando surgiu o SI?', verso: 'O litro nasceu em 1795 (um decímetro cúbico) e voltou a ser exatamente isso em 1964; o L maiúsculo foi aceito em 1979. O SI foi anunciado em 1960.' },
]

export default cartoes
