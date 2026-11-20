import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'atomo',
  titulo: 'O átomo',
  area: 'quimica',
  trilha: 'quimica',
  resumo: 'Do "indivisível" dos gregos ao átomo que hoje conhecemos.',
  duracaoMin: 45,
  xp: 100,
  prerequisitos: ['misturas-e-separacao'],
  conexoes: ['modelos-atomicos', 'notacao-cientifica'],
  videoUrl: null,
  fontes: [
    { titulo: 'Atom, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Atom' },
    { titulo: 'Atomic theory, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Atomic_theory' },
    { titulo: 'Isotope, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Isotope' },
    { titulo: 'Ion, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Ion' },
    { titulo: 'Brownian motion, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Brownian_motion' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
