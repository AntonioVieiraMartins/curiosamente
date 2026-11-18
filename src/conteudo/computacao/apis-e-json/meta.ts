import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'apis-e-json',
  titulo: 'APIs e JSON',
  area: 'computacao',
  trilha: 'sistema-web',
  resumo: 'O cardápio que um sistema oferece para outro.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['front-end-e-back-end', 'http-https', 'banco-de-dados'],
  videoUrl: null,
  fontes: [
    { titulo: 'API (definição, história, APIs web e de bibliotecas, documentação, estabilidade), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/API' },
    { titulo: 'JSON (criação, padrões, tipos de dados, regras de sintaxe, usos), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/JSON' },
    { titulo: 'REST (Roy Fielding, restrições de arquitetura, recursos), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/REST' },
  ],
}

export default meta
