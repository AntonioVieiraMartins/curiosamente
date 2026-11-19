import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'limites',
  titulo: 'Limites e continuidade',
  area: 'matematica',
  trilha: 'avancada',
  serie: 'Cálculo 1',
  resumo: 'Chegar cada vez mais perto sem nunca tocar.',
  duracaoMin: 45,
  xp: 100,
  prerequisitos: ['funcoes'],
  conexoes: ['funcoes', 'progressoes', 'funcao-afim'],
  videoUrl: null,
  fontes: [
    { titulo: 'Limit of a function (história com Bolzano, Cauchy e Weierstrass, definição épsilon-delta, limites laterais, limites no infinito, leis dos limites, sen(x)/x), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Limit_of_a_function' },
    { titulo: 'Continuous function (continuidade num ponto, tipos de descontinuidade, teorema do valor intermediário, exemplos), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Continuous_function' },
    { titulo: 'Zeno’s paradoxes (Zenão de Eleia, Aquiles e a tartaruga, dicotomia, série 1/2 + 1/4 + ...), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Zeno%27s_paradoxes' },
  ],
}

export default meta
