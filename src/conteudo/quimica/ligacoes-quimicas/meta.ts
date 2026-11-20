import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'ligacoes-quimicas',
  titulo: 'Ligações químicas',
  area: 'quimica',
  trilha: 'quimica',
  resumo: 'Por que sal e açúcar se comportam tão diferente?',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['tabela-periodica'],
  conexoes: ['moleculas-e-polaridade', 'funcoes-inorganicas', 'quimica-do-carbono'],
  videoUrl: null,
  fontes: [
    { titulo: 'Chemical bond, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Chemical_bond' },
    { titulo: 'Ionic bonding, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Ionic_bonding' },
    { titulo: 'Covalent bond, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Covalent_bond' },
    { titulo: 'Metallic bonding, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Metallic_bonding' },
    { titulo: 'Octet rule, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Octet_rule' },
    { titulo: 'Gilbert N. Lewis, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Gilbert_N._Lewis' },
    { titulo: 'Electronegativity, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Electronegativity' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
