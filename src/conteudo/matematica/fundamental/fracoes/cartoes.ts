import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Frações (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que dizem o número de baixo e o de cima de uma fração?', verso: 'Embaixo: em quantos pedaços iguais o inteiro foi cortado. Em cima: quantos pedaços você pegou.' },
  { tipo: 'por quê', frente: 'Por que 1/3 é maior que 1/4?', verso: 'Mais cortes dão pedaços menores. Cortado em 4, cada pedaço é menor do que cortado em 3.' },
  { tipo: 'conta', frente: 'Quanto são 2/5 de 30 alunos?', verso: '12. Divida pelo de baixo (30 ÷ 5 = 6) e multiplique pelo de cima (2 × 6 = 12).' },
  { tipo: 'definição', frente: 'O que são frações equivalentes e o que é simplificar?', verso: 'Equivalentes são a mesma quantidade cortada de outro jeito. Simplificar é dividir o de cima e o de baixo pelo mesmo número, juntando os pedaços de volta.' },
  { tipo: 'conta', frente: 'Simplifique 12/18.', verso: '2/3. Divida por 2 (6/9) e por 3 (2/3), ou direto por 6, o MDC. Para quando não há divisor comum além de 1.' },
  { tipo: 'conta', frente: 'Escreva 11/4 como número misto.', verso: '2 3/4. 11 ÷ 4 = 2, com resto 3: 2 inteiros e 3 pedaços de 4.' },
  { tipo: 'regra', frente: 'Como somar e subtrair frações com denominadores diferentes?', verso: 'Primeiro corte tudo no mesmo tamanho (denominador comum), depois some só o de cima. O tamanho do pedaço não muda.' },
  { tipo: 'conta', frente: 'Quanto é 1/2 + 1/3 de xícara?', verso: '5/6. Em sextos: 3/6 + 2/6 = 5/6.' },
  { tipo: 'regra', frente: 'Como multiplicar frações? Faça 2/3 × 3/5.', verso: 'Em cima com em cima, embaixo com embaixo: 6/15 = 2/5. Dá para simplificar antes: o 3 de cima cancela o 3 de baixo.' },
  { tipo: 'regra', frente: 'Como dividir frações e por que se vira a segunda?', verso: 'Multiplique pela segunda virada. É um atalho para a pergunta "quantos cabem?": 3/4 ÷ 1/8 = 3/4 × 8/1 = 6.' },
  { tipo: 'conta', frente: 'Quantos pedaços de 1/8 cabem em 3/4 de uma barra?', verso: '6. Como 3/4 = 6/8, cabem 6 pedaços de 1/8.' },
  { tipo: 'regra', frente: 'Como transformar fração em decimal e em porcentagem?', verso: 'Fração é divisão: divida o de cima pelo de baixo. 3/4 = 3 ÷ 4 = 0,75 = 75%.' },
  { tipo: 'problema', frente: 'Qual broca é mais grossa, a de 3/8" ou a de 1/2"?', verso: 'A de 1/2". Em oitavos: 3/8 contra 4/8.' },
  { tipo: 'problema', frente: 'Por que "um quarto de hora" são 15 minutos?', verso: '1/4 de 60 = 15. A hora de 60 minutos é herança dos babilônios, que contavam em base 60.' },
  { tipo: 'regra', frente: 'Entre duas frações diferentes, existe outra?', verso: 'Sempre. Dá para sempre achar uma fração entre duas quaisquer (por exemplo, usando pedaços menores).' },
  { tipo: 'história', frente: 'Quem copiou o papiro de Rhind e o que ele tinha?', verso: 'O escriba egípcio Ahmes, por volta de 1550 a.C. Cheio de problemas de dividir pães.' },
  { tipo: 'história', frente: 'Quando a barra de fração aparece e quem a espalhou?', verso: 'Em torno de 1200, com Al-Hassar (Marrocos). Fibonacci a espalhou pela Europa com o Liber Abaci, em 1202.' },
]

export default cartoes
