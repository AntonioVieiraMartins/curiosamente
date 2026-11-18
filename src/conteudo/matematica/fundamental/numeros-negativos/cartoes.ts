import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Números negativos (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é o zero na reta numérica e onde ficam os negativos?', verso: 'O zero é um ponto de referência, não "nada". Os negativos ficam do outro lado, à esquerda.' },
  { tipo: 'regra', frente: 'Quem é menor: −10 ou −2? Como ordenar negativos?', verso: '−10. Mais à esquerda na reta é menor: o negativo mais longe do zero é o menor.' },
  { tipo: 'conta', frente: 'Ordene do menor ao maior: 3, −8, 0, −1, −5.', verso: '−8 < −5 < −1 < 0 < 3. Negativos primeiro, depois o zero, depois os positivos.' },
  { tipo: 'definição', frente: 'O que são oposto e módulo?', verso: 'Oposto é o reflexo no espelho do zero (o de 3 é −3). Módulo é a distância até o zero.' },
  { tipo: 'regra', frente: 'Como somar números de mesmo sinal?', verso: 'Junte tudo e mantenha o sinal: (−4) + (−3) = −7. Duas dívidas viram uma dívida maior.' },
  { tipo: 'regra', frente: 'Como somar números de sinais diferentes?', verso: 'Cada par verde/vermelho se anula; sobra a diferença, com o sinal de quem tinha mais. (−8) + 3 = −5.' },
  { tipo: 'regra', frente: 'Como subtrair um número negativo?', verso: 'Subtrair é somar o oposto: 7 − (−2) = 7 + 2 = 9. Tirar uma dívida é o mesmo que ganhar um crédito.' },
  { tipo: 'conta', frente: 'Quanto é −6 − (−9)?', verso: '3. É −6 + 9: seis pares se anulam e sobram 3.' },
  { tipo: 'regra', frente: 'Qual é a regra de sinais da multiplicação e da divisão?', verso: 'Sinais iguais dão positivo; sinais diferentes dão negativo. Multiplique os números sem sinal e aplique a regra.' },
  { tipo: 'conta', frente: 'Quanto são (−4) × 3 e (−6) × (−5)?', verso: '−12 (sinais diferentes) e 30 (sinais iguais).' },
  { tipo: 'por quê', frente: 'Por que menos vezes menos dá mais?', verso: 'Pelo padrão: uma caixa que esvazia tinha mais água no passado. Também sai da propriedade distributiva.' },
  { tipo: 'conta', frente: 'Quanto é −2 + 3 × (−4)?', verso: '−14. Multiplicação primeiro: 3 × (−4) = −12; depois −2 + (−12) = −14.' },
  { tipo: 'pegadinha', frente: 'Por que não se divide por zero?', verso: 'Não existe resposta (ou existem todas). Nenhum número multiplicado por 0 dá um valor diferente de 0.' },
  { tipo: 'problema', frente: 'Um time fez 40 gols e sofreu 52. Qual é o saldo? E o que é UTC−3?', verso: 'Saldo = 40 − 52 = −12. UTC−3 é o fuso de Brasília: três horas a menos que o horário de referência mundial.' },
  { tipo: 'história', frente: 'O que os chineses da dinastia Han e Diofanto pensavam dos negativos?', verso: 'Os Han faziam contas com varetas coloridas (ganhos e dívidas). Diofanto, no século III, chamou de "absurda" uma equação de resposta negativa.' },
  { tipo: 'história', frente: 'Quem escreveu as regras de sinais por volta de 630 e quem aceitou um negativo em 1202?', verso: 'Brahmagupta, na Índia, por volta de 630. Fibonacci, no Liber Abaci, interpretou uma resposta negativa como débito em 1202.' },
]

export default cartoes
