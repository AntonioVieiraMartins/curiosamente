import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'adicao-e-subtracao',
  titulo: 'Adição e subtração',
  area: 'matematica',
  trilha: 'basica',
  serie: '1º ao 3º ano',
  resumo: 'O "vai um" explicado com palitos e caixinhas.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['sistema-decimal'],
  conexoes: ['sistema-decimal', 'multiplicacao', 'numeros-negativos'],
  videoUrl: null,
  fontes: [
    { titulo: 'Addition (termos, propriedades, vai um, contar adiante, Brahmagupta 628, Pascal 1642, ábaco), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Addition' },
    { titulo: 'Subtraction (termos, não é comutativa, empréstimo, operação inversa, reta numérica), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Subtraction' },
  ],
}

export default meta
