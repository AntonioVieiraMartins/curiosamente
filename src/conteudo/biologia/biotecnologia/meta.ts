import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'biotecnologia',
  titulo: 'Biotecnologia e edição do DNA',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'Insulina feita por bactérias e o que é o CRISPR.',
  duracaoMin: 55,
  xp: 100,
  prerequisitos: ['mutacoes'],
  conexoes: ['selecao-natural', 'virus-e-bacterias', 'potencias'],
  videoUrl: null,
  fontes: [
    { titulo: 'Biotechnology, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Biotechnology' },
    { titulo: 'Restriction enzyme, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Restriction_enzyme' },
    { titulo: 'Recombinant DNA, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Recombinant_DNA' },
    { titulo: 'Insulin, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Insulin' },
    { titulo: 'Polymerase chain reaction, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Polymerase_chain_reaction' },
    { titulo: 'Genetic fingerprinting, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Genetic_fingerprinting' },
    { titulo: 'Dolly (sheep), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Dolly_(sheep)' },
    { titulo: 'CRISPR, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/CRISPR' },
    { titulo: 'Genetically modified organism, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Genetically_modified_organism' },
    { titulo: 'He Jiankui, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/He_Jiankui' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
