import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'binario',
  titulo: 'Binário',
  area: 'computacao',
  trilha: 'o-computador',
  resumo: 'Escrever números acendendo lâmpadas.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['potencias', 'hardware', 'matrizes'],
  videoUrl: null,
  fontes: [
    { titulo: 'Binary number (história, Leibniz, Boole, Shannon e conversão), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Binary_number' },
    { titulo: 'Bit (origem da palavra, byte, kilobyte e kibibyte), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Bit' },
    { titulo: 'ASCII (128 caracteres, 7 bits, 1963), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/ASCII' },
  ],
}

export default meta
