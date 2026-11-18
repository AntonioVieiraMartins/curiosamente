import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Tempo e horas (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'regra', frente: 'Quais são as relações entre hora, minuto, segundo e dia?', verso: '1 h = 60 min; 1 min = 60 s; 1 h = 3.600 s; 1 dia = 24 h = 1.440 min = 86.400 s. O tempo anda na base 60 (e 24), e não de 10 em 10.' },
  { tipo: 'por quê', frente: 'Por que a hora tem 60 minutos?', verso: 'A base 60 vem da astronomia babilônica (medievais como al-Biruni e Sacrobosco dividiram a hora em 60 minutos de 60 segundos). O 60 tem 12 divisores, então meia hora, terço, quarto e quinto dão números inteiros.' },
  { tipo: 'regra', frente: 'Quantos graus anda cada ponteiro por minuto e por hora?', verso: 'Minutos: 6° por minuto (360° em 60 min). Horas: 30° por hora (360° em 12 h) e mais 0,5° por minuto, porque o ponteiro das horas também anda.' },
  { tipo: 'regra', frente: 'Como somar tempos como 1 h 45 min + 2 h 35 min?', verso: 'Some os minutos: 45 + 35 = 80 = 1 h 20. Escreva 20 e vai 1 hora (o "vai um" vale 60). Horas: 1 + 2 + 1 = 4. Resultado: 4 h 20 min.' },
  { tipo: 'regra', frente: 'Como subtrair tempos quando faltam minutos?', verso: 'Empreste 1 hora (= 60 min). 5 h 20 − 2 h 45: 4 h e 80 min menos 2 h 45 = 2 h 35. Confira: 2 h 35 + 2 h 45 = 5 h 20.' },
  { tipo: 'conta', frente: 'Quantos minutos são 2 h 15 min? E 7.200 segundos em minutos?', verso: '135 min (2 × 60 + 15). 7.200 ÷ 60 = 120 min (2 horas).' },
  { tipo: 'conta', frente: 'Transforme 5.000 segundos em horas, minutos e segundos.', verso: '1 h 23 min 20 s. 5.000 ÷ 60 = 83 min e sobram 20 s; 83 min = 1 h e 23 min. Confere: 3.600 + 1.380 + 20 = 5.000.' },
  { tipo: 'regra', frente: 'Como calcular a duração entre duas horas?', verso: 'Conte para a frente: até a hora cheia, depois as horas inteiras, depois os minutos finais. 7h40 a 11h15: 20 min + 3 h + 15 min = 3 h 35.' },
  { tipo: 'conta', frente: 'Um filme começa às 14h50 e dura 2 h 30 min. Quando termina?', verso: '17h20 (14h50 + 2 h = 16h50; mais 30 min). Não existe 16h80.' },
  { tipo: 'pegadinha', frente: '2,5 horas são 2 h 50 min?', verso: 'Não: 0,5 hora é meia hora, 30 min. 2,5 h = 2 h 30 min = 150 min.' },
  { tipo: 'regra', frente: 'Como passar do relógio de 24 horas para o de 12?', verso: 'Depois do meio-dia, subtraia 12: 15h = 3 da tarde, 21h30 = 9h30 da noite. O de 24 horas numera de 0 a 23. Ao contrário, some 12: 8 da noite = 20h.' },
  { tipo: 'regra', frente: 'Quais são as unidades do calendário?', verso: 'Semana 7 dias; ano 365 dias (366 no bissexto, por volta de cada 4 anos); década 10 anos; século 100 anos; milênio 1.000 anos.' },
  { tipo: 'conta', frente: 'Hoje é segunda: que dia da semana será daqui a 23 dias?', verso: 'Quarta-feira. 23 = 3 × 7 + 2: depois de 7 dias volta ao mesmo dia, então só contam os 2 dias que sobram. Vale o resto da divisão por 7.' },
  { tipo: 'regra', frente: 'O que é um fuso horário e qual é o de Brasília?', verso: 'Uma área que adota um mesmo horário padrão, descrita pela diferença para o UTC (de UTC−12 a UTC+14). Brasília é UTC−3; a maior parte do Amazonas é UTC−4 e o Acre, UTC−5.' },
  { tipo: 'conta', frente: 'Em Brasília são 12h. Que horas são em Manaus e em Tóquio (UTC+9)?', verso: 'Manaus: 11h (−4 − (−3) = −1). Tóquio: 9 − (−3) = 12 h à frente, então 0h do dia seguinte.' },
  { tipo: 'regra', frente: 'Qual é a exceção de fusos com meia hora e o horário de verão?', verso: 'Índia (UTC+5:30) e Nepal usam 30 ou 45 minutos a mais. No horário de verão, algumas regiões adiantam 1 hora (a ilha Lord Howe adianta só 30 minutos).' },
  { tipo: 'problema', frente: 'Uma viagem de 180 km a 60 km/h leva quanto tempo? Se sai às 8h20, chega quando?', verso: '3 h (180 ÷ 60). Chega às 11h20.' },
  { tipo: 'história', frente: 'Como era a hora antes dos relógios mecânicos?', verso: 'Sazonal: um doze avos do dia ou da noite, então mudava de tamanho com a estação e a latitude. Os egípcios dividiram a noite em 12 partes (c. 2150 a.C.). Os relógios mecânicos criaram a hora de tamanho fixo.' },
  { tipo: 'história', frente: 'Quem provavelmente dividiu o dia em 24 horas e como a hora é definida hoje?', verso: 'Hiparco de Niceia, provavelmente. Hoje a hora é definida pelo segundo físico (atômico), separada da rotação da Terra: 3.600 segundos.' },
]

export default cartoes
