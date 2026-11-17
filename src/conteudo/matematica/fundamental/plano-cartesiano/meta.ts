import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'plano-cartesiano',
  titulo: 'Plano cartesiano',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '6º ano',
  resumo: 'Batalha naval é matemática.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['numeros-negativos'],
  conexoes: ['simetria', 'funcao-afim', 'geometria-analitica'],
  videoUrl: null,
  fontes: [
    { titulo: 'Cartesian coordinate system (história, eixos e quadrantes), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Cartesian_coordinate_system' },
  ],
}

export default meta
