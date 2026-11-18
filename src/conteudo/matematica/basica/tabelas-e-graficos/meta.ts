import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'tabelas-e-graficos',
  titulo: 'Tabelas e gráficos',
  area: 'matematica',
  trilha: 'basica',
  serie: '1º ao 5º ano',
  resumo: 'Ler um gráfico antes de acreditar nele.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['numeros-decimais'],
  conexoes: ['porcentagem', 'razao-e-proporcao', 'formas-geometricas'],
  videoUrl: null,
  fontes: [
    { titulo: 'Bar chart (definição, barras verticais e horizontais, Playfair, primeiros gráficos de barras, diferença para o histograma, eixo cortado), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Bar_chart' },
    { titulo: 'Misleading graph (eixo cortado, dados omitidos, escalas diferentes, pizza em 3D, pictogramas, escala logarítmica, livro de Darrell Huff, 1954), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Misleading_graph' },
  ],
}

export default meta
