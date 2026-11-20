import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Mutações (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma mutação?', verso: 'Uma mudança permanente no DNA, ou no número ou na estrutura dos cromossomos.' },
  { tipo: 'regra', frente: 'Que mutações são passadas aos filhos?', verso: 'Só as que ocorrem em células germinativas (as que dão origem a óvulos e espermatozoides).' },
  { tipo: 'regra', frente: 'O que é uma mutação silenciosa?', verso: 'A troca de letra não muda o aminoácido (ex.: GAG para GAA, os dois são glutamato).' },
  { tipo: 'regra', frente: 'O que é uma mutação de troca (missense)?', verso: 'A troca de letra muda um aminoácido (ex.: GAG para GUG, glutamato vira valina).' },
  { tipo: 'regra', frente: 'O que é uma mutação sem sentido (nonsense)?', verso: 'A troca cria um PARE (UAA, UAG ou UGA) e a proteína sai curta.' },
  { tipo: 'regra', frente: 'O que é uma mutação de quadro de leitura?', verso: 'Inserir ou apagar letras que não somam um múltiplo de 3 desloca a leitura de todos os trios seguintes.' },
  { tipo: 'pegadinha', frente: 'Apagar 3 letras seguidas desloca a leitura?', verso: 'Não. Como 3 é múltiplo de 3, só se perde um aminoácido e o resto continua.' },
  { tipo: 'regra', frente: 'Quais são os tipos de mutação em cromossomos?', verso: 'Deleção, duplicação, inversão e translocação.' },
  { tipo: 'regra', frente: 'O que é aneuploidia? Dê exemplos.', verso: 'Número errado de cromossomos: síndrome de Down (47), Turner (45, X) e Klinefelter (47, XXY).' },
  { tipo: 'definição', frente: 'O que é poliploidia?', verso: 'Ter conjuntos inteiros a mais de cromossomos. Comum em plantas: trigo (6 conjuntos, 42) e banana Cavendish (3, 33).' },
  { tipo: 'regra', frente: 'Quais as causas das mutações?', verso: 'Erros de cópia e agentes mutagênicos: radiação (UV, raios X), substâncias químicas e alguns vírus.' },
  { tipo: 'conta', frente: 'Quantas mutações novas, em média, tem uma pessoa?', verso: 'Cerca de 70 por geração. A maioria cai em trechos sem efeito.' },
  { tipo: 'por quê', frente: 'O que causa a anemia falciforme?', verso: 'Uma troca de letra (GAG por GUG) muda glutamato por valina na hemoglobina e entorta a hemácia. É recessiva.' },
  { tipo: 'por quê', frente: 'Por que o traço falciforme (Aa) pode ser vantajoso?', verso: 'Dá certa proteção contra a malária (vantagem do heterozigoto, Allison, 1954).' },
  { tipo: 'história', frente: 'Quem mostrou que os raios X causam mutações?', verso: 'Hermann Muller, em 1927, com moscas-da-fruta. Ganhou o Nobel em 1946.' },
]

export default cartoes
