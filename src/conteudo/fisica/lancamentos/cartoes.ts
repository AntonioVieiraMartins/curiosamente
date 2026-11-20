import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Lançamentos
const cartoes: CartaoPronto[] = [
  { tipo: 'regra', frente: 'O que é a independência dos movimentos?', verso: 'Horizontal e vertical acontecem juntos sem se atrapalhar. O tempo é o que liga os dois.' },
  { tipo: 'regra', frente: 'Como é o movimento horizontal de um projétil (sem ar)?', verso: 'Uniforme (MRU): velocidade constante.' },
  { tipo: 'regra', frente: 'Como é o movimento vertical de um projétil?', verso: 'Uniformemente variado, com aceleração g para baixo.' },
  { tipo: 'regra', frente: 'Qual a forma da trajetória de um projétil sem ar?', verso: 'Uma parábola.' },
  { tipo: 'regra', frente: 'Bola lançada na horizontal e bola solta, da mesma altura: quem chega antes?', verso: 'Chegam juntas. O tempo de queda só depende da altura.' },
  { tipo: 'conta', frente: 'Tempo de queda no lançamento horizontal?', verso: 't = √(2h ÷ g).' },
  { tipo: 'conta', frente: 'Alcance no lançamento horizontal?', verso: 'x = v × t, com t o tempo de queda.' },
  { tipo: 'conta', frente: 'Como decompor a velocidade num lançamento oblíquo?', verso: 'vₓ = v·cos θ e v_y = v·sen θ.' },
  { tipo: 'conta', frente: 'Tempo de subida e altura máxima?', verso: 't = v_y ÷ g e h = v_y² ÷ (2g).' },
  { tipo: 'conta', frente: 'Tempo total no ar e alcance?', verso: 'Tempo total = 2 × tempo de subida. Alcance = vₓ × tempo total.' },
  { tipo: 'regra', frente: 'Qual a velocidade no ponto mais alto?', verso: 'Só a horizontal: vₓ. A vertical vale zero, mas a aceleração continua g.' },
  { tipo: 'conta', frente: 'Fórmula do alcance (mesma altura)?', verso: 'v² × sen(2θ) ÷ g.' },
  { tipo: 'regra', frente: 'Que ângulo dá o maior alcance?', verso: '45° (sem ar). Ângulos que somam 90° dão o mesmo alcance.' },
  { tipo: 'problema', frente: 'Bola lançada a 20 m/s, a 45°, g = 10. Alcance?', verso: '400 ÷ 10 = 40 m.' },
  { tipo: 'história', frente: 'O que Tartaglia e Galileu descobriram?', verso: 'Tartaglia (1537): 45° dá o maior alcance. Galileu (1638): a trajetória é uma parábola.' },
]

export default cartoes
