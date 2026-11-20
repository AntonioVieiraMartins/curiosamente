import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'materia-e-propriedades',
  titulo: 'Matéria e suas propriedades',
  area: 'quimica',
  trilha: 'quimica',
  resumo: 'Por que o gelo boia na água? A densidade explica.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['razao-e-proporcao', 'medidas'],
  videoUrl: null,
  fontes: [
    { titulo: 'Matter, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Matter' },
    { titulo: 'Density, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Density' },
    { titulo: 'Archimedes\' principle, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Archimedes%27_principle' },
    { titulo: 'Properties of water, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Properties_of_water' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
