import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'banco-de-dados',
  titulo: 'Banco de dados',
  area: 'computacao',
  trilha: 'sistema-web',
  resumo: 'Planilhas que conversam entre si.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['apis-e-json', 'senhas-e-hash', 'front-end-e-back-end'],
  videoUrl: null,
  fontes: [
    { titulo: 'Database (história, tipos, ACID, índices, backup e segurança), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Database' },
    { titulo: 'Relational database (Codd 1970, tabelas, chaves primária e estrangeira, normalização), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Relational_database' },
    { titulo: 'SQL (Chamberlin e Boyce, SEQUEL, padrões ANSI 1986 e ISO 1987), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/SQL' },
  ],
}

export default meta
