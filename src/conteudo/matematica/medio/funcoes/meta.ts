import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'funcoes',
  titulo: 'Funções',
  area: 'matematica',
  trilha: 'medio',
  serie: '1º ano EM',
  resumo: 'Uma máquina que transforma números.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['plano-cartesiano', 'equacoes-1-grau'],
  conexoes: ['funcao-afim', 'funcao-quadratica', 'exponencial'],
  videoUrl: null,
  fontes: [
    { titulo: 'Function (mathematics) (definição, domínio, imagem, notação f(x), gráfico, composição, história), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Function_(mathematics)' },
  ],
}

export default meta
