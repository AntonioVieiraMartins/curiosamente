import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'moleculas-e-polaridade',
  titulo: 'Moléculas e polaridade',
  area: 'quimica',
  trilha: 'quimica',
  resumo: 'Por que óleo e água não se misturam?',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['ligacoes-quimicas'],
  conexoes: ['solucoes-e-concentracao', 'quimica-da-vida', 'dna-e-genes'],
  videoUrl: null,
  fontes: [
    { titulo: 'Chemical polarity, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Chemical_polarity' },
    { titulo: 'VSEPR theory, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/VSEPR_theory' },
    { titulo: 'Intermolecular force, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Intermolecular_force' },
    { titulo: 'Hydrogen bond, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Hydrogen_bond' },
    { titulo: 'London dispersion force, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/London_dispersion_force' },
    { titulo: 'Properties of water, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Properties_of_water' },
    { titulo: 'Micelle, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Micelle' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
