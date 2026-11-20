import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Geometria analítica (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é a geometria analítica?', verso: 'Estudar figuras do plano com coordenadas e equações: pontos viram pares (x, y) e retas e círculos viram equações.' },
  { tipo: 'regra', frente: 'Distância entre A(x₁, y₁) e B(x₂, y₂)?', verso: 'd = √((x₂ − x₁)² + (y₂ − y₁)²). É Pitágoras com os catetos dx e dy.' },
  { tipo: 'conta', frente: 'Distância entre (0, 0) e (6, 8)?', verso: '√(36 + 64) = √100 = 10.' },
  { tipo: 'regra', frente: 'Ponto médio de A e B?', verso: 'M = ((x₁ + x₂) ÷ 2 ; (y₁ + y₂) ÷ 2): a média de cada coordenada.' },
  { tipo: 'regra', frente: 'Inclinação (coeficiente angular) entre dois pontos?', verso: 'm = (y₂ − y₁) ÷ (x₂ − x₁): quanto sobe dividido por quanto anda para o lado.' },
  { tipo: 'pegadinha', frente: 'Qual a inclinação de uma reta vertical?', verso: 'Não existe: x₂ − x₁ = 0 e não dá para dividir por zero.' },
  { tipo: 'regra', frente: 'Equação reduzida da reta?', verso: 'y = m·x + n. m é a inclinação e n é onde a reta corta o eixo y.' },
  { tipo: 'regra', frente: 'Equação da reta com ponto (x₀, y₀) e inclinação m?', verso: 'y − y₀ = m · (x − x₀).' },
  { tipo: 'regra', frente: 'Quando duas retas são paralelas?', verso: 'Quando têm a mesma inclinação (m₁ = m₂) e cortes diferentes.' },
  { tipo: 'regra', frente: 'Quando duas retas são perpendiculares?', verso: 'Quando m₁ × m₂ = −1, ou seja, m₂ = −1 ÷ m₁.' },
  { tipo: 'conta', frente: 'Onde y = 2x + 1 e y = −x + 7 se cruzam?', verso: 'Igualando: 2x + 1 = −x + 7, x = 2 e y = 5. Ponto (2; 5).' },
  { tipo: 'regra', frente: 'Distância do ponto (x₀, y₀) à reta ax + by + c = 0?', verso: 'd = |a·x₀ + b·y₀ + c| ÷ √(a² + b²).' },
  { tipo: 'regra', frente: 'Equação da circunferência de centro (a, b) e raio r?', verso: '(x − a)² + (y − b)² = r².' },
  { tipo: 'conta', frente: 'Triângulo (0,0), (4,0), (0,3): qual a área?', verso: '|0 + 4 · 3 + 0| ÷ 2 = 6.' },
  { tipo: 'história', frente: 'Quem publicou La Géométrie e quando?', verso: 'René Descartes, em 1637. Fermat chegou a ideias parecidas na mesma época.' },
  { tipo: 'por quê', frente: 'Por que o produto das inclinações perpendiculares é −1?', verso: 'Girar uma reta 90° troca subida e passo lateral e inverte um dos sinais: (a ÷ b) vira (−b ÷ a).' },
]

export default cartoes
