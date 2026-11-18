import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'tempo-e-horas',
  titulo: 'Tempo e horas',
  area: 'matematica',
  trilha: 'basica',
  serie: '3º ao 5º ano',
  resumo: 'Por que a hora tem 60 minutos, e não 100?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['medidas'],
  conexoes: ['adicao-e-subtracao', 'angulos', 'numeros-negativos'],
  videoUrl: null,
  fontes: [
    { titulo: 'Hour (horas sazonais, egípcios, Hipparchus, origem babilônica dos 60 minutos, relógio de 24 horas, 3.600 segundos), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Hour' },
    { titulo: 'Time zone (definição, UTC−12 a UTC+14, horário de verão, fusos do Brasil e da Índia), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Time_zone' },
  ],
}

export default meta
