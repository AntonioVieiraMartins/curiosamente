import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Movimento e referencial
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é movimento?', verso: 'Mudança de posição com o tempo, sempre em relação a um referencial.' },
  { tipo: 'definição', frente: 'O que é referencial?', verso: 'O corpo ou ponto usado como base para medir posição e movimento.' },
  { tipo: 'pegadinha', frente: 'Um passageiro sentado no ônibus em movimento está parado ou em movimento?', verso: 'Depende do referencial: parado em relação ao motorista, em movimento em relação ao poste.' },
  { tipo: 'definição', frente: 'O que é trajetória?', verso: 'O caminho desenhado por um corpo ao se mover. Também depende do referencial.' },
  { tipo: 'pegadinha', frente: 'Uma bola cai dentro de um trem em movimento uniforme. Qual a trajetória vista de dentro e da plataforma?', verso: 'De dentro, reta vertical. Da plataforma, uma curva (parábola).' },
  { tipo: 'definição', frente: 'O que é ponto material?', verso: 'Corpo cujo tamanho é desprezível no problema: só importa a posição.' },
  { tipo: 'definição', frente: 'O que é distância percorrida?', verso: 'O comprimento total do caminho andado. Soma tudo e nunca é negativa.' },
  { tipo: 'conta', frente: 'Fórmula do deslocamento?', verso: 'Δs = posição final − posição inicial. Pode ser positivo, negativo ou zero.' },
  { tipo: 'pegadinha', frente: 'Uma volta completa numa pista: qual o deslocamento?', verso: 'Zero, porque termina onde começou. A distância percorrida é o comprimento da pista.' },
  { tipo: 'conta', frente: 'Do km 20 ao km 75 e volta ao km 50: distância e deslocamento?', verso: 'Distância: 55 + 25 = 80 km. Deslocamento: 50 − 20 = 30 km.' },
  { tipo: 'regra', frente: 'Velocidade relativa no mesmo sentido?', verso: 'Subtrai as velocidades (80 e 60 km/h: aproximação de 20 km/h).' },
  { tipo: 'regra', frente: 'Velocidade relativa em sentidos opostos?', verso: 'Soma as velocidades (80 e 60 km/h: aproximação de 140 km/h).' },
  { tipo: 'problema', frente: 'Ciclistas a 80 km um do outro, a 15 e 25 km/h, indo um ao encontro do outro. Quando se encontram?', verso: 'Aproximação de 40 km/h; 80 ÷ 40 = 2 horas.' },
  { tipo: 'por quê', frente: 'Por que não sentimos a Terra girar e orbitar o Sol?', verso: 'Tudo em volta se move junto com a gente. Em relação à Terra, estamos em repouso.' },
  { tipo: 'história', frente: 'O que Galileu mostrou com o navio?', verso: 'Em movimento uniforme, nenhuma experiência dentro da cabine revela se o navio se move (1632).' },
  { tipo: 'história', frente: 'Quem propôs, em 1543, que a Terra gira em volta do Sol?', verso: 'Nicolau Copérnico.' },
]

export default cartoes
