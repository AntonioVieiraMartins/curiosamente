import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Sistema decimal (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que significa dizer que o nosso sistema é de base dez?', verso: 'Ele usa dez algarismos (0 a 9) e agrupa tudo de 10 em 10. Cada posição vale 10 vezes a posição à sua direita.' },
  { tipo: 'regra', frente: 'Quais são as casas de um número, da direita para a esquerda?', verso: 'Unidade, dezena, centena, unidade de milhar, dezena de milhar, centena de milhar... Cada casa vale 10 vezes a anterior.' },
  { tipo: 'conta', frente: 'No número 5.305, quanto vale o primeiro 5 (da esquerda)? E o último?', verso: 'O primeiro está nos milhares e vale 5 × 1.000 = 5.000. O último está nas unidades e vale 5.' },
  { tipo: 'definição', frente: 'Qual é a função do zero em 305?', verso: 'Guardar o lugar da casa vazia (as dezenas). Sem ele, 305 viraria 35.' },
  { tipo: 'conta', frente: 'Decomponha 6.059.', verso: '6.000 + 0 + 50 + 9. Não há centenas, então o zero guarda o lugar.' },
  { tipo: 'conta', frente: 'Que número é 4.000 + 600 + 7?', verso: '4.607. A casa das dezenas é zero.' },
  { tipo: 'por quê', frente: 'Por que acrescentar um zero no fim de um número o multiplica por 10?', verso: 'Cada algarismo anda uma casa para a esquerda e passa a valer 10 vezes mais. Ex.: 47 vira 470.' },
  { tipo: 'regra', frente: 'Qual é o sucessor e o antecessor de 999 e de 1.000?', verso: 'Sucessor de 999 é 1.000 (todas as casas chegam a 10 e trocam). Antecessor de 1.000 é 999.' },
  { tipo: 'regra', frente: 'Como saber qual de dois números é maior?', verso: 'Primeiro veja quantos algarismos cada um tem: quem tem mais é maior. Se tiverem a mesma quantidade, compare da esquerda para a direita, parando no primeiro algarismo diferente.' },
  { tipo: 'conta', frente: 'Qual é maior: 4.735 ou 4.753?', verso: '4.753. As duas primeiras casas são iguais; na terceira, 5 é maior que 3.' },
  { tipo: 'pegadinha', frente: 'Qual é menor: 1.000 ou 999?', verso: '999, que tem só 3 algarismos. O menor número de 4 algarismos (1.000) já é maior que o maior de 3.' },
  { tipo: 'regra', frente: 'Qual é a regra para arredondar um número?', verso: 'Olhe o algarismo seguinte à casa escolhida. De 0 a 4, a casa fica e o resto vira zeros. De 5 a 9, a casa sobe 1.' },
  { tipo: 'conta', frente: 'Arredonde 4.738 para a dezena, a centena e o milhar.', verso: 'Dezena: 4.740 (8 sobe). Centena: 4.700 (3 fica). Milhar: 5.000 (7 sobe).' },
  { tipo: 'regra', frente: 'Como se lê um número grande como 3.482.915?', verso: 'Separe em classes de três algarismos, da direita para a esquerda: 3 milhões, 482 mil e 915 unidades. Lê-se: três milhões, quatrocentos e oitenta e dois mil, novecentos e quinze.' },
  { tipo: 'por quê', frente: 'Por que os computadores usam a base 2 e não a base 10?', verso: 'É mais fácil de fazer em circuitos eletrônicos. O princípio é o mesmo (a posição dá o valor); muda só o tamanho do grupo.' },
  { tipo: 'história', frente: 'De onde vem o sistema de numeração que usamos e por que o chamam de arábico?', verso: 'Matemáticos da Índia o desenvolveram nos séculos 1 a 4. Chegou à Europa pelo mundo islâmico (Al-Khwarizmi escreveu sobre ele por volta de 825), por isso o nome. Hoje se diz indo-arábico.' },
  { tipo: 'história', frente: 'Qual é o zero mais antigo com data indiscutível?', verso: 'Uma inscrição de pedra em Gwalior, na Índia, de 876. Na Europa, os algarismos de 1 a 9 aparecem em 976, e o sistema só passa ao uso comum no século 15.' },
]

export default cartoes
