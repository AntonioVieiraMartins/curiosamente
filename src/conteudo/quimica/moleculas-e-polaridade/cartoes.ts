import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Moléculas e polaridade (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Quando uma molécula é polar?', verso: 'Quando tem ligações polares e uma forma em que os puxões dos elétrons não se anulam (H₂O, NH₃, HCl).' },
  { tipo: 'pegadinha', frente: 'O CO₂ tem ligações polares. A molécula é polar?', verso: 'Não. É linear e os dois puxões se anulam. Também CCl₄ é apolar.' },
  { tipo: 'regra', frente: 'Quais as formas moleculares mais comuns (VSEPR)?', verso: 'CO₂ linear (180°), CH₄ tetraédrica (109,5°), NH₃ piramidal (107°), H₂O angular (104,5°).' },
  { tipo: 'regra', frente: 'O que diz a regra "semelhante dissolve semelhante"?', verso: 'Polar dissolve polar e apolar dissolve apolar.' },
  { tipo: 'regra', frente: 'Quais as três forças intermoleculares?', verso: 'London (todas, as mais fracas), dipolo-dipolo (polares) e ligação de hidrogênio (H com F, O ou N).' },
  { tipo: 'regra', frente: 'Quando existe a ligação de hidrogênio?', verso: 'Quando um H ligado a F, O ou N é atraído por F, O ou N de outra molécula.' },
  { tipo: 'conta', frente: 'Qual a diferença entre os pontos de ebulição da água e do metano?', verso: '100 − (−162) = 262 °C, por causa das ligações de hidrogênio na água.' },
  { tipo: 'por quê', frente: 'Por que óleo e água não se misturam?', verso: 'A água é polar e se abraça com ligações de hidrogênio. O óleo é apolar e fica de fora.' },
  { tipo: 'regra', frente: 'Como o sabão remove gordura?', verso: 'A cauda apolar entra na gordura e a cabeça polar fica na água. Formam-se micelas que a água leva embora.' },
  { tipo: 'por quê', frente: 'Por que o gelo boia?', verso: 'A rede de ligações de hidrogênio abre espaço vazio: o gelo é cerca de 9% menos denso (0,92 g/cm³).' },
  { tipo: 'conta', frente: '1.000 mL de água congelam. Quanto de gelo?', verso: 'Cerca de 1.090 mL (aumento de uns 9%).' },
  { tipo: 'regra', frente: 'Quais propriedades especiais a água tem?', verso: 'Solvente, ponto de ebulição alto, calor específico alto, tensão superficial e gelo menos denso.' },
  { tipo: 'regra', frente: 'Por que o álcool se mistura com a água?', verso: 'Tem um grupo O–H polar e uma cauda curta apolar, então forma ligações de hidrogênio com a água.' },
  { tipo: 'história', frente: 'Quem descreveu a ligação de hidrogênio e quando?', verso: 'Latimer e Rodebush, em 1920.' },
  { tipo: 'história', frente: 'Quem explicou as forças entre moléculas apolares?', verso: 'Fritz London, em 1930. Van der Waals já havia proposto forças fracas entre moléculas em 1873.' },
]

export default cartoes
