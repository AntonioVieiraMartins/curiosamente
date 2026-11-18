import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Números decimais (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que a vírgula faz em um número decimal?', verso: 'Separa a parte inteira (à esquerda) da parte menor que 1 (à direita). Em 3,45, o 3 são 3 inteiros e o ,45 são 45 centésimos.' },
  { tipo: 'regra', frente: 'Quais são as casas depois da vírgula e quanto cada uma vale?', verso: 'Décimo (0,1), centésimo (0,01) e milésimo (0,001). Cada casa à direita vale 10 vezes menos que a anterior.' },
  { tipo: 'conta', frente: 'Em 3,472, quanto vale cada algarismo?', verso: '3 unidades, 4 décimos (0,4), 7 centésimos (0,07) e 2 milésimos (0,002). Soma: 3,472.' },
  { tipo: 'regra', frente: 'Como escrever 0,075 como fração e como ler?', verso: '75/1.000 (setenta e cinco milésimos). Com n algarismos depois da vírgula, o denominador é 10 elevado a n.' },
  { tipo: 'regra', frente: 'Zeros à direita da parte decimal mudam o valor?', verso: 'Não: 0,3 = 0,30 = 0,300. Mas zeros no meio mudam: 0,03 é bem menor que 0,3.' },
  { tipo: 'regra', frente: 'Como comparar dois decimais?', verso: '1) compare a parte inteira; 2) se igual, iguale as casas com zeros à direita; 3) compare como se fossem inteiros.' },
  { tipo: 'pegadinha', frente: 'Qual é maior: 0,5 ou 0,45?', verso: '0,5 (= 0,50, que é maior que 0,45). Nos decimais, ter mais algarismos não faz o número ser maior: os extras ficam nas casas menores.' },
  { tipo: 'pegadinha', frente: 'Qual é maior: 1,07 ou 1,7? E qual é menor: 0,09 ou 0,1?', verso: '1,7 é maior (1,70 contra 1,07). O menor é 0,09 (9 centésimos contra 10 centésimos).' },
  { tipo: 'conta', frente: 'Coloque em ordem crescente: 0,4; 0,04; 0,41; 0,404.', verso: '0,04; 0,4; 0,404; 0,41. Iguale a 3 casas (0,400; 0,040; 0,410; 0,404) e ordene como inteiros.' },
  { tipo: 'regra', frente: 'Como converter decimal em fração e fração em decimal?', verso: 'Decimal em fração: algarismos depois da vírgula sobre 1 seguido de zeros (0,75 = 75/100 = 3/4). Fração em decimal: divida o numerador pelo denominador (3 ÷ 4 = 0,75).' },
  { tipo: 'regra', frente: 'Quais são os decimais de 1/2, 1/4, 3/4 e 1/10?', verso: '0,5; 0,25; 0,75 e 0,1.' },
  { tipo: 'regra', frente: 'Qual é a regra de ouro para somar e subtrair decimais?', verso: 'Vírgula embaixo de vírgula, completando casas com zeros (5 vira 5,00). Depois conta normal, e a vírgula do resultado fica na mesma coluna.' },
  { tipo: 'conta', frente: 'Quanto é 5 - 3,45?', verso: '1,55. Escreva 5,00 - 3,45 e faça o empréstimo. Confira: 3,45 + 1,55 = 5,00.' },
  { tipo: 'regra', frente: 'O que acontece com a vírgula ao multiplicar ou dividir por 10, 100, 1.000?', verso: 'Ao multiplicar, ela anda para a direita (uma, duas, três casas). Ao dividir, anda para a esquerda. Ex.: 3,45 × 100 = 345 e 8,9 ÷ 10 = 0,89.' },
  { tipo: 'regra', frente: 'Como multiplicar decimais? Faça 0,4 × 0,6.', verso: 'Ignore as vírgulas e multiplique como inteiros (4 × 6 = 24), depois ponha a vírgula com o total de casas dos dois fatores: 0,24.' },
  { tipo: 'pegadinha', frente: 'Multiplicar sempre aumenta o número?', verso: 'Não. Com decimais menores que 1, diminui: 0,4 × 0,6 = 0,24 (4 décimos de 0,6). Por isso 50% de 80 é 0,5 × 80 = 40.' },
  { tipo: 'por quê', frente: 'Quando uma fração dá um decimal exato e quando dá dízima?', verso: 'É exato só quando, simplificada, o denominador tem apenas os fatores 2 e 5 (como 1/4). Com outros fatores (3, 7...) o decimal é periódico, como 1/3 = 0,333...' },
  { tipo: 'história', frente: 'Quem publicou o livro sobre frações decimais em 1585 e qual símbolo o Brasil usa?', verso: 'Simon Stevin, com De Thiende. O Brasil e Portugal usam a vírgula decimal; os Estados Unidos e o Reino Unido usam o ponto.' },
]

export default cartoes
