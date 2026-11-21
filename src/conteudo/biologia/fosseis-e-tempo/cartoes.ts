import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Fósseis e o tempo profundo (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é um fóssil?', verso: 'Resto ou marca de um ser vivo do passado, preservado em rocha, gelo ou âmbar (ossos, conchas, pegadas, folhas).' },
  { tipo: 'por quê', frente: 'Por que é raro virar fóssil?', verso: 'Precisa ser soterrado rápido, ter partes duras e ficar num lugar sem destruição. Quase todos os seres desaparecem sem deixar nada.' },
  { tipo: 'regra', frente: 'O que diz a lei da superposição?', verso: 'Em camadas de rocha sem perturbação, a de baixo é mais velha e a de cima, mais nova.' },
  { tipo: 'definição', frente: 'O que é um fóssil-guia?', verso: 'Fóssil de um ser que viveu por pouco tempo e em muitos lugares. Serve para mostrar que camadas distantes têm a mesma idade.' },
  { tipo: 'definição', frente: 'O que é datação relativa?', verso: 'Dizer quem veio antes e quem veio depois, pela posição das camadas e pelos fósseis, sem dar o número de anos.' },
  { tipo: 'definição', frente: 'O que é datação absoluta?', verso: 'Dar uma idade em anos, medindo o decaimento de átomos radioativos.' },
  { tipo: 'definição', frente: 'O que é meia-vida?', verso: 'O tempo para metade dos átomos radioativos de uma amostra se transformar.' },
  { tipo: 'conta', frente: 'Quanto resta depois de n meias-vidas?', verso: '1 dividido por 2 elevado a n. Depois de 1: 50%; de 2: 25%; de 3: 12,5%.' },
  { tipo: 'regra', frente: 'Qual a meia-vida do carbono-14 e até onde serve?', verso: '5.730 anos. Serve até cerca de 50 mil anos, e só para o que já foi vivo.' },
  { tipo: 'regra', frente: 'Para datar rochas de milhões de anos, qual átomo se usa?', verso: 'Átomos de meia-vida muito longa, como urânio-238 (4,47 bilhões de anos) ou potássio-40 (1,25 bilhão).' },
  { tipo: 'conta', frente: 'Qual a idade da Terra?', verso: 'Cerca de 4,54 bilhões de anos (calculada em 1953 por Clair Patterson com meteoritos).' },
  { tipo: 'conta', frente: 'Em um relógio de 24 horas, quando os humanos aparecem?', verso: 'Poucos segundos antes da meia-noite. A maior parte da história da Terra foi de micróbios.' },
  { tipo: 'definição', frente: 'O que é uma extinção em massa?', verso: 'Quando uma grande parte das espécies some em um tempo geológico curto. Houve cinco grandes.' },
  { tipo: 'história', frente: 'O que causou o fim dos dinossauros não voadores?', verso: 'O impacto de um asteroide (cratera de Chicxulub, no México), há 66 milhões de anos, somado a vulcanismo e mudanças do clima.' },
  { tipo: 'história', frente: 'Quem foi Mary Anning?', verso: 'Colecionadora de fósseis inglesa que, ainda jovem, em 1811, achou com o irmão o esqueleto de um ictiossauro.' },
]

export default cartoes
