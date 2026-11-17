import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'terminal',
  titulo: 'Terminal, arquivos e caminhos',
  area: 'computacao',
  trilha: 'o-computador',
  resumo: 'Comandos sem medo da tela preta.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['sistema-operacional', 'como-a-internet-funciona', 'binario'],
  videoUrl: null,
  fontes: [
    { titulo: 'Command-line interface (história, comando, argumento, opção e prompt), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Command-line_interface' },
    { titulo: 'Path (computing) (caminho absoluto e relativo, separadores, raiz, ., .. e ~), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Path_(computing)' },
    { titulo: 'PowerShell (lançamento em 2006, cmdlets Verb-Noun, aliases como ls e cd), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/PowerShell' },
  ],
}

export default meta
