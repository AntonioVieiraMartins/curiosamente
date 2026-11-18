import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Monty Hall (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Qual é o problema de Monty Hall?', verso: 'Três portas: um carro e duas cabras. Você escolhe uma; o apresentador, que sabe onde está o carro, abre outra com uma cabra e pergunta se você quer trocar.' },
  { tipo: 'regra', frente: 'Vale mais ficar ou trocar? Com que chance?', verso: 'Trocar: 2/3. Ficar: 1/3.' },
  { tipo: 'por quê', frente: 'Por que trocar ganha 2/3?', verso: 'Porque a sua primeira escolha só acerta 1/3 das vezes e o apresentador nunca entrega o carro: quando você errou (2/3), trocar leva ao carro.' },
  { tipo: 'conta', frente: 'Em quais dos três casos trocar ganha?', verso: 'Carro na sua porta (1/3): trocar perde. Carro em cada uma das outras duas (1/3 cada): ele é obrigado a abrir a outra cabra e trocar ganha. Total: 2 de 3.' },
  { tipo: 'regra', frente: 'Por que a pista vale?', verso: 'Porque o apresentador sabe onde está o carro e escolhe a porta que abre: ele nunca abre a do carro, P(abrir a 3 | carro na 3) = 0. Essa escolha é informação.' },
  { tipo: 'conta', frente: 'Com 100 portas e 98 abertas pelo apresentador, qual a chance de ganhar trocando?', verso: '99/100. E se ele abrisse só 1 porta: 99/100 × 1/98 ≈ 1,01%, um pouquinho melhor que ficar (1%).' },
  { tipo: 'pegadinha', frente: 'Por que o "50%" engana?', verso: 'Restam duas portas, mas elas não são equiprováveis: a sua guarda a chance inicial (1/3) e a outra concentra o resto (2/3).' },
  { tipo: 'pegadinha', frente: 'E se o apresentador for distraído e abrir uma porta ao acaso (mostrando cabra)?', verso: 'Aí a mesma cena dá 1/2 a 1/2: a regra do apresentador muda a probabilidade. Ele só vale como pista se sabe e escolhe.' },
  { tipo: 'definição', frente: 'O que é probabilidade condicional?', verso: 'A chance que muda quando chega informação nova, e que depende de como essa informação foi obtida.' },
  { tipo: 'por quê', frente: 'Por que poucas rodadas enganam e como o simulador se estabiliza?', verso: 'Com 100 rodadas o resultado oscila cerca de 4,7 pontos; com 10.000, cerca de 0,47. Repetindo muito, converge para 2/3.' },
  { tipo: 'problema', frente: 'Onde a probabilidade condicional aparece no dia a dia?', verso: 'Filtros de spam (chance de ser spam dado que tem "grátis"), previsão do tempo (70% de chuva dadas as condições de hoje) e jogos de cartas em que a escolha de quem vê as cartas é informação.' },
  { tipo: 'história', frente: 'Que paradoxo parecido Bertrand publicou em 1889?', verso: 'O paradoxo da caixa: três caixas (duas moedas de ouro, duas de prata, uma mista). A resposta intuitiva é 1/2; a certa é 2/3.' },
  { tipo: 'história', frente: 'De onde vem o nome Monty Hall?', verso: 'Do apresentador do programa Let\'s Make a Deal (EUA, 1963). Steve Selvin publicou o problema com o nome dele em 1975.' },
  { tipo: 'história', frente: 'O que aconteceu com Marilyn vos Savant em 1990?', verso: 'Respondeu na revista Parade "troque de porta" e milhares de leitores escreveram dizendo que ela errou. Até Paul Erdős só se convenceu depois de ver uma simulação.' },
]

export default cartoes
