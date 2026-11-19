import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'areas-e-perimetros',
  titulo: 'Áreas e perímetros',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '8º ano',
  resumo: 'Com a mesma cerca, qual terreno é o maior?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['volume', 'circunferencia-e-pi', 'poligonos'],
  videoUrl: null,
  fontes: [
    { titulo: 'Area, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Area' },
    { titulo: 'Perimeter, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Perimeter' },
    { titulo: 'Isoperimetric inequality (problema de Dido), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Isoperimetric_inequality' },
    { titulo: 'Heron\'s formula, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Heron%27s_formula' },
    { titulo: 'Koch snowflake, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Koch_snowflake' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática, anos finais', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/matematica' },
  ],
}

export default meta
