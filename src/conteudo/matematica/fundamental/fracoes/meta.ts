import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'fracoes',
  titulo: 'Frações',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '6º ano',
  resumo: 'Qual pedaço é maior: 1/3 ou 1/4 da pizza?',
  duracaoMin: 12,
  xp: 100,
  prerequisitos: [],
  conexoes: ['porcentagem', 'razao-e-proporcao', 'probabilidade-simples'],
  videoUrl: null,
  fontes: [
    { titulo: 'Fraction (história: frações egípcias, Índia, barra de fração), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Fraction' },
    { titulo: 'Fração, Wikipédia em português', url: 'https://pt.wikipedia.org/wiki/Fra%C3%A7%C3%A3o' },
    { titulo: 'Rhind Mathematical Papyrus (papiro de Rhind), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Rhind_Mathematical_Papyrus' },
    { titulo: 'Egyptian fraction (frações egípcias), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Egyptian_fraction' },
    { titulo: 'Liber Abaci (Fibonacci, 1202), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Liber_Abaci' },
    { titulo: 'A&W Restaurants (o hambúrguer de 1/3 de libra, segundo as memórias de A. Alfred Taubman, 2007), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/A%26W_Restaurants' },
  ],
}

export default meta
