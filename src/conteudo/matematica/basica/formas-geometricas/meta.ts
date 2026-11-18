import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'formas-geometricas',
  titulo: 'Formas geométricas',
  area: 'matematica',
  trilha: 'basica',
  serie: '1º ao 5º ano',
  resumo: 'Quantos lados tem um círculo?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['medidas'],
  conexoes: ['angulos', 'pitagoras', 'tabelas-e-graficos'],
  videoUrl: null,
  fontes: [
    { titulo: 'Polygon (definição, nomes pelos lados, polígono regular, convexo e côncavo, soma dos ângulos internos, história), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Polygon' },
    { titulo: 'Shape (forma, figuras planas e sólidas, exemplos de cubo, esfera, cone e cilindro), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Shape' },
  ],
}

export default meta
