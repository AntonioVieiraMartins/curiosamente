import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Dinheiro e troco (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Como se escrevem valores em reais e quanto é R$ 37,40 em centavos?', verso: 'Com duas casas depois da vírgula (centavos, ou centésimos do real). R$ 37,40 = 3.740 centavos. 100 centavos formam R$ 1.' },
  { tipo: 'regra', frente: 'Quais são as notas e as moedas do real?', verso: 'Notas de 2, 5, 10, 20, 50, 100 e 200 reais. Moedas de 5, 10, 25 e 50 centavos e de 1 real.' },
  { tipo: 'regra', frente: 'Como formar um valor com poucas peças?', verso: 'Comece pela maior peça que cabe e complete com as menores. R$ 85,25 = 50 + 20 + 10 + 5 + 0,25 (5 peças).' },
  { tipo: 'conta', frente: 'Quantas moedas de 25 centavos formam R$ 3,00? E de 10 centavos formam R$ 2,50?', verso: '12 (R$ 1 tem 4 moedas de 25) e 25 (R$ 1 tem 10 moedas de 10).' },
  { tipo: 'definição', frente: 'O que é troco e como calcular?', verso: 'O que sobra quando você paga mais que o preço: troco = valor pago − preço.' },
  { tipo: 'regra', frente: 'Como o caixa calcula o troco de cabeça?', verso: 'Conta para a frente, do preço até o valor pago, por paradas fáceis. É a ideia de completar da subtração, sem empréstimo.' },
  { tipo: 'conta', frente: 'Qual é o troco de R$ 50 numa compra de R$ 37,40?', verso: 'R$ 12,60. De 37,40 a 38 são 0,60; de 38 a 40, 2,00; de 40 a 50, 10,00. Total 12,60.' },
  { tipo: 'regra', frente: 'Como conferir um troco?', verso: 'Pelas operações inversas: preço + troco deve dar o valor pago. 37,40 + 12,60 = 50,00.' },
  { tipo: 'pegadinha', frente: 'Qual é o menor preço: R$ 4,5, R$ 4,05 ou R$ 4,45?', verso: 'R$ 4,05. Iguale as casas: 4,50; 4,05; 4,45. Do mais barato ao mais caro: 4,05; 4,45; 4,50.' },
  { tipo: 'conta', frente: 'Quanto custam 6 pães de R$ 0,80, 1 leite de R$ 5,20 e 1 dúzia de ovos de R$ 10,90? E o troco de R$ 50?', verso: 'Pães 4,80; total 4,80 + 5,20 + 10,90 = R$ 20,90. Troco: R$ 29,10.' },
  { tipo: 'conta', frente: 'Uma pizza de R$ 63 dividida entre 4 amigos: quanto cada um paga?', verso: 'R$ 15,75 (63 ÷ 4). Confira: 4 × 15,75 = 63,00.' },
  { tipo: 'regra', frente: 'Como saber qual embalagem compensa?', verso: 'Calcule o preço de 1 unidade (1 kg, 1 L): preço ÷ quantidade, na mesma unidade. Mas só compensa se você for usar tudo.' },
  { tipo: 'conta', frente: '500 g por R$ 6 ou 2 kg por R$ 20: qual compensa?', verso: 'A de 2 kg: R$ 10 por kg contra R$ 12 por kg (6 ÷ 0,5).' },
  { tipo: 'conta', frente: 'Um produto de R$ 80 com 25% de desconto custa quanto? E 10% de R$ 85?', verso: 'R$ 60 (25% é um quarto: 20). 10% de 85 é 8,50 (a vírgula anda uma casa), então 85 − 8,50 = R$ 76,50.' },
  { tipo: 'regra', frente: 'Como comparar à vista e parcelado?', verso: 'Calcule o total do parcelado (parcela × número) e compare com o à vista. A diferença são os juros. Geladeira de R$ 600 ou 6 × R$ 110: 660, ou R$ 60 (10%) a mais.' },
  { tipo: 'regra', frente: 'O que é orçamento e como calcular a poupança?', verso: 'Plano do que entra (receita) e sai (despesas). Receita − despesas = o que dá para guardar: 140 − 80 = R$ 60 por mês, R$ 300 em 5 meses.' },
  { tipo: 'por quê', frente: 'O que é o escambo e qual é o seu problema?', verso: 'Troca direta de coisas. O problema é a coincidência de desejos: cada um precisa ter o que o outro quer. O dinheiro resolve isso.' },
  { tipo: 'definição', frente: 'Quais são as três funções do dinheiro e por que uma nota de papel vale algo?', verso: 'Meio de troca, unidade de conta e reserva de valor. A nota vale pela confiança e porque o governo a torna moeda de curso legal (dinheiro por decreto), e não pelo papel.' },
  { tipo: 'história', frente: 'Quando surgiram as moedas e o papel-moeda?', verso: 'Moedas cunhadas por volta de 650 a 600 a.C. (lídios). Papel-moeda na China, entre as dinastias Tang e Song (recibos de comerciantes, depois notas de governo no século 13).' },
  { tipo: 'história', frente: 'Quando o Real entrou em circulação e quanto valia?', verso: '1º de julho de 1994 (Plano Real, governo de Itamar Franco): R$ 1 valia 2.750 cruzeiros reais. A nota de 200 reais é de 2 de setembro de 2020.' },
]

export default cartoes
