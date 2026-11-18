import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'numeros-decimais',
  titulo: 'Números decimais',
  area: 'matematica',
  trilha: 'basica',
  serie: '4º ao 5º ano',
  resumo: 'R$ 2,50 + R$ 1,75 sem calculadora.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['sistema-decimal', 'divisao'],
  conexoes: ['porcentagem', 'fracoes', 'medidas'],
  videoUrl: null,
  fontes: [
    { titulo: 'Decimal (frações decimais, finitos e periódicos, história de Sunzi a Stevin e Napier), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Decimal' },
    { titulo: 'Decimal separator (vírgula e ponto pelo mundo, agrupamento de algarismos, história), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Decimal_separator' },
  ],
}

export default meta
