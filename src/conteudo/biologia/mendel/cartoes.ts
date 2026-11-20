import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula As ervilhas de Mendel (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é um alelo?', verso: 'Cada versão de um gene. Em geral, maiúscula para o dominante (A) e minúscula para o recessivo (a).' },
  { tipo: 'definição', frente: 'Qual a diferença entre genótipo e fenótipo?', verso: 'Genótipo são os alelos que a pessoa tem (Aa). Fenótipo é o que aparece (semente lisa).' },
  { tipo: 'definição', frente: 'Homozigoto e heterozigoto: qual a diferença?', verso: 'Homozigoto tem dois alelos iguais (AA ou aa). Heterozigoto tem dois diferentes (Aa).' },
  { tipo: 'regra', frente: 'Quando o alelo recessivo aparece?', verso: 'Só quando há duas cópias dele (aa).' },
  { tipo: 'regra', frente: 'Qual a primeira lei de Mendel?', verso: 'Lei da segregação: os dois alelos de um gene se separam na formação dos gametas, e cada gameta leva só um.' },
  { tipo: 'regra', frente: 'Qual a segunda lei de Mendel?', verso: 'Segregação independente: genes em cromossomos diferentes se herdam de forma independente.' },
  { tipo: 'conta', frente: 'Aa x Aa: quais as proporções de genótipo e de fenótipo?', verso: 'Genótipo 1 AA : 2 Aa : 1 aa. Fenótipo 3 dominantes : 1 recessivo.' },
  { tipo: 'conta', frente: 'Aa x aa: quais as proporções dos filhos?', verso: 'Metade Aa e metade aa (1 : 1).' },
  { tipo: 'conta', frente: 'AaBb x AaBb: qual a razão de fenótipos?', verso: '9 : 3 : 3 : 1, em 16 combinações.' },
  { tipo: 'conta', frente: 'Quantos tipos de gameta faz um indivíduo com n genes heterozigotos independentes?', verso: '2 elevado a n. AaBb faz 4, e AaBbCc faz 8.' },
  { tipo: 'regra', frente: 'Para que serve o cruzamento-teste?', verso: 'Descobrir se um indivíduo de fenótipo dominante é AA ou Aa, cruzando-o com um aa.' },
  { tipo: 'regra', frente: 'O que é dominância incompleta?', verso: 'O heterozigoto tem um fenótipo intermediário (vermelha x branca = rosa). Razão 1 : 2 : 1.' },
  { tipo: 'pegadinha', frente: 'AA e Aa têm o mesmo fenótipo. Têm o mesmo genótipo?', verso: 'Não. Aparecem iguais (se A for dominante), mas os genótipos são diferentes.' },
  { tipo: 'história', frente: 'Quem foi Mendel e quando o trabalho dele foi redescoberto?', verso: 'Monge de Brno que cruzou cerca de 28 mil ervilhas (1856 a 1863). Redescoberto em 1900 por De Vries, Correns e Tschermak.' },
  { tipo: 'história', frente: 'Quem criou as palavras genética e gene?', verso: 'Bateson usou genética (1905), e Johannsen criou gene, genótipo e fenótipo (1909).' },
]

export default cartoes
