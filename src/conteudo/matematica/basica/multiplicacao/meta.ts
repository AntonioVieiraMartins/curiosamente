import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'multiplicacao',
  titulo: 'Multiplicação e tabuada',
  area: 'matematica',
  trilha: 'basica',
  serie: '2º ao 4º ano',
  resumo: 'Dá para entender a tabuada em vez de decorar.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['adicao-e-subtracao'],
  conexoes: ['divisao', 'potencias', 'multiplos-e-divisores'],
  videoUrl: null,
  fontes: [
    { titulo: 'Multiplication (termos, soma repetida, propriedades, história, sinal de vezes), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Multiplication' },
    { titulo: 'Multiplication table (babilônios, Chinês em 305 a.C., Pitágoras, simetria, ensino), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Multiplication_table' },
  ],
}

export default meta
