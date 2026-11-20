import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'estados-da-materia',
  titulo: 'Estados da matéria',
  area: 'quimica',
  trilha: 'quimica',
  resumo: 'Por que a água vira gelo e vira vapor?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['materia-e-propriedades'],
  conexoes: ['temperatura-e-calor', 'gases'],
  videoUrl: null,
  fontes: [
    { titulo: 'State of matter, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/State_of_matter' },
    { titulo: 'Phase transition, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Phase_transition' },
    { titulo: 'Latent heat, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Latent_heat' },
    { titulo: 'Boiling point, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Boiling_point' },
    { titulo: 'Plasma (physics), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Plasma_(physics)' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
