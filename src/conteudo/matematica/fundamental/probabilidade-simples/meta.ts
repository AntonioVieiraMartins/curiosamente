import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'probabilidade-simples',
  titulo: 'Probabilidade simples',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '7º ano',
  resumo: 'Jogue uma moeda mil vezes. O que acontece?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['fracoes', 'porcentagem', 'monty-hall'],
  videoUrl: null,
  fontes: [
    { titulo: 'Probability, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Probability' },
    { titulo: 'History of probability, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/History_of_probability' },
    { titulo: 'Problem of points (Pascal e Fermat, 1654), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Problem_of_points' },
    { titulo: 'Law of large numbers (Bernoulli, 1713), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Law_of_large_numbers' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática, anos finais', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/matematica' },
  ],
}

export default meta
