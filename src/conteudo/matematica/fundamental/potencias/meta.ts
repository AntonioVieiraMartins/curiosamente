import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'potencias',
  titulo: 'Potências',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '6º ano',
  resumo: 'Grãos de arroz dobrando num tabuleiro de xadrez.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['numeros-negativos'],
  conexoes: ['razao-e-proporcao', 'binario', 'exponencial'],
  videoUrl: null,
  fontes: [
    { titulo: 'Wheat and chessboard problem, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Wheat_and_chessboard_problem' },
    { titulo: 'Exponentiation (história, terminologia e propriedades), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Exponentiation' },
    { titulo: 'Scientific notation, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Scientific_notation' },
    { titulo: 'The Sand Reckoner (Arquimedes), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/The_Sand_Reckoner' },
  ],
}

export default meta
