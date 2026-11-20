import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Queda livre
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é queda livre?', verso: 'Movimento de um corpo sob ação só da gravidade (sem resistência do ar). É um MUV com a = g.' },
  { tipo: 'conta', frente: 'Qual o valor de g na Terra?', verso: 'Cerca de 9,8 m/s² (10 m/s² nas contas rápidas).' },
  { tipo: 'regra', frente: 'Corpos pesados caem mais rápido que leves?', verso: 'Não, se não houver ar: todos têm a mesma aceleração. O ar é que atrasa a pena.' },
  { tipo: 'por quê', frente: 'Por que o corpo pesado não acelera mais, se a gravidade o puxa mais?', verso: 'Porque a massa maior também dá mais inércia. A força maior é compensada, e a aceleração é a mesma.' },
  { tipo: 'conta', frente: 'Velocidade na queda, partindo do repouso?', verso: 'v = g × t.' },
  { tipo: 'conta', frente: 'Altura caída, partindo do repouso?', verso: 'h = g × t² ÷ 2.' },
  { tipo: 'conta', frente: 'Velocidade ao chão, sem tempo?', verso: 'v² = 2 × g × h.' },
  { tipo: 'problema', frente: 'Pedra solta de 20 m (g = 10): tempo e velocidade?', verso: 't = 2 s e v = 20 m/s.' },
  { tipo: 'regra', frente: 'Que padrão Galileu viu nos trechos por segundo?', verso: 'Os trechos crescem como os números ímpares: 1, 3, 5, 7...' },
  { tipo: 'regra', frente: 'No topo de um lançamento vertical, quanto valem v e a?', verso: 'v = 0 e a = g, para baixo (a gravidade continua agindo).' },
  { tipo: 'conta', frente: 'Altura máxima de um lançamento vertical?', verso: 'h = v₀² ÷ (2g).' },
  { tipo: 'conta', frente: 'Tempo total no ar de um lançamento vertical?', verso: '2 × v₀ ÷ g (o dobro da subida).' },
  { tipo: 'definição', frente: 'O que é velocidade limite?', verso: 'Quando a força do ar iguala o peso, a aceleração zera e a velocidade para de crescer.' },
  { tipo: 'história', frente: 'O que aconteceu na Apollo 15 em 1971?', verso: 'O astronauta David Scott soltou um martelo e uma pena na Lua, e os dois caíram juntos.' },
  { tipo: 'por quê', frente: 'Por que astronautas flutuam na Estação Espacial?', verso: 'Porque estão em queda livre junto com a estação, em órbita. A gravidade lá ainda existe.' },
]

export default cartoes
