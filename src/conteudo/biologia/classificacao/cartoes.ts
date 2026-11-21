import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Classificação dos seres vivos (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Para que serve classificar os seres vivos?', verso: 'Organizar a enorme diversidade de vida, dar um nome único a cada espécie e mostrar os parentescos.' },
  { tipo: 'regra', frente: 'Quais os níveis de classificação, do maior ao menor?', verso: 'Domínio, reino, filo, classe, ordem, família, gênero e espécie.' },
  { tipo: 'regra', frente: 'Como se escreve um nome científico?', verso: 'Em latim, em itálico: gênero com inicial maiúscula e espécie minúscula (Homo sapiens).' },
  { tipo: 'história', frente: 'Quem criou o sistema de dois nomes (binomial)?', verso: 'Lineu (Carl Linnaeus), sueco, que consolidou o método no século XVIII (Systema Naturae, 1735, e edição de 1758).' },
  { tipo: 'definição', frente: 'O que é uma espécie (conceito biológico)?', verso: 'Grupo de indivíduos que se cruzam na natureza e deixam descendentes férteis.' },
  { tipo: 'pegadinha', frente: 'Cavalo e jumento são a mesma espécie?', verso: 'Não: o filho, a mula, é estéril.' },
  { tipo: 'regra', frente: 'Como funciona uma chave de classificação?', verso: 'Uma sequência de perguntas de sim ou não sobre características, que leva a um grupo.' },
  { tipo: 'pegadinha', frente: 'Por que a baleia não é um peixe?', verso: 'Respira ar por pulmões, tem pelos e amamenta: é mamífero. Parece peixe porque vive na água, mas o parentesco é outro.' },
  { tipo: 'por quê', frente: 'O que é parecido por ancestral e parecido por ambiente?', verso: 'Homologia vem de ancestral comum (braço humano e nadadeira de baleia). Analogia vem de funções iguais, sem ancestral comum (asa de inseto e de ave).' },
  { tipo: 'definição', frente: 'O que é um clado?', verso: 'Um ancestral e todos os seus descendentes: um ramo completo da árvore da vida.' },
  { tipo: 'definição', frente: 'O que é um cladograma?', verso: 'Uma árvore de parentesco que mostra quem divide ancestrais mais recentes.' },
  { tipo: 'regra', frente: 'Quais os três domínios da vida?', verso: 'Bacteria, Archaea e Eukarya (proposto por Carl Woese em 1990).' },
  { tipo: 'regra', frente: 'Quais as diferenças entre procarionte e eucarionte?', verso: 'Procariontes (bactérias e arqueias) não têm núcleo. Eucariontes (protistas, fungos, plantas e animais) têm núcleo e organelas.' },
  { tipo: 'conta', frente: 'Quantas espécies já foram descritas e quantas se estima que existam?', verso: 'Cerca de 2 milhões descritas. As estimativas do total variam muito, algo em torno de 8 a 9 milhões.' },
  { tipo: 'pegadinha', frente: 'Descendemos dos macacos de hoje?', verso: 'Não. Temos ancestrais comuns com os chimpanzés, que viveram há milhões de anos.' },
]

export default cartoes
