import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Membrana e osmose (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'De que é feita a membrana plasmática?', verso: 'De uma bicamada de fosfolipídios, com proteínas e colesterol no meio (modelo do mosaico fluido).' },
  { tipo: 'regra', frente: 'O que é difusão?', verso: 'Movimento das partículas de onde há mais para onde há menos. Não gasta ATP.' },
  { tipo: 'regra', frente: 'O que é osmose?', verso: 'Passagem da água por uma membrana semipermeável, do lado com menos soluto para o lado com mais soluto.' },
  { tipo: 'definição', frente: 'Hipotônico, isotônico e hipertônico?', verso: 'Menos soluto, a mesma quantidade e mais soluto do que o outro lado.' },
  { tipo: 'regra', frente: 'O que acontece com a hemácia em água pura?', verso: 'A água entra, a célula incha e pode estourar (hemólise).' },
  { tipo: 'regra', frente: 'O que acontece com a hemácia num meio hipertônico?', verso: 'A água sai, e a célula murcha e enruga (crenação).' },
  { tipo: 'regra', frente: 'Por que a célula vegetal não estoura em água pura?', verso: 'Por causa da parede celular. Ela fica firme, o que se chama turgor.' },
  { tipo: 'regra', frente: 'Difusão simples e difusão facilitada?', verso: 'Simples: direto pela gordura (O₂, CO₂). Facilitada: por proteína, a favor do gradiente, sem ATP (glicose).' },
  { tipo: 'regra', frente: 'O que é transporte ativo?', verso: 'Movimento contra o gradiente de concentração, com gasto de ATP e uma proteína-bomba.' },
  { tipo: 'conta', frente: 'O que faz a bomba de sódio e potássio a cada ciclo?', verso: 'Joga 3 Na⁺ para fora, traz 2 K⁺ para dentro e gasta 1 ATP.' },
  { tipo: 'conta', frente: 'Quanto sal tem o soro fisiológico?', verso: '0,9 g em cada 100 mL (9 g por litro). É isotônico em relação às hemácias.' },
  { tipo: 'por quê', frente: 'Por que a difusão limita o tamanho das células?', verso: 'O tempo de difusão cresce com o quadrado da distância. Uma célula grande demais não receberia nutrientes no centro a tempo.' },
  { tipo: 'por quê', frente: 'Por que a salada murcha com sal?', verso: 'O sal por fora deixa o meio hipertônico, e a água sai das células por osmose.' },
  { tipo: 'por quê', frente: 'Por que o bacalhau salgado não estraga fácil?', verso: 'O sal puxa a água dos micróbios, que murcham e não crescem.' },
  { tipo: 'história', frente: 'Quem fez o experimento da bexiga de porco e quando?', verso: 'Jean-Antoine Nollet, em 1748. Dutrochet batizou o fenômeno de osmose em 1826.' },
  { tipo: 'pegadinha', frente: 'Beber água do mar mata a sede?', verso: 'Não. O sal puxa água das células por osmose e piora a desidratação.' },
]

export default cartoes
