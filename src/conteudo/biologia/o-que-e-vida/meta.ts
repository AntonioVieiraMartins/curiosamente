import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'o-que-e-vida',
  titulo: 'O que é vida?',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'Um vírus está vivo? Os cientistas ainda discutem.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['celula', 'virus-e-bacterias'],
  videoUrl: null,
  fontes: [
    { titulo: 'Life, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Life' },
    { titulo: 'Spontaneous generation, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Spontaneous_generation' },
    { titulo: 'Francesco Redi, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Francesco_Redi' },
    { titulo: 'Louis Pasteur, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Louis_Pasteur' },
    { titulo: 'Miller–Urey experiment, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Miller%E2%80%93Urey_experiment' },
    { titulo: 'Virus, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Virus' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
