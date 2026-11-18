import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Logaritmo (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é um logaritmo?', verso: 'O expoente: a pergunta "elevado a quanto?". log₂ 32 = 5 porque 2⁵ = 32. É o inverso da exponencial.' },
  { tipo: 'conta', frente: 'Traduza 10³ = 1.000 e 3⁴ = 81 para logaritmos.', verso: 'log₁₀ 1.000 = 3 e log₃ 81 = 4. A mesma informação escrita de dois jeitos.' },
  { tipo: 'conta', frente: 'Quanto é log₂ 64?', verso: '6, porque 2⁶ = 64 (2, 4, 8, 16, 32, 64).' },
  { tipo: 'regra', frente: 'Qual é a propriedade do produto no logaritmo?', verso: 'log(a · b) = log a + log b: o produto vira soma, porque expoentes se somam quando se multiplicam potências de mesma base.' },
  { tipo: 'conta', frente: 'Calcule 8 × 16 usando log₂.', verso: 'log₂ 8 = 3 e log₂ 16 = 4; 3 + 4 = 7; 2⁷ = 128. Conferindo: 8 × 16 = 128.' },
  { tipo: 'por quê', frente: 'Por que a régua de cálculo funcionava?', verso: 'Ela usa escalas logarítmicas: deslizar uma escala sobre outra soma comprimentos, o que equivale a multiplicar números. Foi muito usada até os anos 1970.' },
  { tipo: 'conta', frente: 'Multiplique 20 × 30 com log₁₀ (log 2 ≈ 0,301; log 3 ≈ 0,477).', verso: 'log 20 ≈ 1,301 e log 30 ≈ 1,477. Soma ≈ 2,778, que é o log de 600. Confere: 20 × 30 = 600.' },
  { tipo: 'regra', frente: 'Como mudar de base e usar a calculadora para log₂ 1.000?', verso: 'log₂ 1.000 = log₁₀ 1.000 ÷ log₁₀ 2 = 3 ÷ 0,301 ≈ 9,97. Confere: 2¹⁰ = 1.024, pouco mais que 1.000.' },
  { tipo: 'por quê', frente: 'Por que a escala logarítmica é conveniente?', verso: 'Cada multiplicação por 10 é um passo igual. De 1 a 1.000.000 são só 7 marcas igualmente espaçadas, em vez de números colados perto do zero.' },
  { tipo: 'conta', frente: 'Um som de 60 dB é quantas vezes mais intenso que um de 30 dB?', verso: '1.000 vezes. Cada 10 dB multiplica a intensidade por 10 e 30 dB são 3 passos: 10 · 10 · 10.' },
  { tipo: 'regra', frente: 'Quais outras medidas usam escala logarítmica?', verso: 'Decibéis, a escala Richter e o pH. Cada passo na escala multiplica a grandeza por um fator fixo (como 10).' },
  { tipo: 'problema', frente: 'Quantos bits são necessários para distinguir 1.000 opções?', verso: '10 bits. 2⁹ = 512 é pouco e 2¹⁰ = 1.024 basta: é log₂ 1.000 arredondado para cima.' },
  { tipo: 'conta', frente: 'Resolva 2ˣ = 100.', verso: 'x = log₂ 100 = 2 ÷ 0,301 ≈ 6,64. Confere: está entre 2⁶ = 64 e 2⁷ = 128.' },
  { tipo: 'por quê', frente: 'Quando se usa logaritmo para resolver uma equação?', verso: 'Quando a incógnita está no expoente. O logaritmo "desfaz" a exponencial e traz o expoente para baixo.' },
  { tipo: 'história', frente: 'Quem publicou os logaritmos e quando? E quem fez a tabela de base 10?', verso: 'John Napier, em 1614, para simplificar cálculos. Henry Briggs compilou a primeira tabela de logaritmos comuns (base 10) em 1617.' },
  { tipo: 'história', frente: 'Qual foi o papel de Euler nos logaritmos?', verso: 'No século 18, ligou os logaritmos à função exponencial e introduziu a letra e (base do logaritmo natural).' },
]

export default cartoes
