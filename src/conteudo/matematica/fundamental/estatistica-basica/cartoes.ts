import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Média, mediana e moda (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é a média e como se calcula?', verso: 'A soma de todos os valores dividida pela quantidade. É o valor que cada um teria se todos tivessem o mesmo.' },
  { tipo: 'conta', frente: 'Qual a média de 2, 4 e 9?', verso: '(2 + 4 + 9) ÷ 3 = 15 ÷ 3 = 5.' },
  { tipo: 'definição', frente: 'O que é a mediana?', verso: 'O valor do meio com os dados em ordem. Com quantidade par, é a média dos dois do meio.' },
  { tipo: 'pegadinha', frente: 'Qual o erro mais comum ao achar a mediana?', verso: 'Esquecer de colocar os valores em ordem crescente antes de pegar o do meio.' },
  { tipo: 'conta', frente: 'Qual a mediana de 8, 2, 6 e 4?', verso: 'Em ordem: 2, 4, 6, 8. Média dos do meio: (4 + 6) ÷ 2 = 5.' },
  { tipo: 'definição', frente: 'O que é a moda?', verso: 'O valor que mais se repete. Pode haver mais de uma, ou nenhuma, e serve também para categorias.' },
  { tipo: 'por quê', frente: 'Por que um valor extremo muda a média mas não a mediana?', verso: 'A média soma todos os valores; a mediana só olha a posição do meio na fila ordenada.' },
  { tipo: 'regra', frente: 'Quando preferir a mediana à média?', verso: 'Quando há valores muito altos ou baixos (salários, preços de casas): a mediana descreve melhor o típico.' },
  { tipo: 'regra', frente: 'Como se calcula a média ponderada?', verso: 'Multiplique cada valor pelo peso, some tudo e divida pela soma dos pesos.' },
  { tipo: 'conta', frente: 'Média ponderada das notas 6 (peso 2), 9 (peso 3) e 8 (peso 5).', verso: '(12 + 27 + 40) ÷ 10 = 7,9.' },
  { tipo: 'definição', frente: 'O que é amplitude?', verso: 'Maior valor menos o menor valor. Mostra o quanto os dados se espalham.' },
  { tipo: 'pegadinha', frente: 'Duas turmas têm a mesma média. Elas são iguais?', verso: 'Não. Uma pode ter notas parecidas e a outra muito espalhadas. A amplitude mostra a diferença.' },
  { tipo: 'conta', frente: 'Na tabela de irmãos (4, 8, 5, 2, 1 alunos com 0 a 4 irmãos), qual a média?', verso: '(0×4 + 1×8 + 2×5 + 3×2 + 4×1) ÷ 20 = 28 ÷ 20 = 1,4.' },
  { tipo: 'problema', frente: 'Quatro pessoas têm média de 20 anos. Entra uma de 30. Nova média?', verso: '(80 + 30) ÷ 5 = 22.' },
  { tipo: 'história', frente: 'Quem usou o termo mediana em 1881 e quem batizou a moda em 1895?', verso: 'Francis Galton (mediana, 1881) e Karl Pearson (moda, 1895). Quetelet falou do "homem médio" em 1835.' },
]

export default cartoes
