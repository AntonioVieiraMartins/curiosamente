import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'tabela-periodica',
  titulo: 'Tabela periódica',
  area: 'quimica',
  trilha: 'quimica',
  resumo: 'Um mapa dos elementos com padrões escondidos.',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['modelos-atomicos'],
  conexoes: ['ligacoes-quimicas', 'mol'],
  videoUrl: null,
  fontes: [
    { titulo: 'Periodic table, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Periodic_table' },
    { titulo: 'Dmitri Mendeleev, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Dmitri_Mendeleev' },
    { titulo: 'Henry Moseley, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Henry_Moseley' },
    { titulo: 'Noble gas, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Noble_gas' },
    { titulo: 'Electronegativity, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Electronegativity' },
    { titulo: 'Atomic radius, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Atomic_radius' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
