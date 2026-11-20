import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Misturas e separação (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma substância pura?', verso: 'Material de um só tipo, com propriedades fixas (densidade, pontos de fusão e de ebulição). Exemplo: água destilada.' },
  { tipo: 'definição', frente: 'O que é uma mistura?', verso: 'União de duas ou mais substâncias, que mantêm as suas propriedades. Exemplo: água do mar.' },
  { tipo: 'definição', frente: 'O que é uma fase?', verso: 'Cada parte de aspecto uniforme de um sistema. Água com óleo tem 2 fases.' },
  { tipo: 'regra', frente: 'Mistura homogênea ou heterogênea?', verso: 'Homogênea: uma fase só (solução). Heterogênea: duas ou mais fases visíveis.' },
  { tipo: 'conta', frente: 'Quantos % de nitrogênio tem o ar, aproximadamente?', verso: 'Cerca de 78%. O oxigênio tem cerca de 21%.' },
  { tipo: 'regra', frente: 'Quando usar a peneiração?', verso: 'Para separar sólidos de tamanhos diferentes: o menor passa pelos furos.' },
  { tipo: 'regra', frente: 'Quando usar a separação magnética?', verso: 'Quando um dos componentes é atraído por ímã, como ferro e níquel.' },
  { tipo: 'regra', frente: 'Para que serve a filtração?', verso: 'Separar um sólido de um líquido ou gás: o filtro retém o sólido.' },
  { tipo: 'regra', frente: 'Como separar água e óleo?', verso: 'Decantação com funil de separação: o óleo, menos denso, fica em cima.' },
  { tipo: 'regra', frente: 'O que faz a centrifugação?', verso: 'Gira a mistura em alta velocidade e separa por densidade, como o sangue em plasma e células.' },
  { tipo: 'regra', frente: 'Como recuperar o sal da água salgada?', verso: 'Por evaporação: a água sai e o sal fica. Nas salinas, o sol faz o trabalho.' },
  { tipo: 'regra', frente: 'Para que serve a destilação simples?', verso: 'Separar um líquido de um sólido dissolvido: o líquido ferve, passa pelo condensador e é recolhido puro.' },
  { tipo: 'regra', frente: 'E a destilação fracionada?', verso: 'Separa líquidos misturados com pontos de ebulição diferentes, como o petróleo e a mistura álcool com água.' },
  { tipo: 'pegadinha', frente: 'É possível separar 100% do álcool da água só por destilação?', verso: 'Não. A mistura forma um azeótropo: o máximo é cerca de 95,6% de etanol.' },
  { tipo: 'conta', frente: 'Ouro 18 quilates: qual a porcentagem de ouro?', verso: '18 ÷ 24 = 75%. É uma liga, e portanto uma mistura homogênea.' },
  { tipo: 'história', frente: 'Quem aperfeiçoou a destilação na Idade Média?', verso: 'Alquimistas árabes, como Jabir ibn Hayyan e al-Razi. A palavra "alambique" vem do árabe.' },
]

export default cartoes
