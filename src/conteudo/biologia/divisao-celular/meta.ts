import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'divisao-celular',
  titulo: 'Divisão celular: mitose e meiose',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'Como uma célula vira duas, e por que irmãos não são cópias.',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['dna-e-genes'],
  conexoes: ['mendel', 'mutacoes', 'potencias'],
  videoUrl: null,
  fontes: [
    { titulo: 'Mitosis, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Mitosis' },
    { titulo: 'Meiosis, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Meiosis' },
    { titulo: 'Cell cycle, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Cell_cycle' },
    { titulo: 'Walther Flemming, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Walther_Flemming' },
    { titulo: 'Crossing over, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Chromosomal_crossover' },
    { titulo: 'Nondisjunction, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Nondisjunction' },
    { titulo: 'Hayflick limit, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Hayflick_limit' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
