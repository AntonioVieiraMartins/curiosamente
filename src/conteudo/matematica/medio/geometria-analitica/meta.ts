import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'geometria-analitica',
  titulo: 'Geometria analítica',
  area: 'matematica',
  trilha: 'medio',
  serie: '3º ano EM',
  resumo: 'Como o GPS calcula a distância?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['plano-cartesiano', 'pitagoras', 'funcao-afim'],
  conexoes: ['vetores', 'secoes-conicas', 'funcao-quadratica'],
  videoUrl: null,
  fontes: [
    { titulo: 'Analytic geometry, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Analytic_geometry' },
    { titulo: 'Cartesian coordinate system, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Cartesian_coordinate_system' },
    { titulo: 'La Géométrie, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/La_G%C3%A9om%C3%A9trie' },
    { titulo: 'Slope, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Slope' },
    { titulo: 'Distance from a point to a line, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line' },
    { titulo: 'Shoelace formula, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Shoelace_formula' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática, ensino médio', url: 'http://basenacionalcomum.mec.gov.br/abase/#medio/matematica' },
  ],
}

export default meta
