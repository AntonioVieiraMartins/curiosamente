import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'fotossintese',
  titulo: 'Fotossíntese',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'A planta fabrica a própria comida com luz, água e ar.',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['membrana-e-osmose'],
  conexoes: ['respiracao-celular', 'reacoes-quimicas', 'plantas-e-sementes'],
  videoUrl: null,
  fontes: [
    { titulo: 'Photosynthesis, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Photosynthesis' },
    { titulo: 'Jan Baptist van Helmont, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Jan_Baptist_van_Helmont' },
    { titulo: 'Joseph Priestley, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Joseph_Priestley' },
    { titulo: 'Jan Ingenhousz, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Jan_Ingenhousz' },
    { titulo: 'Chloroplast, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Chloroplast' },
    { titulo: 'Calvin cycle, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Calvin_cycle' },
    { titulo: 'Great Oxidation Event, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Great_Oxidation_Event' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
