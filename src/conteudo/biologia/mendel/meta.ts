import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'mendel',
  titulo: 'As ervilhas de Mendel',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'Por que filhos se parecem com os pais sem serem cópias?',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['divisao-celular'],
  conexoes: ['heredogramas', 'mutacoes', 'probabilidade-simples'],
  videoUrl: null,
  fontes: [
    { titulo: 'Gregor Mendel, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Gregor_Mendel' },
    { titulo: 'Mendelian inheritance, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Mendelian_inheritance' },
    { titulo: 'Dominance (genetics), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Dominance_(genetics)' },
    { titulo: 'Punnett square, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Punnett_square' },
    { titulo: 'Test cross, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Test_cross' },
    { titulo: 'Incomplete dominance, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Incomplete_dominance' },
    { titulo: 'Mendelian paradox, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Mendelian_paradox' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
