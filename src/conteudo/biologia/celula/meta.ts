import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'celula',
  titulo: 'A célula',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'Somos feitos de trilhões de minúsculas fábricas.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['o-que-e-vida'],
  conexoes: ['dna-e-genes', 'microscopio', 'quimica-da-vida'],
  videoUrl: null,
  fontes: [
    { titulo: 'Cell (biology), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Cell_(biology)' },
    { titulo: 'Cell theory, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Cell_theory' },
    { titulo: 'Organelle, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Organelle' },
    { titulo: 'Prokaryote, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Prokaryote' },
    { titulo: 'Eukaryote, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Eukaryote' },
    { titulo: 'Robert Hooke, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Robert_Hooke' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
