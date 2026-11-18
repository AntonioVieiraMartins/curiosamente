import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Exponencial (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma função exponencial e o que a diferencia da linear?', verso: 'f(x) = bˣ: a variável está no expoente. Na linear soma-se o mesmo valor a cada passo; na exponencial multiplica-se pelo mesmo fator.' },
  { tipo: 'conta', frente: 'Se f(x) = 2ˣ, quanto são f(0), f(3), f(10), f(-1) e f(-2)?', verso: 'f(0) = 1; f(3) = 8; f(10) = 1.024; f(-1) = 1/2; f(-2) = 1/4. Cada vez que x aumenta 1, f(x) dobra.' },
  { tipo: 'por quê', frente: 'Por que f(0) = 1 em qualquer exponencial?', verso: 'Porque qualquer número não nulo elevado a 0 vale 1. Todos os gráficos cruzam o eixo y em (0, 1).' },
  { tipo: 'regra', frente: 'Quando a exponencial cresce e quando decai?', verso: 'Cresce se a base b é maior que 1 (2ˣ). Decai se b está entre 0 e 1 ((1/2)ˣ). Nenhuma chega a 0 nem fica negativa.' },
  { tipo: 'regra', frente: 'Como se relacionam os gráficos de 2ˣ e (1/2)ˣ?', verso: 'São espelhos em relação ao eixo y, porque (1/2)ˣ = 2⁻ˣ.' },
  { tipo: 'conta', frente: 'Bactéria que dobra a cada 10 minutos, partindo de 1: quantas em 1 h e em 2 h?', verso: '1 h são 6 intervalos: 2⁶ = 64. 2 h são 12 intervalos: 2¹² = 4.096. Dobrar o tempo multiplicou por 64.' },
  { tipo: 'regra', frente: 'Qual é o fator dos juros compostos e a fórmula?', verso: 'Fator b = 1 + taxa. Após t períodos: x(t) = x₀ · bᵗ. Com 10% ao ano, b = 1,1.' },
  { tipo: 'conta', frente: 'R$ 1.000 a 10% ao ano, juros compostos: quanto em 1, 2 e 3 anos?', verso: '1.100; 1.210; 1.331. Cada ano rende 10% do valor do ano anterior, por isso cresce cada vez mais.' },
  { tipo: 'conta', frente: 'Dívida de R$ 1.000 a 12% ao mês: quanto em 3 meses e qual a diferença para juros simples?', verso: 'Fator 1,12: 1.120; 1.254,40; ≈ 1.404,93. Juros simples dariam 1.360. A diferença (≈ R$ 44,93) vem de juros sobre juros.' },
  { tipo: 'regra', frente: 'O que é a regra do 70?', verso: 'Para estimar em quanto tempo algo dobra, divida 70 pela taxa em %. A 7% ao ano: 70 ÷ 7 = 10 anos (1,07¹⁰ ≈ 1,967: é aproximada).' },
  { tipo: 'pegadinha', frente: 'Plano A soma 10 por dia e plano B dobra por dia (começando em 1). Quem vence em 10 e em 20 dias?', verso: 'Em 10 dias: A = 100 e B = 1.024. Em 20 dias: A = 200 e B = 1.048.576. O exponencial sempre vence no fim.' },
  { tipo: 'conta', frente: 'No xadrez com grãos dobrando, quantos há na casa 11 e quantos no total até ela?', verso: 'Casa n tem 2ⁿ⁻¹ grãos: casa 11 tem 2¹⁰ = 1.024. Total até a casa 11: 2¹¹ - 1 = 2.047.' },
  { tipo: 'problema', frente: 'Um lago cobre-se por inteiro no dia 30 e a área dobra por dia. Quanto estava coberto no dia 27?', verso: '12,5% (um oitavo): 2²⁷⁻³⁰ = 2⁻³. Faltam 3 dias, mas só 1/8 está coberto: o começo lento engana.' },
  { tipo: 'conta', frente: '100 g de uma substância caem pela metade a cada 3 horas. Quanto resta em 9 h?', verso: '12,5 g: 100 · (1/2)³ = 100/8. Nunca chega a zero: sempre sobra a metade da metade.' },
  { tipo: 'história', frente: 'O que Verhulst propôs em 1845?', verso: 'O modelo de crescimento logístico: o crescimento desacelera ao encontrar limites (o exponencial puro não dura para sempre).' },
  { tipo: 'história', frente: 'Que lenda ilustra o poder da duplicação?', verso: 'A dos grãos de arroz no tabuleiro de xadrez: passa de um milhão de grãos já na casa 21.' },
]

export default cartoes
