import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'expressoes-algebricas',
  titulo: 'Letras na matemática',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '7º ano',
  resumo: 'Por que trocar números por letras?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['equacoes-1-grau', 'inequacoes', 'padroes-e-sequencias', 'produtos-notaveis'],
  videoUrl: null,
  fontes: [
    { titulo: 'Variable (mathematics), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Variable_(mathematics)' },
    { titulo: 'History of algebra (Diofanto, Al-Khwarizmi, Viète e Descartes), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/History_of_algebra' },
    { titulo: 'Distributive property, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Distributive_property' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática, anos finais', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/matematica' },
  ],
}

export default meta
