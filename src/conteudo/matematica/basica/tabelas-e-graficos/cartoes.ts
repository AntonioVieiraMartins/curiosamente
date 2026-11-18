import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Tabelas e gráficos (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma tabela de frequência?', verso: 'Uma tabela que mostra, para cada categoria, quantas vezes ela apareceu. O total (soma) confere se contou tudo.' },
  { tipo: 'conta', frente: 'Votos: banana 5, maçã 8, uva 3, laranja 6. Qual o total, a mais votada e a diferença entre a maior e a menor?', verso: 'Total 22. Mais votada: maçã (8). Diferença: 8 − 3 = 5 votos.' },
  { tipo: 'regra', frente: 'Para que serve cada tipo de gráfico: barras, linhas e pizza?', verso: 'Barras: comparar categorias. Linhas: ver mudanças no tempo (sobe, desce, plana). Pizza (setores): partes de um todo de 100%.' },
  { tipo: 'regra', frente: 'O que olhar antes de acreditar num gráfico?', verso: 'Título, eixos (o que mede e em que unidade), escala (de quanto em quanto e onde começa) e a fonte dos dados.' },
  { tipo: 'regra', frente: 'Qual a diferença entre gráfico de barras e histograma?', verso: 'Barras comparam categorias (barras separadas). Histograma mostra dados contínuos em faixas (barras coladas), como alturas.' },
  { tipo: 'conta', frente: 'Cada risco do eixo vale 5 e a barra chega ao 4º risco. Quanto vale?', verso: '20 (4 × 5). Leia a escala antes de ler a barra.' },
  { tipo: 'pegadinha', frente: 'Por que um eixo que não começa no zero engana num gráfico de barras?', verso: 'Exagera as diferenças: 92 e 95 com eixo começando em 90 parecem 2 contra 5 (mais que o dobro), mas a diferença real é de 3 pontos.' },
  { tipo: 'conta', frente: 'Uma padaria vendeu 120, 90, 100, 130 e 160 pães. Qual o total e quantos a mais na sexta do que na terça?', verso: 'Total 600. Sexta (160) − terça (90) = 70 pães a mais.' },
  { tipo: 'regra', frente: 'Como ler um gráfico de linhas?', verso: 'Linha sobe: aumenta; desce: diminui; plana: não muda. Quanto mais inclinada, mais rápida a mudança.' },
  { tipo: 'conta', frente: 'Casa 40%, comida 30% e lazer 20% num gráfico de pizza: quanto sobra e quanto é isso de R$ 500?', verso: '10% (100 − 90). 10% de R$ 500 = R$ 50.' },
  { tipo: 'regra', frente: 'Quais são as armadilhas comuns em gráficos?', verso: 'Eixo cortado, dados omitidos, escalas diferentes no mesmo gráfico, escala ausente, pizza em 3D, pictogramas que crescem em 2 ou 3 dimensões e escala logarítmica sem aviso.' },
  { tipo: 'por quê', frente: 'Por que desenhos (pictogramas) enganam?', verso: 'Se o desenho dobra em duas dimensões, a área vira 4 vezes; em 3D, 8 vezes. Um gráfico de 2001 parecia mostrar crescimento de 8 vezes quando as vendas só dobraram. Use um só comprimento.' },
  { tipo: 'por quê', frente: 'Por que não usar pizza em 3D?', verso: 'A perspectiva faz as fatias da frente parecerem maiores. Tufte acha que a pizza costuma perder para uma tabela, porque o olho compara barras melhor que ângulos.' },
  { tipo: 'definição', frente: 'O que são média, mediana e moda?', verso: 'Média: soma ÷ quantidade. Mediana: o valor do meio com os dados em ordem. Moda: o que mais se repete.' },
  { tipo: 'conta', frente: 'Média de 4, 6 e 8? Mediana de 3, 9, 5, 7 e 1? Moda de 2, 3, 3, 5, 3, 7?', verso: 'Média 6; mediana 5 (em ordem 1, 3, 5, 7, 9); moda 3.' },
  { tipo: 'conta', frente: 'Salários 1.200, 1.300, 1.300, 1.500 e 1.800: média, mediana e moda?', verso: 'Média 1.420, mediana 1.300, moda 1.300. Com um salário de 20.000, a média vai a 5.060 e a mediana segue 1.300.' },
  { tipo: 'pegadinha', frente: 'Quando a média engana?', verso: 'Quando há valores extremos: um salário muito alto puxa a média para cima, enquanto a mediana descreve melhor o que a maioria ganha.' },
  { tipo: 'regra', frente: 'Quais são os quatro passos de uma pesquisa?', verso: 'Perguntar (de forma clara), coletar as respostas, organizar numa tabela e mostrar num gráfico, tirando conclusões. Importa também quem foi perguntado.' },
  { tipo: 'conta', frente: 'Entre 20 alunos, 8 vêm de ônibus e 6 a pé. Quantos por cento cada?', verso: '8 ÷ 20 = 40% e 6 ÷ 20 = 30%.' },
  { tipo: 'história', frente: 'Quem inventou o gráfico de barras e o que veio antes?', verso: 'William Playfair, em O Atlas Comercial e Político (exportações e importações da Escócia). Cerca de 300 anos antes, diagramas de A Latitude das Formas já eram "proto gráficos de barras".' },
  { tipo: 'história', frente: 'Que livro de 1954 ensina como gráficos enganam?', verso: 'Como mentir com estatística, de Darrell Huff, o trabalho mais antigo citado sobre gráficos enganosos.' },
]

export default cartoes
