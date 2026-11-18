import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'git-e-github',
  titulo: 'Git e GitHub',
  area: 'computacao',
  trilha: 'hospedagem',
  resumo: 'Salvar o jogo do código e voltar no tempo.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['deploy', 'senhas-e-hash', 'terminal'],
  videoUrl: null,
  fontes: [
    { titulo: 'Git (criação em 2005, snapshots, commits, hashes, ramos, comandos), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Git' },
    { titulo: 'GitHub (fundação, pull requests, forks, Microsoft 2018, Git contra GitHub), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/GitHub' },
    { titulo: 'Version control (história de SCCS a Git, centralizado e distribuído, conflitos), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Version_control' },
  ],
}

export default meta
