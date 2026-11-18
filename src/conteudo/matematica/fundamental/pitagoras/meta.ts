import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'pitagoras',
  titulo: 'Teorema de Pitágoras',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '9º ano',
  resumo: 'Uma prova que se faz arrastando quadrados.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['plano-cartesiano', 'angulos', 'equacoes-1-grau', 'geometria-analitica'],
  videoUrl: null,
  fontes: [
    { titulo: 'Pythagorean theorem (Plimpton 322, Baudhayana, Zhoubi Suanjing, Euclides, Garfield, recíproco), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Pythagorean_theorem' },
    { titulo: 'Pythagorean triple (fórmula de Euclides, ternos primitivos), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Pythagorean_triple' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática, anos finais', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/matematica' },
  ],
}

export default meta
