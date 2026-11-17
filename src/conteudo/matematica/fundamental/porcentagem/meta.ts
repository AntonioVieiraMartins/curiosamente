import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'porcentagem',
  titulo: 'Porcentagem',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '6º ao 7º ano',
  resumo: '50% de desconto e mais 20% dá 70%? Não dá.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['fracoes', 'razao-e-proporcao', 'exponencial'],
  videoUrl: null,
  fontes: [
    { titulo: 'Percentage (história, aumentos e descontos, pontos percentuais), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Percentage' },
    { titulo: 'Percentagem, Wikipédia em português', url: 'https://pt.wikipedia.org/wiki/Percentagem' },
    { titulo: 'Percent sign (origem do símbolo %), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Percent_sign' },
    { titulo: 'Percentage point (ponto percentual), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Percentage_point' },
    { titulo: 'Plano Real (inflação mensal de 1993–1994 e lançamento do Real), Wikipédia em português', url: 'https://pt.wikipedia.org/wiki/Plano_Real' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática, anos finais', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/matematica' },
  ],
}

export default meta
