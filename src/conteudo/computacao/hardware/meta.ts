import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'hardware',
  titulo: 'Hardware: CPU, RAM e disco',
  area: 'computacao',
  trilha: 'o-computador',
  resumo: 'O computador como uma cozinha: cozinheiro, bancada e despensa.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['binario', 'sistema-operacional', 'potencias'],
  videoUrl: null,
  fontes: [
    { titulo: 'Central processing unit (ciclo de instruções, von Neumann, Intel 4004, múltiplos núcleos), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Central_processing_unit' },
    { titulo: 'Random-access memory (volátil, DRAM de Dennard em 1966, Intel 1103, SRAM e cache), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Random-access_memory' },
    { titulo: 'Hard disk drive (IBM 350 RAMAC, rotações por minuto, HD e SSD), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Hard_disk_drive' },
  ],
}

export default meta
