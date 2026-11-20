import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'modelos-atomicos',
  titulo: 'Modelos atômicos',
  area: 'quimica',
  trilha: 'quimica',
  resumo: 'De Dalton a Bohr: como imaginar o que ninguém vê.',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['atomo'],
  conexoes: ['tabela-periodica', 'ligacoes-quimicas'],
  videoUrl: null,
  fontes: [
    { titulo: 'Atomic theory, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Atomic_theory' },
    { titulo: 'Rutherford model, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Rutherford_model' },
    { titulo: 'Geiger–Marsden experiments, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Geiger%E2%80%93Marsden_experiments' },
    { titulo: 'Bohr model, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Bohr_model' },
    { titulo: 'Atomic orbital, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Atomic_orbital' },
    { titulo: 'Flame test, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Flame_test' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
