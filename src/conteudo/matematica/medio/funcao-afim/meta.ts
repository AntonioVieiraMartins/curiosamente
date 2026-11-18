import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'funcao-afim',
  titulo: 'Função afim',
  area: 'matematica',
  trilha: 'medio',
  serie: '1º ano EM',
  resumo: 'Quanto vai custar essa corrida de táxi?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['funcoes'],
  conexoes: ['funcao-quadratica', 'geometria-analitica', 'sistemas-lineares'],
  videoUrl: null,
  fontes: [
    { titulo: 'Linear function (forma ax + b, inclinação, intercepto, reta, nome "afim"), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Linear_function' },
    { titulo: 'Slope (razão entre variação vertical e horizontal, sinal, tangente, inclinação de ruas, letra m), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Slope' },
    { titulo: 'Cartesian coordinate system (Descartes 1637, Fermat, Oresme, eixos e origem), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Cartesian_coordinate_system' },
  ],
}

export default meta
