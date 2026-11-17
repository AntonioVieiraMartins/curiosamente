import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'sistema-operacional',
  titulo: 'Sistema operacional',
  area: 'computacao',
  trilha: 'o-computador',
  resumo: 'O gerente que ninguém vê trabalhar.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['hardware', 'terminal', 'binario'],
  videoUrl: null,
  fontes: [
    { titulo: 'Operating system (kernel, processos, memória, arquivos, drivers, iOS e Android), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Operating_system' },
    { titulo: 'Process (computing) (programa x processo, estados, troca de contexto, threads), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Process_(computing)' },
    { titulo: 'Unix (Bell Labs 1969, Multics, nome Unics, reescrito em C em 1973), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Unix' },
    { titulo: 'Linux (kernel lançado em 17/9/1991 por Linus Torvalds, distribuições, GNU), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Linux' },
  ],
}

export default meta
