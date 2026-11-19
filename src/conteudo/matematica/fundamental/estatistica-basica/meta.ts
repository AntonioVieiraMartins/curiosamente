import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'estatistica-basica',
  titulo: 'Média, mediana e moda',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '7º ano',
  resumo: 'Quando a média engana.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['graficos-e-pesquisas', 'probabilidade-simples', 'estatistica'],
  videoUrl: null,
  fontes: [
    { titulo: 'Arithmetic mean, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Arithmetic_mean' },
    { titulo: 'Median (Galton usa o termo em 1881), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Median' },
    { titulo: 'Mode (statistics) (Karl Pearson, 1895), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Mode_(statistics)' },
    { titulo: 'Adolphe Quetelet (o homem médio), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Adolphe_Quetelet' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática, anos finais', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/matematica' },
  ],
}

export default meta
