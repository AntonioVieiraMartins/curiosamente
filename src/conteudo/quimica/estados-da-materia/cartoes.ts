import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Estados da matéria (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Como são as partículas de um sólido?', verso: 'Juntas, em posições fixas, só vibrando. Forma e volume definidos.' },
  { tipo: 'definição', frente: 'Como são as partículas de um líquido?', verso: 'Juntas, mas escorregam umas sobre as outras. Volume definido; forma do recipiente.' },
  { tipo: 'definição', frente: 'Como são as partículas de um gás?', verso: 'Bem separadas e rápidas. Sem forma nem volume próprios: ocupam todo o recipiente.' },
  { tipo: 'regra', frente: 'Nomes das mudanças de estado?', verso: 'Fusão (S→L), solidificação (L→S), vaporização (L→G), condensação (G→L), sublimação (S→G), ressublimação (G→S).' },
  { tipo: 'regra', frente: 'Quais mudanças absorvem calor?', verso: 'Fusão, vaporização e sublimação. As inversas liberam calor.' },
  { tipo: 'conta', frente: 'A que temperaturas a água funde e ferve (nível do mar)?', verso: 'Funde a 0 °C e ferve a 100 °C.' },
  { tipo: 'pegadinha', frente: 'O que acontece com a temperatura da água fervendo se você aumenta o fogo?', verso: 'Continua em 100 °C. A água só ferve mais depressa.' },
  { tipo: 'por quê', frente: 'Por que a temperatura para durante a fusão e a ebulição?', verso: 'A energia recebida é usada para separar as partículas, e não para aumentar a agitação delas.' },
  { tipo: 'regra', frente: 'Por que a panela de pressão cozinha mais rápido?', verso: 'A pressão maior faz a água ferver perto de 120 °C, e a comida fica mais quente.' },
  { tipo: 'regra', frente: 'Por que a água ferve a menos de 100 °C em montanhas altas?', verso: 'A pressão do ar é menor. Em La Paz (cerca de 3.640 m) a água ferve perto de 88 °C.' },
  { tipo: 'conta', frente: 'Calor para fundir 1 g de gelo?', verso: 'Cerca de 334 J (calor latente de fusão).' },
  { tipo: 'conta', frente: 'Calor para vaporizar 1 g de água a 100 °C?', verso: 'Cerca de 2.260 J (calor latente de vaporização).' },
  { tipo: 'regra', frente: 'Fórmula do calor para aquecer sem mudar de estado?', verso: 'Q = m × c × ΔT. Para água líquida, c ≈ 4,18 J/g·°C.' },
  { tipo: 'definição', frente: 'O que é sublimação? Dê exemplos.', verso: 'Passagem direta de sólido para gás. Naftalina e gelo seco (CO₂).' },
  { tipo: 'pegadinha', frente: 'Evaporação e ebulição são a mesma coisa?', verso: 'Não. Evaporação é lenta, só na superfície e em qualquer temperatura. Ebulição é rápida, com bolhas, na temperatura de ebulição.' },
  { tipo: 'história', frente: 'Quem criou a escala Celsius, e como era no começo?', verso: 'Anders Celsius, em 1742. Era invertida: 0 era a ebulição e 100 o congelamento. Foi virada depois.' },
]

export default cartoes
