import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'logaritmo',
  titulo: 'Logaritmo',
  area: 'matematica',
  trilha: 'medio',
  serie: '1º ano EM',
  resumo: 'Quantas vezes eu dobrei?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['exponencial'],
  conexoes: ['exponencial', 'progressoes', 'binario'],
  videoUrl: null,
  fontes: [
    { titulo: 'Logarithm (definição, propriedades, bases 10, e e 2, Napier 1614, Briggs 1617, Euler, régua de cálculo, escalas e aplicações), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Logarithm' },
  ],
}

export default meta
