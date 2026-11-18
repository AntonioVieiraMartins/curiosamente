import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Adição e subtração (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é o "vai um" na soma?', verso: 'É a troca de 10 em 10: quando uma casa passa de 9, o grupo de 10 vira 1 na casa da esquerda. Em 9 + 7 = 16, escreve 6 e sobe 1 dezena.' },
  { tipo: 'conta', frente: 'Quanto é 59 + 27? Explique o vai um.', verso: '86. Unidades: 9 + 7 = 16 (escreve 6, vai 1). Dezenas: 5 + 2 + 1 = 8.' },
  { tipo: 'conta', frente: 'Quanto é 478 + 256?', verso: '734. 8 + 6 = 14 (4, vai 1); 7 + 5 + 1 = 13 (3, vai 1); 4 + 2 + 1 = 7.' },
  { tipo: 'por quê', frente: 'Por que o vai um, na soma de dois números, é sempre 0 ou 1?', verso: 'A coluna recebe no máximo 9 + 9 + 1 = 19, então sobe no máximo 1 dezena.' },
  { tipo: 'definição', frente: 'O que é o "empréstimo" na subtração?', verso: 'É uma troca: 1 dezena vira 10 unidades (o contrário do vai um). Em 52 - 27, ficam 4 dezenas e 12 unidades.' },
  { tipo: 'conta', frente: 'Quanto é 502 - 278? Como lidar com o zero?', verso: '224. Troca-se 1 centena por 10 dezenas e depois 1 dezena por 10 unidades: ficam 4 centenas, 9 dezenas e 12 unidades. Confira: 224 + 278 = 502.' },
  { tipo: 'definição', frente: 'Em 15 - 6 = 9, como se chamam 15, 6 e 9?', verso: '15 é o minuendo (de onde se tira), 6 é o subtraendo e 9 é a diferença.' },
  { tipo: 'definição', frente: 'Quais são as três ideias da subtração?', verso: 'Tirar (8 balas, comeu 3), comparar (quanto a mais) e completar (quanto falta para chegar a 8).' },
  { tipo: 'regra', frente: 'Qual é a relação entre soma e subtração?', verso: 'São inversas: uma desfaz a outra. Se 5 + 3 = 8, então 8 - 3 = 5. Serve para conferir contas (prova real).' },
  { tipo: 'regra', frente: 'O que é a família de fatos de 8, 5 e 13?', verso: 'Quatro contas com o mesmo trio: 8 + 5 = 13, 5 + 8 = 13, 13 - 5 = 8 e 13 - 8 = 5.' },
  { tipo: 'regra', frente: 'Quais propriedades a soma tem e a subtração não?', verso: 'A soma é comutativa (3 + 5 = 5 + 3) e associativa (dá para agrupar). A subtração não é comutativa: 8 - 3 é diferente de 3 - 8.' },
  { tipo: 'regra', frente: 'O que o zero faz na soma?', verso: 'Somar zero não muda o número (elemento neutro). Brahmagupta registrou isso em 628.' },
  { tipo: 'conta', frente: 'Some de cabeça 47 + 36 de dois jeitos.', verso: 'Por partes: 40 + 30 = 70 e 7 + 6 = 13, total 83. Completando a dezena: 47 precisa de 3 para 50; sobram 33; 50 + 33 = 83.' },
  { tipo: 'conta', frente: 'Você pagou R$ 100 numa compra de R$ 63. Qual é o troco, contando para a frente?', verso: 'De 63 para 70 são 7 e de 70 para 100 são 30: troco de R$ 37. Confira: 63 + 37 = 100.' },
  { tipo: 'por quê', frente: 'Para que serve estimar antes de calcular?', verso: 'É um alarme contra erros bobos. Em 398 + 205, estime 400 + 200 = 600: se der 6.030, algo está errado.' },
  { tipo: 'problema', frente: 'Uma loja tem 120 camisetas e vende 45 e 38. Quantas sobram?', verso: '37. Primeiro junta o que saiu (45 + 38 = 83), depois tira do total (120 - 83 = 37).' },
  { tipo: 'história', frente: 'Cite dois marcos da história da soma.', verso: 'O ábaco já existia na Suméria entre 2700 e 2300 a.C.; em 628, Brahmagupta registrou que somar zero não muda o número; em 1642, Pascal inventou uma calculadora mecânica que soma.' },
]

export default cartoes
