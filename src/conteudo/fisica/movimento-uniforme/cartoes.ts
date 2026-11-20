import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Movimento uniforme
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é movimento uniforme (MRU)?', verso: 'Movimento em linha reta com velocidade constante: distâncias iguais em tempos iguais.' },
  { tipo: 'conta', frente: 'Equação horária do MRU?', verso: 's = s₀ + v × t.' },
  { tipo: 'definição', frente: 'No MRU, o que significam s₀, v e t?', verso: 's₀ é a posição inicial, v a velocidade (constante) e t o tempo decorrido.' },
  { tipo: 'regra', frente: 'O que significa velocidade negativa?', verso: 'O corpo anda contra o sentido positivo da trajetória (movimento retrógrado). A posição diminui.' },
  { tipo: 'regra', frente: 'Que linha é o gráfico posição × tempo do MRU?', verso: 'Uma reta. A inclinação é a velocidade.' },
  { tipo: 'regra', frente: 'Gráfico s × t: o que é uma reta horizontal?', verso: 'Corpo parado (velocidade zero).' },
  { tipo: 'conta', frente: 'Como achar a velocidade num gráfico s × t?', verso: 'v = Δs ÷ Δt: variação da posição dividida pela variação do tempo.' },
  { tipo: 'regra', frente: 'Que linha é o gráfico v × t do MRU?', verso: 'Uma reta horizontal. A área debaixo dela é o deslocamento (v × t).' },
  { tipo: 'conta', frente: 'Tempo de uma viagem em MRU?', verso: 'tempo = distância ÷ velocidade.' },
  { tipo: 'regra', frente: 'Como resolver um encontro de dois corpos?', verso: 'Escreva as duas equações horárias, iguale s_A = s_B e ache o tempo.' },
  { tipo: 'problema', frente: 'Carros a 300 m, indo um ao encontro do outro, a 20 e 10 m/s: quando se encontram?', verso: 'Aproximação 30 m/s; 300 ÷ 30 = 10 s.' },
  { tipo: 'regra', frente: 'Que distância um trem percorre para atravessar um túnel?', verso: 'O comprimento do túnel mais o comprimento do trem.' },
  { tipo: 'regra', frente: 'Como calcular o tempo de uma ultrapassagem?', verso: '(soma dos comprimentos) ÷ (diferença das velocidades).' },
  { tipo: 'problema', frente: 'Raio visto e trovão ouvido 3 s depois: distância?', verso: '340 × 3 = 1.020 m, cerca de 1 km. Cada 3 s equivalem a cerca de 1 km.' },
  { tipo: 'por quê', frente: 'Por que Aristóteles errou sobre o movimento?', verso: 'Achava que o movimento exigia empurrão contínuo. O que freia o corpo é o atrito, e sem ele o movimento continua.' },
  { tipo: 'história', frente: 'O que diz a primeira lei de Newton (1687)?', verso: 'Sem força resultante, um corpo fica parado ou em movimento retilíneo uniforme.' },
]

export default cartoes
