import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Porcentagem (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que quer dizer "por cento"?', verso: 'De cada cem. 25% = 25/100 = 1/4 = 0,25.' },
  { tipo: 'regra', frente: 'Quais são os equivalentes de 50%, 25%, 75%, 20%, 10% e 1%?', verso: '1/2 = 0,5; 1/4 = 0,25; 3/4 = 0,75; 1/5 = 0,2; 1/10 = 0,1; 1/100 = 0,01.' },
  { tipo: 'regra', frente: 'Quais são os truques de cabeça para 10%, 1%, 5%, 20% e 15%?', verso: '10%: anda a vírgula uma casa. 1%: duas casas. 5%: metade de 10%. 20%: o dobro de 10%. 15%: 10% + 5%.' },
  { tipo: 'conta', frente: 'Conta de R$ 86: quanto são 10% e 15% de gorjeta?', verso: '10% = R$ 8,60. 5% = R$ 4,30. 15% = 8,60 + 4,30 = R$ 12,90.' },
  { tipo: 'regra', frente: 'Como descobrir "quanto por cento" uma parte é do todo?', verso: 'Parte sobre todo, depois transforme em centésimos. 18 de 24: 18/24 = 3/4 = 75%.' },
  { tipo: 'pegadinha', frente: 'Por que 20% de uma bateria grande não é igual a 20% de uma pequena?', verso: 'Porcentagem é sempre de alguma coisa. Mudou a base, mudou o valor.' },
  { tipo: 'regra', frente: 'Qual é o fator multiplicativo de um desconto e de um aumento?', verso: 'Desconto de d%: multiplica por (1 - d/100); 20% é × 0,8. Aumento de a%: multiplica por (1 + a/100); 10% é × 1,1.' },
  { tipo: 'conta', frente: 'Um tênis de R$ 250 com 30% de desconto custa quanto?', verso: 'R$ 175. Paga-se 70% = 0,7: 250 × 0,7.' },
  { tipo: 'pegadinha', frente: 'Desconto de 50% e depois de 20% é desconto de 70%?', verso: 'Não: seguidos se multiplicam. 0,5 × 0,8 = 0,4, ou seja, paga-se 40%: desconto de 60%.' },
  { tipo: 'regra', frente: 'Como achar o preço de antes de um aumento ou desconto?', verso: 'Divida pelo fator. Não tire a porcentagem do preço novo: a base era outra.' },
  { tipo: 'pegadinha', frente: '"O tomate subiu 50%": de que valor para que valor?', verso: 'Depende da base: pode ser de R$ 4 para R$ 6. Sempre pergunte: 50% de quanto?' },
  { tipo: 'definição', frente: 'Qual é a diferença entre juros simples e compostos?', verso: 'Simples: a porcentagem é sempre sobre o valor do começo. Compostos: é sobre o valor de agora, que já inclui os juros anteriores (bola de neve).' },
  { tipo: 'conta', frente: 'Dívida de R$ 1.000 a 10% ao mês, juros compostos: quanto em 3 meses?', verso: 'R$ 1.331 (1.100, 1.210, 1.331). Com juros simples seriam R$ 1.300.' },
  { tipo: 'história', frente: 'Qual é a origem romana da porcentagem?', verso: 'O imperador Augusto cobrava 1/100 sobre mercadorias vendidas em leilão (centesima rerum venalium). Depois os escribas italianos encurtaram "per cento" até virar o símbolo %.' },
  { tipo: 'história', frente: 'O que aconteceu com os preços no Brasil em junho e julho de 1994?', verso: 'Em junho os preços subiram 46,58% num único mês. Em 1º de julho entrou o Real e a inflação do mês caiu para 6,08%.' },
]

export default cartoes
