import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'circunferencia-e-pi',
  titulo: 'Circunferência e Pi',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '7º ano',
  resumo: 'Toda roda esconde o mesmo número.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['areas-e-perimetros', 'volume', 'trigonometria'],
  videoUrl: null,
  fontes: [
    { titulo: 'Pi, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Pi' },
    { titulo: 'Approximations of π (papiro de Rhind, Zu Chongzhi), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Approximations_of_%CF%80' },
    { titulo: 'Archimedes (aproximação do π com polígonos de 96 lados), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Archimedes' },
    { titulo: 'Buffon\'s needle problem, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Buffon%27s_needle_problem' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática, anos finais', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/matematica' },
  ],
}

export default meta
