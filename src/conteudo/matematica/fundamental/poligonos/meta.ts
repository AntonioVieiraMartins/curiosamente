import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'poligonos',
  titulo: 'Triângulos e polígonos',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '7º ano',
  resumo: 'Por que as abelhas usam hexágonos?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['angulos'],
  conexoes: ['construcoes-geometricas', 'congruencia', 'pitagoras'],
  videoUrl: null,
  fontes: [
    { titulo: 'Honeycomb conjecture (Papo, Thomas Hales, 1999), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Honeycomb_conjecture' },
    { titulo: 'Heptadecagon (Gauss, 1796), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Heptadecagon' },
    { titulo: 'Polygon, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Polygon' },
    { titulo: 'Triangle inequality, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Triangle_inequality' },
    { titulo: 'Euclid\'s Elements, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Euclid%27s_Elements' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática, anos finais', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/matematica' },
  ],
}

export default meta
