import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Divisão celular (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é a mitose?', verso: 'Divisão em que uma célula faz 2 células-filhas iguais a ela, com o mesmo número de cromossomos.' },
  { tipo: 'definição', frente: 'O que é a meiose?', verso: 'Duas divisões seguidas que fazem 4 células haploides (com metade dos cromossomos), usadas na reprodução.' },
  { tipo: 'regra', frente: 'Quais as fases do ciclo celular?', verso: 'Interfase (G1, S e G2) e fase M (mitose e citocinese).' },
  { tipo: 'regra', frente: 'O que acontece na fase S?', verso: 'O DNA é copiado: cada cromossomo passa a ter duas cromátides irmãs.' },
  { tipo: 'regra', frente: 'Quais as fases da mitose, em ordem?', verso: 'Prófase, metáfase, anáfase e télofase, seguidas da citocinese.' },
  { tipo: 'regra', frente: 'O que acontece na anáfase?', verso: 'As cromátides irmãs se separam e vão para polos opostos.' },
  { tipo: 'definição', frente: 'O que são cromossomos homólogos?', verso: 'Os dois cromossomos de um par: um da mãe e outro do pai, com os mesmos genes nas mesmas posições.' },
  { tipo: 'conta', frente: 'Uma célula tem 2n = 38. Quantos cromossomos tem o gameta?', verso: 'n = 19.' },
  { tipo: 'conta', frente: 'Quantas células há depois de n divisões seguidas?', verso: '2 elevado a n. Com 10 divisões, 1024.' },
  { tipo: 'conta', frente: 'Quantos tipos de gameta pode fazer um ser com n pares de cromossomos (sem crossing-over)?', verso: '2 elevado a n. Para 23 pares, 8.388.608.' },
  { tipo: 'regra', frente: 'O que é o crossing-over?', verso: 'Troca de pedaços entre cromossomos homólogos na prófase I da meiose. Cria combinações novas.' },
  { tipo: 'regra', frente: 'Quais as três fontes de variedade da reprodução sexuada?', verso: 'Separação ao acaso dos homólogos, crossing-over e fecundação ao acaso.' },
  { tipo: 'pegadinha', frente: 'Um cromossomo duplicado (em X) conta como 1 ou 2 cromossomos?', verso: 'Como 1, com 2 cromátides. Só passam a contar como 2 cromossomos quando as cromátides se separam.' },
  { tipo: 'por quê', frente: 'O que é a não-disjunção?', verso: 'Um par de cromossomos que não se separa. Causa número errado de cromossomos, como a síndrome de Down (47).' },
  { tipo: 'história', frente: 'Quem nomeou a mitose e em que ano?', verso: 'Walther Flemming, em 1882.' },
]

export default cartoes
