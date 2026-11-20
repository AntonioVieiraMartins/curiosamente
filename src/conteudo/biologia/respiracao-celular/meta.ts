import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'respiracao-celular',
  titulo: 'Respiração celular',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'A bateria de cada célula: de onde vem a energia do corpo.',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['fotossintese'],
  conexoes: ['energia-nas-reacoes', 'circulacao', 'respiracao'],
  videoUrl: null,
  fontes: [
    { titulo: 'Cellular respiration, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Cellular_respiration' },
    { titulo: 'Adenosine triphosphate, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Adenosine_triphosphate' },
    { titulo: 'Glycolysis, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Glycolysis' },
    { titulo: 'Citric acid cycle, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Citric_acid_cycle' },
    { titulo: 'Fermentation, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Fermentation' },
    { titulo: 'Mitochondrion, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Mitochondrion' },
    { titulo: 'Antoine Lavoisier, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Antoine_Lavoisier' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
