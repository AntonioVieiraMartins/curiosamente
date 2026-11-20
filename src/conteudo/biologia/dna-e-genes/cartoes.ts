import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula DNA e genes (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'De que é feito um nucleotídeo?', verso: 'De um açúcar (desoxirribose), um fosfato e uma base (A, T, C ou G).' },
  { tipo: 'regra', frente: 'Quais são os pares de bases no DNA?', verso: 'A com T (2 pontes de hidrogênio) e C com G (3 pontes).' },
  { tipo: 'regra', frente: 'O que diz a regra de Chargaff?', verso: 'No DNA, A = T e C = G.' },
  { tipo: 'definição', frente: 'Gene, cromossomo e genoma?', verso: 'Gene: receita de uma proteína. Cromossomo: DNA enrolado em proteínas. Genoma: todo o DNA de um ser.' },
  { tipo: 'conta', frente: 'Quantos cromossomos tem uma célula humana?', verso: '46, em 23 pares (um de cada par vem da mãe e outro do pai).' },
  { tipo: 'regra', frente: 'Como o DNA se copia?', verso: 'Replicação semiconservativa: helicase abre as fitas e a DNA polimerase monta uma nova em cada molde.' },
  { tipo: 'conta', frente: 'Quantas moléculas há depois de 3 replicações?', verso: '2³ = 8 moléculas (só 2 têm uma fita original).' },
  { tipo: 'regra', frente: 'O que é o dogma central?', verso: 'DNA → RNA (transcrição) → proteína (tradução).' },
  { tipo: 'regra', frente: 'Qual a diferença entre RNA e DNA?', verso: 'RNA: fita simples, ribose, U no lugar de T. DNA: fita dupla, desoxirribose, T.' },
  { tipo: 'conta', frente: 'Quantos códons existem e quantos aminoácidos?', verso: '64 códons (4 × 4 × 4) e 20 aminoácidos. O código é redundante.' },
  { tipo: 'regra', frente: 'Quais códons marcam início e fim?', verso: 'AUG (início, metionina). UAA, UAG e UGA (PARE).' },
  { tipo: 'conta', frente: 'Quantas bases codificam uma proteína de 100 aminoácidos?', verso: '300 bases (3 por aminoácido), sem contar o PARE.' },
  { tipo: 'por quê', frente: 'Por que células diferentes têm o mesmo DNA mas funções diferentes?', verso: 'Cada tipo liga só os genes de que precisa.' },
  { tipo: 'pegadinha', frente: 'Quanto do DNA é igual entre duas pessoas?', verso: 'Cerca de 99,9%. A diferença (1 letra a cada 1.000) soma uns 3 milhões de variações.' },
  { tipo: 'história', frente: 'Quem propôs a dupla hélice e quando?', verso: 'Watson e Crick, em 1953, usando dados de Franklin, Gosling e Wilkins. Nobel de 1962 para Watson, Crick e Wilkins.' },
  { tipo: 'história', frente: 'Quem descobriu a nucleína e quem provou que o DNA é a herança?', verso: 'Miescher (1869) achou a nucleína. Avery, MacLeod e McCarty (1944) e Hershey e Chase (1952) provaram o papel do DNA.' },
]

export default cartoes
