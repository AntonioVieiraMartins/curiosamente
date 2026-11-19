import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Circunferência e Pi (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Qual a diferença entre circunferência e círculo?', verso: 'Circunferência é só a borda (a linha). Círculo é a região toda, com o interior.' },
  { tipo: 'definição', frente: 'O que são raio e diâmetro?', verso: 'Raio: do centro até a borda. Diâmetro: de borda a borda passando pelo centro (d = 2r).' },
  { tipo: 'definição', frente: 'O que é uma corda?', verso: 'Um segmento que liga dois pontos da circunferência. O diâmetro é a maior corda.' },
  { tipo: 'definição', frente: 'O que é o π?', verso: 'A razão entre o comprimento da circunferência e o seu diâmetro, igual em todo círculo (≈ 3,14).' },
  { tipo: 'regra', frente: 'Qual a fórmula do comprimento da circunferência?', verso: 'C = π × d = 2 × π × r.' },
  { tipo: 'regra', frente: 'Qual a fórmula da área do círculo?', verso: 'A = π × r² (raio ao quadrado).' },
  { tipo: 'conta', frente: 'Comprimento de uma circunferência de diâmetro 10 cm (π = 3,14)?', verso: '3,14 × 10 = 31,4 cm.' },
  { tipo: 'conta', frente: 'Área de um círculo de raio 10 cm (π = 3,14)?', verso: '3,14 × 100 = 314 cm².' },
  { tipo: 'pegadinha', frente: 'Erro comum na área do círculo?', verso: 'Usar o dobro do raio (2r) em vez do raio ao quadrado (r × r), ou usar o diâmetro no lugar do raio.' },
  { tipo: 'por quê', frente: 'Por que uma pizza de 40 cm tem 4 vezes a área de uma de 20 cm?', verso: 'A área usa r². Dobrar o raio multiplica a área por 2 × 2 = 4.' },
  { tipo: 'regra', frente: 'Como calcular o arco e o setor?', verso: 'Fração = ângulo ÷ 360. Arco = fração × 2πr. Setor = fração × πr².' },
  { tipo: 'conta', frente: 'Qual a fração do círculo de um setor de 120°?', verso: '120 ÷ 360 = 1/3.' },
  { tipo: 'definição', frente: 'O π é racional ou irracional?', verso: 'Irracional: as casas decimais nunca terminam e não se repetem (provado por Lambert em 1761).' },
  { tipo: 'história', frente: 'Quem prendeu o π entre 223/71 e 22/7?', verso: 'Arquimedes, por volta de 250 a.C., com polígonos de 96 lados.' },
  { tipo: 'história', frente: 'Quem deu a 355/113 como aproximação do π?', verso: 'Zu Chongzhi, na China, por volta do ano 480.' },
  { tipo: 'problema', frente: 'No experimento das agulhas de Buffon, qual a chance de cruzar (agulha do tamanho do espaçamento)?', verso: '2 ÷ π, cerca de 63,7%. Por isso π ≈ 2 × total ÷ cruzaram.' },
]

export default cartoes
