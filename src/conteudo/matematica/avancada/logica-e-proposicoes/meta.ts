import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'logica-e-proposicoes',
  titulo: 'Lógica e proposições',
  area: 'matematica',
  trilha: 'avancada',
  resumo: 'Se chove, a rua molha. A rua molhou: choveu?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['binario', 'paradoxos-e-limites-da-logica'],
  videoUrl: null,
  fontes: [
    { titulo: 'Propositional calculus, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Propositional_calculus' },
    { titulo: 'Truth table, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Truth_table' },
    { titulo: 'Material conditional, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Material_conditional' },
    { titulo: 'De Morgan\'s laws, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/De_Morgan%27s_laws' },
    { titulo: 'Wason selection task, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Wason_selection_task' },
    { titulo: 'Boolean algebra, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Boolean_algebra' },
    { titulo: 'Syllogism, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Syllogism' },
    { titulo: 'Claude Shannon, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Claude_Shannon' },
  ],
}

export default meta
