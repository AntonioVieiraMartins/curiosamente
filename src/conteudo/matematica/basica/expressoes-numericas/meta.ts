import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'expressoes-numericas',
  titulo: 'Expressões numéricas',
  area: 'matematica',
  trilha: 'basica',
  serie: '4º ao 5º ano',
  resumo: '2 + 3 × 4 dá 20 ou 14?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['multiplicacao', 'divisao'],
  conexoes: ['numeros-decimais', 'expressoes-algebricas', 'potencias'],
  videoUrl: null,
  fontes: [
    { titulo: 'Order of operations (ordem das operações, PEMDAS/BODMAS, história, calculadoras), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Order_of_operations' },
    { titulo: 'Bracket (parênteses, colchetes e chaves na matemática, agrupamento), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Bracket' },
  ],
}

export default meta
