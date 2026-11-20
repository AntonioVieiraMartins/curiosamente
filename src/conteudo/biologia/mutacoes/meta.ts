import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'mutacoes',
  titulo: 'Mutações',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'Um erro de cópia pode ser ruim, neutro ou até útil.',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['dna-e-genes'],
  conexoes: ['biotecnologia', 'selecao-natural', 'heredogramas'],
  videoUrl: null,
  fontes: [
    { titulo: 'Mutation, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Mutation' },
    { titulo: 'Point mutation, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Point_mutation' },
    { titulo: 'Frameshift mutation, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Frameshift_mutation' },
    { titulo: 'Sickle cell disease, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Sickle_cell_disease' },
    { titulo: 'Chromosomal rearrangement, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Chromosomal_rearrangement' },
    { titulo: 'Polyploidy, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Polyploidy' },
    { titulo: 'Hermann Joseph Muller, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Hermann_Joseph_Muller' },
    { titulo: 'Ames test, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Ames_test' },
    { titulo: 'Paternal age effect, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Paternal_age_effect' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
