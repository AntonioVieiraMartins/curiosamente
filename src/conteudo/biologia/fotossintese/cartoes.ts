import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Fotossíntese (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é fotossíntese?', verso: 'Processo em que a planta usa luz, gás carbônico e água para fazer glicose e liberar oxigênio.' },
  { tipo: 'regra', frente: 'Qual é a equação da fotossíntese?', verso: '6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂.' },
  { tipo: 'definição', frente: 'O que é um ser autótrofo?', verso: 'O que fabrica o próprio alimento, como as plantas e as algas. Heterótrofo precisa comer outros seres.' },
  { tipo: 'regra', frente: 'Onde acontece a fotossíntese?', verso: 'Nos cloroplastos, que têm clorofila.' },
  { tipo: 'regra', frente: 'O que acontece na fase clara?', verso: 'Nos tilacoides: a luz é captada, a água é quebrada, sai O₂ e se formam ATP e NADPH.' },
  { tipo: 'regra', frente: 'O que acontece no ciclo de Calvin?', verso: 'No estroma: o CO₂ é preso e vira glicose, usando o ATP e o NADPH da fase clara.' },
  { tipo: 'por quê', frente: 'Por que as folhas são verdes?', verso: 'A clorofila absorve azul e vermelho e reflete o verde.' },
  { tipo: 'por quê', frente: 'De onde vem o oxigênio da fotossíntese?', verso: 'Da água (Ruben e Kamen, 1941), e não do gás carbônico.' },
  { tipo: 'conta', frente: 'Para fazer 3 glicoses, quanto CO₂, H₂O e O₂?', verso: '18 de CO₂, 18 de água e saem 18 de O₂ (6 de cada por glicose).' },
  { tipo: 'regra', frente: 'O que é fator limitante?', verso: 'O fator mais escasso, que manda na velocidade (luz, CO₂, temperatura ou água).' },
  { tipo: 'regra', frente: 'Para que servem os estômatos?', verso: 'Poros que trocam gases com o ar e controlam a perda de água.' },
  { tipo: 'regra', frente: 'O que a planta faz com a glicose?', verso: 'Respira (gasta), guarda como amido, constrói celulose e fabrica outros compostos.' },
  { tipo: 'história', frente: 'O que van Helmont mostrou com o salgueiro?', verso: 'Que a árvore ganha muita massa sem que a terra diminua quase nada (cerca de 1640).' },
  { tipo: 'história', frente: 'O que Priestley e Ingenhousz descobriram?', verso: 'Priestley (1771): a planta renova o ar da vela. Ingenhousz (1779): só com luz e nas partes verdes.' },
  { tipo: 'pegadinha', frente: 'A planta faz fotossíntese E respira?', verso: 'Sim. Respira sempre. De dia, a fotossíntese é maior, e sobra açúcar e oxigênio.' },
  { tipo: 'por quê', frente: 'Por que o oxigênio do ar existe?', verso: 'Cianobactérias, há cerca de 2,4 bilhões de anos, o soltaram em fotossínteses (Grande Evento de Oxigenação).' },
]

export default cartoes
