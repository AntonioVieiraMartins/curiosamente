import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'mol',
  titulo: 'Mol e quantidade de matéria',
  area: 'quimica',
  trilha: 'quimica',
  resumo: 'Como contar átomos sem contar um por um.',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['tabela-periodica'],
  conexoes: ['estequiometria', 'solucoes-e-concentracao', 'gases'],
  videoUrl: null,
  fontes: [
    { titulo: 'Mole (unit), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Mole_(unit)' },
    { titulo: 'Avogadro constant, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Avogadro_constant' },
    { titulo: 'Amedeo Avogadro, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Amedeo_Avogadro' },
    { titulo: 'Stanislao Cannizzaro, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Stanislao_Cannizzaro' },
    { titulo: 'Jean Baptiste Perrin, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Jean_Baptiste_Perrin' },
    { titulo: 'Molar volume, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Molar_volume' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
