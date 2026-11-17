import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'razao-e-proporcao',
  titulo: 'Razão e proporção',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '7º ano',
  resumo: 'A receita é para 3. A festa é para 30.',
  duracaoMin: 12,
  xp: 100,
  prerequisitos: ['fracoes'],
  conexoes: ['fracoes', 'porcentagem', 'funcao-afim'],
  videoUrl: null,
  fontes: [
    { titulo: 'Razão (matemática), Wikipédia em português', url: 'https://pt.wikipedia.org/wiki/Raz%C3%A3o_(matem%C3%A1tica)' },
    { titulo: 'Proportionality (mathematics), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Proportionality_(mathematics)' },
    { titulo: 'Cross-multiplication (regra de três e sua história), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Cross-multiplication' },
    { titulo: 'Thales of Miletus (a medida da pirâmide pela sombra), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Thales_of_Miletus' },
    { titulo: "Euclid's Elements (livro V: teoria das proporções), Wikipedia em inglês", url: 'https://en.wikipedia.org/wiki/Euclid%27s_Elements' },
    { titulo: 'Golden ratio (seções sobre arte e observações contestadas), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Golden_ratio' },
  ],
}

export default meta
