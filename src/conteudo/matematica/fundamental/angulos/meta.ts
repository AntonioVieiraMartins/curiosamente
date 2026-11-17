import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'angulos',
  titulo: 'Ângulos',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '6º ano',
  resumo: 'Por que uma volta tem 360 graus?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['poligonos', 'plano-cartesiano', 'trigonometria'],
  videoUrl: null,
  fontes: [
    { titulo: 'Degree (angle) (por que 360, minutos e segundos de arco), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Degree_(angle)' },
    { titulo: 'Sexagesimal (sistema de base 60), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Sexagesimal' },
  ],
}

export default meta
