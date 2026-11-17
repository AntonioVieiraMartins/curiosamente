import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'multiplos-e-divisores',
  titulo: 'Múltiplos, divisores, MMC e MDC',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '6º ano',
  resumo: 'Quando dois semáforos piscam juntos de novo?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['fracoes', 'numeros-primos', 'razao-e-proporcao'],
  videoUrl: null,
  fontes: [
    { titulo: 'Euclidean algorithm (história e exemplo), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Euclidean_algorithm' },
    { titulo: 'Greatest common divisor, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Greatest_common_divisor' },
    { titulo: 'Least common multiple, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Least_common_multiple' },
    { titulo: 'Divisibility rule, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Divisibility_rule' },
  ],
}

export default meta
