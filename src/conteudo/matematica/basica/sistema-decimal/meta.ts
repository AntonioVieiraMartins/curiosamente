import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'sistema-decimal',
  titulo: 'Sistema decimal',
  area: 'matematica',
  trilha: 'basica',
  serie: '1º ao 3º ano',
  resumo: 'Com só dez algarismos dá para escrever qualquer número. Como?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['adicao-e-subtracao', 'numeros-decimais', 'binario'],
  videoUrl: null,
  fontes: [
    { titulo: 'Hindu–Arabic numeral system (origem na Índia, zero, Bakhshali, Gwalior 876, Al-Khwarizmi, Europa), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Hindu%E2%80%93Arabic_numeral_system' },
    { titulo: 'Positional notation (valor posicional, base, babilônios, binário, maias), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Positional_notation' },
  ],
}

export default meta
