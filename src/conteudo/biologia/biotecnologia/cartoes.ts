import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Biotecnologia e edição do DNA (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é biotecnologia?', verso: 'Usar seres vivos, ou partes deles, para fazer produtos: do pão e do vinho até insulina de bactérias e CRISPR.' },
  { tipo: 'regra', frente: 'O que faz uma enzima de restrição?', verso: 'Reconhece uma sequência curta de DNA e corta ali (ex.: EcoRI corta em GAATTC).' },
  { tipo: 'regra', frente: 'Que enzima cola pedaços de DNA?', verso: 'A DNA ligase.' },
  { tipo: 'definição', frente: 'O que é DNA recombinante?', verso: 'DNA com pedaços de origens diferentes unidos, como um gene humano dentro de um plasmídeo de bactéria.' },
  { tipo: 'por quê', frente: 'Por que uma bactéria lê um gene humano?', verso: 'Porque o código genético é praticamente universal: o mesmo trio dá o mesmo aminoácido.' },
  { tipo: 'regra', frente: 'Quantos pedaços fazem n cortes numa fita reta? E num DNA circular?', verso: 'Reta: n + 1 pedaços. Circular (plasmídeo): n pedaços.' },
  { tipo: 'regra', frente: 'Quais os três passos de um ciclo de PCR?', verso: 'Desnaturar (cerca de 95 °C), anelar os primers (cerca de 55 °C) e estender com a Taq polimerase (cerca de 72 °C).' },
  { tipo: 'conta', frente: 'Quantas cópias faz a PCR depois de n ciclos?', verso: '2 elevado a n. Com 10 ciclos, 1024. Com 30, mais de 1 bilhão.' },
  { tipo: 'por quê', frente: 'Por que a PCR usa a Taq polimerase?', verso: 'Ela vem de uma bactéria de fontes quentes e aguenta o calor de cada ciclo.' },
  { tipo: 'regra', frente: 'Como funciona a eletroforese em gel?', verso: 'O DNA é negativo e anda para o polo positivo. Os fragmentos menores andam mais depressa e mais longe.' },
  { tipo: 'regra', frente: 'Para que serve a impressão digital de DNA?', verso: 'Paternidade, identificar vítimas e comparar amostras de crimes, usando trechos repetitivos que variam entre as pessoas.' },
  { tipo: 'definição', frente: 'O que é um organismo transgênico?', verso: 'Um ser que recebeu um gene de outra espécie (ex.: milho Bt, com gene de bactéria).' },
  { tipo: 'regra', frente: 'Como funciona o CRISPR?', verso: 'Um RNA-guia de cerca de 20 letras leva a enzima Cas9 até o DNA que combina com ele, e ela corta ali (perto de um PAM).' },
  { tipo: 'pegadinha', frente: 'Edição somática e germinativa: qual a diferença?', verso: 'Somática afeta só a pessoa tratada. Germinativa (em embriões ou gametas) passa para as gerações futuras e é muito mais polêmica.' },
  { tipo: 'história', frente: 'Quem mostrou o CRISPR como ferramenta de edição e quando?', verso: 'Jennifer Doudna e Emmanuelle Charpentier, em 2012. Nobel de Química em 2020.' },
]

export default cartoes
