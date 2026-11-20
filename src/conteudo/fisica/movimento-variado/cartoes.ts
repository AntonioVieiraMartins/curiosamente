import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Movimento uniformemente variado
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é movimento uniformemente variado (MUV)?', verso: 'Movimento com aceleração constante: a velocidade muda sempre na mesma quantidade por segundo.' },
  { tipo: 'conta', frente: 'Como se calcula a aceleração?', verso: 'a = Δv ÷ Δt, em m/s².' },
  { tipo: 'conta', frente: 'Equação da velocidade no MUV?', verso: 'v = v₀ + a × t.' },
  { tipo: 'conta', frente: 'Equação da posição no MUV?', verso: 's = s₀ + v₀·t + a·t² ÷ 2.' },
  { tipo: 'regra', frente: 'O que significa aceleração negativa?', verso: 'A velocidade diminui (se o corpo anda no sentido positivo): é frear.' },
  { tipo: 'regra', frente: 'Que linha é o gráfico v × t do MUV?', verso: 'Uma reta inclinada. A inclinação é a aceleração; a área debaixo é o deslocamento.' },
  { tipo: 'regra', frente: 'Que curva é o gráfico s × t do MUV?', verso: 'Uma parábola. A inclinação em cada ponto é a velocidade naquele instante.' },
  { tipo: 'conta', frente: 'Velocidade média no MUV?', verso: 'vm = (v₀ + v) ÷ 2. Só vale quando a aceleração é constante.' },
  { tipo: 'conta', frente: 'Equação de Torricelli?', verso: 'v² = v₀² + 2·a·Δs. Não precisa do tempo.' },
  { tipo: 'problema', frente: 'Carro a 20 m/s freia a 5 m/s². Distância até parar?', verso: '0 = 400 − 10·Δs, então Δs = 40 m.' },
  { tipo: 'regra', frente: 'Distância total de parada de um carro?', verso: 'Distância de reação (v × t, MRU) mais distância de freada (v² ÷ 2a, MUV).' },
  { tipo: 'por quê', frente: 'Por que dobrar a velocidade quadruplica a freada?', verso: 'Porque a distância de freada é proporcional a v².' },
  { tipo: 'problema', frente: 'Do repouso com a = 2 m/s²: distância em 10 s?', verso: 's = 2 × 100 ÷ 2 = 100 m.' },
  { tipo: 'história', frente: 'Que padrão Galileu achou com a bola na rampa?', verso: 'Em tempos iguais, as distâncias crescem como os números ímpares: 1, 3, 5, 7. Total: 1, 4, 9, 16 (quadrado do tempo).' },
  { tipo: 'história', frente: 'Quem foi Torricelli?', verso: 'Aluno de Galileu. Dá nome à equação que liga velocidades, aceleração e distância sem usar o tempo.' },
]

export default cartoes
