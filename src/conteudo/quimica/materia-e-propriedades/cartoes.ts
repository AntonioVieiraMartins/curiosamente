import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Matéria e suas propriedades (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é matéria?', verso: 'Tudo o que tem massa e ocupa lugar no espaço (volume).' },
  { tipo: 'definição', frente: 'O que é massa?', verso: 'A quantidade de matéria de um corpo. Medida em g ou kg, e não muda de lugar para lugar.' },
  { tipo: 'pegadinha', frente: 'Massa e peso são a mesma coisa?', verso: 'Não. Massa é quantidade de matéria; peso é a força da gravidade sobre ela. Na Lua o peso cai, a massa não.' },
  { tipo: 'conta', frente: 'Quantos cm³ tem 1 litro?', verso: '1.000 cm³ (1 L = 1 dm³ = 1.000 mL).' },
  { tipo: 'regra', frente: 'Volume de um bloco retangular?', verso: 'comprimento × largura × altura. Em um cubo: lado × lado × lado.' },
  { tipo: 'regra', frente: 'Como medir o volume de uma pedra irregular?', verso: 'Por deslocamento: coloque-a numa proveta com água e veja quanto o nível sobe.' },
  { tipo: 'definição', frente: 'Quais são as propriedades gerais da matéria?', verso: 'As que valem para qualquer matéria: massa, volume, inércia, divisibilidade.' },
  { tipo: 'definição', frente: 'O que são propriedades específicas?', verso: 'As que identificam cada substância: densidade, ponto de fusão, ponto de ebulição, dureza, solubilidade.' },
  { tipo: 'regra', frente: 'Fórmula da densidade?', verso: 'd = m ÷ V. Unidades comuns: g/cm³ (ou g/mL) e kg/m³.' },
  { tipo: 'conta', frente: 'Quantos kg/m³ vale 1 g/cm³?', verso: '1.000 kg/m³. A água tem 1 g/cm³, ou 1.000 kg/m³.' },
  { tipo: 'regra', frente: 'Quando um objeto boia num líquido?', verso: 'Quando a densidade do objeto é menor que a do líquido.' },
  { tipo: 'pegadinha', frente: 'Se cortar um bloco de ferro ao meio, a densidade muda?', verso: 'Não. A massa e o volume caem pela metade, e a divisão dá a mesma densidade.' },
  { tipo: 'por quê', frente: 'Por que o gelo boia na água?', verso: 'Ao congelar, a água ocupa cerca de 9% mais volume. A mesma massa em mais espaço dá densidade menor (0,92 contra 1,0).' },
  { tipo: 'conta', frente: 'Um bloco de 120 g ocupa 40 cm³. Qual a densidade?', verso: '120 ÷ 40 = 3 g/cm³.' },
  { tipo: 'conta', frente: 'Quanto pesam 50 cm³ de ferro (7,87 g/cm³)?', verso: '7,87 × 50 = 393,5 g.' },
  { tipo: 'história', frente: 'Qual é a lenda da coroa do rei Hierão e Arquimedes?', verso: 'Arquimedes teria usado o volume e a densidade para descobrir se a coroa era de ouro puro. É uma lenda, contada séculos depois.' },
]

export default cartoes
