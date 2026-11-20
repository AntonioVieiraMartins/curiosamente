import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Respiração celular (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'regra', frente: 'Qual é a equação da respiração aeróbia?', verso: 'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energia (ATP e calor).' },
  { tipo: 'definição', frente: 'O que é ATP?', verso: 'A moeda de energia da célula. Vira ADP + fosfato quando gasta, e é recarregado pela respiração.' },
  { tipo: 'regra', frente: 'Quais as três etapas da respiração aeróbia?', verso: 'Glicólise (citoplasma), ciclo de Krebs (matriz) e cadeia respiratória (membrana interna).' },
  { tipo: 'conta', frente: 'Quantos ATP por etapa?', verso: 'Glicólise 2, Krebs 2 e cadeia respiratória cerca de 26. Total: cerca de 30 por glicose.' },
  { tipo: 'regra', frente: 'Qual o papel do oxigênio?', verso: 'É o aceptor final dos elétrons na cadeia respiratória, e vira água.' },
  { tipo: 'pegadinha', frente: 'De onde vem o CO₂ que soltamos?', verso: 'Do carbono da glicose, e não do oxigênio que respiramos.' },
  { tipo: 'regra', frente: 'O que é fermentação?', verso: 'Caminho sem oxigênio: só a glicólise funciona e rende 2 ATP. Pode ser láctica ou alcoólica.' },
  { tipo: 'regra', frente: 'Onde ocorre a fermentação láctica e a alcoólica?', verso: 'Láctica: músculo em esforço, bactérias do iogurte. Alcoólica: leveduras (pão, cerveja, etanol).' },
  { tipo: 'conta', frente: 'Quantas vezes a respiração rende mais ATP que a fermentação?', verso: 'Cerca de 15 vezes (30 contra 2).' },
  { tipo: 'regra', frente: 'Como é a mitocôndria?', verso: 'Duas membranas, a interna dobrada em cristas. Krebs na matriz, cadeia respiratória nas cristas. Tem DNA próprio.' },
  { tipo: 'conta', frente: 'Quantas kcal por grama tem cada nutriente?', verso: 'Carboidrato e proteína, cerca de 4. Gordura, cerca de 9.' },
  { tipo: 'por quê', frente: 'Por que o corpo recicla ATP?', verso: 'Guarda só uns 50 g, mas gasta e refaz o equivalente ao próprio peso por dia.' },
  { tipo: 'pegadinha', frente: 'O ácido lático causa a dor do dia seguinte?', verso: 'Não, é um mito. A dor tardia vem de microlesões nas fibras musculares.' },
  { tipo: 'história', frente: 'Quem comparou a respiração a uma combustão lenta?', verso: 'Antoine Lavoisier, por volta de 1780.' },
  { tipo: 'história', frente: 'Quem descobriu o ciclo de Krebs e o papel do ATP?', verso: 'Hans Krebs (1937) e Fritz Lipmann (1941). Os dois dividiram o Nobel de 1953.' },
  { tipo: 'por quê', frente: 'Por que herdamos o DNA mitocondrial da mãe?', verso: 'O óvulo dá quase todas as mitocôndrias ao embrião.' },
]

export default cartoes
