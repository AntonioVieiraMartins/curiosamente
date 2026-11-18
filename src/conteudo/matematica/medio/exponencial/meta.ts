import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'exponencial',
  titulo: 'Exponencial',
  area: 'matematica',
  trilha: 'medio',
  serie: '1º ano EM',
  resumo: 'Dobrar uma folha 42 vezes alcança a Lua?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['funcoes', 'potencias'],
  conexoes: ['logaritmo', 'progressoes', 'matematica-financeira'],
  videoUrl: null,
  fontes: [
    { titulo: 'Exponential growth (definição, fórmula, tempo de dobrar, regra do 70, exemplos, crescimento logístico, tabuleiro de xadrez, nenúfar), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Exponential_growth' },
  ],
}

export default meta
