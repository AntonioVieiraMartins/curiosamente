import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Tabela periódica
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Em que ordem estão os elementos na tabela?', verso: 'Em ordem crescente de número atômico (Z), o número de prótons.' },
  { tipo: 'definição', frente: 'O que é um período?', verso: 'Uma linha da tabela. O número do período é o número de camadas de elétrons.' },
  { tipo: 'definição', frente: 'O que é um grupo (ou família)?', verso: 'Uma coluna da tabela. Elementos do mesmo grupo têm o mesmo número de elétrons de valência e comportamento parecido.' },
  { tipo: 'regra', frente: 'Como achar os elétrons de valência pelo grupo?', verso: 'Grupos 1 e 2: o próprio número. Grupos 13 a 18: o número menos 10 (He é exceção, com 2).' },
  { tipo: 'regra', frente: 'Características dos metais alcalinos (grupo 1)?', verso: 'Metais moles e muito reativos. Perdem 1 elétron e viram íons +1. Reagem com a água.' },
  { tipo: 'regra', frente: 'Características dos halogênios (grupo 17)?', verso: 'Não metais muito reativos, com 7 elétrons de valência. Ganham 1 elétron e viram íons −1.' },
  { tipo: 'por quê', frente: 'Por que os gases nobres quase não reagem?', verso: 'A última camada está completa (8 elétrons, ou 2 no hélio): não precisam ganhar ou perder.' },
  { tipo: 'regra', frente: 'Que íon forma um elemento do grupo 2? E do grupo 16?', verso: 'Grupo 2: perde 2 e vira +2. Grupo 16: ganha 2 e vira −2.' },
  { tipo: 'regra', frente: 'Metais, não metais e semimetais: diferenças?', verso: 'Metais: brilham, conduzem bem e perdem elétrons. Não metais: ganham elétrons. Semimetais: propriedades intermediárias (silício).' },
  { tipo: 'regra', frente: 'Como varia o raio atômico na tabela?', verso: 'Diminui da esquerda para a direita num período e aumenta de cima para baixo num grupo.' },
  { tipo: 'regra', frente: 'Como varia a eletronegatividade?', verso: 'Aumenta da esquerda para a direita e diminui de cima para baixo. O flúor é o mais eletronegativo.' },
  { tipo: 'problema', frente: 'O enxofre (Z = 16): período e grupo?', verso: 'Distribuição 2, 8, 6: período 3 e grupo 16.' },
  { tipo: 'história', frente: 'O que fez Mendeleiev em 1869?', verso: 'Organizou os elementos por propriedades e deixou casas vazias, prevendo elementos desconhecidos (como o germânio).' },
  { tipo: 'história', frente: 'O que fez Moseley em 1913?', verso: 'Mostrou que a ordem correta é pelo número atômico (prótons), resolvendo as trocas estranhas de Mendeleiev.' },
  { tipo: 'definição', frente: 'Por que a massa atômica da tabela é um número quebrado?', verso: 'É a média das massas dos isótopos do elemento, ponderada pela abundância.' },
]

export default cartoes
