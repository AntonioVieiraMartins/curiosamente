import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'classificacao',
  titulo: 'Classificação dos seres vivos',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'Por que a baleia não é um peixe, e como se organiza a diversidade da vida.',
  duracaoMin: 55,
  xp: 100,
  prerequisitos: ['fosseis-e-tempo'],
  conexoes: ['selecao-natural', 'virus-e-bacterias', 'dna-e-genes'],
  videoUrl: null,
  fontes: [
    { titulo: 'Taxonomy (biology), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Taxonomy_(biology)' },
    { titulo: 'Taxonomic rank, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Taxonomic_rank' },
    { titulo: 'Carl Linnaeus, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Carl_Linnaeus' },
    { titulo: 'Binomial nomenclature, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Binomial_nomenclature' },
    { titulo: 'Phylogenetics (cladistics), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Cladistics' },
    { titulo: 'Three-domain system, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Three-domain_system' },
    { titulo: 'Carl Woese, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Carl_Woese' },
    { titulo: 'Whale (evolution), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Evolution_of_cetaceans' },
    { titulo: 'Species, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Species' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
