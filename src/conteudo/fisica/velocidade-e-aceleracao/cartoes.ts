import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Velocidade e aceleração
const cartoes: CartaoPronto[] = [
  { tipo: 'conta', frente: 'Fórmula da velocidade média?', verso: 'vm = espaço percorrido ÷ tempo gasto (Δs ÷ Δt).' },
  { tipo: 'conta', frente: 'Como passar de km/h para m/s?', verso: 'Divida por 3,6.' },
  { tipo: 'conta', frente: 'Como passar de m/s para km/h?', verso: 'Multiplique por 3,6.' },
  { tipo: 'conta', frente: '72 km/h em m/s?', verso: '72 ÷ 3,6 = 20 m/s.' },
  { tipo: 'definição', frente: 'O que é velocidade instantânea?', verso: 'A velocidade num instante (a do velocímetro), e não a média de uma viagem.' },
  { tipo: 'pegadinha', frente: 'Ida a 60 km/h e volta a 120 km/h pelo mesmo caminho: velocidade média?', verso: '80 km/h, e não 90. O carro passa mais tempo na parte lenta.' },
  { tipo: 'por quê', frente: 'Por que a média das velocidades engana?', verso: 'Porque a velocidade média é espaço ÷ tempo, e o tempo gasto no trecho lento é maior.' },
  { tipo: 'conta', frente: 'Fórmula da aceleração média?', verso: 'a = variação da velocidade ÷ tempo (Δv ÷ Δt).' },
  { tipo: 'definição', frente: 'Unidade de aceleração no SI?', verso: 'm/s² (metros por segundo, por segundo).' },
  { tipo: 'definição', frente: 'O que significa 2 m/s²?', verso: 'A velocidade muda 2 m/s a cada segundo.' },
  { tipo: 'regra', frente: 'Frear é aceleração?', verso: 'Sim: aceleração negativa, porque a velocidade diminui.' },
  { tipo: 'conta', frente: 'Velocidade com aceleração constante?', verso: 'v = v₀ + a × t.' },
  { tipo: 'problema', frente: 'Carro de 0 a 20 m/s em 5 s: aceleração?', verso: '20 ÷ 5 = 4 m/s².' },
  { tipo: 'por quê', frente: 'Por que o corpo vai para a frente quando o carro freia?', verso: 'Inércia: o corpo tende a manter a velocidade que tinha.' },
  { tipo: 'pegadinha', frente: 'Num avião a 900 km/h constantes, o que sentimos?', verso: 'Nada: sentimos a mudança de velocidade (aceleração), e não a velocidade.' },
  { tipo: 'história', frente: 'Como Galileu estudou a aceleração?', verso: 'Rolando bolas por rampas e medindo o tempo com um relógio de água (início de 1600, publicado em 1638).' },
]

export default cartoes
