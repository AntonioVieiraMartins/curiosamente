import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'inequacoes',
  titulo: 'Inequações',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '7º ano',
  resumo: 'Quantas pizzas posso pedir sem passar de R$ 100?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['equacoes-1-grau'],
  conexoes: ['equacoes-1-grau', 'expressoes-algebricas', 'sistemas-de-equacoes', 'funcao-afim'],
  videoUrl: null,
  fontes: [
    { titulo: 'Inequality (mathematics) (símbolos de Harriot e Bouguer), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Inequality_(mathematics)' },
    { titulo: 'Thomas Harriot, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Thomas_Harriot' },
    { titulo: 'Interval (mathematics), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Interval_(mathematics)' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática, anos finais', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/matematica' },
  ],
}

export default meta
